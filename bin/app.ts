#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcPrivate } from '../src/vpc';

const iniciativa :string = 'IdSbxFelipeVelasco';
const provider = {
  account: process.env.CDK_DEFAULT_ACCOUNT, 
  region: process.env.CDK_DEFAULT_REGION 
};

const app = new cdk.App();

const stack = new cdk.Stack(app, iniciativa, {
  env: provider
})

new VpcPrivate(stack, iniciativa)

app.synth();
