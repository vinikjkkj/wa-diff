__d(
  "CometBootloaderErrorLoggerUtil",
  [
    "BootloaderEvents",
    "BootloaderEventsPerf",
    "CometBootloaderErrorsFalcoEvent",
    "CometTimeSpentNavigation",
    "ResourceTimingStore",
    "SiteData",
    "performanceNavigationStart",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t) {
      var n = t.parent_lid;
      ((e = !0), o("ResourceTimingStore").init());
      var a = function (t) {
          var e;
          return {
            ms_since_navstart: Math.round(
              t - r("performanceNavigationStart")(),
            ),
            parent_lid: n,
            pkg_cohort: r("SiteData").pkg_cohort,
            request_path:
              (e = r("CometTimeSpentNavigation").getPathInfo()) == null
                ? void 0
                : e.name,
            svn_rev: r("SiteData").client_revision,
          };
        },
        i = function (t, n) {
          var e = o("BootloaderEventsPerf").computeBLData(t.bootloaderData),
            i = o("BootloaderEventsPerf").flattenData(e);
          r("CometBootloaderErrorsFalcoEvent").log(function () {
            var r = babelHelpers.extends({}, i, a(e.start_time), {
              status: n,
              was_offline: t.offline,
            });
            return (
              t.erroredResources != null &&
                (r.errored_resource_urls = Array.from(t.erroredResources)),
              r
            );
          });
        };
      o("BootloaderEvents").onBootloadError(function (e) {
        i(e, "ERROR");
      });
    }
    l.initLogging = s;
  },
  98,
);
