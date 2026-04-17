__d(
  "CometStickerPickerGeneratedStickersFlyoutTagSelectorRoot.entrypoint",
  [
    "CometStickerPickerGeneratedStickersFlyoutTagSelectorRootQuery$Parameters",
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
                "CometStickerPickerGeneratedStickersFlyoutTagSelectorRootQuery$Parameters",
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
        "CometStickerPickerGeneratedStickersFlyoutTagSelectorRoot.react",
      ).__setRef(
        "CometStickerPickerGeneratedStickersFlyoutTagSelectorRoot.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
