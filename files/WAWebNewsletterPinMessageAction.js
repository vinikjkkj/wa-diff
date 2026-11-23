__d(
  "WAWebNewsletterPinMessageAction",
  [
    "WAJids",
    "WALogger",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterPinMessagesJob",
    "WAWebNewsletterUnpinMessagesJob",
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
    async function c(t, n) {
      var a = o("WAJids").toNewsletterJid(t.id.toString());
      try {
        var i = await o("WAWebNewsletterPinMessagesJob").pinNewsletterMessages(
          a,
          [String(n)],
        );
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
    }
    async function d(e, t) {
      var n = o("WAJids").toNewsletterJid(e.id.toString());
      try {
        var a = await o(
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
    }
    ((l.pinNewsletterMessage = c), (l.unpinNewsletterMessage = d));
  },
  98,
);
