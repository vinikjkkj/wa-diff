__d(
  "VideoPlayerFallbackLearnMoreLink.react",
  [
    "fbt",
    "CometFacebookHelpURLConstants",
    "FDSLink.react",
    "FDSText.react",
    "gkx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t = r("gkx")("20836")
          ? "/help/work/1876956335887765/i-cant-view-or-play-videos-on-workplace"
          : o("CometFacebookHelpURLConstants").FACEBOOK_HELP_BASE_URL +
            "/396404120401278/list",
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Learn more about video playback issues")),
          (e[0] = n))
        : (n = e[0]);
      var a;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsx(r("FDSText.react"), {
              color: "primaryOnMedia",
              type: "headlineEmphasized3",
              children: u.jsx(r("FDSLink.react"), {
                "aria-label": n,
                href: t,
                target: "_blank",
                children: s._(/*BTDS*/ "Learn more"),
              }),
            })),
            (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    l.default = c;
  },
  226,
);
