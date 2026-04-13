__d(
  "WAWebGroupMessagesNotificationsDrawer.react",
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
      m = d.getNotificationToneGroupSetting,
      p = d.setNotificationToneGroupSetting;
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.onClose,
        a = e.ref,
        i = s._(/*BTDS*/ "Groups"),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Notification tone")), (t[0] = l))
        : (l = t[0]);
      var u = l,
        d = o("useWAWebSettingSync").useSettingSync(
          "groupDefaultNotificationToneId",
          p != null ? p : r("WAWebNoop"),
        ),
        _ = o("useWAWebSettingSync").useSettingSync(
          "isGroupMessageNotificationEnabled",
          b,
        ),
        v = o("useWAWebSettingSync").useSettingSync(
          "isGroupReactionsNotificationEnabled",
          C,
        ),
        S = i.toString(),
        R;
      t[1] !== _ || t[2] !== v || t[3] !== u || t[4] !== d || t[5] !== S
        ? ((R = {
            title: S,
            testidPrefix: "group-messages",
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
          (t[1] = _),
          (t[2] = v),
          (t[3] = u),
          (t[4] = d),
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
      o("WAWebMuteCollection").MuteCollection.setGlobalGroupSoundsEnabled(e);
    }
    function g() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalGroupSoundsEnabled();
    }
    function h() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalGroupNotificationReactionsEnabled();
    }
    function y() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalGroupNotificationsEnabled();
    }
    function C(e) {
      o(
        "WAWebMuteCollection",
      ).MuteCollection.setGlobalGroupNotificationReactionsEnabled(e);
    }
    function b(e) {
      o(
        "WAWebMuteCollection",
      ).MuteCollection.setGlobalGroupNotificationsEnabled(e);
    }
    l.default = _;
  },
  226,
);
