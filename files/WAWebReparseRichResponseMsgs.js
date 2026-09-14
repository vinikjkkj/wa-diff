__d(
  "WAWebReparseRichResponseMsgs",
  [
    "Promise",
    "WAResolvable",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebDBMessageSerialization",
    "WAWebMessageProcessDBPipeline",
    "WAWebRichResponse.flow",
    "WAWebRichResponseParseUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = r("compactMap")(t, function (e) {
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
          if (a.length !== 0) {
            var i = new (o("WAResolvable").Resolvable)();
            yield o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
              flushImmediatly: !0,
              msgData: a,
              uiNotified: i,
            });
            try {
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
                (yield (e || (e = n("Promise"))).all(
                  a.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          return o("WAWebBackendApi").frontendSendAndReceive(
                            "updateMessageUI",
                            { chatId: e.id.remote, msg: e },
                          );
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                ));
            } finally {
              i.resolve(void 0);
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.reparseRichResponseMsgs = s;
  },
  98,
);
