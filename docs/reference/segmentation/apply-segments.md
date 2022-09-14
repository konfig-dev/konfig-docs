---
sidebar_position: 3
title: Apply Segmentation [LOM]
---

# How to Apply Segmentation [LOM]
:::tip Before doing this Tutorial
Complete the steps in [Set Up Segmentation](/reference/segmentation/set-up-segmentation).
:::

1. We will be creating a lapsed spender segmentation and applying it to a Test SKU. First click on the **+ Segment** tab on the top left to get the segmentation builder.

![Segmentation Step 1](/img/segment-6.png)

2. Click on the **Create Segment** button in the top right.

![Segmentation Step 2](/img/segment-7.png)

3. **Name** the segment and then click **Create**.

![Segmentation Step 3](/img/segment-8.png)

4. After clicking create, you are taken to the segmentation builder form. Click on the **Select Player Field(s)** form.

![Segmentation Step 4](/img/segment-9.png)

5. Now select the **ltv** segmentation variable that the developer already created.

![Segmentation Step 5](/img/segment-10.png)

6. Since we are targeting high spenders that have lapsed, click on the **is equal to** dropdown and select **is greater than**. Then enter in a **value** in the field, let's say it's $1,000. Then hit Enter on your keyboard.

![Segmentation Step 6](/img/segment-11.png)

7. Click on the **Select Player Field(s)** form again, select the **last-log-in** segmentation variable, and fill it out. Since we're targeting lapsed spenders, I will select **on or before** and **September 10, 2022 12:00 AM UTC**. This means I'm targeting players that have both LTV > $1,000 and haven't logged in to the game since Septeber 10, 2022.

![Segmentation Step 7](/img/segment-12.png)

8. Now that I've made by segment, I want to apply it to my Test SKU. Select the **Select SKUs to apply this segment to** input form.

![Segmentation Step 8](/img/segment-13.png)

9. Select the Test SKU from the drop down. Note that we can add this segmentation to SKUs in bulk using this form.

![Segmentation Step 9](/img/segment-14.png)

10. Then hit **Save** and now you've successfully applied segmentation to your offer!

![Segmentation Step 9](/img/segment-15.png)

11. If you look on the SKU itself in the **SKU** section, you can see the segmentation has been automatically applied.

![Segmentation Step 10](/img/segment-16.png)
