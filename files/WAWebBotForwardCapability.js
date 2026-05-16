__d(
  "WAWebBotForwardCapability",
  [
    "fbt",
    "WAWebBotGating",
    "WAWebBotMultiModalUtils",
    "WAWebFileUtils",
    "WAWebL10nFilesize",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      if (e.length !== 1) return { state: "hidden" };
      var t = e[0];
      return t.type === o("WAWebMsgType").MSG_TYPE.CHAT
        ? { state: "shown" }
        : t.type === o("WAWebMsgType").MSG_TYPE.IMAGE
          ? o("WAWebBotGating").isMetaAiImageInputEnabled()
            ? { state: "shown" }
            : { state: "hidden" }
          : t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? u(t)
            : { state: "hidden" };
    }
    function u(e) {
      if (!o("WAWebBotGating").isMetaAiDocUploadEnabled())
        return { state: "hidden" };
      var t = o("WAWebBotGating").getMetaAiDocumentUploadSizeLimitBytes();
      if (e.size != null && e.size > t)
        return {
          state: "disabled",
          reason: s._(/*BTDS*/ "Can't forward files over {size}", [
            s._param("size", o("WAWebL10nFilesize").getL10nFilesize(t)),
          ]),
        };
      var n =
        e.filename != null
          ? o("WAWebFileUtils").getFileExtension(e.filename)
          : null;
      return n == null ||
        !o("WAWebBotMultiModalUtils").getMetaAiSupportedFileTypesList().has(n)
        ? {
            state: "disabled",
            reason: s._(/*BTDS*/ "Message type not supported"),
          }
        : { state: "shown" };
    }
    function c(t) {
      return e(t).state === "shown";
    }
    function d(t) {
      return e(t).state !== "hidden";
    }
    ((l.getForwardToMetaAiEligibility = e),
      (l.canForwardMsgToMetaAi = c),
      (l.isMetaAiForwardRowVisibleForMsgs = d));
  },
  226,
);
