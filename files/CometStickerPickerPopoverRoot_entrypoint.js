__d(
  "CometStickerPickerPopoverRoot.entrypoint",
  [
    "CometStickerPickerCard.entrypoint",
    "JSResourceForInteraction",
    "NestedRelayEntryPointBuilderUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var s = r("JSResourceForInteraction")(
        "CometStickerPickerPopoverRoot.react",
      ).__setRef("CometStickerPickerPopoverRoot.entrypoint"),
      u = {
        getPreloadProps: function (n) {
          var t = babelHelpers.extends({}, (e(n), n));
          return {
            entryPoints: {
              stickerPickerCardEntrypointReference: o(
                "NestedRelayEntryPointBuilderUtils",
              ).NestedRelayEntryPoint({
                entryPoint: r("CometStickerPickerCard.entrypoint"),
                entryPointParams: t,
              }),
            },
          };
        },
        root: s,
      };
    l.default = u;
  },
  98,
);
