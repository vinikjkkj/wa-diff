__d(
  "WAWebNewsletterMessageReactionSenderListAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterMessageReactionSenderListJob",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebChatGetters").getIsNewsletter(t)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterMessageReactionSenderListAction] non-newsletter chat",
                  ])),
              )
              .tags("newsletter")
              .sendLogs("get-message-reaction-senders-of-non-newsletter");
            return;
          }
          var r = n.serverId;
          if (r == null) {
            var a = n.id.toString();
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterSubscribersAction] no server ID, msg=",
                    "",
                  ])),
                a,
              )
              .tags("newsletter")
              .sendLogs("get-message-reaction-senders-no-message-server-id");
            return;
          }
          try {
            var i = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
              t.id.toJid(),
            );
            return yield o(
              "WAWebNewsletterMessageReactionSenderListJob",
            ).getNewsletterMessageReactionSenderList(i, String(r));
          } catch (e) {
            var l = n.id.toString(),
              c = t.id.toJid();
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterMessageReactionSenderListAction] failed msg=",
                    " newsletter=",
                    "",
                  ])),
                l,
                c,
              )
              .tags("newsletter")
              .sendLogs("get-message-reaction-senders-failed");
            return;
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.getNewsletterMessageReactionSenderListAction = c;
  },
  98,
);
