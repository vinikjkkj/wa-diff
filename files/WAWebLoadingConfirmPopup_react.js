__d(
  "WAWebLoadingConfirmPopup.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebLazyLoadLoading.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.error,
        a = e.okText,
        i = e.title,
        l = c,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { surface: "unknown", viewName: "loading-confirm" }),
          (t[0] = u))
        : (u = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x1n2onr6 x1vd4hg5" }), (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== n
        ? ((m = s.jsx(
            "div",
            babelHelpers.extends({}, d, {
              children: s.jsx(r("WAWebLazyLoadLoading.react"), { error: n }),
            }),
          )),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== a || t[5] !== m || t[6] !== i
          ? ((p = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: u,
              title: i,
              onOK: l,
              okText: a,
              okDisabled: !0,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: m,
            })),
            (t[4] = a),
            (t[5] = m),
            (t[6] = i),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    function c() {}
    l.default = u;
  },
  98,
);
