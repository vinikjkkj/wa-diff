__d(
  "WAWebWebcChatOpenWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcChatOpen: [
            864,
            {
              webcChatOpenBeforePaintT: [7, e.TYPES.TIMER],
              webcChatOpenPaintedT: [6, e.TYPES.TIMER],
              webcChatOpenT: [2, e.TYPES.TIMER],
              webcFinalRenderedMessageCount: [5, e.TYPES.INTEGER],
              webcRenderedMessageCount: [4, e.TYPES.INTEGER],
              webcUnreadCount: [1, e.TYPES.NUMBER],
              webcWindowHeightFloat: [8, e.TYPES.NUMBER],
            },
            [1, 1, 5],
            "regular",
          ],
        },
        { WebcChatOpen: [] },
      );
    l.WebcChatOpenWamEvent = s;
  },
  98,
);
