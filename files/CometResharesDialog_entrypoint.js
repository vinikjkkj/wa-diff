__d(
  "CometResharesDialog.entrypoint",
  [
    "CometResharesDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.feedbackID;
        return {
          queries: {
            resharesQueryReference: {
              parameters: n("CometResharesDialogQuery$Parameters"),
              variables: {
                feedbackID: e,
                feedbackSource: 1,
                feedLocation: "SHARE_OVERLAY",
                privacySelectorRenderLocation: "COMET_STREAM",
                renderLocation: "reshares_dialog",
                scale: o("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")("CometResharesDialog.react").__setRef(
        "CometResharesDialog.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
