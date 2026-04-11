__d(
  "WAWebDashes.react",
  ["fbt", "WAWebFlex.react", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        dashContainer: { height: "x10w6t97", width: "xfo62xy", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.active,
        r;
      t[0] !== n
        ? ((r = {
            0: {
              className:
                "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xs7vtfe xfl633f",
            },
            1: {
              className:
                "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xfl633f x3l9nec",
            },
          }[!!n << 0]),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a;
      return (
        t[2] !== r
          ? ((a = c.jsx("div", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.activeIndex,
        i = t.count,
        l;
      if (n[0] !== a || n[1] !== i) {
        l = [];
        for (var u = 0; u < i; u++)
          l.push(c.jsx(m, { active: u === a }, "dash-" + u));
        ((n[0] = a), (n[1] = i), (n[2] = l));
      } else l = n[2];
      var p;
      n[3] !== a || n[4] !== i
        ? ((p = s._(/*BTDS*/ "{current} out of {total}", [
            s._param("current", a + 1),
            s._param("total", i),
          ])),
          (n[3] = a),
          (n[4] = i),
          (n[5] = p))
        : (p = n[5]);
      var _;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex")))([d.dashContainer])), (n[6] = _))
        : (_ = n[6]);
      var f;
      return (
        n[7] !== l || n[8] !== p
          ? ((f = c.jsx(o("WAWebFlex.react").FlexColumn, {
              "aria-label": p,
              className: _,
              children: l,
            })),
            (n[7] = l),
            (n[8] = p),
            (n[9] = f))
          : (f = n[9]),
        f
      );
    }
    l.default = p;
  },
  226,
);
