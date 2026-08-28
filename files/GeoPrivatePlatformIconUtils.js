__d(
  "GeoPrivatePlatformIconUtils",
  ["ix", "bx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e = r("bx")).getURL(e("1297419")),
      c = e.getURL(e("1297420")),
      d = e.getURL(e("6331")),
      m = e.getURL(e("10481")),
      p = e.getURL(e("1543871")),
      _ = e.getURL(e("7371")),
      f = e.getURL(e("88158")),
      g = e.getURL(e("1965955")),
      h = e.getURL(e("7370")),
      y = e.getURL(e("28171")),
      C = e.getURL(e("5409")),
      b = Object.freeze({
        facebook: { icon: u, shape: "rounded", title: "Facebook" },
        instagram: { icon: h, shape: "rectangle", title: "Instagram" },
        threads: { icon: y, shape: "rounded", title: "Threads" },
        instagram_disabled: { icon: C, shape: "rectangle", title: "Instagram" },
        messenger: { icon: c, shape: "rounded", title: "Messenger" },
        meta: { icon: d, shape: "rounded", title: "Meta" },
        meta_for_work: { icon: m, shape: "rounded", title: "Meta for Work" },
        whatsapp: { icon: p, shape: "rounded", title: "WhatsApp" },
        whatsapp_business: { icon: _, shape: "rounded", title: "WhatsApp" },
        whatsapp_business_latest: {
          icon: f,
          shape: "rounded",
          title: "WhatsApp",
        },
        workplace: { icon: g, shape: "rounded", title: "Workplace" },
        meta_ai: {
          icon: {
            8: s("946788"),
            12: s("946776"),
            16: s("946778"),
            20: s("946780"),
            24: s("946782"),
            28: s("946784"),
            32: s("946786"),
          },
          shape: "rounded",
          title: "Meta AI",
        },
        gizmo: { icon: d, shape: "rounded", title: "Gizmo" },
      });
    function v(e, t) {
      return e !== "meta_ai" ? b[e].icon : b[e].icon[t];
    }
    function S(e) {
      return b[e].shape;
    }
    function R(e) {
      return b[e].title;
    }
    ((l.getIcon = v), (l.getIconShape = S), (l.getIconTitle = R));
  },
  98,
);
