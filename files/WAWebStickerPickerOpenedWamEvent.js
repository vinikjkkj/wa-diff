__d(
  "WAWebStickerPickerOpenedWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumStickerPickerEntryPoint"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        StickerPickerOpened: [
          1854,
          {
            stickerPickerEntryPoint: [
              1,
              o("WAWebWamEnumStickerPickerEntryPoint")
                .STICKER_PICKER_ENTRY_POINT,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { StickerPickerOpened: [] },
    );
    l.StickerPickerOpenedWamEvent = e;
  },
  98,
);
