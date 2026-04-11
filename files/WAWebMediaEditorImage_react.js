__d(
  "WAWebMediaEditorImage.react",
  [
    "fbt",
    "Promise",
    "WAWebAttachMediaModel",
    "WAWebDeleteIcon.react",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebFlex.react",
    "WAWebIcDownloadIcon.react",
    "WAWebMediaEditorCanvas.react",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorEnumsThickness",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorOpenTrigger",
    "WAWebMediaEditorPreviewCropRotate.react",
    "WAWebMediaEditorTextToolbar.react",
    "WAWebMediaEditorToolbarBlur.react",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarCropRotate",
    "WAWebMediaEditorToolbarFilter",
    "WAWebMediaEditorToolbarMain",
    "WAWebMediaEditorToolbarOutline",
    "WAWebMediaEditorToolbarShape.react",
    "WAWebMediaEditorToolbarThickness.react",
    "WAWebMediaEditorUtilsColor",
    "WAWebMediaEditorUtilsFilters",
    "WAWebMediaEditorUtilsSize",
    "WAWebMenuBar.react",
    "WAWebPonyfillsIdleCallback",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "WAWebUserPrefsGeneral",
    "WDSIconIcClose.react",
    "WDSIconIcUndo.react",
    "asyncToGeneratorRuntime",
    "err",
    "propsWithoutKey",
    "react",
    "stylex",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useImperativeHandle,
      g = p.useRef,
      h = p.useState,
      y = 20,
      C = new (r("WAWebMediaEditorGeometrySize"))({ width: 200, height: 200 });
    function b(e) {
      return e ===
        o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger.DrawingMenu
        ? "paint"
        : "none";
    }
    function v() {
      var e = o("WAWebUserPrefsGeneral").getLastMediaEditorPaintColor();
      return e != null
        ? o("WAWebMediaEditorUtilsColor").Color.fromHex(e)
        : o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.BLUE,
          );
    }
    var S = {
      header: {
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "x1qughib",
        height: "xnnlda6",
        $$css: !0,
      },
      sideHeader: { display: "x78zum5", $$css: !0 },
      sideHeaderSection: { minWidth: "xq45ap7", $$css: !0 },
      sideHeaderSectionWithTwoOptions: { minWidth: "x5onlcp", $$css: !0 },
      sideHeaderSectionWithThreeOptions: { minWidth: "xce4x8b", $$css: !0 },
      doneButton: { alignSelf: "xamitd3", $$css: !0 },
      canvasContainer: {
        display: "x78zum5",
        flexGrow: "x1iyjqo2",
        flexShrink: "xs83m0k",
        flexBasis: "x1r8uery",
        flexDirection: "xdt5ytf",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: !0,
      },
      footer: { position: "x1n2onr6", minHeight: "xo8q3i6", $$css: !0 },
      flipHorizontally: { transform: "xpk2tj9", $$css: !0 },
    };
    function R(t) {
      "use no forget";
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = l.canRedo,
        p = l.canUndo,
        R = l.draftTextLayer,
        L = l.inFilterMode,
        E = l.isSendHQPhotoEnabled,
        k = E === void 0 ? !0 : E,
        I = l.mediaTheme,
        T = l.onClose,
        D = l.onCropRotateCanvas,
        x = l.onFilterChange,
        $ = l.onFilterSelect,
        P = l.onLayerDelete,
        N = l.onLayerUnselect,
        M = l.onOutlineDone,
        w = l.onOutlineSelect,
        A = l.onPaintSelect,
        F = l.onTextEditingEnd,
        O = l.onTextEditingStart,
        B = l.outlineSmoothing,
        W = l.paintThickness,
        q = o("useWAWebModelValues").useModelValues(l.attachMedia, [
          "mediaEditorData",
          "id",
          "quality",
          "hdEligible",
          "metadataByQuality",
          "editedFile",
        ]),
        U = g(null),
        V = g(null),
        H = g(null),
        G = g(null),
        z = g(null),
        j = g(null),
        K = g(null),
        Q = g(null),
        X = h(r("WAWebMediaEditorGeometrySize").empty()),
        Y = X[0],
        J = X[1],
        Z = h(null),
        ee = Z[0],
        te = Z[1],
        ne = b(l.openTrigger),
        re = h(ne === "paint"),
        oe = re[0],
        ae = re[1],
        ie = h(!1),
        le = ie[0],
        se = ie[1],
        ue = h(!1),
        ce = ue[0],
        de = ue[1],
        me = h(!1),
        pe = me[0],
        _e = me[1],
        fe = h(!1),
        ge = fe[0],
        he = fe[1],
        ye = h(!1),
        Ce = ye[0],
        be = ye[1],
        ve = g(ne === "paint"),
        Se = h(function () {
          return ne === "paint"
            ? v()
            : o("WAWebMediaEditorEnumsColors").getColorValue(
                o("WAWebMediaEditorEnumsColors").ColorType.BLUE,
              );
        }),
        Re = Se[0],
        Le = Se[1],
        Ee = function (t) {
          Q.current = t.target;
        },
        ke = function (t) {
          o("WAWebStateUtils").unproxy(l.attachMedia).updateQuality(t);
        },
        Ie = function () {
          ae(function (e) {
            var t = !e;
            return (t && !ve.current && ((ve.current = !0), Le(v())), t);
          });
        },
        Te = function (t) {
          (Le(t),
            o("WAWebUserPrefsGeneral").setLastMediaEditorPaintColor(t.toHex()));
        },
        De = function () {
          return q.mediaEditorData;
        },
        xe = function () {
          if (U.current) {
            var e = U.current.getBoundingClientRect(),
              t = new (r("WAWebMediaEditorGeometrySize"))({
                width: e.width - y * 2,
                height: e.height - y * 2,
              });
            J(t);
          }
        },
        $e = function () {
          (!le && De().getSelectedLayer() && N(),
            se(function (e) {
              return !e;
            }),
            xe());
        },
        Pe = function () {
          return oe;
        },
        Ne = function () {
          return le;
        },
        Me = function () {
          return L;
        },
        we = function () {
          return ce;
        },
        Ae = function () {
          de(function (e) {
            return !e;
          });
        },
        Fe = q.mediaEditorData,
        Oe = function () {
          if (Pe()) Ie();
          else if (Ne()) $e();
          else if (Me()) (x(Fe.getActiveFilter()), $());
          else if (we()) (M(), Ae());
          else if (q.mediaEditorData.getSelectedLayer() && !R) N();
          else return !1;
          return !0;
        },
        Be = function () {
          var e = Q.current;
          (e === U.current || e === G.current || e === V.current) && Oe();
        };
      (o("useWAWebListener").useListener(window, "mousedown", Ee),
        o("useWAWebListener").useListener(window, "click", Be));
      var We = function () {
          var e = q.mediaEditorData.getSelectedLayer() || R;
          e && P(e);
        },
        qe = function (t) {
          ((Q.current = t.target),
            t.key === "Backspace" &&
              !(t.target instanceof HTMLInputElement) &&
              !(
                t.target instanceof HTMLDivElement &&
                t.target.contentEditable === "true"
              ) &&
              !le &&
              We(),
            ((t.key === "z" && t.shiftKey && t.metaKey) ||
              (t.key === "y" && t.ctrlKey)) &&
            !(t.target instanceof HTMLInputElement)
              ? (t.preventDefault(), t.stopPropagation(), l.onRedo())
              : t.key === "z" &&
                (t.metaKey || t.ctrlKey) &&
                !(t.target instanceof HTMLInputElement) &&
                (t.preventDefault(), t.stopPropagation(), l.onUndo()));
        },
        Ue = function () {
          if (!z.current)
            throw r("err")("MediaEditor:canvas is not initialized");
          return z.current.getDataUrl();
        },
        Ve = function () {
          var e = Ue();
          return r("WAWebURLUtils").dataURLtoFile(e);
        },
        He = function () {
          if (z.current != null) {
            var e = z.current.getStage().attrs,
              t = e.height,
              n = e.width;
            if (n !== 0 && t !== 0) {
              var r = Ve(),
                o = window.URL.createObjectURL(r);
              (q.updateEditedFile(r),
                q.updatePreview(o),
                q.updateFullPreview(o));
            }
          }
        },
        Ge = r("useWAWebDebouncedCallback")(function () {
          (K.current &&
            (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(K.current),
            (K.current = null)),
            (K.current = o("WAWebPonyfillsIdleCallback").requestIdleCallback(
              He,
            )));
        }, 1e3),
        ze = function (t) {
          t != null && t.immediately ? He() : Ge();
        };
      _(function () {
        return (
          window.addEventListener("resize", xe),
          window.addEventListener("keydown", qe),
          xe(),
          function () {
            (window.removeEventListener("resize", xe),
              window.removeEventListener("keydown", qe),
              ze({ immediately: !0 }));
          }
        );
      }, []);
      var je = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        Ke = function (t) {
          (je(), O(t));
        },
        Qe = function (t, n) {
          (je(), F(t, n));
        },
        Xe = function () {
          if (le) $e();
          else if (L) (x(Fe.getActiveFilter()), $());
          else if (oe) Ie();
          else if (ce) (M(), Ae());
          else if (R) {
            var e;
            (e = z.current) == null || e.endTextEditing();
          } else De().getSelectedLayer() && N();
        },
        Ye = function () {
          (Ie(), A());
        },
        Je = function () {
          $e();
        },
        Ze = function (t) {
          D(De().getRotation() + t, De().getCropOrigin(), De().getCropSize());
        },
        et = function () {
          D(
            0,
            new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
            De().getSize(),
          );
        },
        tt = function (t, n) {
          D(De().getRotation(), t, n);
        },
        nt = function () {
          (Ae(), w());
        },
        rt = function (t) {
          _e(t);
        },
        ot = function (t) {
          be(t);
        },
        at = function (t) {
          he(t);
        },
        it = function (t) {
          var e,
            n,
            r = t.target;
          return !(
            (r instanceof HTMLElement && G.current && G.current.contains(r)) ||
            ((e = j.current) != null && e.isColorPanelVisible()) ||
            ((n = j.current) != null && n.isFontMenuVisible())
          );
        },
        lt = function (t) {
          te(t);
        },
        st = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = l.attachMedia,
              t = e.file,
              r = e.mediaEditorData,
              a = e.originalAttachment,
              i = yield (c || (c = n("Promise"))).resolve(a),
              s = function (t) {
                var e, n;
                o("WAWebFileSaver").FileSaver.downloadData(
                  t,
                  I === o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE
                    ? "captured_image"
                    : (e =
                          i == null || (n = i.filename) == null
                            ? void 0
                            : n.split(".").slice(0, -1).join(".")) != null
                      ? e
                      : "whatsapp_web_media",
                  o("WAWebFileSaverTypes").AllowedFileExtensions.PNG,
                );
              };
            if (r.hasEdits() || l.sendAsSticker) {
              ze({ immediately: !0 });
              var u = l.attachMedia.editedFile;
              u instanceof Blob && s(u);
            } else t instanceof Blob && s(t);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ut = function (t, n) {
          t === o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone
            ? (Oe(), Ae())
            : t === o("WAWebAttachMediaModel").MediaEditorAction.Outline
              ? (we() && Ae(),
                n === o("WAWebAttachMediaModel").MediaEditorAction.Outline &&
                  Ae())
              : t ===
                  o("WAWebAttachMediaModel").MediaEditorAction
                    .CropRotateCanvas &&
                (Oe(),
                n ===
                  o("WAWebAttachMediaModel").MediaEditorAction
                    .CropRotateCanvas && $e());
        },
        ct = function (t, n) {
          t === o("WAWebAttachMediaModel").MediaEditorAction.OutlineDone
            ? Oe()
            : t === o("WAWebAttachMediaModel").MediaEditorAction.Outline
              ? we() || Ae()
              : t ===
                  o("WAWebAttachMediaModel").MediaEditorAction.CropRotateCanvas
                ? (Oe(), $e())
                : n ===
                    o("WAWebAttachMediaModel").MediaEditorAction
                      .CropRotateCanvas &&
                  t !==
                    o("WAWebAttachMediaModel").MediaEditorAction
                      .CropRotateCanvas &&
                  Oe();
        },
        dt = function () {
          var e = q.mediaEditorData;
          return o("WAWebMediaEditorUtilsSize").calculateContainScale(
            e.getScreenWidth(),
            e.getScreenHeight(),
            Y,
            C,
          );
        },
        mt = function () {
          var e = q.mediaEditorData;
          return new (r("WAWebMediaEditorGeometrySize"))({
            width: e.getScreenWidth(),
            height: e.getScreenHeight(),
          });
        },
        pt = function () {
          var e;
          return (e = z.current) == null ? void 0 : e.getBackground();
        };
      f(i, function () {
        return {
          updatePreview: ze,
          undoAction: ut,
          redoAction: ct,
          getCanvasScale: dt,
          getCanvasSize: mt,
          resetUIState: Oe,
          getBackground: pt,
        };
      });
      var _t = l.draftTextLayer || Fe.getSelectedLayer(),
        ft;
      if (le)
        ft = m.jsx(r("WAWebMediaEditorToolbarCropRotate"), {
          canReset: Fe.isRotated() || Fe.isCropped(),
          onRotateCanvas: Ze,
          onReset: et,
        });
      else if (ce)
        ft = m.jsx(r("WAWebMediaEditorToolbarOutline"), {
          smoothing: l.outlineSmoothing,
          onSmoothingToggle: l.onOutlineSmoothingToggle,
          canReset: Fe.isOutlined(),
          onReset: l.onOutlineReset,
        });
      else if (_t) {
        var gt =
          _t instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
          _t.isBackground();
        _t instanceof o("WAWebMediaEditorLayersText").TextLayer
          ? (ft = m.jsx(o("WAWebMediaEditorTextToolbar.react").TextToolbar, {
              ref: j,
              textLayer: _t,
              onAlignmentSelect: l.onAlignmentSelect,
              onFontSelect: l.onFontSelect,
              onTextBackgroundToggle: l.onTextBackgroundToggle,
              onTextColorSelect: l.onTextColorSelect,
              onDeleteLayer: We,
            }))
          : gt ||
            (ft = m.jsxs(m.Fragment, {
              children: [
                _t instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                _t.isBlur()
                  ? m.jsx(o("WAWebMediaEditorToolbarBlur.react").BlurToolbar, {
                      blurMode: _t.getMode(),
                      blurRadius: _t.getRadius(),
                      onBlurModeChange: l.onBlurModeChange,
                      onBlurRadiusChange: l.onBlurRadiusChange,
                    })
                  : null,
                _t instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                !_t.isBlur()
                  ? m.jsx(
                      o("WAWebMediaEditorToolbarShape.react").ShapeToolbar,
                      {
                        fillColor: _t.getFillColor(),
                        shape: _t.getShape(),
                        strokeColor: _t.getStrokeColor(),
                        strokeWidth: _t.getStrokeWidth(),
                        onFillColorSelect: l.onShapeFillColorSelect,
                        onStrokeColorSelect: l.onShapeStrokeColorSelect,
                        onStrokeWidthSelect: l.onShapeStrokeWidthSelect,
                      },
                    )
                  : null,
                m.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
                  icon: m.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
                    displayInline: !0,
                  }),
                  title: s._(/*BTDS*/ "Delete"),
                  onClick: We,
                }),
              ],
            }));
      } else
        oe &&
          (ft = m.jsxs(m.Fragment, {
            children: [
              m.jsx(o("WAWebMediaEditorToolbarColor.react").ColorToolbar, {
                colors: o("WAWebMediaEditorEnumsColors")
                  .getAllColors()
                  .map(function (e) {
                    return {
                      primaryColor: o(
                        "WAWebMediaEditorEnumsColors",
                      ).getColorValue(e),
                    };
                  }),
                onColorSelect: Te,
                selectedColor: Re,
              }),
              m.jsx(r("WAWebMediaEditorToolbarThickness.react"), {
                thicknesses: o(
                  "WAWebMediaEditorEnumsThickness",
                ).getAllThicknesses(),
                onThicknessSelect: l.onPaintThicknessSelect,
                selectedThickness: W,
              }),
            ],
          }));
      var ht = null;
      if (L) {
        var yt;
        ht = m.jsx(r("WAWebMediaEditorToolbarFilter"), {
          filters: o("WAWebMediaEditorUtilsFilters").getAllFilters(),
          imageUrl:
            (yt = De().getBackground()) == null ? void 0 : yt.getImage(),
          onFilterChange: x,
          selectedFilter: Fe.getActiveFilter(),
          onHover: lt,
        });
      }
      var Ct = !ft && !ht && !l.draftTextLayer && !l.sendAsSticker,
        bt =
          Ct &&
          m.jsx(o("WAWebFlex.react").FlexRow, {
            className: "xh8yej3",
            justify: "center",
            children: l.captionInput,
          }),
        vt =
          ht &&
          m.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            className: (u || (u = r("stylex")))(
              S.footer,
              o("WAWebUISpacing").uiPadding.vert8,
              o("WAWebUISpacing").uiPadding.horiz0,
            ),
            ref: H,
            children: [
              m.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                className: (u || (u = r("stylex")))(
                  o("WAWebUISpacing").uiMargin.vert0,
                  o("WAWebUISpacing").uiMargin.horiz8,
                ),
                children: ht,
              }),
              bt,
            ],
          }),
        St = m.jsxs(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          align: "center",
          className: (u || (u = r("stylex")))(
            S.footer,
            o("WAWebUISpacing").uiPadding.vert8,
            o("WAWebUISpacing").uiPadding.horiz0,
          ),
          ref: G,
          children: [
            ft &&
              m.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                className: (u || (u = r("stylex")))(
                  o("WAWebUISpacing").uiMargin.vert0,
                  o("WAWebUISpacing").uiMargin.horiz8,
                ),
                children: ft,
              }),
            bt,
          ],
        }),
        Rt = null;
      le &&
        (Rt = m.jsx(r("WAWebMediaEditorPreviewCropRotate.react"), {
          data: Fe,
          rotation: De().getRotation(),
          cropOrigin: De().getCropOrigin(),
          cropSize: De().getCropSize(),
          onCropChange: tt,
          containerSize: Y,
          keepRatio: l.sendAsSticker,
          sendAsSticker: l.sendAsSticker,
        }));
      var Lt = navigator.platform.toUpperCase().indexOf("MAC") >= 0,
        Et = {
          icon: m.jsx(r("WDSIconIcUndo.react"), {}),
          testid: "undo-button",
          key: "undo",
          disabled: !p,
          onClick: l.onUndo,
        },
        kt = {
          icon: m.jsx(r("WDSIconIcUndo.react"), {
            displayInline: !0,
            xstyle: S.flipHorizontally,
          }),
          testid: "redo-button",
          key: "redo",
          disabled: !d,
          onClick: l.onRedo,
        },
        It = Lt
          ? m.createElement(
              o("WAWebMenuBar.react").MenuBarItem,
              babelHelpers.extends(
                { title: s._(/*BTDS*/ "Undo (\u2318+Z)") },
                r("propsWithoutKey")(Et),
                { key: Et.key },
              ),
            )
          : m.createElement(
              o("WAWebMenuBar.react").MenuBarItem,
              babelHelpers.extends(
                { title: s._(/*BTDS*/ "Undo (Ctrl+Z)") },
                r("propsWithoutKey")(Et),
                { key: Et.key },
              ),
            ),
        Tt = Lt
          ? m.createElement(
              o("WAWebMenuBar.react").MenuBarItem,
              babelHelpers.extends(
                { title: s._(/*BTDS*/ "Redo (\u2318+\u21e7+Z)") },
                r("propsWithoutKey")(kt),
                { key: kt.key },
              ),
            )
          : m.createElement(
              o("WAWebMenuBar.react").MenuBarItem,
              babelHelpers.extends(
                { title: s._(/*BTDS*/ "Redo (Ctrl+Y)") },
                r("propsWithoutKey")(kt),
                { key: kt.key },
              ),
            ),
        Dt =
          le ||
          L ||
          oe ||
          ce ||
          pe ||
          ge ||
          Ce ||
          !!l.draftTextLayer ||
          !!De().getSelectedLayer(),
        xt =
          p !== d
            ? S.sideHeaderSectionWithTwoOptions
            : S.sideHeaderSectionWithThreeOptions,
        $t = [S.sideHeader, p ? xt : S.sideHeaderSection],
        Pt = [
          S.sideHeader,
          Dt ? S.sideHeaderSectionWithTwoOptions : S.sideHeaderSection,
        ],
        Nt = le || L || oe,
        Mt = Nt || Fe.hasEdits() || p || d,
        wt = (a = Fe.getBackground()) == null ? void 0 : a.getImage(),
        At = dt();
      return m.jsxs("div", {
        className:
          "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x1qughib x6ikm8r x10wlt62",
        children: [
          m.jsxs(o("WAWebFlex.react").FlexRow, {
            className: u(
              S.header,
              o("WAWebUISpacing").uiPadding.vert8,
              o("WAWebUISpacing").uiPadding.horiz16,
            ),
            ref: V,
            children: [
              m.jsxs(o("WAWebFlex.react").FlexRow, {
                className: u($t),
                justify: "start",
                children: [
                  T
                    ? m.jsx(
                        o("WAWebMenuBar.react").MenuBarItem,
                        {
                          icon: m.jsx(r("WDSIconIcClose.react"), {}),
                          testid: void 0,
                          title: s._(/*BTDS*/ "Close"),
                          onClick: T,
                        },
                        "close",
                      )
                    : null,
                  p && It,
                  d && Tt,
                ],
              }),
              m.jsx(r("WAWebMediaEditorToolbarMain"), {
                selectedLayer: _t,
                inPaintMode: oe,
                inCropRotateMode: le,
                inFilterMode: L,
                inTextEditingMode: !!l.draftTextLayer,
                inOutlineMode: ce,
                onPaintSelect: Ye,
                onChangeQuality: ke,
                selectedQuality: q.quality,
                hdEligible: l.hdEligible,
                isSendHQPhotoEnabledProp: k,
                metadataByQuality: q.metadataByQuality,
                onCropRotateSelect: Je,
                onFilterSelect: $,
                onOutlineSelect: nt,
                onTextSelect: l.onTextSelect,
                onEmojiSelect: l.onEmojiSelect,
                onShapeSelect: l.onShapeSelect,
                onStickerSelect: l.onStickerSelect,
                onToggleEmojiPanel: rt,
                onToggleShapePanel: ot,
                onToggleStickerPanel: at,
                onBlurSelect: l.onBlurSelect,
                showOutline: l.sendAsSticker,
              }),
              m.jsxs(o("WAWebFlex.react").FlexRow, {
                className: u(Pt),
                justify: "end",
                children: [
                  Dt &&
                    m.jsx(
                      o("WAWebMediaEditorToolbarButton.react").ToolbarButton,
                      {
                        xstyle: S.doneButton,
                        onClick: Xe,
                        testid: void 0,
                        children: s._(/*BTDS*/ "Done"),
                      },
                    ),
                  m.jsx(
                    o("WAWebMediaEditorToolbarButton.react").ToolbarButton,
                    {
                      xstyle: S.doneButton,
                      icon: m.jsx(
                        o("WAWebIcDownloadIcon.react").IcDownloadIcon,
                        {},
                      ),
                      title: s._(/*BTDS*/ "Download"),
                      onClick: function () {
                        return void st();
                      },
                    },
                  ),
                ],
              }),
            ],
          }),
          vt,
          m.jsxs(
            "div",
            babelHelpers.extends(
              { ref: U },
              u.props(
                S.canvasContainer,
                le && o("WAWebUISpacing").uiMargin.all6,
                o("WAWebUISpacing").uiMargin.all16,
              ),
              {
                children: [
                  m.jsx("div", {
                    className: "x1n2onr6 xsm26vf xminmjj",
                    style: { display: le ? "none" : "unset" },
                    "data-testid": void 0,
                    children:
                      !Mt && wt instanceof HTMLImageElement
                        ? m.jsx("img", {
                            src: wt.src,
                            height: Fe.getScreenHeight() * At.y,
                            width: Fe.getScreenWidth() * At.x,
                            alt: "",
                          })
                        : m.jsx(r("WAWebMediaEditorCanvas.react"), {
                            ref: z,
                            data: Fe,
                            hoveredFilter: ee,
                            inFilterMode: L,
                            inOutlineMode: ce,
                            inPaintMode: oe,
                            paintColor: Re,
                            paintThickness: W,
                            outlineSmoothing: B,
                            currentlyEditingTextLayer:
                              l.currentlyEditingTextLayer,
                            draftTextLayer: l.draftTextLayer,
                            scale: At,
                            onLayerSelect: l.onLayerSelect,
                            onLayerUnselect: l.onLayerUnselect,
                            onLayerTranslate: l.onLayerTranslate,
                            onLayerTransform: l.onLayerTransform,
                            onTextEditingStart: Ke,
                            onTextEditingEnd: Qe,
                            onTextInputOutsideClick: it,
                            onPaintDrawEnd: l.onPaintDrawEnd,
                            onPointsChange: l.onPointsChange,
                            onOutlineDrawEnd: l.onOutlineDrawEnd,
                            onOutlineDone: Xe,
                            canEditBackground: l.sendAsSticker,
                            outlineEnabled: l.sendAsSticker,
                          }),
                  }),
                  Rt,
                ],
              },
            ),
          ),
          !L && St,
        ],
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
