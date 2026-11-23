__d(
  "MAIBAMessageEnvelope",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n, r, o, a, i, l, s;
      return {
        display_message: (t = e.displayMessage) != null ? t : void 0,
        hide_user_message: (n = e.hideUserMessage) != null ? n : void 0,
        is_silent: (r = e.isSilent) != null ? r : void 0,
        message_type: (o = e.messageType) != null ? o : void 0,
        offline_threading_id: e.offlineThreadingId,
        postback_payload: (a = e.postbackPayload) != null ? a : void 0,
        selected_assets: (i = e.selectedAssets) != null ? i : void 0,
        selected_suggested_prompt:
          (l = e.selectedSuggestedPrompt) != null ? l : void 0,
        user_media_attachments:
          (s = e.userMediaAttachments) != null ? s : void 0,
      };
    }
    i.toMAIBAMessageEnvelopeInput = e;
  },
  66,
);
