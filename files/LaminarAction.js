__d(
  "LaminarAction",
  [
    "AdsDataAtomShared",
    "AdsDataDispatchUtils",
    "LaminarInfiniteDispatchDetector",
    "QuickPerformanceLogger",
    "Random",
    "filterNulls",
    "gkx",
    "qpl",
    "renameFunction",
    "setInterval",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = { "adsmanager.facebook.com": 10, "business.facebook.com": 10 },
      c = (e = u[window.location.hostname]) != null ? e : 1,
      d = r("Random").coinflip(c) && r("gkx")("21048"),
      m = d ? new Set() : null,
      p = d ? new Set() : null;
    m != null &&
      p != null &&
      r("setInterval")(function () {
        if (m.size > 0) {
          for (var e of m) p.add(e);
          ((s || (s = r("QuickPerformanceLogger"))).markEvent(
            r("qpl")._(41486318, "268"),
            "laminar_actions_dispatched",
            7,
            {
              annotations: {
                string: {
                  hostname: window.location.hostname,
                  path_prefix: window.location.pathname.split("/")[1],
                },
                string_array: { dispatched_actions: Array.from(m) },
              },
            },
          ),
            m.clear());
        }
      }, 120 * 1e3);
    function _(e, t, n, a) {
      var i = function (l, s) {
        var i = s == null ? void 0 : s.module,
          u = s == null ? void 0 : s.line;
        o("LaminarInfiniteDispatchDetector").trackDispatch(n, i, u);
        var c = r("filterNulls")(e()),
          d = r("filterNulls")(t());
        (p != null && !p.has(n) && (m == null || m.add(n)),
          r("AdsDataAtomShared").dispatchAction(
            o("AdsDataDispatchUtils").mergeParameters(n, c, d, l, a, s),
            s,
          ));
      };
      return (r("renameFunction")(i, n), { dispatch: i, actionType: n });
    }
    l.create = _;
  },
  98,
);
