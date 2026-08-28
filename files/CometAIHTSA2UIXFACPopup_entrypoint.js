__d(
  "CometAIHTSA2UIXFACPopup.entrypoint",
  [
    "CometAIHTSA2UIXFACPopupContentQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          return {
            queries: {
              popupQueryRef: {
                parameters: n("CometAIHTSA2UIXFACPopupContentQuery$Parameters"),
                variables: {
                  designSystem: t.designSystem,
                  enrollmentID: t.enrollmentID,
                  scale: o("WebPixelRatio").get(),
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "CometAIHTSA2UIXFACPopupContent.react",
        ).__setRef("CometAIHTSA2UIXFACPopup.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
