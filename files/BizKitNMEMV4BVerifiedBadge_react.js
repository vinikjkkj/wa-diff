__d(
  "BizKitNMEMV4BVerifiedBadge.react",
  ["ix", "Image.react", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        image: {
          alignSelf: "xamitd3",
          display: "x3nfvp2",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
      },
      m = {
        large: s("1630250"),
        medium: s("1630248"),
        small: s("1630246"),
        whatsAppLarge: s("392861"),
        whatsAppSmall: s("392856"),
        whatsAppXsmall: s("392854"),
        xsmall: s("206424"),
      },
      p = {
        large: s("1748244"),
        medium: s("1748238"),
        small: s("1748232"),
        whatsAppLarge: s("1748244"),
        whatsAppSmall: s("1748232"),
        whatsAppXsmall: s("206426"),
        xsmall: s("206426"),
      };
    function _(e, t) {
      switch (e) {
        case "verified":
          switch (t) {
            case "small":
              return s("1630246");
          }
          return null;
        default:
          return null;
      }
    }
    function f(t) {
      var n = t.iconSrc,
        o = t.isDisabled,
        a = o === void 0 ? !1 : o,
        i = t.size,
        l = t.verified,
        s = t.xstyle,
        u = i;
      (i === "whatsAppLarge" ||
        i === "whatsAppSmall" ||
        i === "whatsAppXsmall") &&
        (u = h(i));
      var f = n != null ? _(n, u) : null,
        g = f != null ? f : l === !0 ? m[u] : p[u];
      return c.jsx(r("Image.react"), {
        className: (e || (e = r("stylex")))(d.image, s),
        src: g,
        style: { opacity: a ? 0.5 : 1 },
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      if (e === "WHATSAPP_BUSINESS_ACCOUNT")
        switch (t) {
          case "large":
            return "whatsAppLarge";
          case "small":
            return "whatsAppSmall";
          case "xsmall":
            return "whatsAppXsmall";
        }
      return t;
    }
    function h(e) {
      switch (e) {
        case "whatsAppLarge":
          return "large";
        case "whatsAppSmall":
          return "small";
        case "whatsAppXsmall":
          return "xsmall";
      }
      return e;
    }
    ((l.BizKitNMEMV4BVerifiedBadge = f),
      (l.getVerifiedBadgeSizeFromAssetType = g));
  },
  98,
);
