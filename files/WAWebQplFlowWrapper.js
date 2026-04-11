__d(
  "WAWebQplFlowWrapper",
  ["QPLUserFlow"],
  function (t, n, r, o, a, i, l) {
    var e = {
      markerStart: function (t, n) {
        var e,
          o = (e = n == null ? void 0 : n.instanceKey) != null ? e : 0;
        return (
          r("QPLUserFlow").start(t, {
            annotations: n == null ? void 0 : n.annotations,
            cancelExisting: n == null ? void 0 : n.cancelExisting,
            cancelOnUnload: n == null ? void 0 : n.cancelOnUnload,
            instanceKey: o,
            timeoutInMs: n == null ? void 0 : n.timeoutInMs,
            timestamp: n == null ? void 0 : n.timestamp,
            trackedForLoss: n == null ? void 0 : n.trackedForLoss,
          }),
          {
            instanceKey: o,
            annotate: function (n) {
              r("QPLUserFlow").addAnnotations(t, n, { instanceKey: o });
            },
            addPoint: function (n, a) {
              (r("QPLUserFlow").addPoint(t, n, {
                instanceKey: o,
                timestamp: a == null ? void 0 : a.timestamp,
              }),
                (a == null ? void 0 : a.data) != null &&
                  r("QPLUserFlow").addAnnotations(t, a.data, {
                    instanceKey: o,
                  }));
            },
            end: function (n, r) {
              s(t, n, {
                instanceKey: o,
                timestamp: r == null ? void 0 : r.timestamp,
              });
            },
            drop: function () {
              r("QPLUserFlow").endCancel(t, {
                cancelReason: 4,
                instanceKey: o,
              });
            },
          }
        );
      },
      markerAnnotate: function (t, n, o) {
        r("QPLUserFlow").addAnnotations(t, n, {
          instanceKey: o == null ? void 0 : o.instanceKey,
        });
      },
      markerPoint: function (t, n, o) {
        (r("QPLUserFlow").addPoint(t, n, {
          instanceKey: o == null ? void 0 : o.instanceKey,
          timestamp: o == null ? void 0 : o.timestamp,
        }),
          (o == null ? void 0 : o.data) != null &&
            r("QPLUserFlow").addAnnotations(t, o.data, {
              instanceKey: o == null ? void 0 : o.instanceKey,
            }));
      },
      markerEnd: function (t, n, r) {
        s(t, n, r);
      },
      markerDrop: function (t, n) {
        r("QPLUserFlow").endCancel(t, {
          cancelReason: 4,
          instanceKey: n == null ? void 0 : n.instanceKey,
        });
      },
    };
    function s(e, t, n) {
      var o = n == null ? void 0 : n.instanceKey,
        a = n == null ? void 0 : n.timestamp;
      e: {
        if (t === 2) {
          r("QPLUserFlow").endSuccess(e, { instanceKey: o, timestamp: a });
          break e;
        }
        if (t === 3) {
          r("QPLUserFlow").endFailure(e, "fail", {
            instanceKey: o,
            timestamp: a,
          });
          break e;
        }
        if (t === 113) {
          r("QPLUserFlow").endTimeout(e, { instanceKey: o, timestamp: a });
          break e;
        }
        if (t === 4) {
          r("QPLUserFlow").endCancel(e, {
            cancelReason: 4,
            instanceKey: o,
            timestamp: a,
          });
          break e;
        }
        if (t === 105) {
          r("QPLUserFlow").endCancel(e, {
            cancelReason: 4,
            instanceKey: o,
            timestamp: a,
          });
          break e;
        }
        if (t === 706) {
          r("QPLUserFlow").endCancel(e, {
            cancelReason: 706,
            instanceKey: o,
            timestamp: a,
          });
          break e;
        }
        if (t === 216) {
          r("QPLUserFlow").endCancel(e, {
            cancelReason: 4,
            instanceKey: o,
            timestamp: a,
          });
          break e;
        }
        {
          r("QPLUserFlow").endCancel(e, {
            cancelReason: 4,
            instanceKey: o,
            timestamp: a,
          });
          break e;
        }
      }
    }
    l.QPL = e;
  },
  98,
);
