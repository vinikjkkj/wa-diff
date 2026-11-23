__d(
  "WAWebBizAIQE",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = e !== void 0 ? e : (e = n("WAWebBizAIQEQuery.graphql")),
      m = s !== void 0 ? s : (s = n("WAWebBizAIQEExposureMutation.graphql")),
      p = ["add"].concat(o("WAWebBizAiAgentStatusUtils").ONBOARDING_EVENTS),
      _ = new Map(),
      f = new Map(),
      g = new Map(),
      h = null,
      y = 0,
      C = [],
      b = null,
      v = 0,
      S = new Map(),
      R = 0,
      L = !1,
      E = !1,
      k = 10;
    function I(e) {
      if (!(e.length === 0 || C.length > 0)) {
        C = e;
        var t = o("WAWebBizAIQESnapshot").readBizAIQESnapshot();
        if (t != null && o("WAWebBizAIQESnapshot").isRecentBizAIQESnapshot(t)) {
          b = t.onboarded;
          var n = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
          (n == null || n === t.onboarded) && U(t.values);
        }
        (o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", A),
          F(),
          o("WAWebCmd").Cmd.isOfflineDeliveryEnd && A());
      }
    }
    function T(e) {
      var t;
      return (t = D(e)) != null ? t : !1;
    }
    function D(e) {
      var t;
      if (!o("WAWebBizAiAgentGating").isBizAIQEClientEnabled() || h === !1)
        return null;
      var n = N(e),
        r = f.get(n);
      return r != null ? r.value : (t = _.get(n)) != null ? t : null;
    }
    function x(e, t, n) {
      if ((F(), B(t), !t || !w())) return Promise.resolve("skipped");
      var a = N(e),
        i = g.get(a);
      if (i != null) return i;
      var l = y,
        s = ++R,
        c = n(e)
          .then(function (e) {
            var t, n;
            return l !== y
              ? "skipped"
              : $(
                  a,
                  (t =
                    e == null ||
                    (n =
                      e.xfb_meta_ai_biz_agent_wa_web_experiment_log_exposure) ==
                      null
                      ? void 0
                      : n.value) != null
                    ? t
                    : null,
                  s,
                );
          })
          .catch(function (e) {
            return (
              l === y && g.delete(a),
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[BizAI] QE exposure failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("maiba-web-qe-exposure-failed"),
              l === y ? "retry" : "skipped"
            );
          });
      return (g.set(a, c), c);
    }
    function $(e, t, n) {
      if (t == null) {
        var r;
        (g.delete(e),
          n >= ((r = S.get(e)) != null ? r : 0) &&
            f.set(e, { value: null, request: n }));
      } else f.set(e, { value: t, request: n });
      return (
        o("WAWebBizAIQEEventBus").BizAIQEEventBus.trigger("updated"),
        t == null ? "retry" : "complete"
      );
    }
    function P() {
      return y;
    }
    function N(e) {
      var t = e.param,
        n = e.universe;
      return n + ":" + t;
    }
    function M() {
      (o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch(),
        o("WAWebCmd").Cmd.off("offline_delivery_end_from_bridge", A),
        p.forEach(function (e) {
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.off(
            e,
            O,
          );
        }),
        _.clear(),
        f.clear(),
        g.clear(),
        S.clear(),
        (h = null),
        (y += 1),
        (C = []),
        (b = null),
        (v = ++R),
        (L = !1),
        (E = !1));
    }
    function w() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isBizAIQEClientEnabled()
      );
    }
    function A() {
      if (o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() == null) {
        E = !0;
        return;
      }
      ((E = !1), q(o("WAWebBizAIQESnapshot").readBizAIQESnapshot()) || W());
    }
    function F() {
      L ||
        ((L = !0),
        p.forEach(function (e) {
          o("WAWebBusinessProfileCollection").BusinessProfileCollection.on(
            e,
            O,
          );
        }));
    }
    function O() {
      var e = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
      e != null && (B(e), C.length !== 0 && (E ? A() : b !== e && W()));
    }
    function B(e) {
      if (!(e == null || h === e)) {
        var t = h != null || (b != null && b !== e);
        ((h = e),
          t &&
            (o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch(),
            (y += 1),
            (v = ++R),
            _.clear(),
            f.clear(),
            g.clear(),
            r("WAWebUserPrefsStore").setUser(
              o("WAWebBizAIQESnapshot").BIZ_AI_QE_SNAPSHOT_KEY,
              null,
            )),
          o("WAWebBizAIQEEventBus").BizAIQEEventBus.trigger("updated"));
      }
    }
    function W() {
      if (o("WAWebCmd").Cmd.isOfflineDeliveryEnd && w()) {
        var e = o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState();
        if (e == null) {
          E = !0;
          return;
        }
        (B(e), (b = e), V(C, e));
      }
    }
    function q(e) {
      return (
        e != null &&
        o("WAWebBizAIQESnapshot").isRecentBizAIQESnapshot(e) &&
        e.onboarded != null &&
        e.onboarded ===
          o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() &&
        C.every(function (t) {
          return e.ids.has(N(t));
        })
      );
    }
    function U(e, t, n) {
      (t === void 0 && (t = 0),
        n === void 0 && (n = new Set(e.keys())),
        (_ = e),
        e.forEach(function (e, r) {
          var o = f.get(r);
          n.has(r) &&
            o != null &&
            o.value == null &&
            o.request < t &&
            f.delete(r);
        }),
        o("WAWebBizAIQEEventBus").BizAIQEEventBus.trigger("updated"));
    }
    async function V(e, t) {
      var n = ++R;
      ((v = n), o("WAWebBizAIQEPrefetch").cancelBizAIQEPrefetch());
      var a = y;
      try {
        var i = await Promise.all(
          H(e).map(function (e) {
            return o("WAWebBizAIQEPrefetch").fetchBizAIQEPrefetch(
              d,
              {
                params: e.map(function (e) {
                  var t = e.param,
                    n = e.universe;
                  return { universe: n, param: t };
                }),
              },
              function () {
                return n === v;
              },
            );
          }),
        );
        if (
          n !== v ||
          a !== y ||
          i.every(function (e) {
            return e == null;
          })
        )
          return;
        var l = {};
        _.forEach(function (e, t) {
          l[t] = e;
        });
        var s = new Set();
        (i
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
                o = N({ universe: t, param: n });
              (s.add(o),
                (l[o] = (r = e == null ? void 0 : e.value) != null ? r : null));
            }
          }),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebBizAIQESnapshot").BIZ_AI_QE_SNAPSHOT_KEY,
            babelHelpers.extends(
              { values: l, onboarded: t, ts: o("WATimeUtils").unixTime() },
              e.every(function (e) {
                return s.has(N(e));
              }) &&
                Object.keys(l).every(function (e) {
                  return s.has(e);
                })
                ? {}
                : { ids: Array.from(s) },
            ),
          ),
          s.forEach(function (e) {
            return S.set(e, n);
          }),
          U(o("WAWebBizAIQESnapshot").parseBizAIQEValues(l), n, s));
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
    }
    function H(e) {
      for (var t = [], n = 0; n < e.length; n += k) t.push(e.slice(n, n + k));
      return t;
    }
    ((l.EXPOSURE_MUTATION = m),
      (l.BizAIQEEventBus = o("WAWebBizAIQEEventBus").BizAIQEEventBus),
      (l.prefetchBizAIQEWithoutExposure = I),
      (l.getBizAIQEWithoutExposure = T),
      (l.getBizAIQEValueWithoutExposure = D),
      (l.logBizAIQEExposure = x),
      (l.getBizAIQEExposureGeneration = P),
      (l.getBizAIQEId = N),
      (l.resetBizAIQEForTest = M));
  },
  98,
);
