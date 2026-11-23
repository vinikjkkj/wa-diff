__d(
  "WAWebReparseRichResponseMsgs",
  [
    "WAResolvable",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebDBMessageSerialization",
    "WAWebMessageProcessDBPipeline",
    "WAWebRichResponse.flow",
    "WAWebRichResponseParseUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = r("compactMap")(e, function (e) {
        var t = o("WAWebDBMessageSerialization").messageFromDbRow(e),
          n = t.richResponse;
        if (
          n == null ||
          n.parseState ===
            o("WAWebRichResponse.flow").RichResponseParseState.Parsed
        )
          return null;
        var r = o("WAWebRichResponseParseUtils").parseRichResponse(n);
        return r.parseState ===
          o("WAWebRichResponse.flow").RichResponseParseState.Unparsed
          ? null
          : babelHelpers.extends({}, t, { richResponse: r });
      });
      if (t.length !== 0) {
        var n = new (o("WAResolvable").Resolvable)();
        await o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
          flushImmediatly: !0,
          msgData: t,
          uiNotified: n,
        }).done;
        try {
          o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
            (await Promise.all(
              t.map(async function (e) {
                return o("WAWebBackendApi").frontendSendAndReceive(
                  "updateMessageUI",
                  { chatId: e.id.remote, msg: e },
                );
              }),
            ));
        } finally {
          n.resolve(void 0);
        }
      }
    }
    l.reparseRichResponseMsgs = e;
  },
  98,
);
