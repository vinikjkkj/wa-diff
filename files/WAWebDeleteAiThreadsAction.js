__d(
  "WAWebDeleteAiThreadsAction",
  [
    "WALogger",
    "WAWebAiThreadDeleteSync",
    "WAWebChatCollection",
    "WAWebThreadBridgeApi",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMetadataBulkJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: Start",
                ])),
            ),
            !t.isBot())
          )
            throw r("err")("deleteAiThreadsAction: chatId must be a bot");
          var a = o("WAWebChatCollection").ChatCollection.get(t),
            i = n.map(function (e) {
              var t;
              return a == null ||
                (t = a.aiThreads) == null ||
                (t = t.get(e)) == null
                ? void 0
                : t.creationTimestamp;
            });
          (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadDelete(
            n,
            i,
          ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: Delete from threads_metadata table",
                ])),
            ));
          var l = yield o("WAWebThreadMetadataBulkJob").bulkDeleteThreads(t, n);
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteAiThreadsAction]: Send delete mutations",
              ])),
          ),
            yield r("WAWebAiThreadDeleteSync").sendMutation(n),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: Delete model msgs by msgIds",
                ])),
            ),
            o("WAWebThreadBridgeApi").ThreadBridgeApi.deleteChatAiThreads({
              chatId: t,
              threadIds: n,
              msgIds: l,
            }),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: End",
                ])),
            ));
        })),
        p.apply(this, arguments)
      );
    }
    l.deleteAiThreadsAction = m;
  },
  98,
);
