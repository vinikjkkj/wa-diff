__d(
  "WAWebBizAiHandoffRemoval",
  [
    "WALogger",
    "WAWeb-moment",
    "WAWebAlarm",
    "WAWebBizAiHandoffRemovalTimingModel",
    "WAWebBotTypes",
    "WAWebDBUpdateChatTable",
    "WAWebFrontendChatGetters",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 86400,
      u = 1e3;
    function c(e) {
      var t = o("WAWebFrontendChatGetters").getPreviewMessage(e);
      if (
        o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming() !==
        "AFTER_24H_REPLY"
      )
        return !y(t);
      var n = e.aiHandoffRemovalExpiry;
      if (n != null && n !== 0) return r("WAWeb-moment")().unix() < n;
      if (!y(t)) return !0;
      var a = t == null ? void 0 : t.t;
      return a != null && r("WAWeb-moment")().unix() < a + s;
    }
    function d(e) {
      var t = m(e);
      return t === void 0
        ? (_(e), !1)
        : (e.set({ aiHandoffRemovalExpiry: t }), _(e), !0);
    }
    function m(e) {
      if (e.isAiHandoff === !0) {
        if (
          o("WAWebBizAiHandoffRemovalTimingModel").getHandoffRemovalTiming() !==
          "AFTER_24H_REPLY"
        )
          return h(e) ? null : void 0;
        var t = o("WAWebFrontendChatGetters").getPreviewMessage(e);
        if (y(t)) {
          var n = t == null ? void 0 : t.t;
          if (n != null) {
            var r = n + s;
            if (e.aiHandoffRemovalExpiry !== r) return r;
          }
        }
      }
    }
    function p(e) {
      return (
        r("WAWebAlarm").clearTimeout(e.aiHandoffRemovalEvictionTimer),
        (e.aiHandoffRemovalEvictionTimer = null),
        h(e) ? (e.set({ aiHandoffRemovalExpiry: null }), !0) : !1
      );
    }
    function _(e) {
      if (!(!h(e) && e.aiHandoffRemovalEvictionTimer == null)) {
        (r("WAWebAlarm").clearTimeout(e.aiHandoffRemovalEvictionTimer),
          (e.aiHandoffRemovalEvictionTimer = null));
        var t = e.aiHandoffRemovalExpiry;
        if (
          !(
            o(
              "WAWebBizAiHandoffRemovalTimingModel",
            ).getHandoffRemovalTiming() !== "AFTER_24H_REPLY" ||
            t == null ||
            t === 0
          )
        ) {
          if (g(e, r("WAWeb-moment")().unix())) {
            f(e);
            return;
          }
          e.aiHandoffRemovalEvictionTimer = r("WAWebAlarm").setGlobalTimeout(
            function () {
              return f(e);
            },
            t * u,
          );
        }
      }
    }
    function f(t) {
      if (!g(t, r("WAWeb-moment")().unix())) {
        _(t);
        return;
      }
      (r("WAWebAlarm").clearTimeout(t.aiHandoffRemovalEvictionTimer),
        (t.aiHandoffRemovalEvictionTimer = null),
        t.set({ aiHandoffRemovalExpiry: null, isAiHandoff: !1 }),
        o("WAWebDBUpdateChatTable")
          .updateChatTable(t.id, {
            aiHandoffRemovalExpiry: null,
            isAiHandoff: !1,
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "biz ai handoff eviction failed to persist",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("biz-ai-handoff-evict-persist");
          }));
    }
    function g(e, t) {
      var n = e.aiHandoffRemovalExpiry;
      return n != null && n !== 0 && t >= n;
    }
    function h(e) {
      return e.aiHandoffRemovalExpiry != null && e.aiHandoffRemovalExpiry !== 0;
    }
    function y(e) {
      return (
        e != null &&
        e.bizBotType !== o("WAWebBotTypes").BizBotType.BIZ_1P &&
        e.id.fromMe === !0
      );
    }
    ((l.isHandoffChatRetained = c),
      (l.maybeSetHandoffRemovalExpiry = d),
      (l.computeHandoffRemovalExpiry = m),
      (l.clearHandoffRemovalExpiry = p),
      (l.armHandoffRemovalEvictionTimer = _));
  },
  98,
);
