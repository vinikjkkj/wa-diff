__d(
  "WAWebBizAdCreationStage1WAUploadUtils",
  [
    "fbt",
    "FBLogger",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
          var m = yield (e || (e = n("Promise"))).allSettled(u),
            p = [],
            f = 0;
          if (
            (m.forEach(function (e, n) {
              e.status === "fulfilled"
                ? p.push(e.value)
                : (f++,
                  t.remove(l[n]),
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
                l.length +
                " media uploads failed",
            ),
              i());
            return;
          }
          (f > 0 &&
            (o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: d() }),
            ),
            r("FBLogger")("wa_ctwa_web").warn(
              "[uploadAdCreativeMediaToWA] partial upload: " +
                p.length +
                "/" +
                l.length +
                " succeeded, " +
                f +
                " failed and removed",
            )),
            a(p, t));
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
    function v(e, t, a, i, l, u) {
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
                    d = e.some(function (e) {
                      return e.type.startsWith("video/");
                    });
                  u &&
                    d &&
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
                  var m = n.map(function (e) {
                      return { file: e };
                    }),
                    p = o(
                      "WAWebBizAdCreationMediaValidationUtils",
                    ).maybePruneNewAttachments(t, m),
                    _ = t.getPreviewableMedias().length > 0;
                  if (p.pruneActions.includes("CROSS_MEDIA_VIDEO_ADDED") && _) {
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Videos can't be added when images are selected.",
                        ),
                      }),
                    );
                    return;
                  }
                  for (var f of p.pruneActions)
                    o("WAWebToastManager").ToastManager.open(
                      c.jsx(o("WAWebToast.react").Toast, {
                        msg: o(
                          "WAWebBizAdCreationMediaValidationUtils",
                        ).PRUNE_TOAST_MESSAGES[f](),
                      }),
                    );
                  if (
                    (p.shouldClearExisting && t.reset(),
                    p.attachments.length !== 0)
                  ) {
                    var h = new Set(
                      t.getPreviewableMedias().map(function (e) {
                        return e.id;
                      }),
                    );
                    try {
                      yield t.processAttachments(
                        p.attachments,
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
                    (l(t, y), g(t, a, i));
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
    ((l.WA_PARTIAL_UPLOAD_FAILURE_TOAST_MSG = d),
      (l.sendStage1WAUploadMsg = _),
      (l.uploadAdCreativeMediaToWA = y),
      (l.handleMediaPick = C),
      (l.handleFileDrop = b));
  },
  226,
);
