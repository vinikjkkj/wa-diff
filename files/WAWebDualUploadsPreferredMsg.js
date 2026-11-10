__d(
  "WAWebDualUploadsPreferredMsg",
  [
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGatingUtils",
    "WAWebMediaLocalAvailability",
    "WAWebMediaTypes",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        [
          {
            associationType: o("WAWebMessageAssociation.flow")
              .MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
            isEnabled: o("WAWebMediaGatingUtils")
              .isHdImageDualUploadConsumptionEnabled,
          },
        ],
      ],
      [
        o("WAWebMsgType").MSG_TYPE.VIDEO,
        [
          {
            associationType: o("WAWebMessageAssociation.flow")
              .MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD,
            isEnabled: o("WAWebMediaGatingUtils")
              .isAv1VideoDualUploadConsumptionEnabled,
          },
          {
            associationType: o("WAWebMessageAssociation.flow")
              .MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD,
            isEnabled: o("WAWebMediaGatingUtils")
              .isHevcVideoDualUploadConsumptionEnabled,
          },
        ],
      ],
    ]);
    function s(e) {
      var t = new Set(),
        n = [];
      for (var r of e) {
        var o = u(r);
        t.has(o) || (t.add(o), n.push(o));
      }
      return n;
    }
    function u(e) {
      var t = c(e),
        n = t == null ? void 0 : t.mediaData;
      if (t == null || n == null || n.filehash == null) return e;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
        !o("WAWebMediaGatingUtils").isSaveRemoteHdVideoLegEnabled()
      ) {
        if (
          t.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .AV1_VIDEO_DUAL_UPLOAD
        )
          return e;
      } else if (e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
        var r = t.mediaObject;
        return r == null ||
          r.lastDownloadFailureResult != null ||
          r.entries.getDownloadEntry(
            o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
              t,
            ),
          ) == null ||
          n.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING ||
          n.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED
          ? e
          : t;
      }
      return n.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
        o("WAWebMediaLocalAvailability").isMsgMediaAvailableLocally(t)
        ? t
        : e;
    }
    function c(e) {
      return d(
        o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id),
        e.type,
      );
    }
    function d(t, n) {
      var r = function (n) {
          var e = t.find(function (e) {
            return e.associationType === n.associationType;
          });
          if (e != null && n.isEnabled()) return { v: e };
        },
        o;
      for (var a of (i = e.get(n)) != null ? i : []) {
        var i;
        if (((o = r(a)), o)) return o.v;
      }
      return null;
    }
    ((l.getPreferredMediaMsgs = s),
      (l.getPreferredMediaMsg = u),
      (l.getHdChildMsg = c),
      (l.findHdChildMsg = d));
  },
  98,
);
