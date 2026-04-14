__d(
  "useWAWebAiThreadTitle",
  [
    "WAWebAiThreadCollection",
    "WAWebAiThreadGetters",
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebResolveThreadForEntryPoint",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      var n,
        r = s(
          function () {
            if (!e.isBot()) return null;
            var t = o("WAWebChatCollection").ChatCollection.get(e);
            return (t == null ? void 0 : t.aiThreads) == null
              ? new (o("WAWebAiThreadCollection").AiThreadCollection)()
              : t.aiThreads;
          },
          [e],
        ),
        a =
          t == null
            ? null
            : (n = r == null ? void 0 : r.get(t)) != null
              ? n
              : null,
        i = o("useWAWebModelValues").useOptionalModelValues(a, ["id", "title"]);
      if (
        i != null &&
        !(
          t != null &&
          o("WAWebResolveThreadForEntryPoint").isDefaultThread(t) &&
          o("WAWebBotGating").isDefaultThreadRoutingEnabled()
        )
      )
        return o("WAWebAiThreadGetters").getDisplayTitle(i);
    }
    l.default = u;
  },
  98,
);
