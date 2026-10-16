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
    "WAWebSubscriptionsGatingUtils",
    "asyncToGeneratorRuntime",
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
      f = 0,
      g = null,
      h = null,
      y = !1,
      C = 0,
      b = new Set();
    function v() {
      if (
        !o(
          "WAWebSubscriptionsGatingUtils",
        ).customerManagerSubscriptionGatingEnabled()
      )
        return (s || (s = n("Promise"))).resolve(!0);
      if ((P(), g != null))
        return (
          h != null ||
            (h = g.then(function () {
              return ((h = null), v());
            })),
          h
        );
      var t = f,
        a = o("WAWebCustomerManagerAccessStateQuery")
          .fetchCustomerManagerAccessState()
          .then(
            function (e) {
              return (f === t && N(e), !0);
            },
            function (t) {
              var n = r("getErrorSafe")(t);
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[CustomerManager] access state refresh failed",
                      ])),
                  )
                  .catching(n),
                o(
                  "WAWebCustomerManagerSMBUserJourneyLogger",
                ).CustomerManagerUserJourneyLogger.accessStateLoadFailed(
                  n.name,
                ),
                !1
              );
            },
          )
          .finally(function () {
            g = null;
          });
      return ((g = a), a);
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          P();
          var e = C,
            t = yield o(
              "WAWebCustomerManagerStartTrialMutation",
            ).startCustomerManagerTrialOnServer();
          return (C === e && N(t), t);
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return o(
        "WAWebSubscriptionsGatingUtils",
      ).customerManagerSubscriptionGatingEnabled()
        ? _
        : o("WAWebCustomerManagerAccessState").ACCESS_NOT_REQUIRED;
    }
    function E() {
      var e = o("react-compiler-runtime").c(2),
        t = p(M, L),
        n;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = []), (e[0] = n))
        : (n = e[0]),
        d(T, n));
      var r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (e[1] = r))
          : (r = e[1]),
        d(k, r),
        t
      );
    }
    function k() {
      return o(
        "WAWebCustomerManagerAccessDeniedNotifier",
      ).subscribeToCustomerManagerAccessDenied(I);
    }
    function I() {
      return $();
    }
    function T() {
      v();
    }
    function D() {
      return p(M, L);
    }
    function x(e) {
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
                    (i(e), e >= l && $());
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
    function $() {
      v();
    }
    function P() {
      y ||
        ((y = !0),
        o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          (C++, N(null));
        }));
    }
    function N(e) {
      (f++,
        (_ = e),
        b.forEach(function (e) {
          return e();
        }));
    }
    function M(e) {
      return (
        b.add(e),
        function () {
          b.delete(e);
        }
      );
    }
    ((l.refreshCustomerManagerAccessState = v),
      (l.startCustomerManagerTrial = S),
      (l.getCustomerManagerAccessState = L),
      (l.useWAWebCustomerManagerAccessState = E),
      (l.useWAWebCustomerManagerAccessStateSnapshot = D),
      (l.useWAWebCustomerManagerTrialNow = x));
  },
  98,
);
