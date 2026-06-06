__d(
  "WAWebBizBroadcastContextualEntrypointUtils",
  [
    "WAWebAttachMediaCollection",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFileUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumWebcRmrReasonCode",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      try {
        var t = null;
        if (e.mediaData != null) {
          var n,
            a,
            i,
            l,
            s,
            u,
            c,
            d = e.mediaData,
            m = null;
          ((n = e.mediaData) == null ? void 0 : n.mediaBlob) == null &&
            (await e.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .SEND_TO_CHAT,
              isUserInitiated: !0,
            }));
          var p = (a = e.mediaData) == null ? void 0 : a.mediaBlob;
          if (
            (p instanceof r("WAWebMediaOpaqueData")
              ? (m = p.forceToBlob())
              : ((i = e.mediaData) == null ? void 0 : i.filehash) != null &&
                (m = o(
                  "WAWebMediaInMemoryBlobCache",
                ).InMemoryMediaBlobCache.get(e.mediaData.filehash)),
            m == null)
          )
            return null;
          var _ = new File([m], "forwarded-media", {
            type:
              m.type ||
              ((l = e.mediaData) == null ? void 0 : l.mimetype) ||
              "image/jpeg",
          });
          t = {
            file: _,
            fileExt: o("WAWebFileUtils").getFileExtension(
              (s = e.filename) != null ? s : "",
            ),
            fileName: (u = e.filename) != null ? u : "",
            fileSize: d.size,
            mediaType: e.type,
            mimetype: d.mimetype,
            pageCount: (c = d.pageCount) != null ? c : 0,
            previewSize: { width: d.fullWidth, height: d.fullHeight },
            previewUrl: URL.createObjectURL(_),
          };
        }
        return t;
      } catch (e) {
        return (
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClickFailed(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_FORWARD_MODAL,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.FORWARD_MODAL,
            "attachment",
            r("getErrorSafe")(e).message,
          ),
          null
        );
      }
    }
    function s(e) {
      try {
        var t,
          n,
          a =
            (t = e.interactivePayload) == null || (t = t.buttons) == null
              ? void 0
              : t.at(0);
        if (a == null) return null;
        var i = a.name,
          l = a.buttonParamsJson,
          s = l != null ? JSON.parse(l) : null;
        if (i == null || s == null) return null;
        var u =
          i === "cta_url"
            ? {
                displayText: s.display_text,
                linkTrackingEnabled:
                  (n = s.link_tracking_enabled) != null ? n : !1,
                type: "cta_url",
                url: s.url,
              }
            : i === "cta_call"
              ? {
                  displayText: s.display_text,
                  phoneNumber: s.phone_number,
                  type: "cta_call",
                }
              : i === "quick_reply"
                ? { displayText: s.display_text, type: "quick_reply" }
                : null;
        return u;
      } catch (e) {
        return (
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClickFailed(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_FORWARD_MODAL,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.FORWARD_MODAL,
            "cta_button",
            r("getErrorSafe")(e).message,
          ),
          null
        );
      }
    }
    function u(e) {
      var t, n;
      return (t =
        (n = e.caption) != null
          ? n
          : o("WAWebMsgGetters").getIsMedia(e)
            ? null
            : e.body) != null
        ? t
        : null;
    }
    async function c(e) {
      if (e == null) return null;
      try {
        var t = new (r("WAWebAttachMediaCollection"))({
            chatParticipantCount: 1,
          }),
          n = [{ file: e }];
        await t.processAttachments(
          n,
          void 0,
          o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
          1,
        );
        var a = t.getPreviewableMedias(),
          i = a[0];
        if (i == null) return null;
        var l = {
          file: e,
          fileExt: i.fileExt,
          fileName: i.filename,
          fileSize: i.filesize,
          mediaType: i.type,
          mimetype: i.mimetype,
          pageCount: i.documentPageCount,
          previewSize: i.fullPreviewSize,
          previewUrl: i.fullPreview,
        };
        return l;
      } catch (e) {
        return (
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClickFailed(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_SHARE_MODAL,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.SHARE_MODAL,
            "attachment",
            r("getErrorSafe")(e).message,
          ),
          null
        );
      }
    }
    function d(e, t) {
      if (e == null || !t) return null;
      try {
        var n,
          a = e.trim().split(/\s+/),
          i = (n = a.pop()) != null ? n : "",
          l = a.join(" ");
        return {
          type: "cta_url",
          displayText: l,
          linkTrackingEnabled: !1,
          url: i,
        };
      } catch (e) {
        return (
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClickFailed(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_SHARE_MODAL,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.SHARE_MODAL,
            "cta_button",
            r("getErrorSafe")(e).message,
          ),
          null
        );
      }
    }
    ((l.getAttachmentDataFromMsg = e),
      (l.getCTAButtonDataFromMsgText = s),
      (l.getMessageFromMsg = u),
      (l.getAttachmentDataFromFile = c),
      (l.getCTAURLDataFromMsgText = d));
  },
  98,
);
