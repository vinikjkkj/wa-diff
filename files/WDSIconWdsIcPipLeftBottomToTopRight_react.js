__d(
  "WDSIconWdsIcPipLeftBottomToTopRight.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-pip-left-bottom-to-top-right";
    function m(t) {
      var n = t.height,
        o = t.iconXstyle,
        a = t.viewBox,
        i = t.width,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u;
      if (a) {
        var m = a.height,
          p = m === void 0 ? 0 : m,
          _ = a.width,
          f = _ === void 0 ? 0 : _,
          g = a.x,
          h = g === void 0 ? 0 : g,
          y = a.y,
          C = y === void 0 ? 0 : y;
        u = [h, C, f, p].join(" ");
      }
      var b = 24,
        v = 24;
      return (
        (n != null || i != null) && ((b = n), (v = i)),
        c.jsx(
          r("WDSSvgComponentBase.react"),
          babelHelpers.extends({}, l, {
            children: c.jsxs("svg", {
              viewBox: u != null ? u : "0 0 24 24",
              height: b,
              width: v,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(o),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M3.15 13.07q-.42 0-.71.29-.3.29-.29.7 0 .44.29.72.29.3.71.29h2.6l-3.6 3.57q-.3.3-.3.72 0 .4.3.7t.71.3q.42 0 .71-.3l3.58-3.6v2.6q0 .44.29.72.29.3.71.29.42 0 .71-.29.3-.3.29-.71v-5q0-.42-.29-.71a1 1 0 0 0-.71-.3zm1-9q-.82 0-1.41.59-.6.59-.59 1.4v4q0 .44.29.72.29.3.71.29.42 0 .71-.29.3-.3.29-.71v-4h7q.42 0 .71-.29.3-.3.29-.71 0-.42-.29-.71a1 1 0 0 0-.71-.3zm16.29 7.29q-.3.29-.29.7v6h-8q-.42 0-.71.3-.3.29-.29.7 0 .44.29.72.29.3.71.29h8q.82 0 1.41-.59.6-.59.59-1.41v-6q0-.42-.29-.71a1 1 0 0 0-.71-.3q-.42 0-.71.3m-5.29-7.3q-.42 0-.71.3-.3.29-.29.7v3q0 .44.29.72.29.3.71.29h6q.42 0 .71-.29.3-.3.29-.71v-3q0-.42-.29-.71a1 1 0 0 0-.71-.3z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
