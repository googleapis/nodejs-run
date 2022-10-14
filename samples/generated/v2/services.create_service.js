// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, service, serviceId) {
  // [START run_v2_generated_Services_CreateService_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The location and project in which this service should be created.
   *  Format: projects/{project}/locations/{location}
   *  Only lowercase characters, digits, and hyphens.
   */
  // const parent = 'abc123'
  /**
   *  Required. The Service instance to create.
   */
  // const service = {}
  /**
   *  Required. The unique identifier for the Service. It must begin with letter,
   *  and may not end with hyphen; must contain fewer than 50 characters.
   *  The name of the service becomes {parent}/services/{service_id}.
   */
  // const serviceId = 'abc123'
  /**
   *  Indicates that the request should be validated and default values
   *  populated, without persisting the request or creating any resources.
   */
  // const validateOnly = true

  // Imports the Run library
  const {ServicesClient} = require('@google-cloud/run').v2;

  // Instantiates a client
  const runClient = new ServicesClient();

  async function callCreateService() {
    // Construct request
    const request = {
      parent,
      service,
      serviceId,
    };

    // Run request
    const [operation] = await runClient.createService(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateService();
  // [END run_v2_generated_Services_CreateService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
