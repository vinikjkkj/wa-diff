__d(
  "WAWebCustomerManagerAccessStore",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebCmd",
    "WAWebCustomerManagerAccessDeniedNotifier",
    "WAWebCustomerManagerAccessState",
    "WAWebCustomerManagerAccessStateQuery",
    "WAWebCustomerManagerSMBUserJourneyLogger",
    "WAWebCustomerManagerStartTrialMutation",
    "WAWebNetworkStatus",
    "WAWebSubscriptionsGatingUtils",
    "asyncToGeneratorRuntime",
    "cr:18944",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useEffect,
      m = c.useState,
      p = c.useSyncExternalStore,
      _ = null,
      f = !1,
      g = 0,
      h = null,
      y = null,
      C = !1,
      b = 0,
      v = new Set();
    function S() {
      if (
        !o(
          "WAWebSubscriptionsGatingUtils",
        ).customerManagerSubscriptionGatingEnabled()
      )
        return (s || (s = n("Promise"))).resolve(!0);
      if ((M(), h != null))
        return (
          y != null ||
            (y = h.then(function () {
              return ((y = null), S());
            })),
          y
        );
      var t = g;
      r("WAWebNetworkStatus").online || A();
      var a = o("WAWebCustomerManagerAccessStateQuery")
        .fetchCustomerManagerAccessState()
        .then(
          function (e) {
            return (g === t && F(e), !0);
          },
          function (n) {
            var a = r("getErrorSafe")(n);
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomerManager] access state refresh failed",
                    ])),
                )
                .catching(a),
              o(
                "WAWebCustomerManagerSMBUserJourneyLogger",
              ).CustomerManagerUserJourneyLogger.accessStateLoadFailed(a.name),
              g === t && y == null && A(),
              !1
            );
          },
        )
        .finally(function () {
          h = null;
        });
      return ((h = a), a);
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
            n("cr:18944") == null
              ? void 0
              : n("cr:18944").startCustomerManagerDebugTrial();
          if (e != null) return e;
          M();
          var t = b,
            r = yield o(
              "WAWebCustomerManagerStartTrialMutation",
            ).startCustomerManagerTrialOnServer();
          return (b === t && F(r), r);
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      var e;
      return o(
        "WAWebSubscriptionsGatingUtils",
      ).customerManagerSubscriptionGatingEnabled()
        ? (e =
            n("cr:18944") == null
              ? void 0
              : n("cr:18944").getCustomerManagerDebugAccessState()) != null
          ? e
          : _
        : o("WAWebCustomerManagerAccessState").ACCESS_NOT_REQUIRED;
    }
    function k() {
      var e = o("react-compiler-runtime").c(2),
        t = p(B, E),
        n;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = []), (e[0] = n))
        : (n = e[0]),
        d(D, n));
      var r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (e[1] = r))
          : (r = e[1]),
        d(I, r),
        t
      );
    }
    function I() {
      return o(
        "WAWebCustomerManagerAccessDeniedNotifier",
      ).subscribeToCustomerManagerAccessDenied(T);
    }
    function T() {
      return N();
    }
    function D() {
      S();
    }
    function x() {
      return p(B, E);
    }
    function $() {
      return p(B, w);
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(4),
        n = m(o("WATimeUtils").unixTime),
        a = n[0],
        i = n[1],
        l =
          (e == null ? void 0 : e.state) === "TRIAL_ACTIVE"
            ? e.trialEndTime
            : null,
        s,
        u;
      return (
        t[0] !== a || t[1] !== l
          ? ((s = function () {
              if (l != null) {
                var e = o(
                  "WAWebCustomerManagerAccessState",
                ).getNextTrialDayChangeTime(l, a);
                if (e != null) {
                  var t = r("WAWebAlarm").setGlobalTimeout(function () {
                    var e = o("WATimeUtils").unixTime();
                    (i(e), e >= l && N());
                  }, o("WATimeUtils").castUnixTimeToMillisTime(e));
                  return function () {
                    return r("WAWebAlarm").clearTimeout(t);
                  };
                }
              }
            }),
            (u = [l, a]),
            (t[0] = a),
            (t[1] = l),
            (t[2] = s),
            (t[3] = u))
          : ((s = t[2]), (u = t[3])),
        d(s, u),
        a
      );
    }
    function N() {
      S();
    }
    function M() {
      C ||
        ((C = !0),
        o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          (b++, F(null));
        }));
    }
    function w() {
      return E() == null && !f;
    }
    function A() {
      ((f = !0), O());
    }
    function F(e) {
      (g++, (_ = e), (f = !1), O());
    }
    function O() {
      v.forEach(function (e) {
        return e();
      });
    }
    function B(e) {
      v.add(e);
      var t =
        n("cr:18944") == null
          ? void 0
          : n("cr:18944").subscribeToCustomerManagerDebugAccess(e);
      return function () {
        (v.delete(e), t == null || t());
      };
    }
    ((l.refreshCustomerManagerAccessState = S),
      (l.startCustomerManagerTrial = R),
      (l.getCustomerManagerAccessState = E),
      (l.useWAWebCustomerManagerAccessState = k),
      (l.useWAWebCustomerManagerAccessStateSnapshot = x),
      (l.useWAWebCustomerManagerIsAccessStatePending = $),
      (l.useWAWebCustomerManagerTrialNow = P));
  },
  98,
);
