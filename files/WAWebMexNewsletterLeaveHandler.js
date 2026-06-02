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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = n.xwa2_notify_newsletter_on_leave.id;
      if (a == null)
        throw r("err")("unexpected null id in xwa2_notify_newsletter_on_leave");
      var i = o("WAJids").toNewsletterJid(a),
        l = o("WAWebJidToWid").newsletterJidToWid(i);
      if (
        !(await o("WAWebNewsletterDBUtils").doesNewsletterExistInStorage(i))
      ) {
        o("WAWebBackendApi").frontendFireAndForget(
          "updateNewsletterSubscriberCount",
          { id: l, update: { increment: -1 } },
        );
        return;
      }
      try {
        (await o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(i),
          await o(
            "WAWebNewsletterDeleteMessageAddOns",
          ).deleteNewsletterMessageAddOns(i),
          await o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(l),
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
    }
    l.mexHandleNewsletterLeave = s;
  },
  98,
);
