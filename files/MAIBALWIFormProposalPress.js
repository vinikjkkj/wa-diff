__d(
  "MAIBALWIFormProposalPress",
  [
    "invariant",
    "FBLogger",
    "LWIMAIBAFormGateway",
    "MAIBALWIFormProposalForm",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n) {
      return {
        isReplay: !1,
        result: {
          action: t,
          isRounded: !1,
          receipt: { reason: n, status: "refused" },
        },
      };
    };
    function u(e, t) {
      return (
        e != null &&
        e.status === "ok" &&
        e.field === "daily_budget" &&
        t.status === "adjusted" &&
        t.field === "daily_budget" &&
        e.clamped === e.requested &&
        t.to === e.to
      );
    }
    function c(e, t) {
      return (
        e != null &&
        e.status === "ok" &&
        (e.field === "daily_budget" ||
          e.field === "duration_days" ||
          e.field === "start_date") &&
        t.status === "adjusted" &&
        (t.field === "daily_budget" ||
          t.field === "duration_days" ||
          t.field === "start_date") &&
        e.clamped !== e.requested &&
        t.to === e.to
      );
    }
    function d(e, t, n) {
      try {
        var r = e.readField == null ? void 0 : e.readField(t);
        return typeof r == "number" ? r : n;
      } catch (e) {
        return n;
      }
    }
    function m(e, t, n) {
      try {
        var r = e.readField == null ? void 0 : e.readField(t);
        return typeof r == "string" ? r : n;
      } catch (e) {
        return n;
      }
    }
    function p(e) {
      r("FBLogger")("maiba_lwi_form_sync").mustfix(
        "A proposal apply failed %s",
        r("getErrorSafe")(e).name,
      );
    }
    var _ = new Map();
    function f(e) {
      return _.get(e);
    }
    function g(e, t, n, r) {
      var o = h(e, t, n, r);
      _.set(r, o);
      var a = function () {
        _.get(r) === o && _.delete(r);
      };
      return (o.then(a, a), o);
    }
    async function h(t, n, r, a) {
      var i = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway(),
        l = i.status === "OK" ? i.gateway : null,
        _ = l == null ? void 0 : l.applyCommand;
      if (l == null || _ == null) return e(r, "FORM_NOT_RESOLVED");
      if (l.form !== t) return e(r, "STALE_FORM");
      if (n == null) return e(r, "INVALID_COMMAND");
      var f = l.getReceipt == null ? void 0 : l.getReceipt(n.field, a);
      if (f != null)
        return {
          isReplay: !0,
          result: { action: r, isRounded: !1, receipt: f },
        };
      var g = null,
        h;
      try {
        ((g = l.previewCommand == null ? void 0 : l.previewCommand(n.field, n)),
          (h = _(n.field, n, a)));
      } catch (t) {
        return (p(t), e(r, "INVALID_COMMAND"));
      }
      var y;
      try {
        y = await h;
      } catch (e) {
        if ((p(e), n.field === "goal")) {
          var C,
            b =
              ((C = g) == null ? void 0 : C.status) === "ok" &&
              g.field === "goal"
                ? g.display
                : { from: n.fromGoal, requested: n.toGoal, to: n.fromGoal };
          y = {
            display: b,
            field: "goal",
            from: n.fromGoal,
            reason: "COMMIT_FAILED",
            requested: n.toGoal,
            status: "committed_unsettled",
            to: m(l, n.field, n.fromGoal),
          };
        } else if (n.field === "cta") {
          var v,
            S =
              ((v = g) == null ? void 0 : v.status) === "ok" &&
              g.field === "cta"
                ? g.display
                : { from: n.fromCTA, requested: n.toCTA, to: n.fromCTA };
          y = {
            display: S,
            field: "cta",
            from: n.fromCTA,
            reason: "COMMIT_FAILED",
            requested: n.toCTA,
            status: "committed_unsettled",
            to: m(l, n.field, n.fromCTA),
          };
        } else if (
          n.field === "audience_age" ||
          n.field === "audience_custom" ||
          n.field === "audience_gender" ||
          n.field === "audience_interests" ||
          n.field === "audience_location"
        ) {
          var R,
            L =
              ((R = g) == null ? void 0 : R.status) === "ok" &&
              g.field === n.field
                ? g.display
                : { from: n.from, requested: n.to, to: n.from };
          y = {
            display: L,
            field: n.field,
            from: n.from,
            reason: "COMMIT_FAILED",
            requested: n.to,
            status: "committed_unsettled",
            to: m(l, n.field, n.from),
          };
        } else if (n.field === "daily_budget" || n.field === "duration_days") {
          var E =
              n.field === "duration_days"
                ? [n.fromDays, n.toDays]
                : [n.fromMinor, n.toMinor],
            k = E[0],
            I = E[1],
            T = {
              from: k,
              reason: "COMMIT_FAILED",
              requested: I,
              status: "committed_unsettled",
              to: d(l, n.field, k),
            };
          y =
            n.field === "duration_days"
              ? babelHelpers.extends({}, T, { field: "duration_days" })
              : babelHelpers.extends({}, T, { field: "daily_budget" });
        } else
          n.field === "start_date"
            ? (y = {
                field: "start_date",
                from: n.fromDate,
                reason: "COMMIT_FAILED",
                requested: n.toDate,
                status: "committed_unsettled",
                to: m(l, n.field, n.fromDate),
              })
            : s(0, 184319, n.field);
      }
      var D = c(g, y),
        x = u(g, y),
        $ = n.mode === "direct",
        P = { action: r, isClamped: D, isDirect: $, isRounded: x, receipt: y };
      return (
        y.status !== "refused" &&
          o("MAIBALWIFormProposalForm").rememberLWIFormProposalResult(a, P),
        { isReplay: !1, result: P }
      );
    }
    ((l.isLWIRoundingOnly = u),
      (l.isLWIClampOnly = c),
      (l.getLWIFormProposalPressInFlight = f),
      (l.applyLWIFormProposal = g));
  },
  98,
);
