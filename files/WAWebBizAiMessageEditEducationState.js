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
      d = n("$InternalEnum").Mirrored([
        "BizAiMessageEditEducationState",
        "BizAiMessageEditDiscoveryTooltipViewed",
      ]),
      m = "edit_started",
      p = new (r("WAWebEventEmitter"))(),
      _ = d.BizAiMessageEditEducationState,
      f = d.BizAiMessageEditDiscoveryTooltipViewed,
      g = null,
      h = null,
      y = null,
      C = null,
      b = !1,
      v = !1,
      S = new Set();
    function R() {
      return r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null
        ? H()
        : M(r("WAWebUserPrefsStore").getUser(_));
    }
    function L(e) {
      return (
        e === void 0 && (e = o("WATimeUtils").unixTime()),
        V(
          o(
            "WAWebBizAiMessageEditEducationPolicy",
          ).withDiscoveryTooltipDismissed(R(), e),
        )
      );
    }
    function E() {
      r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null &&
        r("WAWebUserPrefsStore").setUser(f, !0);
    }
    function k() {
      return (
        r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null &&
        r("WAWebUserPrefsStore").getUser(f) === !0
      );
    }
    function I(e, t, n, a) {
      a === void 0 && (a = o("WATimeUtils").unixTime());
      var i = r("WAWebUserPrefsStore").getMaybeMeDevicePn();
      if (i == null) return H();
      var l = {
          chatId: e.id.remote,
          didSendEdit: t,
          isWithinEditingWindow: n,
          messageId: e.id.id,
          startedAtSeconds: a,
        },
        s = e.getCollection(),
        u = function (n) {
          n.id.equals(e.id) && $(l);
        },
        c = function () {
          $(l);
        },
        d = !1,
        m = !1,
        p = function () {
          (d &&
            ((d = !1),
            q(function () {
              s.off("remove", u);
            })),
            m &&
              ((m = !1),
              q(function () {
                e.off("revoked", c);
              })));
        };
      try {
        return (
          (d = !0),
          s.on("remove", u),
          (m = !0),
          e.on("revoked", c),
          w(l, a, i.toString(), p)
        );
      } catch (e) {
        throw (g === l ? $(l) : p(), e);
      }
    }
    function T(e) {
      return (
        e === void 0 && (e = o("WATimeUtils").unixTime()),
        g == null ||
        h == null ||
        h !== U() ||
        o("WAWebBizAiMessageEditEducationPolicy").isActivePostEditHintExpired(
          g,
          e,
        )
          ? null
          : g
      );
    }
    function D(e) {
      return (
        S.add(e),
        function () {
          S.delete(e);
        }
      );
    }
    function x() {
      F(null);
    }
    function $(e) {
      g === e && x();
    }
    function P(e) {
      return T() !== e || b ? null : ((b = !0), e.isWithinEditingWindow);
    }
    function N() {
      (r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null &&
        (r("WAWebUserPrefsStore").setUser(_, null),
        r("WAWebUserPrefsStore").setUser(f, null)),
        x());
    }
    function M(e) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? H()
        : {
            hintLastShownAtSeconds: G(e.hintLastShownAtSeconds),
            tooltipLastDismissedAtSeconds: G(e.tooltipLastDismissedAtSeconds),
          };
    }
    function w(t, n, a, i) {
      (i === void 0 && (i = null), A());
      var l = R(),
        s = V(
          o("WAWebBizAiMessageEditEducationPolicy").withPostEditHintShown(l, n),
        );
      try {
        F(t, a, i);
      } catch (t) {
        try {
          V(l);
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
    function A() {
      v || (o("WAWebCmd").Cmd.on("logout_from_bridge", x), (v = !0));
    }
    function F(e, t, n) {
      if (
        (t === void 0 && (t = null),
        n === void 0 && (n = null),
        !(g === e && h === t))
      ) {
        var r = O(e),
          o = y,
          a = C;
        ((y = n), (g = e), (h = t), (C = r), (b = !1), q(o), B(a), W());
      }
    }
    function O(e) {
      return e == null
        ? null
        : r("WAWebAlarm").setGlobalTimeout(
            function () {
              return $(e);
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
    function B(e) {
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
    function W() {
      S.forEach(function (e) {
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
    function q(e) {
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
    function U() {
      var e, t;
      return (e =
        (t = r("WAWebUserPrefsStore").getMaybeMeDevicePn()) == null
          ? void 0
          : t.toString()) != null
        ? e
        : null;
    }
    function V(e) {
      if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null) return H();
      var t = M(e);
      return (r("WAWebUserPrefsStore").setUser(_, t), t);
    }
    function H() {
      return {
        hintLastShownAtSeconds: null,
        tooltipLastDismissedAtSeconds: null,
      };
    }
    function G(e) {
      return z(e) ? e : null;
    }
    function z(e) {
      return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
    }
    ((l.BizAiMessageEditEducationUserPrefs = d),
      (l.BIZ_AI_MESSAGE_EDIT_STARTED_EVENT = m),
      (l.BizAiMessageEditEducationEventBus = p),
      (l.loadMessageEditEducationState = R),
      (l.recordDiscoveryTooltipDismissed = L),
      (l.recordDiscoveryTooltipViewed = E),
      (l.hasViewedDiscoveryTooltip = k),
      (l.recordPostEditHintShownForMessage = I),
      (l.getActivePostEditHint = T),
      (l.subscribeToActivePostEditHint = D),
      (l.clearActivePostEditHint = x),
      (l.clearActivePostEditHintIfCurrent = $),
      (l.takeActivePostEditHintViewIfCurrent = P),
      (l.clearMessageEditEducationState = N),
      (l.normalizeMessageEditEducationState = M));
  },
  98,
);
