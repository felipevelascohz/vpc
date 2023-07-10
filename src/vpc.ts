
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';


export class VpcPrivate extends ec2.Vpc {
    constructor(scope: Construct, id: string, props?: ec2.VpcProps) {
        super(scope, id, {
            vpcName: id + 'Vpc',
            natGateways: 0,
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: 'Public',
                    subnetType: ec2.SubnetType.PRIVATE_ISOLATED
                },
                {
                    cidrMask: 24,
                    name: 'Private',
                    subnetType: ec2.SubnetType.PRIVATE_ISOLATED
                }
            ],
            natGatewayProvider: undefined,
            natGatewaySubnets: undefined,
            ...props
        });
    };
};

export class VpcPrivateInternet extends ec2.Vpc {
    constructor(scope: Construct, id: string, props?: ec2.VpcProps) {
        super(scope, id, {
            vpcName: id + 'Vpc',
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: 'Public',
                    subnetType: ec2.SubnetType.PUBLIC
                },
                {
                    cidrMask: 24,
                    name: 'Private',
                    subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS
                }
            ],
            ...props
        });
    };
};