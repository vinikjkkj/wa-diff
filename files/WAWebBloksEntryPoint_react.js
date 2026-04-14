__d(
  "WAWebBloksEntryPoint.react",
  [
    "WAWebBloksEnvironment",
    "WAWebStopEvent",
    "WAWebUnifiedResponseLoaderTemplate",
    "WebBloksEntryPoint.react",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = e._componentQueryPayload,
        n = e.componentData,
        a = e.componentType,
        i = e.theme,
        l = e.uuid,
        c = o("WAWebBloksEnvironment").useWAWebBloksEnvironment({
          disableHistoryStack: !0,
          embedded: !0,
        }),
        d = u(
          function () {
            var e = { type: a, data: n };
            return (l != null && (e.uuid = l), e);
          },
          [a, n, l],
        );
      return s.jsx("div", {
        onKeyDown: o("WAWebStopEvent").stopPropagation,
        onKeyUp: o("WAWebStopEvent").stopPropagation,
        onKeyPress: o("WAWebStopEvent").stopPropagation,
        children: s.jsx(r("WebBloksEntryPoint.react"), {
          environment: c,
          payload: o("WebBloksUtils").cast(
            o("WAWebUnifiedResponseLoaderTemplate").LOADER_TEMPLATE,
          ),
          initialFetchParams: { appId: "", params: d },
          theme: i,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
