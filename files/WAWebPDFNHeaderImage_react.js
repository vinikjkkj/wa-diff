__d(
  "WAWebPDFNHeaderImage.react",
  [
    "WAWebPDFNAnimation.react",
    "WAWebPDFNSanitizedSvg.react",
    "WAWebPDFNUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        topIcon: { display: "x78zum5", justifyContent: "xl56j7k", $$css: !0 },
        pngHeader: { height: "x1b51vyi", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(19),
        a = t.content,
        i = t.xstyle,
        l = a.icon,
        s = a.iconDescription,
        d = a.iconSvg,
        p = o("WAWebPDFNUtils").usePDFNThemedIcon(d);
      if ((l == null ? void 0 : l.type) === "lottie") {
        var _;
        return (
          n[0] !== l
            ? ((_ = u.jsx(r("WAWebPDFNAnimation.react"), { icon: l })),
              (n[0] = l),
              (n[1] = _))
            : (_ = n[1]),
          _
        );
      }
      var f, g, h, y, C;
      if (n[2] !== s || n[3] !== d || n[4] !== p || n[5] !== i) {
        g = m(p);
        var b = [
          c.topIcon,
          o("WAWebUISpacing").uiPadding.allAuto,
          g && c.pngHeader,
          i,
        ];
        ((f = r("WAWebPDFNSanitizedSvg.react")),
          (h = d),
          (y = s),
          (C = (e || (e = r("stylex")))(b)),
          (n[2] = s),
          (n[3] = d),
          (n[4] = p),
          (n[5] = i),
          (n[6] = f),
          (n[7] = g),
          (n[8] = h),
          (n[9] = y),
          (n[10] = C));
      } else ((f = n[6]), (g = n[7]), (h = n[8]), (y = n[9]), (C = n[10]));
      var v;
      n[11] !== f || n[12] !== h || n[13] !== y || n[14] !== C
        ? ((v = u.jsx(f, { iconSvg: h, ariaLabel: y, classNames: C })),
          (n[11] = f),
          (n[12] = h),
          (n[13] = y),
          (n[14] = C),
          (n[15] = v))
        : (v = n[15]);
      var S = v;
      if (g) {
        var R;
        n[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = { className: "x78zum5 xl56j7k" }), (n[16] = R))
          : (R = n[16]);
        var L;
        return (
          n[17] !== S
            ? ((L = u.jsx("div", babelHelpers.extends({}, R, { children: S }))),
              (n[17] = S),
              (n[18] = L))
            : (L = n[18]),
          L
        );
      }
      return S;
    }
    var m = function (t) {
      return t == null ? !1 : t.startsWith("data:image/png");
    };
    l.default = d;
  },
  98,
);
