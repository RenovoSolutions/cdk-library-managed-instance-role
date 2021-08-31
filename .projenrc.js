const { AwsCdkConstructLibrary, ProjectType, NpmAccess } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.120.0',
  defaultReleaseBranch: 'master',
  name: '@renovo-solutions/cdk-managed-instance-role',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-managed-instance-role.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-iam',
  ],
  projectType: ProjectType.LIB,
  releaseToNpm: true,
  releaseWorkflow: true,
  npmAccess: NpmAccess.PUBLIC,
  cdkAssert: true,
  mergify: false,
  docgen: true,
  eslint: true,
  // publishToPypi: {
  //   distName: 'cdk-managed-instance-role',
  //   module: 'cdk_managed_instance_role'
  // },
  // publishToNuget: {
  //   dotNetNamespace: 'renovosolutions.CDK',
  //   packageId: 'ManagedInstanceRole'
  // }
});
project.synth();