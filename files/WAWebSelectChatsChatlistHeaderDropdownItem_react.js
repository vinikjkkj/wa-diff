__d(
  "WAWebSelectChatsChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WDSIconIcCheckBox.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chatListCollapsed,
        n = e.isMultiSelectMode,
        a = e.startMultiSelect,
        i = s._(/*BTDS*/ "Select chats"),
        l = "mi-select-chats",
        c = u.jsx(r("WDSMenuItem.react"), {
          Icon: r("WDSIconIcCheckBox.react"),
          title: i,
          onPress: a,
          testid: void 0,
        });
      return o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_feature_parity_small_wins",
        )
        ? null
        : !t && !n
          ? c
          : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
