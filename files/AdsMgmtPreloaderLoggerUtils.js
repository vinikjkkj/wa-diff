__d(
  "AdsMgmtPreloaderLoggerUtils",
  [
    "AdsManagerAppConfig",
    "AdsMgmtPreloadingUtils",
    "AdsTTIEventTimes",
    "Arbiter",
    "PreloadingEvent.flow",
    "performanceNavigationStart",
    "preloadedGraphAPI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(e, t, n, a, i) {
      var l,
        s,
        u = r("performanceNavigationStart")(),
        c = Math.max(
          (l = e.serverEnd) != null ? l : 0,
          (s = e.apiEnd) != null ? s : 0,
        );
      c === 0 && a != null && (c = a);
      var d = {
        string: {
          preloader: e.preloader,
          sessionId: o("AdsManagerAppConfig").sessionID,
          queryKey: [e.preloader, e.requestSource, e.queryIndex].join("-"),
        },
        int: { requestedAt: e.requestedAt - u, queryIndex: e.queryIndex },
        point: {},
        marker: {
          start: i === "qpl" ? e.requestedAt : e.requestedAt - u,
          end: i === "qpl" ? c : c - u,
        },
      };
      return (
        e.stringArrayAnnotations &&
          i === "interaction_tracing" &&
          (d.stringArray = e.stringArrayAnnotations),
        t != null &&
          (t.start != null && (d.int.ARRIVAL_DATA = t.start - u),
          t.end != null && (d.int.ARRIVAL_END = t.end - u)),
        e.wpdArrive != null && (d.int.WPD_ARRIVE = e.wpdArrive - u),
        e.serverEnd != null && (d.point.serverEnd = e.serverEnd),
        e.eventType != null &&
          (d.string.eventType = o(
            "PreloadingEvent.flow",
          ).PreloadingEventType.getName(e.eventType)),
        e.requestSource != null && (d.string.requestSource = e.requestSource),
        n != null && (d.int.jsRunStart = n - u),
        a != null && (d.int.DD = a - u),
        e.apiStart != null && (d.point.api_START = e.apiStart),
        e.apiEnd != null && (d.point.api_END = e.apiEnd),
        d
      );
    }
    function u(t) {
      var n = o("AdsTTIEventTimes").getMilestoneMarker("js_run_start"),
        a = o("AdsMgmtPreloadingUtils").getStopPreloadingTime();
      r("Arbiter").subscribeOnce("pagelet_event", function (t, n) {
        var r,
          o = n.event,
          a = n.id,
          i = n.ts;
        if (a.startsWith("adp_")) {
          var l = a.replace(/^adp_(.*)_[a-z0-9]+$/, "$1");
          switch (((e[l] = (r = e[l]) != null ? r : {}), o)) {
            case "prearrive":
              e[l].start = i;
              break;
            case "arrive":
              e[l].end = i;
              break;
          }
        }
      });
      var i = [];
      for (var l of o("preloadedGraphAPI").getPreloadersUsageData()) {
        var u = e[l.preloader],
          c = s(l, u, n, a, t);
        i.push(c);
      }
      return i;
    }
    l.getPreloaderDataToLog = u;
  },
  98,
);
