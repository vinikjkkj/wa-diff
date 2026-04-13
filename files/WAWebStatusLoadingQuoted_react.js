__d(
  "WAWebStatusLoadingQuoted.react",
  [
    "WAWebBackIcon.react",
    "WAWebLazyLoadLoading.react",
    "WAWebModalManager",
    "WAWebXViewerIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.error,
        a = e.retry,
        i = e.text,
        l = c,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            className:
              "x10l6tqk x13vifvy x1o0tod x1bpt9pm xh8yej3 x5yr21d x1280gxy",
          }),
          (t[0] = u))
        : (u = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x10l6tqk xoyzfg9 x1i4sgur xhtitgo x17t9dm2" }),
          (t[1] = d))
        : (d = t[1]);
      var m, p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx(
            "button",
            babelHelpers.extends({}, d, {
              onClick: l,
              children: s.jsx(o("WAWebXViewerIcon.react").XViewerIcon, {}),
            }),
          )),
          (p = {
            className: "x10l6tqk xoyzfg9 x18hw5r0 xhtitgo x78zum5 x17t9dm2",
          }),
          (t[2] = m),
          (t[3] = p))
        : ((m = t[2]), (p = t[3]));
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s.jsx(
            "button",
            babelHelpers.extends({}, p, {
              onClick: l,
              children: s.jsx(o("WAWebBackIcon.react").BackIcon, {
                directional: !0,
              }),
            }),
          )),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== n || t[6] !== a || t[7] !== i
          ? ((f = s.jsxs(
              "div",
              babelHelpers.extends({}, u, {
                "data-animate-status-viewer": !0,
                children: [
                  m,
                  _,
                  s.jsx(r("WAWebLazyLoadLoading.react"), {
                    error: n,
                    text: i,
                    retry: a,
                  }),
                ],
              }),
            )),
            (t[5] = n),
            (t[6] = a),
            (t[7] = i),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function c() {
      return o("WAWebModalManager").ModalManager.closeMedia();
    }
    l.default = u;
  },
  98,
);
