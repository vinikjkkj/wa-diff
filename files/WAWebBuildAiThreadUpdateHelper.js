__d(
  "WAWebBuildAiThreadUpdateHelper",
  [
    "WANullthrows",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotDeviceCapabilities",
    "WAWebBotUtils",
    "WAWebDBMessageSerialization",
    "WAWebSchemaMessage",
    "WAWebThreadMsgUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.filter(function (e) {
        return o("WAWebBotUtils").isMetaAiBot(e.id.remote);
      });
      if (t.length === 0) return null;
      var n = await o("WAWebBotDeviceCapabilities").primaryHasAiThreadSupport();
      if (!n || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled())
        return null;
      var r = t.filter(function (e) {
        return !o("WAWebThreadMsgUtils").msgHasAiThread(e);
      });
      if (r.length === 0) return null;
      var a = {
          threadId: o(
            "WAWebAiThreadCreationUtils",
          ).getHistoricalMetaAiThreadId(),
          aiThreadInfo: {
            aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
          },
        },
        i = s(r);
      if (i.length === 0)
        return { targetMsgThreadMap: new Map(), defaultThreadAttributes: a };
      var l = await u(i, e);
      return { targetMsgThreadMap: l, defaultThreadAttributes: a };
    }
    function s(e) {
      return r("compactMap")(e, o("WAWebBotUtils").getBotResponseTargetMsgKey);
    }
    async function u(e, t) {
      var n = new Map(),
        r = m(t),
        o = e.reduce(function (e, t) {
          var o = t.toString(),
            a = r.get(o);
          return (a == null ? e.push(t) : d(a, n), e);
        }, []);
      return (o.length === 0 || (await c(o, n)), n);
    }
    async function c(e, t) {
      var n = e.map(function (e) {
          return e.toString();
        }),
        r = await o("WAWebSchemaMessage").getMessageTable().bulkGet(n, !1),
        a = r.filter(Boolean).map(function (e) {
          return o("WAWebDBMessageSerialization").messageFromDbRow(e);
        });
      a.forEach(function (e) {
        return d(e, t);
      });
    }
    function d(e, t) {
      if (o("WAWebThreadMsgUtils").msgHasAiThread(e)) {
        var n = r("WANullthrows")(o("WAWebThreadMsgUtils").getMsgAiThread(e)),
          a = o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(
            void 0,
            o("WAWebAiThreadTypeUtils").AiThreadType.Default,
          );
        t.set(e.id.toString(), { threadId: n, aiThreadInfo: a });
      }
    }
    function m(e) {
      var t = new Map();
      for (var n of e) t.set(n.id.toString(), n);
      return t;
    }
    l.buildAiThreadUpdateHelpers = e;
  },
  98,
);
