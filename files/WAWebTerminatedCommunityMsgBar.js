__d(
  "WAWebTerminatedCommunityMsgBar",
  [
    "fbt",
    "WAWebCxtUrl",
    "WAWebExternalLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "x126k92a" }), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(
              "span",
              babelHelpers.extends({}, t, {
                "data-testid": "terminated-community-msg-bar",
                children: s._(
                  /*BTDS*/ "This community is no longer available. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl(),
                        children: s._(/*BTDS*/ "Learn More"),
                      }),
                    ),
                  ],
                ),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = c;
  },
  226,
);
