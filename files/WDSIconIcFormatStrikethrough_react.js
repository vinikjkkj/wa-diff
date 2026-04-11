__d(
  "WDSIconIcFormatStrikethrough.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-format-strikethrough";
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
              viewBox: u != null ? u : "0 -960 960 960",
              height: b,
              width: v,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(o),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: d }),
                c.jsx("path", {
                  d: "M486-160q-63 0-116.5-33.5T285-283q-9-16-2.5-33.5T306-343q18-10 37.5-3.5T374-322q18 30 48.5 48t65.5 18q44 0 76.5-27t32.5-69q0-20 14-34t34-14q20 0 34.5 14t14.5 34v12q0 79-62.5 129.5T486-160ZM120-480q-17 0-28.5-11.5T80-520q0-17 11.5-28.5T120-560h720q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480H120Zm208-165q-17-10-23-29.5t4-36.5q25-47 72-71t101-24q48 0 90.5 20t71.5 58q11 14 7 32t-19 29q-17 12-36.5 9T562-677q-15-17-35-25t-43-8q-27 0-52 11t-38 34q-10 18-29.5 24t-36.5-4Z",
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
