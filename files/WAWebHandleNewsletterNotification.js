__d(
  "WAWebHandleNewsletterNotification",
  [
    "$InternalEnum",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWebNewsletterHandleLiveUpdatesNotification",
    "WAWebNewsletterNotificationQueue",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum")({ LiveUpdates: "live_updates" }),
      d = new (r("WADeprecatedWapParser"))(
        "incomingNewsletterNotificationParser",
        function (t) {
          var n = t.mapFirstChild(function (e) {
              return e.tag();
            }),
            a = c.cast(n),
            i = t.attrFromJid();
          if (a == null)
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][notification] Failed to cast ",
                      "",
                    ])),
                  n,
                )
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-cast-notification"),
              r("err")("Failed to cast " + n)
            );
          if (i.type !== "newsletter")
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][notification] Unexpected from ",
                    ])),
                )
                .tags("newsletter")
                .sendLogs(
                  "newsletter-wrong-notification-sender-type-" + i.type,
                ),
              r("err")("Unexpected from " + i.type)
            );
          return { firstChildTag: a, from: i.newsletterJid };
        },
      );
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = d.parseOrThrow(e),
              n = t.firstChildTag,
              a = t.from;
            return yield r("WAWebNewsletterNotificationQueue").enqueue(
              a,
              function () {
                switch (n) {
                  case c.LiveUpdates:
                    return o(
                      "WAWebNewsletterHandleLiveUpdatesNotification",
                    ).handleNewsletterLiveUpdatesNotification(e);
                }
              },
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][notification] Failed to parse notification",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("failed-to-parse-newsletter-notification"),
              new (o("WAParsableWapNode").XmppParsingFailure)(
                "incomingNewsletterNotificationParser",
                e instanceof Error
                  ? e.name
                  : typeof e + " was thrown rather than an Error",
              )
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
