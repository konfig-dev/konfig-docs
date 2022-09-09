---
sidebar_position: 2
---

# Premade Types

Konfig comes ready with premade types based on common patterns when building a
store. These templates are customizable and can be helpful to bootstrap your store in a short amount
of time.

### Transaction Product

Transaction products are in-app purchases or offers that are bought with real money. This premade type comes with pre-built integration into Apple and Google's payment rails

### Conversion Product

Conversion products are offers that are bought with in-game currency. This pre-made type is useful for getting players to sink out a game's hard currency and indirectly drive monetization. 

### Gacha

Gachas (or loot boxes) are a special type of conversion product where the reward is variable. You can picture it as a wheel that a player spins and depending on what wedge the player lands on, he or she will get a different reward.

### Reward

Rewards are what a player receives in return for buying a transaction product, hitting a conversion product or gacha, completing a quest, etc. We recommend that you insert this type as a list in to your transaction product, conversion product, etc data model.

### Quest

Quests are a set of actions that a player will receive a reward for completing. Examples include "Collect 5 epic characters", "Spend 100 gems", "Complete level 10".

### Tournament with Milestones

Tournaments are a competition between players. Players receive points for completing certain tasks such as "Win a PvP match" or "Collect a character" and are ranked on a leaderboard. Typically, the higher you rank on a leaderboard, the better the reward you can get. This type also includes support for Milestones so that players can still receive rewards even if they can't rank high on the leaderboard.
