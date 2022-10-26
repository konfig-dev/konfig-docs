---
sidebar_position: 7
title: Set Up Segmentation [Dev] [Advanced]
---

# How to Set Up Segmentation [Dev]

:::tip Before instrumenting your store
Go through the [Import Content](/tutorials/create-content), [Create a Type](/tutorials/create-a-type), and [Create a SKU](/tutorials/create-a-sku) tutorials.
:::

Konfig's segmentation builder builds off existing player attributes that have already been defined in your game. Attributes might include player level, LTV, and days since last log-in.

[Learn more about segmentation here](/reference/personalization/segmentation)

1. First we need to tell Konfig what player attributes the game client will be passing to the API. To do that, click on the **Segment** button on the top left to get taken to the Segment section.

![Segmentation Step 1](/img/segment-1.png)

2. Click on the **Add Field** button and select the type of field the player attribute is. For example, LTV is a **number** field while last log-in is a **datetime**. Let's add LTV first.

![Segmentation Step 2](/img/segment-2.png)

3. Input the attribute name **EXACTLY** as you will send it to Konfig's API when making a 'GET' request. Then click the **Add** button.

![Segmentation Step 3](/img/segment-3.png)

:::tip For safety, by default Konfig won't show an offer if the attribute passed in the 'GET' request doesn't match what has been configured in this section.
:::

4. The newly configured attribute will now show up in the GUI and can be used by an LOM in the segmentation builder.

![Segmentation Step 4](/img/segment-4.png)

5. Let's also quickly add an attribute for last log-in and then hit save. The LOM is now ready to configure segmentation variables and assign them to any SKU or live event.

![Segmentation Step 5](/img/segment-5.png)
