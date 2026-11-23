__d(
  "WAWebBizAIQEPrefetch",
  [
    "WALogger",
    "WAPromiseQueue",
    "WAWebBizAIQEError",
    "WAWebBizAIRelayEnvironment",
    "WAWebBizAiAgentGating",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set(),
      u = new (o("WAPromiseQueue").PromiseQueue)(),
      c = 1e3,
      d = 0;
    function m() {
      ((d += 1),
        s.forEach(function (e) {
          return e();
        }),
        s.clear());
    }
    async function p(e, t, n) {
      var r = d,
        a = function () {
          return r === d && n();
        },
        i = await o("WAWebBizAIRelayEnvironment").loadBizAIRelayEnvironment();
      return _(i, e, t, a);
    }
    async function _(t, n, a, i) {
      if (!i()) return null;
      try {
        return await y(t, n, a);
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
          a.params.length <= 1 ||
          !o("WAWebBizAIQEError").hasBizAIQEServerErrors(l)
            ? null
            : f(t, n, a, i)
        );
      }
    }
    async function f(e, t, n, r) {
      var o = !1,
        a = function () {
          return !o && r();
        },
        i = await Promise.all(
          n.params.map(function (n) {
            return u.enqueue(function () {
              return g(e, t, { params: [n] }, a).catch(function (e) {
                throw ((o = !0), e);
              });
            });
          }),
        );
      return i.every(function (e) {
        return e == null;
      })
        ? null
        : {
            xfb_meta_ai_biz_agent_wa_web_experiments: i.flatMap(function (e) {
              var t;
              return (t =
                e == null
                  ? void 0
                  : e.xfb_meta_ai_biz_agent_wa_web_experiments) != null
                ? t
                : [];
            }),
          };
    }
    async function g(e, t, n, r) {
      return !r() ||
        !o("WAWebBizAiAgentGating").isBizAIQEClientEnabled() ||
        (await h(), !o("WAWebBizAiAgentGating").isBizAIQEClientEnabled())
        ? null
        : _(e, t, n, r);
    }
    function h() {
      return new Promise(function (e) {
        var t = function () {
            (self.clearTimeout(n), s.delete(t), e());
          },
          n = self.setTimeout(t, c);
        s.add(t);
      });
    }
    function y(e, t, n) {
      return new Promise(function (r, a) {
        var i = null,
          l = function () {
            i != null && s.delete(i);
          };
        o("WAWebBizAIRelayEnvironment").subscribeBizAIQuery(e, t, n, {
          start: function (t) {
            var e = function () {
              (l(), t.unsubscribe(), r(null));
            };
            ((i = e), s.add(e));
          },
          next: function (t) {
            (r(t), i == null || i());
          },
          error: function (t) {
            (l(), a(t));
          },
          complete: function () {
            (l(), r(null));
          },
        });
      });
    }
    ((l.cancelBizAIQEPrefetch = m), (l.fetchBizAIQEPrefetch = p));
  },
  98,
);
