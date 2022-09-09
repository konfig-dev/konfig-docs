# Text Field
Text fields are used to allow an LOM to input a string as a value

![Text Field](/img/add-text-field.png)

## Common Use Cases

1. Naming an offer for internal purposes.
2. Writing text that the game client will display like `"Hello World"`.
3. Writing text the game client will use as a key to call another database. For example, I can write `locdirect.string.helloworld` and have my game client call a database in [Localize Direct](https://www.localizedirect.com/) and return the phrase `"Hello World"` with the language localized based on the player's language setting on their phone.
4. If integrating with a segmentation tool like
   [Leanplum](https://www.leanplum.com/), you can create a **segmentation
   variable** text field and write in the segmentation variable from Leanplum.

### Configuration

#### This field is the title of this Type
