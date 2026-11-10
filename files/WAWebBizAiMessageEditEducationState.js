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
    "WAWebUserPrefsMeUser",
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
      return o("WAWebUserPrefsMeUser").getMaybeMePnUser() == null
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
      o("WAWebUserPrefsMeUser").getMaybeMePnUser() != null &&
        r("WAWebUserPrefsStore").setUser(f, !0);
    }
    function k() {
      return (
        o("WAWebUserPrefsMeUser").getMaybeMePnUser() != null &&
        r("WAWebUserPrefsStore").getUser(f) === !0
      );
    }
    function I(e, t, n, r) {
      r === void 0 && (r = o("WATimeUtils").unixTime());
      var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (a == null) return H();
      var i = {
          chatId: e.id.remote,
          didSendEdit: t,
          isWithinEditingWindow: n,
          messageId: e.id.id,
          startedAtSeconds: r,
        },
        l = e.getCollection(),
        s = function (n) {
          n.id.equals(e.id) && $(i);
        },
        u = function () {
          $(i);
        },
        c = !1,
        d = !1,
        m = function () {
          (c &&
            ((c = !1),
            q(function () {
              l.off("remove", s);
            })),
            d &&
              ((d = !1),
              q(function () {
                e.off("revoked", u);
              })));
        };
      try {
        return (
          (c = !0),
          l.on("remove", s),
          (d = !0),
          e.on("revoked", u),
          w({
            hint: i,
            nowSeconds: r,
            ownerUserId: a.toString(),
            targetCleanup: m,
          })
        );
      } catch (e) {
        throw (g === i ? $(i) : m(), e);
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
      (o("WAWebUserPrefsMeUser").getMaybeMePnUser() != null &&
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
    function w(t) {
      var n = t.hint,
        a = t.nowSeconds,
        i = t.ownerUserId,
        l = t.targetCleanup,
        s = l === void 0 ? null : l;
      A();
      var u = R(),
        c = V(
          o("WAWebBizAiMessageEditEducationPolicy").withPostEditHintShown(u, a),
        );
      try {
        F(n, i, s);
      } catch (t) {
        try {
          V(u);
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
      return c;
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
        (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : t.toString()) != null
        ? e
        : null;
    }
    function V(e) {
      if (o("WAWebUserPrefsMeUser").getMaybeMePnUser() == null) return H();
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
