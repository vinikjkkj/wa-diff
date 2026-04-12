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
      var n = t.chat,
        a = t.closePttComposer,
        i = t.expressionsPanelPickerRef,
        l = t.expressionsPanelWrapperRef,
        s = t.getCurrentComposeContent,
        u = t.handleInputBlur,
        d = t.handleInputFocus,
        f = t.handleMetaUpDebounced,
        h = t.handlePanelsGif,
        y = t.handlePanelsSticker,
        C = t.handlePanelsStickerFromStore,
        b = t.handleSendText,
        v = t.handleTab,
        S = t.hasTextState,
        R = t.hasTopPanel,
        L = t.input,
        E = t.inputHotkeyRef,
        k = t.isMessageToBot,
        I = t.pttComposerActive,
        T = t.questionReplyQuotedMessage,
        D = t.questionType,
        x = t.recordingSession,
        $ = t.ref,
        P = t.replaceInputSelection,
        N = t.richTextInputRef,
        M = t.startRecording,
        w = t.threadId,
        A = t.updateTextAfterMediaDrawerClose,
        F = p(null);
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_attachment_dropdown",
        function () {
          var e = F.current;
          e && e.open();
        },
      );
      var O = D === o("WAWebQuestions.flow").QuestionType.Question,
        B = D === o("WAWebQuestions.flow").QuestionType.Reply,
        W = m(r("WAWebIsInThreadsViewContext")),
        q =
          !W &&
          (!o("WAWebChatGetters").getIsNewsletter(n) ||
            o("WAWebNewsletterGatingUtils").isNewsletterPTTSendingEnabled()) &&
          (!O ||
            o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
              o("WAWebMsgType").MSG_TYPE.PTT,
            )) &&
          (!B ||
            o(
              "WAWebQuestionsGatingUtils",
            ).isQuestionReplySenderEnabledForMsgType(
              o("WAWebMsgType").MSG_TYPE.PTT,
            )) &&
          !o("WAWebContactGetters").getIsCAPISupportAccount(n.contact) &&
          (!k || o("WAWebBotGating").isBotPttEnabled(n.id)) &&
          !o("WAWebChatGetters").getIsBroadcast(n),
        U = function (t) {
          t.target === t.currentTarget && I === !1 && (N == null || N.focus());
        },
        V = o("WAWebBotUtils").isMetaAiBot(n.id),
        H = o("WAWebBotUtils").isBotChannelFBID(n.id),
        G =
          k &&
          ((V &&
            (o("WAWebBotGating").isMetaAiImageInputEnabled() ||
              o("WAWebBotGating").isMetaAiDocUploadEnabled())) ||
            H),
        z = !k || G,
        j = function (t) {
          return z
            ? O
              ? o(
                  "WAWebQuestionsGatingUtils",
                ).isQuestionSenderEnabledForMsgType(t)
              : B
                ? o(
                    "WAWebQuestionsGatingUtils",
                  ).isQuestionReplySenderEnabledForMsgType(t)
                : !o("WAWebChatGetters").getIsBroadcast(n)
            : !1;
        },
        K = V && o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled(),
        Q = K && o("WAWebBotGating").isAiModeSelectorInteractive(),
        X = {
          expressionsPanelWrapperRef: l,
          expressionsPanelPickerRef: i,
          replaceInputSelection: P,
          handlePanelsSticker: y,
          handlePanelsStickerFromStore: C,
          handlePanelsGif: h,
          isStickerEnabled: !H && j(o("WAWebMsgType").MSG_TYPE.STICKER),
          isGifEnabled: !H && j(o("WAWebMsgType").MSG_TYPE.VIDEO),
          getComposeBoxEditorRef: function () {
            return N;
          },
          handleClose: function () {
            return N == null ? void 0 : N.focus();
          },
          size:
            B || O
              ? o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize
                  .SMALL
              : void 0,
        },
        Y = [
          o("WAWebUISpacing").uiPadding.all5,
          o("WAWebUISpacing").uiMargin.horiz12,
          o("WAWebUISpacing").uiMargin.bottom12,
        ],
        J = c.jsx(o("WAWebComposeBoxSendButton.react").SendButtonRefresh, {
          supportsPtt: q,
          onClickSend: b,
          recordingSession: x,
          onStartRecording: function () {
            return void M();
          },
          hasTextState: S,
          isMessageToBot: k,
          buttonVariant: (B || O) && !S ? "tonal" : void 0,
        }),
        Z = void 0;
      !W &&
        z &&
        (!O ||
          o("WAWebQuestionsGatingUtils").getEnabledQuestionAttachmentTypes()
            .size > 0) &&
        (!B ||
          o(
            "WAWebQuestionsGatingUtils",
          ).getEnabledQuestionReplyAttachmentTypes().size > 0) &&
        (Z = c.jsx("div", {
          className: "x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4",
          children: c.jsx(r("WAWebAttachMenuBarItem.react"), {
            ref: F,
            chat: o("WAWebStateUtils").unproxy(n),
            getComposeContents: s,
            getComposeBoxEditorRef: function () {
              return N;
            },
            onMenuComplete: A,
            iconWidth: 24,
            questionType: D,
            questionReplyQuotedMessage: T,
            threadId: w,
          }),
        }));
      var ee = I
          ? c.jsx("div", {
              className: "x78zum5 x13a6bvl xh8yej3 x67bb7w",
              children: c.jsx(r("WAWebPttComposer.react"), {
                chat: o("WAWebStateUtils").unproxy(n),
                recordingSession: r("nullthrows")(x),
                onComplete: a,
                threadId: w,
              }),
            })
          : c.jsxs(c.Fragment, {
              children: [
                z && Z,
                c.jsx(g, babelHelpers.extends({}, X)),
                L,
                K &&
                  c.jsx(r("WAWebAiModeSelector.react"), {
                    chat: n,
                    threadId: w,
                    isInteractive: Q,
                  }),
                J,
              ],
            }),
        te = r("WAWebEnvironment").isWindows,
        ne = babelHelpers.extends(
          { tab: v, "shift+tab": v },
          te ? { "ctrl+up": f } : { "meta+up": f },
          { up: f },
        );
      return c.jsx("div", {
        ref: $,
        className: "x78zum5 xuk3077",
        children: c.jsx("div", {
          className: "_ak1r",
          children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: E,
            className: (e || (e = r("stylex")))(
              _.inputContainer,
              Y,
              _.inputContainerMaterial,
              _.inputContainerRefresh,
              !D && _.inputBoxShadow,
              !R && _.inputContainerRefreshNoTopPanel,
              R && _.inputContainerHasTopPanel,
              D && _.questionInputContainer,
              D != null && R && _.withoutTopBorder,
            ),
            handlers: ne,
            onClick: U,
            onFocus: d,
            onBlur: u,
            children: ee,
          }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.expressionsPanelPickerRef,
        n = e.expressionsPanelWrapperRef,
        r = e.getComposeBoxEditorRef,
        a = e.handleClose,
        i = e.handlePanelsGif,
        l = e.handlePanelsSticker,
        s = e.handlePanelsStickerFromStore,
        u = e.isGifEnabled,
        d = e.isStickerEnabled,
        m = e.replaceInputSelection,
        p = e.size;
      return c.jsx(
        o("WAWebExpressionsPanelPicker.react").ExpressionsPanelPicker,
        {
          ref: t,
          wrapperRef: n,
          onEmoji: m,
          onSticker: d ? l : void 0,
          onStickerFromStore: d ? s : void 0,
          onGif: u ? i : void 0,
          getComposeBoxEditorRef: r,
          onClose: a,
          size: p,
        },
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
