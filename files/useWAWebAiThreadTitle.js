__d(
  "useWAWebAiThreadTitle",
  [
    "WAWebAiThreadCollection",
    "WAWebAiThreadGetters",
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebResolveThreadForEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(9),
        r;
      e: {
        if (!e.isBot()) {
          r = null;
          break e;
        }
        var a;
        n[0] !== e
          ? ((a = o("WAWebChatCollection").ChatCollection.get(e)),
            (n[0] = e),
            (n[1] = a))
          : (a = n[1]);
        var i = a;
        if ((i == null ? void 0 : i.aiThreads) == null) {
          var l;
          (n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = new (o("WAWebAiThreadCollection").AiThreadCollection)()),
              (n[2] = l))
            : (l = n[2]),
            (r = l));
          break e;
        }
        r = i.aiThreads;
      }
      var s = r,
        u;
      if (n[3] !== s || n[4] !== t) {
        var c;
        ((u =
          t == null
            ? null
            : (c = s == null ? void 0 : s.get(t)) != null
              ? c
              : null),
          (n[3] = s),
          (n[4] = t),
          (n[5] = u));
      } else u = n[5];
      var d = u,
        m;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = ["id", "title"]), (n[6] = m))
        : (m = n[6]);
      var p = o("useWAWebModelValues").useOptionalModelValues(d, m);
      if (
        p != null &&
        !(
          t != null &&
          o("WAWebResolveThreadForEntryPoint").isDefaultThread(t) &&
          o("WAWebBotGating").isDefaultThreadRoutingEnabled()
        )
      ) {
        var _;
        return (
          n[7] !== p
            ? ((_ = o("WAWebAiThreadGetters").getDisplayTitle(p)),
              (n[7] = p),
              (n[8] = _))
            : (_ = n[8]),
          _
        );
      }
    }
    l.default = u;
  },
  98,
);
