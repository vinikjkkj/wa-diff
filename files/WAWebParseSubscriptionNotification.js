__d(
  "WAWebParseSubscriptionNotification",
  ["WAWebFeatureFlagName", "WAWebSubscriptionSource"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null) return null;
      e: return e === "AURA"
        ? o("WAWebSubscriptionSource").SubscriptionSource.AURA
        : e === "META_NOVA"
          ? o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA
          : e === "BLUE"
            ? o("WAWebSubscriptionSource").SubscriptionSource.BLUE
            : e === "PREMIUM"
              ? o("WAWebSubscriptionSource").SubscriptionSource.PREMIUM
              : null;
    }
    function s(t) {
      var n = [],
        r = null;
      if (t.hasChild("feature_flags")) {
        var a = t.child("feature_flags");
        a.forEachChildWithTag("feature_flag", function (e) {
          var t = e.attrString("name"),
            a = e.attrString("enabled").toLowerCase() === "true",
            i = e.maybeAttrString("expiration_time"),
            l = e.maybeAttrString("limit"),
            s = i != null ? parseInt(i, 10) : null,
            u = l != null ? parseInt(l, 10) : null;
          (n.push({ name: t, enabled: a, expirationTime: s, limit: u }),
            o("WAWebFeatureFlagName").FeatureFlagName.cast(t) ===
              o("WAWebFeatureFlagName").FeatureFlagName.NEW_CHATS_LIMIT &&
              (r = a));
        });
      }
      var i = [];
      if (t.hasChild("subscriptions")) {
        var l = t.child("subscriptions");
        l.forEachChildWithTag("subscription", function (t) {
          var n = t.attrString("status"),
            o = t.maybeAttrInt("subscription_end_time"),
            a = t.maybeAttrInt("subscription_creation_time"),
            l = t.attrString("id"),
            s = t.maybeAttrInt("subscription_tier"),
            u = t.maybeAttrString("source"),
            c = e(u),
            d = t.maybeAttrInt("subscription_start_time");
          i.push({
            id: l,
            status: n,
            expirationDate: o,
            creationTime: a,
            newMessageCappingEnabled: r,
            tier: s,
            source: c,
            startTime: d,
          });
        });
      }
      return { subscriptions: i, featureFlags: n };
    }
    l.parseSubscriptionsAndFeatureFlags = s;
  },
  98,
);
