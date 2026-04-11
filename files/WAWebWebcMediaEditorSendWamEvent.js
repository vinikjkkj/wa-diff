__d(
  "WAWebWebcMediaEditorSendWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMediaEditorSend: [
            2890,
            {
              blurImageCount: [7, e.TYPES.INTEGER],
              editedImageCount: [2, e.TYPES.INTEGER],
              emojiLayerCount: [5, e.TYPES.INTEGER],
              imageCount: [1, e.TYPES.INTEGER],
              paintedImageCount: [3, e.TYPES.INTEGER],
              stickerLayerCount: [6, e.TYPES.INTEGER],
              textLayerCount: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcMediaEditorSend: [] },
      );
    l.WebcMediaEditorSendWamEvent = s;
  },
  98,
);
