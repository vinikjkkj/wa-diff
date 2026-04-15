__d(
  "WAWebMediaAutoDownloadDrawer.react",
  [
    "fbt",
    "WAWebAutoDownloadSettings.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onClose,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "media-auto-download" }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Media auto-download")), (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] !== n
        ? ((c = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: l,
            onBack: n,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[2] = n),
          (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(
              r("WAWebAutoDownloadSettings.react"),
              {},
              "auto-download",
            ),
          })),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] !== c
        ? ((m = u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            children: [c, d],
          })),
          (t[5] = c),
          (t[6] = m))
        : (m = t[6]);
      var p;
      return (
        t[7] !== a || t[8] !== m
          ? ((p = u.jsx(r("WAWebDrawer.react"), {
              ref: a,
              tsNavigationData: i,
              children: m,
            })),
            (t[7] = a),
            (t[8] = m),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    l.default = c;
  },
  226,
);
