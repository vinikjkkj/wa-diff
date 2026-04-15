__d(
  "WAWebStatusUpdatesNotificationsDrawer.react",
  [
    "fbt",
    "WAWebGranularNotificationsDrawer.react",
    "WAWebMuteCollection",
    "WAWebNoop",
    "WAWebSettingsSyncBridge",
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
      m = d.getNotificationToneStatusSetting,
      p = d.setNotificationToneStatusSetting;
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.onClose,
        a = e.ref,
        i = s._(/*BTDS*/ "Status"),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Notification tone")), (t[0] = l))
        : (l = t[0]);
      var u = l,
        d = o("useWAWebSettingSync").useSettingSync(
          "statusNotificationToneId",
          p != null ? p : r("WAWebNoop"),
        ),
        _ = o("useWAWebSettingSync").useSettingSync(
          "isStatusNotificationEnabled",
          b,
        ),
        v = o("useWAWebSettingSync").useSettingSync(
          "isStatusReactionsNotificationEnabled",
          C,
        ),
        S = i.toString(),
        R;
      t[1] !== v || t[2] !== u || t[3] !== d || t[4] !== _ || t[5] !== S
        ? ((R = {
            title: S,
            testidPrefix: "status-updates",
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
          (t[1] = v),
          (t[2] = u),
          (t[3] = d),
          (t[4] = _),
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
      (o("WAWebMuteCollection").MuteCollection.setGlobalStatusSoundsEnabled(e),
        o("WAWebSettingsSyncBridge").sendSettingChange(
          "statusNotificationToneId",
          e ? 1 : 0,
        ));
    }
    function g() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalStatusSoundsEnabled();
    }
    function h() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalStatusNotificationReactionsEnabled();
    }
    function y() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalStatusNotificationsEnabled();
    }
    function C(e) {
      o(
        "WAWebMuteCollection",
      ).MuteCollection.setGlobalStatusNotificationReactionsEnabled(e);
    }
    function b(e) {
      o(
        "WAWebMuteCollection",
      ).MuteCollection.setGlobalStatusNotificationsEnabled(e);
    }
    l.default = _;
  },
  226,
);
