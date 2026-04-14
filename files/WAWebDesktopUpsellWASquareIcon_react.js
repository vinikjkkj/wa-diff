__d(
  "WAWebDesktopUpsellWASquareIcon.react",
  ["WAWebDesktopUpsellUtils", "WAWebWaSquareIconIcon.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        icon: { marginInlineStart: "x8sq2zk", $$css: !0 },
        macIcon: {
          borderStartStartRadius: "x16qb05n",
          borderStartEndRadius: "xi7iut8",
          borderEndEndRadius: "x1dm3dyd",
          borderEndStartRadius: "x1pv694p",
          $$css: !0,
        },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
      };
    function c() {
      var e = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
      return s.jsx(o("WAWebWaSquareIconIcon.react").WaSquareIconIcon, {
        height: 40,
        xstyle: [u.icon, u.marginEnd8],
        iconXstyle:
          e === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS
            ? u.macIcon
            : null,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
