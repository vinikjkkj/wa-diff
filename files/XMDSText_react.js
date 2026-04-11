__d(
  "XMDSText.react",
  [
    "BaseHeading.react",
    "BaseText.react",
    "CDSTextConfig",
    "JSResourceForInteraction",
    "XMDSTextStyleContext.react",
    "react",
    "react-compiler-runtime",
    "xplatToDOMRef",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("JSResourceForInteraction")("XMDSTooltipImpl.react").__setRef(
        "XMDSText.react",
      ),
      c = o("BaseText.react").createBaseTextComponent(r("CDSTextConfig"), u);
    function d(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.asBox,
        a = e.children,
        i = e.color,
        l = e.id,
        u = e.isPrimaryHeading,
        d = e.isSemanticHeading,
        m = e.maxLines,
        p = e.ref,
        _ = e.testid,
        f = e.textAlign,
        g = e.textStyle,
        h = e.truncationTooltip,
        y = e.xstyle,
        C = n === void 0 ? !1 : n,
        b = i === void 0 ? "primaryText" : i,
        v = u === void 0 ? !1 : u,
        S = d === void 0 ? !1 : d,
        R = f === void 0 ? "start" : f,
        L = g === void 0 ? "body" : g,
        E = C ? "div" : "span",
        k;
      t[0] !== p
        ? ((k = o("xplatToDOMRef").xplatToDOMRef(p)), (t[0] = p), (t[1] = k))
        : (k = t[1]);
      var I;
      t[2] !== a || t[3] !== L
        ? ((I = s.jsx(r("XMDSTextStyleContext.react").Provider, {
            value: L,
            children: a,
          })),
          (t[2] = a),
          (t[3] = L),
          (t[4] = I))
        : (I = t[4]);
      var T;
      t[5] !== b ||
      t[6] !== l ||
      t[7] !== m ||
      t[8] !== E ||
      t[9] !== k ||
      t[10] !== I ||
      t[11] !== _ ||
      t[12] !== R ||
      t[13] !== L ||
      t[14] !== h ||
      t[15] !== y
        ? ((T = s.jsx(c, {
            alignment: R,
            colorName: b,
            elementType: E,
            id: l,
            lines: m,
            ref: k,
            styleName: L,
            testid: void 0,
            truncationTooltip: h,
            xstyle: y,
            children: I,
          })),
          (t[5] = b),
          (t[6] = l),
          (t[7] = m),
          (t[8] = E),
          (t[9] = k),
          (t[10] = I),
          (t[11] = _),
          (t[12] = R),
          (t[13] = L),
          (t[14] = h),
          (t[15] = y),
          (t[16] = T))
        : (T = t[16]);
      var D = T;
      if (S || v) {
        var x;
        return (
          t[17] !== v || t[18] !== D
            ? ((x = s.jsx(r("BaseHeading.react"), {
                isPrimaryHeading: v,
                children: D,
              })),
              (t[17] = v),
              (t[18] = D),
              (t[19] = x))
            : (x = t[19]),
          x
        );
      }
      return D;
    }
    l.default = d;
  },
  98,
);
