__d(
  "WAWebTriangle.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = Math.sqrt(2),
      d = {
        arrow: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          backgroundColor: "xgcd1z6",
          borderTopColor: "xjgx3p0",
          borderInlineEndColor: "x1c7tatl",
          borderBottomColor: "xcigvqi",
          borderInlineStartColor: "xog9bda",
          borderTopWidth: "xiu3vjd",
          borderInlineEndWidth: "xjvssmw",
          borderBottomWidth: "x1y07hx1",
          borderInlineStartWidth: "xtln64n",
          borderTopStyle: "x1u71dlw",
          borderInlineEndStyle: "xmloefz",
          borderBottomStyle: "xr2j6r5",
          borderInlineStartStyle: "x1nqhel6",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          display: "x1lliihq",
          transformOrigin: "x1g0ag68",
          boxSizing: "x9f619",
          $$css: !0,
        },
        arrowUp: { transform: "x1dvvsi6", $$css: !0 },
        arrowDown: { transform: "x19gryod", $$css: !0 },
        arrowLeft: { transform: "x1koo3bh", $$css: !0 },
        arrowRight: { transform: "xz03xr6", $$css: !0 },
      };
    function m(t) {
      var n = t.borderRadius,
        o = n === void 0 ? "4px" : n,
        a = t.direction,
        i = a === void 0 ? "down" : a,
        l = t.width,
        s = t.xstyle,
        m =
          i === "up" || i === "down"
            ? { width: l + "px", height: l / 2 + "px" }
            : { height: l + "px", width: l / 2 + "px" },
        p;
      switch (i) {
        case "up":
          p = d.arrowUp;
          break;
        case "down":
          p = d.arrowDown;
          break;
        case "left":
          p = d.arrowLeft;
          break;
        case "right":
          p = d.arrowRight;
          break;
      }
      return u.jsx("div", {
        style: m,
        className: "x1n2onr6 x6ikm8r x10wlt62",
        children: u.jsx("div", {
          style: {
            width: l / c + "px",
            height: l / c + "px",
            borderBottomLeftRadius: o,
          },
          className: (e || (e = r("stylex")))(d.arrow, p, s),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
