__d(
  "WAWebForwardAssociationConfig",
  [
    "WAWebDualUploadsSendPolicy",
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = d(e);
      if (!(n == null || !n.canDestinationCarry(t) || !n.isEnabled()))
        return { role: n.role, viewMode: n.viewMode };
    }
    function s(e) {
      return m.has(e);
    }
    function u(e) {
      var t = e.chatWid;
      return !r("WAWebWid").isNewsletter(t) && !t.isBot();
    }
    function c(e) {
      var t = e.businessProfile,
        n = e.chatWid;
      return o("WAWebDualUploadsSendPolicy").canChatCarryHdImagePair(n, t);
    }
    function d(e) {
      return e ===
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD
        ? {
            canDestinationCarry: c,
            isEnabled: o("WAWebMediaGatingUtils")
              .isHdImageDualUploadConsumptionEnabled,
            role: "shadow",
            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
          }
        : e ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
          ? {
              canDestinationCarry: u,
              isEnabled: o("WAWebMediaGatingUtils").isAlbumV2SenderEnabled,
              role: "member",
              viewMode: o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM,
            }
          : e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .BOT_PLUGIN ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .HD_VIDEO_DUAL_UPLOAD ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .HEVC_VIDEO_DUAL_UPLOAD ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .MEDIA_POLL ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .POLL_ADD_OPTION ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN
            ? null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    var m = new Set([o("WAWebMsgType").MSG_TYPE.ALBUM]);
    ((l.getForwardAssociationConfig = e), (l.isForwardContainerMsgType = s));
  },
  98,
);
