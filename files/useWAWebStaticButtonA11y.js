__d(
  "useWAWebStaticButtonA11y",
  ["WAWebKeyboardIsKeyActivation", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e) {}
    function c(e, t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(6),
        l = s(),
        c;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (t) {
            l.current = t;
          }),
          (i[0] = c))
        : (c = i[0]);
      var d = c,
        m;
      i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function (t) {
            if (r("WAWebKeyboardIsKeyActivation")(t)) {
              var e;
              (t.stopPropagation(),
                t.preventDefault(),
                (e = l.current) == null || e.click());
            }
          }),
          (i[1] = m))
        : (m = i[1]);
      var p = m,
        _ = (t == null ? void 0 : t.disabled) === !0,
        f = _ ? u : e,
        g = (n = t == null ? void 0 : t.disabled) != null ? n : void 0,
        h = _ ? -1 : (a = t == null ? void 0 : t.tabIndex) != null ? a : 0,
        y;
      return (
        i[2] !== f || i[3] !== g || i[4] !== h
          ? ((y = [
              d,
              {
                "aria-disabled": g,
                onClick: f,
                onKeyPress: p,
                role: "button",
                tabIndex: h,
              },
            ]),
            (i[2] = f),
            (i[3] = g),
            (i[4] = h),
            (i[5] = y))
          : (y = i[5]),
        y
      );
    }
    l.default = c;
  },
  98,
);
