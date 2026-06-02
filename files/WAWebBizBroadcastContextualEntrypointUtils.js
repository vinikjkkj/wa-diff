__d(
  "WAWebBizBroadcastContextualEntrypointUtils",
  [
    "WAWebAttachMediaCollection",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebFileUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebWamEnumWebcRmrReasonCode",
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
        return null;
      }
    }
    function s(e) {
      try {
        var t,
          n,
          r =
            (t = e.interactivePayload) == null || (t = t.buttons) == null
              ? void 0
              : t.at(0);
        if (r == null) return null;
        var o = r.name,
          a = r.buttonParamsJson,
          i = a != null ? JSON.parse(a) : null;
        if (o == null || i == null) return null;
        var l =
          o === "cta_url"
            ? {
                displayText: i.display_text,
                linkTrackingEnabled:
                  (n = i.link_tracking_enabled) != null ? n : !1,
                type: "cta_url",
                url: i.url,
              }
            : o === "cta_call"
              ? {
                  displayText: i.display_text,
                  phoneNumber: i.phone_number,
                  type: "cta_call",
                }
              : o === "quick_reply"
                ? { displayText: i.display_text, type: "quick_reply" }
                : null;
        return l;
      } catch (e) {
        return null;
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
        return null;
      }
    }
    function d(e, t) {
      var n;
      if (e == null || !t) return null;
      var r = e.trim().split(/\s+/),
        o = (n = r.pop()) != null ? n : "",
        a = r.join(" ");
      return {
        type: "cta_url",
        displayText: a,
        linkTrackingEnabled: !1,
        url: o,
      };
    }
    ((l.getAttachmentDataFromMsg = e),
      (l.getCTAButtonDataFromMsgText = s),
      (l.getMessageFromMsg = u),
      (l.getAttachmentDataFromFile = c),
      (l.getCTAURLDataFromMsgText = d));
  },
  98,
);
