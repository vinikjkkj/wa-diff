__d(
  "useWAWebBizAdDeleteMutation",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebBizAdDeleteMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useCallback,
      d = 500,
      m = e !== void 0 ? e : (e = n("useWAWebBizAdDeleteMutation.graphql"));
    function p(e) {
      return new (s || (s = n("Promise")))(function (t) {
        window.setTimeout(t, e);
      });
    }
    function _(e, t) {
      o("CometRelay").commitLocalUpdate(e, function (e) {
        e.delete(t);
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
                var o = function () {
                    return new (s || (s = n("Promise")))(function (n) {
                      t({
                        variables: { boostID: e },
                        onCompleted: function (t, o) {
                          var e;
                          if (o != null && o.length > 0) {
                            (r("FBLogger")("wa_ctwa_web").warn(
                              "Ad delete mutation server error: " +
                                o[0].message,
                            ),
                              n({ success: !1, error: "mutation_failed" }));
                            return;
                          }
                          (t == null ||
                          (e = t.wa_delete_boosted_component) == null
                            ? void 0
                            : e.success) === !0
                            ? n({ success: !0 })
                            : (r("FBLogger")("wa_ctwa_web").warn(
                                "Ad delete mutation returned unsuccessful response",
                              ),
                              n({ success: !1, error: "mutation_failed" }));
                        },
                        onError: function (t) {
                          (r("FBLogger")("wa_ctwa_web")
                            .catching(t)
                            .warn("Ad delete mutation network error"),
                            n({ success: !1, error: "mutation_failed" }));
                        },
                      });
                    });
                  },
                  a = yield o();
                if (a.success) return (_(i, e), a);
                (r("FBLogger")("wa_ctwa_web").warn(
                  "Ad delete mutation failed on first attempt, retrying in useWAWebBizAdDeleteMutation",
                ),
                  yield p(d));
                var l = yield o();
                return l.success
                  ? (_(i, e), l)
                  : (r("FBLogger")("wa_ctwa_web").mustfix(
                      "Ad delete mutation failed in useWAWebBizAdDeleteMutation after 2 attempts",
                    ),
                    l);
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
