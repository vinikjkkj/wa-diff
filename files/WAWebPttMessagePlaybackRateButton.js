__d(
  "WAWebPttMessagePlaybackRateButton",
  [
    "fbt",
    "WAWebPttPrefs",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        wrapper: {
          position: "x10l6tqk",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          height: "x5yr21d",
          userSelect: "x87ps6o",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.onClick,
        n = e.playbackRate,
        a = e.playbackRateButtonIsVisible,
        i = r("useWAWebIsKeyboardUser")(),
        l = i.isKeyboardUser,
        s = function () {
          (o("WAWebPttPrefs").PttPrefs.delayClearPlaybackRateControl(), t());
        },
        d = -1;
      return (
        a && (d = 0),
        u.jsx(r("WAWebUnstyledButton.react"), {
          "aria-hidden": !a,
          xstyle: [
            c.wrapper,
            l && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ],
          tabIndex: d,
          onClick: s,
          children: u.jsx("div", {
            className:
              "x9f619 x900493 x1nn3v0j x1gabggj x1120s5i xaso8d8 x1nxh6w3 xk50ysn xp9159e x2b8uid xlhzguj x1142k65 x9okykr x3hdh8v xr0m5pc x1muecih",
            children: m(n),
          }),
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      switch (e) {
        case 1:
          return s._(/*BTDS*/ "1\u00d7");
        case 1.5:
          return s._(/*BTDS*/ "1.5\u00d7");
        case 2:
          return s._(/*BTDS*/ "2\u00d7");
      }
    }
    l.default = d;
  },
  226,
);
