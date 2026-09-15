__d(
  "WAWebBizAdCreationStage1WAUploadUtils",
  [
    "fbt",
    "FBLogger",
    "Promise",
    "WATimeUtils",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebBizAdCreationCreativeMediaCap",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebDataTransfer",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaEntry",
    "WAWebMediaPrep",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUiIdleEventBus",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d() {
      return s._(/*BTDS*/ "Some media couldn't be uploaded and were removed");
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
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
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield m(e),
            a = o("WAWebMediaPrep")
              .getMediaPropsNew(e.mediaPrep, t)
              .then(function (e) {
                return babelHelpers.extends({}, n, e, { type: e.type });
              }),
            i = babelHelpers.extends({}, yield a, {
              author: n.author,
              from: n.from,
              id: n.id,
            }),
            l = new (o("WAWebMsgModel").Msg)(i);
          yield l.waitForPrep();
          var s = yield o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep(
              l,
              t,
            ),
            u = s.body,
            c = s.fbid,
            d = s.mediaResult.mediaEntry,
            p = s.mmsThumbnailData;
          if (!d)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "sendStage1WAUploadMsg: media entry was not created",
            );
          if (c == null)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "sendStage1WAUploadMsg: fbid was not created",
            );
          return { body: u, fbid: c, mediaResultEntry: d, mmsThumbnailData: p };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.mediaCollection,
            i = t.onMediaUploadComplete,
            l = t.onMediaUploadFailure,
            s = a.getPreviewableMedias(),
            u = [],
            m = s.map(
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
                    var n = yield _(e, t),
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
          var p = yield (e || (e = n("Promise"))).allSettled(m),
            f = [],
            g = 0;
          if (
            (p.forEach(function (e, t) {
              e.status === "fulfilled"
                ? f.push(e.value)
                : (g++,
                  a.remove(s[t]),
                  r("FBLogger")("wa_ctwa_web").mustfix(
                    "uploadAdCreativeMediaToWA: Media upload failed for item " +
                      t +
                      " - " +
                      String(e.reason),
                  ));
            }),
            f.length === 0)
          ) {
            (r("FBLogger")("wa_ctwa_web").mustfix(
              "uploadAdCreativeMediaToWA: All " +
                s.length +
                " media uploads failed",
            ),
              l());
            return;
          }
          (g > 0 &&
            (o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: d() }),
            ),
            r("FBLogger")("wa_ctwa_web").warn(
              "[uploadAdCreativeMediaToWA] partial upload: " +
                f.length +
                "/" +
                s.length +
                " succeeded, " +
                g +
                " failed and removed",
            )),
            i(f, a));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n = [];
      t.forEach(function (e, t) {
        var r = C(e);
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
          c.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebBizAdCreationMediaValidationUtils",
            ).PRUNE_TOAST_MESSAGES[l](),
          }),
        );
      return a.map(function (e) {
        return e.attachment;
      });
    }
    function C(e) {
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
    function b(e, t, n) {
      var r = e.getPreviewableMedias();
      if (r.length === 0) {
        t([], e);
        return;
      }
      o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function () {
        return g({
          mediaCollection: e,
          onMediaUploadComplete: t,
          onMediaUploadFailure: n,
        });
      });
    }
    function v(e, t) {
      var n;
      if (e) {
        e.stopPropagation();
        var r = Array.from((n = e.target.files) != null ? n : []);
        R(r, t);
      }
    }
    function S(e, t) {
      (e.preventDefault(), e.stopPropagation());
      var n = new (r("WAWebDataTransfer"))(e.dataTransfer);
      if (n.hasType("Files")) {
        var o = n.getFiles();
        R(o, t);
      }
    }
    function R(e, t) {
      var n = t.mediaCollection,
        a = t.setLoading;
      e.length &&
        (a(!0),
        o("WAWebBizAdCreationMediaValidationUtils")
          .deepCloneMediaCollection(n)
          .then(function (n) {
            return L(n, e, t);
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
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n.items,
            i = n.onMediaUploadComplete,
            l = n.onMediaUploadFailure,
            s = n.onMediaValidationFailure,
            u = n.onSelectedMediaSave,
            c = y(
              a,
              t.map(function (e) {
                return { file: e };
              }),
            );
          if (c.length !== 0) {
            var d = new Set(
              e.getPreviewableMedias().map(function (e) {
                return e.id;
              }),
            );
            try {
              yield e.processAttachments(
                c,
                void 0,
                o("WAWebBizAdCreationMediaValidationUtils")
                  .SUPPORTED_MEDIA_TYPES,
                o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
              );
            } catch (e) {
              ((s != null ? s : l)(),
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("failed to process media for upload"));
              return;
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
            (u(e, m),
              g({
                mediaCollection: e,
                onMediaUploadComplete: i,
                onMediaUploadFailure: l,
              }));
          }
        })),
        E.apply(this, arguments)
      );
    }
    ((l.acceptAttachmentsUnderCap = y),
      (l.uploadAdCreativeMediaToWA = b),
      (l.handleMediaPick = v),
      (l.handleFileDrop = S));
  },
  226,
);
