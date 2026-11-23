__d(
  "WAWebMaybeUpdateMessageThreadDetails",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebBuildAiThreadUpdateHelper",
    "WAWebThreadMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e) {
      var t = await o(
        "WAWebBuildAiThreadUpdateHelper",
      ).buildAiThreadUpdateHelpers(e);
      if (t == null) return e;
      var n = t.defaultThreadAttributes,
        r = t.targetMsgThreadMap;
      return e.map(function (e) {
        var t;
        if (
          !o("WAWebBotUtils").isMetaAiBot(e.id.remote) ||
          o("WAWebThreadMsgUtils").msgHasAiThread(e)
        )
          return e;
        var a = o("WAWebBotUtils").getBotResponseTargetMsgKey(e),
          i = a != null ? r.get(a.toString()) : null;
        i == null && u(a);
        var l = i != null ? i : n,
          s = l.aiThreadInfo,
          c = l.threadId,
          d = (t = e.threadIds) != null ? t : [];
        return babelHelpers.extends({}, e, {
          threadIds: [].concat(d, [c]),
          aiThreadInfo: s,
        });
      });
    }
    function u(t) {
      var n = t == null ? "no-target-id" : "target-unresolved";
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[maybeUpdateMessageThreadDetails] Meta AI msg routed to default thread (",
              ")",
            ])),
          n,
        )
        .sendLogs("ai-thread-fallback-to-default");
    }
    l.maybeUpdateMessageThreadDetails = s;
  },
  98,
);
