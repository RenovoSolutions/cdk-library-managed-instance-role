# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ManagedInstanceRole <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole"></a>

#### Initializers <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer"></a>

```typescript
import { ManagedInstanceRole } from '@renovosolutions/cdk-library-managed-instance-role'

new ManagedInstanceRole(scope: Construct, id: string, props: ManagedInstanceRoleProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps`](#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: CfnInstanceProfile;
```

- *Type:* [`@aws-cdk/aws-iam.CfnInstanceProfile`](#@aws-cdk/aws-iam.CfnInstanceProfile)

---


## Structs <a name="Structs"></a>

### ManagedInstanceRoleProps <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ManagedInstanceRoleProps } from '@renovosolutions/cdk-library-managed-instance-role'

const managedInstanceRoleProps: ManagedInstanceRoleProps = { ... }
```

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

- *Type:* [`@aws-cdk/aws-iam.ManagedPolicy`](#@aws-cdk/aws-iam.ManagedPolicy)[]

The managed policies to apply to the role in addition to the default policies.

---

##### `ssmManagementEnabled`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.ssmManagementEnabled"></a>

```typescript
public readonly ssmManagementEnabled: boolean;
```

- *Type:* `boolean`

Should the role include SSM management.

By default if domainJoinEnabled is true then this role is always included.

---



