__d(
  "WAWebNewsletterToggleAdminActivityMuteStateAction",
  [
    "WAJids",
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a =
            n === o("WAWebNewsletterModelUtils").MUTED_STATE
              ? "mute"
              : "unmute";
          if (!t.isNewsletter()) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] ",
                    "AdminActivityAction: not a newsletter",
                  ])),
                a,
              )
              .tags("newsletter")
              .sendLogs(a + "-admin-activity-not-a-newsletter");
            return;
          }
          try {
            var i = r("WAWebNewsletterCollection").get(t);
            if (i == null) throw r("err")("Failed to retrieve newsletter");
            var l = o("WAWebNewsletterUpdateUserSettingJob")
              .updateNewsletterUserSetting({
                newsletterJid: o("WAJids").toNewsletterJid(t.toJid()),
                type: o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS,
                muteExpirationValue: n,
              })
              .then(function () {
                return { status: 200 };
              })
              .catch(function () {
                return { status: 400 };
              });
            (n === o("WAWebNewsletterModelUtils").MUTED_STATE
              ? (i.mute.promises.mute = l)
              : (i.mute.promises.unmute = l),
              yield l,
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.toggleNewsletterAdminActivityMuteState({
                id: t,
                muteExpirationValue: n,
              }));
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] ",
                    "AdminActivityAction failed",
                  ])),
                a,
              )
              .tags("newsletter")
              .sendLogs("newsletter-" + a + "-admin-activity-action-failed");
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.toggleNewsletterAdminActivityMuteStateAction = u;
  },
  98,
);
