# What is Personalization?

**Konfig's personalization automatically optimizes the best SKU to show your players based on any custom metric.** In minutes you can setup advanced personalization and let Konfig do the hard work of improving your KPIs!

Examples of custom metrics are:

- User engagement time
- Verified revenue for a particular in-app purchase
- Amount of virtual currency spent
- Occurrences of in-game tasks like quests or plays
- Ad clicks
- Social engagement

# How To Implement Personalization With Konfig

To setup Personalization in Konfig, a few setup steps are required.

1. Ensure GET requests to Konfig's CDN provide the `player` query parameter
   with the Player's ID, (e.g. `https://cdn.konfigthis.com/skus?env=Development&player=<insert_player_id>`)
2. Create a custom event in the dashboard.
3. Instrument your game client to track custom event by sending a `POST` request to
   `https://api.konfigthis.com/event` with the following body:

   ```json
   {
       "player": "your game's player id",
       "event": "event id from dashboard",
       "value": 2 # optional numerical value greater than 1
   }
   ```

   :::note
   If your event can have a value greater than 1 (i.e. user engagement time or
   verified revenue) then provide the `value` parameter in the POST
   request body.

4. Configure your experiment in the dashboard by specifying

   - 2 or more SKUs
   - A schedule to determine when to run the experiment
   - Optional target segments
     :::tip
     Personalization yields the best results when the target player segment is large
     enough. Prefer segments that have a large number of users who frequently "activate
     the experiment" to see meaningful results.

5. Click **save**, sit back, and relax! You can monitor the result of your
   experiment in Konfig's dashboard in real-time

![Sit back and relax!](/img/stonks.webp)
