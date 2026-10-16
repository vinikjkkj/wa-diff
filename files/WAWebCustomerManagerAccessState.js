__d(
  "WAWebCustomerManagerAccessState",
  ["WATimeUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 86400,
      s = 14,
      u = 3,
      c = new Map([
        ["ACCESS_NOT_REQUIRED", "ACCESS_NOT_REQUIRED"],
        ["PAID_ACCESS", "PAID_ACCESS"],
        ["TRIAL_AVAILABLE", "TRIAL_AVAILABLE"],
        ["TRIAL_ACTIVE", "TRIAL_ACTIVE"],
        ["TRIAL_EXPIRED", "TRIAL_EXPIRED"],
        ["TRIAL_UNAVAILABLE", "TRIAL_UNAVAILABLE"],
      ]),
      d = { state: "ACCESS_NOT_REQUIRED", trialEndTime: null },
      m = { daysLeft: null, stage: "none" },
      p = { daysLeft: null, stage: "trial_start" },
      _ = { daysLeft: null, stage: "locked" };
    function f(e, t) {
      var n = c.get(e);
      return n == null
        ? null
        : {
            state: n,
            trialEndTime: t == null ? null : o("WATimeUtils").castToUnixTime(t),
          };
    }
    function g(e, t) {
      var n = typeof e == "string" ? f(e, t) : null;
      if (n == null)
        throw r("err")("[CustomerManager] unrecognized access state response");
      return n;
    }
    function h(e, t) {
      return e == null ||
        e.state === "ACCESS_NOT_REQUIRED" ||
        e.state === "PAID_ACCESS"
        ? m
        : e.state === "TRIAL_AVAILABLE"
          ? p
          : e.state === "TRIAL_EXPIRED" || e.state === "TRIAL_UNAVAILABLE"
            ? _
            : e.state === "TRIAL_ACTIVE"
              ? R(e.trialEndTime, t)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e.state,
                  );
                })();
    }
    function y(e, t) {
      if (e == null) return !1;
      var n = h(e, t),
        r = n.stage;
      return r !== "trial_start" && r !== "locked";
    }
    function C(e) {
      return e.stage === "trial_start" || e.stage === "locked";
    }
    function b(e, t) {
      return e && !C(t);
    }
    function v(t, n) {
      return Math.max(1, Math.ceil((t - n) / e));
    }
    function S(t, n) {
      return t <= n
        ? null
        : o("WATimeUtils").castToUnixTime(t - (v(t, n) - 1) * e);
    }
    function R(e, t) {
      if (e == null) return m;
      if (e <= t) return _;
      var n = v(e, t);
      return n <= u
        ? { daysLeft: n, stage: "trial_ending" }
        : n <= s
          ? { daysLeft: n, stage: "trial_halfway" }
          : { daysLeft: n, stage: "none" };
    }
    ((l.ACCESS_NOT_REQUIRED = d),
      (l.NO_CUSTOMER_MANAGER_UPSELL = m),
      (l.decodeCustomerManagerAccessState = f),
      (l.decodeCustomerManagerAccessStateOrThrow = g),
      (l.getCustomerManagerUpsell = h),
      (l.isCustomerManagerAccessAllowedByState = y),
      (l.isCustomerManagerPanelBlocked = C),
      (l.canReadCustomerData = b),
      (l.getNextTrialDayChangeTime = S));
  },
  98,
);
