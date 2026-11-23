__d(
  "WAWebDeleteAiThreadsAction",
  [
    "WALogger",
    "WAWebAiThreadDeleteSync",
    "WAWebAiThreadPinSync",
    "WAWebChatCollection",
    "WAWebThreadBridgeApi",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMetadataBulkJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    async function _(t, n) {
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
        }),
        l = n.filter(function (e) {
          var t,
            n = a == null || (t = a.aiThreads) == null ? void 0 : t.get(e),
            r = n == null ? void 0 : n.pinThreadTimestamp;
          return r != null && r > 0;
        });
      (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadDelete(n, i),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[deleteAiThreadsAction]: Delete from threads_metadata table",
            ])),
        ));
      var _ = await o("WAWebThreadMetadataBulkJob").bulkDeleteThreads(t, n);
      if (l.length > 0) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[deleteAiThreadsAction]: Send companion unpin mutations",
            ])),
        );
        try {
          await Promise.all(
            l.map(function (e) {
              return r("WAWebAiThreadPinSync").sendMutation(e, !1);
            }),
          );
        } catch (e) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteAiThreadsAction] companion unpin mutations failed",
              ])),
          );
        }
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[deleteAiThreadsAction]: Send delete mutations",
          ])),
      ),
        await r("WAWebAiThreadDeleteSync").sendMutation(n),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[deleteAiThreadsAction]: Delete model msgs by msgIds",
            ])),
        ),
        o("WAWebThreadBridgeApi").ThreadBridgeApi.deleteChatAiThreads({
          chatId: t,
          threadIds: n,
          msgIds: _,
        }),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[deleteAiThreadsAction]: End",
            ])),
        ));
    }
    l.deleteAiThreadsAction = _;
  },
  98,
);
