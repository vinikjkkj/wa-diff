__d(
  "CometBootloaderLoggerUtil",
  [
    "BootloaderEvents",
    "BootloaderEventsPerf",
    "CometBootloaderEventsFalcoEvent",
    "CometTimeSpentNavigation",
    "HasteResponseFalcoEvent",
    "ResourceTimingStore",
    "SiteData",
    "UserTimingUtils",
    "gkx",
    "performance",
    "performanceNavigationStart",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = r("gkx")("20483");
    function c(t) {
      var n = t.bl_sample_rate,
        a = t.hr_sample_rate,
        i = t.parent_lid;
      if (!(s || !(n || a || u === !0))) {
        ((s = !0), o("ResourceTimingStore").init());
        var l = function (t) {
          var e;
          return {
            ms_since_navstart: Math.round(
              t - r("performanceNavigationStart")(),
            ),
            parent_lid: i,
            pkg_cohort: r("SiteData").pkg_cohort,
            request_path:
              (e = r("CometTimeSpentNavigation").getPathInfo()) == null
                ? void 0
                : e.name,
            svn_rev: r("SiteData").client_revision,
          };
        };
        (a &&
          o("BootloaderEvents").onHasteResponse(function (e) {
            return r("HasteResponseFalcoEvent").log(function () {
              var t = o("BootloaderEventsPerf").computeHRData(e),
                n = o("BootloaderEventsPerf").flattenData(t);
              return babelHelpers.extends({}, n, l(t.start_time));
            });
          }),
          u &&
            (o("BootloaderEvents").onBootload(function (t) {
              o("UserTimingUtils").measureModern(
                "Bootloader: " + t.components.join(", "),
                {
                  end: t.callbackEnd - (e || (e = r("performance"))).timeOrigin,
                  start: t.startTime - e.timeOrigin,
                },
                "Bootloader Events",
              );
            }),
            o("BootloaderEvents").onHasteResponse(function (t) {
              o("UserTimingUtils").measureModern(
                "Haste: " + t.source,
                {
                  end: t.jsmodsEnd - (e || (e = r("performance"))).timeOrigin,
                  properties: [["Source Detail", t.sourceDetail]],
                  start: t.startTime - e.timeOrigin,
                },
                "Bootloader Events",
              );
            })));
        var c = function (t, n) {
          var e = o("BootloaderEventsPerf").computeBLData(t),
            a = o("BootloaderEventsPerf").flattenData(e);
          r("CometBootloaderEventsFalcoEvent").log(function () {
            return babelHelpers.extends({}, a, l(e.start_time), { status: n });
          });
        };
        (n &&
          o("BootloaderEvents").onBootload(function (e) {
            return c(e, "SUCCESS");
          }),
          o("BootloaderEvents").onBootloaderCallbackTimeout(function (e) {
            return c(e, "TIMEOUT");
          }));
      }
    }
    l.initLogging = c;
  },
  98,
);
