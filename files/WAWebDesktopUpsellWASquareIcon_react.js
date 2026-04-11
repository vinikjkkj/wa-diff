__d(
  "WAWebDesktopUpsellWASquareIcon.react",
  [
    "WAWebDesktopUpsellUtils",
    "WAWebWaSquareIconIcon.react",
    "react",
    "react-compiler-runtime",
  ],
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
      var e = o("react-compiler-runtime").c(2),
        t = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [u.icon, u.marginEnd8]), (e[0] = n))
        : (n = e[0]);
      var r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = s.jsx(o("WAWebWaSquareIconIcon.react").WaSquareIconIcon, {
              height: 40,
              xstyle: n,
              iconXstyle:
                t === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS
                  ? u.macIcon
                  : null,
            })),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    l.default = c;
  },
  98,
);
