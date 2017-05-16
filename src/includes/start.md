# Getting Started

**Unified**  provides a simple, powerful, and easy to use REST API to transform your customer information into actionable data that anyone in your company can use. To get started using our API is quick and easy:

- [Sign up](#) for a developer account
- Sign in and request your API key [here](#)

## Interacting with the API

When making requests, arguments can be passed as params, form data or JSON with correct Content-Type header.

### HTTP Verbs

Verb | Meaning
---------- | -------
GET	| Read the resource(s)
DELETE	| Remove the resource(s)
POST	| Create new resources
PUT | Modify existing resrouces


### HTTP Status Codes

Code | Meaning
---------- | -------
200	| OK -- everything is working
201	| OK -- a new resource has been created
204	| OK -- the resource was successfully deleted
400 | Bad Request -- Your request sucks
401 | Unauthorized -- Your API key is wrong
403 | Forbidden -- The resource is hidden for administrators only
404 | Not Found -- The specified resource could not be found
405 | Method Not Allowed -- You tried to access a resource with an invalid method
406 | Not Acceptable -- You requested a format that isn't json
410 | Gone -- The resource requested has been removed from our servers
429 | Too Many Requests -- You're requesting too many kittens! Slow down!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Please try again later.


## Authentication

> Authentication Request

```shell
curl --request POST \
  --url /api/v1/users/sign_in \
  --header 'authorization: application/json' \
  --header 'cache-control: no-cache' \

  {"username": "demo", "password":"pw"}
```

> Response

```json
{
  "version": "1.0",
  "status": 200,
  "entities": {
    "user": {
      "username": "DemoUser",
      "user_profile": {
        "user_id": 1,
        "organization_name": "Brokerage",
        "last_name": "Demo",
        "first_name": "User",
        "description": "A demo user account",
        "avatar": {
          "url": "http://youravatarurl.com",
          "thumb": {
            "url": "http://youravatarthumbnailurl.com"
          }
        }
      },
      "description": "Vendor",
      "company_name": "Your Company",
      "authToken": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjEiLCJleHAiOjE0OTY1NzI3MjEsImlhdCI6MTQ5Mzk4MDcyMSwiaXNzIjoiVW5pZmllZCIsImp0aSI6ImNmYmI4OGFlLWQ1OTYtNDFkZS1iOTVhLTM0N2Y1MWI4ZGRmNyIsInBlbSI6e30sInN1YiI6IlVzZXI6MSIsInR5cCI6InRva"
    }
  }
}
```

`POST /api/v1/users/sign_in`

Our API supports the following modes of authentication:
- API Key
- OAuth2

[OAuth2](http://oauth.net/2/) is a specification outlined in [RFC 6749](https://tools.ietf.org/html/rfc6749) that allows third-party services to make requests on behalf of a user without accessing passwords and other sensitive information. We recommend that you use a pre-built library to perform grant and token exchanges such as [Python](]https://www.python.org/), [Ruby](https://www.ruby-lang.org/en/), [NodeJS](https://nodejs.org/).

You must also send a `bearerToken` in any authentication request.
