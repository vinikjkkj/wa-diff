__d(
  "WAWebBizBroadcastContextualEntrypointUtils",
  [
    "WAWebAttachMediaCollection",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFileUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = null;
            if (
              o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES.has(
                e.type,
              ) &&
              e.mediaData != null
            ) {
              var n,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m = e.mediaData,
                p = null;
              ((n = e.mediaData) == null ? void 0 : n.mediaBlob) == null &&
                (yield e.downloadMedia({
                  downloadEvenIfExpensive: !0,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                  isUserInitiated: !0,
                }));
              var _ = (a = e.mediaData) == null ? void 0 : a.mediaBlob;
              if (
                (_ instanceof r("WAWebMediaOpaqueData")
                  ? (p = _.forceToBlob())
                  : ((i = e.mediaData) == null ? void 0 : i.filehash) != null &&
                    (p = o(
                      "WAWebMediaInMemoryBlobCache",
                    ).InMemoryMediaBlobCache.get(e.mediaData.filehash)),
                p == null)
              )
                return null;
              var f = new File(
                [p],
                (l = e.filename) != null ? l : "forwarded-media",
                {
                  type:
                    p.type ||
                    ((s = e.mediaData) == null ? void 0 : s.mimetype) ||
                    "image/jpeg",
                },
              );
              t = {
                file: f,
                fileExt: o("WAWebFileUtils").getFileExtension(
                  (u = e.filename) != null ? u : "",
                ),
                fileName: (c = e.filename) != null ? c : "",
                fileSize: m.size,
                mediaType: e.type,
                mimetype: m.mimetype,
                pageCount: (d = m.pageCount) != null ? d : 0,
                previewSize: { width: m.fullWidth, height: m.fullHeight },
                previewUrl: URL.createObjectURL(f),
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
    function c(e) {
      var t, n;
      return (t =
        (n = e.caption) != null
          ? n
          : o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES.has(
                e.type,
              )
            ? null
            : e.body) != null
        ? t
        : null;
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          try {
            var t = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              n = [{ file: e }];
            yield t.processAttachments(
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
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
      (l.getCTAButtonDataFromMsgText = u),
      (l.getMessageFromMsg = c),
      (l.getAttachmentDataFromFile = d),
      (l.getCTAURLDataFromMsgText = p));
  },
  98,
);
