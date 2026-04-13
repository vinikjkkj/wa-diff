__d(
  "WAWebMessageComposer.react",
  [
    "cx",
    "WAWebAiModeSelector.react",
    "WAWebAttachMenuBarItem.react",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxSendButton.react",
    "WAWebContactGetters",
    "WAWebEnvironment",
    "WAWebExpressionsPanelPicker.react",
    "WAWebIsInThreadsViewContext",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPttComposer.react",
    "WAWebQuestions.flow",
    "WAWebQuestionsGatingUtils",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useRef,
      _ = {
        inputContainer: {
          boxSizing: "x9f619",
          flex: "x12lumcd",
          width: "x1qrby5j",
          minWidth: "xeuugli",
          minHeight: "xisnujt",
          fontSize: "x6prxxf",
          fontWeight: "x1fcty0u",
          lineHeight: "x1fc57z9",
          backgroundColor: "xk7ee7b",
          borderTopColor: "x1716072",
          borderInlineEndColor: "x1ygal6x",
          borderBottomColor: "x89wmna",
          borderInlineStartColor: "x1rbbhm9",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          outline: "x1a2a7pz",
          willChange: "x13w7htt",
          display: "x78zum5",
          $$css: !0,
        },
        inputContainerMaterial: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        inputContainerRefresh: {
          minHeight: "x1wiwyrm",
          height: "xt7dq6l",
          borderStartStartRadius: "x17m9png",
          borderStartEndRadius: "x91sizk",
          borderEndEndRadius: "x1vva9xg",
          borderEndStartRadius: "x1jfkl46",
          alignItems: "x6s0dn4",
          transition: "x1m0b2ad",
          $$css: !0,
        },
        inputBoxShadow: { boxShadow: "xkfubxc", $$css: !0 },
        questionInputContainer: {
          backgroundColor: "x4wrhlh",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        withoutTopBorder: { borderTopWidth: "x972fbf", $$css: !0 },
        inputContainerRefreshNoTopPanel: { transition: "x1p0mfcu", $$css: !0 },
        inputContainerHasTopPanel: {
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          boxShadow: "xz16w4b",
          transition: "x1m0b2ad",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(143),
        a = t.chat,
        i = t.closePttComposer,
        l = t.expressionsPanelPickerRef,
        s = t.expressionsPanelWrapperRef,
        u = t.getCurrentComposeContent,
        d = t.handleInputBlur,
        f = t.handleInputFocus,
        h = t.handleMetaUpDebounced,
        y = t.handlePanelsGif,
        C = t.handlePanelsSticker,
        b = t.handlePanelsStickerFromStore,
        v = t.handleSendText,
        S = t.handleTab,
        R = t.hasTextState,
        L = t.hasTopPanel,
        E = t.input,
        k = t.inputHotkeyRef,
        I = t.isMessageToBot,
        T = t.pttComposerActive,
        D = t.questionReplyQuotedMessage,
        x = t.questionType,
        $ = t.recordingSession,
        P = t.ref,
        N = t.replaceInputSelection,
        M = t.richTextInputRef,
        w = t.startRecording,
        A = t.threadId,
        F = t.updateTextAfterMediaDrawerClose,
        O = p(null),
        B;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            var e = O.current;
            e && e.open();
          }),
          (n[0] = B))
        : (B = n[0]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_attachment_dropdown",
          B,
        ));
      var W = x === o("WAWebQuestions.flow").QuestionType.Question,
        q = x === o("WAWebQuestions.flow").QuestionType.Reply,
        U = m(r("WAWebIsInThreadsViewContext")),
        V;
      n[1] !== a || n[2] !== U || n[3] !== I || n[4] !== W || n[5] !== q
        ? ((V =
            !U &&
            (!o("WAWebChatGetters").getIsNewsletter(a) ||
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterPTTSendingEnabled()) &&
            (!W ||
              o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.PTT,
              )) &&
            (!q ||
              o(
                "WAWebQuestionsGatingUtils",
              ).isQuestionReplySenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.PTT,
              )) &&
            !o("WAWebContactGetters").getIsCAPISupportAccount(a.contact) &&
            (!I || o("WAWebBotGating").isBotPttEnabled(a.id)) &&
            !o("WAWebChatGetters").getIsBroadcast(a)),
          (n[1] = a),
          (n[2] = U),
          (n[3] = I),
          (n[4] = W),
          (n[5] = q),
          (n[6] = V))
        : (V = n[6]);
      var H = V,
        G;
      n[7] !== T || n[8] !== M
        ? ((G = function (t) {
            t.target === t.currentTarget &&
              T === !1 &&
              (M == null || M.focus());
          }),
          (n[7] = T),
          (n[8] = M),
          (n[9] = G))
        : (G = n[9]);
      var z = G,
        j;
      n[10] !== a.id
        ? ((j = o("WAWebBotUtils").isMetaAiBot(a.id)),
          (n[10] = a.id),
          (n[11] = j))
        : (j = n[11]);
      var K = j,
        Q;
      n[12] !== a.id
        ? ((Q = o("WAWebBotUtils").isBotChannelFBID(a.id)),
          (n[12] = a.id),
          (n[13] = Q))
        : (Q = n[13]);
      var X = Q,
        Y;
      n[14] !== X || n[15] !== I || n[16] !== K
        ? ((Y =
            I &&
            ((K &&
              (o("WAWebBotGating").isMetaAiImageInputEnabled() ||
                o("WAWebBotGating").isMetaAiDocUploadEnabled())) ||
              X)),
          (n[14] = X),
          (n[15] = I),
          (n[16] = K),
          (n[17] = Y))
        : (Y = n[17]);
      var J = Y,
        Z = !I || J,
        ee;
      n[18] !== a || n[19] !== W || n[20] !== q || n[21] !== Z
        ? ((ee = function (t) {
            return Z
              ? W
                ? o(
                    "WAWebQuestionsGatingUtils",
                  ).isQuestionSenderEnabledForMsgType(t)
                : q
                  ? o(
                      "WAWebQuestionsGatingUtils",
                    ).isQuestionReplySenderEnabledForMsgType(t)
                  : !o("WAWebChatGetters").getIsBroadcast(a)
              : !1;
          }),
          (n[18] = a),
          (n[19] = W),
          (n[20] = q),
          (n[21] = Z),
          (n[22] = ee))
        : (ee = n[22]);
      var te = ee,
        ne;
      n[23] !== K
        ? ((ne =
            K && o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()),
          (n[23] = K),
          (n[24] = ne))
        : (ne = n[24]);
      var re = ne,
        oe;
      n[25] !== re
        ? ((oe = re && o("WAWebBotGating").isAiModeSelectorInteractive()),
          (n[25] = re),
          (n[26] = oe))
        : (oe = n[26]);
      var ae = oe,
        ie;
      n[27] !== te || n[28] !== X
        ? ((ie = !X && te(o("WAWebMsgType").MSG_TYPE.STICKER)),
          (n[27] = te),
          (n[28] = X),
          (n[29] = ie))
        : (ie = n[29]);
      var le;
      n[30] !== te || n[31] !== X
        ? ((le = !X && te(o("WAWebMsgType").MSG_TYPE.VIDEO)),
          (n[30] = te),
          (n[31] = X),
          (n[32] = le))
        : (le = n[32]);
      var se, ue;
      n[33] !== M
        ? ((se = function () {
            return M;
          }),
          (ue = function () {
            return M == null ? void 0 : M.focus();
          }),
          (n[33] = M),
          (n[34] = se),
          (n[35] = ue))
        : ((se = n[34]), (ue = n[35]));
      var ce =
          q || W
            ? o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL
            : void 0,
        de;
      n[36] !== l ||
      n[37] !== s ||
      n[38] !== y ||
      n[39] !== C ||
      n[40] !== b ||
      n[41] !== N ||
      n[42] !== ie ||
      n[43] !== le ||
      n[44] !== se ||
      n[45] !== ue ||
      n[46] !== ce
        ? ((de = {
            expressionsPanelWrapperRef: s,
            expressionsPanelPickerRef: l,
            replaceInputSelection: N,
            handlePanelsSticker: C,
            handlePanelsStickerFromStore: b,
            handlePanelsGif: y,
            isStickerEnabled: ie,
            isGifEnabled: le,
            getComposeBoxEditorRef: se,
            handleClose: ue,
            size: ce,
          }),
          (n[36] = l),
          (n[37] = s),
          (n[38] = y),
          (n[39] = C),
          (n[40] = b),
          (n[41] = N),
          (n[42] = ie),
          (n[43] = le),
          (n[44] = se),
          (n[45] = ue),
          (n[46] = ce),
          (n[47] = de))
        : (de = n[47]);
      var me = de,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be;
      if (
        n[48] !== a ||
        n[49] !== i ||
        n[50] !== me ||
        n[51] !== u ||
        n[52] !== h ||
        n[53] !== v ||
        n[54] !== S ||
        n[55] !== R ||
        n[56] !== L ||
        n[57] !== E ||
        n[58] !== k ||
        n[59] !== U ||
        n[60] !== ae ||
        n[61] !== I ||
        n[62] !== W ||
        n[63] !== q ||
        n[64] !== T ||
        n[65] !== D ||
        n[66] !== x ||
        n[67] !== $ ||
        n[68] !== P ||
        n[69] !== M ||
        n[70] !== Z ||
        n[71] !== re ||
        n[72] !== w ||
        n[73] !== H ||
        n[74] !== A ||
        n[75] !== F
      ) {
        var ve = [
            o("WAWebUISpacing").uiPadding.all5,
            o("WAWebUISpacing").uiMargin.horiz12,
            o("WAWebUISpacing").uiMargin.bottom12,
          ],
          Se;
        n[84] !== w
          ? ((Se = function () {
              return void w();
            }),
            (n[84] = w),
            (n[85] = Se))
          : (Se = n[85]);
        var Re = (q || W) && !R ? "tonal" : void 0,
          Le;
        n[86] !== v ||
        n[87] !== R ||
        n[88] !== I ||
        n[89] !== $ ||
        n[90] !== H ||
        n[91] !== Se ||
        n[92] !== Re
          ? ((Le = c.jsx(
              o("WAWebComposeBoxSendButton.react").SendButtonRefresh,
              {
                supportsPtt: H,
                onClickSend: v,
                recordingSession: $,
                onStartRecording: Se,
                hasTextState: R,
                isMessageToBot: I,
                buttonVariant: Re,
              },
            )),
            (n[86] = v),
            (n[87] = R),
            (n[88] = I),
            (n[89] = $),
            (n[90] = H),
            (n[91] = Se),
            (n[92] = Re),
            (n[93] = Le))
          : (Le = n[93]);
        var Ee = Le,
          ke = void 0;
        if (
          !U &&
          Z &&
          (!W ||
            o("WAWebQuestionsGatingUtils").getEnabledQuestionAttachmentTypes()
              .size > 0) &&
          (!q ||
            o(
              "WAWebQuestionsGatingUtils",
            ).getEnabledQuestionReplyAttachmentTypes().size > 0)
        ) {
          var Ie;
          n[94] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ie = {
                className: "x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4",
              }),
              (n[94] = Ie))
            : (Ie = n[94]);
          var Te;
          n[95] !== a
            ? ((Te = o("WAWebStateUtils").unproxy(a)),
              (n[95] = a),
              (n[96] = Te))
            : (Te = n[96]);
          var De;
          n[97] !== M
            ? ((De = function () {
                return M;
              }),
              (n[97] = M),
              (n[98] = De))
            : (De = n[98]);
          var xe;
          (n[99] !== u ||
          n[100] !== D ||
          n[101] !== x ||
          n[102] !== Te ||
          n[103] !== De ||
          n[104] !== A ||
          n[105] !== F
            ? ((xe = c.jsx(
                "div",
                babelHelpers.extends({}, Ie, {
                  children: c.jsx(r("WAWebAttachMenuBarItem.react"), {
                    ref: O,
                    chat: Te,
                    getComposeContents: u,
                    getComposeBoxEditorRef: De,
                    onMenuComplete: F,
                    iconWidth: 24,
                    questionType: x,
                    questionReplyQuotedMessage: D,
                    threadId: A,
                  }),
                }),
              )),
              (n[99] = u),
              (n[100] = D),
              (n[101] = x),
              (n[102] = Te),
              (n[103] = De),
              (n[104] = A),
              (n[105] = F),
              (n[106] = xe))
            : (xe = n[106]),
            (ke = xe));
        }
        var $e;
        (n[107] !== ke ||
        n[108] !== a ||
        n[109] !== i ||
        n[110] !== me ||
        n[111] !== E ||
        n[112] !== ae ||
        n[113] !== T ||
        n[114] !== $ ||
        n[115] !== Ee ||
        n[116] !== Z ||
        n[117] !== re ||
        n[118] !== A
          ? (($e = T
              ? c.jsx("div", {
                  className: "x78zum5 x13a6bvl xh8yej3 x67bb7w",
                  children: c.jsx(r("WAWebPttComposer.react"), {
                    chat: o("WAWebStateUtils").unproxy(a),
                    recordingSession: r("nullthrows")($),
                    onComplete: i,
                    threadId: A,
                  }),
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    Z && ke,
                    c.jsx(g, babelHelpers.extends({}, me)),
                    E,
                    re &&
                      c.jsx(r("WAWebAiModeSelector.react"), {
                        chat: a,
                        threadId: A,
                        isInteractive: ae,
                      }),
                    Ee,
                  ],
                })),
            (n[107] = ke),
            (n[108] = a),
            (n[109] = i),
            (n[110] = me),
            (n[111] = E),
            (n[112] = ae),
            (n[113] = T),
            (n[114] = $),
            (n[115] = Ee),
            (n[116] = Z),
            (n[117] = re),
            (n[118] = A),
            (n[119] = $e))
          : ($e = n[119]),
          (_e = $e));
        var Pe = r("WAWebEnvironment").isWindows,
          Ne;
        n[120] !== h
          ? ((Ne = Pe ? { "ctrl+up": h } : { "meta+up": h }),
            (n[120] = h),
            (n[121] = Ne))
          : (Ne = n[121]);
        var Me;
        (n[122] !== h || n[123] !== S || n[124] !== Ne
          ? ((Me = babelHelpers.extends({ tab: S, "shift+tab": S }, Ne, {
              up: h,
            })),
            (n[122] = h),
            (n[123] = S),
            (n[124] = Ne),
            (n[125] = Me))
          : (Me = n[125]),
          (fe = Me),
          (Ce = P),
          n[126] === Symbol.for("react.memo_cache_sentinel")
            ? ((be = { className: "x78zum5 xuk3077" }), (n[126] = be))
            : (be = n[126]),
          (ye = "_ak1r"),
          (pe = o("WAWebKeyboardHotKeys.react").HotKeys),
          (ge = k),
          (he = (e || (e = r("stylex")))(
            _.inputContainer,
            ve,
            _.inputContainerMaterial,
            _.inputContainerRefresh,
            !x && _.inputBoxShadow,
            !L && _.inputContainerRefreshNoTopPanel,
            L && _.inputContainerHasTopPanel,
            x && _.questionInputContainer,
            x != null && L && _.withoutTopBorder,
          )),
          (n[48] = a),
          (n[49] = i),
          (n[50] = me),
          (n[51] = u),
          (n[52] = h),
          (n[53] = v),
          (n[54] = S),
          (n[55] = R),
          (n[56] = L),
          (n[57] = E),
          (n[58] = k),
          (n[59] = U),
          (n[60] = ae),
          (n[61] = I),
          (n[62] = W),
          (n[63] = q),
          (n[64] = T),
          (n[65] = D),
          (n[66] = x),
          (n[67] = $),
          (n[68] = P),
          (n[69] = M),
          (n[70] = Z),
          (n[71] = re),
          (n[72] = w),
          (n[73] = H),
          (n[74] = A),
          (n[75] = F),
          (n[76] = pe),
          (n[77] = _e),
          (n[78] = fe),
          (n[79] = ge),
          (n[80] = he),
          (n[81] = ye),
          (n[82] = Ce),
          (n[83] = be));
      } else
        ((pe = n[76]),
          (_e = n[77]),
          (fe = n[78]),
          (ge = n[79]),
          (he = n[80]),
          (ye = n[81]),
          (Ce = n[82]),
          (be = n[83]));
      var we;
      n[127] !== pe ||
      n[128] !== _e ||
      n[129] !== d ||
      n[130] !== z ||
      n[131] !== f ||
      n[132] !== fe ||
      n[133] !== ge ||
      n[134] !== he
        ? ((we = c.jsx(pe, {
            ref: ge,
            className: he,
            handlers: fe,
            onClick: z,
            onFocus: f,
            onBlur: d,
            children: _e,
          })),
          (n[127] = pe),
          (n[128] = _e),
          (n[129] = d),
          (n[130] = z),
          (n[131] = f),
          (n[132] = fe),
          (n[133] = ge),
          (n[134] = he),
          (n[135] = we))
        : (we = n[135]);
      var Ae;
      n[136] !== ye || n[137] !== we
        ? ((Ae = c.jsx("div", { className: ye, children: we })),
          (n[136] = ye),
          (n[137] = we),
          (n[138] = Ae))
        : (Ae = n[138]);
      var Fe;
      return (
        n[139] !== Ce || n[140] !== be || n[141] !== Ae
          ? ((Fe = c.jsx(
              "div",
              babelHelpers.extends({ ref: Ce }, be, { children: Ae }),
            )),
            (n[139] = Ce),
            (n[140] = be),
            (n[141] = Ae),
            (n[142] = Fe))
          : (Fe = n[142]),
        Fe
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.expressionsPanelPickerRef,
        r = e.expressionsPanelWrapperRef,
        a = e.getComposeBoxEditorRef,
        i = e.handleClose,
        l = e.handlePanelsGif,
        s = e.handlePanelsSticker,
        u = e.handlePanelsStickerFromStore,
        d = e.isGifEnabled,
        m = e.isStickerEnabled,
        p = e.replaceInputSelection,
        _ = e.size,
        f = m ? s : void 0,
        g = m ? u : void 0,
        h = d ? l : void 0,
        y;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== p ||
        t[5] !== _ ||
        t[6] !== f ||
        t[7] !== g ||
        t[8] !== h
          ? ((y = c.jsx(
              o("WAWebExpressionsPanelPicker.react").ExpressionsPanelPicker,
              {
                ref: n,
                wrapperRef: r,
                onEmoji: p,
                onSticker: f,
                onStickerFromStore: g,
                onGif: h,
                getComposeBoxEditorRef: a,
                onClose: i,
                size: _,
              },
            )),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = p),
            (t[5] = _),
            (t[6] = f),
            (t[7] = g),
            (t[8] = h),
            (t[9] = y))
          : (y = t[9]),
        y
      );
    }
    l.default = f;
  },
  98,
);
