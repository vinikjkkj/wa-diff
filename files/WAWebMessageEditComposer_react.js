__d(
  "WAWebMessageEditComposer.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebComposeBoxUtils",
    "WAWebConstantsDeprecated",
    "WAWebDropdown.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiPanel.react",
    "WAWebEmojiPickerPlugin",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMentionPickerPlugin",
    "WAWebMessageEditLinkPreviewPanel.react",
    "WAWebMessageEditUtils",
    "WAWebMsgGetters",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputConst",
    "WAWebRichTextInputPlugins.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWebIcCheckIcon.react",
    "WDSButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcMood.react",
    "escapeRegex",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        composer: {
          position: "x1n2onr6",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        composerRefreshed: {
          alignItems: "xuk3077",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "x14e42zd",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
        inputContainer: {
          paddingTop: "x96k8nx",
          paddingInlineEnd: "xpdmqnj",
          paddingBottom: "xdvlbce",
          paddingInlineStart: "x1g0dm76",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          backgroundColor: "xk7ee7b",
          borderTopColor: "x1716072",
          borderInlineEndColor: "x1ygal6x",
          borderBottomColor: "x89wmna",
          borderInlineStartColor: "x1rbbhm9",
          marginInlineEnd: "xpwdb9g",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        inputContainerRefreshed: {
          marginInlineEnd: "x14z9mp",
          paddingTop: "x889kno",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        input: { flexGrow: "x1iyjqo2", $$css: !0 },
        emojiButton: {
          marginInlineStart: "x13fj5qh",
          color: "xhslqc4",
          cursor: "x1ypdohk",
          alignSelf: "xqcrz7y",
          $$css: !0,
        },
        emojiButtonRefreshed: {
          marginTop: "x1380le5",
          marginInlineEnd: "xqf2s3x",
          marginBottom: "xefnzgg",
          marginInlineStart: "x150mmf0",
          alignSelf: "xpvyfi4",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
      },
      p = 8;
    function _(t) {
      var n = t.onEmoji,
        a = t.onFocusNext,
        i = t.onFocusPrev,
        l = t.xstyle,
        u = d(null),
        m = u[0],
        p = u[1],
        _ = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = c.jsx(r("WAWebEmojiPanel.react"), {
            onEmoji: n,
            onFocusNext: a,
            onFocusPrev: i,
          });
          p({
            menu: e,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            type: o("WAWebDropdown.react").MenuType.EmojiPicker,
            anchor: t.target,
          });
        },
        f = function () {
          p(null);
        },
        g = r("useWAWebStaticButtonA11y")(_),
        h = g[0],
        y = g[1],
        C = c.jsx(
          "div",
          babelHelpers.extends(
            {
              ref: h,
              className: (e || (e = r("stylex")))(l),
              title: s._(/*BTDS*/ "Open emojis panel"),
            },
            y,
            { children: c.jsx(r("WDSIconIcMood.react"), {}) },
          ),
        ),
        b = null;
      return (
        m &&
          (b = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "EmojiPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: f,
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: m }),
          })),
        c.jsxs(c.Fragment, { children: [C, b] })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.disabled,
        n = e.onClick;
      return c.jsx(r("WDSButton.react"), {
        testid: void 0,
        onPress: n,
        Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
        disabled: t,
        variant: "filled",
        size: "medium",
        "aria-label": s._(/*BTDS*/ "Send edited message"),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        n = e.disableConfirmButton,
        a = e.initialLinkPreview,
        i = e.msg,
        l = e.onConfirm,
        s = e.onInputChange,
        u = e.onLinkPreviewChange,
        g = o("useWAWebMsgValues").useMsgValues(i.id, [
          o("WAWebFrontendMsgGetters").getText,
          o("WAWebMsgGetters").getCaption,
        ]),
        y = g[0],
        C = g[1],
        b = o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
        v = d((t = y != null ? y : C) != null ? t : ""),
        S = v[0],
        R = v[1],
        L = d(),
        E = L[0],
        k = L[1],
        I = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["spellcheck", "transformTextEmoji", "enterIsSend"],
        ),
        T = function (t) {
          E && (E.focus(), E.replaceSelection(t));
        },
        D = function () {
          E && E.focus();
        },
        x = function (t) {
          (R(t.text), s(t));
        },
        $ = null,
        P,
        N = o("WAWebMessageEditUtils").getMsgEditType(i.type);
      N === o("WAWebMessageEditUtils").MsgEditType.TextEdit &&
        (P = c.jsx(r("WAWebMessageEditLinkPreviewPanel.react"), {
          chat: b,
          text: S,
          onChange: u,
          initialLinkPreview: a,
        }));
      var M = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
          chat: b,
          isEditingCaption:
            N === o("WAWebMessageEditUtils").MsgEditType.CaptionEdit,
        }),
        w = c.jsxs(r("WAWebRichTextInput.react"), {
          testid: void 0,
          ref: k,
          initialText: h(i),
          xstyle: m.input,
          onChange: x,
          onEnter: l,
          placeholder: M,
          title: M,
          maxLength: r("WAWebConstantsDeprecated").MAX_TXT_MSG_SIZE,
          maxVisibleLines: p,
          multiline: !0,
          focusOnMount: !0,
          spellCheck: I.spellcheck,
          enterIsNewLine: !I.enterIsSend,
          children: [
            c.jsx(r("WAWebRichTextInputPlugins.react"), {
              groupMetadata: b.groupMetadata,
              transformTextEmoji: I.transformTextEmoji,
              textFormatEnabled: !0,
              bulletPointsEnabled: !0,
              numberedListEnabled: !0,
              inlineCodeEnabled: !0,
              blockQuoteEnabled: !0,
              internLinksEnabled: !0,
              phoneNumbersEnabled: !0,
              linksEnabled: !0,
              textFormatShortcutsEnabled: !0,
              floatingToolbarEnabled: !0,
            }),
            c.jsx(r("WAWebEmojiPickerPlugin"), {}),
            c.jsx(r("WAWebMentionPickerPlugin"), {
              chat: b,
              elevatedPushNamesEnabled: o(
                "WAWebElevatedPushNamesFlag",
              ).elevatedPushNamesM2Enabled(b),
              source: "message_edit",
            }),
          ],
        }),
        A = c.jsx(_, {
          xstyle: [
            m.emojiButton,
            m.emojiButtonRefreshed,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ],
          onEmoji: T,
          onFocusNext: D,
          onFocusPrev: D,
        }),
        F = c.jsx(f, { onClick: l, disabled: n });
      return c.jsxs("div", {
        className: "x1n2onr6 x1c4vz4f x2lah0s",
        children: [
          P,
          $,
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            alignSelf: "stretch",
            justify: "center",
            columnGap: 8,
            margin: [0, 20, 20, 20],
            padding: [2, 0, 8, 0],
            xstyle: [m.composer, m.composerRefreshed],
            children: [
              c.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: [m.inputContainer, m.inputContainerRefreshed],
                children: w,
              }),
              A,
              F,
            ],
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t,
        n,
        a =
          (t =
            (n = o("WAWebFrontendMsgGetters").getText(e)) != null
              ? n
              : o("WAWebMsgGetters").getCaption(e)) != null
            ? t
            : "",
        i = e.mentionMap(),
        l = e.groupMentionMap();
      if (i) {
        var s = new RegExp(
          Object.keys(i)
            .map(function (e) {
              return r("escapeRegex")(e);
            })
            .join("|"),
          "g",
        );
        a = a.replace(s, function (e) {
          var t = i[e].id.toString();
          return (
            "" +
            o("WAWebRichTextInputConst").ZWS +
            t +
            o("WAWebRichTextInputConst").ZWS
          );
        });
      }
      if (l) {
        var u = new RegExp(
          Object.keys(l)
            .map(function (e) {
              return r("escapeRegex")(e);
            })
            .join("|"),
          "g",
        );
        a = a.replace(u, function (e) {
          return (
            "" +
            o("WAWebRichTextInputConst").ZWS +
            e.slice(1) +
            o("WAWebRichTextInputConst").ZWS
          );
        });
      }
      return a;
    }
    ((l.EmojiButton = _), (l.MessageEditComposer = g));
  },
  226,
);
