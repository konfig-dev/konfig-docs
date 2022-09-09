# List Field
A list field is used to configure a variable number of items to the data model.

![List Field](/img/list-field.png)

## Common Use Cases:
1. Configuring **rewards**. Since an LOM will want to configure any number of rewards for an offer (i.e. an offer can have 1 reward or 10), the developer will first configure a **reward type** consisting of a **content** field for items that can be rewarded and a **quantity** field for the number of that item to be rewarded. The developer can then use the **list** field in a transaction product data model and the LOM will be able to configure as many or as little rewards as he or she wants.
2. Configuring **escalating or de-escalating cost** for a gacha or conversion product.
