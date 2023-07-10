import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { VpcPrivate } from '../src/vpc';
 
test('SQS Created', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'MyTestStack');

  new VpcPrivate(stack, 'Test')

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::EC2::VPC', {
   "CidrBlock": '10.0.0.0/16'
  });
});