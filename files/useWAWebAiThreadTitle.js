__d(
  "useWAWebAiThreadTitle",
  [
    "WAWebAiThreadGetters",
    "WAWebBotGating",
    "WAWebChatCollection",
    "WAWebResolveThreadForEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(12),
        r;
      if (n[0] !== e) {
        var a;
        ((r =
          e.isBot() &&
          (a = o("WAWebChatCollection").ChatCollection.get(e)) != null
            ? a
            : null),
          (n[0] = e),
          (n[1] = r));
      } else r = n[1];
      var i = r,
        l;
      n[2] !== (i == null ? void 0 : i.aiThreads)
        ? ((l = function () {
            var e;
            return (e = i == null ? void 0 : i.aiThreads) != null ? e : null;
          }),
          (n[2] = i == null ? void 0 : i.aiThreads),
          (n[3] = l))
        : (l = n[3]);
      var u = s(l),
        c = u[0],
        d = u[1],
        m = s(i),
        p = m[0],
        _ = m[1];
      if (i !== p) {
        var f;
        (_(i), d((f = i == null ? void 0 : i.aiThreads) != null ? f : null));
      }
      var g;
      (n[4] !== (i == null ? void 0 : i.aiThreads)
        ? ((g = function () {
            var e;
            d((e = i == null ? void 0 : i.aiThreads) != null ? e : null);
          }),
          (n[4] = i == null ? void 0 : i.aiThreads),
          (n[5] = g))
        : (g = n[5]),
        o("useWAWebListener").useListener(i, "change:aiThreads", g));
      var h;
      if (n[6] !== c || n[7] !== t) {
        var y;
        ((h =
          t == null
            ? null
            : (y = c == null ? void 0 : c.get(t)) != null
              ? y
              : null),
          (n[6] = c),
          (n[7] = t),
          (n[8] = h));
      } else h = n[8];
      var C = h,
        b;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = ["id", "title"]), (n[9] = b))
        : (b = n[9]);
      var v = o("useWAWebModelValues").useOptionalModelValues(C, b);
      if (
        v != null &&
        !(
          t != null &&
          o("WAWebResolveThreadForEntryPoint").isDefaultThread(t) &&
          o("WAWebBotGating").isDefaultThreadRoutingEnabled()
        )
      ) {
        var S;
        return (
          n[10] !== v
            ? ((S = o("WAWebAiThreadGetters").getDisplayTitle(v)),
              (n[10] = v),
              (n[11] = S))
            : (S = n[11]),
          S
        );
      }
    }
    l.default = u;
  },
  98,
);
