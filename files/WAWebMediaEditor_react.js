__d(
  "WAWebMediaEditor.react",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAWebAttachMediaModel",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebChatPreferenceCollection",
    "WAWebCmd",
    "WAWebDataTransfer",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebEventFiles",
    "WAWebFileUtils",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaEditorData",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorEnumsThickness",
    "WAWebMediaEditorFilmstripDragAndDrop.react",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorImage.react",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorOpenTrigger",
    "WAWebMediaEditorPreviewAudio.react",
    "WAWebMediaEditorPreviewFile.react",
    "WAWebMediaEditorPreviewPdf.react",
    "WAWebMediaEditorPreviewVideo.react",
    "WAWebMediaEditorToolbarBlur.react",
    "WAWebMediaEditorUtilsCreateCanvasAndImage",
    "WAWebMediaEditorUtilsFilters",
    "WAWebMediaEditorUtilsShapes",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMsgType",
    "WAWebNewsletterStatusSelectorButton.react",
    "WAWebNoop",
    "WAWebPlusIcon.react",
    "WAWebSendButtonWithCount.react",
    "WAWebSpinner.react",
    "WAWebStatusPrivacySettingButton.react",
    "WAWebStickerConstants",
    "WAWebStickerSendWamEvent",
    "WAWebStopEvent",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUim",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumStickerMakerSourceType",
    "WAWebWamEnumStickerSendOriginType",
    "WAWebWamEnumWebcStickerMakerEventNameType",
    "WAWebWebcMediaEditorSendWamEvent",
    "WAWebWebcStickerMakerEventsWamEvent",
    "WDSButton.react",
    "asyncToGeneratorRuntime",
    "cr:10202",
    "err",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebTimeout",
    "useWAWebToggle",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useImperativeHandle,
      h = _.useRef,
      y = _.useState,
      C = 200,
      b = 64,
      v = b * 2,
      S = 128,
      R = 1.2,
      L = o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE * 3,
      E = 200,
      k = 100,
      I = 100,
      T = 100,
      D = {
        dropOverlayOutline: {
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "x4t50tc",
          fontSize: "xcg35fi",
          color: "x17x31wj",
          borderTopWidth: "x18ccme9",
          borderInlineEndWidth: "x15aglum",
          borderBottomWidth: "xa309fb",
          borderInlineStartWidth: "x3pd3b0",
          borderTopStyle: "xlya59e",
          borderInlineEndStyle: "xwy3id5",
          borderBottomStyle: "xpvcztv",
          borderInlineStartStyle: "x11nt7xy",
          borderTopColor: "xh4jrlc",
          borderInlineEndColor: "xiqxx7j",
          borderBottomColor: "x1icjyc4",
          borderInlineStartColor: "xi9tln5",
          $$css: !0,
        },
        dropOverlayOutlineRefreshed: {
          color: "xk4n5i7",
          borderTopWidth: "xamhcws",
          borderInlineEndWidth: "x1alpsbp",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "xyumdvf",
          borderStartStartRadius: "x120xd9q",
          borderStartEndRadius: "x1k4ovr2",
          borderEndEndRadius: "xdfaw6k",
          borderEndStartRadius: "xefzod",
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          backgroundColor: "x1abdmlv",
          $$css: !0,
        },
        footer: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "x1helyrv",
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        footerBroadcast: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "x1helyrv",
          alignItems: "x6s0dn4",
          justifyContent: "x13a6bvl",
          $$css: !0,
        },
        addMediaButton: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          minWidth: "x9hgts1",
          height: "xdd8jsf",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          borderEndEndRadius: "x1u0fnx4",
          borderEndStartRadius: "xbxn0j6",
          $$css: !0,
        },
        addMediaButtonDisabled: { cursor: "x1h6gzvc", $$css: !0 },
        filmstripContainer: {
          boxSizing: "x9f619",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "xdl72j9",
          $$css: !0,
        },
      };
    function x(t) {
      "use no forget";
      var a,
        i,
        l,
        m,
        _,
        x = t.ref,
        $ = babelHelpers.objectWithoutPropertiesLoose(t, u);
      o("WAWebTimeSpentLoggingNavigation").useTsNavigation($.tsNavigationData);
      var P = $.onClose,
        N = P === void 0 ? r("WAWebNoop") : P,
        M = $.onRender,
        w = M === void 0 ? r("WAWebNoop") : M,
        A = $.theme,
        F =
          A === void 0 ? o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH : A,
        O = $.sendAsSticker,
        B = O === void 0 ? !1 : O,
        W = $.mediaCollection,
        q = $.initCaption,
        U = $.onDropText,
        V = $.onSendMedia,
        H = $.allowMultipleMedia,
        G = H === void 0 ? !0 : H,
        z = $.openTrigger,
        j = $.isSendHQPhotoEnabled,
        K = j === void 0 ? !0 : j,
        Q = y((a = $.newsletterWid) != null ? a : null),
        X = Q[0],
        Y = Q[1],
        J = y(
          B != null && B
            ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE
            : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL,
        ),
        Z = J[0],
        ee = J[1],
        te = y(!0),
        ne = te[0],
        re = te[1],
        oe = y(function () {
          return o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
          );
        }),
        ae = oe[0],
        ie = oe[1],
        le = y(o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF),
        se = le[0],
        ue = le[1],
        ce = y(o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER),
        de = ce[0],
        me = ce[1],
        pe = y(!1),
        _e = pe[0],
        fe = pe[1],
        ge = y(!0),
        he = ge[0],
        ye = ge[1],
        Ce = y(!1),
        be = Ce[0],
        ve = Ce[1],
        Se = y(!1),
        Re = Se[0],
        Le = Se[1],
        Ee = y(!1),
        ke = Ee[0],
        Ie = Ee[1],
        Te = y(null),
        De = Te[0],
        xe = Te[1],
        $e = y(null),
        Pe = $e[0],
        Ne = $e[1],
        Me = y(!1),
        we = Me[0],
        Ae = Me[1],
        Fe = y(null),
        Oe = Fe[0],
        Be = Fe[1],
        We = y(null),
        qe = We[0],
        Ue = We[1],
        Ve = r("useWAWebToggle")(!1),
        He = Ve[0],
        Ge = Ve[1],
        ze = y(B != null ? B : !1),
        je = ze[0],
        Ke = ze[1],
        Qe = o("useWAWebTimeout").useTimeout(function () {
          z ===
            o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger
              .ConversationPanelDragAndDrop &&
            (be || N());
        }, 250),
        Xe = Qe[0],
        Ye = Qe[1],
        Je = h(),
        Ze = h(),
        et = h(),
        tt = h(),
        nt = y(q == null ? void 0 : q.text),
        rt = nt[0],
        ot = nt[1],
        at = h(),
        it = h(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_MODE),
        lt = h(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_RADIUS),
        st = h(
          o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
          ),
        ),
        ut = h(
          o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
          ),
        ),
        ct = h(3),
        dt = r("useLazyRef")(function () {
          return new Map();
        }),
        mt = function (t, n) {
          dt.current.set(t, n);
        },
        pt = r("useLazyRef")(function () {
          return new Map();
        }),
        _t = r("useLazyRef")(function () {
          return new Map();
        }),
        ft = function (t, n) {
          _t.current.set(t, n);
        },
        gt = r("useLazyRef")(function () {
          return new Map();
        }),
        ht = function (t, n) {
          gt.current.set(t, n);
        },
        yt = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        Ct = r("useWAWebUnmountSignal")();
      ((W.isStickerMaker = je),
        o("useWAWebListener").useListener(W, ["add", "remove", "reset"], yt));
      var bt = function () {
        if (W.canSend()) {
          var e = W.uiProcessMsgs($.maxNumberOfMedia, F),
            t = e.errorMsgs;
          (t &&
            (o("WAWebToastManager").ToastManager.open(
              p.jsx(o("WAWebToast.react").Toast, { msg: t }),
            ),
            W.getPreviewableMedias().length === 0 && N()),
            yt());
        }
      };
      o("useWAWebListener").useListener(
        W,
        ["active-change", "change:state", "change:previewable"],
        bt,
      );
      var vt = function () {
          var e;
          return (
            W.length === 1 &&
            ((e = W.at(0)) == null ? void 0 : e.type) ===
              o("WAWebMsgType").MSG_TYPE.IMAGE
          );
        },
        St = function () {
          var e = !je && vt();
          (Ke(e),
            ee(
              e
                ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE
                : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL,
            ));
        };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "toggle_sticker_maker",
        St,
      ),
        f(function () {
          Xe();
        }, []),
        f(function () {
          var e;
          return (
            (e = tt.current) == null || e.focus(),
            function () {
              at.current && self.clearTimeout(at.current);
            }
          );
        }, []),
        f(
          function () {
            W.isStickerMaker = je;
          },
          void 0,
        ));
      var Rt = o("useWAWebModelValues").useModelValues(
        r("WAWebChatPreferenceCollection").getDefault(),
        ["hdMediaEnabled"],
      );
      f(
        function () {
          Rt.hdMediaEnabled &&
            De != null &&
            De.hdEligible &&
            De.quality !== o("WAWebAttachMediaModel").MediaQuality.HD &&
            K &&
            De.setQualityFromPrefs();
        },
        [De, Rt.hdMediaEnabled, K],
      );
      var Lt = function () {
          return tt.current;
        },
        Et = function (t) {
          var e;
          if ((e = Je.current) != null && e.resetUIState()) return !1;
          if (qe) return (Be(null), Ue(null), !1);
          var n = t === o("WAWebUim").DismissReason.UIM_INTERACTION;
          return (N(n), !0);
        };
      (g(x, function () {
        return { getElement: Lt, handleRequestDismiss: Et };
      }),
        f(
          function () {
            w();
          },
          [w],
        ));
      var kt = W.getActive(),
        It = rt,
        Tt = we;
      !Tt &&
        !De &&
        It != null &&
        It !== "" &&
        kt &&
        (kt.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
          kt.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
          kt.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) &&
        ((kt.caption = It), (Tt = !0));
      var Dt =
          (i = kt == null ? void 0 : kt.canUndoMediaEditorData()) != null
            ? i
            : !1,
        xt =
          (l = kt == null ? void 0 : kt.canRedoMediaEditorData()) != null
            ? l
            : !1;
      kt !== Pe && (Ne(kt), xe(kt), Le(Dt), Ie(xt), Ae(Tt));
      var $t = function () {
          return De == null
            ? r("WAWebMediaEditorData").create()
            : De.mediaEditorData;
        },
        Pt = function () {
          var e, t;
          (Le(
            (e = De == null ? void 0 : De.canUndoMediaEditorData()) != null
              ? e
              : !1,
          ),
            Ie(
              (t = De == null ? void 0 : De.canRedoMediaEditorData()) != null
                ? t
                : !1,
            ));
        },
        Nt = function (n, r) {
          if (n !== $t()) {
            if (De) {
              var t, a;
              (De.updateMediaEditorData(n, {
                undoable:
                  (t = r == null ? void 0 : r.undoable) != null ? t : !1,
                lastAction:
                  (a = r == null ? void 0 : r.lastAction) != null ? a : null,
              }),
                Pt());
            }
            if (r != null && r.updatePreview) {
              var i;
              (i = Je.current) == null || i.updatePreview();
            }
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MediaEditor: Updated MediaEditorData",
                ])),
            );
          }
        },
        Mt = function () {
          var e;
          return (e = Je.current) == null ? void 0 : e.getBackground();
        },
        wt = function (t) {
          if ((t === void 0 && (t = !0), De && De.canUndoMediaEditorData())) {
            var e,
              n,
              r = De.lastMediaEditorAction;
            De.undoMediaEditorData(t);
            var o = De.lastMediaEditorAction;
            (Pt(),
              (e = Je.current) == null || e.updatePreview(),
              (n = Je.current) == null || n.undoAction(r, o));
          }
        },
        At = function () {
          if (De && De.canRedoMediaEditorData()) {
            var e,
              t,
              n = De.lastMediaEditorAction;
            De.redoMediaEditorData();
            var r = De.lastMediaEditorAction;
            (Pt(),
              (e = Je.current) == null || e.updatePreview(),
              (t = Je.current) == null || t.redoAction(r, n));
          }
        },
        Ft = function (t, n, o, a) {
          var e = r("WANullthrows")(Je.current).getCanvasScale(),
            i = n.width * e.x,
            l = n.height * e.y,
            s = o / i,
            u = a / l,
            c = Math.min(s, u),
            d = $t().addImageLayerToCenter({
              type: t,
              image: n,
              editable: !0,
              scale: { x: c, y: c },
            });
          Nt(d, { updatePreview: !0, undoable: !0 });
        },
        Ot = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield o(
                "WAWebMediaEditorUtilsCreateCanvasAndImage",
              ).createImageFromEmoji(e);
              if (!t) return;
              var n = je ? v : b;
              (Ft(
                o("WAWebMediaEditorLayersImage").ImageLayerType.Emoji,
                t,
                n,
                n,
              ),
                je &&
                  new (o(
                    "WAWebWebcStickerMakerEventsWamEvent",
                  ).WebcStickerMakerEventsWamEvent)({
                    stickerMakerEventName: o(
                      "WAWebWamEnumWebcStickerMakerEventNameType",
                    ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.EMOJI_ADDED,
                  }).commit());
            } catch (e) {
              o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to add image"),
                }),
              );
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Bt = function (t, n, a, i, l, s, u, c) {
          (s === void 0 &&
            (s = o("WAWebMediaEditorEnumsColors").getColorValue(
              o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
            )),
            u === void 0 &&
              (u = o("WAWebMediaEditorEnumsColors").getColorValue(
                o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
              )),
            c === void 0 && (c = 50));
          var e = r("WANullthrows")(Je.current).getCanvasScale(),
            d = r("WANullthrows")(Je.current).getCanvasSize(),
            m = Math.min(
              d.getWidth(),
              l === o("WAWebMediaEditorLayersShape").BlurMode.None
                ? I / e.x
                : E / e.x,
            ),
            p = Math.min(
              d.getHeight(),
              l === o("WAWebMediaEditorLayersShape").BlurMode.None
                ? T / e.y
                : k / e.y,
            ),
            _ = $t().addShapeLayerToCenter({
              image: t,
              size: new (r("WAWebMediaEditorGeometrySize"))({
                width: m,
                height: p,
              }),
              radius: i,
              shape: a,
              backgroundFrame: n,
              mode: l,
              fillColor: s,
              strokeColor: u,
              strokeWidth: c,
            });
          Nt(_, { updatePreview: !0, undoable: !0 });
        },
        Wt = function (t) {
          var e = $t().getSelectedLayer();
          if (
            e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !e.getConfirmed()
          )
            wt(!1);
          else {
            var n,
              a,
              i = $t().clearSelectedLayer();
            (Nt(i),
              Bt(
                r("WANullthrows")(
                  (n = $t().getBackground()) == null ? void 0 : n.getImage(),
                ),
                r("WANullthrows")(
                  (a = $t().getBackground()) == null ? void 0 : a.getFrame(),
                ),
                t,
                lt.current,
                o("WAWebMediaEditorLayersShape").BlurMode.None,
                st.current,
                ut.current,
                ct.current,
              ));
          }
        },
        qt = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield o(
                "WAWebMediaEditorUtilsCreateCanvasAndImage",
              ).createImageFromSticker(e);
              if (!t) throw r("err")("Create image from sticker failed");
              (Ft(
                o("WAWebMediaEditorLayersImage").ImageLayerType.Sticker,
                t,
                S,
                S,
              ),
                je &&
                  new (o(
                    "WAWebWebcStickerMakerEventsWamEvent",
                  ).WebcStickerMakerEventsWamEvent)({
                    stickerMakerEventName: o(
                      "WAWebWamEnumWebcStickerMakerEventNameType",
                    ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_ADDED,
                  }).commit());
            } catch (e) {
              o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to add image"),
                }),
              );
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Ut = function () {
          var e = $t().clearSelectedLayer();
          Nt(e);
        },
        Vt = function () {
          var e = $t().clearSelectedLayer();
          Nt(e);
        },
        Ht = function () {
          var e = $t().clearSelectedLayer();
          (Nt(e),
            fe(function (e) {
              return !e;
            }));
        },
        Gt = function (t) {
          var e = $t(),
            n = e.setActiveFilter(t);
          Nt(n, { undoable: !0, updatePreview: !0 });
        },
        zt = function () {
          var e = Mt(),
            t = $t();
          if (!(!e || t.getOutlineLayer().isEmpty())) {
            var n = t.getCropCenter(),
              a = e.height,
              i = e.width,
              l = new (r("WAWebMediaEditorGeometryPoint"))({
                x: n.getX() - i / 2,
                y: n.getY() - a / 2,
              }),
              s = -t.getRotation(),
              u = Math.max(i, a),
              c = t.getCropSize().getDimension(),
              d =
                o("WAWebStickerConstants").STICKER_DIMENSION -
                o("WAWebStickerConstants").STICKER_PADDING * 2,
              m = c * (d / o("WAWebStickerConstants").STICKER_DIMENSION),
              p = m / u,
              _ = t
                .updateBackground(e, l, s, { x: p, y: p })
                .clearOutlinePaths();
            (Nt(_, {
              undoable: !0,
              updatePreview: !0,
              lastAction: o("WAWebAttachMediaModel").MediaEditorAction
                .OutlineDone,
            }),
              je &&
                new (o(
                  "WAWebWebcStickerMakerEventsWamEvent",
                ).WebcStickerMakerEventsWamEvent)({
                  stickerMakerEventName: o(
                    "WAWebWamEnumWebcStickerMakerEventNameType",
                  ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_OUTLINED,
                }).commit());
          }
        },
        jt = function () {
          var e = $t().clearOutlinePaths();
          Nt(e, { undoable: !0, updatePreview: !0 });
        },
        Kt = function (t, n, r) {
          var e = $t().setRotation(t).setCrop(n, r);
          (Nt(e, {
            undoable: !0,
            updatePreview: !0,
            lastAction: o("WAWebAttachMediaModel").MediaEditorAction
              .CropRotateCanvas,
          }),
            je &&
              new (o(
                "WAWebWebcStickerMakerEventsWamEvent",
              ).WebcStickerMakerEventsWamEvent)({
                stickerMakerEventName: o(
                  "WAWebWamEnumWebcStickerMakerEventNameType",
                ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_CROPPED,
              }).commit());
        },
        Qt = function (t) {
          var e = $t().getSelectedLayer();
          if (
            e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            e.isBlur()
          ) {
            var n = $t().setBlurMode(e, t);
            (Nt(n, { updatePreview: !0, undoable: !0 }), (it.current = t));
          }
        },
        Xt = function (t, n) {
          n === void 0 && (n = !1);
          var e = $t().getSelectedLayer();
          if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer) {
            var r = $t().setShapeRadius(e, t);
            (Nt(r, { updatePreview: !0, undoable: n }), (lt.current = t));
          }
        },
        Yt = function () {
          var e = $t().getSelectedLayer();
          if (
            e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            e.isBlur() &&
            !e.getConfirmed()
          )
            wt(!1);
          else {
            var t,
              n,
              a = $t().clearSelectedLayer();
            (Nt(a),
              Bt(
                r("WANullthrows")(
                  (t = $t().getBackground()) == null ? void 0 : t.getImage(),
                ),
                r("WANullthrows")(
                  (n = $t().getBackground()) == null ? void 0 : n.getFrame(),
                ),
                o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE,
                lt.current,
                it.current,
              ));
          }
        },
        Jt = function (t) {
          var e = $t(),
            n = e.getSelectedLayer();
          if (
            n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !n.isBlur()
          ) {
            var r = e.setShapeFillColor(n, t);
            (Nt(r, { updatePreview: !0, undoable: !0 }),
              (st.current = t),
              (ut.current = n.getStrokeColor()),
              (ct.current = n.getStrokeWidth()));
          }
        },
        Zt = function (t) {
          var e = $t(),
            n = e.getSelectedLayer();
          if (
            n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !n.isBlur()
          ) {
            var r = e.setShapeStrokeColor(n, t);
            (Nt(r, { updatePreview: !0, undoable: !0 }),
              (st.current = n.getFillColor()),
              (ut.current = t),
              (ct.current = n.getStrokeWidth()));
          }
        },
        en = function (t) {
          var e = $t(),
            n = e.getSelectedLayer();
          if (
            n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !n.isBlur()
          ) {
            var r = e.setShapeStrokeWidth(n, t);
            (Nt(r, { updatePreview: !0, undoable: !0 }),
              (st.current = n.getFillColor()),
              (ut.current = n.getStrokeColor()),
              (ct.current = t));
          }
        },
        tn = function (t, n) {
          var e = $t(),
            r = t.setPoints(n),
            o = e.updateLayer(t, r);
          Nt(o, { updatePreview: !0, undoable: !0 });
        },
        nn = function (t) {
          ee(t);
        },
        rn = function (t) {
          re(t);
        },
        on = function () {
          Nt($t().clearSelectedLayer());
        },
        an = function () {
          if (!Oe) {
            on();
            var e = r("WANullthrows")(Je.current).getCanvasScale(),
              t = { x: R / e.x, y: R / e.y };
            if (je) {
              var n = $t(),
                a = n.getCropSize().getDimension(),
                i = (L * a) / o("WAWebStickerConstants").STICKER_DIMENSION;
              t = {
                x: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE,
                y: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE,
              };
            }
            var l = {
                origin: $t().getCropCenter(),
                text: "",
                textColor: ae,
                textBackground: he,
                alignment: de,
                font: se,
                scale: t,
              },
              s = $t().addTextLayer(l);
            Nt(s, { updatePreview: !0, undoable: !0 });
            var u = r("WANullthrows")(s.getLastTextLayer());
            (Ue(u), Be(null));
          }
        },
        ln = function (t) {
          ue(t);
          var e = $t().getSelectedLayer();
          if (qe) Ue(qe.setFont(t));
          else if (
            e &&
            e instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = $t().setFont(e, t);
            Nt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        sn = function (t) {
          me(t);
          var e = $t().getSelectedLayer();
          if (qe) Ue(qe.setAlignment(t));
          else if (
            e &&
            e instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = $t().setAlignment(e, t);
            Nt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        un = function (t) {
          ie(t);
          var e = $t().getSelectedLayer();
          if (qe) Ue(qe.setTextColor(t));
          else if (
            e &&
            e instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = $t().setTextColor(e, t);
            Nt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        cn = function () {
          var e = !he;
          ye(e);
          var t = $t().getSelectedLayer();
          if (qe) Ue(qe.setTextBackground(e));
          else if (
            t &&
            t instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = $t().setTextBackground(t, e);
            Nt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        dn = function (t) {
          (Ue(t), Be(t));
        },
        mn = function (t, n) {
          var e;
          if (!n)
            Oe &&
              Nt($t().deleteLayer(Oe), {
                updatePreview: !0,
                undoable: !!t.getText(),
              });
          else {
            var a = $t(),
              i = r("WANullthrows")(qe).setText(n);
            (Oe
              ? (a = a.updateLayer(r("WANullthrows")(Oe), i))
              : ((a = a.addTextLayer(i)),
                je &&
                  new (o(
                    "WAWebWebcStickerMakerEventsWamEvent",
                  ).WebcStickerMakerEventsWamEvent)({
                    stickerMakerEventName: o(
                      "WAWebWamEnumWebcStickerMakerEventNameType",
                    ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.TEXT_ADDED,
                  }).commit()),
              Nt(a, { updatePreview: !0, undoable: !0 }));
          }
          (self.setTimeout(function () {
            (Ue(null), Be(null));
          }, 0),
            (e = tt.current) == null || e.focus());
        },
        pn = function (t) {
          Nt($t().addPaintPath(t), { undoable: !0, updatePreview: !0 });
        },
        _n = function (t) {
          Nt($t().addOutlinePath(t), {
            undoable: !0,
            updatePreview: !0,
            lastAction: o("WAWebAttachMediaModel").MediaEditorAction.Outline,
          });
        },
        fn = function (t) {
          if (!(!t.getEditable() || _e)) {
            var e = $t().setSelectedLayer(t);
            (t instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
              (t.getConfirmed() || (e = e.updateLayer(t, t.setConfirmed())),
              t.isBlur() && (it.current = t.getMode()),
              (lt.current = t.getRadius())),
              Nt(e),
              t instanceof o("WAWebMediaEditorLayersText").TextLayer &&
                (ie(t.getTextColor()),
                ye(t.getTextBackground()),
                ue(t.getFont())));
          }
        },
        gn = function (t, n) {
          var e =
            t instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
            t.isBackground();
          e
            ? Nt($t().translateBackground(n), {
                updatePreview: !0,
                undoable: !0,
              })
            : Nt($t().translateLayer(t, n), {
                updatePreview: !0,
                undoable: !0,
              });
        },
        hn = function (t, n, r, a) {
          var e =
            t instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
            t.isBackground();
          e
            ? Nt($t().transformBackground(n, r), {
                updatePreview: !0,
                undoable: !0,
              })
            : Nt($t().transformLayer(t, n, r, a), {
                updatePreview: !0,
                undoable: !0,
              });
        },
        yn = function (t) {
          var e = $t().deleteLayer(t);
          (t === qe && (Ue(null), Be(null)),
            Nt(e, { updatePreview: !0, undoable: !0 }));
        },
        Cn = function (t) {
          (o("WAWebEventFiles")
            .getFiles(t)
            .then(function (e) {
              if (!Ct.aborted) {
                var n;
                return (
                  t.shiftKey === !0 &&
                    t.altKey === !0 &&
                    e.length === 1 &&
                    (Ke(!0),
                    ee(
                      o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE,
                    ),
                    (n = !0)),
                  $.onProcessAttachments(
                    e.map(function (e) {
                      return { file: e, stickerMaker: n };
                    }),
                    o("WAWebWamEnumMediaPickerOriginType")
                      .MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
                  )
                );
              }
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").MediaDragDropError,
                function (e) {
                  W.length || U(e.src);
                },
              ),
            ),
            t.target instanceof HTMLInputElement && (t.target.value = ""));
        },
        bn = function (t) {
          (Ye(), !(He || je) && Cn(t));
        },
        vn = function (t, n) {
          He || je || (ve(t), !t && !n && !W.length && N());
        },
        Sn = function (t) {
          if (De) {
            var e = W.indexOf(De);
            (De.updateCaption(t),
              e === 0 && t === "" && we && (Ae(!1), ot(null)));
            var n = _t.current.get(De.id);
            n && pt.current.set(De.id, n.editorContent());
          }
        },
        Rn = function (t) {
          var e = t
            .getFiles()
            .filter(function (e) {
              var t = o("WAWebFileUtils").typeFromMimetype(e.type);
              return t === "image" || t === "video";
            })
            .map(function (e) {
              return { file: e };
            });
          $.onProcessAttachments(
            e,
            o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
              .PASTE,
          );
        },
        Ln = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = new (r("WAWebDataTransfer"))(t.clipboardData);
          e.hasFiles() && Rn(e);
        },
        En = function () {
          if (Ze.current) {
            var e = Ze.current;
            e.click();
          }
        },
        kn = function (t) {
          if (je) {
            var e = {
              stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                .STICKER_SEND_ORIGIN_TYPE.STICKER_MAKER,
              stickerIsAnimated: !1,
              stickerIsFirstParty: !1,
              stickerIsFromStickerMaker: !0,
              stickerMakerSourceType: o("WAWebWamEnumStickerMakerSourceType")
                .STICKER_MAKER_SOURCE_TYPE.WEB_STICKER_MAKER,
              stickerIsLottie: !1,
            };
            (new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(
              e,
            ).commit(),
              new (o(
                "WAWebWebcStickerMakerEventsWamEvent",
              ).WebcStickerMakerEventsWamEvent)({
                stickerMakerEventName: o(
                  "WAWebWamEnumWebcStickerMakerEventNameType",
                ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.SEND_STICKER,
              }).commit());
            return;
          }
          var n = 0,
            r = 0,
            a = 0,
            i = 0,
            l = 0,
            s = 0,
            u = 0;
          (t.forEach(function (e) {
            var t = e.mediaEditorData;
            (e.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
              (n++,
              t.hasEdits() && r++,
              t.getPaintLayer().getPaths().length > 0 && a++,
              t.getLayers().some(function (e) {
                return (
                  e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                  e.isBlur()
                );
              }) && u++),
              t.getLayers().forEach(function (e) {
                e instanceof o("WAWebMediaEditorLayersImage").ImageLayer
                  ? (e.isEmoji() && i++, e.isSticker() && l++)
                  : e instanceof o("WAWebMediaEditorLayersText").TextLayer &&
                    s++;
              }));
          }),
            new (o(
              "WAWebWebcMediaEditorSendWamEvent",
            ).WebcMediaEditorSendWamEvent)({
              imageCount: n,
              editedImageCount: r,
              paintedImageCount: a,
              blurImageCount: u,
              emojiLayerCount: i,
              stickerLayerCount: l,
              textLayerCount: s,
            }).commit());
        },
        In = function () {
          var e;
          return (
            W.length === 1 &&
            ((e = W.at(0)) == null ? void 0 : e.isViewableOnce()) === !0 &&
            $.canViewOnce &&
            !B
          );
        },
        Tn = function () {
          var e = W.getPreviewableMedias();
          (d || (d = n("Promise")))
            .all(
              e.map(function (e) {
                var t = e.mediaEditorData;
                return (
                  e.updateMediaEditorData(t.setSending(!0), {
                    undoable: !1,
                    lastAction: null,
                  }),
                  e
                );
              }),
            )
            .finally(function () {
              if (e.length === 0) {
                N();
                return;
              }
              if ((De != null && De.mediaEditorData.hasEdits()) || je) {
                var t;
                (t = Je.current) == null ||
                  t.updatePreview({ immediately: !0 });
              }
              var r = [];
              (e.forEach(function (e) {
                var t = e.editedFile;
                if (t && (e.mediaEditorData.hasEdits() || je)) {
                  var n = e.mediaEditorData.getActiveFilter(),
                    a = n !== o("WAWebMediaEditorUtilsFilters").FilterType.NONE,
                    i = e.mediaEditorData.isCropped(),
                    l = e.mediaEditorData.isRotated(),
                    s = W.replace(e.id, {
                      file: t,
                      asSticker: je,
                      hasFilter: a,
                      isCropped: i,
                      isRotated: l,
                    });
                  r.push(s);
                }
              }),
                (d || (d = n("Promise"))).all(r).then(function () {
                  var t = W.getPreviewableMedias();
                  if (t.length !== 0) {
                    var n = t.map(function (e) {
                        var t,
                          n = (t = e.caption) == null ? void 0 : t.trim(),
                          r = [],
                          o = [],
                          a = pt.current.get(e.id);
                        if (a) {
                          var i = a.data,
                            l = a.text;
                          l.length &&
                            ((n = l.trim()),
                            (r = i.mentionedJidList || []),
                            (o = i.groupMentions || []));
                        }
                        return (
                          (e.caption = n != null ? n : void 0),
                          { media: e, mentionedJidList: r, groupMentions: o }
                        );
                      }),
                      r = {
                        isViewOnce: In() && He,
                        selectedNewsletterWid: X,
                        threadId: $.threadId,
                      };
                    (we && (r.initCaptionUsed = !0),
                      V(n, r, et.current),
                      kn(e));
                  }
                }));
            });
        },
        Dn = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            W.canSend() &&
              (($.isNewsletterStatus === !0 && X == null) || Tn()));
        },
        xn = function (t) {
          var e;
          if (De && !t.repeat && !t.shiftKey && !qe) {
            var n = _t.current.get(De.id);
            if (!(n != null && n.isFocused())) {
              var r = $t().getSelectedLayer();
              if (r instanceof o("WAWebMediaEditorLayersText").TextLayer) {
                (t.preventDefault(), t.stopPropagation(), dn(r));
                return;
              }
              ((e = Je.current) != null && e.resetUIState()) || Dn();
            }
          }
        },
        $n = function () {
          if (De) {
            var e = dt.current.get(De.id);
            e && e.scrollIntoView();
          }
        },
        Pn = function () {
          var e = W.setPrevAsActive();
          e && $n();
        },
        Nn = function () {
          var e = W.setNextAsActive();
          e && $n();
        },
        Mn = function (t, n) {
          if (!(!De || n.repeat || qe)) {
            var e = De && !De.caption,
              r = _t.current.get(De.id),
              o = !1;
            (r &&
              (o =
                !e &&
                r.isFocused() &&
                (!r.isCursorAtStart() || t !== "left") &&
                (!r.isCursorAtEnd() || t !== "right")),
              o ||
                (n.preventDefault(),
                n.stopPropagation(),
                t === "left" ? Pn() : Nn()));
          }
        },
        wn = function (t) {
          if (De != null && De.mediaEditorData.hasEdits()) {
            var e;
            (e = Je.current) == null || e.updatePreview({ immediately: !0 });
          }
          W.setActive(t);
        },
        An = function (t, n) {
          (n.stopPropagation(),
            n.preventDefault(),
            W.remove(t),
            W.getValidMedias().length === 0
              ? (at.current = self.setTimeout(function () {
                  N();
                }, C))
              : et.current && r("WAWebFocusTracer").focus(et.current));
        },
        Fn = function (t) {
          var e = null,
            n = function (n) {
              var e = n.onSendButtonClick,
                r = n.sendButtonEnabled,
                a = r === void 0 ? !1 : r,
                i = n.setSendButtonRef,
                l = n.theme,
                s = n.viewOnce,
                u = s === void 0 ? null : s,
                c = n.viewOnceDisabled,
                d = c === void 0 ? !0 : c;
              return $.renderCaptionInput({
                theme: l,
                msgType: t.type,
                initialText: t.caption,
                viewOnce: u,
                viewOnceDisabled: d,
                onChange: Sn,
                onToggleViewOnce: Ge,
                onEnter: Dn,
                onFiles: Rn,
                setCaptionInputRef: function (n) {
                  ft(t.id, n);
                },
                setSendButtonRef: i,
                internLinksEnabled:
                  F !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                phoneNumbersEnabled:
                  F !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                expandedTextFormatsEnabled:
                  F !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                multiline:
                  F !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                sendButtonEnabled:
                  a ||
                  F === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
                onSendButtonClick: e || Dn,
                maxCaptionLength: $.maxCaptionLength,
              });
            };
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.IMAGE: {
              var a = n({
                theme: "image",
                viewOnce: He,
                viewOnceDisabled: !In(),
                setSendButtonRef: function (n) {
                  return ht(t.id, n);
                },
              });
              e = p.jsx(
                r("WAWebMediaEditorImage.react"),
                {
                  ref: Je,
                  attachMedia: t,
                  captionInput: a,
                  hdEligible: t.hdEligible && $.hdEligible,
                  isSendHQPhotoEnabled: $.isSendHQPhotoEnabled,
                  onCaptionChange: Sn,
                  onClose:
                    F === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE
                      ? null
                      : N,
                  onEnter: Dn,
                  openTrigger: z,
                  setCaptionInputRef: ft,
                  setSendButtonRef: ht,
                  paintThickness: Z,
                  outlineSmoothing: ne,
                  canUndo: Re,
                  canRedo: ke,
                  currentlyEditingTextLayer: Oe,
                  draftTextLayer: qe,
                  viewOnce: He,
                  sendAsSticker: je,
                  inFilterMode: _e,
                  internLinksEnabled:
                    F !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                  mediaTheme: F,
                  onFilterChange: Gt,
                  onFilterSelect: Ht,
                  onPaintSelect: Ut,
                  onOutlineSelect: Vt,
                  onOutlineDone: zt,
                  onOutlineReset: jt,
                  onTextSelect: an,
                  onTextBackgroundToggle: cn,
                  onEmojiSelect: Ot,
                  onShapeSelect: Wt,
                  onStickerSelect: qt,
                  onLayerSelect: fn,
                  onLayerUnselect: on,
                  onLayerDelete: yn,
                  onLayerTranslate: gn,
                  onLayerTransform: hn,
                  onTextEditingStart: dn,
                  onTextEditingEnd: mn,
                  onTextColorSelect: un,
                  onPointsChange: tn,
                  onFontSelect: ln,
                  onAlignmentSelect: sn,
                  onShapeFillColorSelect: Jt,
                  onShapeStrokeColorSelect: Zt,
                  onShapeStrokeWidthSelect: en,
                  onPaintThicknessSelect: nn,
                  onOutlineSmoothingToggle: rn,
                  onCropRotateCanvas: Kt,
                  onBlurModeChange: Qt,
                  onBlurRadiusChange: Xt,
                  onBlurSelect: Yt,
                  onUndo: wt,
                  onRedo: At,
                  onPaintDrawEnd: pn,
                  onOutlineDrawEnd: _n,
                  onToggleViewOnce: Ge,
                  onFiles: Rn,
                },
                t.mediaEditorData.getId(),
              );
              break;
            }
            case o("WAWebMsgType").MSG_TYPE.VIDEO: {
              var i = n({
                theme: "video",
                viewOnce: He,
                viewOnceDisabled: !In(),
              });
              e = p.jsx(
                r("WAWebMediaEditorPreviewVideo.react"),
                { attachMedia: t, captionInput: i, onClose: N },
                t.id,
              );
              break;
            }
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
              e = p.jsx(
                r("WAWebMediaEditorPreviewAudio.react"),
                { item: t, onClose: N },
                t.id,
              );
              break;
            default: {
              var l = n({
                theme: "document",
                viewOnce: !1,
                viewOnceDisabled: !0,
              });
              o("WAWebMimeTypes").previewType(t.mimetype) === "pdf"
                ? (e = p.jsx(
                    r("WAWebMediaEditorPreviewPdf.react"),
                    {
                      captionInput: l,
                      documentPageCount: t.documentPageCount,
                      fileExt: t.fileExt,
                      filename: t.filename,
                      fileSize: t.filesize,
                      fullPreview: t.fullPreview,
                      fullPreviewSize: t.fullPreviewSize,
                      isPasswordProtected: t.isPasswordProtected,
                      mimetype: t.mimetype,
                      onClose: N,
                    },
                    t.id,
                  ))
                : (e = p.jsx(
                    r("WAWebMediaEditorPreviewFile.react"),
                    {
                      mimeType: t.mimetype,
                      filesize: t.filesize,
                      filename: t.filename,
                      fileExt: t.fileExt,
                      onClose: N,
                      captionInput: l,
                    },
                    t.id,
                  ));
              break;
            }
          }
          return e;
        },
        On,
        Bn = W.getPreviewableMedias(),
        Wn = $.maxNumberOfMedia;
      (Bn.length > Wn && (Bn = Bn.slice(0, Wn)),
        W.canSend()
          ? De && (On = Fn(De))
          : (On = p.jsx(
              "div",
              babelHelpers.extends(
                {},
                (c || (c = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.allAuto,
                ),
                {
                  children: p.jsx(
                    o("WAWebSpinner.react").Spinner,
                    { color: "highlight" },
                    "processing",
                  ),
                },
              ),
            )));
      var qn = be
          ? p.jsx(
              "div",
              {
                className: "x10l6tqk x1bkdxzg xh8yej3 x5yr21d x1280gxy",
                children: p.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      D.dropOverlayOutline,
                      D.dropOverlayOutlineRefreshed,
                      o("WAWebUISpacing").uiMargin.top30,
                      o("WAWebUISpacing").uiMargin.bottom30,
                      o("WAWebUISpacing").uiMargin.horiz30,
                    ),
                    { children: s._(/*BTDS*/ "Drag file here") },
                  ),
                ),
              },
              "container",
            )
          : null,
        Un = {
          enter: xn,
          left: function (t) {
            return Mn("left", t);
          },
          right: function (t) {
            return Mn("right", t);
          },
        },
        Vn =
          (m = $.mimes) != null
            ? m
            : o("WAWebMimeTypes").DOC_MIMES === "*"
              ? "*"
              : [o("WAWebMimeTypes").IMAGE_MIMES].join(),
        Hn,
        Gn =
          (De == null ? void 0 : De.type) ===
          o("WAWebMsgType").MSG_TYPE.DOCUMENT,
        zn = (_ = $.isNewsletterStatus) != null ? _ : !1;
      if (On != null) {
        var jn, Kn;
        if (
          (Bn.length > 0 &&
            (F === o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS &&
              (zn && $.newsletterWid == null
                ? (Kn = p.jsx(r("WAWebNewsletterStatusSelectorButton.react"), {
                    selectedNewsletterWid: X,
                    onNewsletterSelected: Y,
                    type: "media",
                  }))
                : zn ||
                  (Kn = p.jsx(r("WAWebStatusPrivacySettingButton.react"), {
                    onAudienceSelectorClicked: $.onAudienceSelectorClicked,
                    statusPostingPrivacyConfig: $.statusPostingPrivacyConfig,
                    setStatusPostingPrivacyConfig: r("WANullthrows")(
                      $.setStatusPostingPrivacyConfig,
                    ),
                    type: "media",
                  }))),
            F === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION ||
            F === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST
              ? (jn = p.jsx("div", {
                  tabIndex: -1,
                  ref: et,
                  onKeyPress: o("WAWebStopEvent").preventDefault,
                  children: p.jsx(r("WDSButton.react"), {
                    "aria-label": s._(/*BTDS*/ "Save"),
                    onPress: Dn,
                    disabled: !W.canSend(),
                    label: s._(/*BTDS*/ "Save"),
                    size:
                      F ===
                      o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION
                        ? "medium"
                        : "large",
                  }),
                }))
              : (jn = p.jsx("div", {
                  className: "x1247r65 xng8ra",
                  tabIndex: -1,
                  ref: et,
                  onKeyPress: o("WAWebStopEvent").preventDefault,
                  children: p.jsx(r("WAWebSendButtonWithCount.react"), {
                    ariaLabel:
                      Bn.length > 1
                        ? s._(/*BTDS*/ "Send {file count} files", [
                            s._param("file count", Bn.length),
                          ])
                        : s._(/*BTDS*/ "Send"),
                    large: !0,
                    count: Bn.length === 1 ? null : Bn.length,
                    onClick: Dn,
                    disabled: !W.canSend() || (zn && X == null),
                    theme:
                      F === o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL ||
                      F ===
                        o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW
                        ? "TICK"
                        : "SEND",
                  }),
                }))),
          F === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE)
        )
          Hn = null;
        else {
          var Qn = s._(/*BTDS*/ "Add file"),
            Xn;
          if (F === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION)
            Xn = o(
              "WAWebBizAdCreationMediaValidationUtils",
            ).canAddMoreAttachments(W)
              ? p.jsx(
                  r("WDSButton.react"),
                  {
                    xstyle: [
                      o("WAWebUISpacing").uiMargin.vert8,
                      o("WAWebUISpacing").uiMargin.horiz5,
                    ],
                    Icon: o("WAWebPlusIcon.react").PlusIcon,
                    variant: "tonal",
                    size: "large",
                    type: "default",
                    onPress: En,
                    "aria-label": Qn,
                  },
                  "media-more",
                )
              : null;
          else {
            var Yn = !He && !je && Bn.length < Wn;
            Xn =
              !je && G
                ? p.jsx(
                    r("WDSButton.react"),
                    {
                      "aria-label": Qn,
                      disabled: !Yn,
                      Icon: o("WAWebPlusIcon.react").PlusIcon,
                      onPress: En,
                      variant: "borderless",
                      xstyle: [
                        D.addMediaButton,
                        !Yn && D.addMediaButtonDisabled,
                        o("WAWebUISpacing").uiMargin.vert8,
                        o("WAWebUISpacing").uiMargin.horiz5,
                      ],
                    },
                    "media-more",
                  )
                : null;
          }
          var Jn;
          (Bn.length > 0 &&
            F !== o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST &&
            (Jn = p.jsxs(o("WAWebFlex.react").FlexRow, {
              grow: 1,
              className: (c || (c = r("stylex")))([
                D.filmstripContainer,
                o("WAWebUISpacing").uiMargin.top4,
                o("WAWebUISpacing").uiMargin.horiz16,
                o("WAWebUISpacing").uiMargin.bottom0,
              ]),
              justify: "center",
              align: "center",
              children: [
                p.jsx(r("WAWebMediaEditorFilmstripDragAndDrop.react"), {
                  className: "x1c4vz4f xs83m0k xdl72j9 xeuugli xw2csxc xuxw1ft",
                  mediaCollection: W,
                  onClick: wn,
                  onClose: An,
                  onElementRef: mt,
                  theme: F,
                }),
                Xn,
              ],
            })),
            (Hn = p.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (c || (c = r("stylex"))).props(
                  F === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST
                    ? D.footerBroadcast
                    : D.footer,
                  o("WAWebUISpacing").uiPadding.vert8,
                  o("WAWebUISpacing").uiPadding.horiz16,
                ),
                { children: [Kn, Jn, jn] },
              ),
            )));
        }
      }
      var Zn = {
          0: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
          2: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
          1: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
          3: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
        }[
          (((De == null ? void 0 : De.type) !==
            o("WAWebMsgType").MSG_TYPE.IMAGE) <<
            1) |
            (!!Gn << 0)
        ],
        er = p.jsxs(o("WAWebFlex.react").FlexColumn, {
          grow: 1,
          className: Zn,
          align: "stretch",
          children: [
            qn,
            On,
            Hn,
            p.jsx("input", {
              ref: Ze,
              type: "file",
              accept: Vn,
              style: { display: "none" },
              onChange: Cn,
              multiple: !0,
            }),
          ],
        });
      F === o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH &&
        (er = p.jsx(
          r("WAWebDrawer.react"),
          {
            theme: "media",
            onDrop: bn,
            onDragChange: vn,
            children: p.jsx(r("WAWebDrawerBody.react"), {
              tabIndex: "-1",
              overflow: "hidden",
              onPaste: Ln,
              children: er,
            }),
          },
          "attach-image-modal",
        ));
      var tr = { 0: "", 1: "xh8yej3 x5yr21d" }[
        !!(
          F === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE ||
          o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS
        ) << 0
      ];
      return p.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        className: tr,
        handlers: Un,
        ref: tt,
        children: er,
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    var $ = x;
    l.MediaEditor = $;
  },
  226,
);
