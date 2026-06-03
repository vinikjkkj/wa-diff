__d(
  "WAWebAlbumsCreateAlbumParentMsgData",
  [
    "WAWebMsgDataUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.expectedImageCount,
            r = e.expectedVideoCount,
            a = babelHelpers.extends(
              {},
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(
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
        })),
        s.apply(this, arguments)
      );
    }
    l.createAlbumParentMsg = e;
  },
  98,
);
