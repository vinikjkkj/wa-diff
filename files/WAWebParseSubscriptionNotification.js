__d(
  "WAWebParseSubscriptionNotification",
  ["WAWebSubscriptionSource"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null) return null;
      e: return e === "ASTERIA"
        ? o("WAWebSubscriptionSource").SubscriptionSource.ASTERIA
        : e === "AURA"
          ? o("WAWebSubscriptionSource").SubscriptionSource.AURA
          : e === "BIZ_GENAI"
            ? o("WAWebSubscriptionSource").SubscriptionSource.BIZ_GENAI
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
        var o = t.child("feature_flags");
        o.forEachChildWithTag("feature_flag", function (e) {
          var t = e.attrString("name"),
            o = e.attrString("enabled").toLowerCase() === "true",
            a = e.maybeAttrString("expiration_time"),
            i = e.maybeAttrString("limit"),
            l = a != null ? parseInt(a, 10) : null,
            s = i != null ? parseInt(i, 10) : null;
          (n.push({ name: t, enabled: o, expirationTime: l, limit: s }),
            t === "NEW_CHATS_LIMIT" && (r = o));
        });
      }
      var a = [];
      if (t.hasChild("subscriptions")) {
        var i = t.child("subscriptions");
        i.forEachChildWithTag("subscription", function (t) {
          var n = t.attrString("status"),
            o = t.maybeAttrInt("subscription_end_time"),
            i = t.maybeAttrInt("subscription_creation_time"),
            l = t.attrString("id"),
            s = t.maybeAttrInt("subscription_tier"),
            u = t.maybeAttrString("source"),
            c = e(u),
            d = t.maybeAttrInt("subscription_start_time");
          a.push({
            id: l,
            status: n,
            expirationDate: o,
            creationTime: i,
            newMessageCappingEnabled: r,
            tier: s,
            source: c,
            startTime: d,
          });
        });
      }
      return { subscriptions: a, featureFlags: n };
    }
    l.parseSubscriptionsAndFeatureFlags = s;
  },
  98,
);
