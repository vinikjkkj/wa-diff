__d(
  "WAWebCustomerManagerAccessStore",
  [
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
    "cr:18944",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState,
      m = u.useSyncExternalStore,
      p = null,
      _ = 0,
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
        return Promise.resolve(!0);
      if ((x(), g != null))
        return (
          h != null ||
            (h = g.then(function () {
              return ((h = null), v());
            })),
          h
        );
      if (!r("WAWebNetworkStatus").online) return (N(), Promise.resolve(!1));
      var t = f,
        n = o("WAWebCustomerManagerAccessStateQuery")
          .fetchCustomerManagerAccessState()
          .then(
            function (e) {
              return (f === t && M(e), !0);
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
                ).CustomerManagerUserJourneyLogger.accessStateLoadFailed(
                  a.name,
                ),
                f === t && h == null && N(),
                !1
              );
            },
          )
          .finally(function () {
            g = null;
          });
      return ((g = n), n);
    }
    async function S() {
      var e =
        n("cr:18944") == null
          ? void 0
          : n("cr:18944").startCustomerManagerDebugTrial();
      if (e != null) return e;
      x();
      var t = C,
        r = await o(
          "WAWebCustomerManagerStartTrialMutation",
        ).startCustomerManagerTrialOnServer();
      return (C === t && M(r), r);
    }
    function R() {
      var e;
      return o(
        "WAWebSubscriptionsGatingUtils",
      ).customerManagerSubscriptionGatingEnabled()
        ? (e =
            n("cr:18944") == null
              ? void 0
              : n("cr:18944").getCustomerManagerDebugAccessState()) != null
          ? e
          : p
        : o("WAWebCustomerManagerAccessState").ACCESS_NOT_REQUIRED;
    }
    function L() {
      var e = m(A, R);
      return (
        c(function () {
          v();
        }, []),
        c(function () {
          return o(
            "WAWebCustomerManagerAccessDeniedNotifier",
          ).subscribeToCustomerManagerAccessDenied(function () {
            return D();
          });
        }, []),
        e
      );
    }
    function E() {
      return m(A, R);
    }
    function k() {
      return m(A, $);
    }
    function I() {
      return m(A, P);
    }
    function T(e) {
      var t = d(o("WATimeUtils").unixTime),
        n = t[0],
        a = t[1],
        i =
          (e == null ? void 0 : e.state) === "TRIAL_ACTIVE"
            ? e.trialEndTime
            : null;
      return (
        c(
          function () {
            if (i != null) {
              var e = o(
                "WAWebCustomerManagerAccessState",
              ).getNextTrialDayChangeTime(i, n);
              if (e != null) {
                var t = r("WAWebAlarm").setGlobalTimeout(function () {
                  var e = o("WATimeUtils").unixTime();
                  (a(e), e >= i && D());
                }, o("WATimeUtils").castUnixTimeToMillisTime(e));
                return function () {
                  return r("WAWebAlarm").clearTimeout(t);
                };
              }
            }
          },
          [i, n],
        ),
        n
      );
    }
    function D() {
      v();
    }
    function x() {
      y ||
        ((y = !0),
        o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          (C++, M(null));
        }));
    }
    function $() {
      return R() == null;
    }
    function P() {
      return _;
    }
    function N() {
      (_++, w());
    }
    function M(e) {
      (f++, (p = e), w());
    }
    function w() {
      b.forEach(function (e) {
        return e();
      });
    }
    function A(e) {
      b.add(e);
      var t =
        n("cr:18944") == null
          ? void 0
          : n("cr:18944").subscribeToCustomerManagerDebugAccess(e);
      return function () {
        (b.delete(e), t == null || t());
      };
    }
    ((l.refreshCustomerManagerAccessState = v),
      (l.startCustomerManagerTrial = S),
      (l.getCustomerManagerAccessState = R),
      (l.useWAWebCustomerManagerAccessState = L),
      (l.useWAWebCustomerManagerAccessStateSnapshot = E),
      (l.useWAWebCustomerManagerIsAccessStatePending = k),
      (l.useWAWebCustomerManagerAccessLookupFailureCount = I),
      (l.useWAWebCustomerManagerTrialNow = T));
  },
  98,
);
