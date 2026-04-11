__d(
  "WDSIconWdsIcPipExitTopRightToBottomLeft.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-pip-exit-top-right-to-bottom-left";
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
                  d: "M4 4q-.82 0-1.41.59Q1.99 5.18 2 6v6q0 .42.29.71.29.3.71.29.42 0 .71-.29.3-.29.29-.71V6h16v12h-8q-.42 0-.71.29-.3.29-.29.71 0 .42.29.71.29.3.71.29h8q.83 0 1.41-.59.6-.59.59-1.41V6q0-.82-.59-1.41-.59-.6-1.41-.59zm10 6.57 2.38-2.37a.96.96 0 0 1 1.4 0q.3.3.3.71 0 .42-.3.71L15.4 12H17q.42 0 .71.29.3.29.29.71 0 .42-.29.71-.29.3-.71.29h-4a1 1 0 0 1-.71-.29A1 1 0 0 1 12 13V9q0-.42.29-.71.29-.3.71-.29.42 0 .71.29.3.29.29.71zM3 15q-.42 0-.71.29-.3.29-.29.71v3q0 .42.29.71.29.3.71.29h5q.42 0 .71-.29.3-.29.29-.71v-3q0-.42-.29-.71A1 1 0 0 0 8 15z",
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
