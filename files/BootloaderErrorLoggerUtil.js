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
  function (t, n, r, o, a, i) {
    var e = !1,
      l = {
        initLogging: function (r) {
          var t = r.parent_lid;
          if (!e) {
            ((e = !0), n("ResourceTimingStore").init());
            var o = function (r) {
              return {
                ms_since_navstart: Math.round(
                  r - n("performanceNavigationStart")(),
                ),
                parent_lid: t,
                pkg_cohort: n("SiteData").pkg_cohort,
                request_path: n("ScriptPath").getScriptPath(),
                ef_page: n("ScriptPath").getEarlyFlushPage(),
                svn_rev: n("SiteData").client_revision,
              };
            };
            n("BootloaderEvents").onBootloadError(function (e) {
              return n("BootloaderErrorsFalcoEvent").log(function () {
                var t = n("BootloaderEventsPerf").computeBLData(
                    e.bootloaderData,
                  ),
                  r = n("BootloaderEventsPerf").flattenData(t),
                  a = babelHelpers.extends({}, r, o(t.start_time), {
                    status: "ERROR",
                    was_offline: e.offline,
                  });
                return (
                  e.erroredResources != null &&
                    (a.errored_resource_urls = Array.from(e.erroredResources)),
                  a
                );
              });
            });
          }
        },
      };
    a.exports = l;
  },
  null,
);
