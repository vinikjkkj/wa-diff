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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = { hdIcon: { opacity: "xyd83as", $$css: !0 } };
    function _(e) {
      var t = o("react-compiler-runtime").c(151),
        n = e.hdEligible,
        a = e.inCropRotateMode,
        i = e.inFilterMode,
        l = e.inOutlineMode,
        c = e.inPaintMode,
        _ = e.inTextEditingMode,
        g = e.isSendHQPhotoEnabledProp,
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
        M = g === void 0 ? !0 : g,
        w = m(),
        A = w[0],
        F = w[1],
        O = m(),
        B = O[0],
        W = O[1],
        q = m(),
        U = q[0],
        V = q[1],
        H;
      t[0] !== c || t[1] !== v || t[2] !== L || t[3] !== E || t[4] !== k
        ? ((H = {
            inPaintMode: c,
            onEmojiSelect: v,
            onPaintSelect: L,
            onShapeSelect: E,
            onStickerSelect: k,
          }),
          (t[0] = c),
          (t[1] = v),
          (t[2] = L),
          (t[3] = E),
          (t[4] = k),
          (t[5] = H))
        : (H = t[5]);
      var G = d(H),
        z;
      t[6] !== a ||
      t[7] !== i ||
      t[8] !== l ||
      t[9] !== c ||
      t[10] !== b ||
      t[11] !== S ||
      t[12] !== R ||
      t[13] !== L
        ? ((z = function () {
            a ? b() : i ? S() : c ? L() : l && R();
          }),
          (t[6] = a),
          (t[7] = i),
          (t[8] = l),
          (t[9] = c),
          (t[10] = b),
          (t[11] = S),
          (t[12] = R),
          (t[13] = L),
          (t[14] = z))
        : (z = t[14]);
      var j = z,
        K;
      t[15] !== j || t[16] !== c || t[17] !== L
        ? ((K = function (t) {
            (t == null || t.preventDefault(), c || j(), L());
          }),
          (t[15] = j),
          (t[16] = c),
          (t[17] = L),
          (t[18] = K))
        : (K = t[18]);
      var Q = K,
        X;
      t[19] !== j || t[20] !== I
        ? ((X = function (t) {
            (t == null || t.preventDefault(), j(), I());
          }),
          (t[19] = j),
          (t[20] = I),
          (t[21] = X))
        : (X = t[21]);
      var Y = X,
        J;
      t[22] !== j || t[23] !== a || t[24] !== b
        ? ((J = function (t) {
            (t == null || t.preventDefault(), a || j(), b());
          }),
          (t[22] = j),
          (t[23] = a),
          (t[24] = b),
          (t[25] = J))
        : (J = t[25]);
      var Z = J,
        ee;
      t[26] !== j || t[27] !== i || t[28] !== S
        ? ((ee = function (t) {
            (t == null || t.preventDefault(), i || j(), S());
          }),
          (t[26] = j),
          (t[27] = i),
          (t[28] = S),
          (t[29] = ee))
        : (ee = t[29]);
      var te = ee,
        ne;
      t[30] !== j || t[31] !== l || t[32] !== R
        ? ((ne = function (t) {
            (t == null || t.preventDefault(), l || j(), R());
          }),
          (t[30] = j),
          (t[31] = l),
          (t[32] = R),
          (t[33] = ne))
        : (ne = t[33]);
      var re = ne,
        oe;
      t[34] !== j || t[35] !== y
        ? ((oe = function (t) {
            (t == null || t.preventDefault(), j(), y());
          }),
          (t[34] = j),
          (t[35] = y),
          (t[36] = oe))
        : (oe = t[36]);
      var ae = oe,
        ie;
      t[37] !== T
        ? ((ie = function () {
            (F(null), T(!1));
          }),
          (t[37] = T),
          (t[38] = ie))
        : (ie = t[38]);
      var le = ie,
        se;
      t[39] !== j || t[40] !== le || t[41] !== T
        ? ((se = function (t) {
            (t == null || t.preventDefault(),
              t == null || t.stopPropagation(),
              j());
            var e = function (t) {
                (G.current.inPaintMode && G.current.onPaintSelect(),
                  G.current.onEmojiSelect(t),
                  le());
              },
              n = u.jsx(r("WAWebEmojiPanel.react"), {
                onEmoji: e,
                onFocusNext: le,
                onFocusPrev: le,
              });
            (F({
              menu: n,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              type:
                o("WAWebDropdown.react").MenuType == null
                  ? void 0
                  : o("WAWebDropdown.react").MenuType.EmojiPicker,
              anchor: t == null ? void 0 : t.target,
            }),
              T(!0));
          }),
          (t[39] = j),
          (t[40] = le),
          (t[41] = T),
          (t[42] = se))
        : (se = t[42]);
      var ue = se,
        ce;
      t[43] !== D
        ? ((ce = function () {
            (W(null), D(!1));
          }),
          (t[43] = D),
          (t[44] = ce))
        : (ce = t[44]);
      var de = ce,
        me;
      t[45] !== de
        ? ((me = function (t) {
            (G.current.inPaintMode && G.current.onPaintSelect(),
              G.current.onShapeSelect(t),
              de());
          }),
          (t[45] = de),
          (t[46] = me))
        : (me = t[46]);
      var pe = me,
        _e;
      t[47] !== j || t[48] !== pe || t[49] !== D
        ? ((_e = function (t) {
            (t == null || t.preventDefault(),
              t == null || t.stopPropagation(),
              j());
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
                        return pe(e);
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
            (W({
              menu: e,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              offsetX: -5,
              anchor: t == null ? void 0 : t.target,
            }),
              D(!0));
          }),
          (t[47] = j),
          (t[48] = pe),
          (t[49] = D),
          (t[50] = _e))
        : (_e = t[50]);
      var fe = _e,
        ge;
      t[51] !== x
        ? ((ge = function () {
            (V(null), x(!1));
          }),
          (t[51] = x),
          (t[52] = ge))
        : (ge = t[52]);
      var he = ge,
        ye;
      t[53] !== j || t[54] !== he || t[55] !== x
        ? ((ye = function (t) {
            (t == null || t.preventDefault(),
              t == null || t.stopPropagation(),
              j());
            var e = function (t) {
                (G.current.inPaintMode && G.current.onPaintSelect(),
                  G.current.onStickerSelect(t),
                  he());
              },
              n = u.jsx(r("WAWebStickerPanel.react"), {
                onSticker: e,
                onFocusNext: he,
                onFocusPrev: he,
              });
            n &&
              (V({
                menu: n,
                dirY: o("WAWebDropdown.react").DirY.TOP,
                type:
                  o("WAWebDropdown.react").MenuType == null
                    ? void 0
                    : o("WAWebDropdown.react").MenuType.StickerPicker,
                anchor: t == null ? void 0 : t.target,
              }),
              x(!0));
          }),
          (t[53] = j),
          (t[54] = he),
          (t[55] = x),
          (t[56] = ye))
        : (ye = t[56]);
      var Ce = ye,
        be;
      if (o("WAWebMediaGatingUtils").isSendHQPhotoEnabled() && M)
        if (n) {
          var ve;
          t[57] !== P
            ? ((ve =
                P === o("WAWebAttachMediaModel").MediaQuality.HD
                  ? u.jsx(r("WDSIconWdsIcHdCheckFilled.react"), {})
                  : u.jsx(r("WDSIconWdsIcHdSettings.react"), {})),
              (t[57] = P),
              (t[58] = ve))
            : (ve = t[58]);
          var Se;
          t[59] === Symbol.for("react.memo_cache_sentinel")
            ? ((Se = s._(/*BTDS*/ "Photo quality")), (t[59] = Se))
            : (Se = t[59]);
          var Re;
          t[60] !== h || t[61] !== C || t[62] !== P
            ? ((Re = u.jsx(r("WAWebHDPhotoMediaEditorDropdown.react"), {
                onChangeQuality: C,
                selectedQuality: P,
                metadataByQuality: h,
              })),
              (t[60] = h),
              (t[61] = C),
              (t[62] = P),
              (t[63] = Re))
            : (Re = t[63]);
          var Le;
          t[64] !== Re
            ? ((Le = {
                menu: Re,
                flipOnRTL: !0,
                type:
                  o("WAWebDropdown.react").MenuType == null
                    ? void 0
                    : o("WAWebDropdown.react").MenuType.Dropdown,
                testid: "hd-photo-dropdown",
              }),
              (t[64] = Re),
              (t[65] = Le))
            : (Le = t[65]);
          var Ee;
          (t[66] !== ve || t[67] !== Le
            ? ((Ee = u.jsx(
                o("WAWebMenuBar.react").MenuBarItem,
                { icon: ve, testid: void 0, title: Se, dropdownMenu: Le },
                "hd-settings",
              )),
              (t[66] = ve),
              (t[67] = Le),
              (t[68] = Ee))
            : (Ee = t[68]),
            (be = Ee));
        } else {
          var ke;
          t[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((ke = u.jsx(r("WDSIconWdsIcHdSettings.react"), {
                xstyle: p.hdIcon,
              })),
              (t[69] = ke))
            : (ke = t[69]);
          var Ie;
          (t[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ie = u.jsx(
                o("WAWebMenuBar.react").MenuBarItem,
                {
                  icon: ke,
                  testid: void 0,
                  title: s._(/*BTDS*/ "This media is not HD resolution."),
                  onClick: f,
                },
                "hd-settings",
              )),
              (t[70] = Ie))
            : (Ie = t[70]),
            (be = Ie));
        }
      var Te;
      t[71] !== re || t[72] !== l || t[73] !== N
        ? ((Te =
            N &&
            u.jsx(
              o("WAWebMenuBar.react").MenuBarItem,
              {
                icon: u.jsx(o("WAWebScissorsIcon.react").ScissorsIcon, {}),
                testid: void 0,
                title: s._(/*BTDS*/ "Outline"),
                onClick: re,
                selected: l,
              },
              "outline",
            )),
          (t[71] = re),
          (t[72] = l),
          (t[73] = N),
          (t[74] = Te))
        : (Te = t[74]);
      var De = Te,
        xe;
      t[75] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = u.jsx(r("WDSIconIcCropRotate.react"), {})), (t[75] = xe))
        : (xe = t[75]);
      var $e;
      t[76] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = s._(/*BTDS*/ "Crop and rotate")), (t[76] = $e))
        : ($e = t[76]);
      var Pe;
      t[77] !== Z || t[78] !== a
        ? ((Pe = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: xe, testid: void 0, title: $e, onClick: Z, selected: a },
            "crop-rotate",
          )),
          (t[77] = Z),
          (t[78] = a),
          (t[79] = Pe))
        : (Pe = t[79]);
      var Ne = Pe,
        Me;
      t[80] === Symbol.for("react.memo_cache_sentinel")
        ? ((Me = u.jsx(r("WDSIconWdsIcWand.react"), {})), (t[80] = Me))
        : (Me = t[80]);
      var we;
      t[81] === Symbol.for("react.memo_cache_sentinel")
        ? ((we = s._(/*BTDS*/ "Filter")), (t[81] = we))
        : (we = t[81]);
      var Ae;
      t[82] !== te || t[83] !== i
        ? ((Ae = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: Me, testid: void 0, title: we, onClick: te, selected: i },
            "filter",
          )),
          (t[82] = te),
          (t[83] = i),
          (t[84] = Ae))
        : (Ae = t[84]);
      var Fe = Ae,
        Oe;
      t[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = u.jsx(r("WDSIconIcEdit.react"), {})), (t[85] = Oe))
        : (Oe = t[85]);
      var Be;
      t[86] === Symbol.for("react.memo_cache_sentinel")
        ? ((Be = s._(/*BTDS*/ "Paint")), (t[86] = Be))
        : (Be = t[86]);
      var We;
      t[87] !== Q || t[88] !== c
        ? ((We = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: Oe, testid: void 0, title: Be, onClick: Q, selected: c },
            "paint",
          )),
          (t[87] = Q),
          (t[88] = c),
          (t[89] = We))
        : (We = t[89]);
      var qe = We,
        Ue;
      t[90] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ue = u.jsx(r("WDSIconIcMatchCase.react"), {})), (t[90] = Ue))
        : (Ue = t[90]);
      var Ve;
      t[91] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = s._(/*BTDS*/ "Text")), (t[91] = Ve))
        : (Ve = t[91]);
      var He = _ || $ instanceof o("WAWebMediaEditorLayersText").TextLayer,
        Ge;
      t[92] !== Y || t[93] !== He
        ? ((Ge = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: Ue, testid: void 0, title: Ve, onClick: Y, selected: He },
            "text",
          )),
          (t[92] = Y),
          (t[93] = He),
          (t[94] = Ge))
        : (Ge = t[94]);
      var ze = Ge,
        je;
      t[95] === Symbol.for("react.memo_cache_sentinel")
        ? ((je = u.jsx(r("WDSIconIcBlurOn.react"), {})), (t[95] = je))
        : (je = t[95]);
      var Ke;
      t[96] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ke = s._(/*BTDS*/ "Blur")), (t[96] = Ke))
        : (Ke = t[96]);
      var Qe;
      t[97] !== $
        ? ((Qe =
            $ instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
            $.isBlur()),
          (t[97] = $),
          (t[98] = Qe))
        : (Qe = t[98]);
      var Xe;
      t[99] !== ae || t[100] !== Qe
        ? ((Xe = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: je, testid: void 0, title: Ke, onClick: ae, selected: Qe },
            "blur",
          )),
          (t[99] = ae),
          (t[100] = Qe),
          (t[101] = Xe))
        : (Xe = t[101]);
      var Ye = Xe,
        Je;
      t[102] === Symbol.for("react.memo_cache_sentinel")
        ? ((Je = u.jsx(r("WDSIconIcCropSquare.react"), {})), (t[102] = Je))
        : (Je = t[102]);
      var Ze;
      t[103] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ze = s._(/*BTDS*/ "Shapes")), (t[103] = Ze))
        : (Ze = t[103]);
      var et;
      t[104] !== $ || t[105] !== B
        ? ((et =
            !!B ||
            ($ instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
              !$.isBlur())),
          (t[104] = $),
          (t[105] = B),
          (t[106] = et))
        : (et = t[106]);
      var tt;
      t[107] !== fe || t[108] !== et
        ? ((tt = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: Je, testid: void 0, title: Ze, onClick: fe, selected: et },
            "shapes",
          )),
          (t[107] = fe),
          (t[108] = et),
          (t[109] = tt))
        : (tt = t[109]);
      var nt = tt,
        rt;
      t[110] === Symbol.for("react.memo_cache_sentinel")
        ? ((rt = u.jsx(r("WDSIconIcMood.react"), {})), (t[110] = rt))
        : (rt = t[110]);
      var ot;
      t[111] === Symbol.for("react.memo_cache_sentinel")
        ? ((ot = s._(/*BTDS*/ "Emoji")), (t[111] = ot))
        : (ot = t[111]);
      var at;
      t[112] !== A || t[113] !== $
        ? ((at =
            !!A ||
            ($ instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
              $.isEmoji())),
          (t[112] = A),
          (t[113] = $),
          (t[114] = at))
        : (at = t[114]);
      var it;
      t[115] !== ue || t[116] !== at
        ? ((it = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: rt, testid: void 0, title: ot, onClick: ue, selected: at },
            "emoji",
          )),
          (t[115] = ue),
          (t[116] = at),
          (t[117] = it))
        : (it = t[117]);
      var lt = it,
        st;
      t[118] === Symbol.for("react.memo_cache_sentinel")
        ? ((st = u.jsx(r("WDSIconWdsIcSticker.react"), {})), (t[118] = st))
        : (st = t[118]);
      var ut;
      t[119] === Symbol.for("react.memo_cache_sentinel")
        ? ((ut = s._(/*BTDS*/ "Sticker")), (t[119] = ut))
        : (ut = t[119]);
      var ct;
      t[120] !== $ || t[121] !== U
        ? ((ct =
            !!U ||
            ($ instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
              $.isSticker())),
          (t[120] = $),
          (t[121] = U),
          (t[122] = ct))
        : (ct = t[122]);
      var dt;
      t[123] !== Ce || t[124] !== ct
        ? ((dt = u.jsx(
            o("WAWebMenuBar.react").MenuBarItem,
            { icon: st, testid: void 0, title: ut, onClick: Ce, selected: ct },
            "sticker",
          )),
          (t[123] = Ce),
          (t[124] = ct),
          (t[125] = dt))
        : (dt = t[125]);
      var mt = dt,
        pt;
      t[126] !== Ye ||
      t[127] !== Ne ||
      t[128] !== lt ||
      t[129] !== Fe ||
      t[130] !== be ||
      t[131] !== qe ||
      t[132] !== De ||
      t[133] !== nt ||
      t[134] !== mt ||
      t[135] !== ze
        ? ((pt = [De, Ne, Fe, qe, ze, nt, Ye, lt, mt, be]),
          (t[126] = Ye),
          (t[127] = Ne),
          (t[128] = lt),
          (t[129] = Fe),
          (t[130] = be),
          (t[131] = qe),
          (t[132] = De),
          (t[133] = nt),
          (t[134] = mt),
          (t[135] = ze),
          (t[136] = pt))
        : (pt = t[136]);
      var _t = pt,
        ft;
      t[137] !== de || t[138] !== B
        ? ((ft =
            B &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ShapePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: de,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: B }),
            })),
          (t[137] = de),
          (t[138] = B),
          (t[139] = ft))
        : (ft = t[139]);
      var gt;
      t[140] !== he || t[141] !== U
        ? ((gt =
            U &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "StickerPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: he,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: U }),
            })),
          (t[140] = he),
          (t[141] = U),
          (t[142] = gt))
        : (gt = t[142]);
      var ht;
      t[143] !== A || t[144] !== le
        ? ((ht =
            A &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: le,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: A }),
            })),
          (t[143] = A),
          (t[144] = le),
          (t[145] = ht))
        : (ht = t[145]);
      var yt;
      return (
        t[146] !== ft || t[147] !== gt || t[148] !== ht || t[149] !== _t
          ? ((yt = u.jsxs(o("WAWebMenuBar.react").MenuBar, {
              theme: "media-editor",
              children: [_t, ft, gt, ht],
            })),
            (t[146] = ft),
            (t[147] = gt),
            (t[148] = ht),
            (t[149] = _t),
            (t[150] = yt))
          : (yt = t[150]),
        yt
      );
    }
    function f() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          title: s._(/*BTDS*/ "Cannot set to HD"),
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "This media is not HD resolution."),
        }),
      );
    }
    l.default = _;
  },
  226,
);
