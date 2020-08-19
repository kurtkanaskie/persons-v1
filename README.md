# persons-v1

Sample API proxy `persons-v1` with path chaining to `persons-v1-mock`.
Mock uses a KVM with an initial value of the data structure for Appsheet.

## Install
Using Apigeetool
```
export ORG=YOUR_ORG
export ENV=test

apigeetool createkvmmap --netrc -o $ORG -e $ENV --mapName persons-v1-mock
apigeetool deployproxy --netrc -o $ORG -e $ENV -n persons-v1-mock -d ./persons-v1-mock
apigeetool deployproxy --netrc -o $ORG -e $ENV -n persons-v1 -d ./persons-v1
```

### Setup API Key Validation in Apigee (optional, only if you want to use the VA-Header policy)
1. Create your API Proxy and add a Verify API Key policy for the x-apikey header.
2. Create an API Product and add the proxy.
3. Create an App Developer.
4. Create an App that consumes the API Product and copy the API Key.


The API Key is passed in the `x-apikey` header of each request from Appsheet (its also sent as the `apikey` query param).

### URL to OAS
URL to the OAS.yaml is `$HOST/v1/persons/oas.yaml`
