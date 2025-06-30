# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedInstanceRole <a name="ManagedInstanceRole" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer"></a>

```typescript
import { ManagedInstanceRole } from '@renovosolutions/cdk-library-managed-instance-role'

new ManagedInstanceRole(scope: Construct, id: string, props: ManagedInstanceRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps">ManagedInstanceRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps">ManagedInstanceRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.isConstruct"></a>

```typescript
import { ManagedInstanceRole } from '@renovosolutions/cdk-library-managed-instance-role'

ManagedInstanceRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.arn">arn</a></code> | <code>string</code> | The role arn. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.name">name</a></code> | <code>string</code> | The role name. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The role. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.instanceProfile">instanceProfile</a></code> | <code>aws-cdk-lib.aws_iam.CfnInstanceProfile</code> | The CfnInstanceProfile automatically created for this role. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The role arn.

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The role name.

---

##### `role`<sup>Required</sup> <a name="role" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The role.

---

##### `instanceProfile`<sup>Optional</sup> <a name="instanceProfile" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: CfnInstanceProfile;
```

- *Type:* aws-cdk-lib.aws_iam.CfnInstanceProfile

The CfnInstanceProfile automatically created for this role.

---


## Structs <a name="Structs" id="Structs"></a>

### ManagedInstanceRoleProps <a name="ManagedInstanceRoleProps" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.Initializer"></a>

```typescript
import { ManagedInstanceRoleProps } from '@renovosolutions/cdk-library-managed-instance-role'

const managedInstanceRoleProps: ManagedInstanceRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.createInstanceProfile">createInstanceProfile</a></code> | <code>boolean</code> | Whether or not to associate the role with an instance profile. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.domainJoinEnabled">domainJoinEnabled</a></code> | <code>boolean</code> | Should the role include directory service access with SSM. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.managedPolicies">managedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.ManagedPolicy[]</code> | The managed policies to apply to the role in addition to the default policies. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.retentionPolicy">retentionPolicy</a></code> | <code>boolean</code> | The retention policy for this role. |
| <code><a href="#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.ssmManagementEnabled">ssmManagementEnabled</a></code> | <code>boolean</code> | Should the role include SSM management. |

---

##### `createInstanceProfile`<sup>Optional</sup> <a name="createInstanceProfile" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.createInstanceProfile"></a>

```typescript
public readonly createInstanceProfile: boolean;
```

- *Type:* boolean
- *Default:* true

Whether or not to associate the role with an instance profile.

---

##### `domainJoinEnabled`<sup>Optional</sup> <a name="domainJoinEnabled" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.domainJoinEnabled"></a>

```typescript
public readonly domainJoinEnabled: boolean;
```

- *Type:* boolean

Should the role include directory service access with SSM.

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: ManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.ManagedPolicy[]

The managed policies to apply to the role in addition to the default policies.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: boolean;
```

- *Type:* boolean

The retention policy for this role.

---

##### `ssmManagementEnabled`<sup>Optional</sup> <a name="ssmManagementEnabled" id="@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRoleProps.property.ssmManagementEnabled"></a>

```typescript
public readonly ssmManagementEnabled: boolean;
```

- *Type:* boolean

Should the role include SSM management.

By default if domainJoinEnabled is true then this role is always included.

---



