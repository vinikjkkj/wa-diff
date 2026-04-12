__d(
  "WAWebMuteAllMentionsRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebContactNotificationSettingUserJourneyWamLogging",
    "WAWebFbtCommon",
    "WAWebMuteGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumTsSurface",
    "WDSSwitch.react",
    "react",
    "useWAWebMuteValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.containerXstyle,
        a = e.mute,
        i = o("useWAWebMuteValues").useMuteValues(a.id, [
          o("WAWebMuteGetters").getIsMuted,
          o("WAWebMuteGetters").getIsMentionAllMuted,
        ]),
        l = i[0],
        c = i[1],
        d = function () {
          var e = null;
          if (c) e = a.unmuteMentionAll();
          else if (a.expiration != null) e = a.muteMentionAll(a.expiration);
          else return;
          return e;
        },
        m = r("useWAWebStableCallback")(function () {
          var e,
            n,
            a,
            i = !c,
            l =
              (e =
                (n = t.groupMetadata) == null
                  ? void 0
                  : n.participants.length) != null
                ? e
                : 0;
          o(
            "WAWebContactNotificationSettingUserJourneyWamLogging",
          ).ContactNotificationSettingUserJourneyLogger.logMuteAllMentionsToggle(
            i,
            o("WAWebWamEnumTsSurface").TS_SURFACE
              .CONTACT_NOTIFICATION_SETTING_PAGE,
            l,
          );
          var m = o("WAWebToast.react").genId();
          (a = d()) == null ||
            a.then(function () {
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  id: m,
                  msg: i
                    ? s._(/*BTDS*/ "\u0040all mentions muted")
                    : s._(/*BTDS*/ "\u0040all mentions unmuted"),
                  action: {
                    actionText: r("WAWebFbtCommon")("Undo"),
                    onAction: function () {
                      (d(), o("WAWebToastManager").ToastManager.close(m));
                    },
                  },
                }),
              );
            });
        });
      if (!l || !t.id.isGroup()) return null;
      var p = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: s._(/*BTDS*/ "Mute \u0040all mentions"),
        }),
        _ = u.jsx(r("WDSSwitch.react"), {
          tabIndex: -1,
          value: c != null ? c : !1,
        });
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        { testid: void 0, side: _, onClick: m, title: p, containerXstyle: n },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
