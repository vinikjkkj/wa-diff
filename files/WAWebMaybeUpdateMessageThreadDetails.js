__d(
  "WAWebMaybeUpdateMessageThreadDetails",
  ["WAWebBotUtils", "WAWebBuildAiThreadUpdateHelper", "WAWebThreadMsgUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
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
          i = a != null ? r.get(a.toString()) : null,
          l = i != null ? i : n,
          s = l.aiThreadInfo,
          u = l.threadId,
          c = (t = e.threadIds) != null ? t : [];
        return babelHelpers.extends({}, e, {
          threadIds: [].concat(c, [u]),
          aiThreadInfo: s,
        });
      });
    }
    l.maybeUpdateMessageThreadDetails = e;
  },
  98,
);
