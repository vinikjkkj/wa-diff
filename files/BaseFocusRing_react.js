__d(
  "BaseFocusRing.react",
  ["FocusWithinHandler.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        focused: {
          boxShadow: "x18bame2",
          outline: "x1a2a7pz xvetz19",
          $$css: !0,
        },
        focusedInset: { boxShadow: "xpud6h4", $$css: !0 },
        unfocused: { outline: "x1a2a7pz", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        a = e.focusRingPosition,
        i = e.mode,
        l = e.onFocusVisibleChange,
        c = e.suppressFocusRing,
        d = e.testOnly,
        m = e.xstyle,
        p = a === void 0 ? "default" : a,
        _ = i === void 0 ? "focus-visible" : i,
        f = c === void 0 ? !1 : c,
        g;
      t[0] !== n ||
      t[1] !== p ||
      t[2] !== _ ||
      t[3] !== l ||
      t[4] !== f ||
      t[5] !== m
        ? ((g = function (t, r) {
            var e = !f && t && (r || _ === "focus");
            l == null || l(r);
            var o = [];
            return (
              e
                ? o.push(p === "inset" ? u.focusedInset : u.focused)
                : o.push(u.unfocused),
              n([].concat(o, [m]))
            );
          }),
          (t[0] = n),
          (t[1] = p),
          (t[2] = _),
          (t[3] = l),
          (t[4] = f),
          (t[5] = m),
          (t[6] = g))
        : (g = t[6]);
      var h;
      return (
        t[7] !== g || t[8] !== d
          ? ((h = s.jsx(r("FocusWithinHandler.react"), {
              testOnly: d,
              children: g,
            })),
            (t[7] = g),
            (t[8] = d),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    l.default = c;
  },
  98,
);
