__d(
  "WAWebBizAdCreationStage1WAUploadUtils",
  [
    "FBLogger",
    "WATimeUtils",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebBackendRuntime",
    "WAWebBizAdCreationCreativeMediaCap",
    "WAWebBizAdCreationMediaToastStrings",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebDataTransfer",
    "WAWebMediaEntry",
    "WAWebMediaPrepMediaProps",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMediaUploadService",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUiIdleEventBus",
    "WAWebUserUtils",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    async function u(e) {
      var t = o("WAWebUserUtils").getMeLidUserOrThrow(),
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
    async function c(e, t) {
      var n = await u(e),
        a = r("WAWebMediaPrepMediaProps")(e.mediaPrep, t).then(function (e) {
          return babelHelpers.extends({}, n, e, { type: e.type });
        }),
        i = babelHelpers.extends({}, await a, {
          author: n.author,
          from: n.from,
          id: n.id,
        }),
        l = new (o("WAWebMsgModel").Msg)(i);
      await l.waitForPrep();
      var s = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMediaUploadService").MediaUploadService,
              ).uploadMediaWithPrep
            : o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep
        )(l, t),
        c = s.body,
        d = s.fbid,
        m = s.mediaResult.mediaEntry,
        p = s.mmsThumbnailData;
      if (!m)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "sendStage1WAUploadMsg: media entry was not created",
        );
      if (d == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "sendStage1WAUploadMsg: fbid was not created",
        );
      return { body: c, fbid: d, mediaResultEntry: m, mmsThumbnailData: p };
    }
    async function d(e) {
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
              o("WAWebAttachMediaGetters").getPreviewable(e) &&
              e.state ===
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING),
            l.length < 3 && l.push(e.type));
          var n = await c(e, t),
            a = n.fbid,
            i = n.mediaResultEntry;
          if (!(i instanceof o("WAWebMediaEntry").UnencryptedMediaEntry))
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "upload failed: mediaResultEntry is not an instance of UnencryptedMediaEntry",
            );
          return { fbid: String(a), type: i.type };
        });
      r("FBLogger")("wa_ctwa_web").info(
        "[uploadAdCreativeMediaToWA] uploading " +
          i.length +
          " media types => " +
          String(l),
      );
      var u = await Promise.allSettled(s),
        d = [],
        p = 0;
      if (
        (u.forEach(function (e, n) {
          e.status === "fulfilled"
            ? d.push(e.value)
            : (p++,
              t.remove(i[n]),
              r("FBLogger")("wa_ctwa_web").mustfix(
                "uploadAdCreativeMediaToWA: Media upload failed for item " +
                  n +
                  " - " +
                  String(e.reason),
              ));
        }),
        d.length === 0)
      ) {
        (r("FBLogger")("wa_ctwa_web").mustfix(
          "uploadAdCreativeMediaToWA: All " +
            i.length +
            " media uploads failed",
        ),
          a());
        return;
      }
      (p > 0 &&
        (m(),
        r("FBLogger")("wa_ctwa_web").warn(
          "[uploadAdCreativeMediaToWA] partial upload: " +
            d.length +
            "/" +
            i.length +
            " succeeded, " +
            p +
            " failed and removed",
        )),
        n(d, t));
    }
    function m() {
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          id: o("WAWebBizAdCreationMediaToastStrings")
            .PARTIAL_UPLOAD_FAILURE_TOAST_ID,
          msg: o(
            "WAWebBizAdCreationMediaToastStrings",
          ).getPartialUploadFailureText(),
        }),
      );
    }
    function p(e, t) {
      var n = [];
      t.forEach(function (e, t) {
        var r = _(e);
        r != null &&
          n.push({ attachment: e, key: "pending-attachment:" + t, kind: r });
      });
      var r = o("WAWebBizAdCreationCreativeMediaCap").applyCreativeMediaCap(
          e,
          n,
          {
            keyOf: function (t) {
              return t.key;
            },
            kindOf: function (t) {
              return t.kind;
            },
          },
        ),
        a = r.accepted,
        i = r.actions;
      for (var l of i)
        o("WAWebToastManager").ToastManager.open(
          s.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebBizAdCreationMediaValidationUtils",
            ).PRUNE_TOAST_MESSAGES[l](),
          }),
        );
      return a.map(function (e) {
        return e.attachment;
      });
    }
    function _(e) {
      var t,
        n = (t = e.file) == null ? void 0 : t.type;
      return n == null
        ? null
        : n.startsWith("video/")
          ? "video"
          : n.startsWith("image/")
            ? "image"
            : null;
    }
    function f(e, t, n) {
      var r = e.getPreviewableMedias();
      if (r.length === 0) {
        t([], e);
        return;
      }
      o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function () {
        return d({
          mediaCollection: e,
          onMediaUploadComplete: t,
          onMediaUploadFailure: n,
        });
      });
    }
    function g(e, t) {
      var n;
      if (e) {
        e.stopPropagation();
        var r = Array.from((n = e.target.files) != null ? n : []);
        y(r, t);
      }
    }
    function h(e, t) {
      (e.preventDefault(), e.stopPropagation());
      var n = new (r("WAWebDataTransfer"))(e.dataTransfer);
      if (n.hasType("Files")) {
        var o = n.getFiles();
        y(o, t);
      }
    }
    function y(e, t) {
      var n = t.mediaCollection,
        a = t.setLoading;
      e.length &&
        (a(!0),
        o("WAWebBizAdCreationMediaValidationUtils")
          .deepCloneMediaCollection(n)
          .then(function (n) {
            return b(n, e, t);
          })
          .catch(function (e) {
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .mustfix("failed to clone media collection");
          })
          .finally(function () {
            a(!1);
          }));
    }
    async function C(e, t) {
      if (e.length === 0) return !1;
      var n = await o(
        "WAWebBizAdCreationMediaValidationUtils",
      ).deepCloneMediaCollection(t.mediaCollection);
      return b(n, e, t);
    }
    async function b(e, t, n) {
      var a = n.items,
        i = n.onMediaUploadComplete,
        l = n.onMediaUploadFailure,
        s = n.onMediaValidationFailure,
        u = n.onSelectedMediaSave,
        c = p(
          a,
          t.map(function (e) {
            return { file: e };
          }),
        );
      if (c.length === 0) return !1;
      var m = new Set(
        e.getPreviewableMedias().map(function (e) {
          return e.id;
        }),
      );
      try {
        await e.processAttachments(
          c,
          void 0,
          o("WAWebBizAdCreationMediaValidationUtils").SUPPORTED_MEDIA_TYPES,
          o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
        );
      } catch (e) {
        return (
          (s != null ? s : l)(),
          r("FBLogger")("wa_ctwa_web")
            .catching(r("getErrorSafe")(e))
            .mustfix("failed to process media for upload"),
          !1
        );
      }
      var _ = new Set(
        e
          .getPreviewableMedias()
          .filter(function (e) {
            return !m.has(e.id);
          })
          .map(function (e) {
            return e.id;
          }),
      );
      return (
        u(e, _),
        d({
          mediaCollection: e,
          onMediaUploadComplete: i,
          onMediaUploadFailure: l,
        }),
        !0
      );
    }
    ((l.acceptAttachmentsUnderCap = p),
      (l.uploadAdCreativeMediaToWA = f),
      (l.handleMediaPick = g),
      (l.handleFileDrop = h),
      (l.addFilesToMediaEditor = C));
  },
  98,
);
