__d(
  "FXCreatePasswordUtils",
  [
    "Box.react",
    "FBLogger",
    "XMDSProfilePhotoFBIcon.react",
    "XMDSProfilePhotoIGIcon.react",
    "XMDSProfilePhotoMetaIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      if (e == null)
        throw r("FBLogger")("fx_settings").mustfixThrow(
          "Cannot find password change %s",
          t,
        );
      return e;
    }
    var c = {
      icon: {
        alignItems: "x6s0dn4",
        height: "x1v9usgg",
        justifyContent: "xl56j7k",
        width: "x6jxa94",
        $$css: !0,
      },
    };
    function d(e) {
      switch (e) {
        case "FACEBOOK":
          return s.jsx(r("Box.react"), {
            xstyle: c.icon,
            children: s.jsx(r("XMDSProfilePhotoFBIcon.react"), {}),
          });
        case "INSTAGRAM":
          return s.jsx(r("Box.react"), {
            xstyle: c.icon,
            children: s.jsx(r("XMDSProfilePhotoIGIcon.react"), {
              viewBox: "0 0 14 14",
            }),
          });
        case "FRL":
          return s.jsx(r("Box.react"), {
            xstyle: c.icon,
            children: s.jsx(r("XMDSProfilePhotoMetaIcon.react"), {}),
          });
        default:
          return null;
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.nonNullOrThrow = u),
      (l.getAppIcon = d));
  },
  98,
);
