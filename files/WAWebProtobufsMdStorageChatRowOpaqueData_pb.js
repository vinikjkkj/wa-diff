__d(
  "WAWebProtobufsMdStorageChatRowOpaqueData.pb",
  ["$InternalEnum", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({ NONE: 0, IMAGE: 1, VIDEO: 2 }),
      u = {},
      c = {},
      d = {},
      m = {};
    ((u.name = "ChatRowOpaqueData"),
      (u.internalSpec = {
        draftMessage: [1, (e = o("WAProtoConst")).TYPES.MESSAGE, c],
      }),
      (c.name = "ChatRowOpaqueData$DraftMessage"),
      (c.internalSpec = {
        text: [1, e.TYPES.STRING],
        omittedUrl: [2, e.TYPES.STRING],
        ctwaContextLinkData: [3, e.TYPES.MESSAGE, m],
        ctwaContext: [4, e.TYPES.MESSAGE, d],
        timestamp: [5, e.TYPES.INT64],
      }),
      (d.name = "ChatRowOpaqueData$DraftMessage$CtwaContextData"),
      (d.internalSpec = {
        conversionSource: [1, e.TYPES.STRING],
        conversionData: [2, e.TYPES.BYTES],
        sourceUrl: [3, e.TYPES.STRING],
        sourceId: [4, e.TYPES.STRING],
        sourceType: [5, e.TYPES.STRING],
        title: [6, e.TYPES.STRING],
        description: [7, e.TYPES.STRING],
        thumbnail: [8, e.TYPES.STRING],
        thumbnailUrl: [9, e.TYPES.STRING],
        mediaType: [10, e.TYPES.ENUM, s],
        mediaUrl: [11, e.TYPES.STRING],
        isSuspiciousLink: [12, e.TYPES.BOOL],
      }),
      (m.name = "ChatRowOpaqueData$DraftMessage$CtwaContextLinkData"),
      (m.internalSpec = {
        context: [1, e.TYPES.STRING],
        sourceUrl: [2, e.TYPES.STRING],
        icebreaker: [3, e.TYPES.STRING],
        phone: [4, e.TYPES.STRING],
      }),
      (l.ChatRowOpaqueData$DraftMessage$CtwaContextData$ContextInfoExternalAdReplyInfoMediaType =
        s),
      (l.ChatRowOpaqueDataSpec = u),
      (l.ChatRowOpaqueData$DraftMessageSpec = c),
      (l.ChatRowOpaqueData$DraftMessage$CtwaContextDataSpec = d),
      (l.ChatRowOpaqueData$DraftMessage$CtwaContextLinkDataSpec = m));
  },
  98,
);
