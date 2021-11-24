import { expect as expectCDK, countResources, haveResource, SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { ManagedInstanceRole } from '../src/index';

test('Snapshot', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack', {});

  new ManagedInstanceRole(stack, 'role', {});

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});

test('Simple test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new ManagedInstanceRole(stack, 'ManagedInstanceRole', {});

  expectCDK(stack).to(haveResource('AWS::IAM::Role', 1));
  expectCDK(stack).to(countResources('AWS::IAM::InstanceProfile', 1));
});