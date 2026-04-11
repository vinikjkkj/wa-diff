__d(
  "WAWebLoadingDrawer.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebLazyLoadLoading.react",
    "react",
    "react-compiler-runtime",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["title", "headerType", "description", "cancellable"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(20),
        a,
        i,
        l,
        s,
        c;
      n[0] !== t
        ? ((c = t.title),
          (l = t.headerType),
          (a = t.description),
          (s = t.cancellable),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]), (c = n[5]));
      var d =
          l === void 0
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
            : l,
        m = s === void 0 ? !0 : s,
        p = r("useWAWebUIM")(),
        _;
      n[6] !== p
        ? ((_ = function () {
            p == null || p.requestDismiss();
          }),
          (n[6] = p),
          (n[7] = _))
        : (_ = n[7]);
      var f = _,
        g = a != null ? a : "WAWebLoadingDrawer",
        h;
      n[8] !== g
        ? ((h = u.jsx(r("CometHeroHoldTrigger.react"), {
            description: g,
            hold: !0,
          })),
          (n[8] = g),
          (n[9] = h))
        : (h = n[9]);
      var y = m ? f : void 0,
        C;
      n[10] !== d || n[11] !== y || n[12] !== c
        ? ((C = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: c,
            type: d,
            onCancel: y,
          })),
          (n[10] = d),
          (n[11] = y),
          (n[12] = c),
          (n[13] = C))
        : (C = n[13]);
      var b;
      n[14] !== i
        ? ((b = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(
              r("WAWebLazyLoadLoading.react"),
              babelHelpers.extends({}, i),
            ),
          })),
          (n[14] = i),
          (n[15] = b))
        : (b = n[15]);
      var v;
      return (
        n[16] !== h || n[17] !== C || n[18] !== b
          ? ((v = u.jsxs(r("WAWebDrawer.react"), {
              disableNavigationLogging: !0,
              children: [h, C, b],
            })),
            (n[16] = h),
            (n[17] = C),
            (n[18] = b),
            (n[19] = v))
          : (v = n[19]),
        v
      );
    }
    l.default = c;
  },
  98,
);
