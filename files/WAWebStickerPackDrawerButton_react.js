__d(
  "WAWebStickerPackDrawerButton.react",
  ["fbt", "WDSButton.react", "WDSIconIcFastForward.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.handleClick;
      return u.jsx(r("WDSButton.react"), {
        variant: "tonal",
        Icon: r("WDSIconIcFastForward.react"),
        label: s._(/*BTDS*/ "Share this pack"),
        onPress: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
