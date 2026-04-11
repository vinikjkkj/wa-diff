__d(
  "useWebBloksCollectionGridAspectRatioProps",
  [
    "WebBloksCollectionChildSizesLayoutReady",
    "WebBloksCollectionHelpers",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ =
        (e =
          (s = window.CSS) == null || s.supports == null
            ? void 0
            : s.supports("width", "100cqw")) != null
          ? e
          : !1;
    function f(e, t, n) {
      var r = o("react-compiler-runtime").c(24),
        a,
        i;
      if (r[0] !== t) {
        var l = t.getValues();
        ((a = l.direction),
          (i = o("WebBloksCollectionHelpers").getDirectionPropNames(a)),
          (r[0] = t),
          (r[1] = a),
          (r[2] = i));
      } else ((a = r[1]), (i = r[2]));
      var s = i,
        u = s.crossAxisSize,
        c = s.mainAxisSize,
        m;
      e: {
        var f = e.cell_aspect_ratio;
        if (f == null) {
          m = null;
          break e;
        }
        if (a === "column") {
          m = "1 / " + f;
          break e;
        }
        m = " " + f + " / 1";
      }
      var g = m,
        h = p(null),
        y = h[0],
        C = h[1],
        b;
      r[3] !== g ||
      r[4] !== u ||
      r[5] !== e.cell_aspect_ratio ||
      r[6] !== e.span_count ||
      r[7] !== n
        ? ((b = function () {
            var t, r, o;
            if (!_ && g != null) {
              var a =
                parseInt(
                  (t = n.current) == null
                    ? void 0
                    : t.getBoundingClientRect()[u],
                  10,
                ) / ((r = e.span_count) != null ? r : 1);
              C(a * ((o = e.cell_aspect_ratio) != null ? o : 1));
            }
          }),
          (r[3] = g),
          (r[4] = u),
          (r[5] = e.cell_aspect_ratio),
          (r[6] = e.span_count),
          (r[7] = n),
          (r[8] = b))
        : (b = r[8]);
      var v;
      (r[9] !== g ||
      r[10] !== u ||
      r[11] !== e.cell_aspect_ratio ||
      r[12] !== e.span_count ||
      r[13] !== c ||
      r[14] !== n
        ? ((v = [g, u, e.cell_aspect_ratio, e.span_count, c, n]),
          (r[9] = g),
          (r[10] = u),
          (r[11] = e.cell_aspect_ratio),
          (r[12] = e.span_count),
          (r[13] = c),
          (r[14] = n),
          (r[15] = v))
        : (v = r[15]),
        d(b, v));
      var S;
      if (
        (r[16] !== y || r[17] !== n
          ? ((S = function () {
              if (y != null) {
                var e;
                (e = n.current) == null ||
                  e.dispatchEvent(
                    o("WebBloksCollectionChildSizesLayoutReady")
                      .LAYOUT_READY_EVENT,
                  );
              }
            }),
            (r[16] = y),
            (r[17] = n),
            (r[18] = S))
          : (S = r[18]),
        d(S, void 0),
        g == null)
      ) {
        var R;
        return (
          r[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = {}), (r[19] = R))
            : (R = r[19]),
          R
        );
      }
      var L = y != null ? void 0 : g,
        E = c,
        k;
      if (r[20] !== y || r[21] !== L || r[22] !== E) {
        var I;
        ((k = ((I = { aspectRatio: L }), (I[E] = y), I)),
          (r[20] = y),
          (r[21] = L),
          (r[22] = E),
          (r[23] = k));
      } else k = r[23];
      return k;
    }
    l.default = f;
  },
  98,
);
