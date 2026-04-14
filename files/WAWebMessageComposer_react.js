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
        I = t.onPttSend,
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
        O = p(null);
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_attachment_dropdown",
        function () {
          var e = O.current;
          e && e.open();
        },
      );
      var B = x === o("WAWebQuestions.flow").QuestionType.Question,
        W = x === o("WAWebQuestions.flow").QuestionType.Reply,
        q = m(r("WAWebIsInThreadsViewContext")),
        U =
          !q &&
          (!o("WAWebChatGetters").getIsNewsletter(n) ||
            o("WAWebNewsletterGatingUtils").isNewsletterPTTSendingEnabled()) &&
          (!B ||
            o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
              o("WAWebMsgType").MSG_TYPE.PTT,
            )) &&
          (!W ||
            o(
              "WAWebQuestionsGatingUtils",
            ).isQuestionReplySenderEnabledForMsgType(
              o("WAWebMsgType").MSG_TYPE.PTT,
            )) &&
          !o("WAWebContactGetters").getIsCAPISupportAccount(n.contact) &&
          (!k || o("WAWebBotGating").isBotPttEnabled(n.id)) &&
          !o("WAWebChatGetters").getIsBroadcast(n),
        V = function (t) {
          t.target === t.currentTarget && T === !1 && (M == null || M.focus());
        },
        H = o("WAWebBotUtils").isMetaAiBot(n.id),
        G = o("WAWebBotUtils").isBotChannelFBID(n.id),
        z =
          k &&
          ((H &&
            (o("WAWebBotGating").isMetaAiImageInputEnabled() ||
              o("WAWebBotGating").isMetaAiDocUploadEnabled())) ||
            G),
        j = !k || z,
        K = function (t) {
          return j
            ? B
              ? o(
                  "WAWebQuestionsGatingUtils",
                ).isQuestionSenderEnabledForMsgType(t)
              : W
                ? o(
                    "WAWebQuestionsGatingUtils",
                  ).isQuestionReplySenderEnabledForMsgType(t)
                : !o("WAWebChatGetters").getIsBroadcast(n)
            : !1;
        },
        Q = H && o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled(),
        X = Q && o("WAWebBotGating").isAiModeSelectorInteractive(),
        Y = {
          expressionsPanelWrapperRef: l,
          expressionsPanelPickerRef: i,
          replaceInputSelection: N,
          handlePanelsSticker: y,
          handlePanelsStickerFromStore: C,
          handlePanelsGif: h,
          isStickerEnabled: !G && K(o("WAWebMsgType").MSG_TYPE.STICKER),
          isGifEnabled: !G && K(o("WAWebMsgType").MSG_TYPE.VIDEO),
          getComposeBoxEditorRef: function () {
            return M;
          },
          handleClose: function () {
            return M == null ? void 0 : M.focus();
          },
          size:
            W || B
              ? o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize
                  .SMALL
              : void 0,
        },
        J = [
          o("WAWebUISpacing").uiPadding.all5,
          o("WAWebUISpacing").uiMargin.horiz12,
          o("WAWebUISpacing").uiMargin.bottom12,
        ],
        Z = c.jsx(o("WAWebComposeBoxSendButton.react").SendButtonRefresh, {
          supportsPtt: U,
          onClickSend: b,
          recordingSession: $,
          onStartRecording: function () {
            return void w();
          },
          hasTextState: S,
          isMessageToBot: k,
          buttonVariant: (W || B) && !S ? "tonal" : void 0,
        }),
        ee = void 0;
      !q &&
        j &&
        (!B ||
          o("WAWebQuestionsGatingUtils").getEnabledQuestionAttachmentTypes()
            .size > 0) &&
        (!W ||
          o(
            "WAWebQuestionsGatingUtils",
          ).getEnabledQuestionReplyAttachmentTypes().size > 0) &&
        (ee = c.jsx("div", {
          className: "x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4",
          children: c.jsx(r("WAWebAttachMenuBarItem.react"), {
            ref: O,
            chat: o("WAWebStateUtils").unproxy(n),
            getComposeContents: s,
            getComposeBoxEditorRef: function () {
              return M;
            },
            onMenuComplete: F,
            iconWidth: 24,
            questionType: x,
            questionReplyQuotedMessage: D,
            threadId: A,
          }),
        }));
      var te = T
          ? c.jsx("div", {
              className: "x78zum5 x13a6bvl xh8yej3 x67bb7w",
              children: c.jsx(r("WAWebPttComposer.react"), {
                chat: o("WAWebStateUtils").unproxy(n),
                recordingSession: r("nullthrows")($),
                onComplete: a,
                onSend: I,
                threadId: A,
              }),
            })
          : c.jsxs(c.Fragment, {
              children: [
                j && ee,
                c.jsx(g, babelHelpers.extends({}, Y)),
                L,
                Q &&
                  c.jsx(r("WAWebAiModeSelector.react"), {
                    chat: n,
                    threadId: A,
                    isInteractive: X,
                  }),
                Z,
              ],
            }),
        ne = r("WAWebEnvironment").isWindows,
        re = babelHelpers.extends(
          { tab: v, "shift+tab": v },
          ne ? { "ctrl+up": f } : { "meta+up": f },
          { up: f },
        );
      return c.jsx("div", {
        ref: P,
        className: "x78zum5 xuk3077",
        children: c.jsx("div", {
          className: "_ak1r",
          children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: E,
            className: (e || (e = r("stylex")))(
              _.inputContainer,
              J,
              _.inputContainerMaterial,
              _.inputContainerRefresh,
              !x && _.inputBoxShadow,
              !R && _.inputContainerRefreshNoTopPanel,
              R && _.inputContainerHasTopPanel,
              x && _.questionInputContainer,
              x != null && R && _.withoutTopBorder,
            ),
            handlers: re,
            onClick: V,
            onFocus: d,
            onBlur: u,
            children: te,
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
