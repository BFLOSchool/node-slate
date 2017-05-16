--- 

title: Unified 

language_tabs: 
   - shell 

toc_footers: 
   - <a href='#'>Sign Up for a Developer Key</a> 
   - <a href='https://github.com/lavkumarv'>Documentation Powered by lav</a> 

includes: 
   - errors 

search: true 

--- 

# Introduction 

**Version:** 1.0 

# /API/V1/USERS/SIGN_IN
## ***POST*** 

**Summary:** 

**Description:** Creates a user session and logs the current user

### HTTP Request 
`***POST*** /api/v1/users/sign_in` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Created |
| 401 | Unauthorized |

# /API/V1/POSTS/{POST_ID}/COMMENTS
## ***POST*** 

**Summary:** 

**Description:** creates a comment on post

### HTTP Request 
`***POST*** /api/v1/posts/{post_id}/comments` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Lists all comments on the post

### HTTP Request 
`***GET*** /api/v1/posts/{post_id}/comments` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/PRODUCTS/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Updtaes a product

### HTTP Request 
`***PUT*** /api/v1/products/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** List one product

### HTTP Request 
`***GET*** /api/v1/products/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***DELETE*** 

**Summary:** 

**Description:** Deletes a product

### HTTP Request 
`***DELETE*** /api/v1/products/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | No Content |

# /API/V1/EMAIL_ACCOUNTS/CONNECT_TOKEN_CALLBACK
## ***POST*** 

**Summary:** 

**Description:** Connect a Contextio callback - email handler

### HTTP Request 
`***POST*** /api/v1/email_accounts/connect_token_callback` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

# /API/V1/ORDERS/{ORDER_ID}/INVOICES
## ***POST*** 

**Summary:** 

**Description:** Creates all of the necessary invoices for an order

### HTTP Request 
`***POST*** /api/v1/orders/{order_id}/invoices` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***GET*** 

**Summary:** 

**Description:** Lists all the invoices for an order

### HTTP Request 
`***GET*** /api/v1/orders/{order_id}/invoices` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/COMMUNICATION_SETTINGS/:ID
## ***PUT*** 

**Summary:** 

**Description:** Display a given communicaion setting

### HTTP Request 
`***PUT*** /api/v1/communication_settings/:id` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Display a given communicaion setting

### HTTP Request 
`***GET*** /api/v1/communication_settings/:id` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Created |

# /API/V1/PRODUCTS
## ***POST*** 

**Summary:** 

**Description:** Creates a product

### HTTP Request 
`***POST*** /api/v1/products` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Lists all based on company relation ship to mfg

### HTTP Request 
`***GET*** /api/v1/products` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/VENDORS/{VENDOR_ID}/ADD_LOGO
## ***POST*** 

**Summary:** 

**Description:** Add a logo to the vendor's profile also hosted on s3, decoded from a base64 string

### HTTP Request 
`***POST*** /api/v1/vendors/{vendor_id}/add_logo` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |

# /API/V1/CONTACT_GROUPS/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Update an existing contact group

### HTTP Request 
`***PUT*** /api/v1/contact_groups/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Diplay a given contact group

### HTTP Request 
`***GET*** /api/v1/contact_groups/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 404 | Not Found |

## ***DELETE*** 

**Summary:** 

**Description:** Update an existing contact group

### HTTP Request 
`***DELETE*** /api/v1/contact_groups/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 404 | Not Found |

# /API/V1/EMAIL_ACCOUNTS/{ID}
## ***GET*** 

**Summary:** 

**Description:** Display a given email account

### HTTP Request 
`***GET*** /api/v1/email_accounts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***DELETE*** 

**Summary:** 

**Description:** Delete a given email account

### HTTP Request 
`***DELETE*** /api/v1/email_accounts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

# /API/V1/ORDERS/{ORDER_ID}/ORDER_ITEMS/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Updates a single order_item on an order

### HTTP Request 
`***PUT*** /api/v1/orders/{order_id}/order_items/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Shows a single order_item on an order

### HTTP Request 
`***GET*** /api/v1/orders/{order_id}/order_items/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***DELETE*** 

