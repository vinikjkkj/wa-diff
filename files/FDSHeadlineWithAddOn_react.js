__d(
  "FDSHeadlineWithAddOn.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "FDSText.react",
    "Locale",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["headlineRef", "ref"],
      s,
      u = s || (s = o("react")),
      c = {
        addOn: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          marginInlineStart: "x13fj5qh",
          $$css: !0,
        },
        nonBreakingSpace: {
          visibility: "xlshs6z",
          width: "xnalus7",
          $$css: !0,
        },
      },
      d = {
        ltr: { direction: "xzt5al7", $$css: !0 },
        rtl: { direction: "xzyj77d", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(24),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.headlineRef),
          (l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s = i,
        m = s.addOn,
        p = s.children,
        _ = s.color,
        f = s.id,
        g = s.isPrimaryHeading,
        h = s.isSemanticHeading,
        y = s.numberOfLines,
        C = s.truncationTooltip,
        b = s.type,
        v = b,
        S = b,
        R;
      n[4] !== p ||
      n[5] !== _ ||
      n[6] !== a ||
      n[7] !== f ||
      n[8] !== g ||
      n[9] !== h ||
      n[10] !== y ||
      n[11] !== S ||
      n[12] !== C
        ? ((R = u.jsx(r("BaseRowItem.react"), {
            expanding: !0,
            children: u.jsx(r("FDSText.react"), {
              color: _,
              id: f,
              isPrimaryHeading: g,
              isSemanticHeading: h,
              numberOfLines: y,
              ref: a,
              truncationTooltip: C,
              type: S,
              children: p,
            }),
          })),
          (n[4] = p),
          (n[5] = _),
          (n[6] = a),
          (n[7] = f),
          (n[8] = g),
          (n[9] = h),
          (n[10] = y),
          (n[11] = S),
          (n[12] = C),
          (n[13] = R))
        : (R = n[13]);
      var L;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(r("BaseRowItem.react"), {
            xstyle: c.nonBreakingSpace,
            children: "\xA0",
          })),
          (n[14] = L))
        : (L = n[14]);
      var E;
      n[15] !== m
        ? ((E = u.jsx(r("BaseRowItem.react"), {
            verticalAlign: "top",
            xstyle: c.addOn,
            children: u.jsxs(r("BaseRow.react"), {
              verticalAlign: "center",
              children: [
                L,
                u.jsx(r("BaseRowItem.react"), {
                  children: u.jsx(r("BaseRow.react"), { children: m }),
                }),
              ],
            }),
          })),
          (n[15] = m),
          (n[16] = E))
        : (E = n[16]);
      var k;
      n[17] !== R || n[18] !== E
        ? ((k = u.jsxs(r("BaseRow.react"), {
            verticalAlign: "center",
            xstyle: d[o("Locale").isRTL() ? "rtl" : "ltr"],
            children: [R, E],
          })),
          (n[17] = R),
          (n[18] = E),
          (n[19] = k))
        : (k = n[19]);
      var I;
      return (
        n[20] !== l || n[21] !== v || n[22] !== k
          ? ((I = u.jsx(r("FDSText.react"), {
              isSemanticHeading: !1,
              ref: l,
              type: v,
              children: k,
            })),
            (n[20] = l),
            (n[21] = v),
            (n[22] = k),
            (n[23] = I))
          : (I = n[23]),
        I
      );
    }
    l.default = m;
  },
  98,
);
