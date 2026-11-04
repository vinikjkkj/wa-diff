__d(
  "BootloaderErrorLoggerUtil",
  [
    "BootloaderErrorsFalcoEvent",
    "BootloaderEvents",
    "BootloaderEventsPerf",
    "ResourceTimingStore",
    "ScriptPath",
    "SiteData",
    "performanceNavigationStart",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = {
        initLogging: function (n) {
          var t = n.parent_lid;
          if (!e) {
            ((e = !0), o("ResourceTimingStore").init());
            var a = function (n) {
              return {
                ms_since_navstart: Math.round(
                  n - r("performanceNavigationStart")(),
                ),
                parent_lid: t,
                pkg_cohort: r("SiteData").pkg_cohort,
                request_path: o("ScriptPath").getScriptPath(),
                ef_page: o("ScriptPath").getEarlyFlushPage(),
                svn_rev: r("SiteData").client_revision,
              };
            };
            o("BootloaderEvents").onBootloadError(function (e) {
              return r("BootloaderErrorsFalcoEvent").log(function () {
                var t = o("BootloaderEventsPerf").computeBLData(
                    e.bootloaderData,
                  ),
                  n = o("BootloaderEventsPerf").flattenData(t),
                  r = babelHelpers.extends({}, n, a(t.start_time), {
                    status: "ERROR",
                    was_offline: e.offline,
                  });
                return (
                  e.erroredResources != null &&
                    (r.errored_resource_urls = Array.from(e.erroredResources)),
                  r
                );
              });
            });
          }
        },
      };
    i.exports = s;
  },
  34,
);
