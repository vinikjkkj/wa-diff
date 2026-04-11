__d(
  "WAWebNotesUtils",
  [
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWebABProps").getABPropConfigValue(
      "smb_notes_content_max_limit",
    );
    function s(e) {
      return (
        e != null &&
        e.isUser() &&
        !e.isPSA() &&
        !e.isOfficialBizAccount() &&
        !e.isIAS() &&
        !e.isSupportAccount() &&
        !e.isCAPISupportAccount() &&
        !e.isBot() &&
        o("WAWebBizGatingUtils").smbNotesV1Enabled()
      );
    }
    function u(e) {
      if (
        e == null ||
        ((e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) &&
          (e == null ? void 0 : e.nativeFlowName) ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW)
      )
        return !1;
      var t = o("WAWebFrontendMsgGetters").getText(e);
      if (t == null || t.trim() === "") return !1;
      var n = o("WAWebFrontendMsgGetters").getChat(e);
      return n == null ? !1 : s(n.id);
    }
    ((l.MAX_NOTE_LENGTH = e),
      (l.shouldEnableNotesForWid = s),
      (l.shouldEnableNotesForMsg = u));
  },
  98,
);
