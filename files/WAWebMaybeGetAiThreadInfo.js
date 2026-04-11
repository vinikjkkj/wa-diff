__d(
  "WAWebMaybeGetAiThreadInfo",
  ["WAWebAiThreadTypeUtils", "WAWebThreadUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (t.type === o("WAWebThreadUtils").ThreadType.AiThread) {
        var r = (n = e.aiThreads) == null ? void 0 : n.get(t);
        if (r == null)
          return o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(
            void 0,
            o("WAWebAiThreadTypeUtils").AiThreadType.Default,
          );
        var a = r.aiThreadType,
          i = r.title;
        return o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(i, a);
      }
    }
    l.maybeGetAiThreadInfo = e;
  },
  98,
);
