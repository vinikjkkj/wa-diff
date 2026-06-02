__d(
  "WAWebAlbumsCreateAlbumParentMsgData",
  ["WAWebMsgDataUtils", "WAWebMsgModel", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chat,
        n = e.expectedImageCount,
        r = e.expectedVideoCount,
        a = babelHelpers.extends(
          {},
          await o("WAWebMsgDataUtils").genOutgoingMsgData(
            t,
            o("WAWebMsgType").MSG_TYPE.ALBUM,
          ),
          {
            type: o("WAWebMsgType").MSG_TYPE.ALBUM,
            kind: o("WAWebMsgType").MsgKind.Album,
            expectedImageCount: n,
            expectedVideoCount: r,
          },
        );
      return new (o("WAWebMsgModel").Msg)(a);
    }
    l.createAlbumParentMsg = e;
  },
  98,
);
