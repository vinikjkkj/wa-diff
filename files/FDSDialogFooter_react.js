__d(
  "FDSDialogFooter.react",
  [
    "FDSDialogFooterContainer.react",
    "FDSDialogFooterSingleButtonItem.react",
    "FDSDialogMetaTextItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.expanding,
        a = e.primary,
        i = e.ref,
        l = e.size,
        u = e.testid,
        c = e.meta,
        d = e.metaPosition,
        m = d === void 0 ? "above" : d,
        p = c != null && m === "above",
        _ = c != null && m === "below",
        f;
      t[0] !== p || t[1] !== c || t[2] !== m
        ? ((f =
            p &&
            s.jsx(r("FDSDialogMetaTextItem.react"), {
              meta: c,
              metaPosition: m,
            })),
          (t[0] = p),
          (t[1] = c),
          (t[2] = m),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== n || t[5] !== a || t[6] !== l
        ? ((g = s.jsx(r("FDSDialogFooterSingleButtonItem.react"), {
            expanding: n,
            primary: a,
            size: l,
          })),
          (t[4] = n),
          (t[5] = a),
          (t[6] = l),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== _ || t[9] !== c || t[10] !== m
        ? ((h =
            _ &&
            s.jsx(r("FDSDialogMetaTextItem.react"), {
              meta: c,
              metaPosition: m,
            })),
          (t[8] = _),
          (t[9] = c),
          (t[10] = m),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== i || t[13] !== f || t[14] !== g || t[15] !== h || t[16] !== u
          ? ((y = s.jsxs(r("FDSDialogFooterContainer.react"), {
              ref: i,
              testid: void 0,
              children: [f, g, h],
            })),
            (t[12] = i),
            (t[13] = f),
            (t[14] = g),
            (t[15] = h),
            (t[16] = u),
            (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    l.default = u;
  },
  98,
);
