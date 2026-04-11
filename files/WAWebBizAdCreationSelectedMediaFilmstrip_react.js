__d(
  "WAWebBizAdCreationSelectedMediaFilmstrip.react",
  [
    "CometDraggableList.react",
    "CometDraggableListItemKeyboardHandler.react",
    "FBLogger",
    "Promise",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationCreativeFilmstripMediaThumbnail.react",
    "WAWebBizAdCreationCreativeMediaView.react",
    "WAWebBizAdCreationCreativeSelectedMediaNullState.react",
    "WAWebBizAdCreationLWIMediaUpload",
    "WAWebBizAdCreationLinkWAMediaToStatus",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebBizAdCreationSelectMediaButton.react",
    "WAWebBizAdCreationStage2LWIUploadUtils",
    "WAWebBizAdLogger",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "getWAWebBizAdCreationCreativeCarouselReducer",
    "justknobx",
    "react",
    "useWAWebBizAdCreationSpecDispatcherContext",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "waWebBizAdCreationMediaCollectionReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useMemo,
      _ = c.useState,
      f = {
        draggableList: {
          columnGap: "x1s70e7g",
          flexWrap: "x1a02dak",
          rowGap: "x1qvou4u",
          $$css: !0,
        },
      };
    function g(t) {
      "use no forget";
      var a,
        i = t.adAccountID,
        l = t.mediaCollection,
        s = t.setMediaUploadFailed,
        c = t.setUploadingMediaIds,
        g = t.uploadingMediaIds,
        h = g.size > 0,
        y = _(null),
        C = y[0],
        b = y[1],
        v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        S = m(r("WAWebBizAdCreationConfigContext")),
        R = (a = S == null ? void 0 : S.pageID) != null ? a : "",
        L = r("useWAWebBizAdCreationSpecDispatcherContext")([
          r("getWAWebBizAdCreationCreativeCarouselReducer"),
          r("waWebBizAdCreationMediaCollectionReducer"),
        ]);
      o("useWAWebListener").useListener(l, ["remove", "reset"], v);
      var E = m(r("WAWebBizAdCreationLoggerContext")),
        k = d(
          function (e) {
            if ((c(new Set()), E != null)) {
              var t, n;
              r("WAWebBizAdLogger").logCritical({
                event: "creative_editor_modal_upload_media_failure",
                loggerContext: E,
                adAccountID: i,
                extra: {
                  error_message:
                    (t = e == null ? void 0 : e.message) != null
                      ? t
                      : "Unknown error",
                  error_name:
                    (n = e == null ? void 0 : e.name) != null ? n : "Error",
                },
              });
            }
            (L({
              type: "media_collection_reducer.revert_to_last_successfully_uploaded_media_collection",
            }),
              s(!0));
          },
          [i, E, L, s, c],
        ),
        I = d(
          function (e, t) {
            (t != null && t.size > 0 && c(t),
              L({
                mediaCollection: e,
                type: "media_collection_reducer.update_media_collection",
              }));
          },
          [L, c],
        ),
        T = d(
          function (t, a) {
            var l = r("justknobx")._("748");
            l
              ? o("WAWebBizAdCreationStage2LWIUploadUtils")
                  .performPartialStage2LWIUpload(t, R, i)
                  .then(function (e) {
                    var t = e.failedIndices,
                      n = e.successfulResults;
                    if (n.length === 0) {
                      k();
                      return;
                    }
                    if (t.length > 0) {
                      var r = a.getPreviewableMedias(),
                        i = t.map(function (e) {
                          return r[e];
                        });
                      for (var l of i) a.remove(l);
                      o("WAWebToastManager").ToastManager.open(
                        u.jsx(o("WAWebToast.react").Toast, {
                          msg: o(
                            "WAWebBizAdCreationStage2LWIUploadUtils",
                          ).LWI_PARTIAL_UPLOAD_FAILURE_TOAST_MSG(),
                        }),
                      );
                    }
                    (L({
                      carouselCardsData: n,
                      type: "creative_carousel_reducer.set_carousel_cards",
                    }),
                      c(new Set()));
                  })
                  .catch(function (e) {
                    (k(),
                      r("FBLogger")("wa_ctwa_web")
                        .catching(r("getErrorSafe")(e))
                        .mustfix("Media upload mutation failure"));
                  })
              : (e || (e = n("Promise")))
                  .all([
                    r("WAWebBizAdCreationLWIMediaUpload")(t, R, i),
                    r("WAWebBizAdCreationLinkWAMediaToStatus")(t),
                  ])
                  .then(function (e) {
                    var t = e[0];
                    (L({
                      carouselCardsData: t,
                      type: "creative_carousel_reducer.set_carousel_cards",
                    }),
                      c(new Set()));
                  })
                  .catch(function (e) {
                    (k(),
                      r("FBLogger")("wa_ctwa_web")
                        .catching(r("getErrorSafe")(e))
                        .mustfix("Media upload mutation failure"));
                  });
          },
          [i, L, k, R, c],
        ),
        D = d(
          function (e, t) {
            var n = l.getPreviewableMedias().length;
            (E != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "change_media",
                loggerContext: E,
                adAccountID: i,
                extra: { action: "edit", media_index: e, media_count: n },
              }),
              b(e),
              s(!1),
              o("WAWebBizAdCreationMediaValidationUtils")
                .deepCloneMediaCollection(l)
                .then(function (e) {
                  var n = l.indexOf(t);
                  if (n !== -1) {
                    var a = e.at(n);
                    a && e.setActive(a);
                  }
                  var i = u.jsx(
                    r("WAWebBizAdCreationCreativeMediaView.react"),
                    {
                      mediaCollection: e,
                      suportedMediaTypes: o(
                        "WAWebBizAdCreationMediaValidationUtils",
                      ).SUPPORTED_MEDIA_TYPES,
                      mediaMimeTypes: o(
                        "WAWebBizAdCreationMediaValidationUtils",
                      ).ALLOWED_MIME_TYPES,
                      onMediaUploadComplete: T,
                      onMediaUploadFailure: k,
                      onSelectedMediaSave: I,
                    },
                  );
                  o("WAWebModalManager").ModalManager.openMedia(i, {
                    blockClose: !0,
                    focusType: {
                      type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                    transition: "status-modal",
                  });
                })
                .catch(function () {
                  r("FBLogger")("wa_ctwa_web").mustfix(
                    "failed to clone media collection",
                  );
                })
                .finally(function () {
                  b(null);
                }));
          },
          [i, E, T, k, I, l, s],
        ),
        x = d(
          function (e, t) {
            var n = l.getPreviewableMedias().length;
            (E != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "remove_image_asset",
                loggerContext: E,
                adAccountID: i,
                extra: { action: "delete", media_index: e, media_count: n },
              }),
              l.remove(t),
              L({
                cardIndex: e,
                type: "creative_carousel_reducer.remove_carousel_card",
              }));
          },
          [i, E, L, l],
        ),
        $ = l.getPreviewableMedias(),
        P = r("useWAWebIsKeyboardUser")(),
        N = P.isKeyboardUser,
        M = p(
          function () {
            var e = $.length > 1;
            return $.map(function (t, n) {
              var o = u.jsx(
                r("WAWebBizAdCreationCreativeFilmstripMediaThumbnail.react"),
                {
                  attachMedia: t,
                  disabled: C != null || h,
                  loading: C === n,
                  onEditClick: function (t) {
                    return D(n, t);
                  },
                  onDeleteClick: function (t) {
                    return x(n, t);
                  },
                  uploading: g.has(t.id),
                },
              );
              return !e || N
                ? u.jsx("div", { children: o }, t.id)
                : u.jsx(
                    r("CometDraggableListItemKeyboardHandler.react"),
                    { children: o },
                    t.id,
                  );
            });
          },
          [$, C, h, g, N, D, x],
        ),
        w = p(
          function () {
            return o(
              "WAWebBizAdCreationMediaValidationUtils",
            ).canAddMoreAttachments(l)
              ? [].concat(M, [
                  u.jsx(
                    "div",
                    {
                      className: "xt0e3qv",
                      children: u.jsx(
                        r("WAWebBizAdCreationSelectMediaButton.react"),
                        {
                          adAccountID: i,
                          mediaCollection: l,
                          onMediaUploadComplete: T,
                          onMediaUploadFailure: k,
                          onSelectedMediaSave: I,
                          setMediaUploadFailed: s,
                        },
                      ),
                    },
                    "add-media-button",
                  ),
                ])
              : M;
          },
          [M, l, i, T, k, I, s],
        ),
        A = $.length,
        F = d(
          function (e, t, n) {
            t >= A ||
              n >= A ||
              (l.reorder(t, n),
              L({
                fromIndex: t,
                toIndex: n,
                type: "creative_carousel_reducer.reorder_carousel_card",
              }),
              l.trigger("reset", l));
          },
          [l, L, A],
        );
      return $.length === 0
        ? u.jsx(r("WAWebBizAdCreationCreativeSelectedMediaNullState.react"), {
            adAccountID: i,
            mediaCollection: l,
            onMediaUploadComplete: T,
            onMediaUploadFailure: k,
            onSelectedMediaSave: I,
            setMediaUploadFailed: s,
          })
        : u.jsx("div", {
            className: "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x1a02dak x1qvou4u",
            children:
              $.length > 1
                ? u.jsx(r("CometDraggableList.react"), {
                    direction: "horizontal",
                    items: w,
                    onReorder: F,
                    xstyle: f.draggableList,
                  })
                : u.jsxs(u.Fragment, {
                    children: [
                      M,
                      o(
                        "WAWebBizAdCreationMediaValidationUtils",
                      ).canAddMoreAttachments(l) &&
                        u.jsx(r("WAWebBizAdCreationSelectMediaButton.react"), {
                          adAccountID: i,
                          mediaCollection: l,
                          onMediaUploadComplete: T,
                          onMediaUploadFailure: k,
                          onSelectedMediaSave: I,
                          setMediaUploadFailed: s,
                        }),
                    ],
                  }),
          });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
