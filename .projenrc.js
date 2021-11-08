const { AwsCdkConstructLibrary, NpmAccess } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.131.0',
  defaultReleaseBranch: 'master',
  name: '@renovosolutions/cdk-library-managed-instance-role',
  description: 'AWS CDK Construct Library to create an instance role for instances managed by SSM and capable of joining an AWS managed domain.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-managed-instance-role.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-iam',
  ],
  releaseToNpm: true,
  releaseWorkflow: true,
  npmAccess: NpmAccess.PUBLIC,
  cdkAssert: true,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-managed-instance-role',
    module: 'managed_instance_role',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.ManagedInstanceRole',
  },
});
project.synth();