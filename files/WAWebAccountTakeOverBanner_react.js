__d(
  "WAWebAccountTakeOverBanner.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WDSBanner.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        bannerWrapper: {
          marginTop: "x1380le5",
          marginBottom: "xefnzgg",
          marginInlineStart: "x1uvdrpn",
          marginInlineEnd: "x14mko6t",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.entryPoint,
        o = t.xstyle,
        a = s._(
          /*BTDS*/ "For additional security, your contacts will be fully restored later.",
        );
      return (
        n === "privacy-settings" &&
          (a = s._(
            /*BTDS*/ "Some contacts that are used for your privacy settings aren't fully restored.",
          )),
        c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(d.bannerWrapper, o),
            {
              children: c.jsx(r("WDSBanner.react"), {
                type: "warning",
                body: a,
                actionText: r("WAWebFbtCommon")("Learn more"),
                onAction: p,
                testid: void 0,
              }),
            },
          ),
        )
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getAccountTakeOverFaqUrl(),
      );
    }
    l.default = m;
  },
  226,
);
