__d(
  "WAWebBizAiMessageEditEducationState",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebBizAiMessageEditEducationPolicy",
    "WAWebCmd",
    "WAWebEventEmitter",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored(["BizAiMessageEditEducationState"]),
      m = "edit_started",
      p = new (r("WAWebEventEmitter"))(),
      _ = d.BizAiMessageEditEducationState,
      f = null,
      g = null,
      h = null,
      y = null,
      C = !1,
      b = !1,
      v = new Set();
    function S() {
      return r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null
        ? q()
        : $(r("WAWebUserPrefsStore").getUser(_));
    }
    function R(e) {
      return (
        e === void 0 && (e = o("WATimeUtils").unixTime()),
        W(
          o(
            "WAWebBizAiMessageEditEducationPolicy",
          ).withDiscoveryTooltipDismissed(S(), e),
        )
      );
    }
    function L(e, t, n, a) {
      a === void 0 && (a = o("WATimeUtils").unixTime());
      var i = r("WAWebUserPrefsStore").getMaybeMeDevicePn();
      if (i == null) return q();
      var l = {
          chatId: e.id.remote,
          didSendEdit: t,
          isWithinEditingWindow: n,
          messageId: e.id.id,
          startedAtSeconds: a,
        },
        s = e.getCollection(),
        u = function (n) {
          n.id.equals(e.id) && T(l);
        },
        c = function () {
          T(l);
        },
        d = !1,
        m = !1,
        p = function () {
          (d &&
            ((d = !1),
            O(function () {
              s.off("remove", u);
            })),
            m &&
              ((m = !1),
              O(function () {
                e.off("revoked", c);
              })));
        };
      try {
        return (
          (d = !0),
          s.on("remove", u),
          (m = !0),
          e.on("revoked", c),
          P(l, a, i.toString(), p)
        );
      } catch (e) {
        throw (f === l ? T(l) : p(), e);
      }
    }
    function E(e) {
      return (
        e === void 0 && (e = o("WATimeUtils").unixTime()),
        f == null ||
        g == null ||
        g !== B() ||
        o("WAWebBizAiMessageEditEducationPolicy").isActivePostEditHintExpired(
          f,
          e,
        )
          ? null
          : f
      );
    }
    function k(e) {
      return (
        v.add(e),
        function () {
          v.delete(e);
        }
      );
    }
    function I() {
      M(null);
    }
    function T(e) {
      f === e && I();
    }
    function D(e) {
      return E() !== e || C ? null : ((C = !0), e.isWithinEditingWindow);
    }
    function x() {
      (r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null &&
        r("WAWebUserPrefsStore").setUser(_, null),
        I());
    }
    function $(e) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? q()
        : {
            hintLastShownAtSeconds: U(e.hintLastShownAtSeconds),
            tooltipLastDismissedAtSeconds: U(e.tooltipLastDismissedAtSeconds),
          };
    }
    function P(t, n, a, i) {
      (i === void 0 && (i = null), N());
      var l = S(),
        s = W(
          o("WAWebBizAiMessageEditEducationPolicy").withPostEditHintShown(l, n),
        );
      try {
        M(t, a, i);
      } catch (t) {
        try {
          W(l);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI message edit education state rollback failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("biz-ai-message-edit-education-state-rollback-fail");
        }
        throw t;
      }
      return s;
    }
    function N() {
      b || (o("WAWebCmd").Cmd.on("logout_from_bridge", I), (b = !0));
    }
    function M(e, t, n) {
      if (
        (t === void 0 && (t = null),
        n === void 0 && (n = null),
        !(f === e && g === t))
      ) {
        var r = w(e),
          o = h,
          a = y;
        ((h = n), (f = e), (g = t), (y = r), (C = !1), O(o), A(a), F());
      }
    }
    function w(e) {
      return e == null
        ? null
        : r("WAWebAlarm").setGlobalTimeout(
            function () {
              return T(e);
            },
            o("WATimeUtils").castUnixTimeToMillisTime(
              o("WATimeUtils").castToUnixTime(
                o(
                  "WAWebBizAiMessageEditEducationPolicy",
                ).getPostEditHintExpirySeconds(e),
              ),
            ),
          );
    }
    function A(e) {
      if (e != null)
        try {
          r("WAWebAlarm").clearTimeout(e);
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI message edit education expiry cleanup failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("biz-ai-message-edit-education-expiry-cleanup-fail");
        }
    }
    function F() {
      v.forEach(function (e) {
        try {
          e();
        } catch (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI message edit education observer failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("biz-ai-message-edit-education-observer-fail");
        }
      });
    }
    function O(e) {
      try {
        e == null || e();
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit education cleanup failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("biz-ai-message-edit-education-cleanup-fail");
      }
    }
    function B() {
      var e, t;
      return (e =
        (t = r("WAWebUserPrefsStore").getMaybeMeDevicePn()) == null
          ? void 0
          : t.toString()) != null
        ? e
        : null;
    }
    function W(e) {
      if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null) return q();
      var t = $(e);
      return (r("WAWebUserPrefsStore").setUser(_, t), t);
    }
    function q() {
      return {
        hintLastShownAtSeconds: null,
        tooltipLastDismissedAtSeconds: null,
      };
    }
    function U(e) {
      return V(e) ? e : null;
    }
    function V(e) {
      return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
    }
    ((l.BizAiMessageEditEducationUserPrefs = d),
      (l.BIZ_AI_MESSAGE_EDIT_STARTED_EVENT = m),
      (l.BizAiMessageEditEducationEventBus = p),
      (l.loadMessageEditEducationState = S),
      (l.recordDiscoveryTooltipDismissed = R),
      (l.recordPostEditHintShownForMessage = L),
      (l.getActivePostEditHint = E),
      (l.subscribeToActivePostEditHint = k),
      (l.clearActivePostEditHint = I),
      (l.clearActivePostEditHintIfCurrent = T),
      (l.takeActivePostEditHintViewIfCurrent = D),
      (l.clearMessageEditEducationState = x),
      (l.normalizeMessageEditEducationState = $));
  },
  98,
);
