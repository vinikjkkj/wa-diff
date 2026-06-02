__d(
  "WAWebNewsletterToggleFollowerActivityMuteStateAction",
  [
    "WAJids",
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a =
        n === o("WAWebNewsletterModelUtils").MUTED_STATE ? "mute" : "unmute";
      if (!t.isNewsletter()) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter] ",
                "FollowerActivity: not a newsletter",
              ])),
            a,
          )
          .tags("newsletter")
          .sendLogs(a + "-follower-activity-not-a-newsletter");
        return;
      }
      try {
        var i = r("WAWebNewsletterCollection").get(t);
        if (i == null) throw r("err")("Failed to retrieve newsletter");
        (await o(
          "WAWebNewsletterUpdateUserSettingJob",
        ).updateNewsletterUserSetting({
          newsletterJid: o("WAJids").toNewsletterJid(t.toJid()),
          type: o("WAWebNewsletterModelUtils").FOLLOWER_NOTIFICATIONS,
          muteExpirationValue: n,
        }),
          await o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.toggleNewsletterFollowerActivityMuteState({
            id: t,
            muteExpirationValue: n,
          }));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter] ",
                "FollowerActivity: mute failed",
              ])),
            a,
          )
          .tags("newsletter")
          .sendLogs("newsletter-" + a + "-follower-activity-action-failed");
      }
    }
    l.toggleNewsletterFollowerActivityMuteStateAction = u;
  },
  98,
);
