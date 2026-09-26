__d(
  "MWV2ChatTabRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "MAWSecureThreadQPContainerQuery$Parameters",
    "MWChatTabInThreadBannerQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = {
            mawSecureThreadQPContainerQueryRef: {
              parameters: r("MAWSecureThreadQPContainerQuery$Parameters"),
              variables: {},
            },
            mwChatTabInThreadBannerQueryRef: {
              parameters: r("MWChatTabInThreadBannerQuery$Parameters"),
              variables: {},
            },
          };
          return { queries: e };
        },
        root: r("JSResourceForInteraction")("MWV2ChatTabRoot.react").__setRef(
          "MWV2ChatTabRoot.entrypoint",
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
