__d(
  "CometStickerPickerStickerGeneratedCard.entrypoint",
  [
    "CometStickerPickerStickerGeneratedCardQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = r("JSResourceForInteraction")(
        "CometStickerPickerStickerGeneratedCard.react",
      ).__setRef("CometStickerPickerStickerGeneratedCard.entrypoint"),
      u = {
        getPreloadProps: function (n) {
          var t = n.stickerHeight,
            a = n.stickerInterface,
            i = n.stickerWidth;
          return {
            extraProps: { stickerInterface: a },
            queries: {
              stickerGeneratedTrendingStickersQueryReference: {
                parameters: r(
                  "CometStickerPickerStickerGeneratedCardQuery$Parameters",
                ),
                variables: {
                  limit: e,
                  scale: o("WebPixelRatio").get(),
                  sticker_height: typeof t == "number" ? Math.floor(t) : t,
                  sticker_width: typeof i == "number" ? Math.floor(i) : i,
                },
              },
            },
          };
        },
        root: s,
      };
    l.default = u;
  },
  98,
);
