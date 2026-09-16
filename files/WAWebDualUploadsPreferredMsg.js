__d(
  "WAWebDualUploadsPreferredMsg",
  [
    "WAWebMediaGatingUtils",
    "WAWebMediaTypes",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        {
          associationType: o("WAWebMessageAssociation.flow")
            .MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
          isEnabled: o("WAWebMediaGatingUtils")
            .isHdImageDualUploadConsumptionEnabled,
        },
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
      var t,
        n = c(e);
      return n != null &&
        ((t = n.mediaData) == null ? void 0 : t.mediaStage) ===
          o("WAWebMediaTypes").MediaDataStage.RESOLVED
        ? n
        : e;
    }
    function c(e) {
      return d(
        o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id),
        e.type,
      );
    }
    function d(t, n) {
      var r = e.get(n);
      if (r == null) return null;
      var o = t.find(function (e) {
        return e.associationType === r.associationType;
      });
      return o != null && r.isEnabled() ? o : null;
    }
    ((l.getPreferredMediaMsgs = s),
      (l.getPreferredMediaMsg = u),
      (l.getHdChildMsg = c),
      (l.findHdChildMsg = d));
  },
  98,
);
