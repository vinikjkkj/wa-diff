__d(
  "WAWebMediaDragFiles",
  [
    "Promise",
    "WALogger",
    "WAWebCreateFile",
    "WAWebDragAndDropGatingUtils",
    "WAWebFileUtils",
    "WAWebFilenameManager",
    "WAWebForwardDrag",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMsgActionCanDownloadMsg",
    "WAWebMsgType",
    "WAWebODS",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map([
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
    function c(e) {
      var t,
        n = u.get(e.type);
      return (
        n != null &&
        e.isGif !== !0 &&
        !S(e.type, (t = e.mediaData) == null ? void 0 : t.mimetype) &&
        o("WAWebDragAndDropGatingUtils").isDragAndDropCapabilityEnabled(
          n.capability,
        ) &&
        d(e)
      );
    }
    function d(e) {
      return (
        e.mediaData != null &&
        o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(e, !0)
      );
    }
    function m(e) {
      return !u.has(e.type) || !d(e) ? null : C(e, b(e.mediaData));
    }
    function p(e) {
      return (
        o("WAWebForwardDrag").isForwardDrag(e) &&
        o("WAWebDragAndDropGatingUtils").isDragAndDropCapabilityEnabled(
          o("WAWebDragAndDropGatingUtils").DragAndDropCapability.DragToChat,
        )
      );
    }
    function _(e) {
      if (e == null || !p(e)) return null;
      r("WAWebODS").incr("web.drag_and_drop.drag_to_chat.drop");
      var t = o("WAWebForwardDrag").takeForwardDragMsgs(e);
      return (s || (s = n("Promise"))).all(t.map(f)).then(function (e) {
        var n = e.filter(Boolean);
        return n.length === t.length ? n : [];
      });
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!c(t)) return null;
          try {
            var n = C(t, yield h(t));
            return n != null && !S(t.type, n.type) ? n : null;
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = b(e.mediaData);
          return t != null
            ? t
            : (yield e.downloadMedia({
                downloadEvenIfExpensive: !0,
                isUserInitiated: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
              }),
              b(e.mediaData));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return t != null && v(e.type, t.type)
        ? o("WAWebCreateFile").createFile(
            [t],
            o("WAWebFilenameManager").getDefaultName(e),
            { type: t.type },
          )
        : null;
    }
    function b(e) {
      if (e == null) return null;
      var t = e.filehash,
        n = e.mediaBlob;
      return n instanceof r("WAWebMediaOpaqueData")
        ? n.forceToBlob()
        : n instanceof Blob
          ? n
          : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t);
    }
    function v(e, t) {
      var n = u.get(e);
      return n == null
        ? !1
        : n.mimePrefix == null || t.startsWith(n.mimePrefix);
    }
    function S(e, t) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        t != null &&
        o("WAWebFileUtils").typeFromMimetype(t) !==
          o("WAWebFileUtils").FILETYPE.DOCUMENT
      );
    }
    ((l.isDraggableMediaMsg = c),
      (l.canTakeMediaOut = d),
      (l.getCachedMediaFile = m),
      (l.isMediaDrag = p),
      (l.takeMediaDragFiles = _));
  },
  98,
);
