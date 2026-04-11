__d(
  "createRelayQPLLogger",
  ["QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return function (n) {
        var t, o;
        switch (n.name) {
          case "execute.next.start":
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(94175236, "2242"),
              n.executeId,
            ),
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                r("qpl")._(94175236, "2242"),
                { string: { name: n.operation.request.node.params.name } },
                { instanceKey: n.executeId },
              ));
            break;
          case "execute.next.end":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(94175236, "2242"),
              2,
              n.executeId,
            );
            break;
          case "store.lookup.start":
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(94189770, "2258"),
            ),
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                r("qpl")._(94189770, "2258"),
                { string: { name: n.selector.node.name } },
              ));
            break;
          case "store.lookup.end":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(94189770, "2258"),
              2,
            );
            break;
          case "store.datachecker.start":
            (e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(94181402, "2267"),
            );
            break;
          case "store.datachecker.end":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(94181402, "2267"),
              2,
            );
            break;
          case "store.gc.start":
            (e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(94175233, "2268"),
            );
            break;
          case "store.gc.interrupted":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(94175233, "2268"),
              96,
            );
            break;
          case "store.gc.end":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(94175233, "2268"),
              2,
            );
            break;
          case "store.notify.start":
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(94175234, "2396"),
            ),
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                r("qpl")._(94175234, "2396"),
                {
                  string: {
                    source:
                      (t =
                        (o = n.sourceOperation) == null
                          ? void 0
                          : o.request.node.params.name) != null
                        ? t
                        : "no-source",
                  },
                },
              ));
            break;
          case "store.notify.complete":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(94175234, "2396"),
              2,
            );
            break;
          case "liveresolver.batch.start":
            (e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(94175235, "2408"),
            );
            break;
          case "liveresolver.batch.end":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(94175235, "2408"),
              2,
            );
            break;
          case "idCollision.typename":
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(94191562, "2853"),
            ),
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                r("qpl")._(94191562, "2853"),
                {
                  string: {
                    name: "idCollision.typename",
                    new_typename: n.new_typename,
                    previous_typename: n.previous_typename,
                  },
                },
              ),
              (e || (e = r("QuickPerformanceLogger"))).markerEnd(
                r("qpl")._(94191562, "2853"),
                2,
              ));
            break;
        }
      };
    }
    l.default = s;
  },
  98,
);
