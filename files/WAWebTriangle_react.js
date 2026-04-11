__d(
  "WAWebTriangle.react",
  ["react", "react-compiler-runtime", "stylex"],
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
      var n = o("react-compiler-runtime").c(17),
        a = t.borderRadius,
        i = t.direction,
        l = t.width,
        s = t.xstyle,
        m = a === void 0 ? "4px" : a,
        p = i === void 0 ? "down" : i,
        _;
      n[0] !== p || n[1] !== l
        ? ((_ =
            p === "up" || p === "down"
              ? { width: l + "px", height: l / 2 + "px" }
              : { height: l + "px", width: l / 2 + "px" }),
          (n[0] = p),
          (n[1] = l),
          (n[2] = _))
        : (_ = n[2]);
      var f = _,
        g;
      e: switch (p) {
        case "up": {
          g = d.arrowUp;
          break e;
        }
        case "down": {
          g = d.arrowDown;
          break e;
        }
        case "left": {
          g = d.arrowLeft;
          break e;
        }
        case "right":
          g = d.arrowRight;
      }
      var h;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = "x1n2onr6 x6ikm8r x10wlt62"), (n[3] = h))
        : (h = n[3]);
      var y = l / c + "px",
        C = l / c + "px",
        b;
      n[4] !== m || n[5] !== y || n[6] !== C
        ? ((b = { width: y, height: C, borderBottomLeftRadius: m }),
          (n[4] = m),
          (n[5] = y),
          (n[6] = C),
          (n[7] = b))
        : (b = n[7]);
      var v;
      n[8] !== g || n[9] !== s
        ? ((v = (e || (e = r("stylex")))(d.arrow, g, s)),
          (n[8] = g),
          (n[9] = s),
          (n[10] = v))
        : (v = n[10]);
      var S;
      n[11] !== b || n[12] !== v
        ? ((S = u.jsx("div", { style: b, className: v })),
          (n[11] = b),
          (n[12] = v),
          (n[13] = S))
        : (S = n[13]);
      var R;
      return (
        n[14] !== f || n[15] !== S
          ? ((R = u.jsx("div", { style: f, className: h, children: S })),
            (n[14] = f),
            (n[15] = S),
            (n[16] = R))
          : (R = n[16]),
        R
      );
    }
    l.default = m;
  },
  98,
);
