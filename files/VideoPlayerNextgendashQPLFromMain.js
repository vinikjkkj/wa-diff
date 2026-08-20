__d(
  "VideoPlayerNextgendashQPLFromMain",
  ["QuickLogActionType", "QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var o,
        a =
          n.event === "START_PLAYING"
            ? r("qpl")._(424476673, "93")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n.event,
                );
              })();
      if (
        !(
          n.method !== "markerStart" &&
          !(e || (e = r("QuickPerformanceLogger"))).isMarkerOn(
            a,
            (o = n.instanceKey) != null ? o : 0,
          )
        )
      )
        switch (n.method) {
          case "markerStart": {
            (e || (e = r("QuickPerformanceLogger"))).markerStart(
              a,
              n.instanceKey,
              n.timestamp,
              { cancelExisting: !0, cancelOnUnload: !0 },
            );
            return;
          }
          case "markerAnnotate": {
            (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
              a,
              n.annotations,
              { instanceKey: n.instanceKey },
            );
            return;
          }
          case "markerPoint": {
            (e || (e = r("QuickPerformanceLogger"))).markerPoint(a, n.point, {
              data: n.annotations,
              instanceKey: n.instanceKey,
              timestamp: n.timestamp,
            });
            return;
          }
          case "markerEnd": {
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              a,
              r("QuickLogActionType")[n.action],
              n.instanceKey,
              n.timestamp,
            );
            return;
          }
          default:
            n.method;
            return;
        }
    }
    l.qplCallFromMain = s;
  },
  98,
);
