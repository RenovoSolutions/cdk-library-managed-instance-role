# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ManagedInstanceRole <a name="@renovosolutions/cdk-managed-instance-role.ManagedInstanceRole"></a>

#### Initializer <a name="@renovosolutions/cdk-managed-instance-role.ManagedInstanceRole.Initializer"></a>

```typescript
import { ManagedInstanceRole } from '@renovosolutions/cdk-managed-instance-role'

new ManagedInstanceRole(scope: Construct, id: string, props: IManagedInstanceRoleProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-managed-instance-role.ManagedInstanceRole.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-managed-instance-role.ManagedInstanceRole.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-managed-instance-role.ManagedInstanceRole.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps`](#@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="@renovosolutions/cdk-managed-instance-role.ManagedInstanceRole.property.instanceProfile"></a>

- *Type:* [`@aws-cdk/aws-iam.CfnInstanceProfile`](#@aws-cdk/aws-iam.CfnInstanceProfile)

---




## Protocols <a name="Protocols"></a>

### IManagedInstanceRoleProps <a name="@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps"></a>

- *Implemented By:* [`@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps`](#@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps)


#### Properties <a name="Properties"></a>

##### `domainJoinEnabled`<sup>Optional</sup> <a name="@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps.property.domainJoinEnabled"></a>

- *Type:* `boolean`

Should the role include directory service access with SSM.

---

##### `managedPolicies`<sup>Optional</sup> <a name="@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps.property.managedPolicies"></a>

- *Type:* [`@aws-cdk/aws-iam.ManagedPolicy`](#@aws-cdk/aws-iam.ManagedPolicy)[]

The managed policies to apply to the role in addition to the default policies.

---

##### `ssmManagementEnabled`<sup>Optional</sup> <a name="@renovosolutions/cdk-managed-instance-role.IManagedInstanceRoleProps.property.ssmManagementEnabled"></a>

- *Type:* `boolean`

Should the role include SSM management.

By default if domainJoinEnabled is true then this role is always included.

---

