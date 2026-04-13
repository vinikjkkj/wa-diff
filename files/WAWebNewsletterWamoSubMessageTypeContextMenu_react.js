__d(
  "WAWebNewsletterWamoSubMessageTypeContextMenu.react",
  [
    "fbt",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypeContextMenuItem.react",
    "WAWebPremiumChannelIcon.react",
    "WDSIconIcPublic.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.onSelect,
        r;
      return (
        t[0] !== n
          ? ((r = u.jsxs("div", {
              children: [u.jsx(d, { onSelect: n }), u.jsx(m, { onSelect: n })],
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onSelect,
        a;
      t[0] !== n
        ? ((a = function (t) {
            (t.preventDefault(),
              n(
                o("WAWebNewsletterWamoSubMessageType")
                  .NewsletterWamoSubMessageType.Public,
              ));
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l,
        c,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WDSIconIcPublic.react"), {})),
          (c = s._(/*BTDS*/ "Public")),
          (d = s._(/*BTDS*/ "Anyone can view")),
          (t[2] = l),
          (t[3] = c),
          (t[4] = d))
        : ((l = t[2]), (c = t[3]), (d = t[4]));
      var m;
      return (
        t[5] !== i
          ? ((m = u.jsx(
              r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"),
              { testid: void 0, action: i, icon: l, text: c, description: d },
            )),
            (t[5] = i),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onSelect,
        a;
      t[0] !== n
        ? ((a = function (t) {
            (t.preventDefault(),
              n(
                o("WAWebNewsletterWamoSubMessageType")
                  .NewsletterWamoSubMessageType.WamoSub,
              ));
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l,
        c,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(
            o("WAWebPremiumChannelIcon.react").PremiumChannelIcon,
            {},
          )),
          (c = s._(/*BTDS*/ "Subscribers")),
          (d = s._(/*BTDS*/ "Only subscribers can view")),
          (t[2] = l),
          (t[3] = c),
          (t[4] = d))
        : ((l = t[2]), (c = t[3]), (d = t[4]));
      var m;
      return (
        t[5] !== i
          ? ((m = u.jsx(
              r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"),
              { testid: void 0, action: i, icon: l, text: c, description: d },
            )),
            (t[5] = i),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    l.default = c;
  },
  226,
);
