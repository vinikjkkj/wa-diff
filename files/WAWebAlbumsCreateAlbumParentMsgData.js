__d(
  "WAWebAlbumsCreateAlbumParentMsgData",
  [
    "WAWebGetEphemeralFieldsMsgActionsUtils",
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
            a = e.quotedMsg,
            i = babelHelpers.extends(
              {},
              a == null ? void 0 : a.msgContextInfo(t.id),
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(
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
        })),
        s.apply(this, arguments)
      );
    }
    l.createAlbumParentMsg = e;
  },
  98,
);
