__d(
  "useWAWebBizAdDeleteMutation",
  [
    "CometRelay",
    "FBLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
                        onCompleted: function (n, o) {
                          var e;
                          if (o != null && o.length > 0) {
                            (r("FBLogger")("wa_ctwa_web").warn(
                              "Ad delete mutation server error: " +
                                o[0].message,
                            ),
                              t({ success: !1, error: "mutation_failed" }));
                            return;
                          }
                          (n == null ||
                          (e = n.wa_delete_boosted_component) == null
                            ? void 0
                            : e.success) === !0
                            ? t({ success: !0 })
                            : (r("FBLogger")("wa_ctwa_web").warn(
                                "Ad delete mutation returned unsuccessful response",
                              ),
                              t({ success: !1, error: "mutation_failed" }));
                        },
                        onError: function (n) {
                          (r("FBLogger")("wa_ctwa_web")
                            .catching(n)
                            .warn("Ad delete mutation network error"),
                            t({ success: !1, error: "mutation_failed" }));
                        },
                      });
                    });
                  },
                  o = yield t();
                if (o.success) return (_(l, e), o);
                (r("FBLogger")("wa_ctwa_web").warn(
                  "Ad delete mutation failed on first attempt, retrying in useWAWebBizAdDeleteMutation",
                ),
                  yield p(d));
                var i = yield t();
                return i.success
                  ? (_(l, e), i)
                  : (r("FBLogger")("wa_ctwa_web").mustfix(
                      "Ad delete mutation failed in useWAWebBizAdDeleteMutation after 2 attempts",
                    ),
                    i);
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
        e[3] !== c || e[4] !== i
          ? ((f = [c, i]), (e[3] = c), (e[4] = i), (e[5] = f))
          : (f = e[5]),
        f
      );
    }
    l.default = f;
  },
  98,
);
