__d(
  "WAWebBotForwardCapability",
  [
    "fbt",
    "WAWebBotGating",
    "WAWebBotMultiModalUtils",
    "WAWebFileUtils",
    "WAWebHatchGating",
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
            ? c(t)
            : t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
              ? u(t)
              : { state: "hidden" };
    }
    function u(e) {
      if (!o("WAWebBotGating").isMetaAiVideoInputEnabled())
        return { state: "hidden" };
      var t = o("WAWebBotGating").getMetaAiVideoUploadSizeLimitBytes();
      return e.size != null && e.size > t
        ? {
            state: "disabled",
            reason: s._(/*BTDS*/ "Can't forward videos over {size}", [
              s._param("size", o("WAWebL10nFilesize").getL10nFilesize(t)),
            ]),
          }
        : { state: "shown" };
    }
    function c(e) {
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
    function d(t) {
      return e(t).state === "shown";
    }
    function m(t) {
      return e(t).state !== "hidden";
    }
    function p(e) {
      if (
        !o("WAWebHatchGating").isHatchVideoUploadEnabled() &&
        e.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
        })
      )
        return !1;
      var t = o("WAWebHatchGating").getHatchDocumentUploadSizeLimitBytes();
      return !e.some(function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          e.size != null &&
          e.size > t
        );
      });
    }
    ((l.getForwardToMetaAiEligibility = e),
      (l.canForwardMsgToMetaAi = d),
      (l.isMetaAiForwardRowVisibleForMsgs = m),
      (l.canForwardSelectionToHatch = p));
  },
  226,
);
