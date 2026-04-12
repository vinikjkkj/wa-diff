__d(
  "WAWebTerminatedCommunityMsgBar",
  ["fbt", "WAWebCxtUrl", "WAWebExternalLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx("span", {
        className: "x126k92a",
        "data-testid": void 0,
        children: s._(/*BTDS*/ "This community is no longer available. {=m2}", [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl(),
              children: s._(/*BTDS*/ "Learn More"),
            }),
          ),
        ]),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
