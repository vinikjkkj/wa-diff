__d(
  "WAWebUpdatesHeaderDropdown.react",
  [
    "fbt",
    "WDSIconIcLock.react",
    "WDSIconWdsIcNewChannel.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onCreateNewsletter,
        a = e.onOpenStatusPrivacySettingDrawer,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Create channel")), (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Status privacy")), (t[1] = c))
        : (c = t[1]);
      var d = c,
        m;
      t[2] !== n
        ? ((m = u.jsx(
            r("WDSMenuItem.react"),
            { onPress: n, Icon: r("WDSIconWdsIcNewChannel.react"), title: l },
            "updates-tab-create-newsletter",
          )),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== a
        ? ((p = u.jsx(
            r("WDSMenuItem.react"),
            { onPress: a, Icon: r("WDSIconIcLock.react"), title: d },
            "updates-tab-status-privacy",
          )),
          (t[4] = a),
          (t[5] = p))
        : (p = t[5]);
      var _;
      return (
        t[6] !== m || t[7] !== p
          ? ((_ = u.jsxs(r("WDSMenu.react"), { children: [m, p] })),
            (t[6] = m),
            (t[7] = p),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    l.default = c;
  },
  226,
);
