__d(
  "WAWebBizAiInlineFeedbackState",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCmd",
    "WAWebMsgKey",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored(["BizAiInlineFeedbackState"]),
      u = s.BizAiInlineFeedbackState,
      c = new Set(),
      d = R(),
      m = !1;
    function p() {
      if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null) return R();
      L();
      var e = y(r("WAWebUserPrefsStore").getUser(u));
      return ((d = e), e);
    }
    function _(e, t) {
      var n;
      if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null) return R();
      var o = p(),
        a = e.remote.toString(),
        i = o[a],
        l = { feedbackKind: t, messageKey: e.toString() };
      if (v(i, l)) return o;
      var s = babelHelpers.extends({}, o, ((n = {}), (n[a] = l), n));
      return (r("WAWebUserPrefsStore").setUser(u, s), (d = s), k(), s);
    }
    function f(e) {
      var t = p()[e.remote.toString()];
      if (t == null) return null;
      try {
        var n = r("WAWebMsgKey").from(t.messageKey);
        return n.equals(e) ? t.feedbackKind : null;
      } catch (e) {
        return null;
      }
    }
    function g(e) {
      return (
        p(),
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function h() {
      if (r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null) {
        d = R();
        return;
      }
      var e = r("WAWebUserPrefsStore").getUser(u),
        t = y(e);
      (e != null && r("WAWebUserPrefsStore").setUser(u, null),
        (d = R()),
        S(t) && k());
    }
    function y(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return R();
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = C(n, e[n]);
          r != null && (t[r.chatId] = r.submission);
        }),
        t
      );
    }
    function C(e, t) {
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t.feedbackKind,
        a = t.messageKey;
      if (!b(n) || typeof a != "string") return null;
      try {
        var i = o("WAWebWidFactory").createWid(e),
          l = r("WAWebMsgKey").from(a);
        return l.remote.equals(i)
          ? {
              chatId: l.remote.toString(),
              submission: { feedbackKind: n, messageKey: l.toString() },
            }
          : null;
      } catch (e) {
        return null;
      }
    }
    function b(e) {
      return e === "negative" || e === "positive";
    }
    function v(e, t) {
      return (
        e != null &&
        e.feedbackKind === t.feedbackKind &&
        e.messageKey === t.messageKey
      );
    }
    function S(e) {
      return Object.keys(e).length > 0;
    }
    function R() {
      return {};
    }
    function L() {
      m ||
        (o("WAWebCmd").Cmd.on("starting_logout_from_bridge", E),
        o("WAWebCmd").Cmd.on("logout_from_bridge", E),
        (m = !0));
    }
    function E() {
      var e = r("WAWebUserPrefsStore").getMaybeMeDevicePn() == null ? d : p();
      (r("WAWebUserPrefsStore").getMaybeMeDevicePn() != null &&
        r("WAWebUserPrefsStore").setUser(u, null),
        (d = R()),
        S(e) && k());
    }
    function k() {
      c.forEach(function (t) {
        try {
          t();
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI inline feedback observer failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("biz-ai-inline-feedback-observer-fail");
        }
      });
    }
    ((l.BizAiInlineFeedbackUserPrefs = s),
      (l.loadBizAiInlineFeedbackState = p),
      (l.recordBizAiInlineFeedback = _),
      (l.getBizAiInlineFeedbackKind = f),
      (l.subscribeToBizAiInlineFeedbackState = g),
      (l.resetBizAiInlineFeedbackState = h));
  },
  98,
);
