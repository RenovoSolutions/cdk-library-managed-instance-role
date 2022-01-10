import { aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ManagedInstanceRoleProps {
  /**
   * The managed policies to apply to the role in addition to the default policies.
   */
  readonly managedPolicies?: iam.ManagedPolicy[];
  /**
   * Should the role include directory service access with SSM.
   */
  readonly domainJoinEnabled?: boolean;
  /**
   * Should the role include SSM management. By default if domainJoinEnabled is true then this role is always included.
   */
  readonly ssmManagementEnabled?: boolean;
}

export class ManagedInstanceRole extends Construct {

  public readonly instanceProfile: iam.CfnInstanceProfile;

  constructor(scope: Construct, id: string, props: ManagedInstanceRoleProps) {
    super(scope, id);

    var managedPolicies:iam.IManagedPolicy[] = props.managedPolicies === undefined ? [] : props.managedPolicies;

    let domainJoinEnabled: boolean = props.domainJoinEnabled === undefined ||
                              props.domainJoinEnabled === true;
    let ssmManagementEnabled: boolean = props.ssmManagementEnabled === undefined ||
                                 props.domainJoinEnabled === undefined ||
                                 props.domainJoinEnabled === true ||
                                 props.ssmManagementEnabled === true;
    if (ssmManagementEnabled) { managedPolicies.push(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore')); };
    if (domainJoinEnabled) { managedPolicies.push(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMDirectoryServiceAccess')); };

    const role = new iam.Role(this, 'role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      managedPolicies,
    });

    this.instanceProfile = new iam.CfnInstanceProfile(this, 'instanceProfile', {
      roles: [role.roleName],
    });
  }
}
