__d(
  "WAWebBizAIQEPrefetch",
  [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WAWebBizAIQEError",
    "WAWebBizAIRelayEnvironment",
    "WAWebBizAiAgentGating",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set(),
      c = new (o("WAPromiseQueue").PromiseQueue)(),
      d = 1e3,
      m = 0;
    function p() {
      ((m += 1),
        u.forEach(function (e) {
          return e();
        }),
        u.clear());
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = m,
            a = function () {
              return r === m && n();
            },
            i = yield o(
              "WAWebBizAIRelayEnvironment",
            ).loadBizAIRelayEnvironment();
          return g(i, e, t, a);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            if (!i()) return null;
            try {
              return yield R(t, n, a);
            } catch (l) {
              if (!i()) return null;
              if (!o("WAWebBizAIQEError").canRecoverBizAIQEPrefetch(l)) throw l;
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[BizAI] QE prefetch failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(l))
                  .sendLogs("maiba-web-qe-prefetch-failed"),
                a.params.length <= 1 ? null : y(t, n, a, i)
              );
            }
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, o) {
            var a = !1,
              i = function () {
                return !a && o();
              },
              l = yield (s || (s = n("Promise"))).all(
                r.params.map(function (n) {
                  return c.enqueue(function () {
                    return b(e, t, { params: [n] }, i).catch(function (e) {
                      throw ((a = !0), e);
                    });
                  });
                }),
              );
            return l.every(function (e) {
              return e == null;
            })
              ? null
              : {
                  xfb_meta_ai_biz_agent_wa_web_experiments: l.flatMap(
                    function (e) {
                      var t;
                      return (t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_web_experiments) != null
                        ? t
                        : [];
                    },
                  ),
                };
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return !r() ||
              !o("WAWebBizAiAgentGating").isBizAIQEClientEnabled() ||
              (yield S(), !o("WAWebBizAiAgentGating").isBizAIQEClientEnabled())
              ? null
              : g(e, t, n, r);
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S() {
      return new (s || (s = n("Promise")))(function (e) {
        var t = function () {
            (self.clearTimeout(n), u.delete(t), e());
          },
          n = self.setTimeout(t, d);
        u.add(t);
      });
    }
    function R(e, t, r) {
      return new (s || (s = n("Promise")))(function (n, a) {
        var i = null,
          l = function () {
            i != null && u.delete(i);
          };
        o("WAWebBizAIRelayEnvironment").subscribeBizAIQuery(e, t, r, {
          start: function (t) {
            var e = function () {
              (l(), t.unsubscribe(), n(null));
            };
            ((i = e), u.add(e));
          },
          next: function (t) {
            (n(t), i == null || i());
          },
          error: function (t) {
            (l(), a(t));
          },
          complete: function () {
            (l(), n(null));
          },
        });
      });
    }
    ((l.cancelBizAIQEPrefetch = p), (l.fetchBizAIQEPrefetch = _));
  },
  98,
);
