__d(
  "useWebBloksCollectionScrollingElementStyle",
  [
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.background_themed_color,
        r = e.direction,
        a = e.fading_edge_length,
        i = e.is_scroll_enabled,
        l = e.shows_scroll_indicator,
        s = e.snap,
        u = o("WebBloksTheme").useTheme(),
        p;
      t[0] !== u ? ((p = u.getTheme()), (t[0] = u), (t[1] = p)) : (p = t[1]);
      var _ = p,
        f = r === "column",
        g;
      if (
        t[2] !== n ||
        t[3] !== a ||
        t[4] !== f ||
        t[5] !== i ||
        t[6] !== l ||
        t[7] !== s ||
        t[8] !== _
      ) {
        var h = [],
          y;
        t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = {}), (t[10] = y))
          : (y = t[10]);
        var C = y;
        if (
          (s == null || s === "none"
            ? h.push(d.none)
            : f
              ? h.push(d.y)
              : h.push(d.x),
          i === !1 ? h.push(c.none) : f ? h.push(c.y) : h.push(c.x),
          a != null)
        ) {
          var b;
          t[11] !== a
            ? ((b = o("WebBloksUtils").toPx(a)), (t[11] = a), (t[12] = b))
            : (b = t[12]);
          var v;
          t[13] !== a
            ? ((v = o("WebBloksUtils").toPx(a)), (t[13] = a), (t[14] = v))
            : (v = t[14]);
          var S =
              "linear-gradient(\n        to " +
              (f ? "bottom" : "right") +
              ",\n        transparent 0,\n        black " +
              b +
              ",\n        black calc(100% - " +
              v +
              "),\n        transparent\n      )",
            R;
          (t[15] !== S
            ? ((R = babelHelpers.extends({}, C, {
                maskImage: S,
                WebkitMaskImage: S,
              })),
              (t[15] = S),
              (t[16] = R))
            : (R = t[16]),
            (C = R));
        }
        if (!f) {
          var L;
          (t[17] !== C
            ? ((L = babelHelpers.extends({}, C, { whiteSpace: "nowrap" })),
              (t[17] = C),
              (t[18] = L))
            : (L = t[18]),
            (C = L));
        }
        if (n) {
          var E = C,
            k;
          t[19] !== n || t[20] !== _
            ? ((k = o("WebBloksUtils").getRGBColorWithTheme(n, _)),
              (t[19] = n),
              (t[20] = _),
              (t[21] = k))
            : (k = t[21]);
          var I;
          (t[22] !== C || t[23] !== k
            ? ((I = babelHelpers.extends({}, E, { backgroundColor: k })),
              (t[22] = C),
              (t[23] = k),
              (t[24] = I))
            : (I = t[24]),
            (C = I));
        }
        (l === !1 && h.push(m.noScrollbar),
          (g = { scrollingElementStyle: C, scrollingElementClassNames: h }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = f),
          (t[5] = i),
          (t[6] = l),
          (t[7] = s),
          (t[8] = _),
          (t[9] = g));
      } else g = t[9];
      return g;
    }
    var c = o("WebBloksStyle").createStyles({
        none: { overflowY: "hidden", overflowX: "hidden" },
        y: { overflowY: "auto", overflowX: "hidden" },
        x: { overflowY: "hidden", overflowX: "auto" },
      }),
      d = o("WebBloksStyle").createStyles({
        none: { scrollSnapType: "none" },
        y: { scrollSnapType: "y mandatory" },
        x: { scrollSnapType: "x mandatory" },
      }),
      m = o("WebBloksStyle").createStyles({
        noScrollbar: function (t) {
          var e;
          return (
            (e = {}),
            (e[t] = { scrollbarWidth: "none" }),
            (e[t + "::-webkit-scrollbar"] = { display: "none" }),
            e
          );
        },
      });
    l.default = u;
  },
  98,
);
