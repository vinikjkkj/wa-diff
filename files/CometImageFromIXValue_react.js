__d(
  "CometImageFromIXValue.react",
  [
    "BaseImage.react",
    "CometSSRBackgroundImageUtils",
    "CometVisualCompletionAttributes",
    "RecoverableViolationWithComponentStack.react",
    "coerceImageishSprited",
    "coerceImageishURL",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID",
    "xplatToDOMRef",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(27),
        a = t.alt,
        i = t.isDecorative,
        l = t.objectFit,
        s = t.ref,
        c = t.source,
        d = t.testid,
        m = t.xstyle,
        p = a === void 0 ? "" : a;
      o("CometSSRBackgroundImageUtils").processSpritedImagesForSSRPreload(c);
      var _;
      n[0] !== c
        ? ((_ = r("coerceImageishSprited")(c)), (n[0] = c), (n[1] = _))
        : (_ = n[1]);
      var f = _;
      if (f != null) {
        var g = (e || (e = r("stylex")))(m),
          h;
        n[2] !== d
          ? ((h = r("testID")(d)), (n[2] = d), (n[3] = h))
          : (h = n[3]);
        var y = p === "" ? null : String(p),
          C =
            f.type === "css"
              ? g !== ""
                ? f.className + " " + g
                : f.className
              : g,
          b = p === "" ? null : "img",
          v = f.type === "cssless" ? f.style : void 0,
          S;
        return (
          n[4] !== i ||
          n[5] !== s ||
          n[6] !== h ||
          n[7] !== y ||
          n[8] !== C ||
          n[9] !== b ||
          n[10] !== v
            ? ((S = u.jsx(
                "i",
                babelHelpers.extends(
                  {},
                  r("CometVisualCompletionAttributes").CSS_IMG,
                  h,
                  {
                    "aria-hidden": i,
                    "aria-label": y,
                    className: C,
                    ref: s,
                    role: b,
                    style: v,
                  },
                ),
              )),
              (n[4] = i),
              (n[5] = s),
              (n[6] = h),
              (n[7] = y),
              (n[8] = C),
              (n[9] = b),
              (n[10] = v),
              (n[11] = S))
            : (S = n[11]),
          S
        );
      }
      var R;
      n[12] !== c
        ? ((R = r("coerceImageishURL")(c)), (n[12] = c), (n[13] = R))
        : (R = n[13]);
      var L = R;
      if (L != null) {
        var E = L.height,
          k = L.uri,
          I = L.width,
          T = l === "cover" ? "100%" : E,
          D;
        n[14] !== s
          ? ((D = o("xplatToDOMRef").xplatToDOMRef(s)),
            (n[14] = s),
            (n[15] = D))
          : (D = n[15]);
        var x = l === "cover" ? "100%" : I,
          $;
        return (
          n[16] !== p ||
          n[17] !== i ||
          n[18] !== l ||
          n[19] !== T ||
          n[20] !== D ||
          n[21] !== x ||
          n[22] !== d ||
          n[23] !== k ||
          n[24] !== m
            ? (($ = u.jsx(r("BaseImage.react"), {
                alt: p,
                draggable: !1,
                height: T,
                isDecorative: i,
                objectFit: l,
                ref: D,
                src: k,
                testid: void 0,
                width: x,
                xstyle: m,
              })),
              (n[16] = p),
              (n[17] = i),
              (n[18] = l),
              (n[19] = T),
              (n[20] = D),
              (n[21] = x),
              (n[22] = d),
              (n[23] = k),
              (n[24] = m),
              (n[25] = $))
            : ($ = n[25]),
          $
        );
      }
      var P;
      return (
        n[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = u.jsx(r("RecoverableViolationWithComponentStack.react"), {
              errorMessage:
                "asset provided to CometImageFromIXValue cannot be transformed by Haste",
              projectName: "comet_ui",
            })),
            (n[26] = P))
          : (P = n[26]),
        P
      );
    }
    l.default = c;
  },
  98,
);
