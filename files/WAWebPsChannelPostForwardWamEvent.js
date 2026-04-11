__d(
  "WAWebPsChannelPostForwardWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelForwardContentType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsChannelPostForward: [
            4746,
            {
              channelForwardContentType: [
                6,
                o("WAWebWamEnumChannelForwardContentType")
                  .CHANNEL_FORWARD_CONTENT_TYPE,
              ],
              channelForwardGroupType: [
                1,
                o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE,
              ],
              cid: [2, e.TYPES.STRING],
              destinationChannelId: [7, e.TYPES.STRING],
              destinationPostId: [8, e.TYPES.STRING],
              isSecondOrder: [9, e.TYPES.BOOLEAN],
              mediaType: [3, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              postId: [4, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { PsChannelPostForward: [] },
      );
    l.PsChannelPostForwardWamEvent = s;
  },
  98,
);
