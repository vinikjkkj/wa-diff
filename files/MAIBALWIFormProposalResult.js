__d(
  "MAIBALWIFormProposalResult",
  ["fbt", "invariant", "toLWIDecimalAmount"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t, n, o, a, i, l) {
      var s,
        u = function (t) {
          return n.field === "duration_days"
            ? String(t)
            : r("toLWIDecimalAmount")(t, a);
        },
        c =
          (o == null ? void 0 : o.field) === "daily_budget"
            ? [u(o.fromMinor), u(o.toMinor)]
            : (o == null ? void 0 : o.field) === "duration_days"
              ? [u(o.fromDays), u(o.toDays)]
              : [n.from, n.to],
        d = c[0],
        m = c[1],
        p = babelHelpers.extends(
          {
            action: e,
            attempt: t,
            currency: n.currency,
            field: n.field,
            requested: m,
          },
          l,
        );
      if (i.status === "refused")
        return babelHelpers.extends({}, p, i, {
          from: d,
          to: d,
          uiAck: "none",
        });
      var _ = i.status === "applied" || i.status === "adjusted",
        f = function (t) {
          return typeof t == "number" ? u(t) : t;
        };
      return babelHelpers.extends(
        {},
        p,
        { from: f(i.from) },
        i.note == null ? null : { note: i.note },
        {
          reason: i.status === "committed_unsettled" ? i.reason : null,
          requested: f(i.requested),
          status: i.status,
          to: f(i.to),
          uiAck: _ ? ((s = i.uiAck) != null ? s : "no_target") : "none",
        },
      );
    }
    function c(e, t) {
      return e === "STALE_VALUE"
        ? s._(/*BTDS*/ "")
        : e === "FIELD_NOT_PATCHABLE" && t === "preview"
          ? s._(/*BTDS*/ "")
          : e === "FIELD_NOT_PATCHABLE"
            ? s._(/*BTDS*/ "")
            : e === "INVALID_COMMAND" && t === "preview"
              ? s._(/*BTDS*/ "")
              : e === "NEEDS_CONFIRMATION"
                ? s._(/*BTDS*/ "")
                : e === "CONTROL_DIRTY"
                  ? s._(/*BTDS*/ "")
                  : e === "STALE_FORM"
                    ? s._(/*BTDS*/ "")
                    : e === "LOCKED"
                      ? s._(/*BTDS*/ "")
                      : e === "SUBMITTING"
                        ? s._(/*BTDS*/ "")
                        : t === "preview"
                          ? s._(/*BTDS*/ "")
                          : s._(/*BTDS*/ "");
    }
    function d(e, t) {
      var n = e.action,
        r = e.isRounded,
        o = e.receipt;
      if (o.status === "refused")
        return n === "undo" && o.reason === "FORM_DIRTY"
          ? s._(/*BTDS*/ "")
          : n === "undo" && o.reason === "STALE_VALUE"
            ? s._(/*BTDS*/ "")
            : c(o.reason, "result");
      o.field === "daily_budget" || u(0, 184288, o.field);
      var a = t(o.to);
      if (
        e.isDirect === !0 &&
        (o.status === "applied" || o.status === "adjusted")
      )
        return s._(/*BTDS*/ "", [
          s._param("from", t(o.from)),
          s._param("to", a),
        ]);
      if (o.status === "committed_unsettled")
        return o.reason === "COMMIT_FAILED"
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      if (o.status === "noop") return s._(/*BTDS*/ "", [s._param("amount", a)]);
      if (n === "undo" && o.status === "adjusted")
        return s._(/*BTDS*/ "", [
          s._param("amount", a),
          s._param("requested", t(o.requested)),
        ]);
      if (n === "undo") return s._(/*BTDS*/ "", [s._param("amount", a)]);
      if (o.status === "applied")
        return s._(/*BTDS*/ "", [s._param("amount", a)]);
      if (r) return s._(/*BTDS*/ "", [s._param("amount", a)]);
      var i = t(o.requested);
      return e.isClamped === !0
        ? s._(/*BTDS*/ "", [s._param("amount", a), s._param("requested", i)])
        : s._(/*BTDS*/ "", [s._param("amount", a), s._param("requested", i)]);
    }
    var m = { describeProposal: p, describeRefusal: c, describeResult: d };
    function p(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function _(e) {
      return s._(/*BTDS*/ "", [s._param("from", e)]);
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function h(e, t) {
      return e === "STALE_VALUE"
        ? s._(/*BTDS*/ "")
        : e === "FIELD_NOT_PATCHABLE" && t === "preview"
          ? s._(/*BTDS*/ "")
          : e === "FIELD_NOT_PATCHABLE"
            ? s._(/*BTDS*/ "")
            : e === "INVALID_COMMAND" && t === "preview"
              ? s._(/*BTDS*/ "")
              : e === "GOAL_NEEDS_PIXEL" && t === "preview"
                ? s._(/*BTDS*/ "")
                : e === "GOAL_NEEDS_PIXEL"
                  ? s._(/*BTDS*/ "")
                  : e === "GOAL_UNAVAILABLE" && t === "preview"
                    ? s._(/*BTDS*/ "")
                    : e === "GOAL_UNAVAILABLE"
                      ? s._(/*BTDS*/ "")
                      : e === "CONTROL_DIRTY"
                        ? s._(/*BTDS*/ "")
                        : e === "STALE_FORM"
                          ? s._(/*BTDS*/ "")
                          : e === "LOCKED"
                            ? f()
                            : e === "SUBMITTING"
                              ? s._(/*BTDS*/ "")
                              : t === "preview"
                                ? s._(/*BTDS*/ "")
                                : s._(/*BTDS*/ "");
    }
    function y(e, t, n) {
      if (n == null) return null;
      var r = n.fromMinor,
        o = n.toMinor;
      return t === "undo"
        ? s._(/*BTDS*/ "", [s._param("budget", e(o))])
        : s._(/*BTDS*/ "", [s._param("from", e(r)), s._param("to", e(o))]);
    }
    function C(e, t) {
      return t == null
        ? e
        : s._(/*BTDS*/ "", [s._param("base", e), s._param("extra", t)]);
    }
    function b(e, t) {
      var n = e.action,
        r = e.receipt;
      if (r.status === "refused")
        return n === "undo" && r.reason === "FORM_DIRTY"
          ? s._(/*BTDS*/ "")
          : n === "undo" && r.reason === "STALE_VALUE"
            ? s._(/*BTDS*/ "")
            : h(r.reason, "result");
      r.field === "goal" || u(0, 184287, r.field);
      var o = y(t, n, r.budgetSideEffect),
        a = r.display;
      if (
        e.isDirect === !0 &&
        (r.status === "applied" || r.status === "adjusted")
      )
        return C(
          s._(/*BTDS*/ "", [s._param("from", a.from), s._param("to", a.to)]),
          o,
        );
      if (r.status === "committed_unsettled")
        return C(
          r.reason === "COMMIT_FAILED" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
          o,
        );
      if (r.status === "noop")
        return s._(/*BTDS*/ "", [s._param("goal", a.to)]);
      if (n === "undo" && r.status === "adjusted") {
        var i =
          r.note != null
            ? s._(/*BTDS*/ "", [
                s._param("to", a.to),
                s._param("requested", a.requested),
              ])
            : r.budgetSideEffect != null
              ? s._(/*BTDS*/ "", [
                  s._param("to", a.to),
                  s._param("requested", a.requested),
                ])
              : s._(/*BTDS*/ "", [
                  s._param("to", a.to),
                  s._param("requested", a.requested),
                ]);
        return C(i, o);
      } else if (n === "undo") {
        var l =
          r.note != null
            ? s._(/*BTDS*/ "", [s._param("goal", a.to)])
            : r.budgetSideEffect != null
              ? s._(/*BTDS*/ "", [s._param("goal", a.to)])
              : s._(/*BTDS*/ "", [s._param("goal", a.to)]);
        return C(l, o);
      } else if (r.status === "applied")
        return C(s._(/*BTDS*/ "", [s._param("goal", a.to)]), o);
      return C(s._(/*BTDS*/ "", [s._param("goal", a.to)]), o);
    }
    function v(e) {
      return (
        e.field === "goal" || u(0, 184287, e.field),
        e.note == null ? null : s._(/*BTDS*/ "")
      );
    }
    var S = {
      describeProposal: g,
      describeRefusal: h,
      describeResult: b,
      describeUndoDisclosure: v,
    };
    function R(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function L(e, t) {
      return e === "STALE_VALUE"
        ? s._(/*BTDS*/ "")
        : e === "FIELD_NOT_PATCHABLE" && t === "preview"
          ? s._(/*BTDS*/ "")
          : e === "FIELD_NOT_PATCHABLE"
            ? s._(/*BTDS*/ "")
            : e === "INVALID_COMMAND" && t === "preview"
              ? s._(/*BTDS*/ "")
              : e === "CTA_UNAVAILABLE" && t === "preview"
                ? s._(/*BTDS*/ "")
                : e === "CTA_UNAVAILABLE"
                  ? s._(/*BTDS*/ "")
                  : e === "CONTROL_DIRTY"
                    ? s._(/*BTDS*/ "")
                    : e === "STALE_FORM"
                      ? s._(/*BTDS*/ "")
                      : e === "LOCKED"
                        ? f()
                        : e === "SUBMITTING"
                          ? s._(/*BTDS*/ "")
                          : t === "preview"
                            ? s._(/*BTDS*/ "")
                            : s._(/*BTDS*/ "");
    }
    function E(e, t) {
      var n = e.action,
        r = e.receipt;
      if (r.status === "refused")
        return n === "undo" && r.reason === "FORM_DIRTY"
          ? s._(/*BTDS*/ "")
          : n === "undo" && r.reason === "STALE_VALUE"
            ? s._(/*BTDS*/ "")
            : L(r.reason, "result");
      r.field === "cta" || u(0, 186210, r.field);
      var o = r.display;
      return e.isDirect === !0 &&
        (r.status === "applied" || r.status === "adjusted")
        ? s._(/*BTDS*/ "", [s._param("from", o.from), s._param("to", o.to)])
        : r.status === "committed_unsettled"
          ? r.reason === "COMMIT_FAILED"
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : r.status === "noop"
            ? s._(/*BTDS*/ "", [s._param("button", o.to)])
            : n === "undo" && r.status === "adjusted"
              ? s._(/*BTDS*/ "", [
                  s._param("to", o.to),
                  s._param("requested", o.requested),
                ])
              : n === "undo"
                ? s._(/*BTDS*/ "", [s._param("button", o.to)])
                : r.status === "applied"
                  ? s._(/*BTDS*/ "", [s._param("button", o.to)])
                  : s._(/*BTDS*/ "", [s._param("button", o.to)]);
    }
    var k = { describeProposal: R, describeRefusal: L, describeResult: E };
    function I(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function T(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function D(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function x(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function $(e, t) {
      return s._(/*BTDS*/ "", [s._param("from", e), s._param("to", t)]);
    }
    function P(e, t) {
      return e === "STALE_VALUE"
        ? s._(/*BTDS*/ "")
        : e === "FIELD_NOT_PATCHABLE" && t === "preview"
          ? s._(/*BTDS*/ "")
          : e === "FIELD_NOT_PATCHABLE"
            ? s._(/*BTDS*/ "")
            : e === "INVALID_COMMAND" && t === "preview"
              ? s._(/*BTDS*/ "")
              : e === "CUSTOM_UNAVAILABLE" && t === "preview"
                ? s._(/*BTDS*/ "")
                : e === "CUSTOM_UNAVAILABLE"
                  ? s._(/*BTDS*/ "")
                  : e === "CUSTOM_DISABLED" && t === "preview"
                    ? s._(/*BTDS*/ "")
                    : e === "CUSTOM_DISABLED"
                      ? s._(/*BTDS*/ "")
                      : e === "SAC_RESTRICTED" && t === "preview"
                        ? s._(/*BTDS*/ "")
                        : e === "SAC_RESTRICTED"
                          ? s._(/*BTDS*/ "")
                          : e === "CONTROL_DIRTY"
                            ? s._(/*BTDS*/ "")
                            : e === "STALE_FORM"
                              ? s._(/*BTDS*/ "")
                              : e === "LOCKED"
                                ? f()
                                : e === "SUBMITTING"
                                  ? s._(/*BTDS*/ "")
                                  : t === "preview"
                                    ? s._(/*BTDS*/ "")
                                    : s._(/*BTDS*/ "");
    }
    function N(e, t) {
      var n = e.action,
        r = e.receipt;
      if (r.status === "refused")
        return n === "undo" && r.reason === "FORM_DIRTY"
          ? s._(/*BTDS*/ "")
          : n === "undo" && r.reason === "STALE_VALUE"
            ? s._(/*BTDS*/ "")
            : P(r.reason, "result");
      r.field === "audience_age" ||
        r.field === "audience_custom" ||
        r.field === "audience_gender" ||
        r.field === "audience_interests" ||
        r.field === "audience_location" ||
        u(0, 184320, r.field);
      var o = r.display;
      if (
        e.isDirect === !0 &&
        (r.status === "applied" || r.status === "adjusted")
      )
        return s._(/*BTDS*/ "", [
          s._param("from", o.from),
          s._param("to", o.to),
        ]);
      if (r.status === "committed_unsettled")
        return r.reason === "COMMIT_FAILED"
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      if (r.status === "noop") return s._(/*BTDS*/ "", [s._param("to", o.to)]);
      if (n === "undo" && r.status === "adjusted") {
        var a,
          i = (a = r.sanitized) != null ? a : [];
        return i.length === 0
          ? s._(/*BTDS*/ "", [
              s._param("to", o.to),
              s._param("requested", o.requested),
            ])
          : s._(/*BTDS*/ "", [
              s._param("to", o.to),
              s._param("requested", o.requested),
            ]);
      } else if (n === "undo") {
        var l,
          c = (l = r.sanitized) != null ? l : [];
        return c.length === 0
          ? s._(/*BTDS*/ "", [s._param("to", o.to)])
          : s._(/*BTDS*/ "", [s._param("to", o.to)]);
      } else if (r.status === "applied")
        return s._(/*BTDS*/ "", [s._param("to", o.to)]);
      return s._(/*BTDS*/ "", [s._param("to", o.to)]);
    }
    function M(e) {
      var t;
      return (
        e.field === "audience_age" ||
          e.field === "audience_custom" ||
          e.field === "audience_gender" ||
          e.field === "audience_interests" ||
          e.field === "audience_location" ||
          u(0, 184320, e.field),
        ((t = e.sanitized) != null ? t : []).length === 0
          ? null
          : s._(/*BTDS*/ "")
      );
    }
    function w(e) {
      return e === "audience_age"
        ? s._(/*BTDS*/ "")
        : e === "audience_gender"
          ? s._(/*BTDS*/ "")
          : e === "audience_location"
            ? s._(/*BTDS*/ "")
            : e === "audience_interests"
              ? s._(/*BTDS*/ "")
              : e === "audience_custom"
                ? s._(/*BTDS*/ "")
                : s._(/*BTDS*/ "");
    }
    function A(e) {
      return e === "interests"
        ? s._(/*BTDS*/ "")
        : e === "behaviors"
          ? s._(/*BTDS*/ "")
          : e === "custom_audiences"
            ? s._(/*BTDS*/ "")
            : e;
    }
    function F(e) {
      var t = e.adjusted.map(function (e) {
          return s._(/*BTDS*/ "", [
            s._param("field", w(e.field)),
            s._param("to", e.to),
          ]);
        }),
        n = e.wiped.map(A);
      return t.length > 0 && n.length > 0
        ? s._(/*BTDS*/ "", [
            s._param("adjusted", t.join(", ")),
            s._param("wiped", n.join(", ")),
          ])
        : t.length > 0
          ? s._(/*BTDS*/ "", [s._param("adjusted", t.join(", "))])
          : n.length > 0
            ? s._(/*BTDS*/ "", [s._param("wiped", n.join(", "))])
            : s._(/*BTDS*/ "");
    }
    var O = {
        describeProposal: I,
        describeRefusal: P,
        describeResult: N,
        describeUndoDisclosure: M,
      },
      B = {
        describeProposal: $,
        describeRefusal: P,
        describeResult: N,
        describeUndoDisclosure: M,
      },
      W = {
        describeProposal: T,
        describeRefusal: P,
        describeResult: N,
        describeUndoDisclosure: M,
      },
      q = {
        describeProposal: x,
        describeRefusal: P,
        describeResult: N,
        describeUndoDisclosure: M,
      },
      U = {
        describeProposal: D,
        describeRefusal: P,
        describeResult: N,
        describeUndoDisclosure: M,
      };
    ((l.toLWIFormSyncReceipt = e),
      (l.describeLWIBudgetRefusal = c),
      (l.describeLWIFormProposalResult = d),
      (l.budgetFieldCopy = m),
      (l.describeLWIBudgetProposal = p),
      (l.describeLWIBudgetChoice = _),
      (l.describeLWIGoalProposal = g),
      (l.describeLWIGoalRefusal = h),
      (l.describeLWIGoalResult = b),
      (l.describeLWIGoalUndoDisclosure = v),
      (l.goalFieldCopy = S),
      (l.describeLWICTAProposal = R),
      (l.describeLWICTARefusal = L),
      (l.describeLWICTAResult = E),
      (l.ctaFieldCopy = k),
      (l.describeLWIAudienceAgeProposal = I),
      (l.describeLWIAudienceGenderProposal = T),
      (l.describeLWIAudienceLocationProposal = D),
      (l.describeLWIAudienceInterestsProposal = x),
      (l.describeLWIAudienceCustomProposal = $),
      (l.describeLWIAudienceRefusal = P),
      (l.describeLWIAudienceResult = N),
      (l.describeLWIAudienceUndoDisclosure = M),
      (l.describeLWIAudienceRegulated = F),
      (l.audienceAgeFieldCopy = O),
      (l.audienceCustomFieldCopy = B),
      (l.audienceGenderFieldCopy = W),
      (l.audienceInterestsFieldCopy = q),
      (l.audienceLocationFieldCopy = U));
  },
  226,
);
