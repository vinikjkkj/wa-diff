__d(
  "WAWebBizAdCreationStage1WAUploadUtils",
  [
    "FBLogger",
    "Promise",
    "WATimeUtils",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebBackendRuntime",
    "WAWebBizAdCreationCreativeMediaCap",
    "WAWebBizAdCreationMediaToastStrings",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebDataTransfer",
    "WAWebLidStatusMigrationUtils",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserUtils").getMeLidUserOrThrow(),
            ),
            n = new (r("WAWebMsgKey"))({
              from: t,
              id: yield r("WAWebMsgKey").newId(),
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
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield c(e),
            a = r("WAWebMediaPrepMediaProps")(e.mediaPrep, t).then(
              function (e) {
                return babelHelpers.extends({}, n, e, { type: e.type });
              },
            ),
            i = babelHelpers.extends({}, yield a, {
              author: n.author,
              from: n.from,
              id: n.id,
            }),
            l = new (o("WAWebMsgModel").Msg)(i);
          yield l.waitForPrep();
          var s = yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMediaUploadService").MediaUploadService,
                  ).uploadMediaWithPrep
                : o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep
            )(l, t),
            u = s.body,
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
          return { body: u, fbid: d, mediaResultEntry: m, mmsThumbnailData: p };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.mediaCollection,
            i = t.onMediaUploadComplete,
            l = t.onMediaUploadFailure,
            s = a.getPreviewableMedias(),
            u = [],
            c = s.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = {};
                    ((t.type = e.type),
                      (t.isMediaCryptoExpectedForChat = !1),
                      (t.addEvenWhilePreparing =
                        o("WAWebAttachMediaGetters").getPreviewable(e) &&
                        e.state ===
                          o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                            .PROCESSING),
                      u.length < 3 && u.push(e.type));
                    var n = yield m(e, t),
                      a = n.fbid,
                      i = n.mediaResultEntry;
                    if (
                      !(i instanceof o("WAWebMediaEntry").UnencryptedMediaEntry)
                    )
                      throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
                        "upload failed: mediaResultEntry is not an instance of UnencryptedMediaEntry",
                      );
                    return { fbid: String(a), type: i.type };
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          r("FBLogger")("wa_ctwa_web").info(
            "[uploadAdCreativeMediaToWA] uploading " +
              s.length +
              " media types => " +
              String(u),
          );
          var d = yield (e || (e = n("Promise"))).allSettled(c),
            p = [],
            _ = 0;
          if (
            (d.forEach(function (e, t) {
              e.status === "fulfilled"
                ? p.push(e.value)
                : (_++,
                  a.remove(s[t]),
                  r("FBLogger")("wa_ctwa_web").mustfix(
                    "uploadAdCreativeMediaToWA: Media upload failed for item " +
                      t +
                      " - " +
                      String(e.reason),
                  ));
            }),
            p.length === 0)
          ) {
            (r("FBLogger")("wa_ctwa_web").mustfix(
              "uploadAdCreativeMediaToWA: All " +
                s.length +
                " media uploads failed",
            ),
              l());
            return;
          }
          (_ > 0 &&
            (g(),
            r("FBLogger")("wa_ctwa_web").warn(
              "[uploadAdCreativeMediaToWA] partial upload: " +
                p.length +
                "/" +
                s.length +
                " succeeded, " +
                _ +
                " failed and removed",
            )),
            i(p, a));
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          id: o("WAWebBizAdCreationMediaToastStrings")
            .PARTIAL_UPLOAD_FAILURE_TOAST_ID,
          msg: o(
            "WAWebBizAdCreationMediaToastStrings",
          ).getPartialUploadFailureText(),
        }),
      );
    }
    function h(e, t) {
      var n = [];
      t.forEach(function (e, t) {
        var r = y(e);
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
          u.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebBizAdCreationMediaValidationUtils",
            ).PRUNE_TOAST_MESSAGES[l](),
          }),
        );
      return a.map(function (e) {
        return e.attachment;
      });
    }
    function y(e) {
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
    function C(e, t, n) {
      var r = e.getPreviewableMedias();
      if (r.length === 0) {
        t([], e);
        return;
      }
      o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function () {
        return _({
          mediaCollection: e,
          onMediaUploadComplete: t,
          onMediaUploadFailure: n,
        });
      });
    }
    function b(e, t) {
      var n;
      if (e) {
        e.stopPropagation();
        var r = Array.from((n = e.target.files) != null ? n : []);
        S(r, t);
      }
    }
    function v(e, t) {
      (e.preventDefault(), e.stopPropagation());
      var n = new (r("WAWebDataTransfer"))(e.dataTransfer);
      if (n.hasType("Files")) {
        var o = n.getFiles();
        S(o, t);
      }
    }
    function S(e, t) {
      var n = t.mediaCollection,
        a = t.setLoading;
      e.length &&
        (a(!0),
        o("WAWebBizAdCreationMediaValidationUtils")
          .deepCloneMediaCollection(n)
          .then(function (n) {
            return E(n, e, t);
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
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0) return !1;
          var n = yield o(
            "WAWebBizAdCreationMediaValidationUtils",
          ).deepCloneMediaCollection(t.mediaCollection);
          return E(n, e, t);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n.items,
            i = n.onMediaUploadComplete,
            l = n.onMediaUploadFailure,
            s = n.onMediaValidationFailure,
            u = n.onSelectedMediaSave,
            c = h(
              a,
              t.map(function (e) {
                return { file: e };
              }),
            );
          if (c.length === 0) return !1;
          var d = new Set(
            e.getPreviewableMedias().map(function (e) {
              return e.id;
            }),
          );
          try {
            yield e.processAttachments(
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
          var m = new Set(
            e
              .getPreviewableMedias()
              .filter(function (e) {
                return !d.has(e.id);
              })
              .map(function (e) {
                return e.id;
              }),
          );
          return (
            u(e, m),
            _({
              mediaCollection: e,
              onMediaUploadComplete: i,
              onMediaUploadFailure: l,
            }),
            !0
          );
        })),
        k.apply(this, arguments)
      );
    }
    ((l.acceptAttachmentsUnderCap = h),
      (l.uploadAdCreativeMediaToWA = C),
      (l.handleMediaPick = b),
      (l.handleFileDrop = v),
      (l.addFilesToMediaEditor = R));
  },
  98,
);
