__d(
  "WAWebUpdateBotModeSelectionAction",
  [
    "WALogger",
    "WAWebMaybeGetBotModeSelection",
    "WAWebThreadMetadataBulkJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = e.botModeSelection,
        n = e.chat,
        r = e.threadId;
      if (r != null) {
        var a,
          i = (a = n.aiThreads) == null ? void 0 : a.get(r);
        if (i != null) {
          c({ aiThread: i, chatId: n.id, botModeSelection: t });
          return;
        }
      }
      o("WAWebMaybeGetBotModeSelection").storeInMemoryBotMode(t);
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.aiThread,
            r = t.botModeSelection,
            a = t.chatId;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[updateBotModeSelectionAction]: Start",
              ])),
          );
          var i = {
            threadId: n.id,
            chatId: a,
            lastMessageTimestamp: n.lastMessageTimestamp,
            creationTimestamp: n.creationTimestamp,
            botModeSelection: r,
          };
          (yield o(
            "WAWebThreadMetadataBulkJob",
          ).bulkCreateOrUpdateThreadsMetadata([i]),
            n.set({ botModeSelection: r }),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[updateBotModeSelectionAction]: End",
                ])),
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = e.botModeOverride,
        n = e.chat,
        r = e.threadId;
      if (r != null) {
        var a,
          i = (a = n.aiThreads) == null ? void 0 : a.get(r);
        if (i != null) {
          var l = {
            threadId: i.id,
            chatId: n.id,
            lastMessageTimestamp: i.lastMessageTimestamp,
            creationTimestamp: i.creationTimestamp,
            botModeOverride: t,
          };
          (o("WAWebThreadMetadataBulkJob").bulkCreateOrUpdateThreadsMetadata([
            l,
          ]),
            i.set({ botModeOverride: t }));
          return;
        }
      }
      o("WAWebMaybeGetBotModeSelection").storeInMemoryBotModeOverride(t);
    }
    ((l.persistBotModeSelection = u), (l.persistDynamicBotModeOverride = m));
  },
  98,
);
