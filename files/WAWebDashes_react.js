__d(
  "WAWebDashes.react",
  ["fbt", "WAWebFlex.react", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        dashContainer: { height: "x10w6t97", width: "xfo62xy", $$css: !0 },
      };
    function m(e) {
      var t = e.active;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xs7vtfe xfl633f",
            },
            1: {
              className:
                "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xfl633f x3l9nec",
            },
          }[!!t << 0],
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      for (var n = t.activeIndex, a = t.count, i = [], l = 0; l < a; l++)
        i.push(c.jsx(m, { active: l === n }, "dash-" + l));
      return c.jsx(o("WAWebFlex.react").FlexColumn, {
        "aria-label": s._(/*BTDS*/ "{current} out of {total}", [
          s._param("current", n + 1),
          s._param("total", a),
        ]),
        className: (e || (e = r("stylex")))([d.dashContainer]),
        children: i,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
