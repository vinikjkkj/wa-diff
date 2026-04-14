__d(
  "WAWebFrequentlyForwardedWarning.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebHighlyForwardedIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.frequentlyForwardedCount,
        n = e.totalCount,
        a = u.jsxs("span", {
          children: [
            t === 1 && n === 1
              ? s._(
                  /*BTDS*/ "This message will be marked as forwarded many times.",
                )
              : s._(
                  /*BTDS*/ "One or more messages will be marked as forwarded many times.",
                ),
            " ",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl(),
              children: s._(/*BTDS*/ "Learn more"),
            }),
          ],
        });
      return u.jsxs("div", {
        className: "x78zum5 x1280gxy xso031l x1q0q8m5 x120ee7l",
        children: [
          u.jsx("div", {
            className: "x78zum5 x6s0dn4 x14iifvp xyxtwap x14ug900",
            children: u.jsx(
              o("WAWebHighlyForwardedIcon.react").HighlyForwardedIcon,
              { width: 24, height: 24 },
            ),
          }),
          u.jsx(r("WAWebCellFrame.react"), {
            theme: "plain",
            primary: a,
            idle: !0,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
