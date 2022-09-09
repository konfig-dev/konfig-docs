# Content Group Field

A content group field is used to configure a reference to an existing group of content in your game like all rare swords or all characters.

![Content Group Field](/img/content-group.png)

## Common Use Cases

1. A **random reward out of a group** in a gacha. For example, I can create item groups for common swords, rare swords, and epic swords in the **Content** section. I can then create a gacha that has an 80% drop rate for common swords, a 19% drop rate for rare swords, and a 1% drop rate for epic swords. When a player hits the gacha and pulls the common sword bucket, the player will receive a random sword in the game.
2. The **object of a Collect or Spend quest**. For example, I can create a quest where a player has to collect 10 common swords - I don't care which 10 swords the player collects as long as they are of common rarity.
3. Setting **Character restrictions** in PvP or PvE.

## Important Considerations

- We allow you to specify which item groups are allowed in a field. For example, you might only want items and currencies to be possible rewards in a gacha and not player experience.
- Item Groups must be configured in the **Content** section before they can be referenced in a content field.
- Use a content field if you want to refer to only 1 item and use a content group if you want to refer to a group of items.
