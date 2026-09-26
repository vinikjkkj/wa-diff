__d(
  "CometVirtualizationMarginStore",
  [
    "CometThrottle",
    "FBLogger",
    "Promise",
    "VirtualizationExperimentSettings",
    "WebAsyncStorage",
    "cometVirtualizationMarginReconcile",
    "cometVirtualizationMarginRecord",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "CometVirtualizationMargin",
      u = 5e3,
      c = !1,
      d = 2,
      m = 0;
    function p(e, t) {
      m >= d ||
        (m++,
        r("FBLogger")("comet_infra")
          .catching(e instanceof Error ? e : r("err")(String(e)))
          .warn(t));
    }
    var _ = new Map(),
      f = (e || (e = n("Promise"))).resolve();
    function g(e, t) {
      return e + ":" + t;
    }
    var h = new Map();
    function y() {
      return c
        ? (e || (e = n("Promise"))).resolve(!1)
        : r("WebAsyncStorage")
            .isOperational()
            .then(function (e) {
              return e.success ? !0 : ((c = !0), !1);
            });
    }
    function C() {
      return y()
        .then(function (t) {
          return new (e || (e = n("Promise")))(function (e) {
            if (!t) {
              e(null);
              return;
            }
            r("WebAsyncStorage").getItem(s, function (t, n) {
              var r;
              if (t != null) {
                (p(t, "Failed to read the persisted virtualization margin"),
                  e(null));
                return;
              }
              e(
                (r = o(
                  "cometVirtualizationMarginRecord",
                ).parsePersistedMarginPayload(n)) != null
                  ? r
                  : o("cometVirtualizationMarginRecord").createEmptyPayload(),
              );
            });
          });
        })
        .catch(function (e) {
          return (
            p(e, "Failed to check the persisted virtualization margin"),
            null
          );
        });
    }
    function b() {
      return C().then(function (e) {
        return e != null
          ? e
          : o("cometVirtualizationMarginRecord").createEmptyPayload();
      });
    }
    function v(e, t) {
      return (
        e != null &&
        e.bottomMargin === t.bottomMargin &&
        e.lastUpdated === t.lastUpdated &&
        e.sampleCount === t.sampleCount &&
        e.topMargin === t.topMargin
      );
    }
    function S(e, t, n, r) {
      var a = h.get(e),
        i = a != null && v(t, a.lastWrittenRecord) ? a.baseRecord : t,
        l = o("cometVirtualizationMarginReconcile").reconcileRecord(
          i,
          n,
          r,
          o("VirtualizationExperimentSettings").getEmaWeightCap(),
        );
      return { baseRecord: i, lastWrittenRecord: l };
    }
    function R() {
      if (_.size !== 0) {
        var t = new Map(_);
        (_.clear(),
          (f = f
            .then(y)
            .then(function (a) {
              return new (e || (e = n("Promise")))(function (e) {
                if (!a || c) {
                  e();
                  return;
                }
                if (r("WebAsyncStorage")._persistentWritesDisabled === !0) {
                  ((c = !0), e());
                  return;
                }
                var n = Date.now(),
                  i = new Map();
                r("WebAsyncStorage").upsertAndSaveAtomic(
                  s,
                  function (e) {
                    var r,
                      a =
                        (r = o(
                          "cometVirtualizationMarginRecord",
                        ).parsePersistedMarginPayload(e)) != null
                          ? r
                          : o(
                              "cometVirtualizationMarginRecord",
                            ).createEmptyPayload();
                    return (
                      t.forEach(function (e, t) {
                        var r,
                          o = e.bucket,
                          l = e.observed,
                          s = e.surface,
                          u = (r = a.records[s]) != null ? r : {},
                          c = S(t, u[o], l, n);
                        ((u[o] = c.lastWrittenRecord),
                          i.set(t, c),
                          (a.records[s] = u));
                      }),
                      o("cometVirtualizationMarginRecord").pruneRecords(a),
                      a
                    );
                  },
                  function (t) {
                    if (t == null) {
                      (i.forEach(function (e, t) {
                        h.set(t, e);
                      }),
                        e());
                      return;
                    }
                    (p(t, "Failed to persist the virtualization margin"), e());
                  },
                );
              });
            })
            .catch(function (e) {
              p(e, "Failed to persist the virtualization margin");
            })));
      }
    }
    var L = r("CometThrottle")(R, u, { leading: !0 });
    function E(e, t, n) {
      c ||
        !o("cometVirtualizationMarginRecord").isValidSurface(e) ||
        (_.set(g(e, t), { bucket: t, observed: n, surface: e }), L());
    }
    function k() {
      (L.cancel(), R());
    }
    ((l.readPersistedMargins = b),
      (l.writeObservedMargin = E),
      (l.flushObservedMargins = k));
  },
  98,
);
