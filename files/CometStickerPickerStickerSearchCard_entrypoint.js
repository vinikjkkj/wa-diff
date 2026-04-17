__d(
  "CometStickerPickerStickerSearchCard.entrypoint",
  [
    "CometStickerPickerFlyoutTagSelectorRoot.entrypoint",
    "CometStickerPickerGeneratedStickersFlyoutTagSelectorRoot.entrypoint",
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "CometStickerPickerStickerSearchCard.react",
      ).__setRef("CometStickerPickerStickerSearchCard.entrypoint"),
      s = {
        getPreloadProps: function (t) {
          var e = t.flyoutTagsCount,
            n = t.flyoutTagsCursor,
            a = t.stickerInterface,
            i = { count: e, cursor: n };
          return {
            entryPoints: {
              flyoutTagSelectorEntrypointReference: o(
                "NestedRelayEntryPointBuilderUtils",
              ).NestedRelayEntryPoint({
                entryPoint: r(
                  "CometStickerPickerFlyoutTagSelectorRoot.entrypoint",
                ),
                entryPointParams: i,
              }),
              flyoutTagSelectorGeneratedEntrypointReference: o(
                "NestedRelayEntryPointBuilderUtils",
              ).NestedRelayEntryPoint({
                entryPoint: r(
                  "CometStickerPickerGeneratedStickersFlyoutTagSelectorRoot.entrypoint",
                ),
                entryPointParams: i,
              }),
            },
            extraProps: { stickerInterface: a },
          };
        },
        root: e,
      };
    l.default = s;
  },
  98,
);
