---
sidebar_position: 1
---

# Type

Konfig introduces a **Type** system that helps you model data for SKUs. Using
Konfig's GUI you can easily describe infinitely complex data models to cater to
your game's store.

### Structure of a Type

A type contains 4 attributes:

- **Name: string**

This attribute is used to help discover your Type in the GUI.

- **API Identifier: string**

This is a immutable attribute that is used to uniquely identify each Type. It can be used whenever you need to filter SKUs by Type.

- **Description: string**

An explanation of the Type.

- **Fields: JSON**

The fields of a Type are what describe the structure of the data. To learn more about fields see the [Field](/category/field) reference.

![Fields](/img/fields.png)
