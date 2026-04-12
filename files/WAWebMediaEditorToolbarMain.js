__d(
  "WAWebMediaEditorToolbarMain",
  [
    "fbt",
    "WAWebAttachMediaModel",
    "WAWebConfirmPopup.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiPanel.react",
    "WAWebFlex.react",
    "WAWebHDPhotoMediaEditorDropdown.react",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorUtilsShapes",
    "WAWebMediaGatingUtils",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebScissorsIcon.react",
    "WAWebStickerPanel.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSIconIcBlurOn.react",
    "WDSIconIcCropRotate.react",
    "WDSIconIcCropSquare.react",
    "WDSIconIcEdit.react",
    "WDSIconIcMatchCase.react",
    "WDSIconIcMood.react",
    "WDSIconWdsIcHdCheckFilled.react",
    "WDSIconWdsIcHdSettings.react",
    "WDSIconWdsIcSticker.react",
    "WDSIconWdsIcWand.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = { hdIcon: { opacity: "xyd83as", $$css: !0 } };
    function _(e) {
      var t = e.hdEligible,
        n = e.inCropRotateMode,
        a = e.inFilterMode,
        i = e.inOutlineMode,
        l = e.inPaintMode,
        c = e.inTextEditingMode,
        _ = e.isSendHQPhotoEnabledProp,
        f = _ === void 0 ? !0 : _,
        g = e.metadataByQuality,
        h = e.onBlurSelect,
        y = e.onChangeQuality,
        C = e.onCropRotateSelect,
        b = e.onEmojiSelect,
        v = e.onFilterSelect,
        S = e.onOutlineSelect,
        R = e.onPaintSelect,
        L = e.onShapeSelect,
        E = e.onStickerSelect,
        k = e.onTextSelect,
        I = e.onToggleEmojiPanel,
        T = e.onToggleShapePanel,
        D = e.onToggleStickerPanel,
        x = e.selectedLayer,
        $ = e.selectedQuality,
        P = e.showOutline,
        N = m(),
        M = N[0],
        w = N[1],
        A = m(),
        F = A[0],
        O = A[1],
        B = m(),
        W = B[0],
        q = B[1],
        U = d({
          inPaintMode: l,
          onEmojiSelect: b,
          onPaintSelect: R,
          onShapeSelect: L,
          onStickerSelect: E,
        }),
        V = function () {
          n ? C() : a ? v() : l ? R() : i && S();
        },
        H = function (t) {
          (t == null || t.preventDefault(), l || V(), R());
        },
        G = function (t) {
          (t == null || t.preventDefault(), V(), k());
        },
        z = function (t) {
          (t == null || t.preventDefault(), n || V(), C());
        },
        j = function (t) {
          (t == null || t.preventDefault(), a || V(), v());
        },
        K = function (t) {
          (t == null || t.preventDefault(), i || V(), S());
        },
        Q = function (t) {
          (t == null || t.preventDefault(), V(), h());
        },
        X = function () {
          (w(null), I(!1));
        },
        Y = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            V());
          var e = function (t) {
              (U.current.inPaintMode && U.current.onPaintSelect(),
                U.current.onEmojiSelect(t),
                X());
            },
            n = u.jsx(r("WAWebEmojiPanel.react"), {
              onEmoji: e,
              onFocusNext: X,
              onFocusPrev: X,
            });
          (w({
            menu: n,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            type:
              o("WAWebDropdown.react").MenuType == null
                ? void 0
                : o("WAWebDropdown.react").MenuType.EmojiPicker,
            anchor: t == null ? void 0 : t.target,
          }),
            I(!0));
        },
        J = function () {
          (O(null), T(!1));
        },
        Z = function (t) {
          (U.current.inPaintMode && U.current.onPaintSelect(),
            U.current.onShapeSelect(t),
            J());
        },
        ee = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            V());
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
                    testid: void 0,
                    action: function () {
                      return Z(e);
                    },
                    children: u.jsx(o("WAWebFlex.react").FlexRow, {
                      className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
                      justify: "center",
                      children: o(
                        "WAWebMediaEditorUtilsShapes",
                      ).getIconForShape(e),
                    }),
                  },
                  e,
                );
              },
            ),
          });
          (O({
            menu: e,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            offsetX: -5,
            anchor: t == null ? void 0 : t.target,
          }),
            T(!0));
        },
        te = function () {
          (q(null), D(!1));
        },
        ne = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            V());
          var e = function (t) {
              (U.current.inPaintMode && U.current.onPaintSelect(),
                U.current.onStickerSelect(t),
                te());
            },
            n = u.jsx(r("WAWebStickerPanel.react"), {
              onSticker: e,
              onFocusNext: te,
              onFocusPrev: te,
            });
          n &&
            (q({
              menu: n,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              type:
                o("WAWebDropdown.react").MenuType == null
                  ? void 0
                  : o("WAWebDropdown.react").MenuType.StickerPicker,
              anchor: t == null ? void 0 : t.target,
            }),
            D(!0));
        },
        re;
      o("WAWebMediaGatingUtils").isSendHQPhotoEnabled() &&
        f &&
        (t
          ? (re = u.jsx(
              o("WAWebMenuBar.react").MenuBarItem,
              {
                icon:
                  $ === o("WAWebAttachMediaModel").MediaQuality.HD
                    ? u.jsx(r("WDSIconWdsIcHdCheckFilled.react"), {})
                    : u.jsx(r("WDSIconWdsIcHdSettings.react"), {}),
                testid: void 0,
                title: s._(/*BTDS*/ "Photo quality"),
                dropdownMenu: {
                  menu: u.jsx(r("WAWebHDPhotoMediaEditorDropdown.react"), {
                    onChangeQuality: y,
                    selectedQuality: $,
                    metadataByQuality: g,
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
          : (re = u.jsx(
              o("WAWebMenuBar.react").MenuBarItem,
              {
                icon: u.jsx(r("WDSIconWdsIcHdSettings.react"), {
                  xstyle: p.hdIcon,
                }),
                testid: void 0,
                title: s._(/*BTDS*/ "This media is not HD resolution."),
                onClick: function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      title: s._(/*BTDS*/ "Cannot set to HD"),
                      onOK: o("WAWebModalManager").closeModalManager,
                      children: s._(
                        /*BTDS*/ "This media is not HD resolution.",
                      ),
                    }),
                  );
                },
              },
              "hd-settings",
            )));
      var oe =
          P &&
          u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            {
              icon: u.jsx(o("WAWebScissorsIcon.react").ScissorsIcon, {}),
              testid: void 0,
              title: s._(/*BTDS*/ "Outline"),
              onClick: K,
              selected: i,
            },
            "outline",
          ),
        ae = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcCropRotate.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Crop and rotate"),
            onClick: z,
            selected: n,
          },
          "crop-rotate",
        ),
        ie = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconWdsIcWand.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Filter"),
            onClick: j,
            selected: a,
          },
          "filter",
        ),
        le = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcEdit.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Paint"),
            onClick: H,
            selected: l,
          },
          "paint",
        ),
        se = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcMatchCase.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Text"),
            onClick: G,
            selected:
              c || x instanceof o("WAWebMediaEditorLayersText").TextLayer,
          },
          "text",
        ),
        ue = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcBlurOn.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Blur"),
            onClick: Q,
            selected:
              x instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
              x.isBlur(),
          },
          "blur",
        ),
        ce = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcCropSquare.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Shapes"),
            onClick: ee,
            selected:
              !!F ||
              (x instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                !x.isBlur()),
          },
          "shapes",
        ),
        de = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconIcMood.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Emoji"),
            onClick: Y,
            selected:
              !!M ||
              (x instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
                x.isEmoji()),
          },
          "emoji",
        ),
        me = u.jsx(
          o("WAWebMenuBar.react").MenuBarItem,
          {
            icon: u.jsx(r("WDSIconWdsIcSticker.react"), {}),
            testid: void 0,
            title: s._(/*BTDS*/ "Sticker"),
            onClick: ne,
            selected:
              !!W ||
              (x instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
                x.isSticker()),
          },
          "sticker",
        ),
        pe = [oe, ae, ie, le, se, ce, ue, de, me, re];
      return u.jsxs(o("WAWebMenuBar.react").MenuBar, {
        theme: "media-editor",
        children: [
          pe,
          F &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ShapePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: J,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: F }),
            }),
          W &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "StickerPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: te,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: W }),
            }),
          M &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: X,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: M }),
            }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
