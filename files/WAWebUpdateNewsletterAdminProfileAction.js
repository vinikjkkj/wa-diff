__d(
  "WAWebUpdateNewsletterAdminProfileAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterAdminProfileActionsQPLLogger",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterBridgeApi",
    "WAWebUpdateNewsletterAdminProfileJob",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a = new (o(
              "WAWebNewsletterAdminProfileActionsQPLLogger",
            ).WAWebNewsletterAdminProfileActionsQPLLogger)({
              eventSurface: o("WAWebWamEnumChannelEventSurface")
                .CHANNEL_EVENT_SURFACE.CHANNEL_INFO_SHEET,
              markerId: n == null ? 1026959530 : 1026950611,
            });
          if (!o("WAWebChatGetters").getIsNewsletter(t)) {
            (a.logAbort(),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[updateNewsletterAdminProfileAction] not a newsletter",
                    ])),
                )
                .tags("newsletter")
                .sendLogs(
                  "update-newsletter-admin-profile-action-not-a-newsletter",
                ));
            return;
          }
          var i = o("WAJids").toNewsletterJid(t.id.toJid()),
            l = o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE
              .ADMIN_PROFILE_UPDATE;
          n == null
            ? (l = o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE
                .ADMIN_PROFILE_DELETE)
            : ((r = t.newsletterMetadata) == null ? void 0 : r.adminProfile) ==
                null &&
              (l = o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE
                .ADMIN_PROFILE_CREATE);
          try {
            var u = yield o(
              "WAWebUpdateNewsletterAdminProfileJob",
            ).updateOwnNewsletterAdminProfile({
              adminProfile: n,
              newsletterJid: i,
            });
            (yield o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.updateNewsletterAdminProfile({
              id: t.id,
              adminProfile: u,
            }),
              o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.log({
                cid: t.id,
                channelCoreEventType: l,
                eventSurface: o("WAWebWamEnumChannelEventSurface")
                  .CHANNEL_EVENT_SURFACE.CHANNEL_INFO_SHEET,
              }),
              a.logSuccess());
          } catch (e) {
            throw (
              a.logFail(),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[updateNewsletterAdminProfileAction] update failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("update-newsletter-admin-profile-action-failed"),
              e
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.updateNewsletterAdminProfileAction = u;
  },
  98,
);
