__d(
  "WAWebDirectMessagesNotificationsDrawer.react",
  [
    "fbt",
    "WAWebGranularNotificationsDrawer.react",
    "WAWebMuteCollection",
    "WAWebNoop",
    "cr:7293",
    "react",
    "react-compiler-runtime",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = (e = n("cr:7293")) != null ? e : {},
      m = d.getNotificationToneSetting,
      p = d.setNotificationToneSetting;
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.onClose,
        a = e.ref,
        i = s._(/*BTDS*/ "Messages"),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Notification tone")), (t[0] = l))
        : (l = t[0]);
      var u = l,
        d = o("useWAWebSettingSync").useSettingSync(
          "defaultNotificationToneId",
          p != null ? p : r("WAWebNoop"),
        ),
        _ = o("useWAWebSettingSync").useSettingSync(
          "isMessagesNotificationEnabled",
          b,
        ),
        v = o("useWAWebSettingSync").useSettingSync(
          "isReactionsNotificationEnabled",
          C,
        ),
        S = i.toString(),
        R;
      t[1] !== u || t[2] !== d || t[3] !== _ || t[4] !== v || t[5] !== S
        ? ((R = {
            title: S,
            testidPrefix: "direct-messages",
            getNotificationsEnabled: y,
            setNotificationsEnabled: _,
            getReactionsEnabled: h,
            setReactionsEnabled: v,
            getSoundsEnabled: g,
            setSoundsEnabled: f,
            getNotificationToneSetting: m,
            setNotificationToneSetting: d,
            notificationToneDropdownTitle: u,
          }),
          (t[1] = u),
          (t[2] = d),
          (t[3] = _),
          (t[4] = v),
          (t[5] = S),
          (t[6] = R))
        : (R = t[6]);
      var L = R,
        E;
      return (
        t[7] !== L || t[8] !== n || t[9] !== a
          ? ((E = c.jsx(r("WAWebGranularNotificationsDrawer.react"), {
              config: L,
              onClose: n,
              ref: a,
            })),
            (t[7] = L),
            (t[8] = n),
            (t[9] = a),
            (t[10] = E))
          : (E = t[10]),
        E
      );
    }
    function f(e) {
      o("WAWebMuteCollection").MuteCollection.setGlobalSoundsEnabled(e);
    }
    function g() {
      return o("WAWebMuteCollection").MuteCollection.getGlobalSoundsEnabled();
    }
    function h() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalNotificationReactionsEnabled();
    }
    function y() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalNotificationsEnabled();
    }
    function C(e) {
      o(
        "WAWebMuteCollection",
      ).MuteCollection.setGlobalNotificationReactionsEnabled(e);
    }
    function b(e) {
      o("WAWebMuteCollection").MuteCollection.setGlobalNotificationsEnabled(e);
    }
    l.default = _;
  },
  226,
);
