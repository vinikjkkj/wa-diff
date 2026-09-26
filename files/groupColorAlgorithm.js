__d(
  "groupColorAlgorithm",
  ["FBLogger", "groupColorCandidates", "groupColorLAB", "groupColorRGB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { DARK: "DARK", LIGHT: "LIGHT" };
    function s() {
      return {
        accent: { chromaMax: 95, chromaMin: 40, lightMax: 55, lightMin: 30 },
        darkAccent: { lightMax: 50, lightMin: 35 },
        deemph: { chromaMax: 10, chromaMin: 10, light: 93 },
      };
    }
    function u(t) {
      var n = o("groupColorRGB").hexToRGBA(t);
      if (n == null) return null;
      var r = o("groupColorLAB").groupColorLABFromRGBA(n),
        a = s();
      (r.clampedLightness(a.accent.lightMin, a.accent.lightMax),
        r.clampedChroma(a.accent.chromaMin, a.accent.chromaMax));
      var i = o("groupColorLAB").groupColorLAB(r.lab),
        l = function (n) {
          switch (n) {
            case e.DARK: {
              var t = o("groupColorLAB").groupColorLAB(i.lab);
              t.clampedLightness(a.darkAccent.lightMin, a.darkAccent.lightMax);
              var l = t.toRGBa();
              return o("groupColorRGB").rgbToHex(l[0], l[1], l[2], !0);
            }
            default:
            case e.LIGHT: {
              var s = r.toRGBa();
              return o("groupColorRGB").rgbToHex(s[0], s[1], s[2], !0);
            }
          }
        },
        u = function (n) {
          switch (n) {
            case e.DARK: {
              var t = o("groupColorLAB").groupColorLAB(i.lab),
                l = t.toRGBa();
              return o("groupColorRGB").rgbaToHex(l[0], l[1], l[2], 77, !0);
            }
            default:
            case e.LIGHT: {
              var s = o("groupColorLAB").groupColorLAB(r.lab);
              (s.clampedChroma(a.deemph.chromaMin, a.deemph.chromaMax),
                s.withLightness(a.deemph.light));
              var u = s.toRGBa();
              return o("groupColorRGB").rgbToHex(u[0], u[1], u[2], !0);
            }
          }
        },
        c = function (n) {
          switch (n) {
            case e.DARK: {
              var t = o("groupColorLAB").groupColorLAB(i.lab);
              return t.lab.l < 70 ? "#ffffff" : "#000000";
            }
            default:
            case e.LIGHT:
              return r.lab.l < 70 ? "#ffffff" : "#000000";
          }
        },
        d = function (n) {
          switch (n) {
            case e.DARK: {
              var t = o("groupColorLAB").groupColorLAB(i.lab);
              t.withLightness(80);
              var a = t.toRGBa();
              return o("groupColorRGB").rgbToHex(a[0], a[1], a[2], !0);
            }
            default:
            case e.LIGHT: {
              var l = o("groupColorLAB").groupColorLAB(r.lab);
              l.withLightness(30);
              var s = l.toRGBa();
              return o("groupColorRGB").rgbToHex(s[0], s[1], s[2], !0);
            }
          }
        };
      return {
        accentColor: l,
        accentDeemphasizedColor: u,
        textOnAccentColor: c,
        textOnAccentDeemphasizedColor: d,
      };
    }
    function c(e) {
      var t = o("groupColorRGB").hexToRGBA(e);
      return t == null
        ? null
        : o("groupColorLAB").groupColorLABFromRGBA(t).lab.l < 70
          ? "#ffffff"
          : "#000000";
    }
    function d(e, t) {
      var n = o("groupColorRGB").hexToRGBA(e),
        r = o("groupColorRGB").hexToRGBA(t);
      if (n == null || r == null) return null;
      var a = o("groupColorLAB").groupColorLABFromRGBA(n).lab,
        i = o("groupColorLAB").groupColorLABFromRGBA(r).lab;
      return a[0] < i[0];
    }
    function m(e, t) {
      var n = e.l - t.l,
        r = e.a - t.a,
        o = e.b - t.b,
        a = Math.sqrt(Math.pow(e.a, 2) + Math.pow(e.b, 2)),
        i = Math.sqrt(Math.pow(t.a, 2) + Math.pow(t.b, 2)),
        l = a - i,
        s = Math.pow(r, 2) + Math.pow(o, 2) + Math.pow(l, 2);
      s = s > 0 ? Math.sqrt(s) : 0;
      var u = 1,
        c = 1 + 0.045 * a,
        d = 1 + 0.015 * a;
      return Math.sqrt(
        Math.pow(n / u, 2) + Math.pow(l / c, 2) + Math.pow(s / d, 2),
      );
    }
    function p(e) {
      var t = o("groupColorRGB").hexToRGBA(e);
      if (t == null) return null;
      var n = o("groupColorLAB").groupColorLABFromRGBA(t).lab;
      if (n == null) return null;
      var a = r("groupColorCandidates")(),
        i = { key: "", min: Number.MAX_SAFE_INTEGER },
        l = Object.keys(a).reduce(function (e, t) {
          var r = o("groupColorRGB").hexToRGBA(t);
          if (r == null) return e;
          var a = o("groupColorLAB").groupColorLABFromRGBA(r).lab,
            i = m(n, a);
          return (i < e.min && ((e.min = i), (e.key = t)), e);
        }, i);
      return a[l.key];
    }
    function _(e) {
      if (e != null && e.startsWith("#")) return e;
      switch (e) {
        case "@DECORATIVE_ICON_BLUE":
          return "var(--base-blue)";
        case "@DECORATIVE_ICON_RED":
          return "var(--base-cherry)";
        case "@DECORATIVE_ICON_YELLOW":
          return "var(--base-lemon)";
        case "@DECORATIVE_ICON_TEAL":
          return "teal";
        case "@DECORATIVE_ICON_PURPLE":
          return "var(--base-grape)";
        case "@SECONDARY_BUTTON_BACKGROUND":
          return "var(--secondary-button-background)";
        case "@DECORATIVE_ICON_PINK":
          return "var(--base-pink)";
        case "@DECORATIVE_ICON_GREEN":
          return "var(--positive)";
        default:
          return (
            r("FBLogger")("group_color").mustfix(
              "Unknown background color %s",
              e != null ? e : "null",
            ),
            "var(--base-cherry)"
          );
      }
    }
    ((l.COLOR_MODE = e),
      (l.groupColorAlgorithmTheme = u),
      (l.getCircleBorderColor = c),
      (l.isColorOneLighterThanColorTwo = d),
      (l.getColorStringFromHex = p),
      (l.getSkittleBackgroundColor = _));
  },
  98,
);
