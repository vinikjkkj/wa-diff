__d(
  "WAWebHandleNewsletterNotification",
  [
    "$InternalEnum",
    "JSResourceForInteraction",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAPromiseQueue",
    "WAWebLazyLoadedRetriable",
    "WAWebNewsletterHandleLiveUpdatesNotification",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum")({
        LiveUpdates: "live_updates",
        QuestionResponseReaction: "question_response_reaction",
      }),
      d = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebHandleNewsletterQuestionResponseReactionNotification",
        )
          .__setRef("WAWebHandleNewsletterNotification")
          .load();
      }, "HandleNewsletterQuestionResponseReactionNotification"),
      m = new (o("WAPromiseQueue").PromiseQueueMap)(),
      p = new (r("WADeprecatedWapParser"))(
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
    async function _(e) {
      try {
        var t = p.parseOrThrow(e),
          n = t.firstChildTag,
          r = t.from;
        return await m.enqueue(r, function () {
          switch (n) {
            case c.LiveUpdates:
              return o(
                "WAWebNewsletterHandleLiveUpdatesNotification",
              ).handleNewsletterLiveUpdatesNotification(e);
            case c.QuestionResponseReaction:
              return d().then(function (t) {
                return t.handleNewsletterQuestionResponseReactionNotification(
                  e,
                );
              });
          }
        });
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
    }
    l.default = _;
  },
  98,
);
