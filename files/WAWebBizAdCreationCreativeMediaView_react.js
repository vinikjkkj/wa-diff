__d(
  "WAWebBizAdCreationCreativeMediaView.react",
  [
    "fbt",
    "FBLogger",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebBizAdCreationStage1WAUploadUtils",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorLoadable.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        mediaEditorModalContainer: {
          backgroundColor: "x1280gxy",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          height: "xb8htw9",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          marginTop: "xr1yuqi",
          marginInlineEnd: "x11t971q",
          marginBottom: "x4ii5y1",
          marginInlineStart: "xvc5jky",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          width: "xg0jo4d",
          zIndex: "xbpklzw",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.mediaCollection,
        a = e.mediaMimeTypes,
        i = e.onMediaUploadComplete,
        l = e.onMediaUploadFailure,
        m = e.onRender,
        _ = e.onSelectedMediaSave,
        f = e.suportedMediaTypes,
        g = c(
          function () {
            if (t.getPreviewableMedias().length === 0) {
              o("WAWebModalManager").ModalManager.closeMedia();
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(/*BTDS*/ "Continue without saving?"),
                onOK: function () {
                  (o("WAWebModalManager").ModalManager.close(),
                    o("WAWebModalManager").ModalManager.closeMedia());
                },
                okText: s._(/*BTDS*/ "Continue without saving"),
                onCancel: o("WAWebModalManager").closeModalManager,
                cancelText: s._(/*BTDS*/ "Go back"),
                onOverlayClick: o("WAWebModalManager").closeModalManager,
                children: s._(
                  /*BTDS*/ "Any changes you made will be lost if you leave without saving.",
                ),
              }),
            );
          },
          [t],
        ),
        h = c(function (e) {
          if (!e || e.length === 0)
            return (
              r("FBLogger")("wa_ctwa_web").mustfix(
                "No media provided for sending",
              ),
              !1
            );
          var t = [],
            n = e.every(function (e, n) {
              return !e || !e.media ? (t.length < 3 && t.push(n), !1) : !0;
            });
          return (
            t.length > 0 &&
              r("FBLogger")("wa_ctwa_web").mustfix(
                "Invalid media items at " + t.length + " indices",
              ),
            n
          );
        }, []),
        y = c(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!h(e)) {
                  (l(), o("WAWebModalManager").ModalManager.closeMedia());
                  return;
                }
                (_(t),
                  o(
                    "WAWebBizAdCreationStage1WAUploadUtils",
                  ).uploadAdCreativeMediaToWA(t, i, l),
                  o("WAWebModalManager").ModalManager.closeMedia());
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [h, i, l, _, t],
        ),
        C = function (n) {
          var e = o(
            "WAWebBizAdCreationMediaValidationUtils",
          ).maybePruneNewAttachments(t, n);
          for (var r of e.pruneActions)
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: o(
                  "WAWebBizAdCreationMediaValidationUtils",
                ).PRUNE_TOAST_MESSAGES[r](),
              }),
            );
          return (
            e.shouldClearExisting && t.reset(),
            t.processAttachments(
              e.attachments,
              void 0,
              f,
              o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
            )
          );
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            className:
              "x1honnu5 x5yr21d x1o0tod xixxii4 x13vifvy xh8yej3 xbpklzw",
          }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.mediaEditorModalContainer,
            children: u.jsx(
              o("WAWebMediaEditorLoadable.react").MediaEditorLoadable,
              {
                theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION,
                onClose: g,
                onRender: m,
                initCaption: null,
                mimes: a,
                onSendMedia: y,
                mediaCollection: t,
                sendAsSticker: !1,
                onDropText: r("WAWebNoop"),
                canViewOnce: !1,
                hdEligible: !0,
                maxNumberOfMedia: o("WAWebBizAdCreationMediaValidationUtils")
                  .MAX_IMAGE_COUNT,
                renderCaptionInput: p,
                onProcessAttachments: C,
                tsNavigationData: {
                  surface: "ad-creation-flow-media-composer",
                },
              },
            ),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return u.jsx(u.Fragment, {});
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
