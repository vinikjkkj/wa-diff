__d(
  "WAWebReparseRichResponseMsgs",
  [
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
      t.length !== 0 &&
        (await o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline(
          t,
          !0,
        ),
        o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
          (await Promise.all(
            t.map(async function (e) {
              return o("WAWebBackendApi").frontendSendAndReceive(
                "updateMessageUI",
                { chatId: e.id.remote, msg: e },
              );
            }),
          )));
    }
    l.reparseRichResponseMsgs = e;
  },
  98,
);
