__d(
  "WAWebBizAiMessageEditEducationState",
  [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebBizAiMessageEditEducationPolicy",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["BizAiMessageEditEducationState"]),
      s = e.BizAiMessageEditEducationState,
      u = null;
    function c() {
      return h(r("WAWebUserPrefsStore").getUser(s));
    }
    function d(e) {
      return (
        e === void 0 && (e = o("WATimeUtils").unixTime()),
        y(
          o(
            "WAWebBizAiMessageEditEducationPolicy",
          ).withDiscoveryTooltipDismissed(c(), e),
        )
      );
    }
    function m() {
      return y(
        o("WAWebBizAiMessageEditEducationPolicy").withMessageEditingUsed(c()),
      );
    }
    function p(e) {
      return (
        e === void 0 && (e = o("WATimeUtils").unixTime()),
        (u = { startedAtSeconds: e }),
        y(
          o("WAWebBizAiMessageEditEducationPolicy").withPostEditHintShown(
            c(),
            e,
          ),
        )
      );
    }
    function _(e) {
      return (
        e === void 0 && (e = o("WATimeUtils").unixTime()),
        o("WAWebBizAiMessageEditEducationPolicy").isActivePostEditHintExpired(
          u,
          e,
        ) && (u = null),
        u
      );
    }
    function f() {
      u = null;
    }
    function g() {
      (r("WAWebUserPrefsStore").setUser(s, null), f());
    }
    function h(e) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? C()
        : {
            hasUsedMessageEditing:
              typeof e.hasUsedMessageEditing == "boolean"
                ? e.hasUsedMessageEditing
                : !1,
            hintLastShownAtSeconds: b(e.hintLastShownAtSeconds),
            tooltipLastDismissedAtSeconds: b(e.tooltipLastDismissedAtSeconds),
          };
    }
    function y(e) {
      var t = h(e);
      return (r("WAWebUserPrefsStore").setUser(s, t), t);
    }
    function C() {
      return {
        hasUsedMessageEditing: !1,
        hintLastShownAtSeconds: null,
        tooltipLastDismissedAtSeconds: null,
      };
    }
    function b(e) {
      return v(e) ? e : null;
    }
    function v(e) {
      return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
    }
    ((l.BizAiMessageEditEducationUserPrefs = e),
      (l.loadMessageEditEducationState = c),
      (l.recordDiscoveryTooltipDismissed = d),
      (l.recordMessageEditingUsed = m),
      (l.recordPostEditHintShown = p),
      (l.getActivePostEditHint = _),
      (l.clearActivePostEditHint = f),
      (l.clearMessageEditEducationState = g),
      (l.normalizeMessageEditEducationState = h));
  },
  98,
);
