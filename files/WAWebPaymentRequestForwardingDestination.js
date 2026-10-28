__d(
  "WAWebPaymentRequestForwardingDestination",
  ["WAWebBotUtils", "WAWebInteractiveMessageHeaderMediaType"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebInteractiveMessageHeaderMediaType")
        .InteractiveMessageHeaderMediaType.IMAGE,
      o("WAWebInteractiveMessageHeaderMediaType")
        .InteractiveMessageHeaderMediaType.DOCUMENT,
      o("WAWebInteractiveMessageHeaderMediaType")
        .InteractiveMessageHeaderMediaType.VIDEO,
    ]);
    function s(e) {
      return (
        e != null &&
        u(e) &&
        !e.isAiHub() &&
        !e.isSupportAccount() &&
        !e.isCAPISupportAccount() &&
        !c(e)
      );
    }
    function u(e) {
      return (
        e.isRegularUser() &&
        (e.isLid() || e.server === "c.us") &&
        (e.device == null || e.device === 0)
      );
    }
    function c(e) {
      return (
        e.isLid() &&
        (e.user === o("WAWebBotUtils").MAIBA_AI_HUB_LID_WID.user ||
          e.user === o("WAWebBotUtils").META_BOT_LID_WID.user)
      );
    }
    function d(t) {
      return (t == null ? void 0 : t.hasMediaAttachment) !== !0
        ? (t == null ? void 0 : t.thumbnail) == null &&
            (t == null ? void 0 : t.mediaType) == null
        : t.thumbnail == null && t.mediaType != null && e.has(t.mediaType);
    }
    ((l.isPaymentRequestForwardDestination = s),
      (l.isSupportedPaymentRequestForwardHeader = d));
  },
  98,
);
