__d(
  "WAWebMessageAssociationConfig",
  [
    "WAWebDualUploadsSendPolicy",
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return e == null ? _ : (t = g.get(e)) != null ? t : _;
    }
    function s(e, t) {
      var n = p(e);
      if (!(n == null || !n.canDestinationCarry(t) || !n.isEnabled()))
        return { role: n.role, viewMode: n.viewMode };
    }
    function u(e) {
      return h.has(e);
    }
    function c(e) {
      return y.get(e);
    }
    function d(e) {
      var t = e.chatWid;
      return !r("WAWebWid").isNewsletter(t) && !t.isBot();
    }
    function m(e) {
      var t = e.businessProfile,
        n = e.chatWid;
      return o("WAWebDualUploadsSendPolicy").canChatCarryHdImagePair(n, t);
    }
    function p(e) {
      return e ===
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD
        ? {
            canDestinationCarry: m,
            isEnabled: o("WAWebMediaGatingUtils")
              .isHdImageDualUploadConsumptionEnabled,
            role: "shadow",
            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
          }
        : e ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
          ? {
              canDestinationCarry: d,
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
                  .AV1_VIDEO_DUAL_UPLOAD ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .STREAMED_HD_VIDEO_DUAL_UPLOAD ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .ORIGINAL_VIDEO_DUAL_UPLOAD ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .ORIGINAL_IMAGE_DUAL_UPLOAD ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .MEDIA_POLL ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .POLL_ADD_OPTION ||
              e ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .STICKER_ANNOTATION ||
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
    var _ = { canStarIndependently: !0, detachOnStarChange: !1 },
      f = { canStarIndependently: !0, detachOnStarChange: !0 },
      g = new Map([
        [
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM,
          f,
        ],
        [
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .POLL_ADD_OPTION,
          f,
        ],
      ]),
      h = new Set([o("WAWebMsgType").MSG_TYPE.ALBUM]),
      y = new Map([
        [
          o("WAWebMsgType").MSG_TYPE.ALBUM,
          {
            preserveSubtreesFor: new Set([
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .MEDIA_ALBUM,
            ]),
          },
        ],
      ]);
    ((l.getChildStarringPolicy = e),
      (l.getForwardAssociationConfig = s),
      (l.isForwardContainerMsgType = u),
      (l.getStarredMessageAssociationPolicy = c));
  },
  98,
);
