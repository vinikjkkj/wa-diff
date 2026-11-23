__d(
  "EBMessageContentType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "deleteForMe" || e === "revoked";
    }
    function l(e) {
      var t = e.payload();
      return (function (e) {
        if (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "transportEvent") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "adminMessage") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "locallyTransformedMessage")
        )
          return "unsupported";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "messageApplication"
        ) {
          var t = e;
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "consumerApplication"
            ) {
              var t = e;
              return u(t);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "armadillo"
            ) {
              var n = e;
              return s(n);
            }
            if (e === void 0) return "unsupported";
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(t.subProtocol());
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(t);
    }
    function s(e) {
      var t,
        n = (t = e.payload) == null ? void 0 : t.content;
      return (n == null ? void 0 : n.extendedContentMessage) != null
        ? "xma"
        : "unsupported";
    }
    function u(e) {
      var t,
        n,
        r,
        o = (t = e.payload) == null ? void 0 : t.content,
        a = (n = e.payload) == null ? void 0 : n.applicationData;
      if ((a == null ? void 0 : a.revoke) != null) return "revoked";
      if ((o == null ? void 0 : o.messageText) != null) return "text";
      if ((o == null ? void 0 : o.reactionMessage) != null) return "reaction";
      if ((o == null ? void 0 : o.editMessage) != null) return "edit";
      if (
        ((r = e.attachmentMessage()) == null ||
        (r = r.payload) == null ||
        (r = r.ancillary) == null
          ? void 0
          : r.gifPlayback) === !0
      )
        return "gif";
      var i = e.attachmentMessage();
      return i != null
        ? i.kind === "imageTransport"
          ? "image"
          : i.kind === "audioTransport"
            ? "audio"
            : i.kind === "videoTransport"
              ? "video"
              : i.kind === "documentTransport"
                ? "document"
                : i.kind === "stickerTransport"
                  ? "sticker"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          i.kind,
                      );
                    })()
        : "unsupported";
    }
    ((i.isDeleteMessageType = e), (i.determineMessageType = l));
  },
  66,
);
