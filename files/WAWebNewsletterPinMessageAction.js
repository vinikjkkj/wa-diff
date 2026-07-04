__d(
  "WAWebNewsletterPinMessageAction",
  [
    "WAJids",
    "WALogger",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterPinMessagesJob",
    "WAWebNewsletterUnpinMessagesJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      t != null &&
        r("WAWebNewsletterMetadataCollection")
          .gadd(e.id)
          .set({ pinnedMessages: t }, { merge: !0 });
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAJids").toNewsletterJid(t.id.toString());
          try {
            var i = yield o(
              "WAWebNewsletterPinMessagesJob",
            ).pinNewsletterMessages(a, [String(n)]);
            u(t, i);
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[NEWSLETTER][PIN] pin failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("NEWSLETTER", "PIN")
                .sendLogs("newsletter-pin-failed"),
              t
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAJids").toNewsletterJid(e.id.toString());
          try {
            var a = yield o(
              "WAWebNewsletterUnpinMessagesJob",
            ).unpinNewsletterMessages(n, [String(t)]);
            u(e, a);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[NEWSLETTER][PIN] unpin failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("NEWSLETTER", "PIN")
                .sendLogs("newsletter-unpin-failed"),
              e
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.pinNewsletterMessage = c), (l.unpinNewsletterMessage = m));
  },
  98,
);
