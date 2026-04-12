__d(
  "WAWebBaseContainerQueryElement.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "ref",
        "breakpoint",
        "inverseToContainer",
        "maxWidth",
        "minWidth",
        "xstyle",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        root: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.ref,
        o = t.breakpoint,
        a = t.inverseToContainer,
        i = a === void 0 ? !1 : a,
        l = t.maxWidth,
        u = t.minWidth,
        m = t.xstyle,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c.jsx(
        "div",
        babelHelpers.extends({}, p, {
          className: (s || (s = r("stylex")))(d.root, m),
          ref: n,
          style: {
            maxWidth: l,
            minWidth: u,
            width: i
              ? "calc((" + o + "px - 100%) * 9999)"
              : "calc((100% - " + (o - 0.1) + "px) * 9999)",
          },
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
