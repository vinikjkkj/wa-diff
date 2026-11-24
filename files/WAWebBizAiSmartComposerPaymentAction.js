__d(
  "WAWebBizAiSmartComposerPaymentAction",
  [
    "WAWebABProps",
    "WAWebBizAiAgentGating",
    "WAWebChatGetters",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebGetMaybeChatById",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPixFeature",
    "WAWebUprAttachmentTrayFeature",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      ["PIX_PAYMENT_HANDLE", "pix"],
      ["CLABE_PAYMENT_HANDLE", "clabe"],
      ["UPR_PAYMENT_HANDLE", "clabe"],
      ["UPI_PAYMENT_HANDLE", "upi"],
    ]);
    function s(e, t) {
      if (p(t) == null) return { type: "insert_text" };
      var n = o("WAWebGetMaybeChatById").getMaybeChatById(e);
      return n == null ? { type: "insert_text" } : m(t, n, u);
    }
    function u() {
      return o("WAWebBizAiAgentGating").isCheckoutEnabled()
        ? o("WAWebBizAiAgentGating").isCheckoutSuggestionActionDisabled()
          ? "kill_switch"
          : "on"
        : "gate_off";
    }
    function c(e) {
      return p(e) != null && u() === "on" ? "text_fallback" : null;
    }
    function d(e) {
      var t = p(e);
      return t == null || u() !== "on"
        ? e.product != null
          ? "product"
          : "text"
        : t === "pix"
          ? "pix_payment_handle"
          : t === "clabe"
            ? "clabe_payment_handle"
            : t === "upi"
              ? "upi_payment_handle"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function m(e, t, n) {
      var r = p(e);
      return r == null || r === "upi" || n() !== "on"
        ? { type: "insert_text" }
        : r === "pix"
          ? _(t)
          : r === "clabe"
            ? g(t)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    r,
                );
              })();
    }
    function p(t) {
      return e.get(t.suggestionType);
    }
    function _(e) {
      return !h(e) ||
        !f() ||
        o("WAWebUserPrefsCustomPaymentMethods").getPIX() == null
        ? { type: "insert_text" }
        : { type: "open_pix_request" };
    }
    function f() {
      return (
        o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
        o("WAWebPixFeature").isPixEnabled() &&
        o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web") &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_pix_web_attachment_tray",
        )
      );
    }
    function g(e) {
      if (
        !h(e) ||
        o("WAWebUserPrefsCustomPaymentMethods").getAllUprStoredKeys().length ===
          0
      )
        return { type: "insert_text" };
      var t = o("WAWebUprAttachmentTrayFeature").resolveUprMethodForChat(e);
      return t == null
        ? { type: "insert_text" }
        : { type: "open_upr_request", methods: t };
    }
    function h(e) {
      var t = e.contact;
      return (
        o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(e.id) ===
          o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL &&
        !e.id.isAiHub() &&
        !o("WAWebChatGetters").getIsBusinessAssistantBot(e) &&
        t != null &&
        !o("WAWebContactGetters").getIsMe(t) &&
        !t.isEnterprise
      );
    }
    ((l.getSuggestionTapAction = s),
      (l.getCheckoutSuggestionActionGate = u),
      (l.getTextFallbackOutcome = c),
      (l.getSuggestionCardType = d),
      (l.resolveSuggestionAction = m));
  },
  98,
);
