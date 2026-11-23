__d(
  "WAWebMediaEditorToolbarMain",
  [
    "fbt",
    "WAWebAttachMediaModel",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiPanel.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebHDPhotoMediaEditorDropdown.react",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorUtilsShapes",
    "WAWebMediaEditorUtilsShapesGetIconForShape",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebStickerPanel.react",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSIconIcBlurOn.react",
    "WDSIconIcContentCut.react",
    "WDSIconIcCropRotate.react",
    "WDSIconIcCropSquare.react",
    "WDSIconIcEdit.react",
    "WDSIconIcMatchCase.react",
    "WDSIconIcMood.react",
    "WDSIconWdsIcHdCheckFilled.react",
    "WDSIconWdsIcHdSettings.react",
    "WDSIconWdsIcSticker.react",
    "WDSIconWdsIcWand.react",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        hdIcon: { opacity: "xyd83as", $$css: !0 },
        shapeIconSlot: {
          boxSizing: "x1afcbsf",
          height: "xnnlda6",
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          width: "x15yg21f",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.hdEligible,
        n = e.inCropRotateMode,
        a = e.inFilterMode,
        i = e.inOutlineMode,
        l = e.inPaintMode,
        c = e.inTextEditingMode,
        _ = e.isSendHQPhotoEnabledProp,
        g = _ === void 0 ? !0 : _,
        h = e.metadataByQuality,
        y = e.onBlurSelect,
        C = e.onChangeQuality,
        b = e.onCropRotateSelect,
        v = e.onEmojiSelect,
        S = e.onFilterSelect,
        R = e.onOutlineSelect,
        L = e.onPaintSelect,
        E = e.onShapeSelect,
        k = e.onStickerSelect,
        I = e.onTextSelect,
        T = e.onToggleEmojiPanel,
        D = e.onToggleShapePanel,
        x = e.onToggleStickerPanel,
        $ = e.selectedLayer,
        P = e.selectedQuality,
        N = e.showOutline,
        M = m(),
        w = M[0],
        A = M[1],
        F = m(),
        O = F[0],
        B = F[1],
        W = m(),
        q = W[0],
        U = W[1],
        V = d({
          inPaintMode: l,
          onEmojiSelect: v,
          onPaintSelect: L,
          onShapeSelect: E,
          onStickerSelect: k,
        }),
        H = function () {
          n ? b() : a ? S() : l ? L() : i && R();
        },
        G = function (t) {
          (t == null || t.preventDefault(), l || H(), L());
        },
        z = function (t) {
          (t == null || t.preventDefault(), H(), I());
        },
        j = function (t) {
          (t == null || t.preventDefault(), n || H(), b());
        },
        K = function (t) {
          (t == null || t.preventDefault(), a || H(), S());
        },
        Q = function (t) {
          (t == null || t.preventDefault(), i || H(), R());
        },
        X = function (t) {
          (t == null || t.preventDefault(), H(), y());
        },
        Y = function () {
          (A(null), T(!1));
        },
        J = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            H());
          var e = function (t) {
              (V.current.inPaintMode && V.current.onPaintSelect(),
                V.current.onEmojiSelect(t),
                Y());
            },
            n = u.jsx(r("WAWebEmojiPanel.react"), {
              onEmoji: e,
              onFocusNext: Y,
              onFocusPrev: Y,
            });
          (A({
            menu: n,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            type:
              o("WAWebDropdown.react").MenuType == null
                ? void 0
                : o("WAWebDropdown.react").MenuType.EmojiPicker,
            anchor: t == null ? void 0 : t.target,
          }),
            T(!0));
        },
        Z = function () {
          (B(null), D(!1));
        },
        ee = function (t) {
          (V.current.inPaintMode && V.current.onPaintSelect(),
            V.current.onShapeSelect(t),
            Z());
        },
        te = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            H());
          var e = u.jsx("div", {
            className: "xrvj5dj x1lj1f8w x1qvou4u x1s70e7g",
            children: Array.from(
              o("WAWebMediaEditorUtilsShapes").ShapeType == null
                ? void 0
                : o("WAWebMediaEditorUtilsShapes").ShapeType.members(),
              function (e) {
                return u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: String(e).toLowerCase() + "-shape-button",
                    action: function () {
                      return ee(e);
                    },
                    children: u.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: p.shapeIconSlot,
                      align: "center",
                      justify: "center",
                      children: o(
                        "WAWebMediaEditorUtilsShapesGetIconForShape",
                      ).getIconForShape(e),
                    }),
                  },
                  e,
                );
              },
            ),
          });
          (B({
            menu: e,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            offsetX: -5,
            anchor: t == null ? void 0 : t.target,
          }),
            D(!0));
        },
        ne = function () {
          (U(null), x(!1));
        },
        re = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            H());
          var e = function (t) {
              (V.current.inPaintMode && V.current.onPaintSelect(),
                V.current.onStickerSelect(t),
                ne());
            },
            n = u.jsx(r("WAWebStickerPanel.react"), {
              onSticker: e,
              onFocusNext: ne,
              onFocusPrev: ne,
            });
          n &&
            (U({
              menu: n,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              type:
                o("WAWebDropdown.react").MenuType == null
                  ? void 0
                  : o("WAWebDropdown.react").MenuType.StickerPicker,
              anchor: t == null ? void 0 : t.target,
            }),
            x(!0));
        },
        oe;
      g &&
        (t
          ? (oe = u.jsx(
              o("WAWebMenuBar.react").MenuBarItem,
              {
                icon:
                  P === o("WAWebAttachMediaModel").MediaQuality.HD
                    ? u.jsx(r("WDSIconWdsIcHdCheckFilled.react"), {})
                    : u.jsx(r("WDSIconWdsIcHdSettings.react"), {}),
                testid: "wds-ic-hd-settings",
                title: s._(/*BTDS*/ ""),
                dropdownMenu: {
                  menu: u.jsx(r("WAWebHDPhotoMediaEditorDropdown.react"), {
                    onChangeQuality: C,
                    selectedQuality: P,
                    metadataByQuality: h,
                  }),
                  flipOnRTL: !0,
                  type:
                    o("WAWebDropdown.react").MenuType == null
                      ? void 0
                      : o("WAWebDropdown.react").MenuType.Dropdown,
                  testid: "hd-photo-dropdown",
                },
              },
              "hd-settings",
            ))
          : (oe = u.jsx(
              o("WAWebMenuBar.react").MenuBarItem,
              {
                icon: u.jsx(r("WDSIconWdsIcHdSettings.react"), {
                  xstyle: p.hdIcon,
                }),
                testid: "wds-ic-hd-settings",
                title: s._(/*BTDS*/ ""),
                onClick: function () {
                  (o("WAWebModalManager").closeModalManager(),
                    o("WDSDialogBridge").openWDSDialog(u.jsx(f, {})));
                },
              },
              "hd-settings",
            )));
      var ae =
          N &&
          u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            {
              icon: u.jsx(r("WDSIconIcContentCut.react"), {
                height: 24,
                width: 24,
              }),
              testid: "outline-button",
              title: s._(/*BTDS*/ ""),
              onClick: Q,
              selected: i,
            },
            "outline",
          ),
        ie = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcCropRotate.react"), {}),
            testid: "crop-rotate-button",
            title: s._(/*BTDS*/ ""),
            onClick: j,
            selected: n,
          },
          "crop-rotate",
        ),
        le = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconWdsIcWand.react"), {}),
            testid: "filter-button",
            title: s._(/*BTDS*/ ""),
            onClick: K,
            selected: a,
          },
          "filter",
        ),
        se = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcEdit.react"), {}),
            testid: "paint-button",
            title: s._(/*BTDS*/ ""),
            onClick: G,
            selected: l,
          },
          "paint",
        ),
        ue = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcMatchCase.react"), {}),
            testid: "text-button",
            title: s._(/*BTDS*/ ""),
            onClick: z,
            selected:
              c || $ instanceof o("WAWebMediaEditorLayersText").TextLayer,
          },
          "text",
        ),
        ce = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcBlurOn.react"), {}),
            testid: "blur-button",
            title: s._(/*BTDS*/ ""),
            onClick: X,
            selected:
              $ instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
              $.isBlur(),
          },
          "blur",
        ),
        de = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcCropSquare.react"), {}),
            testid: "shape-button",
            title: s._(/*BTDS*/ ""),
            onClick: te,
            selected:
              !!O ||
              ($ instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                !$.isBlur()),
          },
          "shapes",
        ),
        me = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcMood.react"), {}),
            testid: "emoji-button",
            title: s._(/*BTDS*/ ""),
            onClick: J,
            selected:
              !!w ||
              ($ instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
                $.isEmoji()),
          },
          "emoji",
        ),
        pe = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconWdsIcSticker.react"), {}),
            testid: "sticker-button",
            title: s._(/*BTDS*/ ""),
            onClick: re,
            selected:
              !!q ||
              ($ instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
                $.isSticker()),
          },
          "sticker",
        ),
        _e = [ae, ie, le, se, ue, de, ce, me, pe, oe];
      return u.jsxs(o("WAWebMenuBar.react").MenuBar, {
        theme: "media-editor",
        children: [
          _e,
          O &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ShapePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: Z,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: O }),
            }),
          q &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "StickerPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: ne,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: q }),
            }),
          w &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: Y,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: w }),
            }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "unknown",
        }),
        u.jsx(r("WDSDialog.react"), {
          closeButton: !1,
          description: r("justknobx")._("8068")
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ ""),
          footer: u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            primaryButtonProps: {
              label: r("WAWebFbtCommon")("OK"),
              onPress: o("WDSDialogBridge").closeWDSDialog,
              testid: "popup-controls-ok",
            },
            width: "fill",
          }),
          headerType: "expressive",
          layoutType: "expressive",
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          size: "sm",
          testid: "confirm-popup",
          title: r("justknobx")._("8068") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
