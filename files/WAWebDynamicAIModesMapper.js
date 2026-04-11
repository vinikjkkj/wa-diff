__d(
  "WAWebDynamicAIModesMapper",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.flatMap(function (e) {
        var t,
          n = e.mode_id,
          r = e.subtitle,
          o = e.title,
          a = e.type;
        return n == null || o == null || r == null || a == null
          ? []
          : [
              {
                modeId: Number(n),
                type: a,
                title: o,
                subtitle: r,
                isExperimental: (t = e.is_experimental) != null ? t : !1,
              },
            ];
      });
    }
    l.mapFetchedModesToDynamicAIModeList = e;
  },
  98,
);
