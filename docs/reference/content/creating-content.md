---
sidebar_position: 2
---

# Importing Content

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

![Manual Input](/img/manual-input.png)

Provide an ID, name, and assign any applicable groups in the form. Note that you will be provided a list of existing Content Groups and allowed to create new Content Groups by typing in the desired name of a new Content Group.

### CSV Upload

![Upload CSV](/img/upload-csv.png)

The uploaded CSV must match the expected structure of Content:

- No Header
- 3 Columns

1. ID
2. Name
3. Semicolon (`;`) separated list of Group names

When a new Group name is encountered, Konfig will automatically create and connect it to the uploaded Content.

Example:

```csv
armor-1,Watermelon Helmet,Armor;Beginner;Headgear
armor-2,Metal Helmet,Armor;Intermediate;Headgear
weapon-1,Wooden Club,Weapon;Beginner;Blunt Weapon
accessory-1,Earring,
```
