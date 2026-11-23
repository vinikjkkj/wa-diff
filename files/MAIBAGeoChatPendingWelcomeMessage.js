__d(
  "MAIBAGeoChatPendingWelcomeMessage",
  ["AdsAIEntrypointEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t, n, r, o, a, i, l, s, u, c, d, m) {
      e = {
        adAccountID: c,
        displayMessage: d,
        message: t,
        userMediaAttachments: n,
        selectedAssets: r,
        selectedSuggestedPrompt: o,
        entrypointContext: a,
        entrypoint: i,
        isSentFromOutOfChat: u,
        onSuccess: m,
        promptIndex: l,
        promptSource: s,
      };
    }
    function u(e, t) {
      var n, o, a, i, l, s, u;
      return {
        adAccountIDOverride: (n = e.adAccountID) != null ? n : void 0,
        botMessageOTID: t.botMessageOTID,
        displayMessage: (o = e.displayMessage) != null ? o : void 0,
        entrypoint:
          (a = r("AdsAIEntrypointEnum").cast(e.entrypoint)) != null
            ? a
            : void 0,
        entrypointContext: (i = e.entrypointContext) != null ? i : void 0,
        initialUserMessage: (l = e.displayMessage) != null ? l : e.message,
        isOnlyDictation: e.isOnlyDictation,
        isSentFromOutOfChat: e.isSentFromOutOfChat,
        messageForSend: e.displayMessage != null ? e.message : void 0,
        onSuccess: e.onSuccess,
        promptIndex: e.promptIndex,
        promptSource: e.promptSource,
        selectedAssetsGraphQL: (s = e.selectedAssets) != null ? s : void 0,
        selectedSuggestedPrompt:
          (u = e.selectedSuggestedPrompt) != null ? u : void 0,
        userMediaAttachments:
          e.userMediaAttachments != null
            ? [].concat(e.userMediaAttachments)
            : void 0,
        userMessageOTID: t.userMessageOTID,
      };
    }
    function c(t) {
      e != null && (e = babelHelpers.extends({}, e, { isOnlyDictation: t }));
    }
    function d() {
      return e;
    }
    function m() {
      var t = e;
      return ((e = null), t);
    }
    ((l.setPendingWelcomeMessage = s),
      (l.buildMAIBAGeoPendingConsentInput = u),
      (l.setPendingWelcomeMessageDictationUsage = c),
      (l.peekPendingWelcomeMessage = d),
      (l.consumePendingWelcomeMessage = m));
  },
  98,
);
