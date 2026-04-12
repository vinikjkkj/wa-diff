__d(
  "WAWebMediaEditorCaptionInput.react",
  [
    "fbt",
    "WAUnicodeUtils",
    "WAWebAttachMediaViewOnceInChat.react",
    "WAWebChatPreferenceCollection",
    "WAWebClickable.react",
    "WAWebConstantsDeprecated",
    "WAWebDropdown.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiPanel.react",
    "WAWebEmojiPickerPlugin",
    "WAWebFlex.react",
    "WAWebGroupType",
    "WAWebIcMoodIcon.react",
    "WAWebL10N",
    "WAWebMentionPickerPlugin",
    "WAWebMentionSuggestions.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendButtonWithCount.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcClose.react",
    "react",
    "useWAWebIsKeyboardUser",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        buttonContainer: { minHeight: "x1rj1pf4", $$css: !0 },
        inputButton: {
          marginInlineStart: "x13fj5qh",
          color: "xhslqc4",
          $$css: !0,
        },
        secondaryButtonContainer: { marginInlineStart: "x13fj5qh", $$css: !0 },
        viewOnceHidden: { visibility: "xlshs6z", $$css: !0 },
        richTextInput: {
          width: "xh8yej3",
          marginTop: "x1k70j0n",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xzueoph",
          marginInlineStart: "x1lziwak",
          minHeight: "xisnujt",
          color: "x14ug900",
          wordWrap: "x1vvkbs",
          whiteSpace: "x126k92a",
          userSelect: "x1hx0egp",
          $$css: !0,
        },
        richTextInputText: { fontSize: "x1lkfr7t", $$css: !0 },
      };
    function f(e) {
      var t,
        n,
        a,
        i = e.chat,
        l = e.expandedTextFormatsEnabled,
        c = e.initialText,
        f = e.onEnter,
        h = e.onSendButtonClick,
        y = e.sendButtonEnabled,
        C = e.setCaptionInputRef,
        b = e.setSendButtonRef,
        v =
          (t = e.maxCaptionLength) != null
            ? t
            : r("WAWebConstantsDeprecated").MAX_CAPTION_LENGTH,
        S = p(c),
        R = S[0],
        L = S[1],
        E = m(null),
        k = m(null),
        I = p(null),
        T = I[0],
        D = I[1],
        x = r("useWAWebIsKeyboardUser")(),
        $ = x.isKeyboardUser,
        P = function () {
          var e;
          (e = E.current) == null || e.focus();
        },
        N = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["spellcheck", "transformTextEmoji", "enterIsSend"],
        );
      d(function () {
        P();
      }, []);
      var M = function (t) {
          ((E.current = t), C(t));
        },
        w = function (t) {
          var e;
          ((e = E.current) == null || e.reset(), P());
        },
        A = function () {
          (D(null), $ && P());
        },
        F = function (t) {
          var e = E.current;
          (e && (e.focus(), e.replaceSelection(t)), $ && A());
        },
        O = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = u.jsx(r("WAWebEmojiPanel.react"), {
            onEmoji: F,
            onFocusNext: P,
            onFocusPrev: P,
          });
          (D({
            menu: e,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            type: o("WAWebDropdown.react").MenuType.EmojiPicker,
            anchor: t.target,
          }),
            P());
        },
        B = function (n) {
          (L(n.parsableText), e.onChange(n.parsableText));
        },
        W = function (t) {
          var e;
          (e = E.current) != null && e.isFocused() ? f(t) : f();
        },
        q = o("WAUnicodeUtils").numCodepoints(R || ""),
        U = v - q < 50,
        V =
          R != null && R !== ""
            ? u.jsx(r("WAWebUnstyledButton.react"), {
                xstyle: _.inputButton,
                onClick: w,
                title: s._(/*BTDS*/ "Clear caption"),
                children: u.jsx(r("WDSIconIcClose.react"), {}),
              })
            : null,
        H =
          U &&
          u.jsx("div", {
            className: "x13fj5qh x1f6kntn xhslqc4",
            children: r("WAWebL10N").n(v - q),
          }),
        G = null;
      T &&
        (G = u.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "EmojiPicker",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          ref: k,
          requestDismiss: A,
          children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: T }),
        }));
      var z =
          e.theme !== "document" && !i.id.isStatus()
            ? u.jsx(r("WAWebAttachMediaViewOnceInChat.react"), {
                chat: i,
                containerXstyle: [
                  _.secondaryButtonContainer,
                  e.viewOnceDisabled && _.viewOnceHidden,
                ],
                disabled: e.viewOnceDisabled,
                isOn: !!e.viewOnce,
                mediaType: e.msgType,
                onChange: e.onToggleViewOnce,
              })
            : null,
        j = e.chat.groupMetadata;
      ((n = e.chat.groupMetadata) == null ? void 0 : n.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        !o("WAWebMentionSuggestions.react").shouldEnableGroupMentions(j) &&
        (j = null);
      var K =
          (a = e.placeholderText) != null ? a : s._(/*BTDS*/ "Add a caption"),
        Q = u.jsxs(r("WAWebRichTextInput.react"), {
          ref: M,
          testid: void 0,
          initialText: c,
          placeholder: K,
          ariaLabel: K,
          onChange: B,
          onEnter: W,
          onFiles: e.onFiles,
          maxLength: v,
          maxVisibleLines: 5,
          multiline: e.multiline !== !1,
          spellCheck: N.spellcheck,
          enterIsNewLine: !N.enterIsSend,
          focusOnMount: !0,
          xstyle: _.richTextInput,
          textXstyle: _.richTextInputText,
          children: [
            u.jsx(r("WAWebRichTextInputPlugins.react"), {
              groupMetadata: j,
              transformTextEmoji: N.transformTextEmoji,
              textFormatEnabled: !0,
              bulletPointsEnabled: l !== !1,
              numberedListEnabled: l !== !1,
              inlineCodeEnabled: l !== !1,
              blockQuoteEnabled: l !== !1,
              internLinksEnabled: e.internLinksEnabled !== !1,
              phoneNumbersEnabled: e.phoneNumbersEnabled !== !1,
              linksEnabled: !0,
              floatingToolbarEnabled: !0,
              textFormatShortcutsEnabled: !0,
            }),
            u.jsx(r("WAWebEmojiPickerPlugin"), {}),
            u.jsx(r("WAWebMentionPickerPlugin"), {
              chat: e.chat,
              elevatedPushNamesEnabled: o(
                "WAWebElevatedPushNamesFlag",
              ).elevatedPushNamesM2Enabled(i),
              source: "media-editor-caption",
            }),
          ],
        });
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        className: "xh8yej3 xic84rp xdj266r x15d6yb6 xat24cr x798i94",
        align: "center",
        justify: "center",
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "start",
            className:
              "x9f619 xh8yej3 x1ba4aug x1tiyuxx xvtqlqk x1nbhmlj xdx6fka x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a",
            children: [
              Q,
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: _.buttonContainer,
                align: "center",
                children: [H, V, u.jsx(g, { onClick: O })],
              }),
            ],
          }),
          z,
          G,
          y === !0
            ? u.jsx("div", {
                className: "x10l6tqk xdg88n9",
                children: u.jsx(r("WAWebSendButtonWithCount.react"), {
                  ref: b,
                  ariaLabel: s._(/*BTDS*/ "Send"),
                  large: !0,
                  count: null,
                  onClick: h,
                  disabled: !1,
                }),
              })
            : null,
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.onClick;
      return u.jsx(o("WAWebClickable.react").Clickable, {
        onClick: t,
        xstyle: _.inputButton,
        title: s._(/*BTDS*/ "Open emojis panel"),
        children: u.jsx(o("WAWebIcMoodIcon.react").IcMoodIcon, {}),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
