__d(
  "WAWebNoticeButterbar.react",
  ["WDSBanner.react", "WDSIconIcLock.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.banner,
        a = e.shouldShow;
      if (!a || !(n != null && n.text)) return null;
      var i = n.text,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }),
          (t[0] = l))
        : (l = t[0]);
      var u;
      return (
        t[1] !== i
          ? ((u = s.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: s.jsx(r("WDSBanner.react"), {
                  type: "default",
                  body: i,
                  icon: r("WDSIconIcLock.react"),
                }),
              }),
            )),
            (t[1] = i),
            (t[2] = u))
          : (u = t[2]),
        u
      );
    }
    l.default = u;
  },
  98,
);
