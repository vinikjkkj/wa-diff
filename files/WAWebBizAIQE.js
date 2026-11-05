__d(
  "WAWebBizAIQE",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBizAIQEEventBus",
    "WAWebBizAIQEExposureMutation.graphql",
    "WAWebBizAIQEPrefetch",
    "WAWebBizAIQEQuery.graphql",
    "WAWebBizAIQESnapshot",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBusinessProfileCollection",
    "WAWebCmd",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = e !== void 0 ? e : (e = n("WAWebBizAIQEQuery.graphql")),
      p = s !== void 0 ? s : (s = n("WAWebBizAIQEExposureMutation.graphql")),
      _ = ["add"].concat(o("WAWebBizAiAgentStatusUtils").ONBOARDING_EVENTS),
      f = new Map(),
      g = new Map(),
      h = new Map(),
      y = null,
      C = 0,
      b = [],
      v = null,
      S = 0,
      R = new Map(),
      L = 0,
      E = !1,
      k = !1,
      I = 10;
    function T(e) {
      if (!(e.length === 0 || b.length > 0)) {
        b = e;
        var t = o("WAWebBizAIQESnapshot").readBizAIQESnapshot();
        if (t != null && o("WAWebBizAIQESnapshot").isRecentBizAIQESnapshot(t)) {
          v = t.onboarded;
          var n = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
          (n == null || n === t.onboarded) && V(t.values);
        }
        (o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", F),
          O(),
          o("WAWebCmd").Cmd.isOfflineDeliveryEnd && F());
      }
    }
    function D(e) {
      var t;
      return (t = x(e)) != null ? t : !1;
    }
    function x(e) {
      var t;
      if (!o("WAWebBizAiAgentGating").isBizAIQEClientEnabled() || y === !1)
        return null;
      var n = M(e),
        r = g.get(n);
      return r != null ? r.value : (t = f.get(n)) != null ? t : null;
    }
    function $(e, t, a) {
      if ((O(), W(t), !t || !A()))
        return (d || (d = n("Promise"))).resolve("skipped");
      var i = M(e),
        l = h.get(i);
      if (l != null) return l;
      var s = C,
        c = ++L,
        m = a(e)
          .then(function (e) {
            var t, n;
            return s !== C
              ? "skipped"
              : P(
                  i,
                  (t =
                    e == null ||
                    (n =
                      e.xfb_meta_ai_biz_agent_wa_web_experiment_log_exposure) ==
                      null
                      ? void 0
                      : n.value) != null
                    ? t
                    : null,
                  c,
                );
          })
          .catch(function (e) {
            return (
              s === C && h.delete(i),
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[BizAI] QE exposure failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("maiba-web-qe-exposure-failed"),
              s === C ? "retry" : "skipped"
            );
          });
      return (h.set(i, m), m);
    }
    function P(e, t, n) {
      if (t == null) {
        var r;
        (h.delete(e),
          n >= ((r = R.get(e)) != null ? r : 0) &&
            g.set(e, { value: null, request: n }));
      } else g.set(e, { value: t, request: n });
      return (
        o("WAWebBizAIQEEventBus").BizAIQEEventBus.trigger("updated"),
        t == null ? "retry" : "complete"
      );
    }
    function N() {
      return C;
    }
    function M(e) {
      var t = e.param,
        n = e.universe;
      return n + ":" + t;
    }
    function w() {
      (o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch(),
        o("WAWebCmd").Cmd.off("offline_delivery_end_from_bridge", F),
        _.forEach(function (e) {
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.off(
            e,
            B,
          );
        }),
        f.clear(),
        g.clear(),
        h.clear(),
        R.clear(),
        (y = null),
        (C += 1),
        (b = []),
        (v = null),
        (S = ++L),
        (E = !1),
        (k = !1));
    }
    function A() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isBizAIQEClientEnabled()
      );
    }
    function F() {
      if (o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() == null) {
        k = !0;
        return;
      }
      ((k = !1), U(o("WAWebBizAIQESnapshot").readBizAIQESnapshot()) || q());
    }
    function O() {
      E ||
        ((E = !0),
        _.forEach(function (e) {
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.on(
            e,
            B,
          );
        }));
    }
    function B() {
      var e = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
      e != null && (W(e), b.length !== 0 && (k ? F() : v !== e && q()));
    }
    function W(e) {
      if (!(e == null || y === e)) {
        var t = y != null || (v != null && v !== e);
        ((y = e),
          t &&
            (o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch(),
            (C += 1),
            (S = ++L),
            f.clear(),
            g.clear(),
            h.clear(),
            r("WAWebUserPrefsStore").setUser(
              o("WAWebBizAIQESnapshot").BIZ_AI_QE_SNAPSHOT_KEY,
              null,
            )),
          o("WAWebBizAIQEEventBus").BizAIQEEventBus.trigger("updated"));
      }
    }
    function q() {
      if (o("WAWebCmd").Cmd.isOfflineDeliveryEnd && A()) {
        var e = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
        if (e == null) {
          k = !0;
          return;
        }
        (W(e), (v = e), H(b, e));
      }
    }
    function U(e) {
      return (
        e != null &&
        o("WAWebBizAIQESnapshot").isRecentBizAIQESnapshot(e) &&
        e.onboarded != null &&
        e.onboarded ===
          o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() &&
        b.every(function (t) {
          return e.ids.has(M(t));
        })
      );
    }
    function V(e, t, n) {
      (t === void 0 && (t = 0),
        n === void 0 && (n = new Set(e.keys())),
        (f = e),
        e.forEach(function (e, r) {
          var o = g.get(r);
          n.has(r) &&
            o != null &&
            o.value == null &&
            o.request < t &&
            g.delete(r);
        }),
        o("WAWebBizAIQEEventBus").BizAIQEEventBus.trigger("updated"));
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = ++L;
          ((S = a), o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch());
          var i = C;
          try {
            var l = yield (d || (d = n("Promise"))).all(
              z(e).map(function (e) {
                return o("WAWebBizAIQEPrefetch").fetchBizAIQEPrefetch(
                  m,
                  {
                    params: e.map(function (e) {
                      var t = e.param,
                        n = e.universe;
                      return { universe: n, param: t };
                    }),
                  },
                  function () {
                    return a === S;
                  },
                );
              }),
            );
            if (
              a !== S ||
              i !== C ||
              l.every(function (e) {
                return e == null;
              })
            )
              return;
            var s = {};
            f.forEach(function (e, t) {
              s[t] = e;
            });
            var u = new Set();
            (l
              .flatMap(function (e) {
                var t;
                return (t =
                  e == null
                    ? void 0
                    : e.xfb_meta_ai_biz_agent_wa_web_experiments) != null
                  ? t
                  : [];
              })
              .forEach(function (e) {
                var t = e == null ? void 0 : e.universe,
                  n = e == null ? void 0 : e.param;
                if (t != null && n != null) {
                  var r,
                    o = M({ universe: t, param: n });
                  (u.add(o),
                    (s[o] =
                      (r = e == null ? void 0 : e.value) != null ? r : null));
                }
              }),
              r("WAWebUserPrefsStore").setUser(
                o("WAWebBizAIQESnapshot").BIZ_AI_QE_SNAPSHOT_KEY,
                babelHelpers.extends(
                  { values: s, onboarded: t, ts: o("WATimeUtils").unixTime() },
                  e.every(function (e) {
                    return u.has(M(e));
                  }) &&
                    Object.keys(s).every(function (e) {
                      return u.has(e);
                    })
                    ? {}
                    : { ids: Array.from(u) },
                ),
              ),
              u.forEach(function (e) {
                return R.set(e, a);
              }),
              V(o("WAWebBizAIQESnapshot").parseBizAIQEValues(s), a, u));
          } catch (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] QE prefetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("maiba-web-qe-prefetch-failed");
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      for (var t = [], n = 0; n < e.length; n += I) t.push(e.slice(n, n + I));
      return t;
    }
    ((l.EXPOSURE_MUTATION = p),
      (l.BizAIQEEventBus = o("WAWebBizAIQEEventBus").BizAIQEEventBus),
      (l.prefetchBizAIQEWithoutExposure = T),
      (l.getBizAIQEWithoutExposure = D),
      (l.getBizAIQEValueWithoutExposure = x),
      (l.logBizAIQEExposure = $),
      (l.getBizAIQEExposureGeneration = N),
      (l.getBizAIQEId = M),
      (l.resetBizAIQEForTest = w));
  },
  98,
);
