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
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          a === void 0 && (a = !1);
          var i =
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
                i,
              )
              .tags("newsletter")
              .sendLogs(i + "-admin-activity-not-a-newsletter");
            return;
          }
          try {
            var l = r("WAWebNewsletterCollection").get(t);
            if (l == null) throw r("err")("Failed to retrieve newsletter");
            var u = o("WAWebNewsletterUpdateUserSettingJob")
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
              ? (l.mute.promises.mute = u)
              : (l.mute.promises.unmute = u),
              yield u,
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.toggleNewsletterAdminActivityMuteState({
                id: t,
                muteExpirationValue: n,
                fromMultiselect: a,
              }));
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] ",
                    "AdminActivityAction failed",
                  ])),
                i,
              )
              .tags("newsletter")
              .sendLogs("newsletter-" + i + "-admin-activity-action-failed");
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t;
            (yield o(
              "WAWebNewsletterUpdateUserSettingJob",
            ).updateNewsletterUserSetting({
              newsletterJid: o("WAJids").toNewsletterJid(e.toJid()),
              type: o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS,
              muteExpirationValue: o("WAWebNewsletterModelUtils").UNMUTED_STATE,
            }),
              (t = r("WAWebNewsletterCollection").get(e)) == null ||
                t.mute.setMute(o("WAWebNewsletterModelUtils").UNMUTED_STATE));
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] silent admin activity unmute failed",
                  ])),
              )
              .tags("newsletter")
              .sendLogs("newsletter-silent-unmute-admin-activity-failed");
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.toggleNewsletterAdminActivityMuteStateAction = c),
      (l.unmuteNewsletterAdminActivitySilentlyAction = m));
  },
  98,
);
