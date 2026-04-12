__d(
  "useWAWebBizAdPauseMutation",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "WAWebCommonAdsTypes",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebBizAdPauseMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useCallback,
      d = 500,
      m = e !== void 0 ? e : (e = n("useWAWebBizAdPauseMutation.graphql"));
    function p(e) {
      return new (s || (s = n("Promise")))(function (t) {
        window.setTimeout(t, e);
      });
    }
    function _(e, t) {
      o("CometRelay").commitLocalUpdate(e, function (e) {
        var n = e.get(t);
        if (n != null) {
          var r = n.getLinkedRecord("spec");
          r != null && r.setValue("PAUSED", "boosting_status");
        }
      });
    }
    function f() {
      var e = o("CometRelay").useMutation(m),
        t = e[0],
        a = e[1],
        i = o("CometRelay").useRelayEnvironment(),
        l = c(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var a = function () {
                    return new (s || (s = n("Promise")))(function (n) {
                      t({
                        variables: { boostID: e },
                        optimisticUpdater: function (n) {
                          var t = n.get(e);
                          if (t != null) {
                            var r = t.getLinkedRecord("spec");
                            r != null &&
                              r.setValue(
                                o("WAWebCommonAdsTypes").BoostingStatus.PAUSING,
                                "boosting_status",
                              );
                          }
                        },
                        onCompleted: function (t, o) {
                          var e;
                          if (o != null && o.length > 0) {
                            (r("FBLogger")("wa_ctwa_web").warn(
                              "Ad pause mutation server error: " + o[0].message,
                            ),
                              n({ success: !1, error: "mutation_failed" }));
                            return;
                          }
                          (t == null ||
                          (e = t.wa_pause_boosted_component) == null
                            ? void 0
                            : e.id) != null
                            ? n({ success: !0 })
                            : (r("FBLogger")("wa_ctwa_web").warn(
                                "Ad pause mutation returned null response",
                              ),
                              n({ success: !1, error: "mutation_failed" }));
                        },
                        onError: function (t) {
                          (r("FBLogger")("wa_ctwa_web")
                            .catching(r("getErrorSafe")(t))
                            .warn("Ad pause mutation network error"),
                            n({ success: !1, error: "mutation_failed" }));
                        },
                      });
                    });
                  },
                  l = yield a();
                if (l.success) return (_(i, e), l);
                (r("FBLogger")("wa_ctwa_web").warn(
                  "Ad pause mutation failed on first attempt, retrying in useWAWebBizAdPauseMutation",
                ),
                  yield p(d));
                var u = yield a();
                return u.success
                  ? (_(i, e), u)
                  : (r("FBLogger")("wa_ctwa_web").mustfix(
                      "Ad pause mutation failed in useWAWebBizAdPauseMutation after 2 attempts",
                    ),
                    u);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [t, i],
        );
      return [l, a];
    }
    l.default = f;
  },
  98,
);
