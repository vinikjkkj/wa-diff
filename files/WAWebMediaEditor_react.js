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
        x,
        $ = t.ref,
        P = babelHelpers.objectWithoutPropertiesLoose(t, u);
      o("WAWebTimeSpentLoggingNavigation").useTsNavigation(P.tsNavigationData);
      var N = P.onClose,
        M = N === void 0 ? r("WAWebNoop") : N,
        w = P.onRender,
        A = w === void 0 ? r("WAWebNoop") : w,
        F = P.theme,
        O =
          F === void 0 ? o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH : F,
        B = P.sendAsSticker,
        W = B === void 0 ? !1 : B,
        q = P.mediaCollection,
        U = P.initCaption,
        V = P.onDropText,
        H = P.onSendMedia,
        G = P.allowMultipleMedia,
        z = G === void 0 ? !0 : G,
        j = P.openTrigger,
        K = P.isSendHQPhotoEnabled,
        Q = K === void 0 ? !0 : K,
        X = (a = P.isSubmitDisabled) != null ? a : !1,
        Y = y((i = P.newsletterWid) != null ? i : null),
        J = Y[0],
        Z = Y[1],
        ee = y(
          W != null && W
            ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE
            : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL,
        ),
        te = ee[0],
        ne = ee[1],
        re = y(!0),
        oe = re[0],
        ae = re[1],
        ie = y(function () {
          return o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
          );
        }),
        le = ie[0],
        se = ie[1],
        ue = y(o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF),
        ce = ue[0],
        de = ue[1],
        me = y(o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER),
        pe = me[0],
        _e = me[1],
        fe = y(!1),
        ge = fe[0],
        he = fe[1],
        ye = y(!0),
        Ce = ye[0],
        be = ye[1],
        ve = y(!1),
        Se = ve[0],
        Re = ve[1],
        Le = y(!1),
        Ee = Le[0],
        ke = Le[1],
        Ie = y(!1),
        Te = Ie[0],
        De = Ie[1],
        xe = y(null),
        $e = xe[0],
        Pe = xe[1],
        Ne = y(null),
        Me = Ne[0],
        we = Ne[1],
        Ae = y(!1),
        Fe = Ae[0],
        Oe = Ae[1],
        Be = y(null),
        We = Be[0],
        qe = Be[1],
        Ue = y(null),
        Ve = Ue[0],
        He = Ue[1],
        Ge = r("useWAWebToggle")(!1),
        ze = Ge[0],
        je = Ge[1],
        Ke = y(W != null ? W : !1),
        Qe = Ke[0],
        Xe = Ke[1],
        Ye = o("useWAWebTimeout").useTimeout(function () {
          j ===
            o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger
              .ConversationPanelDragAndDrop &&
            (Se || M());
        }, 250),
        Je = Ye[0],
        Ze = Ye[1],
        et = h(),
        tt = h(),
        nt = h(),
        rt = h(),
        ot = y(U == null ? void 0 : U.text),
        at = ot[0],
        it = ot[1],
        lt = h(),
        st = h(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_MODE),
        ut = h(o("WAWebMediaEditorToolbarBlur.react").BLUR_DEFAULT_RADIUS),
        ct = h(
          o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
          ),
        ),
        dt = h(
          o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
          ),
        ),
        mt = h(3),
        pt = r("useLazyRef")(function () {
          return new Map();
        }),
        _t = function (t, n) {
          pt.current.set(t, n);
        },
        ft = r("useLazyRef")(function () {
          return new Map();
        }),
        gt = r("useLazyRef")(function () {
          return new Map();
        }),
        ht = function (t, n) {
          gt.current.set(t, n);
        },
        yt = r("useLazyRef")(function () {
          return new Map();
        }),
        Ct = function (t, n) {
          yt.current.set(t, n);
        },
        bt = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        vt = r("useWAWebUnmountSignal")();
      ((q.isStickerMaker = Qe),
        o("useWAWebListener").useListener(q, ["add", "remove", "reset"], bt));
      var St = function () {
        if (q.canSend()) {
          var e = q.uiProcessMsgs(P.maxNumberOfMedia, O),
            t = e.errorMsgs;
          (t &&
            (o("WAWebToastManager").ToastManager.open(
              p.jsx(o("WAWebToast.react").Toast, { msg: t }),
            ),
            q.getPreviewableMedias().length === 0 && M()),
            bt());
        }
      };
      o("useWAWebListener").useListener(
        q,
        ["active-change", "change:state", "change:previewable"],
        St,
      );
      var Rt = function () {
          var e;
          return (
            q.length === 1 &&
            ((e = q.at(0)) == null ? void 0 : e.type) ===
              o("WAWebMsgType").MSG_TYPE.IMAGE
          );
        },
        Lt = function () {
          var e = !Qe && Rt();
          (Xe(e),
            ne(
              e
                ? o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE
                : o("WAWebMediaEditorEnumsThickness").ThicknessType.SMALL,
            ));
        };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "toggle_sticker_maker",
        Lt,
      ),
        f(function () {
          Je();
        }, []),
        f(function () {
          var e;
          return (
            (e = rt.current) == null || e.focus(),
            function () {
              lt.current && self.clearTimeout(lt.current);
            }
          );
        }, []),
        f(
          function () {
            q.isStickerMaker = Qe;
          },
          void 0,
        ));
      var Et = o("useWAWebModelValues").useModelValues(
        r("WAWebChatPreferenceCollection").getDefault(),
        ["hdMediaEnabled"],
      );
      f(
        function () {
          Et.hdMediaEnabled &&
            $e != null &&
            $e.hdEligible &&
            $e.quality !== o("WAWebAttachMediaModel").MediaQuality.HD &&
            Q &&
            $e.setQualityFromPrefs();
        },
        [$e, Et.hdMediaEnabled, Q],
      );
      var kt = function () {
          return rt.current;
        },
        It = function (t) {
          var e;
          if ((e = et.current) != null && e.resetUIState()) return !1;
          if (Ve) return (qe(null), He(null), !1);
          var n = t === o("WAWebUim").DismissReason.UIM_INTERACTION;
          return (M(n), !0);
        };
      (g($, function () {
        return { getElement: kt, handleRequestDismiss: It };
      }),
        f(
          function () {
            A();
          },
          [A],
        ));
      var Tt = q.getActive(),
        Dt = at,
        xt = Fe;
      !xt &&
        !$e &&
        Dt != null &&
        Dt !== "" &&
        Tt &&
        (Tt.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
          Tt.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
          Tt.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) &&
        ((Tt.caption = Dt), (xt = !0));
      var $t =
          (l = Tt == null ? void 0 : Tt.canUndoMediaEditorData()) != null
            ? l
            : !1,
        Pt =
          (m = Tt == null ? void 0 : Tt.canRedoMediaEditorData()) != null
            ? m
            : !1;
      Tt !== Me && (we(Tt), Pe(Tt), ke($t), De(Pt), Oe(xt));
      var Nt = function () {
          return $e == null
            ? r("WAWebMediaEditorData").create()
            : $e.mediaEditorData;
        },
        Mt = function () {
          var e, t;
          (ke(
            (e = $e == null ? void 0 : $e.canUndoMediaEditorData()) != null
              ? e
              : !1,
          ),
            De(
              (t = $e == null ? void 0 : $e.canRedoMediaEditorData()) != null
                ? t
                : !1,
            ));
        },
        wt = function (n, r) {
          if (n !== Nt()) {
            if ($e) {
              var t, a;
              ($e.updateMediaEditorData(n, {
                undoable:
                  (t = r == null ? void 0 : r.undoable) != null ? t : !1,
                lastAction:
                  (a = r == null ? void 0 : r.lastAction) != null ? a : null,
              }),
                Mt());
            }
            if (r != null && r.updatePreview) {
              var i;
              (i = et.current) == null || i.updatePreview();
            }
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MediaEditor: Updated MediaEditorData",
                ])),
            );
          }
        },
        At = function () {
          var e;
          return (e = et.current) == null ? void 0 : e.getBackground();
        },
        Ft = function (t) {
          if ((t === void 0 && (t = !0), $e && $e.canUndoMediaEditorData())) {
            var e,
              n,
              r = $e.lastMediaEditorAction;
            $e.undoMediaEditorData(t);
            var o = $e.lastMediaEditorAction;
            (Mt(),
              (e = et.current) == null || e.updatePreview(),
              (n = et.current) == null || n.undoAction(r, o));
          }
        },
        Ot = function () {
          if ($e && $e.canRedoMediaEditorData()) {
            var e,
              t,
              n = $e.lastMediaEditorAction;
            $e.redoMediaEditorData();
            var r = $e.lastMediaEditorAction;
            (Mt(),
              (e = et.current) == null || e.updatePreview(),
              (t = et.current) == null || t.redoAction(r, n));
          }
        },
        Bt = function (t, n, o, a) {
          var e = r("WANullthrows")(et.current).getCanvasScale(),
            i = n.width * e.x,
            l = n.height * e.y,
            s = o / i,
            u = a / l,
            c = Math.min(s, u),
            d = Nt().addImageLayerToCenter({
              type: t,
              image: n,
              editable: !0,
              scale: { x: c, y: c },
            });
          wt(d, { updatePreview: !0, undoable: !0 });
        },
        Wt = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield o(
                "WAWebMediaEditorUtilsCreateCanvasAndImage",
              ).createImageFromEmoji(e);
              if (!t) return;
              var n = Qe ? v : b;
              (Bt(
                o("WAWebMediaEditorLayersImage").ImageLayerType.Emoji,
                t,
                n,
                n,
              ),
                Qe &&
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
        qt = function (t, n, a, i, l, s, u, c) {
          (s === void 0 &&
            (s = o("WAWebMediaEditorEnumsColors").getColorValue(
              o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
            )),
            u === void 0 &&
              (u = o("WAWebMediaEditorEnumsColors").getColorValue(
                o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
              )),
            c === void 0 && (c = 50));
          var e = r("WANullthrows")(et.current).getCanvasScale(),
            d = r("WANullthrows")(et.current).getCanvasSize(),
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
            _ = Nt().addShapeLayerToCenter({
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
          wt(_, { updatePreview: !0, undoable: !0 });
        },
        Ut = function (t) {
          var e = Nt().getSelectedLayer();
          if (
            e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !e.getConfirmed()
          )
            Ft(!1);
          else {
            var n,
              a,
              i = Nt().clearSelectedLayer();
            (wt(i),
              qt(
                r("WANullthrows")(
                  (n = Nt().getBackground()) == null ? void 0 : n.getImage(),
                ),
                r("WANullthrows")(
                  (a = Nt().getBackground()) == null ? void 0 : a.getFrame(),
                ),
                t,
                ut.current,
                o("WAWebMediaEditorLayersShape").BlurMode.None,
                ct.current,
                dt.current,
                mt.current,
              ));
          }
        },
        Vt = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield o(
                "WAWebMediaEditorUtilsCreateCanvasAndImage",
              ).createImageFromSticker(e);
              if (!t) throw r("err")("Create image from sticker failed");
              (Bt(
                o("WAWebMediaEditorLayersImage").ImageLayerType.Sticker,
                t,
                S,
                S,
              ),
                Qe &&
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
        Ht = function () {
          var e = Nt().clearSelectedLayer();
          wt(e);
        },
        Gt = function () {
          var e = Nt().clearSelectedLayer();
          wt(e);
        },
        zt = function () {
          var e = Nt().clearSelectedLayer();
          (wt(e),
            he(function (e) {
              return !e;
            }));
        },
        jt = function (t) {
          var e = Nt(),
            n = e.setActiveFilter(t);
          wt(n, { undoable: !0, updatePreview: !0 });
        },
        Kt = function () {
          var e = At(),
            t = Nt();
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
            (wt(_, {
              undoable: !0,
              updatePreview: !0,
              lastAction: o("WAWebAttachMediaModel").MediaEditorAction
                .OutlineDone,
            }),
              Qe &&
                new (o(
                  "WAWebWebcStickerMakerEventsWamEvent",
                ).WebcStickerMakerEventsWamEvent)({
                  stickerMakerEventName: o(
                    "WAWebWamEnumWebcStickerMakerEventNameType",
                  ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_OUTLINED,
                }).commit());
          }
        },
        Qt = function () {
          var e = Nt().clearOutlinePaths();
          wt(e, { undoable: !0, updatePreview: !0 });
        },
        Xt = function (t, n, r) {
          var e = Nt().setRotation(t).setCrop(n, r);
          (wt(e, {
            undoable: !0,
            updatePreview: !0,
            lastAction: o("WAWebAttachMediaModel").MediaEditorAction
              .CropRotateCanvas,
          }),
            Qe &&
              new (o(
                "WAWebWebcStickerMakerEventsWamEvent",
              ).WebcStickerMakerEventsWamEvent)({
                stickerMakerEventName: o(
                  "WAWebWamEnumWebcStickerMakerEventNameType",
                ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_CROPPED,
              }).commit());
        },
        Yt = function (t) {
          var e = Nt().getSelectedLayer();
          if (
            e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            e.isBlur()
          ) {
            var n = Nt().setBlurMode(e, t);
            (wt(n, { updatePreview: !0, undoable: !0 }), (st.current = t));
          }
        },
        Jt = function (t, n) {
          n === void 0 && (n = !1);
          var e = Nt().getSelectedLayer();
          if (e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer) {
            var r = Nt().setShapeRadius(e, t);
            (wt(r, { updatePreview: !0, undoable: n }), (ut.current = t));
          }
        },
        Zt = function () {
          var e = Nt().getSelectedLayer();
          if (
            e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            e.isBlur() &&
            !e.getConfirmed()
          )
            Ft(!1);
          else {
            var t,
              n,
              a = Nt().clearSelectedLayer();
            (wt(a),
              qt(
                r("WANullthrows")(
                  (t = Nt().getBackground()) == null ? void 0 : t.getImage(),
                ),
                r("WANullthrows")(
                  (n = Nt().getBackground()) == null ? void 0 : n.getFrame(),
                ),
                o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE,
                ut.current,
                st.current,
              ));
          }
        },
        en = function (t) {
          var e = Nt(),
            n = e.getSelectedLayer();
          if (
            n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !n.isBlur()
          ) {
            var r = e.setShapeFillColor(n, t);
            (wt(r, { updatePreview: !0, undoable: !0 }),
              (ct.current = t),
              (dt.current = n.getStrokeColor()),
              (mt.current = n.getStrokeWidth()));
          }
        },
        tn = function (t) {
          var e = Nt(),
            n = e.getSelectedLayer();
          if (
            n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !n.isBlur()
          ) {
            var r = e.setShapeStrokeColor(n, t);
            (wt(r, { updatePreview: !0, undoable: !0 }),
              (ct.current = n.getFillColor()),
              (dt.current = t),
              (mt.current = n.getStrokeWidth()));
          }
        },
        nn = function (t) {
          var e = Nt(),
            n = e.getSelectedLayer();
          if (
            n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            !n.isBlur()
          ) {
            var r = e.setShapeStrokeWidth(n, t);
            (wt(r, { updatePreview: !0, undoable: !0 }),
              (ct.current = n.getFillColor()),
              (dt.current = n.getStrokeColor()),
              (mt.current = t));
          }
        },
        rn = function (t, n) {
          var e = Nt(),
            r = t.setPoints(n),
            o = e.updateLayer(t, r);
          wt(o, { updatePreview: !0, undoable: !0 });
        },
        on = function (t) {
          ne(t);
        },
        an = function (t) {
          ae(t);
        },
        ln = function () {
          wt(Nt().clearSelectedLayer());
        },
        sn = function () {
          if (!We) {
            ln();
            var e = r("WANullthrows")(et.current).getCanvasScale(),
              t = { x: R / e.x, y: R / e.y };
            if (Qe) {
              var n = Nt(),
                a = n.getCropSize().getDimension(),
                i = (L * a) / o("WAWebStickerConstants").STICKER_DIMENSION;
              t = {
                x: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE,
                y: i / o("WAWebMediaEditorLayersText").DEFAULT_FONT_SIZE,
              };
            }
            var l = {
                origin: Nt().getCropCenter(),
                text: "",
                textColor: le,
                textBackground: Ce,
                alignment: pe,
                font: ce,
                scale: t,
              },
              s = Nt().addTextLayer(l);
            wt(s, { updatePreview: !0, undoable: !0 });
            var u = r("WANullthrows")(s.getLastTextLayer());
            (He(u), qe(null));
          }
        },
        un = function (t) {
          de(t);
          var e = Nt().getSelectedLayer();
          if (Ve) He(Ve.setFont(t));
          else if (
            e &&
            e instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = Nt().setFont(e, t);
            wt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        cn = function (t) {
          _e(t);
          var e = Nt().getSelectedLayer();
          if (Ve) He(Ve.setAlignment(t));
          else if (
            e &&
            e instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = Nt().setAlignment(e, t);
            wt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        dn = function (t) {
          se(t);
          var e = Nt().getSelectedLayer();
          if (Ve) He(Ve.setTextColor(t));
          else if (
            e &&
            e instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = Nt().setTextColor(e, t);
            wt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        mn = function () {
          var e = !Ce;
          be(e);
          var t = Nt().getSelectedLayer();
          if (Ve) He(Ve.setTextBackground(e));
          else if (
            t &&
            t instanceof o("WAWebMediaEditorLayersText").TextLayer
          ) {
            var n = Nt().setTextBackground(t, e);
            wt(n, { updatePreview: !0, undoable: !0 });
          }
        },
        pn = function (t) {
          (He(t), qe(t));
        },
        _n = function (t, n) {
          var e;
          if (!n)
            We &&
              wt(Nt().deleteLayer(We), {
                updatePreview: !0,
                undoable: !!t.getText(),
              });
          else {
            var a = Nt(),
              i = r("WANullthrows")(Ve).setText(n);
            (We
              ? (a = a.updateLayer(r("WANullthrows")(We), i))
              : ((a = a.addTextLayer(i)),
                Qe &&
                  new (o(
                    "WAWebWebcStickerMakerEventsWamEvent",
                  ).WebcStickerMakerEventsWamEvent)({
                    stickerMakerEventName: o(
                      "WAWebWamEnumWebcStickerMakerEventNameType",
                    ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.TEXT_ADDED,
                  }).commit()),
              wt(a, { updatePreview: !0, undoable: !0 }));
          }
          (self.setTimeout(function () {
            (He(null), qe(null));
          }, 0),
            (e = rt.current) == null || e.focus());
        },
        fn = function (t) {
          wt(Nt().addPaintPath(t), { undoable: !0, updatePreview: !0 });
        },
        gn = function (t) {
          wt(Nt().addOutlinePath(t), {
            undoable: !0,
            updatePreview: !0,
            lastAction: o("WAWebAttachMediaModel").MediaEditorAction.Outline,
          });
        },
        hn = function (t) {
          if (!(!t.getEditable() || ge)) {
            var e = Nt().setSelectedLayer(t);
            (t instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
              (t.getConfirmed() || (e = e.updateLayer(t, t.setConfirmed())),
              t.isBlur() && (st.current = t.getMode()),
              (ut.current = t.getRadius())),
              wt(e),
              t instanceof o("WAWebMediaEditorLayersText").TextLayer &&
                (se(t.getTextColor()),
                be(t.getTextBackground()),
                de(t.getFont())));
          }
        },
        yn = function (t, n) {
          var e =
            t instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
            t.isBackground();
          e
            ? wt(Nt().translateBackground(n), {
                updatePreview: !0,
                undoable: !0,
              })
            : wt(Nt().translateLayer(t, n), {
                updatePreview: !0,
                undoable: !0,
              });
        },
        Cn = function (t, n, r, a) {
          var e =
            t instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
            t.isBackground();
          e
            ? wt(Nt().transformBackground(n, r), {
                updatePreview: !0,
                undoable: !0,
              })
            : wt(Nt().transformLayer(t, n, r, a), {
                updatePreview: !0,
                undoable: !0,
              });
        },
        bn = function (t) {
          var e = Nt().deleteLayer(t);
          (t === Ve && (He(null), qe(null)),
            wt(e, { updatePreview: !0, undoable: !0 }));
        },
        vn = function (t) {
          (o("WAWebEventFiles")
            .getFiles(t)
            .then(function (e) {
              if (!vt.aborted) {
                var n;
                return (
                  t.shiftKey === !0 &&
                    t.altKey === !0 &&
                    e.length === 1 &&
                    (Xe(!0),
                    ne(
                      o("WAWebMediaEditorEnumsThickness").ThicknessType.XLARGE,
                    ),
                    (n = !0)),
                  P.onProcessAttachments(
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
                  q.length || V(e.src);
                },
              ),
            ),
            t.target instanceof HTMLInputElement && (t.target.value = ""));
        },
        Sn = function (t) {
          (Ze(), !(ze || Qe) && vn(t));
        },
        Rn = function (t, n) {
          ze || Qe || (Re(t), !t && !n && !q.length && M());
        },
        Ln = function (t) {
          if ($e) {
            var e = q.indexOf($e);
            ($e.updateCaption(t),
              e === 0 && t === "" && Fe && (Oe(!1), it(null)));
            var n = gt.current.get($e.id);
            n && ft.current.set($e.id, n.editorContent());
          }
        },
        En = function (t) {
          var e = t
            .getFiles()
            .filter(function (e) {
              var t = o("WAWebFileUtils").typeFromMimetype(e.type);
              return t === "image" || t === "video";
            })
            .map(function (e) {
              return { file: e };
            });
          P.onProcessAttachments(
            e,
            o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
              .PASTE,
          );
        },
        kn = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = new (r("WAWebDataTransfer"))(t.clipboardData);
          e.hasFiles() && En(e);
        },
        In = function () {
          if (tt.current) {
            var e = tt.current;
            e.click();
          }
        },
        Tn = function (t) {
          if (Qe) {
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
        Dn = function () {
          var e;
          return (
            q.length === 1 &&
            ((e = q.at(0)) == null ? void 0 : e.isViewableOnce()) === !0 &&
            P.canViewOnce &&
            !W
          );
        },
        xn = function () {
          var e = q.getPreviewableMedias();
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
                M();
                return;
              }
              if (($e != null && $e.mediaEditorData.hasEdits()) || Qe) {
                var t;
                (t = et.current) == null ||
                  t.updatePreview({ immediately: !0 });
              }
              var r = [];
              (e.forEach(function (e) {
                var t = e.editedFile;
                if (t && (e.mediaEditorData.hasEdits() || Qe)) {
                  var n = e.mediaEditorData.getActiveFilter(),
                    a = n !== o("WAWebMediaEditorUtilsFilters").FilterType.NONE,
                    i = e.mediaEditorData.isCropped(),
                    l = e.mediaEditorData.isRotated(),
                    s = q.replace(e.id, {
                      file: t,
                      asSticker: Qe,
                      hasFilter: a,
                      isCropped: i,
                      isRotated: l,
                    });
                  r.push(s);
                }
              }),
                (d || (d = n("Promise"))).all(r).then(function () {
                  var t = q.getPreviewableMedias();
                  if (t.length !== 0) {
                    var n = t.map(function (e) {
                        var t,
                          n = (t = e.caption) == null ? void 0 : t.trim(),
                          r = [],
                          o = [],
                          a = ft.current.get(e.id);
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
                        isViewOnce: Dn() && ze,
                        selectedNewsletterWid: J,
                        threadId: P.threadId,
                      };
                    (Fe && (r.initCaptionUsed = !0),
                      H(n, r, nt.current),
                      Tn(e));
                  }
                }));
            });
        },
        $n = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            q.canSend() &&
              (X || (P.isNewsletterStatus === !0 && J == null) || xn()));
        },
        Pn = function (t) {
          var e;
          if ($e && !t.repeat && !t.shiftKey && !Ve) {
            var n = gt.current.get($e.id);
            if (!(n != null && n.isFocused())) {
              var r = Nt().getSelectedLayer();
              if (r instanceof o("WAWebMediaEditorLayersText").TextLayer) {
                (t.preventDefault(), t.stopPropagation(), pn(r));
                return;
              }
              ((e = et.current) != null && e.resetUIState()) || $n();
            }
          }
        },
        Nn = function () {
          if ($e) {
            var e = pt.current.get($e.id);
            e && e.scrollIntoView();
          }
        },
        Mn = function () {
          var e = q.setPrevAsActive();
          e && Nn();
        },
        wn = function () {
          var e = q.setNextAsActive();
          e && Nn();
        },
        An = function (t, n) {
          if (!(!$e || n.repeat || Ve)) {
            var e = $e && !$e.caption,
              r = gt.current.get($e.id),
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
                t === "left" ? Mn() : wn()));
          }
        },
        Fn = function (t) {
          if ($e != null && $e.mediaEditorData.hasEdits()) {
            var e;
            (e = et.current) == null || e.updatePreview({ immediately: !0 });
          }
          q.setActive(t);
        },
        On = function (t, n) {
          (n.stopPropagation(),
            n.preventDefault(),
            q.remove(t),
            q.getValidMedias().length === 0
              ? (lt.current = self.setTimeout(function () {
                  M();
                }, C))
              : nt.current && r("WAWebFocusTracer").focus(nt.current));
        },
        Bn = function (t) {
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
              return P.renderCaptionInput({
                theme: l,
                msgType: t.type,
                initialText: t.caption,
                viewOnce: u,
                viewOnceDisabled: d,
                onChange: Ln,
                onToggleViewOnce: je,
                onEnter: $n,
                onFiles: En,
                setCaptionInputRef: function (n) {
                  ht(t.id, n);
                },
                setSendButtonRef: i,
                internLinksEnabled:
                  O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                phoneNumbersEnabled:
                  O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                expandedTextFormatsEnabled:
                  O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                multiline:
                  O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                sendButtonEnabled:
                  a ||
                  O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
                onSendButtonClick: e || $n,
                maxCaptionLength: P.maxCaptionLength,
              });
            };
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.IMAGE: {
              var a = n({
                theme: "image",
                viewOnce: ze,
                viewOnceDisabled: !Dn(),
                setSendButtonRef: function (n) {
                  return Ct(t.id, n);
                },
              });
              e = p.jsx(
                r("WAWebMediaEditorImage.react"),
                {
                  ref: et,
                  attachMedia: t,
                  captionInput: a,
                  hdEligible: t.hdEligible && P.hdEligible,
                  isSendHQPhotoEnabled: P.isSendHQPhotoEnabled,
                  onCaptionChange: Ln,
                  onClose:
                    O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE
                      ? null
                      : M,
                  onEnter: $n,
                  openTrigger: j,
                  setCaptionInputRef: ht,
                  setSendButtonRef: Ct,
                  paintThickness: te,
                  outlineSmoothing: oe,
                  canUndo: Ee,
                  canRedo: Te,
                  currentlyEditingTextLayer: We,
                  draftTextLayer: Ve,
                  viewOnce: ze,
                  sendAsSticker: Qe,
                  inFilterMode: ge,
                  internLinksEnabled:
                    O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
                  mediaTheme: O,
                  onFilterChange: jt,
                  onFilterSelect: zt,
                  onPaintSelect: Ht,
                  onOutlineSelect: Gt,
                  onOutlineDone: Kt,
                  onOutlineReset: Qt,
                  onTextSelect: sn,
                  onTextBackgroundToggle: mn,
                  onEmojiSelect: Wt,
                  onShapeSelect: Ut,
                  onStickerSelect: Vt,
                  onLayerSelect: hn,
                  onLayerUnselect: ln,
                  onLayerDelete: bn,
                  onLayerTranslate: yn,
                  onLayerTransform: Cn,
                  onTextEditingStart: pn,
                  onTextEditingEnd: _n,
                  onTextColorSelect: dn,
                  onPointsChange: rn,
                  onFontSelect: un,
                  onAlignmentSelect: cn,
                  onShapeFillColorSelect: en,
                  onShapeStrokeColorSelect: tn,
                  onShapeStrokeWidthSelect: nn,
                  onPaintThicknessSelect: on,
                  onOutlineSmoothingToggle: an,
                  onCropRotateCanvas: Xt,
                  onBlurModeChange: Yt,
                  onBlurRadiusChange: Jt,
                  onBlurSelect: Zt,
                  onUndo: Ft,
                  onRedo: Ot,
                  onPaintDrawEnd: fn,
                  onOutlineDrawEnd: gn,
                  onToggleViewOnce: je,
                  onFiles: En,
                  hideFooter: P.hideFooter,
                  toolbarContainer: P.toolbarContainer,
                },
                t.mediaEditorData.getId(),
              );
              break;
            }
            case o("WAWebMsgType").MSG_TYPE.VIDEO: {
              var i = n({
                theme: "video",
                viewOnce: ze,
                viewOnceDisabled: !Dn(),
              });
              e = p.jsx(
                r("WAWebMediaEditorPreviewVideo.react"),
                { attachMedia: t, captionInput: i, onClose: M },
                t.id,
              );
              break;
            }
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
              e = p.jsx(
                r("WAWebMediaEditorPreviewAudio.react"),
                { item: t, onClose: M },
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
                      onClose: M,
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
                      onClose: M,
                      captionInput: l,
                    },
                    t.id,
                  ));
              break;
            }
          }
          return e;
        },
        Wn,
        qn = q.getPreviewableMedias(),
        Un = P.maxNumberOfMedia;
      (qn.length > Un && (qn = qn.slice(0, Un)),
        q.canSend()
          ? $e && (Wn = Bn($e))
          : (Wn = p.jsx(
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
      var Vn = Se
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
        Hn = {
          enter: Pn,
          left: function (t) {
            return An("left", t);
          },
          right: function (t) {
            return An("right", t);
          },
        },
        Gn =
          (_ = P.mimes) != null
            ? _
            : o("WAWebMimeTypes").DOC_MIMES === "*"
              ? "*"
              : [o("WAWebMimeTypes").IMAGE_MIMES].join(),
        zn,
        jn =
          ($e == null ? void 0 : $e.type) ===
          o("WAWebMsgType").MSG_TYPE.DOCUMENT,
        Kn = (x = P.isNewsletterStatus) != null ? x : !1;
      if (Wn != null) {
        var Qn, Xn;
        if (
          (qn.length > 0 &&
            (O === o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS &&
              (P.renderSubmitAccessory != null
                ? (Xn = P.renderSubmitAccessory())
                : Kn && P.newsletterWid == null
                  ? (Xn = p.jsx(
                      r("WAWebNewsletterStatusSelectorButton.react"),
                      {
                        selectedNewsletterWid: J,
                        onNewsletterSelected: Z,
                        type: "media",
                      },
                    ))
                  : Kn ||
                    (Xn = p.jsx(r("WAWebStatusPrivacySettingButton.react"), {
                      onAudienceSelectorClicked: P.onAudienceSelectorClicked,
                      statusPostingPrivacyConfig: P.statusPostingPrivacyConfig,
                      setStatusPostingPrivacyConfig: r("WANullthrows")(
                        P.setStatusPostingPrivacyConfig,
                      ),
                      type: "media",
                    }))),
            O === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION ||
            O === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST
              ? (Qn = p.jsx("div", {
                  tabIndex: -1,
                  ref: nt,
                  onKeyPress: o("WAWebStopEvent").preventDefault,
                  children: p.jsx(r("WDSButton.react"), {
                    "aria-label": s._(/*BTDS*/ "Save"),
                    onPress: $n,
                    disabled: !q.canSend(),
                    label: s._(/*BTDS*/ "Save"),
                    size:
                      O ===
                      o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION
                        ? "medium"
                        : "large",
                  }),
                }))
              : (Qn = p.jsx("div", {
                  className: "x1247r65 xng8ra",
                  tabIndex: -1,
                  ref: nt,
                  onKeyPress: o("WAWebStopEvent").preventDefault,
                  children: p.jsx(r("WAWebSendButtonWithCount.react"), {
                    ariaLabel:
                      qn.length > 1
                        ? s._(/*BTDS*/ "Send {file count} files", [
                            s._param("file count", qn.length),
                          ])
                        : s._(/*BTDS*/ "Send"),
                    large: !0,
                    count: qn.length === 1 ? null : qn.length,
                    onClick: $n,
                    disabled: !q.canSend() || X || (Kn && J == null),
                    theme:
                      O === o("WAWebMediaEditorEnumsThemes").MediaTheme.POLL ||
                      O ===
                        o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW
                        ? "TICK"
                        : "SEND",
                  }),
                }))),
          O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE)
        )
          zn = null;
        else {
          var Yn = s._(/*BTDS*/ "Add file"),
            Jn;
          if (O === o("WAWebMediaEditorEnumsThemes").MediaTheme.AD_CREATION)
            Jn = o(
              "WAWebBizAdCreationMediaValidationUtils",
            ).canAddMoreAttachments(q)
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
                    onPress: In,
                    "aria-label": Yn,
                  },
                  "media-more",
                )
              : null;
          else {
            var Zn = !ze && !Qe && qn.length < Un;
            Jn =
              !Qe && z
                ? p.jsx(
                    r("WDSButton.react"),
                    {
                      "aria-label": Yn,
                      disabled: !Zn,
                      Icon: o("WAWebPlusIcon.react").PlusIcon,
                      onPress: In,
                      variant: "borderless",
                      xstyle: [
                        D.addMediaButton,
                        !Zn && D.addMediaButtonDisabled,
                        o("WAWebUISpacing").uiMargin.vert8,
                        o("WAWebUISpacing").uiMargin.horiz5,
                      ],
                    },
                    "media-more",
                  )
                : null;
          }
          var er;
          (qn.length > 0 &&
            O !== o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST &&
            (er = p.jsxs(o("WAWebFlex.react").FlexRow, {
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
                  mediaCollection: q,
                  onClick: Fn,
                  onClose: On,
                  onElementRef: _t,
                  theme: O,
                }),
                Jn,
              ],
            })),
            (zn = p.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (c || (c = r("stylex"))).props(
                  O === o("WAWebMediaEditorEnumsThemes").MediaTheme.BROADCAST
                    ? D.footerBroadcast
                    : D.footer,
                  o("WAWebUISpacing").uiPadding.vert8,
                  o("WAWebUISpacing").uiPadding.horiz16,
                ),
                { children: [Xn, er, Qn] },
              ),
            )));
        }
      }
      var tr = {
          0: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
          2: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
          1: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
          3: "x1iyjqo2 xs83m0k x1r8uery x1htk8sl x5yr21d x1bifzbx xhslqc4 x1280gxy xpilrb4 x1t7ytsu x1vb5itz",
        }[
          ((($e == null ? void 0 : $e.type) !==
            o("WAWebMsgType").MSG_TYPE.IMAGE) <<
            1) |
            (!!jn << 0)
        ],
        nr = p.jsxs(o("WAWebFlex.react").FlexColumn, {
          grow: 1,
          className: tr,
          align: "stretch",
          children: [
            Vn,
            Wn,
            zn,
            p.jsx("input", {
              ref: tt,
              type: "file",
              accept: Gn,
              style: { display: "none" },
              onChange: vn,
              multiple: !0,
            }),
          ],
        });
      O === o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH &&
        (nr = p.jsx(
          r("WAWebDrawer.react"),
          {
            theme: "media",
            onDrop: Sn,
            onDragChange: Rn,
            children: p.jsx(r("WAWebDrawerBody.react"), {
              tabIndex: "-1",
              overflow: "hidden",
              onPaste: kn,
              children: nr,
            }),
          },
          "attach-image-modal",
        ));
      var rr = { 0: "", 1: "xh8yej3 x5yr21d" }[
        !!(
          O === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE ||
          o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS
        ) << 0
      ];
      return p.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        className: rr,
        handlers: Hn,
        ref: rt,
        children: nr,
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    var $ = x;
    l.MediaEditor = $;
  },
  226,
);
