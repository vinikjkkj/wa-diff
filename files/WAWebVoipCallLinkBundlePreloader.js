__d(
  "WAWebVoipCallLinkBundlePreloader",
  [
    "Promise",
    "WALogger",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      return t().then(
        function () {},
        function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: call-link bundle preload failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs(n);
        },
      );
    }
    function c() {
      return (s || (s = n("Promise")))
        .all([
          u(
            o("WAWebVoipUiLoadable").requireBundle,
            "voip-preload-call-link-ui",
          ),
          u(
            o("WAWebVoipUiVideoCallLoadable").requireBundle,
            "voip-preload-call-link-video",
          ),
        ])
        .then(function () {});
    }
    l.preloadCallLinkBundles = c;
  },
  98,
);
