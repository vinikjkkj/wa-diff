__d(
  "WAWebMediaDragFiles",
  [
    "WALogger",
    "WAWebActiveIntegrityHoldout",
    "WAWebCreateFile",
    "WAWebDragAndDropGatingUtils",
    "WAWebFileUtils",
    "WAWebFilenameManager",
    "WAWebForwardDrag",
    "WAWebHarmfulFileWarningGate",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMsgActionCanDownloadMsg",
    "WAWebMsgType",
    "WAWebODS",
    "WAWebWamEnumWebcRmrReasonCode",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map([
        [
          o("WAWebMsgType").MSG_TYPE.IMAGE,
          {
            capability: o("WAWebDragAndDropGatingUtils").DragAndDropCapability
              .DragToChat,
            mimePrefix: "image/",
          },
        ],
        [
          o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          {
            capability: o("WAWebDragAndDropGatingUtils").DragAndDropCapability
              .DragFilesToChat,
            mimePrefix: null,
          },
        ],
        [
          o("WAWebMsgType").MSG_TYPE.VIDEO,
          {
            capability: o("WAWebDragAndDropGatingUtils").DragAndDropCapability
              .DragFilesToChat,
            mimePrefix: "video/",
          },
        ],
      ]);
    function u(e) {
      var t,
        n = s.get(e.type);
      return (
        n != null &&
        e.isGif !== !0 &&
        !b(e.type, (t = e.mediaData) == null ? void 0 : t.mimetype) &&
        o("WAWebDragAndDropGatingUtils").isDragAndDropCapabilityEnabled(
          n.capability,
        ) &&
        c(e)
      );
    }
    function c(e) {
      return (
        e.mediaData != null &&
        o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(e, !0)
      );
    }
    function d(e) {
      if (!s.has(e.type) || !c(e)) return null;
      var t = g(e, y(e.mediaData));
      return t != null && h(e) ? t : null;
    }
    function m(e) {
      return (
        o("WAWebForwardDrag").isForwardDrag(e) &&
        o("WAWebDragAndDropGatingUtils").isDragAndDropCapabilityEnabled(
          o("WAWebDragAndDropGatingUtils").DragAndDropCapability.DragToChat,
        )
      );
    }
    function p(e) {
      if (e == null || !m(e)) return null;
      r("WAWebODS").incr("web.drag_and_drop.drag_to_chat.drop");
      var t = o("WAWebForwardDrag").takeForwardDragMsgs(e);
      return Promise.all(t.map(_)).then(function (e) {
        var n = e.filter(Boolean);
        return n.length === t.length ? n : [];
      });
    }
    async function _(t) {
      if (!u(t)) return null;
      try {
        var n = g(t, await f(t));
        return n != null && !b(t.type, n.type) ? n : null;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "media drag: the dragged media could not be downloaded",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
    }
    async function f(e) {
      var t = y(e.mediaData);
      return t != null
        ? t
        : (await e.downloadMedia({
            downloadEvenIfExpensive: !0,
            isUserInitiated: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .SEND_TO_CHAT,
          }),
          y(e.mediaData));
    }
    function g(e, t) {
      return t != null && C(e.type, t.type)
        ? o("WAWebCreateFile").createFile(
            [t],
            o("WAWebFilenameManager").getDefaultName(e),
            { type: t.type },
          )
        : null;
    }
    function h(e) {
      return (
        !r("justknobx")._("8497") ||
        !o("WAWebHarmfulFileWarningGate").shouldShowHarmfulFileWarning(e) ||
        o("WAWebActiveIntegrityHoldout").isSuppressedByActiveIntegrityHoldout()
      );
    }
    function y(e) {
      if (e == null) return null;
      var t = e.filehash,
        n = e.mediaBlob;
      return n instanceof r("WAWebMediaOpaqueData")
        ? n.forceToBlob()
        : n instanceof Blob
          ? n
          : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t);
    }
    function C(e, t) {
      var n = s.get(e);
      return n == null
        ? !1
        : n.mimePrefix == null || t.startsWith(n.mimePrefix);
    }
    function b(e, t) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        t != null &&
        o("WAWebFileUtils").typeFromMimetype(t) !==
          o("WAWebFileUtils").FILETYPE.DOCUMENT
      );
    }
    ((l.isDraggableMediaMsg = u),
      (l.canTakeMediaOut = c),
      (l.getCachedMediaFile = d),
      (l.isMediaDrag = m),
      (l.takeMediaDragFiles = p),
      (l.isHarmfulFileAllowed = h));
  },
  98,
);
