__d(
  "useWAWebNewsletterMuteState",
  [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataModel",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebWamEnumChannelEventSurface",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(19),
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebChatGetters").getMuteExpiration,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebChatValues").useChatValues(e.id, r),
        i = a[0],
        l = a[1],
        s;
      t[1] !== l
        ? ((s =
            l != null
              ? l
              : new (o("WAWebNewsletterMetadataModel").NewsletterMetadata)()),
          (t[1] = l),
          (t[2] = s))
        : (s = t[2]);
      var u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["followerActivityMuteExpiration"]), (t[3] = u))
        : (u = t[3]);
      var c = o("useWAWebModelValues").useModelValues(s, u),
        d;
      t[4] !== e.newsletterMetadata
        ? ((d = o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(e.newsletterMetadata)),
          (t[4] = e.newsletterMetadata),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      t[6] !== i || t[7] !== m || t[8] !== c.followerActivityMuteExpiration
        ? ((p =
            o("WAWebNewsletterModelUtils").isMuted(i) &&
            (!m ||
              o("WAWebNewsletterModelUtils").isMuted(
                c.followerActivityMuteExpiration,
              ))),
          (t[6] = i),
          (t[7] = m),
          (t[8] = c.followerActivityMuteExpiration),
          (t[9] = p))
        : (p = t[9]);
      var _ = p,
        f;
      t[10] !== i ||
      t[11] !== e.id ||
      t[12] !== m ||
      t[13] !== c.followerActivityMuteExpiration ||
      t[14] !== _
        ? ((f = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = _
                  ? o("WAWebNewsletterModelUtils").UNMUTED_STATE
                  : o("WAWebNewsletterModelUtils").MUTED_STATE,
                n = [];
              (t !== i &&
                n.push(
                  o("WAWebNewsletterUpdateUserSettingsAction")
                    .NewsletterUserSetting.AdminActivity,
                ),
                m &&
                  t !== c.followerActivityMuteExpiration &&
                  n.push(
                    o("WAWebNewsletterUpdateUserSettingsAction")
                      .NewsletterUserSetting.FollowerActivity,
                  ),
                yield o(
                  "WAWebNewsletterUpdateUserSettingsAction",
                ).updateNewsletterUserSettingsAction(e.id, t, n, {
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
                }));
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (t[10] = i),
          (t[11] = e.id),
          (t[12] = m),
          (t[13] = c.followerActivityMuteExpiration),
          (t[14] = _),
          (t[15] = f))
        : (f = t[15]);
      var g = f,
        h;
      return (
        t[16] !== _ || t[17] !== g
          ? ((h = { isMuted: _, toggleMuteState: g }),
            (t[16] = _),
            (t[17] = g),
            (t[18] = h))
          : (h = t[18]),
        h
      );
    }
    l.useNewsletterMuteState = u;
  },
  98,
);
