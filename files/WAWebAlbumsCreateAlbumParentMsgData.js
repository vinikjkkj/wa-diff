__d(
  "WAWebAlbumsCreateAlbumParentMsgData",
  [
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chat,
        n = e.expectedImageCount,
        r = e.expectedVideoCount,
        a = e.quotedMsg,
        i = babelHelpers.extends(
          {},
          a == null ? void 0 : a.msgContextInfo(t.id),
          await o("WAWebMsgDataUtils").genOutgoingMsgData(
            t,
            o("WAWebMsgType").MSG_TYPE.ALBUM,
          ),
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
          {
            type: o("WAWebMsgType").MSG_TYPE.ALBUM,
            kind: o("WAWebMsgType").MsgKind.Album,
            expectedImageCount: n,
            expectedVideoCount: r,
          },
        );
      return new (o("WAWebMsgModel").Msg)(i);
    }
    l.createAlbumParentMsg = e;
  },
  98,
);
