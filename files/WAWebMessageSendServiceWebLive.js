__d(
  "WAWebMessageSendServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebPathfinderMessageSent",
    "WAWebThreadMsgUtils",
    "WebDi.Async",
    "WebDi.Cause",
    "WebDi.Fx",
    "WebDi.Gen",
    "WebDi.Result",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebPrepareMessageSendingAction",
      ).__setRef("WAWebMessageSendServiceWebLive"),
      c = r("JSResourceForInteraction")("WAWebSendMessageEditAction").__setRef(
        "WAWebMessageSendServiceWebLive",
      ),
      d = r("JSResourceForInteraction")("WAWebSendMsgRecordAction").__setRef(
        "WAWebMessageSendServiceWebLive",
      ),
      m = o("WAWebMessageSendService").MessageSendService.make(function* () {
        var e = yield* o("WAWebMessageStoreService").MessageStoreService,
          t = yield* o("WebDi.Async").fromPromise(function () {
            return (s || (s = n("Promise"))).all([
              u.load(),
              c.load(),
              d.load(),
            ]);
          }),
          r = t[0].prepareChatForMessageSending,
          a = t[1].resendLatestEdit,
          i = t[2],
          l = i.sendAddonRecord,
          m = i.sendMsgRecord,
          _ = {
            storeAndSend: function (n, r, a) {
              return o("WebDi.Gen").gen(function* () {
                var t, i;
                ((t = n.wamMessageSendPerfReporter) == null ||
                  t.startSavedStage(),
                  yield* p(e.storeMessages(r, a)),
                  (i = n.wamMessageSendPerfReporter) == null ||
                    i.postSavedStage(),
                  o(
                    "WAWebPathfinderMessageSent",
                  ).recordPathfinderMessageSentAfterCommit(n));
                var l = r.filter(o("WAWebThreadMsgUtils").isThreadMsg);
                return (
                  l.length > 0 && (yield* e.persistThreadMetadata(l)),
                  yield* o("WebDi.Async").fromPromise(function () {
                    return m(n);
                  })
                );
              });
            },
            prepareChatForMessageSending: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
            sendMsgRecord: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return m(t);
              });
            },
            sendAddonRecord: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t);
              });
            },
            resendLatestEdit: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
          };
        return _;
      }),
      p = o("WebDi.Async").ensuring(function (t) {
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
    l.MessageSendServiceWebLive = m;
  },
  98,
);
