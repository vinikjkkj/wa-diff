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
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebModelValues",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {};
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onMuteWithDuration,
        a;
      t[0] !== n
        ? ((a = o("WAWebMuteExpirations").ALL_MUTE_DURATIONS.map(function (e) {
            var t = e.duration,
              o = e.getLabel,
              a = e.radioId;
            return u.jsx(
              r("WDSMenuItem.react"),
              {
                title: o(),
                onPress: function () {
                  return n(t);
                },
                testid: void 0,
              },
              a,
            );
          })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== a
          ? ((i = u.jsx(r("WDSMenu.react"), { children: a })),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.disabled,
        a = e.isMuted,
        i = e.onMuteWithDuration,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["archive", "muteExpiration"]), (t[0] = l))
        : (l = t[0]);
      var m = o("useWAWebModelValues").useModelValues(e.chat, l),
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [o("WAWebSettingsGetters").getShowArchiveV2]), (t[1] = p))
        : (p = t[1]);
      var _ = o("useWAWebSettingsValues").useSettingsValues(p),
        f = _[0],
        g = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_submenus",
        ),
        h;
      t[2] !== a || t[3] !== e.onMute
        ? ((h = e.onMute.bind(null, !a)),
          (t[2] = a),
          (t[3] = e.onMute),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C,
        b;
      if (m.archive && f) {
        C = c;
        var v;
        (t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(/*BTDS*/ "Unmute notifications")), (t[5] = v))
          : (v = t[5]),
          (b = v));
      } else {
        var S;
        (t[6] !== a
          ? ((S = a
              ? s._(/*BTDS*/ "Unmute notifications")
              : s._(/*BTDS*/ "Mute notifications")),
            (t[6] = a),
            (t[7] = S))
          : (S = t[7]),
          (b = S),
          (C = y));
      }
      var R = !a && i != null && g,
        L;
      t[8] !== m.muteExpiration || t[9] !== a
        ? ((L =
            a && m.muteExpiration
              ? o("WAWebClock").Clock.mutedUntilStr(m.muteExpiration)
              : void 0),
          (t[8] = m.muteExpiration),
          (t[9] = a),
          (t[10] = L))
        : (L = t[10]);
      var E = L,
        k = r(
          a
            ? "WDSIconIcNotifications.react"
            : "WDSIconIcNotificationsOff.react",
        ),
        I = R ? c : C,
        T;
      t[11] !== i || t[12] !== R
        ? ((T = R && i != null ? u.jsx(d, { onMuteWithDuration: i }) : null),
          (t[11] = i),
          (t[12] = R),
          (t[13] = T))
        : (T = t[13]);
      var D;
      return (
        t[14] !== n ||
        t[15] !== E ||
        t[16] !== R ||
        t[17] !== k ||
        t[18] !== I ||
        t[19] !== T ||
        t[20] !== b
          ? ((D = u.jsx(r("WDSMenuItem.react"), {
              Icon: k,
              title: b,
              subtitle: E,
              onPress: I,
              testid: void 0,
              disabled: n,
              hasSubmenu: R,
              submenuContent: T,
            })),
            (t[14] = n),
            (t[15] = E),
            (t[16] = R),
            (t[17] = k),
            (t[18] = I),
            (t[19] = T),
            (t[20] = b),
            (t[21] = D))
          : (D = t[21]),
        D
      );
    }
    l.default = m;
  },
  226,
);
