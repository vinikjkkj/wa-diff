__d(
  "WAWebBizAIQE",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBizAIQEExposureMutation.graphql",
    "WAWebBizAIQEPrefetch",
    "WAWebBizAIQEQuery.graphql",
    "WAWebBizAIQESnapshot",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBusinessProfileCollection",
    "WAWebCmd",
    "WAWebEventEmitter",
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
      _ = new (r("WAWebEventEmitter"))(),
      f = ["add"].concat(o("WAWebBizAiAgentStatusUtils").ONBOARDING_EVENTS),
      g = new Map(),
      h = new Map(),
      y = new Map(),
      C = null,
      b = 0,
      v = [],
      S = null,
      R = 0,
      L = new Map(),
      E = 0,
      k = !1,
      I = !1,
      T = 10;
    function D(e) {
      if (!(e.length === 0 || v.length > 0)) {
        v = e;
        var t = o("WAWebBizAIQESnapshot").readBizAIQESnapshot();
        if (t != null && o("WAWebBizAIQESnapshot").isRecentBizAIQESnapshot(t)) {
          S = t.onboarded;
          var n = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
          (n == null || n === t.onboarded) && H(t.values);
        }
        (o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", O),
          B(),
          o("WAWebCmd").Cmd.isOfflineDeliveryEnd && O());
      }
    }
    function x(e) {
      var t;
      return (t = $(e)) != null ? t : !1;
    }
    function $(e) {
      var t;
      if (!o("WAWebBizAiAgentGating").isBizAIQEClientEnabled() || C === !1)
        return null;
      var n = w(e),
        r = h.get(n);
      return r != null ? r.value : (t = g.get(n)) != null ? t : null;
    }
    function P(e, t, a) {
      if ((B(), q(t), !t || !F()))
        return (d || (d = n("Promise"))).resolve("skipped");
      var i = w(e),
        l = y.get(i);
      if (l != null) return l;
      var s = b,
        c = ++E,
        m = a(e)
          .then(function (e) {
            var t, n;
            return s !== b
              ? "skipped"
              : N(
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
              s === b && y.delete(i),
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[BizAI] QE exposure failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("maiba-web-qe-exposure-failed"),
              s === b ? "retry" : "skipped"
            );
          });
      return (y.set(i, m), m);
    }
    function N(e, t, n) {
      if (t == null) {
        var r;
        (y.delete(e),
          n >= ((r = L.get(e)) != null ? r : 0) &&
            h.set(e, { value: null, request: n }));
      } else h.set(e, { value: t, request: n });
      return (_.trigger("updated"), t == null ? "retry" : "complete");
    }
    function M() {
      return b;
    }
    function w(e) {
      var t = e.param,
        n = e.universe;
      return n + ":" + t;
    }
    function A() {
      (o("WAWebCmd").Cmd.off("offline_delivery_end_from_bridge", O),
        f.forEach(function (e) {
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.off(
            e,
            W,
          );
        }),
        (k = !1),
        (I = !1),
        o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch(),
        (b += 1),
        (C = null),
        (R = ++E),
        (L = new Map()),
        (g = new Map()),
        h.clear(),
        y.clear(),
        (v = []),
        (S = null));
    }
    function F() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isBizAIQEClientEnabled()
      );
    }
    function O() {
      if (o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() == null) {
        I = !0;
        return;
      }
      ((I = !1), V(o("WAWebBizAIQESnapshot").readBizAIQESnapshot()) || U());
    }
    function B() {
      k ||
        ((k = !0),
        f.forEach(function (e) {
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.on(
            e,
            W,
          );
        }));
    }
    function W() {
      var e = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
      e != null && (q(e), v.length !== 0 && (I ? O() : S !== e && U()));
    }
    function q(e) {
      if (!(e == null || C === e)) {
        var t = C != null || (S != null && S !== e);
        ((C = e),
          t &&
            (o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch(),
            (b += 1),
            (R = ++E),
            g.clear(),
            h.clear(),
            y.clear(),
            r("WAWebUserPrefsStore").setUser(
              o("WAWebBizAIQESnapshot").BIZ_AI_QE_SNAPSHOT_KEY,
              null,
            )),
          _.trigger("updated"));
      }
    }
    function U() {
      if (o("WAWebCmd").Cmd.isOfflineDeliveryEnd && F()) {
        var e = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
        if (e == null) {
          I = !0;
          return;
        }
        (q(e), (S = e), G(v, e));
      }
    }
    function V(e) {
      return (
        e != null &&
        o("WAWebBizAIQESnapshot").isRecentBizAIQESnapshot(e) &&
        e.onboarded != null &&
        e.onboarded ===
          o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() &&
        v.every(function (t) {
          return e.ids.has(w(t));
        })
      );
    }
    function H(e, t, n) {
      (t === void 0 && (t = 0),
        n === void 0 && (n = new Set(e.keys())),
        (g = e),
        e.forEach(function (e, r) {
          var o = h.get(r);
          n.has(r) &&
            o != null &&
            o.value == null &&
            o.request < t &&
            h.delete(r);
        }),
        _.trigger("updated"));
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = ++E;
          ((R = a), o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch());
          var i = b;
          try {
            var l = yield (d || (d = n("Promise"))).all(
              j(e).map(function (e) {
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
                    return a === R;
                  },
                );
              }),
            );
            if (
              a !== R ||
              i !== b ||
              l.every(function (e) {
                return e == null;
              })
            )
              return;
            var s = {};
            g.forEach(function (e, t) {
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
                    o = w({ universe: t, param: n });
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
                    return u.has(w(e));
                  }) &&
                    Object.keys(s).every(function (e) {
                      return u.has(e);
                    })
                    ? {}
                    : { ids: Array.from(u) },
                ),
              ),
              u.forEach(function (e) {
                return L.set(e, a);
              }),
              H(o("WAWebBizAIQESnapshot").parseBizAIQEValues(s), a, u));
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      for (var t = [], n = 0; n < e.length; n += T) t.push(e.slice(n, n + T));
      return t;
    }
    ((l.EXPOSURE_MUTATION = p),
      (l.BizAIQEEventBus = _),
      (l.prefetchBizAIQEWithoutExposure = D),
      (l.getBizAIQEWithoutExposure = x),
      (l.getBizAIQEValueWithoutExposure = $),
      (l.logBizAIQEExposure = P),
      (l.getBizAIQEExposureGeneration = M),
      (l.getBizAIQEId = w),
      (l.resetBizAIQEForTest = A));
  },
  98,
);
