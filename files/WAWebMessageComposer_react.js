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
      var n = o("react-compiler-runtime").c(145),
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
        T = t.onPttSend,
        D = t.pttComposerActive,
        x = t.questionReplyQuotedMessage,
        $ = t.questionType,
        P = t.recordingSession,
        N = t.ref,
        M = t.replaceInputSelection,
        w = t.richTextInputRef,
        A = t.startRecording,
        F = t.threadId,
        O = t.updateTextAfterMediaDrawerClose,
        B = p(null),
        W;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = function () {
            var e = B.current;
            e && e.open();
          }),
          (n[0] = W))
        : (W = n[0]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_attachment_dropdown",
          W,
        ));
      var q = $ === o("WAWebQuestions.flow").QuestionType.Question,
        U = $ === o("WAWebQuestions.flow").QuestionType.Reply,
        V = m(r("WAWebIsInThreadsViewContext")),
        H;
      n[1] !== a || n[2] !== V || n[3] !== I || n[4] !== q || n[5] !== U
        ? ((H =
            !V &&
            (!o("WAWebChatGetters").getIsNewsletter(a) ||
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterPTTSendingEnabled()) &&
            (!q ||
              o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.PTT,
              )) &&
            (!U ||
              o(
                "WAWebQuestionsGatingUtils",
              ).isQuestionReplySenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.PTT,
              )) &&
            !o("WAWebContactGetters").getIsCAPISupportAccount(a.contact) &&
            (!I || o("WAWebBotGating").isBotPttEnabled(a.id)) &&
            !o("WAWebChatGetters").getIsBroadcast(a)),
          (n[1] = a),
          (n[2] = V),
          (n[3] = I),
          (n[4] = q),
          (n[5] = U),
          (n[6] = H))
        : (H = n[6]);
      var G = H,
        z;
      n[7] !== D || n[8] !== w
        ? ((z = function (t) {
            t.target === t.currentTarget &&
              D === !1 &&
              (w == null || w.focus());
          }),
          (n[7] = D),
          (n[8] = w),
          (n[9] = z))
        : (z = n[9]);
      var j = z,
        K;
      n[10] !== a.id
        ? ((K = o("WAWebBotUtils").isMetaAiBot(a.id)),
          (n[10] = a.id),
          (n[11] = K))
        : (K = n[11]);
      var Q = K,
        X;
      n[12] !== a.id
        ? ((X = o("WAWebBotUtils").isBotChannelFBID(a.id)),
          (n[12] = a.id),
          (n[13] = X))
        : (X = n[13]);
      var Y = X,
        J;
      n[14] !== Y || n[15] !== I || n[16] !== Q
        ? ((J =
            I &&
            ((Q &&
              (o("WAWebBotGating").isMetaAiImageInputEnabled() ||
                o("WAWebBotGating").isMetaAiDocUploadEnabled())) ||
              Y)),
          (n[14] = Y),
          (n[15] = I),
          (n[16] = Q),
          (n[17] = J))
        : (J = n[17]);
      var Z = J,
        ee = !I || Z,
        te;
      n[18] !== a || n[19] !== q || n[20] !== U || n[21] !== ee
        ? ((te = function (t) {
            return ee
              ? q
                ? o(
                    "WAWebQuestionsGatingUtils",
                  ).isQuestionSenderEnabledForMsgType(t)
                : U
                  ? o(
                      "WAWebQuestionsGatingUtils",
                    ).isQuestionReplySenderEnabledForMsgType(t)
                  : !o("WAWebChatGetters").getIsBroadcast(a)
              : !1;
          }),
          (n[18] = a),
          (n[19] = q),
          (n[20] = U),
          (n[21] = ee),
          (n[22] = te))
        : (te = n[22]);
      var ne = te,
        re;
      n[23] !== Q
        ? ((re =
            Q && o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()),
          (n[23] = Q),
          (n[24] = re))
        : (re = n[24]);
      var oe = re,
        ae;
      n[25] !== oe
        ? ((ae = oe && o("WAWebBotGating").isAiModeSelectorInteractive()),
          (n[25] = oe),
          (n[26] = ae))
        : (ae = n[26]);
      var ie = ae,
        le;
      n[27] !== ne || n[28] !== Y
        ? ((le = !Y && ne(o("WAWebMsgType").MSG_TYPE.STICKER)),
          (n[27] = ne),
          (n[28] = Y),
          (n[29] = le))
        : (le = n[29]);
      var se;
      n[30] !== ne || n[31] !== Y
        ? ((se = !Y && ne(o("WAWebMsgType").MSG_TYPE.VIDEO)),
          (n[30] = ne),
          (n[31] = Y),
          (n[32] = se))
        : (se = n[32]);
      var ue, ce;
      n[33] !== w
        ? ((ue = function () {
            return w;
          }),
          (ce = function () {
            return w == null ? void 0 : w.focus();
          }),
          (n[33] = w),
          (n[34] = ue),
          (n[35] = ce))
        : ((ue = n[34]), (ce = n[35]));
      var de =
          U || q
            ? o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL
            : void 0,
        me;
      n[36] !== l ||
      n[37] !== s ||
      n[38] !== y ||
      n[39] !== C ||
      n[40] !== b ||
      n[41] !== M ||
      n[42] !== le ||
      n[43] !== se ||
      n[44] !== ue ||
      n[45] !== ce ||
      n[46] !== de
        ? ((me = {
            expressionsPanelWrapperRef: s,
            expressionsPanelPickerRef: l,
            replaceInputSelection: M,
            handlePanelsSticker: C,
            handlePanelsStickerFromStore: b,
            handlePanelsGif: y,
            isStickerEnabled: le,
            isGifEnabled: se,
            getComposeBoxEditorRef: ue,
            handleClose: ce,
            size: de,
          }),
          (n[36] = l),
          (n[37] = s),
          (n[38] = y),
          (n[39] = C),
          (n[40] = b),
          (n[41] = M),
          (n[42] = le),
          (n[43] = se),
          (n[44] = ue),
          (n[45] = ce),
          (n[46] = de),
          (n[47] = me))
        : (me = n[47]);
      var pe = me,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve;
      if (
        n[48] !== a ||
        n[49] !== i ||
        n[50] !== pe ||
        n[51] !== u ||
        n[52] !== h ||
        n[53] !== v ||
        n[54] !== S ||
        n[55] !== R ||
        n[56] !== L ||
        n[57] !== E ||
        n[58] !== k ||
        n[59] !== V ||
        n[60] !== ie ||
        n[61] !== I ||
        n[62] !== q ||
        n[63] !== U ||
        n[64] !== T ||
        n[65] !== D ||
        n[66] !== x ||
        n[67] !== $ ||
        n[68] !== P ||
        n[69] !== N ||
        n[70] !== w ||
        n[71] !== ee ||
        n[72] !== oe ||
        n[73] !== A ||
        n[74] !== G ||
        n[75] !== F ||
        n[76] !== O
      ) {
        var Se = [
            o("WAWebUISpacing").uiPadding.all5,
            o("WAWebUISpacing").uiMargin.horiz12,
            o("WAWebUISpacing").uiMargin.bottom12,
          ],
          Re;
        n[85] !== A
          ? ((Re = function () {
              return void A();
            }),
            (n[85] = A),
            (n[86] = Re))
          : (Re = n[86]);
        var Le = (U || q) && !R ? "tonal" : void 0,
          Ee;
        n[87] !== v ||
        n[88] !== R ||
        n[89] !== I ||
        n[90] !== P ||
        n[91] !== G ||
        n[92] !== Re ||
        n[93] !== Le
          ? ((Ee = c.jsx(
              o("WAWebComposeBoxSendButton.react").SendButtonRefresh,
              {
                supportsPtt: G,
                onClickSend: v,
                recordingSession: P,
                onStartRecording: Re,
                hasTextState: R,
                isMessageToBot: I,
                buttonVariant: Le,
              },
            )),
            (n[87] = v),
            (n[88] = R),
            (n[89] = I),
            (n[90] = P),
            (n[91] = G),
            (n[92] = Re),
            (n[93] = Le),
            (n[94] = Ee))
          : (Ee = n[94]);
        var ke = Ee,
          Ie = void 0;
        if (
          !V &&
          ee &&
          (!q ||
            o("WAWebQuestionsGatingUtils").getEnabledQuestionAttachmentTypes()
              .size > 0) &&
          (!U ||
            o(
              "WAWebQuestionsGatingUtils",
            ).getEnabledQuestionReplyAttachmentTypes().size > 0)
        ) {
          var Te;
          n[95] === Symbol.for("react.memo_cache_sentinel")
            ? ((Te = {
                className: "x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4",
              }),
              (n[95] = Te))
            : (Te = n[95]);
          var De;
          n[96] !== a
            ? ((De = o("WAWebStateUtils").unproxy(a)),
              (n[96] = a),
              (n[97] = De))
            : (De = n[97]);
          var xe;
          n[98] !== w
            ? ((xe = function () {
                return w;
              }),
              (n[98] = w),
              (n[99] = xe))
            : (xe = n[99]);
          var $e;
          (n[100] !== u ||
          n[101] !== x ||
          n[102] !== $ ||
          n[103] !== De ||
          n[104] !== xe ||
          n[105] !== F ||
          n[106] !== O
            ? (($e = c.jsx(
                "div",
                babelHelpers.extends({}, Te, {
                  children: c.jsx(r("WAWebAttachMenuBarItem.react"), {
                    ref: B,
                    chat: De,
                    getComposeContents: u,
                    getComposeBoxEditorRef: xe,
                    onMenuComplete: O,
                    iconWidth: 24,
                    questionType: $,
                    questionReplyQuotedMessage: x,
                    threadId: F,
                  }),
                }),
              )),
              (n[100] = u),
              (n[101] = x),
              (n[102] = $),
              (n[103] = De),
              (n[104] = xe),
              (n[105] = F),
              (n[106] = O),
              (n[107] = $e))
            : ($e = n[107]),
            (Ie = $e));
        }
        var Pe;
        (n[108] !== Ie ||
        n[109] !== a ||
        n[110] !== i ||
        n[111] !== pe ||
        n[112] !== E ||
        n[113] !== ie ||
        n[114] !== T ||
        n[115] !== D ||
        n[116] !== P ||
        n[117] !== ke ||
        n[118] !== ee ||
        n[119] !== oe ||
        n[120] !== F
          ? ((Pe = D
              ? c.jsx("div", {
                  className: "x78zum5 x13a6bvl xh8yej3 x67bb7w",
                  children: c.jsx(r("WAWebPttComposer.react"), {
                    chat: o("WAWebStateUtils").unproxy(a),
                    recordingSession: r("nullthrows")(P),
                    onComplete: i,
                    onSend: T,
                    threadId: F,
                  }),
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    ee && Ie,
                    c.jsx(g, babelHelpers.extends({}, pe)),
                    E,
                    oe &&
                      c.jsx(r("WAWebAiModeSelector.react"), {
                        chat: a,
                        threadId: F,
                        isInteractive: ie,
                      }),
                    ke,
                  ],
                })),
            (n[108] = Ie),
            (n[109] = a),
            (n[110] = i),
            (n[111] = pe),
            (n[112] = E),
            (n[113] = ie),
            (n[114] = T),
            (n[115] = D),
            (n[116] = P),
            (n[117] = ke),
            (n[118] = ee),
            (n[119] = oe),
            (n[120] = F),
            (n[121] = Pe))
          : (Pe = n[121]),
          (fe = Pe));
        var Ne = r("WAWebEnvironment").isWindows,
          Me;
        n[122] !== h
          ? ((Me = Ne ? { "ctrl+up": h } : { "meta+up": h }),
            (n[122] = h),
            (n[123] = Me))
          : (Me = n[123]);
        var we;
        (n[124] !== h || n[125] !== S || n[126] !== Me
          ? ((we = babelHelpers.extends({ tab: S, "shift+tab": S }, Me, {
              up: h,
            })),
            (n[124] = h),
            (n[125] = S),
            (n[126] = Me),
            (n[127] = we))
          : (we = n[127]),
          (ge = we),
          (be = N),
          n[128] === Symbol.for("react.memo_cache_sentinel")
            ? ((ve = { className: "x78zum5 xuk3077" }), (n[128] = ve))
            : (ve = n[128]),
          (Ce = "_ak1r"),
          (_e = o("WAWebKeyboardHotKeys.react").HotKeys),
          (he = k),
          (ye = (e || (e = r("stylex")))(
            _.inputContainer,
            Se,
            _.inputContainerMaterial,
            _.inputContainerRefresh,
            !$ && _.inputBoxShadow,
            !L && _.inputContainerRefreshNoTopPanel,
            L && _.inputContainerHasTopPanel,
            $ && _.questionInputContainer,
            $ != null && L && _.withoutTopBorder,
          )),
          (n[48] = a),
          (n[49] = i),
          (n[50] = pe),
          (n[51] = u),
          (n[52] = h),
          (n[53] = v),
          (n[54] = S),
          (n[55] = R),
          (n[56] = L),
          (n[57] = E),
          (n[58] = k),
          (n[59] = V),
          (n[60] = ie),
          (n[61] = I),
          (n[62] = q),
          (n[63] = U),
          (n[64] = T),
          (n[65] = D),
          (n[66] = x),
          (n[67] = $),
          (n[68] = P),
          (n[69] = N),
          (n[70] = w),
          (n[71] = ee),
          (n[72] = oe),
          (n[73] = A),
          (n[74] = G),
          (n[75] = F),
          (n[76] = O),
          (n[77] = _e),
          (n[78] = fe),
          (n[79] = ge),
          (n[80] = he),
          (n[81] = ye),
          (n[82] = Ce),
          (n[83] = be),
          (n[84] = ve));
      } else
        ((_e = n[77]),
          (fe = n[78]),
          (ge = n[79]),
          (he = n[80]),
          (ye = n[81]),
          (Ce = n[82]),
          (be = n[83]),
          (ve = n[84]));
      var Ae;
      n[129] !== _e ||
      n[130] !== fe ||
      n[131] !== d ||
      n[132] !== j ||
      n[133] !== f ||
      n[134] !== ge ||
      n[135] !== he ||
      n[136] !== ye
        ? ((Ae = c.jsx(_e, {
            ref: he,
            className: ye,
            handlers: ge,
            onClick: j,
            onFocus: f,
            onBlur: d,
            children: fe,
          })),
          (n[129] = _e),
          (n[130] = fe),
          (n[131] = d),
          (n[132] = j),
          (n[133] = f),
          (n[134] = ge),
          (n[135] = he),
          (n[136] = ye),
          (n[137] = Ae))
        : (Ae = n[137]);
      var Fe;
      n[138] !== Ce || n[139] !== Ae
        ? ((Fe = c.jsx("div", { className: Ce, children: Ae })),
          (n[138] = Ce),
          (n[139] = Ae),
          (n[140] = Fe))
        : (Fe = n[140]);
      var Oe;
      return (
        n[141] !== be || n[142] !== ve || n[143] !== Fe
          ? ((Oe = c.jsx(
              "div",
              babelHelpers.extends({ ref: be }, ve, { children: Fe }),
            )),
            (n[141] = be),
            (n[142] = ve),
            (n[143] = Fe),
            (n[144] = Oe))
          : (Oe = n[144]),
        Oe
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
