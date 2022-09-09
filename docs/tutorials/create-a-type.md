---
sidebar_position: 2
title: Create a Type [Dev]
---

# Create a Type

:::tip Before doing this Tutorial
Complete the [Import Content](/tutorials/create-content) tutorial.
:::

In Konfig, a **Type** describes the data model for a SKU. Konfig
uses Types to generate input forms and validate data.

[Learn more about Types here](/reference/type)

:::danger Before diving into creating your first Type!
**In practice, configuring a Type should come after you have decided what the data model for
your SKUs should be.** It is up to your client's code to properly handle the data
model described in a Type. Collaborate with your game designer to design a data model.
:::

In this tutorial we will create a simple transaction product Type.

### 1. Navigate to the Type Tab

Click on the **Type** tab in the top-left corner.

![Type Tab](/img/type-tab.png)

### 2. Create & Name your Type

Click on the **Create Type** button.

![Create Type Button](/img/create-type-button.png)

Provide a name and description for your Type and click **Save**.

![Name your Type](/img/name-your-type.png)

### 3. Add [Fields](/reference/field/what-is-a-field)

Once you click **Save** you will be redirected to a page to create your Type. Click the **Add Field** button.

![Add Field Button](/img/add-field-button.png)

Click **Text**.

![Add Text Field](/img/add-text-field.png)

Fill the name field with `SKU Name` and check `This field is the title of this Type`. When a field is marked as the
**title** of a [Type](/reference/type), Konfig will use the value of the field
to identify SKUs of this Type in the dashboard. In this case we also want the
**SKU Name** to be `Required` and `Unique` amongst all SKUs of the Type.

[Learn more about validations here](/reference/field/validations)

Once you are done click **Add**.

![Add Text Field Button](/img/add-text-field-button.png)

Congrats you have created your first Field! You should now see one field in your Type.

![First Field](/img/first-field.png)

Now lets add a Field for the price of our product. Click **Add Field** again and select **Number**.

![Add Number Field](/img/add-number-field.png)

Fill out a name and check the `Required` box to make sure that our field is
never empty. We also want to specify a `Minimum` value of `0` because we never
want our product to be offered at a negative price. Once you are done, click
**Add**.

![Add Number Field Button](/img/add-number-field-button.png)

Now our transaction product has the fields **SKU Name** and **Price**. Assuming we finished the [Import Content](/tutorials/create-content) tutorial, lets create a [Content Field](/reference/field/types/content) to reference our in-game Content.

Click **Add Field** and select **Content**

![Add Content Field](/img/content-field.png)

Name your Content field `Reward`, check the **Required** field, and fill in the
**Group Filter** to be `Weapon` so all Content under the `Weapon` group shows
when configuring a SKU. After you are done, click **Add**.

![Configuring Content Field](/img/configure-content-field.png)

### 4. Save your Type

You should see 3 fields. Click **Save** in the top-right corner.
![Save Type](/img/save-type.png)

Congrats, you have created your first Type! Now lets create and schedule a SKU in the next tutorial.
