__d(
  "CometLinkUtils.react",
  ["CometTextTypography"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        blueLink: { color: "x1fey0fg", $$css: !0 },
        disabled: { color: "x1dntmbh", $$css: !0 },
        highlight: { color: "x1qq9wsj", $$css: !0 },
        inheritColor: { color: "x1heor9g", $$css: !0 },
        linkOnMedia: { color: "x9kptjx", $$css: !0 },
        negative: { color: "x1a1m0xk", $$css: !0 },
        positive: { color: "x6u5lvz", $$css: !0 },
        primary: { color: "xzsf02u", $$css: !0 },
        secondary: { color: "xi81zsa", $$css: !0 },
        tertiary: { color: "x12scifz", $$css: !0 },
        white: { color: "x14ctfv", $$css: !0 },
      },
      s = {
        bold: { fontWeight: "x1xlr1w8", $$css: !0 },
        inheritFontWeight: { fontWeight: "x1pd3egz", $$css: !0 },
        medium: { fontWeight: "xk50ysn", $$css: !0 },
        normal: { fontWeight: "xo1l8bm", $$css: !0 },
        semibold: { fontWeight: "x1s688f", $$css: !0 },
      };
    function u(t, n, r) {
      var o = t != null ? t : n != null ? f(n, r) : "inherit";
      return o !== "inherit" && e[o];
    }
    function c(t, n) {
      var r = g(n),
        o = h(t);
      return r || o ? e.inheritColor : e.blueLink;
    }
    function d(e, t, n) {
      var r = e != null ? e : t != null ? p(t, n) : "inherit";
      return r !== "inherit" && s[r];
    }
    function m(e) {
      var t = g(e);
      return t ? s.inheritFontWeight : s.semibold;
    }
    function p(e, t) {
      if (!t) {
        var n = _(e);
        return r("CometTextTypography")[n].fontWeight;
      }
      return "inherit";
    }
    function _(e) {
      switch (e) {
        case "headline3":
          return "headlineEmphasized3";
        case "headline4":
          return "headlineEmphasized4";
        case "body1":
          return "bodyLink1";
        case "body2":
          return "bodyLink2";
        case "body3":
          return "bodyLink3";
        case "body4":
          return "bodyLink4";
        default:
          return e;
      }
    }
    function f(e, t) {
      switch (e) {
        case "headline3":
        case "headline4":
        case "body1":
        case "body2":
        case "body3":
        case "body4":
          return t ? "blueLink" : "primary";
        case "meta1":
        case "meta2":
        case "meta3":
        case "meta4":
          return t ? "blueLink" : "inherit";
        default:
          return "inherit";
      }
    }
    function g(e) {
      return (
        e != null &&
        (e === "headlineDeemphasized3" ||
          e === "headlineDeemphasized4" ||
          e === "headlineEmphasized1" ||
          e === "headlineEmphasized2" ||
          e === "headlineEmphasized3" ||
          e === "headlineEmphasized4" ||
          e === "headline3" ||
          e === "headline4" ||
          e === "entityHeaderHeadline1" ||
          e === "entityHeaderHeadline2")
      );
    }
    function h(e) {
      return e != null && (e === "negative" || e === "positive");
    }
    ((l.getLinkColorStyle = u),
      (l.getLinkColorStyle__new = c),
      (l.getLinkWeightStyle = d),
      (l.getLinkWeightStyle__new = m));
  },
  98,
);
