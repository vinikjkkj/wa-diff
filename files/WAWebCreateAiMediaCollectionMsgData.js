__d(
  "WAWebCreateAiMediaCollectionMsgData",
  [
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.botPersonaId,
            n = e.chat,
            r = e.collectionId,
            a = e.expectedMediaCount,
            i = e.hasGlobalCaption,
            l = self.crypto.getRandomValues(new Uint8Array(32));
          return babelHelpers.extends(
            {},
            yield o("WAWebMsgDataUtils").genOutgoingMsgData(
              n,
              o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            ),
            {
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.AiMediaCollection,
              subtype: "ai_media_collection",
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              messageSecret: l,
              aiMediaCollectionInfo: {
                collectionId: r,
                expectedMediaCount: a,
                hasGlobalCaption: i,
              },
              botPersonaId: t,
            },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.createAiMediaCollectionMsgData = e;
  },
  98,
);
