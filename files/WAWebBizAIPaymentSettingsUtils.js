__d(
  "WAWebBizAIPaymentSettingsUtils",
  ["WAWebBizAIPaymentSettingsUtils_home.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAIPaymentSettingsUtils_home.graphql")),
      u = "PAYMENT_METHODS",
      c = "NATIVE_PAYMENT_STATUS",
      d = "PAYMENT_AGENT_MODE";
    function m(e) {
      return p(e == null ? void 0 : e.ordered_knowledge);
    }
    function p(e) {
      var t = _(e);
      return {
        nativeSettingsAvailability:
          t.hasStatusEntry || t.hasModeEntry ? "available" : "unavailable",
        instructions: f(t.instructions),
        nativePaymentStatus: g(t.statusValue),
        paymentAgentMode: h(t.modeValue),
      };
    }
    function _(e) {
      var t,
        n,
        r,
        o = !1,
        a = !1;
      if (e == null)
        return {
          hasModeEntry: a,
          hasStatusEntry: o,
          instructions: t,
          modeValue: r,
          statusValue: n,
        };
      for (var i of e) {
        var l = i == null ? void 0 : i.knowledge_type;
        l === u
          ? (t = i == null ? void 0 : i.string_data)
          : l === c
            ? ((o = !0), (n = i == null ? void 0 : i.string_data))
            : l === d && ((a = !0), (r = i == null ? void 0 : i.string_data));
      }
      return {
        hasModeEntry: a,
        hasStatusEntry: o,
        instructions: t,
        modeValue: r,
        statusValue: n,
      };
    }
    function f(e) {
      return e == null || e.trim() === "" ? null : e;
    }
    function g(e) {
      return e === "ENABLED"
        ? "enabled"
        : e === "DISABLED"
          ? "disabled"
          : e === "NOT_SET"
            ? "not_set"
            : "unknown";
    }
    function h(e) {
      return e === "AI_REPLIES"
        ? "ai_replies"
        : e === "AI_SUGGESTS"
          ? "ai_suggests"
          : "unknown";
    }
    ((l.PaymentSettingsFragment = s),
      (l.parsePaymentHome = m),
      (l.parsePaymentSettings = p));
  },
  98,
);
