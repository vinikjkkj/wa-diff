__d(
  "getBilling3PThirdPartyDisclaimer",
  [
    "fbt",
    "FrontierInlinePressableText.react",
    "isStablecoinPayinCredential",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "https://www.facebook.com/terms/";
    function d() {
      return s._(
        /*BTDS*/ "By continuing, you understand the {risk of using stablecoin} and you authorize Meta and its third-party partners to access your account or wallet to process payment. Meta's {terms and privacy policies} apply. Third-party terms and policies may also apply.",
        [
          s._param(
            "risk of using stablecoin",
            u.jsx(r("FrontierInlinePressableText.react"), {
              linkProps: {
                target: "_blank",
                url: o("isStablecoinPayinCredential").ABOUT_STABLECOIN_HELP_URL,
              },
              children: s._(/*BTDS*/ "risk of using stablecoin"),
            }),
          ),
          s._param(
            "terms and privacy policies",
            u.jsx(r("FrontierInlinePressableText.react"), {
              linkProps: { target: "_blank", url: c },
              children: s._(/*BTDS*/ "terms and privacy policies"),
            }),
          ),
        ],
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