**Summary:** 

**Description:** Deletes a single order_item on an order

### HTTP Request 
`***DELETE*** /api/v1/orders/{order_id}/order_items/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | Success |

# /API/V1/ORDERS/{ORDER_ID}/MULTIPLE_ITEMS
## ***POST*** 

**Summary:** 

**Description:** creates multiple order_items on an order with an array of current products

### HTTP Request 
`***POST*** /api/v1/orders/{order_id}/multiple_items` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/USERS/COMMUNITY/{DISCOURSE_USER_ID}
## ***GET*** 

**Summary:** 

**Description:** Gets the user profile to display on community

### HTTP Request 
`***GET*** /api/v1/users/community/{discourse_user_id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/{USER_ID}/SWITCH_ACTIVE
## ***POST*** 

**Summary:** 

**Description:** Switches the current active order for a user or creates a new one

### HTTP Request 
`***POST*** /api/v1/{user_id}/switch_active` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

# /API/V1/PRODUCTS/{PRODUCT_ID}/IMAGES
## ***POST*** 

**Summary:** 

**Description:** Places an image of the product on s3, url is a base64 encoded string

### HTTP Request 
`***POST*** /api/v1/products/{product_id}/images` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |
| 422 | Unprocessable Entity |

# /API/V1/POSTS/:POST_ID/COMMENTS/:ID
## ***PUT*** 

**Summary:** 

**Description:** updates a comment on post

### HTTP Request 
`***PUT*** /api/v1/posts/:post_id/comments/:id` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 404 | Not Found |
| 422 | Unprocessable Entity |

## ***POST*** 

**Summary:** 

**Description:** shows a comment on post

### HTTP Request 
`***POST*** /api/v1/posts/:post_id/comments/:id` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 404 | Not Found |
| 422 | Unprocessable Entity |

## ***DELETE*** 

**Summary:** 

**Description:** updates a comment on post

### HTTP Request 
`***DELETE*** /api/v1/posts/:post_id/comments/:id` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | No Content |
| 404 | Not Found |
| 422 | Unprocessable Entity |

# /API/V1/{USER_ID}/ORDERS
## ***POST*** 

**Summary:** 

**Description:** Shows the current active order from the server for a particular user

### HTTP Request 
`***POST*** /api/v1/{user_id}/orders` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/POSTS/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Updates a single post

### HTTP Request 
`***PUT*** /api/v1/posts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Shows a single post

### HTTP Request 
`***GET*** /api/v1/posts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***DELETE*** 

**Summary:** 

**Description:** Deletes a single post

### HTTP Request 
`***DELETE*** /api/v1/posts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | NO Content |

# /API/V1/CONTACTS
## ***POST*** 

**Summary:** 

**Description:** Create a new contact for the current user

### HTTP Request 
`***POST*** /api/v1/contacts` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Lists all contacts for a given user. User is determined by CurrentUser plug

### HTTP Request 
`***GET*** /api/v1/contacts` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Created |

# /API/V1/ALL_PRODUCTS
## ***GET*** 

**Summary:** 

**Description:** Lists all based products

### HTTP Request 
`***GET*** /api/v1/all_products` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/{USER_ID}/POSTS
## ***GET*** 

**Summary:** 

**Description:** Lists all posts for a specific user

### HTTP Request 
`***GET*** /api/v1/{user_id}/posts` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/EMAIL_ACCOUNTS
## ***POST*** 

**Summary:** 

**Description:** Create a new email account

### HTTP Request 
`***POST*** /api/v1/email_accounts` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |
| 422 | Unprocessable Entity |

# /API/V1/CONTACT_GROUPS
## ***POST*** 

**Summary:** 

**Description:** Create a new contact group for the current user

### HTTP Request 
`***POST*** /api/v1/contact_groups` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Lists all contact groups for a given user. User is determined by CurrentUser plug

### HTTP Request 
`***GET*** /api/v1/contact_groups` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/ORDERS/{ORDER_ID}/ORDER_ITEMS
## ***POST*** 

**Summary:** 

**Description:** creates an order_item on an order

### HTTP Request 
`***POST*** /api/v1/orders/{order_id}/order_items` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Success |

## ***GET*** 

**Summary:** 

**Description:** Lists all order_items on an order

### HTTP Request 
`***GET*** /api/v1/orders/{order_id}/order_items` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/ORDERS
## ***POST*** 

**Summary:** 

**Description:** create an order on the server

### HTTP Request 
`***POST*** /api/v1/orders` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Lists all orders on the server

### HTTP Request 
`***GET*** /api/v1/orders` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/USERS
## ***POST*** 

**Summary:** 

**Description:** Creates a user

### HTTP Request 
`***POST*** /api/v1/users` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |
| 422 | Unprocessible Entity |

## ***GET*** 

**Summary:** 

**Description:** Lists all users

### HTTP Request 
`***GET*** /api/v1/users` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/{USER_ID}/SAVED_ORDERS
## ***GET*** 

**Summary:** 

**Description:** Shows all the saved orders for a particular user

### HTTP Request 
`***GET*** /api/v1/{user_id}/saved_orders` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/CONTACTS/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Update (return) a contact

### HTTP Request 
`***PUT*** /api/v1/contacts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 404 | Not Found |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Display (return) a contact

### HTTP Request 
`***GET*** /api/v1/contacts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 404 | Not Found |

## ***DELETE*** 

**Summary:** 

**Description:** Delete a contact

### HTTP Request 
`***DELETE*** /api/v1/contacts/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | No Content |
| 404 | Not Found |

# /API/V1/ORDERS/{ORDER_ID}/INVOICES/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Updates an invoice for an order

### HTTP Request 
`***PUT*** /api/v1/orders/{order_id}/invoices/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***GET*** 

**Summary:** 

**Description:** Shows one of the invoices for an order

### HTTP Request 
`***GET*** /api/v1/orders/{order_id}/invoices/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***DELETE*** 

**Summary:** 

**Description:** Deletes an Invoice for an order

### HTTP Request 
`***DELETE*** /api/v1/orders/{order_id}/invoices/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | No Content |

# /API/V1/USERS/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Updates the user information

### HTTP Request 
`***PUT*** /api/v1/users/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |

## ***GET*** 

**Summary:** 

**Description:** Shows one user

### HTTP Request 
`***GET*** /api/v1/users/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***DELETE*** 

**Summary:** 

**Description:** Deletes the user

### HTTP Request 
`***DELETE*** /api/v1/users/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | No Content |

# /API/V1/REGISTRATION
## ***POST*** 

**Summary:** 

**Description:** Creates a user for the unified app

### HTTP Request 
`***POST*** /api/v1/registration` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Created |
| 401 | Unauthorized |

# /API/V1/POSTS
## ***POST*** 

**Summary:** 

**Description:** Create a single post on the server

### HTTP Request 
`***POST*** /api/v1/posts` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 201 | Created |

## ***GET*** 

**Summary:** 

**Description:** Lists all posts on the server

### HTTP Request 
`***GET*** /api/v1/posts` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

# /API/V1/ORDERS/{ID}
## ***PUT*** 

**Summary:** 

**Description:** Updates an order from the server

### HTTP Request 
`***PUT*** /api/v1/orders/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |
| 422 | Unprocessable Entity |

## ***POST*** 

**Summary:** 

**Description:** Shows an order from the server

### HTTP Request 
`***POST*** /api/v1/orders/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Success |

## ***DELETE*** 

**Summary:** 

**Description:** Updates an order from the server

### HTTP Request 
`***DELETE*** /api/v1/orders/{id}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | No Content |

# /API/V1/USERS/{USER_ID}/AVATAR
## ***POST*** 

**Summary:** 

**Description:** Places a user's avatar on s3

### HTTP Request 
`***POST*** /api/v1/users/{user_id}/avatar` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |

**Responses**

| Code | Description |
| ---- | ----------- |
| 204 | No Content |

<!-- Converted with the swagger-to-slate https://github.com/lavkumarv/swagger-to-slate -->
