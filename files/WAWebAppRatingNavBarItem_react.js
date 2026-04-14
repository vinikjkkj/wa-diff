__d(
  "WAWebAppRatingNavBarItem.react",
  [
    "fbt",
    "WAWebAppRatingDialogTrigger",
    "WAWebFbtAppName",
    "WAWebIcRateAppIcon.react",
    "WAWebNavBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef;
    function p() {
      var e = s._(/*BTDS*/ "Rate {=m1}", [
          s._implicitParam(
            "=m1",
            u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ]),
        t = m(-1);
      return (
        d(function () {
          t.current = self.performance.now();
        }, []),
        u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          testid: void 0,
          icon: u.jsx(o("WAWebIcRateAppIcon.react").IcRateAppIcon, {}),
          title: e,
          onClick: _,
          isActive: !1,
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      o("WAWebAppRatingDialogTrigger").showAppRatingDialog("navbar");
    }
    l.WAWebAppRatingNavBarItem = p;
  },
  226,
);
