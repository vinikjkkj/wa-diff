__d(
  "WAWebMessageSendServiceWebLive",
  [
    "WALogger",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebPathfinderMessageSent",
    "WAWebPrepareMessageSendingAction",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgRecordAction",
    "WAWebThreadMsgUtils",
    "WebDi.Async",
    "WebDi.Cause",
    "WebDi.Fx",
    "WebDi.Gen",
    "WebDi.Result",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebMessageSendService").MessageSendService.make(function* () {
        var e = yield* o("WAWebMessageStoreService").MessageStoreService,
          t = {
            storeAndSend: function (n, r, a, i) {
              var t = i.pathfinderAccountToken;
              return o("WebDi.Gen").gen(function* () {
                var i, l;
                ((i = n.wamMessageSendPerfReporter) == null ||
                  i.startSavedStage(),
                  yield* u(e.storeMessages(r, a)),
                  (l = n.wamMessageSendPerfReporter) == null ||
                    l.postSavedStage(),
                  o(
                    "WAWebPathfinderMessageSent",
                  ).recordPathfinderMessageSentAfterCommit(n, t));
                var s = r.filter(o("WAWebThreadMsgUtils").isThreadMsg);
                return (
                  s.length > 0 && (yield* e.persistThreadMetadata(s)),
                  yield* o("WebDi.Async").fromPromise(function () {
                    return o("WAWebSendMsgRecordAction").sendMsgRecord(n);
                  })
                );
              });
            },
            prepareChatForMessageSending: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return o(
                  "WAWebPrepareMessageSendingAction",
                ).prepareChatForMessageSending(t);
              });
            },
            sendMsgRecord: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return o("WAWebSendMsgRecordAction").sendMsgRecord(t);
              });
            },
            sendAddonRecord: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return o("WAWebSendMsgRecordAction").sendAddonRecord(t);
              });
            },
            resendLatestEdit: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return o("WAWebSendMessageEditAction").resendLatestEdit(t);
              });
            },
          };
        return t;
      }),
      u = o("WebDi.Async").ensuring(function (t) {
        return o("WebDi.Fx").sync(function () {
          var n = t instanceof o("WebDi.Result").Err ? t.error : null;
          n instanceof o("WebDi.Cause").Die &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "storeAndSend: failed to storeMessages into storage",
                  ])),
              )
              .verbose()
              .sendLogs("storeMessages failed");
        });
      });
    l.MessageSendServiceWebLive = s;
  },
  98,
);
