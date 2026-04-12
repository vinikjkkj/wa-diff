__d(
  "WAWebUpdatesHeaderDropdown.react",
  [
    "fbt",
    "WDSIconIcLock.react",
    "WDSIconWdsIcNewChannel.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onCreateNewsletter,
        n = e.onOpenStatusPrivacySettingDrawer,
        o = s._(/*BTDS*/ "Create channel"),
        a = s._(/*BTDS*/ "Status privacy");
      return u.jsxs(r("WDSMenu.react"), {
        children: [
          u.jsx(
            r("WDSMenuItem.react"),
            { onPress: t, Icon: r("WDSIconWdsIcNewChannel.react"), title: o },
            "updates-tab-create-newsletter",
          ),
          u.jsx(
            r("WDSMenuItem.react"),
            { onPress: n, Icon: r("WDSIconIcLock.react"), title: a },
            "updates-tab-status-privacy",
          ),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
