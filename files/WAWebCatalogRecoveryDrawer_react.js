__d(
  "WAWebCatalogRecoveryDrawer.react",
  [
    "fbt",
    "WAWebAdsManagementRecoveryNeeded.react",
    "WAWebCatalogCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebWarningOutlineIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var n = o("react-compiler-runtime").c(17),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.catalogId,
        d = l.emailMask,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Verify email")), (n[3] = m))
        : (m = n[3]);
      var p = m,
        _;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(
            /*BTDS*/ "We were unable to load your catalog. Verify your email to view your products.",
          )),
          (n[4] = _))
        : (_ = n[4]);
      var f = _,
        g;
      n[5] !== u
        ? ((g = function () {
            o("WAWebCatalogCollection").CatalogCollection.find(u);
          }),
          (n[5] = u),
          (n[6] = g))
        : (g = n[6]);
      var h = g,
        y;
      n[7] !== d || n[8] !== h
        ? ((y = c.jsx(r("WAWebAdsManagementRecoveryNeeded.react"), {
            emailMask: d,
            handleCodeEntered: h,
            headerDescription: f,
            headerText: p,
            Icon: o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
          })),
          (n[7] = d),
          (n[8] = h),
          (n[9] = y))
        : (y = n[9]);
      var C = y,
        b;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { surface: "unknown", viewName: "catalog-recovery" }),
          (n[10] = b))
        : (b = n[10]);
      var v;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Catalog"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: o("WAWebDrawerManager").closeDrawerLeft,
            focusBackOrCancel: !0,
          })),
          (n[11] = v))
        : (v = n[11]);
      var S;
      n[12] !== C
        ? ((S = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(r("WAWebDrawerSection.react"), {
              theme: "expand-height",
              animation: !1,
              children: C,
            }),
          })),
          (n[12] = C),
          (n[13] = S))
        : (S = n[13]);
      var R;
      return (
        n[14] !== i || n[15] !== S
          ? ((R = c.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "settings",
              testid: void 0,
              tsNavigationData: b,
              children: [v, S],
            })),
            (n[14] = i),
            (n[15] = S),
            (n[16] = R))
          : (R = n[16]),
        R
      );
    }
    var p = m;
    l.CatalogRecoveryDrawer = p;
  },
  226,
);
