__d(
  "XMDSTextPairing.react",
  [
    "CDSTextStyleNames",
    "FBLogger",
    "XMDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        bottomText: { marginTop: "xw7yly9", $$css: !0 },
        root: { display: "x78zum5", flexDirection: "xdt5ytf", $$css: !0 },
        topText: { marginBottom: "x1yztbdb", $$css: !0 },
      },
      m = {
        headline1Body: { marginTop: "x1sy10c2", $$css: !0 },
        headline1Meta: { marginTop: "xw7yly9", $$css: !0 },
        headline2Body: { marginTop: "x1sy10c2", $$css: !0 },
        headline3Body: { marginTop: "xw7yly9", $$css: !0 },
        headline3Meta: { marginTop: "x14vqqas", $$css: !0 },
        primaryLabelMeta: { marginTop: "x14vqqas", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(39),
        a = t.bottomText,
        i = t.contentColor,
        l = t.contentMaxLines,
        s = t.contentRef,
        c = t.contentTestid,
        p = t.contentText,
        _ = t.contentTruncationTooltip,
        f = t.headlineColor,
        g = t.headlineId,
        h = t.headlineMaxLines,
        y = t.headlineTestid,
        C = t.headlineText,
        b = t.headlineTruncationTooltip,
        v = t.isPrimaryHeading,
        S = t.isSemanticHeading,
        R = t.testid,
        L = t.textAlign,
        E = t.textPairingStyle,
        k = t.topText,
        I = t.topTextColor,
        T = t.xstyle,
        D = i === void 0 ? "primaryText" : i,
        x = f === void 0 ? "primaryText" : f,
        $ = S === void 0 ? !0 : S,
        P = L === void 0 ? "start" : L,
        N = I === void 0 ? "primaryText" : I,
        M;
      e: {
        if (
          k != null &&
          (E === "headline1Body" ||
            E === "headline2Body" ||
            E === "headline3Body" ||
            E === "headline3Meta")
        ) {
          var w = E === "headline3Body" ? "metaEmphasized" : "secondaryLabel",
            A;
          (n[0] !== w || n[1] !== P || n[2] !== k || n[3] !== N
            ? ((A = u.jsx(r("XMDSText.react"), {
                color: N,
                textAlign: P,
                textStyle: w,
                xstyle: d.topText,
                children: k,
              })),
              (n[0] = w),
              (n[1] = P),
              (n[2] = k),
              (n[3] = N),
              (n[4] = A))
            : (A = n[4]),
            (M = A));
          break e;
        } else if (k != null) {
          var F;
          (n[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = r("FBLogger")("comet_ui").mustfix(
                'Top text can only be passed in for "headline1Body", "headline2Body", "headline3Body" and "headline3Meta"',
              )),
              (n[5] = F))
            : (F = n[5]),
            (M = F));
          break e;
        }
        M = void 0;
      }
      var O = M,
        B;
      n[6] !== x ||
      n[7] !== g ||
      n[8] !== h ||
      n[9] !== y ||
      n[10] !== C ||
      n[11] !== b ||
      n[12] !== v ||
      n[13] !== $ ||
      n[14] !== P ||
      n[15] !== E
        ? ((B =
            C != null
              ? u.jsx(r("XMDSText.react"), {
                  color: x,
                  id: g,
                  isPrimaryHeading: v,
                  isSemanticHeading: $,
                  maxLines: h,
                  testid: void 0,
                  textAlign: P,
                  textStyle: o("CDSTextStyleNames").headlineTextStyleNames[E],
                  truncationTooltip: b,
                  children: C,
                })
              : null),
          (n[6] = x),
          (n[7] = g),
          (n[8] = h),
          (n[9] = y),
          (n[10] = C),
          (n[11] = b),
          (n[12] = v),
          (n[13] = $),
          (n[14] = P),
          (n[15] = E),
          (n[16] = B))
        : (B = n[16]);
      var W = B,
        q;
      n[17] !== D ||
      n[18] !== l ||
      n[19] !== s ||
      n[20] !== c ||
      n[21] !== p ||
      n[22] !== _ ||
      n[23] !== W ||
      n[24] !== P ||
      n[25] !== E
        ? ((q =
            p != null
              ? u.jsx(r("XMDSText.react"), {
                  color: D,
                  maxLines: l,
                  ref: s,
                  testid: void 0,
                  textAlign: P,
                  textStyle: o("CDSTextStyleNames").contentTextStyleNames[E],
                  truncationTooltip: _,
                  xstyle: W != null && m[E],
                  children: p,
                })
              : null),
          (n[17] = D),
          (n[18] = l),
          (n[19] = s),
          (n[20] = c),
          (n[21] = p),
          (n[22] = _),
          (n[23] = W),
          (n[24] = P),
          (n[25] = E),
          (n[26] = q))
        : (q = n[26]);
      var U = q,
        V;
      n[27] !== a || n[28] !== E
        ? ((V =
            a != null && E === "headline3Body"
              ? u.jsx(r("XMDSText.react"), {
                  textStyle: "meta",
                  xstyle: d.bottomText,
                  children: a,
                })
              : a != null
                ? r("FBLogger")("comet_ui").mustfix(
                    'Bottom text can only be passed in for "headline3Body"',
                  )
                : null),
          (n[27] = a),
          (n[28] = E),
          (n[29] = V))
        : (V = n[29]);
      var H = V,
        G;
      n[30] !== T
        ? ((G = (e || (e = r("stylex"))).props(d.root, T)),
          (n[30] = T),
          (n[31] = G))
        : (G = n[31]);
      var z;
      return (
        n[32] !== H ||
        n[33] !== U ||
        n[34] !== W ||
        n[35] !== G ||
        n[36] !== R ||
        n[37] !== O
          ? ((z = u.jsxs(
              "div",
              babelHelpers.extends({}, G, {
                "data-testid": void 0,
                children: [O, W, U, H],
              }),
            )),
            (n[32] = H),
            (n[33] = U),
            (n[34] = W),
            (n[35] = G),
            (n[36] = R),
            (n[37] = O),
            (n[38] = z))
          : (z = n[38]),
        z
      );
    }
    l.default = p;
  },
  98,
);
