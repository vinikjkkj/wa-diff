__d(
  "WAWebBizAiInlineFeedbackState",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCmd",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
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
      d = S(),
      m = !1;
    function p() {
      if (o("WAWebUserPrefsMeUser").getMaybeMePnUser() == null) return S();
      R();
      var e = h(r("WAWebUserPrefsStore").getUser(u));
      return ((d = e), e);
    }
    function _(e, t) {
      var n;
      if (o("WAWebUserPrefsMeUser").getMaybeMePnUser() == null) return S();
      var a = p(),
        i = e.remote.toString(),
        l = a[i],
        s = { feedbackKind: t, messageKey: e.toString() };
      if (b(l, s)) return a;
      var c = babelHelpers.extends({}, a, ((n = {}), (n[i] = s), n));
      return (r("WAWebUserPrefsStore").setUser(u, c), (d = c), E(), c);
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
    function h(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return S();
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = y(n, e[n]);
          r != null && (t[r.chatId] = r.submission);
        }),
        t
      );
    }
    function y(e, t) {
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t.feedbackKind,
        a = t.messageKey;
      if (!C(n) || typeof a != "string") return null;
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
    function C(e) {
      return e === "negative" || e === "positive";
    }
    function b(e, t) {
      return (
        e != null &&
        e.feedbackKind === t.feedbackKind &&
        e.messageKey === t.messageKey
      );
    }
    function v(e) {
      return Object.keys(e).length > 0;
    }
    function S() {
      return {};
    }
    function R() {
      m ||
        (o("WAWebCmd").Cmd.on("starting_logout_from_bridge", L),
        o("WAWebCmd").Cmd.on("logout_from_bridge", L),
        (m = !0));
    }
    function L() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser() == null ? d : p();
      (o("WAWebUserPrefsMeUser").getMaybeMePnUser() != null &&
        r("WAWebUserPrefsStore").setUser(u, null),
        (d = S()),
        v(e) && E());
    }
    function E() {
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
      (l.subscribeToBizAiInlineFeedbackState = g));
  },
  98,
);
