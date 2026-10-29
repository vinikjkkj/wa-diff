__d(
  "WAWebImagineActionMediaInputHandler",
  ["WAWebImagineActionLogger"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "gallery_open" &&
          "chat" in t &&
          "selectableMediaTypes" in t
        ) {
          var n = t.chat,
            r = t.selectableMediaTypes;
          o("WAWebImagineActionLogger").logImagineGalleryOpen(n, r);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "gallery_selection" &&
          "chat" in t &&
          "attachments" in t
        ) {
          var a = t.chat,
            i = t.attachments;
          o("WAWebImagineActionLogger").logImagineGallerySelectionConfirmed(
            a,
            i,
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "document_open" &&
          "chat" in t
        ) {
          var l = t.chat;
          o("WAWebImagineActionLogger").logImagineDocumentClick(l);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "document_selection" &&
          "chat" in t &&
          "count" in t
        ) {
          var s = t.chat,
            u = t.count;
          o("WAWebImagineActionLogger").logImagineDocumentSelectionConfirmed(
            s,
            u,
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "camera_open" &&
          "chat" in t
        ) {
          var c = t.chat;
          o("WAWebImagineActionLogger").logImagineCameraClick(c);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "camera_capture" &&
          "chat" in t
        ) {
          var d = t.chat;
          o("WAWebImagineActionLogger").logImagineCameraCapture(d);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "camera_send" &&
          "chat" in t
        ) {
          var m = t.chat;
          o("WAWebImagineActionLogger").logImagineCameraSend(m);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "camera_cancel" &&
          "chat" in t &&
          "hasCapturedMedia" in t
        ) {
          var p = t.chat,
            _ = t.hasCapturedMedia;
          o("WAWebImagineActionLogger").logImagineCameraCancel(p, _ ? 1 : 0);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "send_confirm" &&
          "chat" in t &&
          "mediaTypes" in t &&
          "origins" in t
        ) {
          var f = t.chat,
            g = t.mediaTypes,
            h = t.origins;
          o("WAWebImagineActionLogger").logImagineMediaSendConfirm({
            chat: f,
            mediaTypes: g,
            origins: h,
          });
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "send_cancel" &&
          "chat" in t &&
          "mediaTypes" in t &&
          "origins" in t
        ) {
          var y = t.chat,
            C = t.mediaTypes,
            b = t.origins;
          o("WAWebImagineActionLogger").logImagineMediaSendCancel({
            chat: y,
            mediaTypes: C,
            origins: b,
          });
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "attachments_processed" &&
          "chat" in t &&
          "mediaTypes" in t &&
          "origin" in t &&
          "tooLargeTypes" in t
        ) {
          var v = t.chat,
            S = t.mediaTypes,
            R = t.origin,
            L = t.tooLargeTypes;
          (o("WAWebImagineActionLogger").isPasteOrDropOrigin(R) &&
            o("WAWebImagineActionLogger").logImagineMediaCopyPaste({
              chat: v,
              mediaTypes: S,
              origins: [R],
            }),
            o("WAWebImagineActionLogger").logImagineMediaSizeExceedLimit({
              chat: v,
              mediaTypes: L,
              origins: [R],
            }));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "media_forwarded" &&
          "chats" in t &&
          "mediaTypes" in t
        ) {
          var E = t.chats,
            k = t.mediaTypes;
          E.length === 1 &&
            o("WAWebImagineActionLogger").logImagineForwardSelection(E[0], k);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    l.logImagineMediaInputEvent = e;
  },
  98,
);
