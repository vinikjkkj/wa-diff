__d(
  "WAWebMuteMenuItem.react",
  [
    "fbt",
    "WAWebClock",
    "WAWebMuteExpirations",
    "WAWebSettingsGetters",
    "WDSIconIcNotifications.react",
    "WDSIconIcNotificationsOff.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebModelValues",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {};
    function d(e) {
      var t = e.onMuteWithDuration;
      return u.jsx(r("WDSMenu.react"), {
        children: o("WAWebMuteExpirations").ALL_MUTE_DURATIONS.map(
          function (e) {
            var n = e.duration,
              o = e.getLabel,
              a = e.radioId;
            return u.jsx(
              r("WDSMenuItem.react"),
              {
                title: o(),
                onPress: function () {
                  return t(n);
                },
                testid: void 0,
              },
              a,
            );
          },
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.disabled,
        n = e.isMuted,
        a = e.onMuteWithDuration,
        i = o("useWAWebModelValues").useModelValues(e.chat, [
          "archive",
          "muteExpiration",
        ]),
        l = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getShowArchiveV2,
        ]),
        m = l[0],
        p = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_submenus",
        ),
        _ = e.onMute.bind(null, !n),
        f,
        g;
      i.archive && m
        ? ((f = c), (g = s._(/*BTDS*/ "Unmute notifications")))
        : ((g = n
            ? s._(/*BTDS*/ "Unmute notifications")
            : s._(/*BTDS*/ "Mute notifications")),
          (f = _));
      var h = !n && a != null && p,
        y =
          n && i.muteExpiration
            ? o("WAWebClock").Clock.mutedUntilStr(i.muteExpiration)
            : void 0;
      return u.jsx(r("WDSMenuItem.react"), {
        Icon: r(
          n
            ? "WDSIconIcNotifications.react"
            : "WDSIconIcNotificationsOff.react",
        ),
        title: g,
        subtitle: y,
        onPress: h ? c : f,
        testid: void 0,
        disabled: t,
        hasSubmenu: h,
        submenuContent:
          h && a != null ? u.jsx(d, { onMuteWithDuration: a }) : null,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
