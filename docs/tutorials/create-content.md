---
sidebar_position: 1
---

# Create Content

To setup Konfig to work with your game, you first need to upload any in-game
Content that needs to be references from a SKU.

## Click the Content Tab

![Content Tab](/img/content-tab.png)

## Click Create Content

![Create Content Button](/img/create-content-button.png)

You will be presented with two ways of creating content.

![Create Content Tabs](/img/create-content-tabs.png)

Lets learn about the structure of Content so that we can better understand the two ways of creating Content.

### Structure of Content

There are two ways to upload Content into Konfig. Both ways follow a consistent structure as follows:

- **ID: string**

Each content needs an ID to be used as a unique reference. This is often a unique ID that is used in the game's client to reference in-game assets. This can be any string value such as a path to an asset or a globally unique ID. Each ID needs to be unique and Konfig will not allow you to have two instances of Content with the same ID.

- **Name: string**

Each content needs a name for discovery. When an LOM selects a content in the [SKUs](doc:skus) menu, they will see content by name.

- **Groups: collection of strings**

Groups are effective for organizing your content and letting the LOM refer to collections of Content. Each piece of Content can have many groups.

Example:

```json
{
  ID: "armor-1"
  Name: "Watermelon Helmet"
  Group: ["Armor", "Low-Tier Armor", "Headgear", "Beginner"]
}
```

### Manual Input

### CSV Upload
