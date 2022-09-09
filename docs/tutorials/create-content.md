---
sidebar_position: 1
title: Create Content [Dev]
---

# Create Content

To reference your game's content in Konfig, you first need to setup your content
in Konfig. In this tutorial we will add some dummy content to reference in our
SKU later on.

[Learn more about Content here.](/reference/content/what-is-content)

## 1. Click the Content Tab

![Content Tab](/img/content-tab.png)

## 2. Create Content

![Create Content Button](/img/create-content-button.png)

You will be presented with two ways of creating content.

![Create Content Tabs](/img/create-content-tabs.png)

You can learn about both ways [here](/reference/content/creating-content) but for now lets manually upload Content.

Fill in the following information under the **Manual** tab and click **Create
Content** each time you have filled the form.

```plaintext
ID: weapon-1
Name: Wooden Club
Groups: Beginner, Weapon
```

and

```plaintext
ID: weapon-2
Name: Steel Sword
Groups: Intermediate, Weapon
```

Typically your `ID` will look like a unique identifier (e.g. `dc40107c-a506-40a7-b1a1-b557dd50af3f`) but for now we will use simple IDs `weapon-1` and `weapon-2`.

Once you are done you should see 2 rows in your **Content** table.

![Content Table](/img/uploaded-content.png)

If your screen looks like the above image then you have successfully uploaded Content! Now you can create your first Type in the next tutorial, [Create a Type](/tutorials/create-a-type).
