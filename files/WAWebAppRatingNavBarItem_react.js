__d(
  "WAWebAppRatingNavBarItem.react",
  [
    "fbt",
    "WAWebAppRatingDialogTrigger",
    "WAWebFbtAppName",
    "WAWebIcRateAppIcon.react",
    "WAWebNavBarItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef;
    function p() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Rate {=m1}", [
            s._implicitParam(
              "=m1",
              u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ])),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        r = m(-1),
        a,
        i;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            r.current = self.performance.now();
          }),
          (i = []),
          (e[1] = a),
          (e[2] = i))
        : ((a = e[1]), (i = e[2])),
        d(a, i));
      var l;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
              testid: void 0,
              icon: u.jsx(o("WAWebIcRateAppIcon.react").IcRateAppIcon, {}),
              title: n,
              onClick: _,
              isActive: !1,
            })),
            (e[3] = l))
          : (l = e[3]),
        l
      );
    }
    function _() {
      o("WAWebAppRatingDialogTrigger").showAppRatingDialog("navbar");
    }
    l.WAWebAppRatingNavBarItem = p;
  },
  226,
);
