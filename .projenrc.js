const { AwsCdkConstructLibrary, ProjectType } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.120.0',
  defaultReleaseBranch: 'master',
  name: 'cdk-managed-instance-role',
  repositoryUrl: 'https://github.com/brandon/cdk-managed-instance-role.git',

  cdkDependencies: [
    "@aws-cdk/aws-iam"
  ],        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  projectType: ProjectType.LIB,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
  cdkAssert: true,
  mergify: false,
  docgen: true,
  eslint: true
});
project.synth();