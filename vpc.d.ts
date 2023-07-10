import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
export declare class VpcPrivate extends ec2.Vpc {
    constructor(scope: Construct, id: string, props?: ec2.VpcProps);
}
export declare class VpcPrivateInternet extends ec2.Vpc {
    constructor(scope: Construct, id: string, props?: ec2.VpcProps);
}
