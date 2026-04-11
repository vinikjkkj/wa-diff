__d(
  "useWAWebBizAdResumeMutation",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "WAWebCommonAdsTypes",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdResumeMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useCallback,
      d = 500,
      m = e !== void 0 ? e : (e = n("useWAWebBizAdResumeMutation.graphql"));
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
          r != null && r.setValue("ACTIVE", "boosting_status");
        }
      });
    }
    function f() {
      var e = o("react-compiler-runtime").c(6),
        t = o("CometRelay").useMutation(m),
        a = t[0],
        i = t[1],
        l = o("CometRelay").useRelayEnvironment(),
        u;
      e[0] !== a || e[1] !== l
        ? ((u = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = function () {
                    return new (s || (s = n("Promise")))(function (t) {
                      a({
                        variables: { boostID: e },
                        optimisticUpdater: function (n) {
                          var t = n.get(e);
                          if (t != null) {
                            var r = t.getLinkedRecord("spec");
                            r != null &&
                              r.setValue(
                                o("WAWebCommonAdsTypes").BoostingStatus
                                  .RESUMING,
                                "boosting_status",
                              );
                          }
                        },
                        onCompleted: function (n, o) {
                          var e;
                          if (o != null && o.length > 0) {
                            (r("FBLogger")("wa_ctwa_web").warn(
                              "Ad resume mutation server error: " +
                                o[0].message,
                            ),
                              t({ success: !1, error: "mutation_failed" }));
                            return;
                          }
                          (n == null ||
                          (e = n.wa_resume_boosted_component) == null
                            ? void 0
                            : e.id) != null
                            ? t({ success: !0 })
                            : (r("FBLogger")("wa_ctwa_web").warn(
                                "Ad resume mutation returned null response",
                              ),
                              t({ success: !1, error: "mutation_failed" }));
                        },
                        onError: function (n) {
                          (r("FBLogger")("wa_ctwa_web")
                            .catching(n)
                            .warn("Ad resume mutation network error"),
                            t({ success: !1, error: "mutation_failed" }));
                        },
                      });
                    });
                  },
                  i = yield t();
                if (i.success) return (_(l, e), i);
                (r("FBLogger")("wa_ctwa_web").warn(
                  "Ad resume mutation failed on first attempt, retrying in useWAWebBizAdResumeMutation",
                ),
                  yield p(d));
                var u = yield t();
                return u.success
                  ? (_(l, e), u)
                  : (r("FBLogger")("wa_ctwa_web").mustfix(
                      "Ad resume mutation failed in useWAWebBizAdResumeMutation after 2 attempts",
                    ),
                    u);
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (e[0] = a),
          (e[1] = l),
          (e[2] = u))
        : (u = e[2]);
      var c = u,
        f;
      return (
        e[3] !== i || e[4] !== c
          ? ((f = [c, i]), (e[3] = i), (e[4] = c), (e[5] = f))
          : (f = e[5]),
        f
      );
    }
    l.default = f;
  },
  98,
);
