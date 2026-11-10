__d(
  "WAWebCustomerManagerAccessDebugOverride",
  ["WATimeUtils", "WAWebUICustomizationStore"],
  function (t, n, r, o, a, i, l) {
    var e = [
        { access: "trial_available", title: "Trial available" },
        { access: "trial_30_days_left", title: "Trial: 30 days left" },
        { access: "trial_14_days_left", title: "Trial: 14 days left" },
        { access: "trial_3_days_left", title: "Trial: 3 days left" },
        { access: "trial_expired", title: "Trial ended" },
        { access: "paid_access", title: "Meta One purchased" },
      ],
      s = "customer_manager_debug_access",
      u = 1440 * 60,
      c = new Set(),
      d = null;
    function m() {
      return o("WAWebUICustomizationStore").getCustomization(s, h, null);
    }
    function p(e) {
      ((d = null),
        o("WAWebUICustomizationStore").saveCustomization(s, e),
        c.forEach(function (e) {
          return e();
        }));
    }
    function _() {
      var e = m();
      if (e == null) return null;
      var t = d;
      return (
        (t == null || t.access !== e) &&
          ((t = { access: e, state: y(e, o("WATimeUtils").unixTime()) }),
          (d = t)),
        t.state
      );
    }
    function f() {
      return m() == null ? null : (p("trial_30_days_left"), _());
    }
    function g(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function h(t) {
      var n;
      return (n = e.find(function (e) {
        return e.access === t;
      })) == null
        ? void 0
        : n.access;
    }
    function y(e, t) {
      return e === "trial_available"
        ? { state: "TRIAL_AVAILABLE", trialEndTime: null }
        : e === "trial_30_days_left"
          ? C(30, t)
          : e === "trial_14_days_left"
            ? C(14, t)
            : e === "trial_3_days_left"
              ? C(3, t)
              : e === "trial_expired"
                ? { state: "TRIAL_EXPIRED", trialEndTime: null }
                : e === "paid_access"
                  ? { state: "PAID_ACCESS", trialEndTime: null }
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function C(e, t) {
      return {
        state: "TRIAL_ACTIVE",
        trialEndTime: o("WATimeUtils").castToUnixTime(t + e * u),
      };
    }
    ((l.CUSTOMER_MANAGER_DEBUG_ACCESS_OPTIONS = e),
      (l.getCustomerManagerDebugAccess = m),
      (l.setCustomerManagerDebugAccess = p),
      (l.getCustomerManagerDebugAccessState = _),
      (l.startCustomerManagerDebugTrial = f),
      (l.subscribeToCustomerManagerDebugAccess = g));
  },
  98,
);
