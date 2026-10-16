__d(
  "WAWebMetaOneSubscriptionActions",
  ["WAWebSubscriptionCollection", "WAWebSubscriptionSource"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebSubscriptionCollection")
        .SubscriptionCollection.toArray()
        .some(function (e) {
          return (
            e.source === o("WAWebSubscriptionSource").SubscriptionSource.MP4B &&
            !e.isDeactivated
          );
        });
    }
    l.hasActiveMetaOneSubscription = e;
  },
  98,
);
