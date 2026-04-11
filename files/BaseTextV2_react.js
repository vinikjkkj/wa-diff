__d(
  "BaseTextV2.react",
  [
    "BaseHeading.react",
    "BaseTextContext",
    "BaseTextV2SpanWrapper.react",
    "BaseTextV2TooltipWrapper.react",
    "BaseTextV2Utils",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        auto: { hyphens: "xkjl1po", $$css: !0 },
        manual: { hyphens: "xxydokm", $$css: !0 },
      },
      c = {
        base: {
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          wordBreak: "x13faqbe",
          wordWrap: "x1vvkbs",
          $$css: !0,
        },
        block: { display: "x1lliihq", $$css: !0 },
        center: { textAlign: "x2b8uid", $$css: !0 },
        end: { textAlign: "xp4054r", $$css: !0 },
        heading: { maxWidth: "x193iq5w", minWidth: "xeuugli", $$css: !0 },
        inline: { display: "xt0psk2", $$css: !0 },
        linClampOneLine: {
          display: "x1lliihq",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        lineClamp: {
          WebkitBoxOrient: "x1ua5tub",
          display: "x104kibb",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        lineClampMultiLine: {
          display: "x1lliihq",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        lineClampRoot: {
          display: "x1lliihq",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          position: "x1n2onr6",
          $$css: !0,
        },
        numberOfLines: function (t) {
          return [
            { WebkitLineClamp: t != null ? "x1yhjpo9" : t, $$css: !0 },
            { "--x-WebkitLineClamp": t != null ? t : void 0 },
          ];
        },
        preserveNewLines: { whiteSpace: "x1fj9vlw", $$css: !0 },
        start: { textAlign: "x1yc453h", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.children,
        a = e.colorVariant,
        i = e.dir,
        l = e.fontMetrics,
        d = e.hyphens,
        m = e.id,
        p = e.isPrimaryHeading,
        _ = e.isSemanticHeading,
        f = e.maxLines,
        g = e.preserveNewLines,
        h = e.ref,
        y = e.suppressHydrationWarning,
        C = e.testid,
        b = e.textAlign,
        v = e.truncationTooltip,
        S = e.typeVariant,
        R = d === void 0 ? "none" : d,
        L = p === void 0 ? !1 : p,
        E = _ === void 0 ? !1 : _,
        k = f === void 0 ? 0 : f,
        I = g === void 0 ? !1 : g,
        T = b === void 0 ? "auto" : b,
        D = S.xstyleConfig.textType,
        x = a.xstyleConfig.textColor,
        $ = o("BaseTextContext").useBaseTextContext(),
        P = ($ == null ? void 0 : $.nested) === !0,
        N;
      t[0] !== l || t[1] !== S.fontSize || t[2] !== S.lineGap
        ? ((N = o("BaseTextV2Utils").precomputeValues({
            fontMetrics: l,
            fontSize: S.fontSize,
            lineGap: S.lineGap,
          })),
          (t[0] = l),
          (t[1] = S.fontSize),
          (t[2] = S.lineGap),
          (t[3] = N))
        : (N = t[3]);
      var M = N,
        w;
      t[4] !== n || t[5] !== k
        ? ((w =
            k === 0
              ? n
              : s.jsx(o("react-strict-dom").html.span, {
                  style: c.lineClampRoot,
                  children: s.jsx(o("react-strict-dom").html.span, {
                    style:
                      k === 1
                        ? c.linClampOneLine
                        : [
                            c.numberOfLines(k),
                            c.lineClampMultiLine,
                            c.lineClamp,
                          ],
                    children: n,
                  }),
                })),
          (t[4] = n),
          (t[5] = k),
          (t[6] = w))
        : (w = t[6]);
      var A = w,
        F;
      t[7] !== k || t[8] !== A || t[9] !== v
        ? ((F =
            v != null && k > 0
              ? s.jsx(r("BaseTextV2TooltipWrapper.react"), {
                  truncationTooltip: v,
                  children: A,
                })
              : A),
          (t[7] = k),
          (t[8] = A),
          (t[9] = v),
          (t[10] = F))
        : (F = t[10]);
      var O = F,
        B = P ? void 0 : i,
        W = T !== "auto" && c[T],
        q = !P && c.block,
        U = P && c.inline,
        V = R !== "none" && u[R],
        H = I && c.preserveNewLines,
        G;
      t[11] !== W ||
      t[12] !== q ||
      t[13] !== U ||
      t[14] !== V ||
      t[15] !== H ||
      t[16] !== x ||
      t[17] !== D
        ? ((G = [c.base, W, q, U, V, H, x, D]),
          (t[11] = W),
          (t[12] = q),
          (t[13] = U),
          (t[14] = V),
          (t[15] = H),
          (t[16] = x),
          (t[17] = D),
          (t[18] = G))
        : (G = t[18]);
      var z;
      t[19] !== M ||
      t[20] !== m ||
      t[21] !== P ||
      t[22] !== h ||
      t[23] !== y ||
      t[24] !== B ||
      t[25] !== G ||
      t[26] !== C ||
      t[27] !== O
        ? ((z = s.jsx(r("BaseTextV2SpanWrapper.react"), {
            computedValues: M,
            dir: B,
            id: m,
            nested: P,
            ref: h,
            suppressHydrationWarning: y,
            testid: void 0,
            xstyle: G,
            children: O,
          })),
          (t[19] = M),
          (t[20] = m),
          (t[21] = P),
          (t[22] = h),
          (t[23] = y),
          (t[24] = B),
          (t[25] = G),
          (t[26] = C),
          (t[27] = O),
          (t[28] = z))
        : (z = t[28]);
      var j = z,
        K;
      if (t[29] !== L || t[30] !== E || t[31] !== j) {
        var Q =
          E || L
            ? s.jsx(r("BaseHeading.react"), {
                isPrimaryHeading: L,
                xstyle: c.heading,
                children: j,
              })
            : j;
        ((K = s.jsx(o("BaseTextContext").BaseTextContextProvider, {
          nested: !0,
          children: Q,
        })),
          (t[29] = L),
          (t[30] = E),
          (t[31] = j),
          (t[32] = K));
      } else K = t[32];
      return K;
    }
    l.default = d;
  },
  98,
);
