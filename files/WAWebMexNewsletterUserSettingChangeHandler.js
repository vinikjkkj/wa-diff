__d(
  "WAWebMexNewsletterUserSettingChangeHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebCreateChat",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebNewsletterMetadataUpdateUtils",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      var n = t.xwa2_notify_newsletter_on_user_setting_change,
        o = n.id,
        a = n.setting;
      if (o == null)
        throw r("err")(
          "unexpected null id in xwa2_notify_newsletter_on_user_setting_change",
        );
      if (a == null)
        throw r("err")(
          "unexpected null setting in xwa2_notify_newsletter_on_user_setting_change",
        );
      return u(o, a);
    }
    async function u(t, n) {
      var a = o("WAWebNewsletterMetadataQueryJob").emptyNewsletterMetadataType(
          o("WAJids").toNewsletterJid(t),
        ),
        i = babelHelpers.extends({}, a, {
          newsletterUserSettingsMetadataMixin: [
            { type: n.type, value: n.value },
          ],
        }),
        l = o("WAWebNewsletterModelUtils").mapNewsletterToModels(i),
        s = l.chat,
        u = l.metadata,
        c = l.pic;
      try {
        (await o(
          "WAWebNewsletterUpdateNewslettersRecordsJob",
        ).updateNewsletterChatRecords([
          o("WAWebCreateChat").createNewsletterObjectForStorage(s),
        ]),
          await o(
            "WAWebNewsletterMetadataUpdateUtils",
          ).updateNewsletterMetadataAndPic(s, u, c));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][newsletter][notification][user-setting-change]",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .tags("mex", "newsletter")
          .sendLogs("mex-newsletter-notification-user-setting-change-fail");
      }
    }
    l.mexHandleNewsletterUserSettingChange = s;
  },
  98,
);
