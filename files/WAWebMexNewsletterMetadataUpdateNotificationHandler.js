__d(
  "WAWebMexNewsletterMetadataUpdateNotificationHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebJidToWid",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterMetadataUpdateUtils",
    "WAWebNewsletterModelUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n.xwa2_notify_newsletter_on_metadata_update,
            i = a.id;
          if (i == null)
            throw r("err")(
              "unexpected null id in xwa2_notify_newsletter_on_metadata_update",
            );
          var l = o("WAJids").toNewsletterJid(i),
            s = o("WAWebJidToWid").newsletterJidToWid(l),
            u = yield o("WAWebApiChatCommon").getChatRecord(s);
          if (u != null) {
            var c = o(
              "WAWebMexNewsletterParseUtils",
            ).parseMexNewsletterResponse(a);
            if (c == null)
              throw r("err")(
                "Unexpected null metadata for newsletter update notification",
              );
            try {
              var d = o("WAWebNewsletterModelUtils").mapNewsletterToModels(c),
                m = d.chat,
                p = d.metadata,
                _ = d.pic;
              yield o(
                "WAWebNewsletterMetadataUpdateUtils",
              ).updateNewsletterMetadataAndPic(m, p, _);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][newsletter] metadata-update notif failed",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs("mex-newsletter-notification-metadata-update-fail");
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterMetadataUpdate = s;
  },
  98,
);
