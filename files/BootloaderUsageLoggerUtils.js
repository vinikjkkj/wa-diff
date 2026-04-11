__d(
  "BootloaderUsageLoggerUtils",
  ["SiteData", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("ODS").__setRef("BootloaderUsageLoggerUtils"),
      s = new Set(),
      u = new Set();
    function c(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return n.map(function (t, n) {
        var r = e[n];
        return (
          p(r, "loaded"),
          (function (e) {
            return e === "function"
              ? new Proxy(t, d(r))
              : e === "object"
                ? new Proxy(t, m(r))
                : t;
          })(typeof t)
        );
      });
    }
    function d(e) {
      return {
        apply: function (n, r, o) {
          return (p(e, "used"), Reflect.apply(n, r, o));
        },
      };
    }
    function m(e) {
      return {
        get: function (n, r) {
          return (p(e, "used"), Reflect.get(n, r));
        },
      };
    }
    function p(e, t) {
      var n = t === "loaded" ? u : s;
      n.has(e) || (_(e, t), n.add(e));
    }
    function _(t, n) {
      e.onReady(function (e) {
        e.bumpEntityKey(
          454,
          "bootloader_load_modules." + o("SiteData").pkg_cohort,
          t + ".module_" + n,
        );
      });
    }
    ((l.getProxyArgs = c), (l.bumpODSKey = _));
  },
  98,
);
