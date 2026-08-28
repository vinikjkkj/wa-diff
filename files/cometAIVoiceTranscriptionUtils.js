__d(
  "cometAIVoiceTranscriptionUtils",
  ["RpGenaiSctpCaptionsGenAIBotStateCoreTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.stateMessage.userContent,
        r = e.stateMessage.botContent;
      return (
        n != null && t.push(u(n)),
        r != null && t.push(c(r)),
        d(e) === "USER" && t.reverse(),
        t
      );
    }
    function s(t) {
      var n = [];
      for (var r of e(t)) {
        var o = r.otid;
        o != null && n.push(babelHelpers.extends({}, r, { otid: o }));
      }
      return n;
    }
    function u(e) {
      var t, n;
      return {
        otid: e.otid,
        role: "user",
        text: (t = (n = e.caption) == null ? void 0 : n.text) != null ? t : "",
      };
    }
    function c(e) {
      var t, n;
      return {
        botContent: e,
        otid: e.otid,
        role: "assistant",
        text: (t = (n = e.caption) == null ? void 0 : n.text) != null ? t : "",
      };
    }
    function d(e) {
      var t,
        n,
        r,
        a = e.stateMessage,
        i = (t = a.turnMetaData) == null ? void 0 : t.userSpeechStartTimestamp,
        l = (n = a.turnMetaData) == null ? void 0 : n.botSpeechStartTimestamp;
      return i == null ||
        (l != null && Number(l) > Number(i)) ||
        (a.state ===
          o("RpGenaiSctpCaptionsGenAIBotStateCoreTypes").BotStateType
            .THINKING &&
          ((r = a.botContent) == null ||
          (r = r.llmResp) == null ||
          (r = r.genaiViewModels) == null ||
          (r = r.streaming_state_view_model) == null
            ? void 0
            : r.streaming_state) === "Imagining")
        ? "AI"
        : "USER";
    }
    function m(e) {
      return (
        e.stateMessage.state ===
          o("RpGenaiSctpCaptionsGenAIBotStateCoreTypes").BotStateType
            .LISTENING ||
        e.stateMessage.state ===
          o("RpGenaiSctpCaptionsGenAIBotStateCoreTypes").BotStateType.THINKING
      );
    }
    ((l.getMessages = e),
      (l.getOTIDMessages = s),
      (l.isListeningOrThinking = m));
  },
  98,
);
