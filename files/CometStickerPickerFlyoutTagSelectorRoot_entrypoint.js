__d(
  "CometStickerPickerFlyoutTagSelectorRoot.entrypoint",
  [
    "CometStickerPickerFlyoutTagSelectorRootQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.count,
          n = t.cursor;
        return {
          queries: {
            flyoutTagsQueryReference: {
              parameters: r(
                "CometStickerPickerFlyoutTagSelectorRootQuery$Parameters",
              ),
              variables: {
                count: e,
                cursor: n,
                scale: o("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometStickerPickerFlyoutTagSelectorRoot.react",
      ).__setRef("CometStickerPickerFlyoutTagSelectorRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
