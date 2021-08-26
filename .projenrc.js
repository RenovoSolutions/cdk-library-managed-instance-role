const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Brandon Miller',
  authorAddress: 'brandon@digital-reboot.com',
  cdkVersion: '1.120.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-managed-instance-role',
  repositoryUrl: 'https://github.com/brandon/cdk-managed-instance-role.git',

  cdkDependencies: ["@aws-cdk/aws-iam"],        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();