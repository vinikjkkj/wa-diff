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
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return c(o, a);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o(
              "WAWebNewsletterMetadataQueryJob",
            ).emptyNewsletterMetadataType(o("WAJids").toNewsletterJid(t)),
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
            (yield o(
              "WAWebNewsletterUpdateNewslettersRecordsJob",
            ).updateNewsletterChatRecords([
              o("WAWebCreateChat").createNewsletterObjectForStorage(s),
            ]),
              yield o(
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
        })),
        d.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterUserSettingChange = s;
  },
  98,
);
