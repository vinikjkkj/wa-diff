__d(
  "CometStickerPickerCardPopoverRootWithPresetProps",
  [
    "CometStickerPickerPopoverRoot.entrypoint",
    "JSResourceForInteraction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "logStickersFlyoutHasOpened",
      ).__setRef("CometStickerPickerCardPopoverRootWithPresetProps"),
      s = {
        props: {
          onVisibilityChange: function (n) {
            n === !0 &&
              r("promiseDone")(
                e.load().then(function (e) {
                  e();
                }),
              );
          },
        },
        resource: r("CometStickerPickerPopoverRoot.entrypoint"),
      };
    l.default = s;
  },
  98,
);
