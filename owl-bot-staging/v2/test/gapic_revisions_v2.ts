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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as revisionsModule from '../src';

import {PassThrough} from 'stream';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().rejects(callError) : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().callsArgWith(2, callError) : sinon.stub().callsArgWith(2, null, mockOperation);
}

function stubPageStreamingCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    const pagingStub = sinon.stub();
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
        }
    }
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : pagingStub;
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    // trigger as many responses as needed
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            setImmediate(() => { mockStream.write({}); });
        }
        setImmediate(() => { mockStream.end(); });
    } else {
        setImmediate(() => { mockStream.write({}); });
        setImmediate(() => { mockStream.end(); });
    }
    return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    let counter = 0;
    const asyncIterable = {
        [Symbol.asyncIterator]() {
            return {
                async next() {
                    if (error) {
                        return Promise.reject(error);
                    }
                    if (counter >= responses!.length) {
                        return Promise.resolve({done: true, value: undefined});
                    }
                    return Promise.resolve({done: false, value: responses![counter++]});
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v2.RevisionsClient', () => {
    it('has servicePath', () => {
        const servicePath = revisionsModule.v2.RevisionsClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = revisionsModule.v2.RevisionsClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = revisionsModule.v2.RevisionsClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new revisionsModule.v2.RevisionsClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new revisionsModule.v2.RevisionsClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.revisionsStub, undefined);
        await client.initialize();
        assert(client.revisionsStub);
    });

    it('has close method for the initialized client', done => {
        const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.initialize();
        assert(client.revisionsStub);
        client.close().then(() => {
            done();
        });
    });

    it('has close method for the non-initialized client', done => {
        const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.revisionsStub, undefined);
        client.close().then(() => {
            done();
        });
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('getRevision', () => {
        it('invokes getRevision without error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.GetRevisionRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.run.v2.Revision());
            client.innerApiCalls.getRevision = stubSimpleCall(expectedResponse);
            const [response] = await client.getRevision(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getRevision as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getRevision without error using callback', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.GetRevisionRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.cloud.run.v2.Revision());
            client.innerApiCalls.getRevision = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getRevision(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.run.v2.IRevision|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getRevision as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getRevision with error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.GetRevisionRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getRevision = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getRevision(request), expectedError);
            assert((client.innerApiCalls.getRevision as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getRevision with closed client', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.GetRevisionRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.getRevision(request), expectedError);
        });
    });

    describe('deleteRevision', () => {
        it('invokes deleteRevision without error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.DeleteRevisionRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.deleteRevision = stubLongRunningCall(expectedResponse);
            const [operation] = await client.deleteRevision(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteRevision as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteRevision without error using callback', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.DeleteRevisionRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.deleteRevision = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteRevision(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.cloud.run.v2.IRevision, protos.google.cloud.run.v2.IRevision>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.cloud.run.v2.IRevision, protos.google.cloud.run.v2.IRevision>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteRevision as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteRevision with call error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.DeleteRevisionRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteRevision = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.deleteRevision(request), expectedError);
            assert((client.innerApiCalls.deleteRevision as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteRevision with LRO error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.DeleteRevisionRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteRevision = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.deleteRevision(request);
            await assert.rejects(operation.promise(), expectedError);
            assert((client.innerApiCalls.deleteRevision as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes checkDeleteRevisionProgress without error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedResponse = generateSampleMessage(new operationsProtos.google.longrunning.Operation());
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkDeleteRevisionProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkDeleteRevisionProgress with error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkDeleteRevisionProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('listRevisions', () => {
        it('invokes listRevisions without error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.ListRevisionsRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
            ];
            client.innerApiCalls.listRevisions = stubSimpleCall(expectedResponse);
            const [response] = await client.listRevisions(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listRevisions as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listRevisions without error using callback', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.ListRevisionsRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
            ];
            client.innerApiCalls.listRevisions = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listRevisions(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.run.v2.IRevision[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listRevisions as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listRevisions with error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.ListRevisionsRequest());
            const expectedHeaderRequestParams = "";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.listRevisions = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listRevisions(request), expectedError);
            assert((client.innerApiCalls.listRevisions as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listRevisionsStream without error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.ListRevisionsRequest());
            const expectedHeaderRequestParams = "";
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
            ];
            client.descriptors.page.listRevisions.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listRevisionsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.cloud.run.v2.Revision[] = [];
                stream.on('data', (response: protos.google.cloud.run.v2.Revision) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const responses = await promise;
            assert.deepStrictEqual(responses, expectedResponse);
            assert((client.descriptors.page.listRevisions.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listRevisions, request));
        });

        it('invokes listRevisionsStream with error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.ListRevisionsRequest());
            const expectedHeaderRequestParams = "";
            const expectedError = new Error('expected');
            client.descriptors.page.listRevisions.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listRevisionsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.cloud.run.v2.Revision[] = [];
                stream.on('data', (response: protos.google.cloud.run.v2.Revision) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
            assert((client.descriptors.page.listRevisions.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listRevisions, request));
        });

        it('uses async iteration with listRevisions without error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.ListRevisionsRequest());
            const expectedHeaderRequestParams = "";
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
              generateSampleMessage(new protos.google.cloud.run.v2.Revision()),
            ];
            client.descriptors.page.listRevisions.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.google.cloud.run.v2.IRevision[] = [];
            const iterable = client.listRevisionsAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listRevisions.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });

        it('uses async iteration with listRevisions with error', async () => {
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.run.v2.ListRevisionsRequest());
            const expectedHeaderRequestParams = "";const expectedError = new Error('expected');
            client.descriptors.page.listRevisions.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listRevisionsAsync(request);
            await assert.rejects(async () => {
                const responses: protos.google.cloud.run.v2.IRevision[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listRevisions.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });
    });

    describe('Path templates', () => {

        describe('cryptoKey', () => {
            const fakePath = "/rendered/path/cryptoKey";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                key_ring: "keyRingValue",
                crypto_key: "cryptoKeyValue",
            };
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.cryptoKeyPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.cryptoKeyPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('cryptoKeyPath', () => {
                const result = client.cryptoKeyPath("projectValue", "locationValue", "keyRingValue", "cryptoKeyValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.cryptoKeyPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromCryptoKeyName', () => {
                const result = client.matchProjectFromCryptoKeyName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.cryptoKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromCryptoKeyName', () => {
                const result = client.matchLocationFromCryptoKeyName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.cryptoKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchKeyRingFromCryptoKeyName', () => {
                const result = client.matchKeyRingFromCryptoKeyName(fakePath);
                assert.strictEqual(result, "keyRingValue");
                assert((client.pathTemplates.cryptoKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchCryptoKeyFromCryptoKeyName', () => {
                const result = client.matchCryptoKeyFromCryptoKeyName(fakePath);
                assert.strictEqual(result, "cryptoKeyValue");
                assert((client.pathTemplates.cryptoKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('location', () => {
            const fakePath = "/rendered/path/location";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
            };
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.locationPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.locationPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('locationPath', () => {
                const result = client.locationPath("projectValue", "locationValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.locationPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromLocationName', () => {
                const result = client.matchProjectFromLocationName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.locationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromLocationName', () => {
                const result = client.matchLocationFromLocationName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.locationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('project', () => {
            const fakePath = "/rendered/path/project";
            const expectedParameters = {
                project: "projectValue",
            };
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectPath', () => {
                const result = client.projectPath("projectValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectName', () => {
                const result = client.matchProjectFromProjectName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('revision', () => {
            const fakePath = "/rendered/path/revision";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                service: "serviceValue",
                revision: "revisionValue",
            };
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.revisionPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.revisionPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('revisionPath', () => {
                const result = client.revisionPath("projectValue", "locationValue", "serviceValue", "revisionValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.revisionPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromRevisionName', () => {
                const result = client.matchProjectFromRevisionName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.revisionPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromRevisionName', () => {
                const result = client.matchLocationFromRevisionName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.revisionPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchServiceFromRevisionName', () => {
                const result = client.matchServiceFromRevisionName(fakePath);
                assert.strictEqual(result, "serviceValue");
                assert((client.pathTemplates.revisionPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchRevisionFromRevisionName', () => {
                const result = client.matchRevisionFromRevisionName(fakePath);
                assert.strictEqual(result, "revisionValue");
                assert((client.pathTemplates.revisionPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('service', () => {
            const fakePath = "/rendered/path/service";
            const expectedParameters = {
                project: "projectValue",
                location: "locationValue",
                service: "serviceValue",
            };
            const client = new revisionsModule.v2.RevisionsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.servicePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.servicePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('servicePath', () => {
                const result = client.servicePath("projectValue", "locationValue", "serviceValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.servicePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromServiceName', () => {
                const result = client.matchProjectFromServiceName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.servicePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchLocationFromServiceName', () => {
                const result = client.matchLocationFromServiceName(fakePath);
                assert.strictEqual(result, "locationValue");
                assert((client.pathTemplates.servicePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchServiceFromServiceName', () => {
                const result = client.matchServiceFromServiceName(fakePath);
                assert.strictEqual(result, "serviceValue");
                assert((client.pathTemplates.servicePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
