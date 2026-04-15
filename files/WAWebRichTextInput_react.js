__d(
  "WAWebRichTextInput.react",
  [
    "cx",
    "Lexical",
    "LexicalClearEditorPlugin",
    "LexicalComposer",
    "LexicalErrorBoundary",
    "LexicalHistoryPlugin",
    "LexicalPlainTextPlugin",
    "WALogger",
    "WAWebBidiParagraphNode",
    "WAWebCharacterLimitPlugin",
    "WAWebClassnames",
    "WAWebClipboardPlugin",
    "WAWebCometRouterGating",
    "WAWebCopyPasteCopyable.react",
    "WAWebDebugRichTextInput",
    "WAWebDelimiterNode",
    "WAWebEditorInitialSelectionPlugin.react",
    "WAWebEditorInitialStatePlugin.react",
    "WAWebEditorRefPlugin",
    "WAWebEditorStatePlugin.react",
    "WAWebEmojiNode",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebMentionNode",
    "WAWebMultilinePlugin",
    "WAWebNonJidMentionNode",
    "WAWebNoop",
    "WAWebNormalizeStack",
    "WAWebOnEnterPlugin",
    "WAWebOnKeyDownPlugin",
    "WAWebQuoteLineNode",
    "WAWebRichTextInputContentEditable.react",
    "cr:1009",
    "gkx",
    "one-trace",
    "react",
    "stylex",
    "useWAWebLexicalEvent",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = [
        "ariaActiveDescendents",
        "children",
        "editorName",
        "enterIsNewLine",
        "initialText",
        "maxCodeUnits",
        "maxLength",
        "maxLineCount",
        "multiline",
        "onBlur",
        "onChange",
        "onClick",
        "onEnter",
        "onFiles",
        "onFocus",
        "onKeyDown",
        "onMaxInputExceeded",
        "onMaxPasteExceeded",
        "onTextPaste",
        "pasteFromHTML",
        "placeholder",
        "placeholderTextXStyle",
        "ref",
        "selectOnMount",
        "showDebugPanel",
        "textXstyle",
        "xstyle",
      ],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useImperativeHandle,
      g = p.useMemo,
      h = p.useRef,
      y = p.useState,
      C = { container: { position: "x1n2onr6", width: "xh8yej3", $$css: !0 } },
      b = {
        paragraph: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_aupe",
          o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS,
          {
            0: "x15bjb6t x1n2onr6",
            1: "x15bjb6t x1n2onr6 xdj266r x14z9mp xat24cr x1lziwak",
          }[
            !!o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() << 0
          ],
        ),
        text: {
          base: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_aupe",
            o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS,
            "xkrh14z",
          ),
          bold: "x117nqv4",
          italic: "x1k4tb9n",
          strikethrough: "xmqliwb x1t57i5m",
          code: "xldyu6s xgfl6pn",
        },
      };
    function v(e, t) {
      r("gkx")("19206") &&
        t != null &&
        e != null &&
        r("one-trace").trackTypingPerf(t, "WAWebRichTextInput", null, {
          editor: e,
        });
    }
    function S(e) {
      r("gkx")("19206") && e && r("one-trace").unregisterTypingPerf(e);
    }
    function R(t) {
      var a = t.ariaActiveDescendents,
        i = t.children,
        l = t.editorName,
        s = t.enterIsNewLine,
        d = s === void 0 ? !1 : s,
        p = t.initialText,
        R = t.maxCodeUnits,
        L = t.maxLength,
        E = t.maxLineCount,
        k = t.multiline,
        I = k === void 0 ? !1 : k,
        T = t.onBlur,
        D = t.onChange,
        x = t.onClick,
        $ = t.onEnter,
        P = t.onFiles,
        N = t.onFocus,
        M = t.onKeyDown,
        w = t.onMaxInputExceeded,
        A = t.onMaxPasteExceeded,
        F = t.onTextPaste,
        O = t.pasteFromHTML,
        B = O === void 0 ? !1 : O,
        W = t.placeholder,
        q = t.placeholderTextXStyle,
        U = t.ref,
        V = t.selectOnMount,
        H = V === void 0 ? !1 : V,
        G = t.showDebugPanel,
        z = t.textXstyle,
        j = t.xstyle,
        K = babelHelpers.objectWithoutPropertiesLoose(t, u),
        Q = g(function () {
          return o("LexicalHistoryPlugin").createEmptyHistoryState();
        }, []),
        X = y(),
        Y = X[0],
        J = X[1],
        Z = r("useWAWebToggle")(B),
        ee = Z[0],
        te = Z[1],
        ne = h(null),
        re = h(null),
        oe = function (t) {
          return !!(F != null && F(t));
        };
      function ae() {
        return {
          focus: function () {
            Y == null || Y.focus();
          },
          isFocused: function () {
            return o("WAWebLexicalUtils").isFocused(Y);
          },
          blur: function () {
            o("WAWebLexicalUtils").isFocused(Y) && (Y == null || Y.blur());
          },
          selectAll: function () {
            Y && o("WAWebLexicalUtils").selectAll(Y);
          },
          replaceSelection: function (t, n) {
            Y == null ||
              Y.update(function () {
                return o("WAWebLexicalUtils").$insertText(t, n);
              });
          },
          reset: function () {
            Y && o("WAWebLexicalUtils").setTextContent(Y, "");
          },
          paste: function (t) {
            var e = t.nativeEvent;
            e instanceof ClipboardEvent &&
              (Y == null || Y.dispatchCommand(o("Lexical").PASTE_COMMAND, e));
          },
          editor: Y,
          editorContent: function () {
            return re.current;
          },
          isCursorAtStart: function () {
            return Y ? o("WAWebLexicalUtils").isCursorAtStart(Y) : !1;
          },
          isCursorAtEnd: function () {
            return Y ? o("WAWebLexicalUtils").isCursorAtEnd(Y) : !1;
          },
          getTextContent: function () {
            return Y ? o("WAWebLexicalUtils").getTextContent(Y) : null;
          },
          setTextContent: function (t) {
            !Y ||
              o("WAWebLexicalUtils").getTextContent(Y) === t ||
              o("WAWebLexicalUtils").setTextContent(Y, t);
          },
        };
      }
      (f(U, ae, [Y]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          Y,
          o("Lexical").FOCUS_COMMAND,
          function () {
            return (
              r("gkx")("26258") ||
                o("WAWebDebugRichTextInput").setActiveRichTextInputRef(ae()),
              !1
            );
          },
        ),
        _(
          function () {
            var e = Y == null ? void 0 : Y.getRootElement();
            return (
              e != null && v(l, e),
              function () {
                S(e);
              }
            );
          },
          [Y, l],
        ));
      var ie = g(function () {
          var t = function (n) {
            r("gkx")("26258") ||
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose(
                      ["lexical-text-input error: ", "\nstack: ", ""],
                      ["lexical-text-input error: ", "\\nstack: ", ""],
                    )),
                  n.message,
                  o("WAWebNormalizeStack").normalizeStack(n),
                )
                .sendLogs("lexical-text-input error", {
                  sendLogsType:
                    o("WALogger").SendLogsType
                      .EXTREMELY_BAD_USER_EXPERIENCE_SAD,
                });
          };
          return {
            namespace: "WAWebRichTextInput",
            theme: b,
            nodes: [
              o("WAWebEmojiNode").EmojiNode,
              o("WAWebMentionNode").MentionNode,
              o("WAWebListBulletNode").ListBulletNode,
              o("WAWebListNumberNode").ListNumberNode,
              o("WAWebQuoteLineNode").QuoteLineNode,
              o("WAWebBidiParagraphNode").BidiParagraphNode,
              o("WAWebDelimiterNode").DelimiterNode,
              o("WAWebNonJidMentionNode").NonJidMentionNode,
              {
                replace: o("Lexical").ParagraphNode,
                with: function () {
                  return new (o("WAWebBidiParagraphNode").BidiParagraphNode)();
                },
              },
            ],
            onError: t,
          };
        }, []),
        le = function (t, n, r) {
          ((re.current = t), r || D == null || D(t, n));
        },
        se = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (c || (c = r("stylex")))(C.container, j),
          "lexical-rich-text-input",
        );
      return m.jsx("div", {
        className: se,
        children: m.jsxs(o("LexicalComposer").LexicalComposer, {
          initialConfig: ie,
          children: [
            m.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
              contentEditable: m.jsx(
                o("WAWebRichTextInputContentEditable.react")
                  .InputContentEditable,
                babelHelpers.extends({}, K, {
                  ref: ne,
                  xstyle: z,
                  focusOnMount: H === !0 ? !1 : K.focusOnMount,
                  onClick: x,
                  ariaActiveDescendant: a,
                  placeholder: W,
                  placeholderXstyle: [z, q],
                }),
              ),
              ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary,
            }),
            m.jsx(o("LexicalHistoryPlugin").HistoryPlugin, {
              externalHistoryState: Q,
            }),
            m.jsx(o("LexicalClearEditorPlugin").ClearEditorPlugin, {}),
            n("cr:1009") != null &&
              m.jsx(n("cr:1009"), {
                showByDefault: G,
                textFormatEnabled: !1,
                pasteFromHTML: ee,
                onToggleTextFormat: r("WAWebNoop"),
                onTogglePasteFromHTML: te,
              }),
            m.jsx(o("WAWebMultilinePlugin").MultilinePlugin, { multiline: I }),
            m.jsx(r("WAWebEditorRefPlugin"), { editorRef: J }),
            m.jsx(o("WAWebClipboardPlugin").ClipboardPlugin, {
              onFiles: P,
              onTextPaste: oe,
              ignoreLineBreakOnPaste: !I,
              pasteFromHTML: ee,
            }),
            m.jsx(r("WAWebEditorStatePlugin.react"), {
              onChange: le,
              onBlur: T,
              onFocus: N,
            }),
            i,
            m.jsx(r("WAWebEditorInitialStatePlugin.react"), {
              initialText: p,
              willReceiveFocus: !!K.focusOnMount || H,
            }),
            m.jsx(r("WAWebEditorInitialSelectionPlugin.react"), {
              selectAll: H,
            }),
            (L != null || R != null) &&
              m.jsx(o("WAWebCharacterLimitPlugin").CharacterLimitPlugin, {
                maxLength: L,
                maxCodeUnits: R,
                onMaxPasteExceeded: A,
                onMaxInputExceeded: w,
                maxLineCount: E,
              }),
            M && m.jsx(r("WAWebOnKeyDownPlugin"), { onKeyDown: M }),
            $ &&
              m.jsx(r("WAWebOnEnterPlugin"), { onEnter: $, enterIsNewLine: d }),
          ],
        }),
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  98,
);
