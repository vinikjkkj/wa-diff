__d(
  "IGDSTextConfig",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        black: { color: "x175jnsf", $$css: !0 },
        button: { color: "x1iiplp5", $$css: !0 },
        green: { color: "x127hrn9", $$css: !0 },
        light: { color: "xb88cxz", $$css: !0 },
        link: { color: "x1rpgw6r", $$css: !0 },
        onMedia: { color: "x1g9anri", $$css: !0 },
        orange: { color: "x1q64x2m", $$css: !0 },
        primary: { color: "x5n08af", $$css: !0 },
        primaryButtonText: { color: "x175jnsf", $$css: !0 },
        red: { color: "xkmlbd1", $$css: !0 },
        secondary: { color: "x1roi4f4", $$css: !0 },
        secondaryWhiteText: { color: "x1junm5a", $$css: !0 },
        white: { color: "x9bdzbf", $$css: !0 },
      },
      s = 300,
      u = 400,
      c = 500,
      d = 600,
      m = 700,
      p = 800,
      _ = 12,
      f = 16,
      g = 18,
      h = 20,
      y = 25,
      C = 30,
      b = 36,
      v = { default: { fontWeight: "x1iikomf", $$css: !0 } },
      S = { default: { fontWeight: "xk50ysn", $$css: !0 } },
      R = { default: { fontWeight: "xo1l8bm", $$css: !0 } },
      L = { default: { fontWeight: "x1s688f", $$css: !0 } },
      E = { default: { fontWeight: "x1xlr1w8", $$css: !0 } },
      k = { default: { fontWeight: "xuv8nkb", $$css: !0 } },
      I = {
        body: { fontSize: "xvs91rp", $$css: !0 },
        body2: { fontSize: "x1fhwpqd", $$css: !0 },
        footnote: { fontSize: "x1fhwpqd", $$css: !0 },
        headline1: { fontSize: "xggs18q", $$css: !0 },
        headline2: { fontSize: "x133cpev", $$css: !0 },
        headline3: { fontSize: "x1ms8i2q", $$css: !0 },
        label: { fontSize: "xl565be", $$css: !0 },
        miniscule: { fontSize: "x1yxbuor", $$css: !0 },
        title: { fontSize: "x1ms8i2q", $$css: !0 },
      },
      T = function () {
        return [0, 0];
      },
      D = function (t) {
        switch (t) {
          case "miniscule":
            return [2, 3];
          case "footnote":
            return [2, 3];
          case "body":
            return [3, 4];
          case "body2":
            return [2, 3];
          case "label":
            return [3, 4];
          case "title":
            return [4, 6];
          case "headline2":
            return [4, 5];
          case "headline1":
            return [5, 6];
          case "headline3":
            return [4, 6];
        }
      },
      x = {
        default: { fontFamily: "x1i0vuye", $$css: !0 },
        prism: { fontFamily: "xqfltyo", $$css: !0 },
      };
    function $(t, n, r) {
      (t === void 0 && (t = "normal"),
        n === void 0 && (n = !1),
        r === void 0 && (r = !1));
      var o = R;
      switch (t) {
        case "light":
          o = v;
          break;
        case "medium":
          o = S;
          break;
        case "semibold":
          o = L;
          break;
        case "bold":
          o = E;
          break;
        case "heavy":
          o = k;
          break;
        case "emphasized":
          o = L;
          break;
      }
      var a = n ? T : D,
        i = r === !0,
        l = e;
      return {
        colors: {
          DEPRECATEDGreen: l.green,
          errorOrDestructive: l.red,
          gradientOrange: l.orange,
          link: l.link,
          primaryButton: l.button,
          primaryButtonText: l.primaryButtonText,
          primaryText: l.primary,
          secondaryText: l.secondary,
          secondaryTextOnMedia: l.secondary,
          secondaryWhiteText: l.secondaryWhiteText,
          tertiaryText: l.light,
          textOnMedia: l.onMedia,
          webAlwaysBlack: l.black,
          webAlwaysWhite: l.white,
        },
        defaultFontFamily: i ? x.prism : x.default,
        offsets: a,
        styles: {
          body: { lineHeight: g, style: [I.body, o.default] },
          body2: { lineHeight: f, style: [I.body2, o.default] },
          footnote: { lineHeight: f, style: [I.footnote, o.default] },
          headline1: { lineHeight: b, style: [I.headline1, o.default] },
          headline2: { lineHeight: C, style: [I.headline2, o.default] },
          headline3: { lineHeight: C, style: [I.headline3, o.default] },
          label: { lineHeight: h, style: [I.label, o.default] },
          miniscule: { lineHeight: _, style: [I.miniscule, o.default] },
          title: { lineHeight: y, style: [I.title, o.default] },
        },
      };
    }
    l.createIGDSTextConfig = $;
  },
  98,
);
