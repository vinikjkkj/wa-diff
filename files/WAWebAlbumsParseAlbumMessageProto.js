__d(
  "WAWebAlbumsParseAlbumMessageProto",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.albumMessage;
      if (r == null) return null;
      var a = r.contextInfo;
      return {
        msgData: babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.ALBUM,
          kind: o("WAWebMsgType").MsgKind.Album,
        }),
        contextInfo: a,
      };
    }
    l.default = e;
  },
  98,
);
