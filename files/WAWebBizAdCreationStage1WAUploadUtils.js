__d(
  "WAWebBizAdCreationStage1WAUploadUtils",
  [
    "fbt",
    "FBLogger",
    "Promise",
    "WATimeUtils",
    "WAWebAttachMediaModel",
    "WAWebBizAdCreationCreativeMediaView.react",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebDataTransfer",
    "WAWebKeyboardTabUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaEntry",
    "WAWebMediaPrep",
    "WAWebModalManager",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUiIdleEventBus",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = function () {
        return s._(/*BTDS*/ "Some media failed to upload and were removed.");
      };
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
          var s = yield o("WAWebMediaPrep").uploadMediaWithPrep(l, t),
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
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = t.getPreviewableMedias(),
            s = [],
            u = l.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = {};
                    ((t.type = e.type),
                      (t.isMediaCryptoExpectedForChat = !1),
                      (t.addEvenWhilePreparing =
                        e.previewable &&
                        e.state ===
                          o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE
                            .PROCESSING),
                      s.length < 3 && s.push(e.type));
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
          r("FBLogger")("wa_ctwa_web").warn(
            "[uploadAdCreativeMediaToWA] uploading " +
              l.length +
              " media types => " +
              String(s),
          );
          var m = r("justknobx")._("748");
          if (m) {
            var p = yield (e || (e = n("Promise"))).allSettled(u),
              f = [],
              g = 0;
            if (
              (p.forEach(function (e, n) {
                e.status === "fulfilled"
                  ? f.push(e.value)
                  : (g++,
                    t.remove(l[n]),
                    r("FBLogger")("wa_ctwa_web").mustfix(
                      "uploadAdCreativeMediaToWA: Media upload failed for item " +
                        n +
                        " - " +
                        String(e.reason),
                    ));
              }),
              f.length === 0)
            ) {
              (r("FBLogger")("wa_ctwa_web").mustfix(
                "uploadAdCreativeMediaToWA: All " +
                  l.length +
                  " media uploads failed",
              ),
                i());
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
                  l.length +
                  " succeeded, " +
                  g +
                  " failed and removed",
              )),
              a(f, t));
          } else
            yield (e || (e = n("Promise")))
              .all(u)
              .then(function (e) {
                a(e, t);
              })
              .catch(function (e) {
                (i(),
                  r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(e))
                    .mustfix("uploadAdCreativeMediaToWA: Media upload failed"));
              });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      var r = e.getPreviewableMedias();
      if (r.length === 0) {
        t([], e);
        return;
      }
      o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function () {
        return g(e, t, n);
      });
    }
    function C(e, t, n, r, o, a) {
      var i;
      if (e) {
        e.stopPropagation();
        var l = Array.from((i = e.target.files) != null ? i : []);
        v(l, t, n, r, o, a);
      }
    }
    function b(e, t, n, o, a, i) {
      (e.preventDefault(), e.stopPropagation());
      var l = new (r("WAWebDataTransfer"))(e.dataTransfer);
      if (l.hasType("Files")) {
        var s = l.getFiles();
        v(s, t, n, o, a, i);
      }
    }
    function v(e, t, a, i, l, s) {
      if (e.length) {
        var u = r("justknobx")._("4621");
        (s(!0),
          o("WAWebBizAdCreationMediaValidationUtils")
            .deepCloneMediaCollection(t)
            .then(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = e.map(function (e) {
                        return { file: e };
                      }),
                      s = o(
                        "WAWebBizAdCreationMediaValidationUtils",
                      ).maybePruneNewAttachments(t, n);
                    for (var d of s.pruneActions)
                      o("WAWebToastManager").ToastManager.open(
                        c.jsx(o("WAWebToast.react").Toast, {
                          msg: o(
                            "WAWebBizAdCreationMediaValidationUtils",
                          ).PRUNE_TOAST_MESSAGES[d](),
                        }),
                      );
                    if ((s.shouldClearExisting && t.reset(), u)) {
                      if (s.attachments.length === 0) return;
                      var m = new Set(
                        t.getPreviewableMedias().map(function (e) {
                          return e.id;
                        }),
                      );
                      try {
                        yield t.processAttachments(
                          s.attachments,
                          void 0,
                          o("WAWebBizAdCreationMediaValidationUtils")
                            .SUPPORTED_MEDIA_TYPES,
                          o("WAWebBizAdCreationMediaValidationUtils")
                            .MAX_IMAGE_COUNT,
                        );
                      } catch (e) {
                        (i(),
                          r("FBLogger")("wa_ctwa_web")
                            .catching(r("getErrorSafe")(e))
                            .mustfix("failed to process media for upload"));
                        return;
                      }
                      var p = new Set(
                        t
                          .getPreviewableMedias()
                          .filter(function (e) {
                            return !m.has(e.id);
                          })
                          .map(function (e) {
                            return e.id;
                          }),
                      );
                      (l(t, p), g(t, a, i));
                      return;
                    }
                    var _ = r("WAWebNoop");
                    s.attachments.length > 0 &&
                      (_ = function () {
                        t.processAttachments(
                          s.attachments,
                          void 0,
                          o("WAWebBizAdCreationMediaValidationUtils")
                            .SUPPORTED_MEDIA_TYPES,
                          o("WAWebBizAdCreationMediaValidationUtils")
                            .MAX_IMAGE_COUNT,
                        );
                      });
                    var f = c.jsx(
                      r("WAWebBizAdCreationCreativeMediaView.react"),
                      {
                        onRender: _,
                        mediaCollection: t,
                        suportedMediaTypes: o(
                          "WAWebBizAdCreationMediaValidationUtils",
                        ).SUPPORTED_MEDIA_TYPES,
                        mediaMimeTypes: o(
                          "WAWebBizAdCreationMediaValidationUtils",
                        ).ALLOWED_MIME_TYPES,
                        onMediaUploadComplete: a,
                        onMediaUploadFailure: i,
                        onSelectedMediaSave: l,
                      },
                    );
                    o("WAWebModalManager").ModalManager.openMedia(f, {
                      blockClose: !0,
                      focusType: {
                        type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                      },
                      transition: "status-modal",
                    });
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            )
            .catch(function (e) {
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix("failed to clone media collection");
            })
            .finally(function () {
              s(!1);
            }));
      }
    }
    ((l.WA_PARTIAL_UPLOAD_FAILURE_TOAST_MSG = d),
      (l.sendStage1WAUploadMsg = _),
      (l.uploadAdCreativeMediaToWA = y),
      (l.handleMediaPick = C),
      (l.handleFileDrop = b));
  },
  226,
);
