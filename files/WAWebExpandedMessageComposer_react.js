__d(
  "WAWebExpandedMessageComposer.react",
  [
    "cx",
    "WANullthrows",
    "WAWebAttachMenuBarItem.react",
    "WAWebBotGating",
    "WAWebChatGetters",
    "WAWebChevronCustomIcons",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebComposeBoxSendButton.react",
    "WAWebContactGetters",
    "WAWebEnvironment",
    "WAWebExpressionsPanelPicker.react",
    "WAWebFlex.react",
    "WAWebFloatingToolbarPlugin.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterGatingUtils",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebTextFormatUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSIconIcCode.react",
    "WDSIconIcFormatBold.react",
    "WDSIconIcFormatItalic.react",
    "WDSIconIcFormatListBulleted.react",
    "WDSIconIcFormatListNumbered.react",
    "WDSIconIcFormatQuote.react",
    "WDSIconIcFormatStrikethrough.react",
    "react",
    "react-compiler-runtime",
    "useHoverState",
    "useWAWebListener",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = {
        container: { alignItems: "xcp0bce", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        toolbarContainer: { position: "x1n2onr6", $$css: !0 },
        btnContainer: {
          height: "x1dc9bsw",
          width: "x1q05la3",
          maxHeight: "x1vech7d",
          maxWidth: "xhepgob",
          minHeight: "x4jpwfh",
          minWidth: "x18e0ts6",
          display: "x78zum5",
          justifyContent: "xushykq",
          alignItems: "x152ldt7",
          $$css: !0,
        },
        toolbarRightContainer: {
          position: "x10l6tqk",
          insetInlineEnd: "xo2ifbc",
          left: null,
          right: null,
          height: "xc9qbxq",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.chat,
        n = e.expressionsPanelPickerRef,
        a = e.expressionsPanelWrapperRef,
        i = e.getCurrentComposeContent,
        l = e.handleInputBlur,
        s = e.handleInputFocus,
        m = e.handleMetaUpDebounced,
        g = e.handlePanelsGif,
        h = e.handlePanelsSticker,
        y = e.handlePanelsStickerFromStore,
        C = e.handleSendText,
        b = e.handleTab,
        v = e.hasTextState,
        S = e.input,
        R = e.inputHotkeyRef,
        L = e.isMessageToBot,
        E = e.onCollapseComposer,
        k = e.pttComposerActive,
        I = e.recordingSession,
        T = e.ref,
        D = e.replaceInputSelection,
        x = e.richTextInputRef,
        $ = e.startRecording,
        P = e.threadId,
        N = e.updateTextAfterMediaDrawerClose;
      r("vulture")("QiV7Xo0ZxsZc9tUl9MiZ6TKZNOg=");
      var M = x == null ? void 0 : x.editor,
        w = o("WAWebFloatingToolbarPlugin.react").useTextFormatActions(M, {
          bulletPointsEnabled: !0,
          numberedListEnabled: !0,
          inlineCodeEnabled: !0,
          blockQuoteEnabled: !0,
        }),
        A = c(null);
      if (
        (o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_attachment_dropdown",
          function () {
            var e = A.current;
            e && e.open();
          },
        ),
        k)
      )
        return null;
      var F =
          (!o("WAWebChatGetters").getIsNewsletter(t) ||
            o("WAWebNewsletterGatingUtils").isNewsletterPTTSendingEnabled()) &&
          !o("WAWebContactGetters").getIsCAPISupportAccount(t.contact) &&
          (!L || o("WAWebBotGating").isBotPttEnabled(t.id)),
        O = L,
        B = {
          expressionsPanelWrapperRef: a,
          expressionsPanelPickerRef: n,
          replaceInputSelection: D,
          isStickerSendingDisabled: O,
          handlePanelsSticker: h,
          handlePanelsStickerFromStore: y,
          handlePanelsGif: g,
          isMessageToBot: L,
          getComposeBoxEditorRef: function () {
            return x;
          },
        },
        W = function (t) {
          M == null ||
            M.update(function () {
              o("WAWebTextFormatUtils").$toggleTextFormat(t);
            });
        },
        q = u.jsx("div", {
          className:
            "x1dc9bsw x1q05la3 x1vech7d xhepgob x4jpwfh x18e0ts6 xushykq x78zum5 x6s0dn4",
          children: u.jsx(r("WAWebAttachMenuBarItem.react"), {
            chat: o("WAWebStateUtils").unproxy(t),
            getComposeBoxEditorRef: function () {
              return x;
            },
            getComposeContents: i,
            iconWidth: 20,
            onMenuComplete: N,
            ref: A,
            threadId: P,
          }),
        }),
        U = u.jsx(p, babelHelpers.extends({}, B)),
        V = u.jsx(_, {
          action: w.boldAction,
          icon: u.jsx(r("WDSIconIcFormatBold.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.Bold);
          },
        }),
        H = u.jsx(_, {
          action: w.italicAction,
          icon: u.jsx(r("WDSIconIcFormatItalic.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.Italic);
          },
        }),
        G = u.jsx(_, {
          action: w.strikethroughAction,
          icon: u.jsx(r("WDSIconIcFormatStrikethrough.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.Strikethrough);
          },
        }),
        z = u.jsx(_, {
          action: r("WANullthrows")(w.codeAction),
          icon: u.jsx(r("WDSIconIcCode.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.Code);
          },
        }),
        j = u.jsx(_, {
          action: r("WANullthrows")(w.inlineCodeAction),
          icon: u.jsx(r("WDSIconIcCode.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.InlineCode);
          },
        }),
        K = u.jsx(_, {
          action: r("WANullthrows")(w.numberedListAction),
          icon: u.jsx(r("WDSIconIcFormatListNumbered.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.NumberedList);
          },
        }),
        Q = u.jsx(_, {
          action: r("WANullthrows")(w.bulletedListAction),
          icon: u.jsx(r("WDSIconIcFormatListBulleted.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.BulletedList);
          },
        }),
        X = u.jsx(_, {
          action: r("WANullthrows")(w.blockQuoteAction),
          icon: u.jsx(r("WDSIconIcFormatQuote.react"), { width: 20 }),
          onClick: function () {
            return W(o("WAWebTextFormatUtils").TextFormatType.Quote);
          },
        }),
        Y = u.jsxs(o("WAWebFlex.react").FlexRow, {
          justify: "start",
          xstyle: [d.toolbarContainer, o("WAWebUISpacing").uiPadding.start10],
          children: [
            q,
            U,
            u.jsx(f, {}),
            V,
            H,
            G,
            j,
            z,
            u.jsx(f, {}),
            K,
            Q,
            X,
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: d.toolbarRightContainer,
              children: [
                u.jsx(r("WAWebUnstyledButton.react"), {
                  onClick: E,
                  xstyle: d.btnContainer,
                  children: u.jsx(
                    o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
                    {
                      iconXstyle: d.secondaryColor,
                      displayInline: !0,
                      height: 24,
                    },
                  ),
                }),
                u.jsx("div", {
                  className:
                    "x1dc9bsw x1q05la3 x1vech7d xhepgob x4jpwfh x18e0ts6 x78zum5 xushykq x152ldt7",
                  children: u.jsx(
                    o("WAWebComposeBoxSendButton.react").SendButton,
                    {
                      hasText: v,
                      iconWidth: 20,
                      onClickSend: C,
                      onStartRecording: function () {
                        $();
                      },
                      recordingSession: I,
                      supportsPtt: F,
                    },
                  ),
                }),
              ],
            }),
          ],
        }),
        J = r("WAWebEnvironment").isWindows,
        Z = babelHelpers.extends(
          { tab: b, "shift+tab": b },
          J ? { "ctrl+up": m } : { "meta+up": m },
          { up: m },
        );
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        className: "_ak1q",
        ref: T,
        xstyle: d.container,
        children: [
          u.jsx("div", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_ak1r",
              "x1l3d5y4 x152ldt7",
            ),
            children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              className:
                "x9f619 x12lumcd x1qrby5j xeuugli xisnujt x6prxxf x1fcty0u x1fc57z9 xk7ee7b x1716072 x1ygal6x x89wmna x1rbbhm9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1a2a7pz x13w7htt x78zum5 x17m9png x91sizk x1vva9xg x1jfkl46",
              handlers: Z,
              onBlur: l,
              onClick: o("WAWebStopEvent").preventDefault,
              onFocus: s,
              ref: R,
              children: S,
            }),
          }),
          Y,
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.expressionsPanelPickerRef,
        a = e.expressionsPanelWrapperRef,
        i = e.getComposeBoxEditorRef,
        l = e.handlePanelsGif,
        s = e.handlePanelsSticker,
        c = e.handlePanelsStickerFromStore,
        d = e.isMessageToBot,
        m = e.isStickerSendingDisabled,
        p = e.replaceInputSelection;
      r("vulture")("1QIGNBFmKfU7Sivry3TK3vZzuTE=");
      var _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ =
            "x98rzlu xpvyfi4 x3hdcf8 xje27ih x18dplov xozx76t x1dc9bsw x1q05la3 x1vech7d xhepgob x4jpwfh x18e0ts6 x78zum5 xushykq x152ldt7"),
          (t[0] = _))
        : (_ = t[0]);
      var f = d ? void 0 : l,
        g = m ? void 0 : s,
        h = m ? void 0 : c,
        y;
      t[1] !== n ||
      t[2] !== i ||
      t[3] !== p ||
      t[4] !== f ||
      t[5] !== g ||
      t[6] !== h
        ? ((y = u.jsx(
            o("WAWebExpressionsPanelPicker.react").ExpressionsPanelPicker,
            {
              getComposeBoxEditorRef: i,
              iconWidth: 20,
              onEmoji: p,
              onGif: f,
              onSticker: g,
              onStickerFromStore: h,
              ref: n,
            },
          )),
          (t[1] = n),
          (t[2] = i),
          (t[3] = p),
          (t[4] = f),
          (t[5] = g),
          (t[6] = h),
          (t[7] = y))
        : (y = t[7]);
      var C;
      return (
        t[8] !== a || t[9] !== y
          ? ((C = u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              className: _,
              grow: 0,
              justify: "center",
              ref: a,
              shrink: 0,
              children: y,
            })),
            (t[8] = a),
            (t[9] = y),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.action,
        a = e.icon,
        i = e.onClick,
        l = e.title;
      r("vulture")("PEzt4JfCwIE5nUsDTYoI9cZ1974=");
      var s = r("useHoverState")(),
        c = s.isHovered,
        d = s.onMouseEnter,
        m = s.onMouseLeave,
        p = n === o("WAWebTextFormatUtils").TextFormatActionType.Remove,
        _ = n === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
        f;
      t[0] !== p || t[1] !== _ || t[2] !== c
        ? ((f = {
            0: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf xhslqc4",
            },
            4: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x14ug900 x4wrhlh x1hc1fzr",
            },
            2: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x1h6gzvc x18cpw0e",
            },
            6: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x4wrhlh x1hc1fzr x1h6gzvc x18cpw0e",
            },
            1: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf xhslqc4 xluxjuk",
            },
            5: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 x1ypdohk xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x14ug900 x1hc1fzr xluxjuk",
            },
            3: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x1h6gzvc x18cpw0e xluxjuk",
            },
            7: {
              className:
                "x972fbf x10w94by x1qhh985 x14e42zd x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr x1y1aw1k xf159sx xwib8y2 xmzvs34 xxymvpz xnnr8r xw4jnvo x1qx5ct2 x1afcbsf x1hc1fzr x1h6gzvc x18cpw0e xluxjuk",
            },
          }[(!!p << 2) | (!!_ << 1) | (!!(c && !_) << 0)]),
          (t[0] = p),
          (t[1] = _),
          (t[2] = c),
          (t[3] = f))
        : (f = t[3]);
      var g = _ ? null : i,
        h;
      return (
        t[4] !== a ||
        t[5] !== d ||
        t[6] !== m ||
        t[7] !== f ||
        t[8] !== g ||
        t[9] !== l
          ? ((h = u.jsx(
              "button",
              babelHelpers.extends({ title: l, type: "button" }, f, {
                onClick: g,
                onMouseEnter: d,
                onMouseLeave: m,
                children: a,
              }),
            )),
            (t[4] = a),
            (t[5] = d),
            (t[6] = m),
            (t[7] = f),
            (t[8] = g),
            (t[9] = l),
            (t[10] = h))
          : (h = t[10]),
        h
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1);
      r("vulture")("3M2GqjHfaxWR2aXB-sDRjDMoaYs=");
      var t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx("div", {
              className: "xlup9mm x1anpbxc xbmvrgn xyorhqc x1diwwjn x1mwdo0h",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = m;
  },
  98,
);
