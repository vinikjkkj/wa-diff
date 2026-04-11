__d(
  "WAWebCarouselNavigationButton",
  [
    "WAWebBotPluginCarouselChevronBtn.react",
    "WAWebChevronButton.react",
    "WAWebRound.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.buttonType,
        n = e.displayType,
        a = e.onButtonClick;
      return s.jsx(r("WAWebBotPluginCarouselChevronBtn.react"), {
        type: t,
        onClick: function () {
          return a(t === o("WAWebChevronButton.react").ButtonType.Next);
        },
        theme: o("WAWebRound.react").RoundTheme.XSmall,
        displayType: n,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.CarouselNavigationButton = u));
  },
  98,
);
