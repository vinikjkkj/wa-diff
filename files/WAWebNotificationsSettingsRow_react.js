__d(
  "WAWebNotificationsSettingsRow.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebChatInfoDrawerRow.react",
    "WAWebClock",
    "WAWebMuteGetters",
    "WAWebMuteNotificationsRefreshedIcon.react",
    "WAWebNotifyForUtils",
    "WAWebText.react",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "react",
    "useWAWebChatValues",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.chat,
        n = e.onClick,
        r = e.testid,
        a = o("useWAWebMuteValues").useMuteValues(t.id, [
          o("WAWebMuteGetters").getIsMuted,
        ]),
        i = a[0],
        l = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getMuteExpiration,
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebChatGetters").getIsGroup,
        ]),
        d = l[0],
        m = l[1],
        p = l[2],
        _ = i
          ? u.jsx(
              o("WAWebMuteNotificationsRefreshedIcon.react")
                .MuteNotificationsRefreshedIcon,
              {},
            )
          : u.jsx(
              o("WAWebUnmuteNotificationsRefreshedIcon.react")
                .UnmuteNotificationsRefreshedIcon,
              {},
            ),
        f = null;
      if (i && d && !m) {
        var g = o("WAWebClock").Clock.mutedUntilStr(d);
        f = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: g });
      }
      c(
        function () {
          o("WAWebNotifyForUtils").maybeAutoDefaultToHighlightsForLargeGroup(t);
        },
        [t],
      );
      var h = null;
      if (
        f == null &&
        p &&
        o("WAWebABProps").getABPropConfigValue("wa_web_notify_for")
      ) {
        var y,
          C,
          b = o("WAWebNotifyForUtils").getNotifyForSetting(
            (y = t == null || (C = t.id) == null ? void 0 : C.toString()) !=
              null
              ? y
              : "",
          ),
          v = o("WAWebNotifyForUtils").getNotifyForLabel(b);
        h = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: v });
      }
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          icon: _,
          onClick: n,
          title: u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: s._(/*BTDS*/ "Notification settings") },
          ),
          secondaryTitle: f != null ? f : h,
          testid: void 0,
        },
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
