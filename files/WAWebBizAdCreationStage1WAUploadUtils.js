__d(
  "WAWebBizAdCreationStage1WAUploadUtils",
  [
    "fbt",
    "FBLogger",
    "WATimeUtils",
    "WAWebAttachMediaModel",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebDataTransfer",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaEntry",
    "WAWebMediaPrep",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUiIdleEventBus",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Some media failed to upload and were removed.");
    }
    async function d(e) {
      var t = o("WAWebLidStatusMigrationUtils").matWidConvert(
          o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        ),
        n = new (r("WAWebMsgKey"))({
          from: t,
          id: await r("WAWebMsgKey").newId(),
          selfDir: "out",
          to: t,
        });
      return {
        author: t,
        from: t,
        id: n,
        isAdsMedia: !0,
        local: !0,
        t: o("WATimeUtils").unixTime(),
        to: t,
        type: e.type,
      };
    }
    async function m(e, t) {
      var n = await d(e),
        a = o("WAWebMediaPrep")
          .getMediaPropsNew(e.mediaPrep, t)
          .then(function (e) {
            return babelHelpers.extends({}, n, e, { type: e.type });
          }),
        i = babelHelpers.extends({}, await a, {
          author: n.author,
          from: n.from,
          id: n.id,
        }),
        l = new (o("WAWebMsgModel").Msg)(i);
      await l.waitForPrep();
      var s = await o("WAWebMediaPrep").uploadMediaWithPrep(l, t),
        u = s.body,
        c = s.fbid,
        m = s.mediaResult.mediaEntry,
        p = s.mmsThumbnailData;
      if (!m)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "sendStage1WAUploadMsg: media entry was not created",
        );
      if (c == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "sendStage1WAUploadMsg: fbid was not created",
        );
      return { body: u, fbid: c, mediaResultEntry: m, mmsThumbnailData: p };
    }
    async function p(e) {
      var t = e.mediaCollection,
        n = e.onMediaUploadComplete,
        a = e.onMediaUploadFailure,
        i = t.getPreviewableMedias(),
        l = [],
        s = i.map(async function (e) {
          var t = {};
          ((t.type = e.type),
            (t.isMediaCryptoExpectedForChat = !1),
            (t.addEvenWhilePreparing =
              e.previewable &&
              e.state ===
                o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING),
            l.length < 3 && l.push(e.type));
          var n = await m(e, t),
            a = n.fbid,
            i = n.mediaResultEntry;
          if (!(i instanceof o("WAWebMediaEntry").UnencryptedMediaEntry))
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "upload failed: mediaResultEntry is not an instance of UnencryptedMediaEntry",
            );
          return { fbid: String(a), type: i.type };
        });
      r("FBLogger")("wa_ctwa_web").warn(
        "[uploadAdCreativeMediaToWA] uploading " +
          i.length +
          " media types => " +
          String(l),
      );
      var d = await Promise.allSettled(s),
        p = [],
        _ = 0;
      if (
        (d.forEach(function (e, n) {
          e.status === "fulfilled"
            ? p.push(e.value)
            : (_++,
              t.remove(i[n]),
              r("FBLogger")("wa_ctwa_web").mustfix(
                "uploadAdCreativeMediaToWA: Media upload failed for item " +
                  n +
                  " - " +
                  String(e.reason),
              ));
        }),
        p.length === 0)
      ) {
        (r("FBLogger")("wa_ctwa_web").mustfix(
          "uploadAdCreativeMediaToWA: All " +
            i.length +
            " media uploads failed",
        ),
          a());
        return;
      }
      (_ > 0 &&
        (o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: c() }),
        ),
        r("FBLogger")("wa_ctwa_web").warn(
          "[uploadAdCreativeMediaToWA] partial upload: " +
            p.length +
            "/" +
            i.length +
            " succeeded, " +
            _ +
            " failed and removed",
        )),
        n(p, t));
    }
    function _(e, t, n) {
      var r = e.getPreviewableMedias();
      if (r.length === 0) {
        t([], e);
        return;
      }
      o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function () {
        return p({
          mediaCollection: e,
          onMediaUploadComplete: t,
          onMediaUploadFailure: n,
        });
      });
    }
    function f(e, t, n, r, o, a) {
      var i;
      if (e) {
        e.stopPropagation();
        var l = Array.from((i = e.target.files) != null ? i : []);
        h(l, t, n, r, o, a);
      }
    }
    function g(e, t, n, o, a, i) {
      (e.preventDefault(), e.stopPropagation());
      var l = new (r("WAWebDataTransfer"))(e.dataTransfer);
      if (l.hasType("Files")) {
        var s = l.getFiles();
        h(s, t, n, o, a, i);
      }
    }
    function h(e, t, n, a, i, l) {
      e.length &&
        (l(!0),
        o("WAWebBizAdCreationMediaValidationUtils")
          .deepCloneMediaCollection(t)
          .then(async function (t) {
            var l = e,
              c = e.some(function (e) {
                return e.type.startsWith("image/");
              }),
              d = e.some(function (e) {
                return e.type.startsWith("video/");
              });
            c &&
              d &&
              ((l = e.filter(function (e) {
                return !e.type.startsWith("video/");
              })),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Can't mix photos and video. Only photos were kept.",
                  ),
                }),
              ));
            var m = l.map(function (e) {
                return { file: e };
              }),
              _ = o(
                "WAWebBizAdCreationMediaValidationUtils",
              ).maybePruneNewAttachments(t, m),
              f = t.getPreviewableMedias().length > 0;
            if (_.pruneActions.includes("CROSS_MEDIA_VIDEO_ADDED") && f) {
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Videos can't be added when images are selected.",
                  ),
                }),
              );
              return;
            }
            for (var g of _.pruneActions)
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: o(
                    "WAWebBizAdCreationMediaValidationUtils",
                  ).PRUNE_TOAST_MESSAGES[g](),
                }),
              );
            if (
              (_.shouldClearExisting && t.reset(), _.attachments.length !== 0)
            ) {
              var h = new Set(
                t.getPreviewableMedias().map(function (e) {
                  return e.id;
                }),
              );
              try {
                await t.processAttachments(
                  _.attachments,
                  void 0,
                  o("WAWebBizAdCreationMediaValidationUtils")
                    .SUPPORTED_MEDIA_TYPES,
                  o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
                );
              } catch (e) {
                (a(),
                  r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(e))
                    .mustfix("failed to process media for upload"));
                return;
              }
              var y = new Set(
                t
                  .getPreviewableMedias()
                  .filter(function (e) {
                    return !h.has(e.id);
                  })
                  .map(function (e) {
                    return e.id;
                  }),
              );
              (i(t, y),
                p({
                  mediaCollection: t,
                  onMediaUploadComplete: n,
                  onMediaUploadFailure: a,
                }));
            }
          })
          .catch(function (e) {
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .mustfix("failed to clone media collection");
          })
          .finally(function () {
            l(!1);
          }));
    }
    ((l.WA_PARTIAL_UPLOAD_FAILURE_TOAST_MSG = c),
      (l.sendStage1WAUploadMsg = m),
      (l.uploadAdCreativeMediaToWA = _),
      (l.handleMediaPick = f),
      (l.handleFileDrop = g));
  },
  226,
);
