# cdk-library-managed-instance-role

[![build](https://github.com/RenovoSolutions/cdk-library-managed-instance-role/actions/workflows/build.yml/badge.svg)](https://github.com/RenovoSolutions/cdk-library-managed-instance-role/workflows/build.yml)

This CDK Construct Library includes a construct (`ManagedInstanceRole`) which creates an AWS instance profile. By default this instance profile includes the basic policies required for instance management in SSM and the ability to Domain Join the instance.

The purpose of this CDK Construct Library is to ease the creation of instance roles by not needing to code the inclusion of baseline management roles for evey single different role implementation every time. Instance profiles only support a single role so its important the role includes all required access. This construct allows making additions to those baseline policies with ease.

The construct defines an interface (`IManagedInstanceRoleProps`) to configure the managed policies of the role as well as manage the inclusion of the default roles.

## Dev

### Pre-reqs:

You will need:

- npm installed on your machine
- AWS CDK installed on your machine
- python installed on your machine
- dotnet installed on your machine
- a github account

This project is managed with `projen`. Modify the `.projenrc.js` file and run `npx projen`. You can also modify this `README` file and the `src` code directory as needed. Github actions take care of publishing utilizing the automatically created workflows from `projen`.