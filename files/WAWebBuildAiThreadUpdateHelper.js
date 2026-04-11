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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.filter(function (e) {
            return o("WAWebBotUtils").isMetaAiBot(e.id.remote);
          });
          if (t.length === 0) return null;
          var n = yield o(
            "WAWebBotDeviceCapabilities",
          ).primaryHasAiThreadSupport();
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
            i = u(r);
          if (i.length === 0)
            return {
              targetMsgThreadMap: new Map(),
              defaultThreadAttributes: a,
            };
          var l = yield c(i, e);
          return { targetMsgThreadMap: l, defaultThreadAttributes: a };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return r("compactMap")(e, o("WAWebBotUtils").getBotResponseTargetMsgKey);
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Map(),
            r = f(t),
            o = e.reduce(function (e, t) {
              var o = t.toString(),
                a = r.get(o);
              return (a == null ? e.push(t) : _(a, n), e);
            }, []);
          return (o.length === 0 || (yield m(o, n)), n);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return e.toString();
            }),
            r = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(n, !1),
            a = r.filter(Boolean).map(function (e) {
              return o("WAWebDBMessageSerialization").messageFromDbRow(e);
            });
          a.forEach(function (e) {
            return _(e, t);
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      if (o("WAWebThreadMsgUtils").msgHasAiThread(e)) {
        var n = r("WANullthrows")(o("WAWebThreadMsgUtils").getMsgAiThread(e)),
          a = o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(
            void 0,
            o("WAWebAiThreadTypeUtils").AiThreadType.Default,
          );
        t.set(e.id.toString(), { threadId: n, aiThreadInfo: a });
      }
    }
    function f(e) {
      var t = new Map();
      for (var n of e) t.set(n.id.toString(), n);
      return t;
    }
    l.buildAiThreadUpdateHelpers = e;
  },
  98,
);
