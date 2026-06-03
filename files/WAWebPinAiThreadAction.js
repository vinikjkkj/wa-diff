__d(
  "WAWebPinAiThreadAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadPinSync",
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMetadataBulkJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      var t = e.aiThreads;
      if (t == null) return 0;
      var n = 0;
      return (
        t.forEach(function (e) {
          var t = e.pinThreadTimestamp;
          t != null && t > 0 && n++;
        }),
        n
      );
    }
    function m(e, t) {
      return (
        t === void 0 && (t = 1),
        d(e) + t <= o("WAWebBotGating").getAiThreadPinMaxCount()
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pinAiThreadAction]: Start",
              ])),
          );
          var a = o("WAWebChatCollection").ChatCollection.get(n);
          if (a != null && m(a)) {
            var i = o("WATimeUtils").unixTimeMs(),
              l = {
                threadId: t.id,
                chatId: n,
                lastMessageTimestamp: t.lastMessageTimestamp,
                creationTimestamp: t.creationTimestamp,
                pinThreadTimestamp: i,
              };
            (yield o(
              "WAWebThreadMetadataBulkJob",
            ).bulkCreateOrUpdateThreadsMetadata([l]),
              yield r("WAWebAiThreadPinSync").sendMutation(t.id, !0),
              t.set({ pinThreadTimestamp: i }),
              o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadPin(
                t.id,
                t.creationTimestamp,
              ),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[pinAiThreadAction]: End",
                  ])),
              ));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[unpinAiThreadAction]: Start",
              ])),
          );
          var n = {
            threadId: e.id,
            chatId: t,
            lastMessageTimestamp: e.lastMessageTimestamp,
            creationTimestamp: e.creationTimestamp,
            pinThreadTimestamp: void 0,
          };
          (yield o(
            "WAWebThreadMetadataBulkJob",
          ).bulkCreateOrUpdateThreadsMetadata([n]),
            yield r("WAWebAiThreadPinSync").sendMutation(e.id, !1),
            e.set({ pinThreadTimestamp: void 0 }),
            o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadUnpin(
              e.id,
              e.creationTimestamp,
            ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[unpinAiThreadAction]: End",
                ])),
            ));
        })),
        g.apply(this, arguments)
      );
    }
    ((l.getPinnedThreadCount = d),
      (l.canPinMoreThreads = m),
      (l.pinAiThreadAction = p),
      (l.unpinAiThreadAction = f));
  },
  98,
);
