__d(
  "WAWebUpdateNewsletterAdminProfilesSettingAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterAdminProfileActionsQPLLogger",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterBridgeApi",
    "WAWebUpdateNewsletterAdminProfileSettingJob",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var r = new (o(
        "WAWebNewsletterAdminProfileActionsQPLLogger",
      ).WAWebNewsletterAdminProfileActionsQPLLogger)({
        eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
          .CHANNEL_INFO_SHEET,
        markerId: 1026956221,
      });
      if (!o("WAWebChatGetters").getIsNewsletter(t)) {
        (r.logAbort(),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[updateNewsletterAdminProfilesSettingAction] not a newsletter",
                ])),
            )
            .tags("newsletter")
            .sendLogs("update-newsletter-admin-action-not-a-newsletter"));
        return;
      }
      var a = o("WAJids").toNewsletterJid(t.id.toJid());
      try {
        (await o(
          "WAWebUpdateNewsletterAdminProfileSettingJob",
        ).updateNewsletterAdminProfileSetting({
          adminProfilesEnabled: n,
          newsletterJid: a,
        }),
          await o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateNewsletterAdminProfileSetting({
            id: t.id,
            adminProfilesSettingEnabled: n,
          }),
          o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log({
            cid: t.id,
            channelCoreEventType: n
              ? o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE
                  .ADMIN_PROFILE_SETTING_ENABLE
              : o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE
                  .ADMIN_PROFILE_SETTING_DISABLE,
            eventSurface: o("WAWebWamEnumChannelEventSurface")
              .CHANNEL_EVENT_SURFACE.CHANNEL_INFO_SHEET,
          }),
          r.logSuccess());
      } catch (e) {
        throw (
          r.logFail(),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[updateNewsletterAdminProfilesSettingAction] update failed",
                ])),
            )
            .tags("newsletter")
            .sendLogs("update-newsletter-admin-action-failed"),
          e
        );
      }
    }
    l.updateNewsletterAdminProfilesSettingAction = u;
  },
  98,
);
