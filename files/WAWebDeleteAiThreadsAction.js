__d(
  "WAWebDeleteAiThreadsAction",
  [
    "Promise",
    "WALogger",
    "WAWebAiThreadDeleteSync",
    "WAWebAiThreadPinSync",
    "WAWebChatCollection",
    "WAWebThreadBridgeApi",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMetadataBulkJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
          var i = o("WAWebChatCollection").ChatCollection.get(t),
            l = a.map(function (e) {
              var t;
              return i == null ||
                (t = i.aiThreads) == null ||
                (t = t.get(e)) == null
                ? void 0
                : t.creationTimestamp;
            }),
            f = a.filter(function (e) {
              var t,
                n = i == null || (t = i.aiThreads) == null ? void 0 : t.get(e),
                r = n == null ? void 0 : n.pinThreadTimestamp;
              return r != null && r > 0;
            });
          (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadDelete(
            a,
            l,
          ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: Delete from threads_metadata table",
                ])),
            ));
          var g = yield o("WAWebThreadMetadataBulkJob").bulkDeleteThreads(t, a);
          if (f.length > 0) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: Send companion unpin mutations",
                ])),
            );
            try {
              yield (_ || (_ = n("Promise"))).all(
                f.map(function (e) {
                  return r("WAWebAiThreadPinSync").sendMutation(e, !1);
                }),
              );
            } catch (e) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteAiThreadsAction] failed to send companion unpin mutations",
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
            yield r("WAWebAiThreadDeleteSync").sendMutation(a),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: Delete model msgs by msgIds",
                ])),
            ),
            o("WAWebThreadBridgeApi").ThreadBridgeApi.deleteChatAiThreads({
              chatId: t,
              threadIds: a,
              msgIds: g,
            }),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[deleteAiThreadsAction]: End",
                ])),
            ));
        })),
        g.apply(this, arguments)
      );
    }
    l.deleteAiThreadsAction = f;
  },
  98,
);
