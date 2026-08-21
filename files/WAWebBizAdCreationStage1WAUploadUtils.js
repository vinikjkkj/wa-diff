__d(
  "WAWebBizAdCreationStage1WAUploadUtils",
  [
    "fbt",
    "FBLogger",
    "Promise",
    "WATimeUtils",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
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
    function y(e, t, n) {
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
    function C(e, t, n, r, o, a, i) {
      var l;
      if (e) {
        e.stopPropagation();
        var s = Array.from((l = e.target.files) != null ? l : []);
        v(s, t, n, r, o, a, i);
      }
    }
    function b(e, t, n, o, a, i, l) {
      (e.preventDefault(), e.stopPropagation());
      var s = new (r("WAWebDataTransfer"))(e.dataTransfer);
      if (s.hasType("Files")) {
        var u = s.getFiles();
        v(u, t, n, o, a, i, l);
      }
    }
    function v(e, t, a, i, l, u, d) {
      e.length &&
        (u(!0),
        o("WAWebBizAdCreationMediaValidationUtils")
          .deepCloneMediaCollection(t)
          .then(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = e,
                    u = e.some(function (e) {
                      return e.type.startsWith("image/");
                    }),
                    m = e.some(function (e) {
                      return e.type.startsWith("video/");
                    });
                  u &&
                    m &&
                    ((n = e.filter(function (e) {
                      return !e.type.startsWith("video/");
                    })),
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Can't mix photos and video. Only photos were kept.",
                        ),
                      }),
                    ));
                  var p = n.map(function (e) {
                      return { file: e };
                    }),
                    _ = o(
                      "WAWebBizAdCreationMediaValidationUtils",
                    ).maybePruneNewAttachments(t, p),
                    f = t.getPreviewableMedias().length > 0;
                  if (_.pruneActions.includes("CROSS_MEDIA_VIDEO_ADDED") && f) {
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Videos can't be added when images are selected.",
                        ),
                      }),
                    );
                    return;
                  }
                  for (var h of _.pruneActions)
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: o(
                          "WAWebBizAdCreationMediaValidationUtils",
                        ).PRUNE_TOAST_MESSAGES[h](),
                      }),
                    );
                  if (
                    (_.shouldClearExisting && t.reset(),
                    _.attachments.length !== 0)
                  ) {
                    var y = new Set(
                      t.getPreviewableMedias().map(function (e) {
                        return e.id;
                      }),
                    );
                    try {
                      yield t.processAttachments(
                        _.attachments,
                        void 0,
                        o("WAWebBizAdCreationMediaValidationUtils")
                          .SUPPORTED_MEDIA_TYPES,
                        o("WAWebBizAdCreationMediaValidationUtils")
                          .MAX_IMAGE_COUNT,
                      );
                    } catch (e) {
                      ((d != null ? d : i)(),
                        r("FBLogger")("wa_ctwa_web")
                          .catching(r("getErrorSafe")(e))
                          .mustfix("failed to process media for upload"));
                      return;
                    }
                    var C = new Set(
                      t
                        .getPreviewableMedias()
                        .filter(function (e) {
                          return !y.has(e.id);
                        })
                        .map(function (e) {
                          return e.id;
                        }),
                    );
                    (l(t, C),
                      g({
                        mediaCollection: t,
                        onMediaUploadComplete: a,
                        onMediaUploadFailure: i,
                      }));
                  }
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
            u(!1);
          }));
    }
    ((l.uploadAdCreativeMediaToWA = y),
      (l.handleMediaPick = C),
      (l.handleFileDrop = b));
  },
  226,
);
