# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ManagedInstanceRole <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole"></a>

#### Initializers <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer"></a>

```typescript
import { ManagedInstanceRole } from '@renovosolutions/cdk-library-managed-instance-role'

new ManagedInstanceRole(scope: Construct, id: string, props: ManagedInstanceRoleProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps`](#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* `string`

The role arn.

---

##### `name`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The role name.

---

##### `role`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)

The role.

---

##### `instanceProfile`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: CfnInstanceProfile;
```

- *Type:* [`aws-cdk-lib.aws_iam.CfnInstanceProfile`](#aws-cdk-lib.aws_iam.CfnInstanceProfile)

The CfnInstanceProfile automatically created for this role.

---


## Structs <a name="Structs"></a>

### ManagedInstanceRoleProps <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ManagedInstanceRoleProps } from '@renovosolutions/cdk-library-managed-instance-role'

const managedInstanceRoleProps: ManagedInstanceRoleProps = { ... }
```

##### `createInstanceProfile`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.createInstanceProfile"></a>

```typescript
public readonly createInstanceProfile: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to associate the role with an instance profile.

---

##### `domainJoinEnabled`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.domainJoinEnabled"></a>

```typescript
public readonly domainJoinEnabled: boolean;
```

- *Type:* `boolean`

Should the role include directory service access with SSM.

---

##### `managedPolicies`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: ManagedPolicy[];
```

- *Type:* [`aws-cdk-lib.aws_iam.ManagedPolicy`](#aws-cdk-lib.aws_iam.ManagedPolicy)[]

The managed policies to apply to the role in addition to the default policies.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: boolean;
```

- *Type:* `boolean`

The retention policy for this role.

---

##### `ssmManagementEnabled`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.ssmManagementEnabled"></a>

```typescript
public readonly ssmManagementEnabled: boolean;
```

- *Type:* `boolean`

Should the role include SSM management.

By default if domainJoinEnabled is true then this role is always included.

---



