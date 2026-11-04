__d(
  "WAWebDualUploadsPreferredMsg",
  [
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
            isPlayOnly: !0,
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
      var t = d(
          o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id),
          e.type,
          "save",
        ),
        n = t == null ? void 0 : t.mediaData;
      return t != null &&
        n != null &&
        n.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
        n.filehash != null &&
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
    function d(t, n, r) {
      r === void 0 && (r = "play");
      var o = function (n) {
          if (r === "save" && n.isPlayOnly === !0) return 0;
          var e = t.find(function (e) {
            return e.associationType === n.associationType;
          });
          if (e != null && n.isEnabled()) return { v: e };
        },
        a;
      for (var i of (l = e.get(n)) != null ? l : []) {
        var l;
        if (((a = o(i)), a !== 0 && a)) return a.v;
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
