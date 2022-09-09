---
sidebar_position: 3
---

# Create a SKU

:::tip Before doing this Tutorial
Complete the [Create Content](/tutorials/create-content) and [Create a Type](/tutorials/create-a-type) tutorial.
:::

## 1. Navigate to the SKU Tab

Click on the **SKU** tab in the top-left corner.

![SKU Tab](/img/sku-tab.png)

## 2. Create a SKU

Click on the **Create SKU** button and select your new Type.

![Create SKU](/img/create-transaction-product.png)

## 3. Configure your SKU

Once you create your SKU you will be redirected to a configuration page. Lets see if we can enter invalid data for our SKU.

### Test Validation

Click **Save** without entering anything.

![Test Validation](/img/test-sku-validation.png)

Cool, it looks like Konfig is applies the validations we made in the [Create a Type](/tutorials/create-a-type) in real-time!

Lets try entering an invalid value for **Price**, `-5` should do the trick.

![Test Price](/img/test-price.png)

Looks like Konfig instantly applied the [Minimum](/reference/field/types/number#minimum) validation, awesome!

## 4. Save your SKU

Now lets correctly configure our SKU and click **Save**.

![Configure SKU](/img/configure-sku.png)

## 5. Schedule your SKU

Once your SKU is saved, you can be rest assured that you will not lose any
progress. But now you want to actually push our SKU to an environment. Lets push our SKU to `Development`. Click on the **Schedule** dropdown and select `On`. There are other values we can learn about [here](/reference/sku/scheduling)

![Schedule SKU](/img/schedule-sku.png)

Amazing, now you have created your first IAP. Now its left to the developer to instrument your in-game store with Konfig's CDN in the next tutorial.
