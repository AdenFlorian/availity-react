# @availity/authorize

> Check user permissions to see if the current user is authorized to see your content.

## Installation

```bash
npm install @availity/authorize @availity/api-axios @availity/api-core axios --save
```

### Usage

```javascript
import React from 'react';
import Authorize from '@availity/authorize';
// ... 
<Authorize permissions="1234">
  {/* stuff to render if the user is authorized with permission indicated above */}
</Authorize>
// ...
```

#### Authorize (Default export)
Component which validates the user's permissions to determine if they should be able to see the children content.

##### Props

- **`permissions`**: String, number, or an array containing strings/numbers or an array containing strings/numbers. Required.
  - **string/number**: The permission ID, eg: `'1234'`
  - **array**: The array can contain Permission ID strings as well as other arrays which contain permission ID strings/numbers, eg: `['1234', '2345', ['3456', '4567'], ['5678', '6789']]`. The items in deep/nested array indicate permission IDs which must all be granted to the user to be consider authorized, they act as "and". The items in the top array act as 'or', if any are granted to the user the user would be consider authorized. The example `['1234', '2345', ['3456', '4567'], ['5678', '6789']]` would be similar `'1234' || '2345' || ('3456' && '4567') || ('5678' && '6789')`
- **`loader`**: Boolean or node. Optional, default: `true`. When `true`, `BlockUi` will be used when loading the permissions. When a `node`, that node will be render instead of `BlockUi` when loading the permissions. When `false`, nothing will be render when loading the permissions.
- **`organizationId`**: String. Optional, when present, the permission will be validated to ensure it is assigned to the organization.
- **`region`**:  String or boolean. Optional, default: `true`. When a string, the permission will be validated to ensure it is assigned in the region. When true, the current region will be used.
- **`unauthorized`**: Node. Optional. The content which will be render when the user does not have the permissions required.
- **`children`**: Node. Required. The content which will be render when the user does have the permissions required.
- **`negate`**: Boolean. Optional, default `false`. negation the authorization (if the user does have the permissions specified, they will be "unauthorized" (shown the `unauthorized` prop content) and if the do not have the permissions specified, they will be "authorized" and able to see the children content)

##### Authorize Usage

```javascript
import React from 'react';
import Authorize from '@availity/authorize';
// ... 
<Authorize permissions={['1234', '2345', ['3456', '4567'], ['5678', '6789']]} organizationId="1495">
  {/* ... */}
</Authorize>
// ...
```