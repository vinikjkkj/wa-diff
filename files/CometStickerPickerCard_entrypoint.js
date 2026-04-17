__d(
  "CometStickerPickerCard.entrypoint",
  [
    "CometStickerPickerCardQuery$Parameters",
    "CometStickerPickerStickerGeneratedCard.entrypoint",
    "CometStickerPickerStickerSearchCard.entrypoint",
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 128,
      s = r("JSResourceForInteraction")(
        "CometStickerPickerCard.react",
      ).__setRef("CometStickerPickerCard.entrypoint"),
      u = {
        getPreloadProps: function (n) {
          var t = n.feedbackID,
            a = n.flyoutTagsCount,
            i = n.flyoutTagsCursor,
            l = n.stickerHeight,
            s = l === void 0 ? e : l,
            u = n.stickerInterface,
            c = n.stickerWidth,
            d = c === void 0 ? e : c,
            m = {
              flyoutTagsCount: a,
              flyoutTagsCursor: i,
              stickerInterface: u,
            },
            p = { stickerHeight: s, stickerInterface: u, stickerWidth: d };
          return {
            entryPoints: {
              stickerGeneratedEntrypointReference: o(
                "NestedRelayEntryPointBuilderUtils",
              ).NestedRelayEntryPoint({
                entryPoint: r(
                  "CometStickerPickerStickerGeneratedCard.entrypoint",
                ),
                entryPointParams: p,
              }),
              stickerSearchEntrypointReference: o(
                "NestedRelayEntryPointBuilderUtils",
              ).NestedRelayEntryPoint({
                entryPoint: r("CometStickerPickerStickerSearchCard.entrypoint"),
                entryPointParams: m,
              }),
            },
            extraProps: { feedbackTargetID: t, stickerInterface: u },
            queries: {
              stickerPickerQueryReference: {
                parameters: r("CometStickerPickerCardQuery$Parameters"),
                variables: {
                  feedbackID: t,
                  scale: o("WebPixelRatio").get(),
                  stickerInterface: u,
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
