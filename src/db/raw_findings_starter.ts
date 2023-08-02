export const rawFindings = [
  {
    id: 1,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Lambda.1/finding/3947dfa3-51e6-42af-8b6f-0f1bbb3cb21c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-264",
    severity: "low",
    finding_created: "2022-02-15 16:41:07.028000",
    ticket_created: "2022-02-25 15:02:06.000000",
    description:
      "Lambda.1 Lambda function policies should prohibit public access",
    asset: "arn:aws:lambda:us-east-1:340199105480:function:api_lambda",
    status: "in_progress",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Lambda.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 1,
  },
  {
    id: 2,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.5/finding/5f072a9f-ab15-4242-a43c-3cfeca42fa20",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-263",
    severity: "low",
    finding_created: "2022-02-15 16:23:03.612000",
    ticket_created: "2022-02-25 15:02:05.000000",
    description:
      "PCI.EC2.5 Security groups should not allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0aa5098016e0df709",
    status: "in_progress",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 2,
  },
  {
    id: 3,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.18/finding/69f8faed-ba22-46f6-8984-a2df5e6c17e0",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-262",
    severity: "low",
    finding_created: "2022-02-15 16:22:45.969000",
    ticket_created: "2022-02-25 15:02:05.000000",
    description:
      "EC2.18 Security groups should only allow unrestricted incoming traffic for authorized ports",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0aa5098016e0df709",
    status: "fixed",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.18/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 3,
  },
  {
    id: 4,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.Lambda.1/finding/362d40b9-d825-4595-a484-c788fb4f4cf2",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-261",
    severity: "low",
    finding_created: "2022-02-15 16:41:07.028000",
    ticket_created: "2022-02-25 15:02:04.000000",
    description: "PCI.Lambda.1 Lambda functions should prohibit public access",
    asset: "arn:aws:lambda:us-east-1:340199105480:function:api_lambda",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.Lambda.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 4,
  },
  {
    id: 5,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.1/finding/13483668-4a58-4e5a-b0fb-6ea123a31b92",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-260",
    severity: "low",
    finding_created: "2022-02-15 16:23:03.612000",
    ticket_created: "2022-02-25 15:02:02.000000",
    description:
      "4.1 Ensure no security groups allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-076dc32b43e173665",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 5,
  },
  {
    id: 6,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.4/finding/bd335c5a-c06f-4e23-9027-6368db6122f1",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-259",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.326000",
    ticket_created: "2022-02-25 15:02:01.000000",
    description:
      "PCI.S3.4 S3 buckets should have server-side encryption enabled",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 6,
  },
  {
    id: 7,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.8/finding/9fc4d9ce-fd6a-4be4-8dc8-880118076d3b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-258",
    severity: "low",
    finding_created: "2022-02-15 16:22:41.588000",
    ticket_created: "2022-02-25 15:02:00.000000",
    description:
      "S3.8 S3 Block Public Access setting should be enabled at the bucket-level",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 7,
  },
  {
    id: 8,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.2/finding/e79b1d71-a2ca-40fb-909b-e3070db6cef2",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-257",
    severity: "low",
    finding_created: "2022-02-15 16:20:56.624000",
    ticket_created: "2022-02-25 15:02:00.000000",
    description:
      "4.2 Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-082a043b933747f7d",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 8,
  },
  {
    id: 9,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.3/finding/a143a46d-9dc9-4017-8044-e05e18e24edf",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-256",
    severity: "medium",
    finding_created: "2022-02-15 16:22:11.494000",
    ticket_created: "2022-02-25 15:01:59.000000",
    description: "EC2.3 Attached EBS volumes should be encrypted at-rest",
    asset: "arn:aws:ec2:us-east-1:340199105480:volume/vol-0e756c003c572c7fa",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 9,
  },
  {
    id: 10,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.5/finding/534d59ea-3aa2-4f89-8aba-316dcdbe271a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-255",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.597000",
    ticket_created: "2022-02-25 15:01:58.000000",
    description:
      "S3.5 S3 buckets should require requests to use Secure Socket Layer",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 10,
  },
  {
    id: 11,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.8/finding/bbcd2897-8866-486b-a4eb-59a220963fdb",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-254",
    severity: "high",
    finding_created: "2022-02-15 16:22:41.588000",
    ticket_created: "2022-02-25 15:01:58.000000",
    description:
      "S3.8 S3 Block Public Access setting should be enabled at the bucket-level",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 7,
  },
  {
    id: 12,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.9/finding/586d4908-1766-4ea4-ab49-eb8af3789af5",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-253",
    severity: "medium",
    finding_created: "2022-02-15 16:22:31.873000",
    ticket_created: "2022-02-25 15:01:57.000000",
    description: "S3.9 S3 bucket server access logging should be enabled",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 11,
  },
  {
    id: 13,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.19/finding/a0061d14-5e45-492e-b9a7-d691384e1500",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-252",
    severity: "low",
    finding_created: "2022-02-15 16:22:50.005000",
    ticket_created: "2022-02-25 15:01:55.000000",
    description:
      "EC2.19 Security groups should not allow unrestricted access to ports with high risk",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0aa5098016e0df709",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.19/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 12,
  },
  {
    id: 14,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.6/finding/49906f4c-413d-48e8-9f0a-d225f350de49",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-251",
    severity: "high",
    finding_created: "2022-02-15 16:22:45.222000",
    ticket_created: "2022-02-25 15:01:54.000000",
    description:
      "S3.6 S3 permissions granted to other AWS accounts in bucket policies should be restricted",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 13,
  },
  {
    id: 15,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.6/finding/1592de37-45dd-4e71-aa02-0ab1bd1a831f",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-250",
    severity: "low",
    finding_created: "2022-02-15 16:22:45.222000",
    ticket_created: "2022-02-25 15:01:54.000000",
    description:
      "S3.6 S3 permissions granted to other AWS accounts in bucket policies should be restricted",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 13,
  },
  {
    id: 16,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.5/finding/c2691245-81b4-4df0-a9e6-e164718cd950",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-249",
    severity: "low",
    finding_created: "2022-02-15 16:23:03.612000",
    ticket_created: "2022-02-25 15:01:53.000000",
    description:
      "PCI.EC2.5 Security groups should not allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-076dc32b43e173665",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 2,
  },
  {
    id: 17,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.9/finding/1886ca52-43a0-4ac9-81a5-6cacf75e9422",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-248",
    severity: "medium",
    finding_created: "2022-02-15 16:22:31.874000",
    ticket_created: "2022-02-25 15:01:53.000000",
    description: "S3.9 S3 bucket server access logging should be enabled",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 11,
  },
  {
    id: 18,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.4/finding/285f5e7f-1c84-411f-89ea-94fc0c6a5d20",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-247",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.326000",
    ticket_created: "2022-02-25 15:01:52.000000",
    description:
      "PCI.S3.4 S3 buckets should have server-side encryption enabled",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 6,
  },
  {
    id: 19,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.5/finding/93a3d297-38cc-4be6-a3c0-d85582fce1e5",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-246",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.597000",
    ticket_created: "2022-02-25 15:01:51.000000",
    description:
      "PCI.S3.5 S3 buckets should require requests to use Secure Socket Layer",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 14,
  },
  {
    id: 20,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.5/finding/50a610f7-242c-4c84-ba2e-583845b3851e",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-245",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.597000",
    ticket_created: "2022-02-25 15:01:51.000000",
    description:
      "S3.5 S3 buckets should require requests to use Secure Socket Layer",
    asset: "arn:aws:s3:::silkdemo",
    status: "fixed",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 10,
  },
  {
    id: 21,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.5/finding/08520716-c97f-42e0-a21c-d70d39172e35",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-244",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.596000",
    ticket_created: "2022-02-25 15:01:50.000000",
    description:
      "PCI.S3.5 S3 buckets should require requests to use Secure Socket Layer",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 14,
  },
  {
    id: 22,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.Lambda.2/finding/e23212b2-5a3d-480b-b0b3-d97911ce3028",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-243",
    severity: "low",
    finding_created: "2022-02-15 16:41:04.093000",
    ticket_created: "2022-02-25 15:01:48.000000",
    description: "PCI.Lambda.2 Lambda functions should be in a VPC",
    asset: "arn:aws:lambda:us-east-1:340199105480:function:api_lambda",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.Lambda.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 15,
  },
  {
    id: 23,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Lambda.2/finding/cdd30a82-434c-4aa1-81f9-63fe067b5818",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-242",
    severity: "low",
    finding_created: "2022-02-15 16:40:52.213000",
    ticket_created: "2022-02-25 15:01:47.000000",
    description: "Lambda.2 Lambda functions should use supported runtimes",
    asset: "arn:aws:lambda:us-east-1:340199105480:function:api_lambda",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Lambda.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 16,
  },
  {
    id: 24,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.4/finding/d446716e-94c1-4b1e-97cf-72a9a71809fa",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-241",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.326000",
    ticket_created: "2022-02-25 15:01:46.000000",
    description: "S3.4 S3 buckets should have server-side encryption enabled",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 17,
  },
  {
    id: 25,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.19/finding/85fb05b0-2cb0-441f-91e2-a929bab42543",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-240",
    severity: "low",
    finding_created: "2022-02-15 16:22:50.005000",
    ticket_created: "2022-02-25 15:01:45.000000",
    description:
      "EC2.19 Security groups should not allow unrestricted access to ports with high risk",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-082a043b933747f7d",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.19/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 12,
  },
  {
    id: 26,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.1/finding/30029fd5-c8a5-4cb1-857e-a56f7d899257",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-239",
    severity: "low",
    finding_created: "2022-02-15 16:23:03.612000",
    ticket_created: "2022-02-25 15:01:45.000000",
    description:
      "4.1 Ensure no security groups allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0aa5098016e0df709",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 5,
  },
  {
    id: 27,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.19/finding/4cc7520d-606c-4629-8dd1-390955c92abf",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-238",
    severity: "low",
    finding_created: "2022-02-15 16:22:50.005000",
    ticket_created: "2022-02-25 15:01:44.000000",
    description:
      "EC2.19 Security groups should not allow unrestricted access to ports with high risk",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-076dc32b43e173665",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.19/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 12,
  },
  {
    id: 28,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.3/finding/c07dd9cc-d2d6-4b4b-a696-2b28b4d87ad8",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-237",
    severity: "high",
    finding_created: "2022-02-15 16:21:08.458000",
    ticket_created: "2022-02-25 15:01:44.000000",
    description:
      "4.3 Ensure the default security group of every VPC restricts all traffic",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-082a043b933747f7d",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 18,
  },
  {
    id: 29,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.3/finding/7b8141e8-9abe-4937-8efd-871d20b7678d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-236",
    severity: "high",
    finding_created: "2022-02-15 16:21:08.458000",
    ticket_created: "2022-02-25 15:01:43.000000",
    description:
      "4.3 Ensure the default security group of every VPC restricts all traffic",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-076dc32b43e173665",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 18,
  },
  {
    id: 30,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.2/finding/1cb553a0-1a66-4854-bea6-17c259410037",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-235",
    severity: "high",
    finding_created: "2022-02-15 16:21:08.458000",
    ticket_created: "2022-02-25 15:01:43.000000",
    description:
      "PCI.EC2.2 VPC default security group should prohibit inbound and outbound traffic",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-082a043b933747f7d",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 19,
  },
  {
    id: 31,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.5/finding/51684d9e-5c4a-42ba-bb2f-63fae4a4a221",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-234",
    severity: "low",
    finding_created: "2022-02-15 16:22:47.275000",
    ticket_created: "2022-02-25 15:01:42.000000",
    description:
      "PCI.EC2.5 Security groups should not allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-082a043b933747f7d",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 2,
  },
  {
    id: 32,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.1/finding/b44812ea-06d4-41f1-bee0-7e32e3d60995",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-233",
    severity: "low",
    finding_created: "2022-02-15 16:22:47.275000",
    ticket_created: "2022-02-25 15:01:40.000000",
    description:
      "4.1 Ensure no security groups allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-082a043b933747f7d",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 5,
  },
  {
    id: 33,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.2/finding/a006f360-b5e5-4bad-bef9-4be830b275c8",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-232",
    severity: "high",
    finding_created: "2022-02-15 16:21:08.458000",
    ticket_created: "2022-02-25 15:01:39.000000",
    description:
      "EC2.2 The VPC default security group should not allow inbound and outbound traffic",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-076dc32b43e173665",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 20,
  },
  {
    id: 34,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.4/finding/b034582e-8a8c-4421-99c1-2806964cb4ca",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-231",
    severity: "medium",
    finding_created: "2022-02-15 16:21:00.326000",
    ticket_created: "2022-02-25 15:01:39.000000",
    description: "S3.4 S3 buckets should have server-side encryption enabled",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 17,
  },
  {
    id: 35,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.2/finding/79ca5721-1ee5-469f-85ec-5209809c8611",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-230",
    severity: "high",
    finding_created: "2022-02-15 16:21:08.458000",
    ticket_created: "2022-02-25 15:01:38.000000",
    description:
      "PCI.EC2.2 VPC default security group should prohibit inbound and outbound traffic",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-076dc32b43e173665",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 19,
  },
  {
    id: 36,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.2/finding/4c8187d4-162c-423f-a8e4-2ed2ac82c8bf",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-229",
    severity: "high",
    finding_created: "2022-02-15 16:21:08.458000",
    ticket_created: "2022-02-25 15:01:38.000000",
    description:
      "EC2.2 The VPC default security group should not allow inbound and outbound traffic",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-082a043b933747f7d",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 20,
  },
  {
    id: 37,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.2/finding/14e78cad-551a-4c31-813d-e389f2a17602",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-228",
    severity: "low",
    finding_created: "2022-02-15 16:22:49.245000",
    ticket_created: "2022-02-25 15:01:37.000000",
    description:
      "4.2 Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0aa5098016e0df709",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 8,
  },
  {
    id: 38,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.2/finding/6a148b76-5697-4ea1-90a9-d2706dc479e7",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-227",
    severity: "low",
    finding_created: "2022-02-15 16:22:49.245000",
    ticket_created: "2022-02-25 15:01:36.000000",
    description:
      "4.2 Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-076dc32b43e173665",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 8,
  },
  {
    id: 39,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Redshift.6/finding/286db50f-a17f-4020-a3e6-44d7ef7edf03",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-226",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 09:01:39.000000",
    description:
      "Redshift.6 Amazon Redshift should have automatic upgrades to major versions enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Redshift.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 21,
  },
  {
    id: 40,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.3/finding/e4cfa521-0281-4810-a651-271bf13fde02",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-225",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 09:01:39.000000",
    description:
      "RDS.3 RDS DB instances should have encryption at-rest enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 22,
  },
  {
    id: 41,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Redshift.7/finding/9198a4f2-a2a6-4320-9b47-2e796b14a90c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-224",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 09:01:38.000000",
    description: "Redshift.7 Redshift clusters should use enhanced VPC routing",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Redshift.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 23,
  },
  {
    id: 42,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Redshift.4/finding/262ce9fc-a47e-4b56-bb91-377cf90a8b46",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-223",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 09:01:37.000000",
    description:
      "Redshift.4 Amazon Redshift clusters should have audit logging enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Redshift.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 24,
  },
  {
    id: 43,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Redshift.1/finding/78be55e9-0b91-48a4-8d51-5b3ff956a422",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-222",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 09:01:37.000000",
    description:
      "Redshift.1 Amazon Redshift clusters should prohibit public access",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Redshift.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 25,
  },
  {
    id: 44,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudTrail.4/finding/ef4c72f5-377f-47eb-b4b8-b624406b9999",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-221",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.568000",
    ticket_created: "2022-02-25 09:01:37.000000",
    description:
      "CloudTrail.4 CloudTrail log file validation should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudTrail.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 26,
  },
  {
    id: 45,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SSM.4/finding/d64dfb25-56d0-4b6e-ab02-4777e570674a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-220",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.377000",
    ticket_created: "2022-02-25 08:56:51.000000",
    description: "SSM.4 SSM documents should not be public",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SSM.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 27,
  },
  {
    id: 46,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SecretsManager.2/finding/a0416cd0-dd67-4410-9cb4-434871105f92",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-219",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.526000",
    ticket_created: "2022-02-25 08:56:51.000000",
    description:
      "SecretsManager.2 Secrets Manager secrets configured with automatic rotation should rotate successfully",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SecretsManager.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 28,
  },
  {
    id: 47,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.18/finding/24296a6a-e97d-4d30-993d-2cc8e5015d5b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-218",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:56:49.000000",
    description: "RDS.18 RDS instances should be deployed in a VPC",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.18/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 29,
  },
  {
    id: 48,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.1/finding/f903ebd5-fe95-4e5a-9b25-056d443a7b19",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-217",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.784000",
    ticket_created: "2022-02-25 08:56:48.000000",
    description:
      'IAM.1 IAM policies should not allow full "*" administrative privileges',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 30,
  },
  {
    id: 49,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.2/finding/d3fb4023-f0f7-4be9-9c20-8e9c5f5275e0",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-216",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:56:47.000000",
    description:
      "RDS.2 RDS DB Instances should prohibit public access, determined by the PubliclyAccessible configuration",
    asset: "AWS::::Account:340199105480",
    status: "fixed",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 31,
  },
  {
    id: 50,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.3/finding/9c12e334-965c-49eb-a6b5-0becb9e9d842",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-215",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.615000",
    ticket_created: "2022-02-25 08:56:47.000000",
    description:
      "ELB.3 Classic Load Balancer listeners should be configured with HTTPS or TLS termination",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 32,
  },
  {
    id: 51,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.12/finding/2baad424-cc3f-4688-a3d3-9819a822a1fa",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-214",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:56:46.000000",
    description:
      "RDS.12 IAM authentication should be configured for RDS clusters",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.12/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 33,
  },
  {
    id: 52,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.5/finding/5e75e60c-dfaa-4066-a8e5-7ef4ca6be945",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-213",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:56:46.000000",
    description:
      "RDS.5 RDS DB instances should be configured with multiple Availability Zones",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 34,
  },
  {
    id: 53,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.9/finding/978075b1-f3fc-445a-a315-93c483c6d292",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-212",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:56:45.000000",
    description: "RDS.9 Database logging should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 35,
  },
  {
    id: 54,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SSM.3/finding/e4b81d76-0b89-4d7d-8fe2-2705de9d94fc",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-211",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 08:56:43.000000",
    description:
      "SSM.3 EC2 instances managed by Systems Manager should have an association compliance status of COMPLIANT",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SSM.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 36,
  },
  {
    id: 55,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.2/finding/0c7d123f-9ab0-4c46-95a0-3b486ed8dfba",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-210",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.615000",
    ticket_created: "2022-02-25 08:56:42.000000",
    description:
      "ELB.2 Classic Load Balancers with SSL/HTTPS listeners should use a certificate provided by AWS Certificate Manager",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 37,
  },
  {
    id: 56,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/KMS.3/finding/eb561890-e81b-4dbb-a8a5-928426093065",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-209",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.346000",
    ticket_created: "2022-02-25 08:56:42.000000",
    description: "KMS.3 AWS KMS keys should not be deleted unintentionally",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/KMS.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 38,
  },
  {
    id: 57,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Opensearch.6/finding/7c766c27-7d61-4c2b-8bc9-e08174837b15",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-208",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:56:41.000000",
    description:
      "Opensearch.6 OpenSearch domains should have at least three data nodes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Opensearch.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 39,
  },
  {
    id: 58,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.4/finding/ecf871b9-d0cb-46cf-bad7-4b1b98fb060b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-207",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.783000",
    ticket_created: "2022-02-25 08:56:41.000000",
    description:
      "ES.4 Elasticsearch domain error logging to CloudWatch Logs should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 40,
  },
  {
    id: 59,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SSM.2/finding/dbec4e65-f429-4ff9-8419-1d741ccdb904",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-206",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 08:56:40.000000",
    description:
      "SSM.2 EC2 instances managed by Systems Manager should have a patch compliance status of COMPLIANT after a patch installation",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SSM.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 41,
  },
  {
    id: 60,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.6/finding/46a3947a-c6ad-4335-bfa3-5f86a69f3f57",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-205",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:56:39.000000",
    description:
      "RDS.6 Enhanced monitoring should be configured for RDS DB instances",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 42,
  },
  {
    id: 61,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SecretsManager.4/finding/80856f88-3012-4543-8c3d-f1d4eb625335",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-204",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.823000",
    ticket_created: "2022-02-25 08:56:38.000000",
    description:
      "SecretsManager.4 Secrets Manager secrets should be rotated within a specified number of days",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SecretsManager.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 43,
  },
  {
    id: 62,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/WAF.1/finding/47220ea0-2426-4ab1-8c5c-d77ec4c6f030",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-203",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.978000",
    ticket_created: "2022-02-25 08:56:38.000000",
    description:
      "WAF.1 AWS WAF Classic Global Web ACL logging should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/WAF.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 44,
  },
  {
    id: 63,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Redshift.3/finding/6e4de294-1d21-4a0f-b12a-dd96a4652e8f",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-202",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 08:56:37.000000",
    description:
      "Redshift.3 Amazon Redshift clusters should have automatic snapshots enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Redshift.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 45,
  },
  {
    id: 64,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.22/finding/96193d10-233a-483b-8999-8b6831cefb1e",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-201",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:56:37.000000",
    description:
      "RDS.22 An RDS event notifications subscription should be configured for critical database security group events",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.22/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 46,
  },
  {
    id: 65,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.8/finding/974be93a-b7c6-493c-90c0-6578a39b4498",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-200",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.246000",
    ticket_created: "2022-02-25 08:56:36.000000",
    description:
      "ELB.8 Classic Load Balancers with SSL listeners should use a predefined security policy that has strong configuration",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 47,
  },
  {
    id: 66,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Redshift.2/finding/043f8212-803d-4f03-92bc-d54e38461a5c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-199",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 08:51:56.000000",
    description:
      "Redshift.2 Connections to Amazon Redshift clusters should be encrypted in transit",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Redshift.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 48,
  },
  {
    id: 67,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SecretsManager.3/finding/cc83a22c-33d9-4b8d-a4e6-bf02795595f1",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-198",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.679000",
    ticket_created: "2022-02-25 08:51:54.000000",
    description: "SecretsManager.3 Remove unused Secrets Manager secrets",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SecretsManager.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 49,
  },
  {
    id: 68,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SecretsManager.1/finding/44b3530b-d9c2-4305-8e51-9088743ade80",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-197",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.526000",
    ticket_created: "2022-02-25 08:51:53.000000",
    description:
      "SecretsManager.1 Secrets Manager secrets should have automatic rotation enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SecretsManager.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 50,
  },
  {
    id: 69,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.8/finding/e5d82e54-f61b-40a5-a7bf-e7f14cca72e9",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-196",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:51:52.000000",
    description:
      "RDS.8 RDS DB instances should have deletion protection enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 51,
  },
  {
    id: 70,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SNS.1/finding/c398c692-a00b-46d1-bb0d-d418da191c3d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-195",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.326000",
    ticket_created: "2022-02-25 08:51:52.000000",
    description: "SNS.1 SNS topics should be encrypted at-rest using AWS KMS",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SNS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 52,
  },
  {
    id: 71,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.4/finding/ffe6761e-061f-4045-b2d7-b4bf62363a06",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-194",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:51:51.000000",
    description:
      "RDS.4 RDS cluster snapshots and database snapshots should be encrypted at rest",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 53,
  },
  {
    id: 72,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.5/finding/64c3705d-cfb9-4af7-bb94-e6817e3d57c9",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-193",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.041000",
    ticket_created: "2022-02-25 08:51:50.000000",
    description:
      "IAM.5 MFA should be enabled for all IAM users that have a console password",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 54,
  },
  {
    id: 73,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.2/finding/b024b703-0a9b-4356-a476-9cd5742a39f4",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-192",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.783000",
    ticket_created: "2022-02-25 08:51:50.000000",
    description: "ES.2 Elasticsearch domains should be in a VPC",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 55,
  },
  {
    id: 74,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Opensearch.4/finding/6fd80720-f8ef-472c-8565-6e8168011b83",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-191",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:51:49.000000",
    description:
      "Opensearch.4 OpenSearch domain error logging to CloudWatch Logs should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Opensearch.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 56,
  },
  {
    id: 75,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.19/finding/d249dfc1-87eb-4e1a-8285-9f6b2ef6b608",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-190",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:51:49.000000",
    description:
      "RDS.19 An RDS event notifications subscription should be configured for critical cluster events",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.19/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 57,
  },
  {
    id: 76,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.23/finding/f6c4e784-12b2-479e-9505-045063667b57",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-189",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:51:48.000000",
    description:
      "RDS.23 RDS instances should not use a database engine default port",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.23/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 58,
  },
  {
    id: 77,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SageMaker.1/finding/fb619537-7e6d-4025-b3a8-d09ef0f0f150",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-188",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.526000",
    ticket_created: "2022-02-25 08:51:46.000000",
    description:
      "SageMaker.1 Amazon SageMaker notebook instances should not have direct internet access",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SageMaker.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 59,
  },
  {
    id: 78,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.7/finding/16f4350d-05a5-4116-ad16-63f523e6eeef",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-187",
    severity: "low",
    finding_created: "2022-02-15 17:12:18.325000",
    ticket_created: "2022-02-25 08:51:45.000000",
    description: "RDS.7 RDS clusters should have deletion protection enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 60,
  },
  {
    id: 79,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.7/finding/f80f7510-85ab-4f0f-91ef-9c6fb07addfa",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-186",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.615000",
    ticket_created: "2022-02-25 08:51:44.000000",
    description:
      "ELB.7 Classic Load Balancers should have connection draining enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 61,
  },
  {
    id: 80,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ECS.1/finding/c5248c0b-d593-44ca-99d5-fcc6b2cbfcc9",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-185",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.322000",
    ticket_created: "2022-02-25 08:51:44.000000",
    description:
      "ECS.1 Amazon ECS task definitions should have secure networking modes and user definitions.",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ECS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 62,
  },
  {
    id: 81,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/KMS.2/finding/079003cb-695b-4060-b377-a8fcb85c59aa",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-184",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.202000",
    ticket_created: "2022-02-25 08:51:43.000000",
    description:
      "KMS.2 IAM principals should not have IAM inline policies that allow decryption actions on all KMS keys",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/KMS.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 63,
  },
  {
    id: 82,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EMR.1/finding/eded0948-7e24-4526-8146-34fae3df318b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-183",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.468000",
    ticket_created: "2022-02-25 08:51:42.000000",
    description:
      "EMR.1 Amazon Elastic MapReduce cluster master nodes should not have public IP addresses",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EMR.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 64,
  },
  {
    id: 83,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ElasticBeanstalk.2/finding/6dc44b99-1fae-4765-b396-6e2676c40e32",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-182",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.784000",
    ticket_created: "2022-02-25 08:51:40.000000",
    description:
      "ElasticBeanstalk.2 Elastic Beanstalk managed platform updates should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ElasticBeanstalk.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 65,
  },
  {
    id: 84,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudFront.1/finding/ca74fb91-96d3-47ad-9651-0c2da1a6c040",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-181",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:51:39.000000",
    description:
      "CloudFront.1 CloudFront distributions should have a default root object configured",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudFront.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 66,
  },
  {
    id: 85,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ECS.2/finding/f09c2fe4-aa9e-4302-b217-26b4364ce700",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-180",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.322000",
    ticket_created: "2022-02-25 08:51:38.000000",
    description:
      "ECS.2 ECS services should not have public IP addresses assigned to them automatically",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ECS.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 67,
  },
  {
    id: 86,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.4/finding/24b3590f-a4d1-4c92-8b5c-30b38f2b4abf",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-179",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.615000",
    ticket_created: "2022-02-25 08:51:38.000000",
    description:
      "ELB.4 Application load balancer should be configured to drop http headers",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 68,
  },
  {
    id: 87,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Opensearch.1/finding/71b6b5f3-26b5-4e3d-9a91-a522f38c6e49",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-178",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:51:37.000000",
    description:
      "Opensearch.1 OpenSearch domains should have encryption at rest enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Opensearch.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 69,
  },
  {
    id: 88,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.5/finding/49c5b104-ebbb-4371-8089-728e51395414",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-177",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.615000",
    ticket_created: "2022-02-25 08:51:37.000000",
    description:
      "ELB.5 Application and Classic Load Balancers logging should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 70,
  },
  {
    id: 89,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.20/finding/011b9b84-9ce0-44a5-a3aa-7851ea3fef56",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-176",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.174000",
    ticket_created: "2022-02-25 08:51:36.000000",
    description:
      "EC2.20 Both VPN tunnels for an AWS Site-to-Site VPN connection should be up",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.20/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 71,
  },
  {
    id: 90,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/APIGateway.5/finding/dbabc07e-9ec2-48c7-9baa-71105a29c027",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-175",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:46:50.000000",
    description:
      "APIGateway.5 API Gateway REST API cache data should be encrypted at rest",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/APIGateway.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 72,
  },
  {
    id: 91,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Config.1/finding/fc40f52f-8d01-4dc1-9b14-ea9c8fafca5f",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-174",
    severity: "medium",
    finding_created: "2022-02-15 17:11:26.506000",
    ticket_created: "2022-02-25 08:46:50.000000",
    description: "Config.1 AWS Config should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Config.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 73,
  },
  {
    id: 92,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Opensearch.5/finding/673b2f27-9c27-402a-be02-001ddd401441",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-173",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:46:46.000000",
    description:
      "Opensearch.5 OpenSearch domains should have audit logging enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Opensearch.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 74,
  },
  {
    id: 93,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudFront.4/finding/96c09138-b387-431b-9269-63fc9705e0df",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-172",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.272000",
    ticket_created: "2022-02-25 08:46:46.000000",
    description:
      "CloudFront.4 CloudFront distributions should have origin failover configured",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudFront.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 75,
  },
  {
    id: 94,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudFront.3/finding/5d93e088-6419-4f8c-9c65-579dfb002ac0",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-171",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.272000",
    ticket_created: "2022-02-25 08:46:45.000000",
    description:
      "CloudFront.3 CloudFront distributions should require encryption in transit",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudFront.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 76,
  },
  {
    id: 95,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.21/finding/0853655a-3a18-40b4-a1dc-414658e96398",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-170",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.784000",
    ticket_created: "2022-02-25 08:46:44.000000",
    description:
      "IAM.21 IAM customer managed policies that you create should not allow wildcard actions for services",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.21/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 77,
  },
  {
    id: 96,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.21/finding/437d21dd-5ca5-41c3-aa52-86e86bba866f",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-169",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.349000",
    ticket_created: "2022-02-25 08:46:43.000000",
    description:
      "RDS.21 An RDS event notifications subscription should be configured for critical database parameter group events",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.21/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 78,
  },
  {
    id: 97,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EFS.1/finding/621ca6e2-621d-4305-808c-d311340cc4b9",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-168",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.476000",
    ticket_created: "2022-02-25 08:46:43.000000",
    description:
      "EFS.1 Elastic File System should be configured to encrypt file data at-rest using AWS KMS",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EFS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 79,
  },
  {
    id: 98,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudFront.6/finding/c5768f66-a26e-48e9-82c8-32636c1a6c62",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-167",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.272000",
    ticket_created: "2022-02-25 08:46:40.000000",
    description:
      "CloudFront.6 CloudFront distributions should have WAF enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudFront.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 80,
  },
  {
    id: 99,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.14/finding/0570ed17-66eb-4f3c-9af6-9299224185c6",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-166",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:46:39.000000",
    description:
      "RDS.14 Amazon Aurora clusters should have backtracking enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.14/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 81,
  },
  {
    id: 100,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Opensearch.2/finding/b7a4bbe0-ba19-4017-ab59-57bc3dfb0d06",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-165",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:46:39.000000",
    description: "Opensearch.2 OpenSearch domains should be in a VPC",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Opensearch.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 82,
  },
  {
    id: 101,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.6/finding/75ccf0c8-917c-4396-bec9-5b6cc0b29a18",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-164",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.783000",
    ticket_created: "2022-02-25 08:46:38.000000",
    description:
      "ES.6 Elasticsearch domains should have at least three data nodes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 83,
  },
  {
    id: 102,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.4/finding/5a4dd1ec-607b-4c94-bb7a-66ac55862af4",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-163",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.321000",
    ticket_created: "2022-02-25 08:46:37.000000",
    description:
      "EC2.4 Stopped EC2 instances should be removed after a specified time period",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 84,
  },
  {
    id: 103,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELBv2.1/finding/221b2cb6-34e2-492c-be4a-64db20632ec1",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-162",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.291000",
    ticket_created: "2022-02-25 08:46:37.000000",
    description:
      "ELBv2.1 Application Load Balancer should be configured to redirect all HTTP requests to HTTPS",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELBv2.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 85,
  },
  {
    id: 104,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.15/finding/c28f64ed-1d86-4798-aa01-263d4b06780a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-161",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:46:37.000000",
    description:
      "RDS.15 RDS DB clusters should be configured for multiple Availability Zones",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.15/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 86,
  },
  {
    id: 105,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CodeBuild.2/finding/2d5bd94c-a3a3-40fd-a598-4854e53b531d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-160",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.719000",
    ticket_created: "2022-02-25 08:42:08.000000",
    description:
      "CodeBuild.2 CodeBuild project environment variables should not contain clear text credentials",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CodeBuild.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 87,
  },
  {
    id: 106,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CodeBuild.1/finding/65cb8574-8ab8-4821-9348-24670b516b22",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-159",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.719000",
    ticket_created: "2022-02-25 08:42:07.000000",
    description:
      "CodeBuild.1 CodeBuild GitHub or Bitbucket source repository URLs should use OAuth",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CodeBuild.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 88,
  },
  {
    id: 107,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ACM.1/finding/ff4a4fc7-4985-4afd-85df-fdbdf5dea6d5",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-158",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:42:06.000000",
    description:
      "ACM.1 ACM certificates should be renewed after a specified time period",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ACM.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 89,
  },
  {
    id: 108,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/KMS.1/finding/9d16a516-aed2-4232-822c-fea1d97b4a97",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-157",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.202000",
    ticket_created: "2022-02-25 08:42:06.000000",
    description:
      "KMS.1 IAM customer managed policies should not allow decryption actions on all KMS keys",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/KMS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 90,
  },
  {
    id: 109,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.2/finding/66858064-b3fe-4ee4-b4a3-0801103bdc5d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-156",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.784000",
    ticket_created: "2022-02-25 08:42:05.000000",
    description: "IAM.2 IAM users should not have IAM policies attached",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 91,
  },
  {
    id: 110,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/DynamoDB.2/finding/9a75bf4e-568b-4382-bd19-6187cac9e872",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-155",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.024000",
    ticket_created: "2022-02-25 08:42:04.000000",
    description:
      "DynamoDB.2 DynamoDB tables should have point-in-time recovery enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/DynamoDB.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 92,
  },
  {
    id: 111,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudFront.2/finding/c6d4dfcc-e41e-422e-9e4f-9735dc3e3213",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-154",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:42:04.000000",
    description:
      "CloudFront.2 CloudFront distributions should have origin access identity enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudFront.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 93,
  },
  {
    id: 112,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.3/finding/78229ced-688e-4e84-9f29-29536aedc0ec",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-153",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.783000",
    ticket_created: "2022-02-25 08:42:02.000000",
    description:
      "ES.3 Elasticsearch domains should encrypt data sent between nodes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 94,
  },
  {
    id: 113,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.13/finding/48d31525-8cfa-4cdc-b416-cf5359f638da",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-152",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:42:01.000000",
    description:
      "RDS.13 RDS automatic minor version upgrades should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.13/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 95,
  },
  {
    id: 114,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.7/finding/f56a971d-fd6a-4a95-bc34-4a29589de1fe",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-151",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.783000",
    ticket_created: "2022-02-25 08:42:00.000000",
    description:
      "ES.7 Elasticsearch domains should be configured with at least three dedicated master nodes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 96,
  },
  {
    id: 115,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/AutoScaling.1/finding/d0d87712-b1fb-4519-bfa8-9e83a9407bcf",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-150",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:42:00.000000",
    description:
      "AutoScaling.1 Auto scaling groups associated with a load balancer should use load balancer health checks",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/AutoScaling.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 97,
  },
  {
    id: 116,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.6/finding/b4b50971-3cf7-4a84-92c2-a691230caf04",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-149",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.615000",
    ticket_created: "2022-02-25 08:41:59.000000",
    description:
      "ELB.6 Application Load Balancer deletion protection should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 98,
  },
  {
    id: 117,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ElasticBeanstalk.1/finding/8fdb06c0-89b5-420b-8904-22efe6a6a5e7",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-148",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.784000",
    ticket_created: "2022-02-25 08:41:58.000000",
    description:
      "ElasticBeanstalk.1 Elastic Beanstalk environments should have enhanced health reporting enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ElasticBeanstalk.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 99,
  },
  {
    id: 118,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.1/finding/8b012467-07f6-4663-a47a-9b7f5f2c621c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-147",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:41:58.000000",
    description: "RDS.1 RDS snapshot should be private",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 100,
  },
  {
    id: 119,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/DynamoDB.3/finding/e2170705-cfff-4fa9-afaf-8f9c55e97418",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-146",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.174000",
    ticket_created: "2022-02-25 08:41:57.000000",
    description:
      "DynamoDB.3 DynamoDB Accelerator (DAX) clusters should be encrypted at rest",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/DynamoDB.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 101,
  },
  {
    id: 120,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.8/finding/2c4e3998-c2fd-48a6-9064-2ed0e3e29028",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-145",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.202000",
    ticket_created: "2022-02-25 08:41:56.000000",
    description: "IAM.8 Unused IAM user credentials should be removed",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 102,
  },
  {
    id: 121,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/APIGateway.4/finding/825f9a17-bbc6-46b7-abfd-2c1e456b1540",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-144",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:41:54.000000",
    description:
      "APIGateway.4 API Gateway should be associated with a WAF Web ACL",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/APIGateway.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 103,
  },
  {
    id: 122,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EFS.2/finding/179dabc4-7001-497f-bfa5-e33636ad5dc7",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-143",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.614000",
    ticket_created: "2022-02-25 08:41:54.000000",
    description: "EFS.2 Amazon EFS volumes should be in backup plans",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EFS.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 104,
  },
  {
    id: 123,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.20/finding/c5ae707e-4030-4149-a48a-8be64f5bfffd",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-142",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.349000",
    ticket_created: "2022-02-25 08:41:53.000000",
    description:
      "RDS.20 An RDS event notifications subscription should be configured for critical database instance events",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.20/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 105,
  },
  {
    id: 124,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Autoscaling.5/finding/3724b5bd-8bcb-4f92-9e25-4f7f4788fbfd",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-141",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:41:52.000000",
    description:
      "Autoscaling.5 Amazon EC2 instances launched using Auto Scaling group launch configurations should not have Public IP addresses",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Autoscaling.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 106,
  },
  {
    id: 125,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.5/finding/d1ea9f51-d042-4939-8d3a-67a793ec4ef2",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-140",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.783000",
    ticket_created: "2022-02-25 08:41:52.000000",
    description: "ES.5 Elasticsearch domains should have audit logging enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 107,
  },
  {
    id: 126,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Opensearch.8/finding/ceecc5ad-fbc1-436d-8786-90b3a9a8d00c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-139",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:41:51.000000",
    description:
      "Opensearch.8 Connections to OpenSearch domains should be encrypted using TLS 1.2",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Opensearch.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 108,
  },
  {
    id: 127,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.3/finding/74ee0eca-b4f4-4f5d-b337-7ad4fc07bebe",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-138",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.899000",
    ticket_created: "2022-02-25 08:41:51.000000",
    description:
      "IAM.3 IAM users' access keys should be rotated every 90 days or less",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 109,
  },
  {
    id: 128,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.11/finding/bd11187e-2be2-479d-adcd-bfb44ea72a31",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-137",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:41:50.000000",
    description: "RDS.11 RDS instances should have automatic backups enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.11/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 110,
  },
  {
    id: 129,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/APIGateway.1/finding/16830ad0-30c5-4689-a0a9-78326a97214c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-136",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:41:50.000000",
    description:
      "APIGateway.1 API Gateway REST and WebSocket API execution logging should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/APIGateway.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 111,
  },
  {
    id: 130,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudFront.7/finding/1c210d0d-ff2b-4bac-9400-efa00805d795",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-135",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.272000",
    ticket_created: "2022-02-25 08:41:48.000000",
    description:
      "CloudFront.7 CloudFront distributions should use custom SSL/TLS certificates",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudFront.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 112,
  },
  {
    id: 131,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.1/finding/57e38f61-6187-4265-b1bc-40651c2049da",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-134",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.602000",
    ticket_created: "2022-02-25 08:41:47.000000",
    description:
      "ES.1 Elasticsearch domains should have encryption at-rest enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 113,
  },
  {
    id: 132,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.10/finding/579fdf89-1801-44f5-8944-81737519576b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-133",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:41:46.000000",
    description:
      "RDS.10 IAM authentication should be configured for RDS instances",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.10/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 114,
  },
  {
    id: 133,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudTrail.5/finding/32567df7-2774-4e95-9f2b-b58044517f17",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-132",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.719000",
    ticket_created: "2022-02-25 08:41:45.000000",
    description:
      "CloudTrail.5 CloudTrail trails should be integrated with Amazon CloudWatch Logs",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudTrail.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 115,
  },
  {
    id: 134,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/APIGateway.2/finding/bfdb0fbf-c8fd-4a19-9e82-c426dd2dcfcb",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-131",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:41:44.000000",
    description:
      "APIGateway.2 API Gateway REST API stages should be configured to use SSL certificates for backend authentication",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/APIGateway.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 116,
  },
  {
    id: 135,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/DynamoDB.1/finding/cd38386d-3c20-4c57-a5ba-da2db0c117e0",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-130",
    severity: "low",
    finding_created: "2022-02-15 17:12:42.024000",
    ticket_created: "2022-02-25 08:41:44.000000",
    description:
      "DynamoDB.1 DynamoDB tables should automatically scale capacity with demand",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/DynamoDB.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 117,
  },
  {
    id: 136,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.17/finding/f51e1539-9ef9-4efb-bee8-dbd86db1d3e3",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-129",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:41:43.000000",
    description:
      "RDS.17 RDS DB instances should be configured to copy tags to snapshots",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.17/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 118,
  },
  {
    id: 137,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/DMS.1/finding/57604a9c-5648-4e08-898d-c0963821656d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-128",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.872000",
    ticket_created: "2022-02-25 08:41:43.000000",
    description:
      "DMS.1 Database Migration Service replication instances should not be public",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/DMS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 119,
  },
  {
    id: 138,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudTrail.2/finding/f2726fd2-12d9-4192-8423-72cb8f8bc6f1",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-127",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.426000",
    ticket_created: "2022-02-25 08:41:42.000000",
    description:
      "CloudTrail.2 CloudTrail should have encryption at-rest enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudTrail.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 120,
  },
  {
    id: 139,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ELB.9/finding/6e99e5ab-a2eb-414b-ad94-1c4ccdd3f4ab",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-126",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.246000",
    ticket_created: "2022-02-25 08:41:40.000000",
    description:
      "ELB.9 Classic Load Balancers should have cross-zone load balancing enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ELB.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 121,
  },
  {
    id: 140,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/APIGateway.3/finding/c1192800-51a8-40b9-9c66-df935882f6c1",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-125",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.271000",
    ticket_created: "2022-02-25 08:41:39.000000",
    description:
      "APIGateway.3 API Gateway REST API stages should have AWS X-Ray tracing enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/APIGateway.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 122,
  },
  {
    id: 141,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/ES.8/finding/f8b37a6e-8303-41f6-a5e3-90fe829b9749",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-124",
    severity: "low",
    finding_created: "2022-02-15 17:12:46.783000",
    ticket_created: "2022-02-25 08:41:38.000000",
    description:
      "ES.8 Connections to Elasticsearch domains should be encrypted using TLS 1.2",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/ES.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 123,
  },
  {
    id: 142,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/RDS.16/finding/9fd58a67-a649-4ea0-9457-773bebd8ff37",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-123",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.348000",
    ticket_created: "2022-02-25 08:41:38.000000",
    description:
      "RDS.16 RDS DB clusters should be configured to copy tags to snapshots",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/RDS.16/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 124,
  },
  {
    id: 143,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/Opensearch.3/finding/51fc1de0-3cc1-463c-9640-8c8e3ee5319a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-122",
    severity: "low",
    finding_created: "2022-02-15 17:12:47.347000",
    ticket_created: "2022-02-25 08:41:37.000000",
    description:
      "Opensearch.3 OpenSearch domains should encrypt data sent between nodes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/Opensearch.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 125,
  },
  {
    id: 144,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudFront.5/finding/b6ef8832-e9d3-4d9a-9511-e639258e97d4",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-121",
    severity: "low",
    finding_created: "2022-02-15 17:12:41.272000",
    ticket_created: "2022-02-25 08:41:37.000000",
    description:
      "CloudFront.5 CloudFront distributions should have logging enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudFront.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 126,
  },
  {
    id: 145,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.2/finding/65448d0a-20a7-4e63-8251-3e645f42a31c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-120",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.552000",
    ticket_created: "2022-02-25 08:36:54.000000",
    description: "2.2 Ensure CloudTrail log file validation is enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 127,
  },
  {
    id: 146,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.14/finding/e23acea8-5ad5-4892-a7fd-90293e0d8efc",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-119",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:54.000000",
    description:
      "3.14 Ensure a log metric filter and alarm exist for VPC changes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.14/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 128,
  },
  {
    id: 147,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.22/finding/b78ccd61-fe19-4e29-8744-d321b5fa8007",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-118",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.094000",
    ticket_created: "2022-02-25 08:36:53.000000",
    description:
      '1.22 Ensure IAM policies that allow full "*:*" administrative privileges are not created',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.22/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 129,
  },
  {
    id: 148,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.9/finding/7859abc4-6654-482a-9e1a-59ac11cc0e45",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-117",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.764000",
    ticket_created: "2022-02-25 08:36:53.000000",
    description:
      "3.9 Ensure a log metric filter and alarm exist for AWS Config configuration changes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 130,
  },
  {
    id: 149,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.13/finding/b4d41b11-e21c-47d1-be0f-eef7070adc7a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-116",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:52.000000",
    description:
      "3.13 Ensure a log metric filter and alarm exist for route table changes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.13/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 131,
  },
  {
    id: 150,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.8/finding/a52746b5-1377-490f-97ed-74e046c26395",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-115",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.764000",
    ticket_created: "2022-02-25 08:36:52.000000",
    description:
      "3.8 Ensure a log metric filter and alarm exist for S3 bucket policy changes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 132,
  },
  {
    id: 151,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.4/finding/b2632f0a-1223-495a-bbda-b1544ca0b6f3",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-114",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:51.000000",
    description:
      "3.4 Ensure a log metric filter and alarm exist for IAM policy changes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 133,
  },
  {
    id: 152,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.1/finding/46db0964-e32b-4bca-a9ea-1f27668d84bd",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-113",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:50.000000",
    description:
      "3.1 Ensure a log metric filter and alarm exist for unauthorized API calls",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 134,
  },
  {
    id: 153,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.6/finding/b9c02fa7-ab88-4978-a1a8-7922916f5f29",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-112",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:50.000000",
    description:
      "3.6 Ensure a log metric filter and alarm exist for AWS Management Console authentication failures",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 135,
  },
  {
    id: 154,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.11/finding/eb2e4ace-7e48-4134-8e33-647ea908a20c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-111",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:48.000000",
    description:
      "3.11 Ensure a log metric filter and alarm exist for changes to Network Access Control Lists (NACL)",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.11/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 136,
  },
  {
    id: 155,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.4/finding/6fe03d08-e2d4-496e-8861-e352abf2b630",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-110",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.399000",
    ticket_created: "2022-02-25 08:36:47.000000",
    description: "1.4 Ensure access keys are rotated every 90 days or less",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 137,
  },
  {
    id: 156,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.2/finding/e9a85669-26ac-49b3-9a3b-cbfe2f3694fe",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-109",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.093000",
    ticket_created: "2022-02-25 08:36:46.000000",
    description:
      "1.2 Ensure multi-factor authentication (MFA) is enabled for all IAM users that have a console password",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 138,
  },
  {
    id: 157,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.4/finding/4a8a1ff3-7c2a-43c4-8e60-e608169809f4",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-108",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.704000",
    ticket_created: "2022-02-25 08:36:46.000000",
    description:
      "2.4 Ensure CloudTrail trails are integrated with CloudWatch Logs",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 139,
  },
  {
    id: 158,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.7/finding/fc71414f-f147-4d67-8066-cbfc9dc9f1d8",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-107",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.764000",
    ticket_created: "2022-02-25 08:36:45.000000",
    description:
      "3.7 Ensure a log metric filter and alarm exist for disabling or scheduled deletion of customer created CMKs",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 140,
  },
  {
    id: 159,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.16/finding/ca1033d2-74c4-4a20-a114-a1c58e91aa17",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-106",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.057000",
    ticket_created: "2022-02-25 08:36:44.000000",
    description:
      "1.16 Ensure IAM policies are attached only to groups or roles",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.16/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 141,
  },
  {
    id: 160,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.8/finding/a8551cd2-875a-458a-8d49-524fea341c8e",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-105",
    severity: "low",
    finding_created: "2022-02-15 17:19:28.006000",
    ticket_created: "2022-02-25 08:36:44.000000",
    description: "2.8 Ensure rotation for customer created CMKs is enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 142,
  },
  {
    id: 161,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.10/finding/3866f7b2-2b2b-4436-8958-a65aae7ed656",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-104",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:43.000000",
    description:
      "3.10 Ensure a log metric filter and alarm exist for security group changes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.10/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 143,
  },
  {
    id: 162,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.5/finding/af078c40-5c21-462d-af02-5442814ec9c8",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-103",
    severity: "medium",
    finding_created: "2022-02-15 17:17:42.407000",
    ticket_created: "2022-02-25 08:36:43.000000",
    description: "2.5 Ensure AWS Config is enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 144,
  },
  {
    id: 163,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.2/finding/5aae9ed3-9332-4f82-92a1-1a49e5c0aace",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-102",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:40.000000",
    description:
      "3.2 Ensure a log metric filter and alarm exist for Management Console sign-in without MFA",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 145,
  },
  {
    id: 164,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.3/finding/5c696312-729b-4f97-816c-0351207b22ea",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-101",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:40.000000",
    description:
      '3.3 Ensure a log metric filter and alarm exist for usage of "root" account',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 146,
  },
  {
    id: 165,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.1/finding/ac256738-6a74-42ba-a389-ca90efa397b2",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-100",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.889000",
    ticket_created: "2022-02-25 08:36:39.000000",
    description: '1.1 Avoid the use of the "root" account',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 147,
  },
  {
    id: 166,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.7/finding/d1ed54e1-4512-403b-a61a-6ee00556983d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-99",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.853000",
    ticket_created: "2022-02-25 08:36:38.000000",
    description:
      "2.7 Ensure CloudTrail logs are encrypted at rest using KMS CMKs",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 148,
  },
  {
    id: 167,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.12/finding/628d71a1-a2c2-4216-8e86-5de57760eb4b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-98",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:37.000000",
    description:
      "3.12 Ensure a log metric filter and alarm exist for changes to network gateways",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.12/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 149,
  },
  {
    id: 168,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/3.5/finding/1fe19cd8-7797-4261-b139-9c1db944e9d4",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-97",
    severity: "low",
    finding_created: "2022-02-15 17:17:55.731000",
    ticket_created: "2022-02-25 08:36:37.000000",
    description:
      "3.5 Ensure a log metric filter and alarm exist for CloudTrail configuration changes",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-3.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 150,
  },
  {
    id: 169,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.3/finding/5e08e33b-581f-47a2-9721-792af1e70135",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-96",
    severity: "low",
    finding_created: "2022-02-15 17:19:27.251000",
    ticket_created: "2022-02-25 08:36:36.000000",
    description:
      "1.3 Ensure credentials unused for 90 days or greater are disabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 151,
  },
  {
    id: 170,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.Opensearch.1/finding/32b474a6-00cb-4a84-9b94-f232dd7bb74f",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-95",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.658000",
    ticket_created: "2022-02-25 08:26:56.000000",
    description: "PCI.Opensearch.1 OpenSearch domains should be in a VPC",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.Opensearch.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 152,
  },
  {
    id: 171,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.6/finding/dfa0d13b-eb1a-4c7a-9863-cfd8d8618478",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-94",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.361000",
    ticket_created: "2022-02-25 08:26:55.000000",
    description: "PCI.IAM.6 MFA should be enabled for all IAM users",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 153,
  },
  {
    id: 172,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.SSM.1/finding/37d79be2-8da2-4be1-ad29-c3eed3393b4b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-93",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.659000",
    ticket_created: "2022-02-25 08:26:55.000000",
    description:
      "PCI.SSM.1 EC2 instances managed by Systems Manager should have a patch compliance status of COMPLIANT after a patch installation",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.SSM.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 154,
  },
  {
    id: 173,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.ELBv2.1/finding/3a8cfbdd-028c-4e9f-941b-c6416eb3776e",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-92",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.906000",
    ticket_created: "2022-02-25 08:26:54.000000",
    description:
      "PCI.ELBv2.1 Application Load Balancer should be configured to redirect all HTTP requests to HTTPS",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.ELBv2.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 155,
  },
  {
    id: 174,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.CodeBuild.1/finding/7e5a31a7-7177-4716-82cb-99f7500b1dd2",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-91",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.623000",
    ticket_created: "2022-02-25 08:26:53.000000",
    description:
      "PCI.CodeBuild.1 CodeBuild GitHub or Bitbucket source repository URLs should use OAuth",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.CodeBuild.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 156,
  },
  {
    id: 175,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.CloudTrail.3/finding/86c395b2-6e71-4bcb-b050-2a1a6989bb97",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-90",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.464000",
    ticket_created: "2022-02-25 08:26:53.000000",
    description:
      "PCI.CloudTrail.3 CloudTrail log file validation should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.CloudTrail.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 157,
  },
  {
    id: 176,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.AutoScaling.1/finding/3842e39e-a5ba-44d2-b2e1-d406fecc6e9b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-89",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.257000",
    ticket_created: "2022-02-25 08:26:52.000000",
    description:
      "PCI.AutoScaling.1 Auto scaling groups associated with a load balancer should use load balancer health checks",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.AutoScaling.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 158,
  },
  {
    id: 177,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.Opensearch.2/finding/804ce4f9-da65-4411-b085-74d442565def",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-88",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.658000",
    ticket_created: "2022-02-25 08:26:52.000000",
    description:
      "PCI.Opensearch.2 EBS snapshots should not be publicly restorable",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.Opensearch.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 159,
  },
  {
    id: 178,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.ES.1/finding/795bbf4b-79ca-4ea3-b880-634b87f1d063",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-87",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.057000",
    ticket_created: "2022-02-25 08:26:51.000000",
    description: "PCI.ES.1 Elasticsearch domains should be in a VPC",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.ES.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 160,
  },
  {
    id: 179,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.CloudTrail.1/finding/88bff7ea-9e7b-41ae-be18-b068329644a6",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-86",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.298000",
    ticket_created: "2022-02-25 08:26:50.000000",
    description:
      "PCI.CloudTrail.1 CloudTrail logs should be encrypted at rest using AWS KMS CMKs",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.CloudTrail.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 161,
  },
  {
    id: 180,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.KMS.1/finding/4c292e8a-f548-4e60-87e3-2e33355d0e70",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-85",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.658000",
    ticket_created: "2022-02-25 08:26:48.000000",
    description:
      "PCI.KMS.1 Customer master key (CMK) rotation should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.KMS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 162,
  },
  {
    id: 181,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.CW.1/finding/cc87b50c-12a0-4cfd-999d-78044d402813",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-84",
    severity: "medium",
    finding_created: "2022-02-15 17:17:35.516000",
    ticket_created: "2022-02-25 08:26:48.000000",
    description:
      'PCI.CW.1 A log metric filter and alarm should exist for usage of the "root" user',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.CW.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 163,
  },
  {
    id: 182,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.ES.2/finding/e66f4737-6d5f-4f72-ad59-f416e9152652",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-83",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.204000",
    ticket_created: "2022-02-25 08:26:47.000000",
    description:
      "PCI.ES.2 Elasticsearch domains should have encryption at-rest enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.ES.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 164,
  },
  {
    id: 183,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.2/finding/12e16cbf-4e4d-47e2-9f8f-3fdbde6f8275",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-82",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.204000",
    ticket_created: "2022-02-25 08:26:46.000000",
    description: "PCI.IAM.2 IAM users should not have IAM policies attached",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 165,
  },
  {
    id: 184,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.SageMaker.1/finding/0be66687-e727-4a7f-bd11-24fbc09c7951",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-81",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.793000",
    ticket_created: "2022-02-25 08:26:45.000000",
    description:
      "PCI.SageMaker.1 Amazon SageMaker notebook instances should not have direct internet access",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.SageMaker.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 166,
  },
  {
    id: 185,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.SSM.2/finding/02d64011-8e77-4794-9485-7f6afbfc97c7",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-80",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.659000",
    ticket_created: "2022-02-25 08:26:45.000000",
    description:
      "PCI.SSM.2 EC2 instances managed by Systems Manager should have an association compliance status of COMPLIANT",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.SSM.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 167,
  },
  {
    id: 186,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.Config.1/finding/74646450-b9b1-4367-b880-2db274050e03",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-79",
    severity: "medium",
    finding_created: "2022-02-15 17:17:43.586000",
    ticket_created: "2022-02-25 08:26:44.000000",
    description: "PCI.Config.1 AWS Config should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.Config.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 168,
  },
  {
    id: 187,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.DMS.1/finding/be6d464c-7e82-4fc3-b578-f12bd6cab474",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-78",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.756000",
    ticket_created: "2022-02-25 08:26:43.000000",
    description:
      "PCI.DMS.1 Database Migration Service replication instances should not be public",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.DMS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 169,
  },
  {
    id: 188,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.Redshift.1/finding/bd80db0c-33c1-4d0f-a797-39545c9c7c54",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-77",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.659000",
    ticket_created: "2022-02-25 08:26:43.000000",
    description:
      "PCI.Redshift.1 Amazon Redshift clusters should prohibit public access",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.Redshift.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 170,
  },
  {
    id: 189,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.RDS.2/finding/f1853bce-d684-4229-9ae0-5c96a6517f77",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-76",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.659000",
    ticket_created: "2022-02-25 08:26:41.000000",
    description: "PCI.RDS.2 RDS DB Instances should prohibit public access",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.RDS.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 171,
  },
  {
    id: 190,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.7/finding/2a4cbe7e-83b9-46f8-bf5b-625d1a3fd3b7",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-75",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.510000",
    ticket_created: "2022-02-25 08:26:40.000000",
    description:
      "PCI.IAM.7 IAM user credentials should be disabled if not used within a pre-defined number days",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 172,
  },
  {
    id: 191,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.CodeBuild.2/finding/2a6ea5c1-6ee5-4f3b-b59d-024e6ab5cc8c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-74",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.623000",
    ticket_created: "2022-02-25 08:26:39.000000",
    description:
      "PCI.CodeBuild.2 CodeBuild project environment variables should not contain clear text credentials",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.CodeBuild.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 173,
  },
  {
    id: 192,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.RDS.1/finding/67d1d046-89cd-428a-89bb-6e1c4abf279c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-73",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.659000",
    ticket_created: "2022-02-25 08:26:38.000000",
    description: "PCI.RDS.1 RDS snapshot should be private",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.RDS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 174,
  },
  {
    id: 193,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.3/finding/775e5b4c-a0f7-4ab8-b12c-c8cd98a10bff",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-72",
    severity: "low",
    finding_created: "2022-02-15 17:19:22.205000",
    ticket_created: "2022-02-25 08:26:38.000000",
    description:
      'PCI.IAM.3 IAM policies should not allow full "*" administrative privileges',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 175,
  },
  {
    id: 194,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.4/finding/e0eff7f7-d858-42b0-885b-98c2db1f6677",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-71",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.756000",
    ticket_created: "2022-02-25 08:26:37.000000",
    description: "PCI.EC2.4 Unused EC2 EIPs should be removed",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 176,
  },
  {
    id: 195,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.CloudTrail.4/finding/3ebfd17f-5c5c-418f-8f22-4f2f837a2745",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-70",
    severity: "low",
    finding_created: "2022-02-15 17:19:21.622000",
    ticket_created: "2022-02-25 08:26:36.000000",
    description:
      "PCI.CloudTrail.4 CloudTrail trails should be integrated with Amazon CloudWatch Logs",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.CloudTrail.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 177,
  },
  {
    id: 196,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.3/finding/de4b783d-0455-4707-acb3-f060a80977dd",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-69",
    severity: "medium",
    finding_created: "2022-02-25 05:20:58.365000",
    ticket_created: "2022-02-25 05:21:37.000000",
    description: "EC2.3 Attached EBS volumes should be encrypted at-rest",
    asset: "arn:aws:ec2:us-east-1:340199105480:volume/vol-0b5d526bebce1439f",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 9,
  },
  {
    id: 197,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.6/finding/ff30cb6b-d36e-4a6c-8125-811018a53d91",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-68",
    severity: "medium",
    finding_created: "2022-02-15 16:21:53.948000",
    ticket_created: "2022-02-25 04:27:17.000000",
    description: "PCI.EC2.6 VPC flow logging should be enabled in all VPCs",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-018a108be7489ff72",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 178,
  },
  {
    id: 198,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.8/finding/f1ce5c4b-0304-40c3-98c5-db911d8e3c37",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-67",
    severity: "medium",
    finding_created: "2022-02-15 16:22:02.771000",
    ticket_created: "2022-02-25 04:27:16.000000",
    description:
      "PCI.IAM.8 Password policies for IAM users should have strong configurations",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 179,
  },
  {
    id: 199,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.6/finding/c2d05a27-ebb6-4916-aaff-c2c3cf672888",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-66",
    severity: "critical",
    finding_created: "2022-02-15 16:21:49.839000",
    ticket_created: "2022-02-25 04:27:15.000000",
    description: "IAM.6 Hardware MFA should be enabled for the root user",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 180,
  },
  {
    id: 200,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.9/finding/da5a5fa5-6156-4424-bc5a-147911eba681",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-65",
    severity: "medium",
    finding_created: "2022-02-15 16:22:05.314000",
    ticket_created: "2022-02-25 04:27:13.000000",
    description:
      "1.9 Ensure IAM password policy requires minimum password length of 14 or greater",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 181,
  },
  {
    id: 201,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.14/finding/31832f86-33d9-42f8-98a1-c7f5edea1416",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-64",
    severity: "critical",
    finding_created: "2022-02-15 16:21:49.840000",
    ticket_created: "2022-02-25 04:27:12.000000",
    description: '1.14 Ensure hardware MFA is enabled for the "root" account',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.14/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 182,
  },
  {
    id: 202,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.13/finding/752c5ce9-e0d1-418a-8c9c-920355b89ef8",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-63",
    severity: "low",
    finding_created: "2022-02-15 16:21:55.274000",
    ticket_created: "2022-02-25 04:27:12.000000",
    description: '1.13 Ensure MFA is enabled for the "root" account',
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.13/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 183,
  },
  {
    id: 203,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.3/finding/f71d1b33-bb03-4bef-9d66-3b0c0198ef9a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-62",
    severity: "low",
    finding_created: "2022-02-15 16:20:55.953000",
    ticket_created: "2022-02-25 04:27:11.000000",
    description: "S3.3 S3 buckets should prohibit public write access",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 184,
  },
  {
    id: 204,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.7/finding/e3e6f333-98d7-49ca-824c-cb9ba2abdc5f",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-61",
    severity: "medium",
    finding_created: "2022-02-15 16:21:38.945000",
    ticket_created: "2022-02-25 04:27:10.000000",
    description: "1.7 Ensure IAM password policy requires at least one symbol",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 185,
  },
  {
    id: 205,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.CloudTrail.2/finding/efd82089-18ea-43aa-a170-e448fd9d6ba9",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-60",
    severity: "high",
    finding_created: "2022-02-15 16:22:09.986000",
    ticket_created: "2022-02-25 04:27:10.000000",
    description: "PCI.CloudTrail.2 CloudTrail should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.CloudTrail.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 186,
  },
  {
    id: 206,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.1/finding/11b8b189-e92f-4c69-bc65-08266c2c362f",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-59",
    severity: "low",
    finding_created: "2022-02-15 16:20:55.954000",
    ticket_created: "2022-02-25 04:27:09.000000",
    description: "PCI.S3.1 S3 buckets should prohibit public write access",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 187,
  },
  {
    id: 207,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.1/finding/f6cfa89c-75c6-4ac4-a9c2-13828e98807b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-58",
    severity: "low",
    finding_created: "2022-02-15 16:20:55.953000",
    ticket_created: "2022-02-25 04:27:08.000000",
    description: "PCI.S3.1 S3 buckets should prohibit public write access",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 187,
  },
  {
    id: 208,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.2/finding/65fc9613-c91b-42bc-a9c6-193a6b1f5906",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-57",
    severity: "low",
    finding_created: "2022-02-24 04:15:42.211000",
    ticket_created: "2022-02-25 04:27:08.000000",
    description: "PCI.S3.2 S3 buckets should prohibit public read access",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 188,
  },
  {
    id: 209,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.1/finding/48ef4642-1c83-4fb0-b1f4-83efbb4c1d70",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-56",
    severity: "high",
    finding_created: "2022-02-15 16:21:59.075000",
    ticket_created: "2022-02-25 04:27:05.000000",
    description: "2.1 Ensure CloudTrail is enabled in all regions",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 189,
  },
  {
    id: 210,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.4/finding/e31bff9a-890c-4372-85d3-562b2d3edb71",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-55",
    severity: "critical",
    finding_created: "2022-02-15 16:21:49.840000",
    ticket_created: "2022-02-25 04:27:05.000000",
    description: "PCI.IAM.4 Hardware MFA should be enabled for the root user",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 190,
  },
  {
    id: 211,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.6/finding/e7f20e1c-baf6-42fa-b30e-33c11d068a7b",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-54",
    severity: "medium",
    finding_created: "2022-02-15 16:21:53.948000",
    ticket_created: "2022-02-25 04:27:04.000000",
    description: "PCI.EC2.6 VPC flow logging should be enabled in all VPCs",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-016c7b2c4c843f857",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 178,
  },
  {
    id: 212,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.7/finding/4ae761b0-b4c1-4802-9f0f-2df2303cb704",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-53",
    severity: "medium",
    finding_created: "2022-02-15 16:21:57.496000",
    ticket_created: "2022-02-25 04:27:03.000000",
    description: "EC2.7 EBS default encryption should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 191,
  },
  {
    id: 213,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.6/finding/4448e407-d934-4515-a103-2382056f2136",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-52",
    severity: "medium",
    finding_created: "2022-02-15 16:21:43.079000",
    ticket_created: "2022-02-25 04:27:02.000000",
    description: "PCI.S3.6 S3 Block Public Access setting should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 192,
  },
  {
    id: 214,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.12/finding/23c54941-9b90-44e9-9e3f-f71cfbfdc296",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-51",
    severity: "low",
    finding_created: "2022-02-15 16:22:03.523000",
    ticket_created: "2022-02-25 04:27:02.000000",
    description: "1.12 Ensure no root account access key exists",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.12/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 193,
  },
  {
    id: 215,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.2/finding/e2b79c04-127b-4e34-ae2a-ef02cb860f9d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-50",
    severity: "low",
    finding_created: "2022-02-15 16:22:02.195000",
    ticket_created: "2022-02-25 04:27:01.000000",
    description: "S3.2 S3 buckets should prohibit public read access",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 194,
  },
  {
    id: 216,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.2/finding/4cb9a262-dfe1-42e8-9451-feb581293c70",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-49",
    severity: "low",
    finding_created: "2022-02-15 16:22:02.195000",
    ticket_created: "2022-02-25 04:27:00.000000",
    description: "PCI.S3.2 S3 buckets should prohibit public read access",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 188,
  },
  {
    id: 217,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/CloudTrail.1/finding/d9625576-7302-4040-84a1-710507fe4fdc",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-48",
    severity: "high",
    finding_created: "2022-02-15 16:21:59.075000",
    ticket_created: "2022-02-25 04:26:58.000000",
    description:
      "CloudTrail.1 CloudTrail should be enabled and configured with at least one multi-region trail",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/CloudTrail.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 195,
  },
  {
    id: 218,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.9/finding/752a5d2f-62bb-407b-bb38-f801941a3640",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-47",
    severity: "medium",
    finding_created: "2022-02-15 16:21:53.949000",
    ticket_created: "2022-02-25 04:26:58.000000",
    description: "2.9 Ensure VPC flow logging is enabled in all VPCs",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-016c7b2c4c843f857",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 196,
  },
  {
    id: 219,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.2/finding/61a093d0-9f54-492f-8867-54ae9f242fc0",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-46",
    severity: "low",
    finding_created: "2022-02-15 16:22:02.195000",
    ticket_created: "2022-02-25 04:26:57.000000",
    description: "PCI.S3.2 S3 buckets should prohibit public read access",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 188,
  },
  {
    id: 220,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.2/finding/6683e886-72b7-48e0-b037-d233e6a0f84d",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-45",
    severity: "low",
    finding_created: "2022-02-15 16:22:02.195000",
    ticket_created: "2022-02-25 04:26:56.000000",
    description: "S3.2 S3 buckets should prohibit public read access",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 194,
  },
  {
    id: 221,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.1/finding/57e62ef6-de02-4da7-bbea-ac2a1e4b8efd",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-44",
    severity: "low",
    finding_created: "2022-02-15 16:22:05.328000",
    ticket_created: "2022-02-25 04:26:56.000000",
    description:
      "EC2.1 EBS snapshots should not be public, determined by the ability to be restorable by anyone",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 197,
  },
  {
    id: 222,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.10/finding/8b196a82-cdf9-4bba-8db0-56cd02848721",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-43",
    severity: "medium",
    finding_created: "2022-02-15 16:22:09.986000",
    ticket_created: "2022-02-25 04:26:55.000000",
    description:
      "EC2.10 Amazon EC2 should be configured to use VPC endpoints that are created for the Amazon EC2 service",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-018a108be7489ff72",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.10/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 198,
  },
  {
    id: 223,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.2/finding/148af151-4a05-46d9-b33d-387e43c54b56",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-42",
    severity: "low",
    finding_created: "2022-02-24 04:15:42.211000",
    ticket_created: "2022-02-25 04:26:54.000000",
    description: "S3.2 S3 buckets should prohibit public read access",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 194,
  },
  {
    id: 224,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/2.9/finding/bda7ec7c-5e73-46c7-b6b6-f5c36b107395",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-41",
    severity: "medium",
    finding_created: "2022-02-15 16:21:53.948000",
    ticket_created: "2022-02-25 04:26:54.000000",
    description: "2.9 Ensure VPC flow logging is enabled in all VPCs",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-018a108be7489ff72",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-2.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 196,
  },
  {
    id: 225,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.10/finding/a039ed1d-d7bb-43a5-9819-263d0dd587d0",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-40",
    severity: "medium",
    finding_created: "2022-02-15 16:22:09.986000",
    ticket_created: "2022-02-25 04:26:53.000000",
    description:
      "EC2.10 Amazon EC2 should be configured to use VPC endpoints that are created for the Amazon EC2 service",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-016c7b2c4c843f857",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.10/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 198,
  },
  {
    id: 226,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.3/finding/8f98b9b7-e0c2-4e61-bd19-0f91a3f8983e",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-39",
    severity: "low",
    finding_created: "2022-02-15 16:20:55.954000",
    ticket_created: "2022-02-25 04:26:52.000000",
    description: "S3.3 S3 buckets should prohibit public write access",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 184,
  },
  {
    id: 227,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.7/finding/0d98d191-d456-4738-be67-ca7dcee76271",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-38",
    severity: "medium",
    finding_created: "2022-02-15 16:22:11.175000",
    ticket_created: "2022-02-25 04:26:52.000000",
    description:
      "IAM.7 Password policies for IAM users should have strong configurations",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.7/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 199,
  },
  {
    id: 228,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/IAM.4/finding/72c7b658-8fb0-41b3-a577-a4ee79368930",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-37",
    severity: "low",
    finding_created: "2022-02-15 16:22:03.523000",
    ticket_created: "2022-02-25 04:26:51.000000",
    description: "IAM.4 IAM root user access key should not exist",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/IAM.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 200,
  },
  {
    id: 229,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.6/finding/4832add1-299f-4ddd-96ce-b234cb3404db",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-36",
    severity: "medium",
    finding_created: "2022-02-15 16:22:07.678000",
    ticket_created: "2022-02-25 04:26:50.000000",
    description:
      "1.6 Ensure IAM password policy requires at least one lowercase letter",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 201,
  },
  {
    id: 230,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.6/finding/1005e269-d0db-4ea0-9d87-4e804d50c808",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-35",
    severity: "medium",
    finding_created: "2022-02-15 16:21:53.949000",
    ticket_created: "2022-02-25 04:26:48.000000",
    description: "EC2.6 VPC flow logging should be enabled in all VPCs",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-016c7b2c4c843f857",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 202,
  },
  {
    id: 231,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.6/finding/c73a6201-aa1a-48ba-8e8b-7b29ea062a5c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-34",
    severity: "medium",
    finding_created: "2022-02-15 16:21:53.948000",
    ticket_created: "2022-02-25 04:26:47.000000",
    description: "EC2.6 VPC flow logging should be enabled in all VPCs",
    asset: "arn:aws:ec2:us-east-1:340199105480:vpc/vpc-018a108be7489ff72",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 202,
  },
  {
    id: 232,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.3/finding/60d64951-e525-4002-beba-a9eddd107d2a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-33",
    severity: "low",
    finding_created: "2022-02-24 04:15:36.925000",
    ticket_created: "2022-02-25 04:26:47.000000",
    description: "S3.3 S3 buckets should prohibit public write access",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 184,
  },
  {
    id: 233,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.1/finding/3da3ff8e-5851-4cd0-a366-48cf770f5d97",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-32",
    severity: "medium",
    finding_created: "2022-02-15 16:21:43.080000",
    ticket_created: "2022-02-25 04:26:46.000000",
    description: "S3.1 S3 Block Public Access setting should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 203,
  },
  {
    id: 234,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/GuardDuty.1/finding/f7cf8b9d-470c-4f50-ac8c-447e35f8c550",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-31",
    severity: "high",
    finding_created: "2022-02-15 16:22:01.021000",
    ticket_created: "2022-02-25 04:26:45.000000",
    description: "GuardDuty.1 GuardDuty should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/GuardDuty.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 204,
  },
  {
    id: 235,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.5/finding/1cc92346-f31c-4a4e-9c9b-981dcd5092d9",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-30",
    severity: "low",
    finding_created: "2022-02-15 16:21:55.274000",
    ticket_created: "2022-02-25 04:26:44.000000",
    description: "PCI.IAM.5 Virtual MFA should be enabled for the root user",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 205,
  },
  {
    id: 236,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.8/finding/3e358524-add2-487e-b37a-daea33896998",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-29",
    severity: "medium",
    finding_created: "2022-02-15 16:21:48.094000",
    ticket_created: "2022-02-25 04:26:44.000000",
    description: "1.8 Ensure IAM password policy requires at least one number",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 206,
  },
  {
    id: 237,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.20/finding/a88b54f2-4d49-4fbc-ae6b-fcf1a232e0b6",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-28",
    severity: "low",
    finding_created: "2022-02-15 16:22:01.093000",
    ticket_created: "2022-02-25 04:26:43.000000",
    description:
      "1.20 Ensure a support role has been created to manage incidents with AWS Support",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.20/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 207,
  },
  {
    id: 238,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.1/finding/69600d59-e165-416c-80b8-b06a906d6c00",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-27",
    severity: "low",
    finding_created: "2022-02-15 16:22:05.327000",
    ticket_created: "2022-02-25 04:26:42.000000",
    description: "PCI.EC2.1 EBS snapshots should not be publicly restorable",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 208,
  },
  {
    id: 239,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.5/finding/40db44d3-5bd9-4cd5-9501-6cfa8e0943d7",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-26",
    severity: "medium",
    finding_created: "2022-02-15 16:22:03.858000",
    ticket_created: "2022-02-25 04:26:40.000000",
    description:
      "1.5 Ensure IAM password policy requires at least one uppercase letter",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 209,
  },
  {
    id: 240,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.10/finding/d0628284-b685-4ecc-bec8-085b94846c9a",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-25",
    severity: "low",
    finding_created: "2022-02-15 16:21:54.841000",
    ticket_created: "2022-02-25 04:26:39.000000",
    description: "1.10 Ensure IAM password policy prevents password reuse",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.10/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 210,
  },
  {
    id: 241,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.1/finding/db353f74-4a9b-4378-84ab-1ac637555b86",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-24",
    severity: "low",
    finding_created: "2022-02-24 04:15:36.925000",
    ticket_created: "2022-02-25 04:26:38.000000",
    description: "PCI.S3.1 S3 buckets should prohibit public write access",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 187,
  },
  {
    id: 242,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.GuardDuty.1/finding/99b2f418-246e-4617-94e7-bff2cdd3294c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-23",
    severity: "high",
    finding_created: "2022-02-15 16:22:01.021000",
    ticket_created: "2022-02-25 04:26:37.000000",
    description: "PCI.GuardDuty.1 GuardDuty should be enabled",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.GuardDuty.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 211,
  },
  {
    id: 243,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.IAM.1/finding/7fac4fcf-603d-4981-a91f-a1f55df850e5",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-22",
    severity: "low",
    finding_created: "2022-02-15 16:22:03.523000",
    ticket_created: "2022-02-25 04:26:37.000000",
    description: "PCI.IAM.1 IAM root user access key should not exist",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.IAM.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 212,
  },
  {
    id: 244,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/1.11/finding/f4f3a962-a231-417e-b960-a8db23c8fcd3",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-21",
    severity: "low",
    finding_created: "2022-02-15 16:21:38.824000",
    ticket_created: "2022-02-25 04:26:36.000000",
    description:
      "1.11 Ensure IAM password policy expires passwords within 90 days or less",
    asset: "AWS::::Account:340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-1.11/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 213,
  },
  {
    id: 245,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.3/finding/0527638f-346d-43e6-9994-769f8eb6e445",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-20",
    severity: "low",
    finding_created: "2022-02-24 04:41:11.157000",
    ticket_created: "2022-02-25 04:06:26.000000",
    description:
      "PCI.S3.3 S3 buckets should have cross-region replication enabled",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 214,
  },
  {
    id: 246,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SQS.1/finding/9ca129c1-08d2-4779-b681-273d748e816c",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-19",
    severity: "medium",
    finding_created: "2022-02-24 21:16:57.216000",
    ticket_created: "2022-02-25 04:06:25.000000",
    description: "SQS.1 Amazon SQS queues should be encrypted at rest",
    asset:
      "arn:aws:sqs:us-east-1:340199105480:AwsServiceManagementConnectorForSecurityHubQueue",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SQS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 215,
  },
  {
    id: 247,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.4/finding/de23bf88-2fe4-4369-9e82-f958fa9d5198",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-18",
    severity: "low",
    finding_created: "2022-02-24 04:15:32.373000",
    ticket_created: "2022-02-25 04:06:24.000000",
    description: "S3.4 S3 buckets should have server-side encryption enabled",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 17,
  },
  {
    id: 248,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.3/finding/99a634f5-4b33-48a2-b36d-f487c5b59f59",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-17",
    severity: "low",
    finding_created: "2022-02-15 16:27:06.973000",
    ticket_created: "2022-02-25 04:06:23.000000",
    description:
      "PCI.S3.3 S3 buckets should have cross-region replication enabled",
    asset: "arn:aws:s3:::config-bucket-340199105480",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 214,
  },
  {
    id: 249,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.5/finding/f0e75b1b-24b8-4844-a2fc-859a5a6116f3",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-16",
    severity: "medium",
    finding_created: "2022-02-24 04:15:42.613000",
    ticket_created: "2022-02-25 04:06:22.000000",
    description:
      "S3.5 S3 buckets should require requests to use Secure Socket Layer",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 10,
  },
  {
    id: 250,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.2/finding/2f51b7b8-b5c5-41b5-b3ba-e711e112ca3e",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-15",
    severity: "low",
    finding_created: "2022-02-15 16:22:49.245000",
    ticket_created: "2022-02-25 04:06:21.000000",
    description:
      "4.2 Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0c5ea78975551c465",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.2/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 8,
  },
  {
    id: 251,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.8/finding/284c8211-ede2-47a0-8474-2c372208fd13",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-14",
    severity: "high",
    finding_created: "2022-02-24 04:15:33.107000",
    ticket_created: "2022-02-25 04:06:20.000000",
    description:
      "S3.8 S3 Block Public Access setting should be enabled at the bucket-level",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.8/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 7,
  },
  {
    id: 252,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.5/finding/9bbb2909-03bd-4dbc-8b72-953030cf5195",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-13",
    severity: "medium",
    finding_created: "2022-02-24 04:15:42.613000",
    ticket_created: "2022-02-25 04:06:19.000000",
    description:
      "PCI.S3.5 S3 buckets should require requests to use Secure Socket Layer",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 14,
  },
  {
    id: 253,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.3/finding/ac5d441c-d715-403a-9f20-d405137d64d8",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-12",
    severity: "medium",
    finding_created: "2022-02-25 00:58:10.066000",
    ticket_created: "2022-02-25 04:06:18.000000",
    description: "EC2.3 Attached EBS volumes should be encrypted at-rest",
    asset: "arn:aws:ec2:us-east-1:340199105480:volume/vol-0b5d526bebce1439f",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 9,
  },
  {
    id: 254,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/cis-aws-foundations-benchmark/v/1.2.0/4.1/finding/50e7d654-4b33-4ccc-8b94-e607e0833efd",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-11",
    severity: "high",
    finding_created: "2022-02-15 16:22:47.275000",
    ticket_created: "2022-02-25 04:06:18.000000",
    description:
      "4.1 Ensure no security groups allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0c5ea78975551c465",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/standards-cis-4.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub CIS documentation.",
    grouped_finding_id: 5,
  },
  {
    id: 255,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.3/finding/95c7af6c-9ca4-40fa-849e-bdb9f26436ec",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-10",
    severity: "medium",
    finding_created: "2022-02-24 23:54:49.604000",
    ticket_created: "2022-02-25 04:06:17.000000",
    description: "EC2.3 Attached EBS volumes should be encrypted at-rest",
    asset: "arn:aws:ec2:us-east-1:340199105480:volume/vol-0b5d526bebce1439f",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 9,
  },
  {
    id: 256,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.3/finding/b1eff09b-a0cb-4c4a-8245-c5c6f30c4947",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-9",
    severity: "low",
    finding_created: "2022-02-15 16:27:06.972000",
    ticket_created: "2022-02-25 04:06:16.000000",
    description:
      "PCI.S3.3 S3 buckets should have cross-region replication enabled",
    asset: "arn:aws:s3:::silkdemo",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.3/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 214,
  },
  {
    id: 257,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.18/finding/7057a735-2159-4f06-9a7c-902d3e215cb8",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-8",
    severity: "high",
    finding_created: "2022-02-15 16:22:45.969000",
    ticket_created: "2022-02-25 04:06:14.000000",
    description:
      "EC2.18 Security groups should only allow unrestricted incoming traffic for authorized ports",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0c5ea78975551c465",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.18/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 3,
  },
  {
    id: 258,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.EC2.5/finding/5f201126-e224-4670-80db-4d503fb38963",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-7",
    severity: "high",
    finding_created: "2022-02-15 16:22:47.275000",
    ticket_created: "2022-02-25 04:06:14.000000",
    description:
      "PCI.EC2.5 Security groups should not allow ingress from 0.0.0.0/0 to port 22",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0c5ea78975551c465",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.EC2.5/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 2,
  },
  {
    id: 259,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.9/finding/f0f6b5dc-fed2-4217-a543-03b21ce7ae67",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-6",
    severity: "medium",
    finding_created: "2022-02-24 04:15:28.977000",
    ticket_created: "2022-02-25 04:06:12.000000",
    description: "S3.9 S3 bucket server access logging should be enabled",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.9/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 11,
  },
  {
    id: 260,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/S3.6/finding/e7b061a0-f15a-49f2-a1b1-cd17f296a244",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-5",
    severity: "low",
    finding_created: "2022-02-24 04:15:28.705000",
    ticket_created: "2022-02-25 04:06:12.000000",
    description:
      "S3.6 S3 permissions granted to other AWS accounts in bucket policies should be restricted",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/S3.6/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 13,
  },
  {
    id: 261,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/pci-dss/v/3.2.1/PCI.S3.4/finding/fe2abc02-c8df-42c6-8f11-ccb2c1ea6178",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-4",
    severity: "low",
    finding_created: "2022-02-24 04:15:32.373000",
    ticket_created: "2022-02-25 04:06:11.000000",
    description:
      "PCI.S3.4 S3 buckets should have server-side encryption enabled",
    asset: "arn:aws:s3:::cf-templates-1dvf1h3yxqiif-us-east-1",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/PCI.S3.4/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub PCI DSS documentation.",
    grouped_finding_id: 6,
  },
  {
    id: 262,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/EC2.19/finding/6b93474f-444d-4bff-a89d-0ddbb8d0e585",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-3",
    severity: "critical",
    finding_created: "2022-02-15 16:22:50.005000",
    ticket_created: "2022-02-25 04:06:10.000000",
    description:
      "EC2.19 Security groups should not allow unrestricted access to ports with high risk",
    asset:
      "arn:aws:ec2:us-east-1:340199105480:security-group/sg-0c5ea78975551c465",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/EC2.19/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 12,
  },
  {
    id: 263,
    source_security_tool_name: "AWS Security Hub",
    source_security_tool_id:
      "arn:aws:securityhub:us-east-1:340199105480:subscription/aws-foundational-security-best-practices/v/1.0.0/SQS.1/finding/966c5fc5-afbd-4118-a451-c558e00648e5",
    source_collaboration_tool_name: "Jira",
    source_collaboration_tool_id: "SEC-2",
    severity: "medium",
    finding_created: "2022-02-24 21:12:15.266000",
    ticket_created: "2022-02-25 04:06:09.000000",
    description: "SQS.1 Amazon SQS queues should be encrypted at rest",
    asset:
      "arn:aws:sqs:us-east-1:340199105480:AwsServiceManagementConnectorForSecurityHubQueue",
    status: "open",
    remediation_url:
      "https://docs.aws.amazon.com/console/securityhub/SQS.1/remediation",
    remediation_text:
      "For directions on how to fix this issue, consult the AWS Security Hub Foundational Security Best Practices documentation.",
    grouped_finding_id: 215,
  },
];
