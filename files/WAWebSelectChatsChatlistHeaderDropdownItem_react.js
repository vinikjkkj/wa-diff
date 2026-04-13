__d(
  "WAWebSelectChatsChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WDSIconIcCheckBox.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.chatListCollapsed,
        a = e.isMultiSelectMode,
        i = e.startMultiSelect,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Select chats")), (t[0] = l))
        : (l = t[0]);
      var c = l,
        d;
      t[1] !== i
        ? ((d = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCheckBox.react"),
            title: c,
            onPress: i,
            testid: void 0,
          })),
          (t[1] = i),
          (t[2] = d))
        : (d = t[2]);
      var m = d;
      return o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_feature_parity_small_wins",
        )
        ? null
        : !n && !a
          ? m
          : null;
    }
    l.default = c;
  },
  226,
);
