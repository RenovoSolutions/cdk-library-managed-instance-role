import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';

export interface IManagedInstanceRoleProps {
  /**
   * The managed policies to apply to the role in addition to the default policies.
   */
  managedPolicies?: iam.ManagedPolicy[];
  /**
   * Should the role include directory service access with SSM.
   */
  domainJoinEnabled?: boolean;
  /**
   * Should the role include SSM management. By default if domainJoinEnabled is true then this role is always included.
   */
  ssmManagementEnabled?: boolean;
}

export class ManagedInstanceRole extends cdk.Construct {

  public readonly instanceProfile: iam.CfnInstanceProfile

  constructor(scope: cdk.Construct, id: string, props: IManagedInstanceRoleProps) {
    super(scope, id);

    var managedPolicies:iam.IManagedPolicy[] = props.managedPolicies === undefined ? [] : props.managedPolicies;

    props.domainJoinEnabled = props.domainJoinEnabled === undefined ||
                              props.domainJoinEnabled === true;
    props.ssmManagementEnabled = props.ssmManagementEnabled === undefined ||
                                 props.domainJoinEnabled === undefined ||
                                 props.domainJoinEnabled === true ||
                                 props.ssmManagementEnabled === true;
    if (props.ssmManagementEnabled) { managedPolicies.push(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore')); };
    if (props.domainJoinEnabled) { managedPolicies.push(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMDirectoryServiceAccess')); };

    const role = new iam.Role(this, 'role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      managedPolicies,
    });

    this.instanceProfile = new iam.CfnInstanceProfile(this, 'instanceProfile', {
      roles: [role.roleName],
    });
  }
}
