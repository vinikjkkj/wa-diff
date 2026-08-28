__d(
  "SupportAIWebUXLoggerImpl",
  [
    "SupportAIContext.react",
    "XsChatbotFalcoEvent",
    "react",
    "react-compiler-runtime",
    "useSinglePartialViewImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d(e, t, n) {
      r("XsChatbotFalcoEvent").log(function () {
        return {
          event: e,
          support_ai_conversation_flow_id: t,
          entry_point: "support_ai",
          usecase: "support_ai",
          additional_message: JSON.stringify(n),
        };
      });
    }
    var m = function (t, n) {
      var e = t.error,
        r = t.extraData;
      d(
        "SUPPORT_AI_UI_EVENT",
        n,
        babelHelpers.extends({}, r, {
          event: t.event,
          widget: t.widget,
          error: e == null ? void 0 : e.message,
          error_stack: e == null ? void 0 : e.stack,
          error_name: e == null ? void 0 : e.name,
        }),
      );
    };
    function p() {
      var e = o("react-compiler-runtime").c(2),
        t = c(r("SupportAIContext.react")),
        n = t.conversationFlowID,
        a;
      return (
        e[0] !== n
          ? ((a = function (t) {
              return m(t, n);
            }),
            (e[0] = n),
            (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    function _(e, t) {
      var n = o("react-compiler-runtime").c(4),
        a = c(r("SupportAIContext.react")),
        i = a.conversationFlowID,
        l;
      return (
        n[0] !== t || n[1] !== i || n[2] !== e
          ? ((l = {
              onImpressionStart: function () {
                var n = e.conversation_flow_id,
                  r = e.error,
                  o = e.extraData,
                  a = e.widget;
                (d(
                  "SUPPORT_AI_IMPRESSION",
                  n != null ? n : i,
                  babelHelpers.extends({}, o, {
                    widget: a,
                    error: r == null ? void 0 : r.message,
                    error_stack: r == null ? void 0 : r.stack,
                    error_name: r == null ? void 0 : r.name,
                  }),
                ),
                  t == null || t());
              },
            }),
            (n[0] = t),
            (n[1] = i),
            (n[2] = e),
            (n[3] = l))
          : (l = n[3]),
        r("useSinglePartialViewImpression")(l)
      );
    }
    var f = function (t, n) {
      var e = t.cta,
        r = t.error,
        o = t.extraData;
      d(
        "SUPPORT_AI_CLICK_CTA",
        n,
        babelHelpers.extends({}, o, {
          cta: e,
          widget: t.widget,
          error: r == null ? void 0 : r.message,
          error_stack: r == null ? void 0 : r.stack,
          error_name: r == null ? void 0 : r.name,
        }),
      );
    };
    function g() {
      var e = o("react-compiler-runtime").c(2),
        t = c(r("SupportAIContext.react")),
        n = t.conversationFlowID,
        a;
      return (
        e[0] !== n
          ? ((a = function (t) {
              return f(t, n);
            }),
            (e[0] = n),
            (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    ((l.logUIEvent = m),
      (l.useUIEventLogger = p),
      (l.useImpressionLoggerRef = _),
      (l.logCTAClick = f),
      (l.useClickCTALogger = g));
  },
  98,
);
