__d(
  "WAWebMexNewsletterLeaveHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebNewsletterMetadataJob",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n.xwa2_notify_newsletter_on_leave.id;
          if (a == null)
            throw r("err")(
              "unexpected null id in xwa2_notify_newsletter_on_leave",
            );
          var i = o("WAJids").toNewsletterJid(a),
            l = o("WAWebJidToWid").newsletterJidToWid(i);
          if (
            !(yield o("WAWebNewsletterDBUtils").doesNewsletterExistInStorage(i))
          ) {
            o("WAWebBackendApi").frontendFireAndForget(
              "updateNewsletterSubscriberCount",
              { id: l, update: { increment: -1 } },
            );
            return;
          }
          try {
            (yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(i),
              yield o(
                "WAWebNewsletterDeleteMessageAddOns",
              ).deleteNewsletterMessageAddOns(i),
              yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(l),
              o("WAWebBackendApi").frontendFireAndForget("deleteNewsletter", {
                id: l,
                keep: !0,
              }),
              o("WAWebBackendApi").frontendFireAndForget(
                "clearStatusForRemovedContact",
                {},
              ));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter][notification][leave]",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .tags("mex", "newsletter")
              .sendLogs("mex-newsletter-notification-leave-fail");
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterLeave = s;
  },
  98,
);
