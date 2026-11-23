__d(
  "WAFlowsLoggingUtils",
  ["$InternalEnum", "SiteData", "flattenArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return {
          fields: r("flattenArray")(
            t.map(function (e) {
              return e.value !== "" && e.value !== void 0 && e.value !== null
                ? [e.key, e.name, e.type, e.value]
                : [];
            }),
          ),
        };
      },
      s = n("$InternalEnum")({
        COMET: "comet",
        BLUE: "blue",
        UNKNOWN: "unknown",
      }),
      u = 68,
      c = function () {
        try {
          return n("SiteData").comet_env === u ? s.COMET : s.BLUE;
        } catch (e) {
          return s.UNKNOWN;
        }
      };
    ((l.buildWAMFields = e), (l.getFlowsControllerType = c));
  },
  98,
);
