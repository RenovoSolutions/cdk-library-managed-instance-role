import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ManagedInstanceRole } from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack', {});

  new ManagedInstanceRole(stack, 'role', {});

  expect(Template.fromStack(stack)).toMatchSnapshot();
});

test('Simple test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new ManagedInstanceRole(stack, 'ManagedInstanceRole', {});

  Template.fromStack(stack).resourceCountIs('AWS::IAM::Role', 1);
  Template.fromStack(stack).resourceCountIs('AWS::IAM::InstanceProfile', 1);
});