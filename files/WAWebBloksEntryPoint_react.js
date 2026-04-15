__d(
  "WAWebBloksEntryPoint.react",
  [
    "WAWebBloksEnvironment",
    "WAWebStopEvent",
    "WAWebUnifiedResponseLoaderTemplate",
    "WebBloksEntryPoint.react",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.componentData,
        a = e.componentType,
        i = e.theme,
        l = e.uuid,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { disableHistoryStack: !0, embedded: !0 }), (t[0] = u))
        : (u = t[0]);
      var c = o("WAWebBloksEnvironment").useWAWebBloksEnvironment(u),
        d;
      t[1] !== n || t[2] !== a || t[3] !== l
        ? ((d = { type: a, data: n }),
          l != null && (d.uuid = l),
          (t[1] = n),
          (t[2] = a),
          (t[3] = l),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o("WebBloksUtils").cast(
            o("WAWebUnifiedResponseLoaderTemplate").LOADER_TEMPLATE,
          )),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== m
        ? ((_ = { appId: "", params: m }), (t[6] = m), (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== c || t[9] !== _ || t[10] !== i
          ? ((f = s.jsx("div", {
              onKeyDown: o("WAWebStopEvent").stopPropagation,
              onKeyUp: o("WAWebStopEvent").stopPropagation,
              onKeyPress: o("WAWebStopEvent").stopPropagation,
              children: s.jsx(r("WebBloksEntryPoint.react"), {
                environment: c,
                payload: p,
                initialFetchParams: _,
                theme: i,
              }),
            })),
            (t[8] = c),
            (t[9] = _),
            (t[10] = i),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    l.default = c;
  },
  98,
);
