__d(
  "WAWebParseSubscriptionNotification",
  [
    "WALogger",
    "WAParsableWapNode",
    "WAWebFeatureFlagName",
    "WAWebSubscriptionSource",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return e == null
        ? null
        : e === "AURA"
          ? o("WAWebSubscriptionSource").SubscriptionSource.AURA
          : e === "META_NOVA"
            ? o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA
            : e === "BLUE"
              ? o("WAWebSubscriptionSource").SubscriptionSource.BLUE
              : e === "PREMIUM"
                ? o("WAWebSubscriptionSource").SubscriptionSource.PREMIUM
                : e === "MP4B"
                  ? o("WAWebSubscriptionSource").SubscriptionSource.MP4B
                  : null;
    }
    function c(e) {
      return e === "INFO"
        ? "INFO"
        : e === "SUCCESS"
          ? "SUCCESS"
          : e === "WARNING"
            ? "WARNING"
            : "UNKNOWN";
    }
    function d(e, t) {
      var n = e.maybeChild(t);
      if (n == null) return null;
      try {
        return n.contentString().trim() || null;
      } catch (e) {
        if (e instanceof o("WAParsableWapNode").XmppParsingFailure) return null;
        throw e;
      }
    }
    function m(t) {
      try {
        var n = d(t, "type"),
          r = d(t, "text");
        return n == null && r == null
          ? null
          : n == null || r == null
            ? (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sub-notif] dropped: no type or text, id=",
                    ", type=",
                    "",
                  ])),
                t.maybeAttrString("id"),
                n,
              ),
              null)
            : {
                stanzaId: t.attrString("id"),
                timestamp: t.attrInt("t"),
                notificationType: n,
                title: d(t, "title"),
                text: r,
                link: d(t, "link"),
                linkText: d(t, "link_text"),
                level: c(d(t, "level")),
              };
      } catch (e) {
        if (e instanceof o("WAParsableWapNode").XmppParsingFailure)
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sub-notif] dropped: parse failed, id=",
                  ", error=",
                  "",
                ])),
              t.maybeAttrString("id"),
              e.message,
            ),
            null
          );
        throw e;
      }
    }
    function p(e) {
      var t = [],
        n = null;
      if (e.hasChild("feature_flags")) {
        var r = e.child("feature_flags");
        r.forEachChildWithTag("feature_flag", function (e) {
          var r = e.attrString("name"),
            a = e.attrString("enabled").toLowerCase() === "true",
            i = e.maybeAttrString("expiration_time"),
            l = e.maybeAttrString("limit"),
            s = i != null ? parseInt(i, 10) : null,
            u = l != null ? parseInt(l, 10) : null;
          (t.push({ name: r, enabled: a, expirationTime: s, limit: u }),
            o("WAWebFeatureFlagName").FeatureFlagName.cast(r) ===
              o("WAWebFeatureFlagName").FeatureFlagName.NEW_CHATS_LIMIT &&
              (n = a));
        });
      }
      var a = [];
      if (e.hasChild("subscriptions")) {
        var i = e.child("subscriptions");
        i.forEachChildWithTag("subscription", function (e) {
          var t = e.attrString("status"),
            r = e.maybeAttrInt("subscription_end_time"),
            o = e.maybeAttrInt("subscription_creation_time"),
            i = e.attrString("id"),
            l = e.maybeAttrInt("subscription_tier"),
            s = e.maybeAttrString("source"),
            c = u(s),
            d = e.maybeAttrInt("subscription_start_time");
          a.push({
            id: i,
            status: t,
            expirationDate: r,
            creationTime: o,
            newMessageCappingEnabled: n,
            tier: l,
            source: c,
            startTime: d,
          });
        });
      }
      return { subscriptions: a, featureFlags: t };
    }
    ((l.parseSubscriptionNotification = m),
      (l.parseSubscriptionsAndFeatureFlags = p));
  },
  98,
);
