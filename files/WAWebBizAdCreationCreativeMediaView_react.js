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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        a = e.mediaCollection,
        i = e.mediaMimeTypes,
        l = e.onMediaUploadComplete,
        c = e.onMediaUploadFailure,
        m = e.onRender,
        g = e.onSelectedMediaSave,
        h = e.suportedMediaTypes,
        y;
      t[0] !== a
        ? ((y = function () {
            if (a.getPreviewableMedias().length === 0) {
              o("WAWebModalManager").ModalManager.closeMedia();
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(/*BTDS*/ "Continue without saving?"),
                onOK: _,
                okText: s._(/*BTDS*/ "Continue without saving"),
                onCancel: o("WAWebModalManager").closeModalManager,
                cancelText: s._(/*BTDS*/ "Go back"),
                onOverlayClick: o("WAWebModalManager").closeModalManager,
                children: s._(
                  /*BTDS*/ "Any changes you made will be lost if you leave without saving.",
                ),
              }),
            );
          }),
          (t[0] = a),
          (t[1] = y))
        : (y = t[1]);
      var C = y,
        b = p,
        v;
      t[2] !== a || t[3] !== l || t[4] !== c || t[5] !== g
        ? ((v = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!b(e)) {
                  (c(), o("WAWebModalManager").ModalManager.closeMedia());
                  return;
                }
                (g(a),
                  o(
                    "WAWebBizAdCreationStage1WAUploadUtils",
                  ).uploadAdCreativeMediaToWA(a, l, c),
                  o("WAWebModalManager").ModalManager.closeMedia());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = a),
          (t[3] = l),
          (t[4] = c),
          (t[5] = g),
          (t[6] = v))
        : (v = t[6]);
      var S = v,
        R;
      t[7] !== a || t[8] !== h
        ? ((R = function (t) {
            var e = o(
              "WAWebBizAdCreationMediaValidationUtils",
            ).maybePruneNewAttachments(a, t);
            for (var n of e.pruneActions)
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: o(
                    "WAWebBizAdCreationMediaValidationUtils",
                  ).PRUNE_TOAST_MESSAGES[n](),
                }),
              );
            return (
              e.shouldClearExisting && a.reset(),
              a.processAttachments(
                e.attachments,
                void 0,
                h,
                o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
              )
            );
          }),
          (t[7] = a),
          (t[8] = h),
          (t[9] = R))
        : (R = t[9]);
      var L = R,
        E;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx("div", {
            className:
              "x1honnu5 x5yr21d x1o0tod xixxii4 x13vifvy xh8yej3 xbpklzw",
          })),
          (t[10] = E))
        : (E = t[10]);
      var k;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { surface: "ad-creation-flow-media-composer" }), (t[11] = k))
        : (k = t[11]);
      var I;
      return (
        t[12] !== C ||
        t[13] !== L ||
        t[14] !== S ||
        t[15] !== a ||
        t[16] !== i ||
        t[17] !== m
          ? ((I = u.jsxs(u.Fragment, {
              children: [
                E,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: d.mediaEditorModalContainer,
                  children: u.jsx(
                    o("WAWebMediaEditorLoadable.react").MediaEditorLoadable,
                    {
                      theme: o("WAWebMediaEditorEnumsThemes").MediaTheme
                        .AD_CREATION,
                      onClose: C,
                      onRender: m,
                      initCaption: null,
                      mimes: i,
                      onSendMedia: S,
                      mediaCollection: a,
                      sendAsSticker: !1,
                      onDropText: r("WAWebNoop"),
                      canViewOnce: !1,
                      hdEligible: !0,
                      maxNumberOfMedia: o(
                        "WAWebBizAdCreationMediaValidationUtils",
                      ).MAX_IMAGE_COUNT,
                      renderCaptionInput: f,
                      onProcessAttachments: L,
                      tsNavigationData: k,
                    },
                  ),
                }),
              ],
            })),
            (t[12] = C),
            (t[13] = L),
            (t[14] = S),
            (t[15] = a),
            (t[16] = i),
            (t[17] = m),
            (t[18] = I))
          : (I = t[18]),
        I
      );
    }
    function p(e) {
      if (!e || e.length === 0)
        return (
          r("FBLogger")("wa_ctwa_web").mustfix("No media provided for sending"),
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
    }
    function _() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebModalManager").ModalManager.closeMedia());
    }
    function f() {
      return u.jsx(u.Fragment, {});
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
