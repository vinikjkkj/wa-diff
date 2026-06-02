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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = n.xwa2_notify_newsletter_on_metadata_update,
        i = a.id;
      if (i == null)
        throw r("err")(
          "unexpected null id in xwa2_notify_newsletter_on_metadata_update",
        );
      var l = o("WAJids").toNewsletterJid(i),
        s = o("WAWebJidToWid").newsletterJidToWid(l),
        u = await o("WAWebApiChatCommon").getChatRecord(s);
      if (u != null) {
        var c = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(a);
        if (c == null)
          throw r("err")(
            "Unexpected null metadata for newsletter update notification",
          );
        try {
          var d = o("WAWebNewsletterModelUtils").mapNewsletterToModels(c),
            m = d.chat,
            p = d.metadata,
            _ = d.pic;
          await o(
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
    }
    l.mexHandleNewsletterMetadataUpdate = s;
  },
  98,
);
