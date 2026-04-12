__d(
  "WAWebCommentComposeBox.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebCommentModalActions",
    "WAWebComposeBoxSendButton.react",
    "WAWebEmojiPickerPlugin",
    "WAWebMessageEditComposer.react",
    "WAWebNoop",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendCommentMessageAction",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        inputContainer: {
          boxSizing: "x9f619",
          flex: "x12lumcd",
          width: "x1qrby5j",
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
        blockCompose: {
          position: "x1n2onr6",
          zIndex: "xhtitgo",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "xuk3077",
          width: "xh8yej3",
          minHeight: "x122xwht",
          backgroundColor: "xhjsbib",
          $$css: !0,
        },
        sendButtonContainer: {
          width: "x100vrsf",
          minWidth: "x1fns5xo",
          $$css: !0,
        },
        childPadding: {
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          minHeight: "x1wiwyrm",
          $$css: !0,
        },
        emojiButton: {
          color: "xhslqc4",
          cursor: "x1ypdohk",
          alignSelf: "xqcrz7y",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.parent,
        a = d(!1),
        i = a[0],
        l = a[1],
        u = d(),
        p = u[0],
        _ = u[1],
        f = function (t) {
          var e = t.trim();
          l(e.length > 0);
        },
        g = function (t, n) {
          p == null || p.replaceSelection(t, n);
        },
        h = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["spellcheck", "transformTextEmoji", "enterIsSend"],
        ),
        y = function () {
          if (p != null) {
            var e = p.getTextContent();
            if (e != null) {
              var t = e.trim();
              t.length > 0 &&
                (o("WAWebSendCommentMessageAction")
                  .sendCommentMessage(n, t)
                  .finally(function () {
                    o(
                      "WAWebCommentModalActions",
                    ).CommentModalActions.scrollReplyModalToBottom();
                  }),
                p.setTextContent(""),
                l(!1));
            }
          }
        },
        C = null;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            m.blockCompose,
            o("WAWebUISpacing").uiPadding.vert5,
            o("WAWebUISpacing").uiPadding.horiz15,
          ),
          {
            children: c.jsxs("div", {
              className: "x78zum5 x1isitws xuk3077",
              children: [
                C,
                c.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    e.props(
                      m.inputContainer,
                      o("WAWebUISpacing").uiPadding.vert9,
                      o("WAWebUISpacing").uiPadding.horiz12,
                      o("WAWebUISpacing").uiMargin.vert5,
                      o("WAWebUISpacing").uiMargin.horiz8,
                    ),
                    {
                      children: [
                        c.jsxs(r("WAWebRichTextInput.react"), {
                          ref: _,
                          placeholder: s._(/*BTDS*/ "Add a reply"),
                          onChange: function (t) {
                            f(t.parsableText);
                          },
                          spellCheck: h.spellcheck,
                          onEnter: h.enterIsSend ? y : r("WAWebNoop"),
                          multiline: !0,
                          children: [
                            c.jsx(r("WAWebRichTextInputPlugins.react"), {
                              transformTextEmoji: h.transformTextEmoji,
                              textFormatEnabled: !0,
                              bulletPointsEnabled: !0,
                              numberedListEnabled: !0,
                              inlineCodeEnabled: !0,
                              blockQuoteEnabled: !0,
                              phoneNumbersEnabled: !0,
                              floatingToolbarEnabled: !0,
                            }),
                            c.jsx(r("WAWebEmojiPickerPlugin"), {}),
                          ],
                        }),
                        c.jsx(o("WAWebMessageEditComposer.react").EmojiButton, {
                          xstyle: [
                            m.emojiButton,
                            o("WAWebUISpacing").uiMargin.start8,
                          ],
                          onEmoji: g,
                        }),
                      ],
                    },
                  ),
                ),
                i
                  ? c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          m.sendButtonContainer,
                          m.childPadding,
                          o("WAWebUISpacing").uiPadding.vert5,
                          o("WAWebUISpacing").uiPadding.horiz0,
                        ),
                        {
                          children: c.jsx(
                            o("WAWebComposeBoxSendButton.react").SendButton,
                            {
                              supportsPtt: !1,
                              onClickSend: y,
                              hasText: i,
                              recordingSession: null,
                              onStartRecording: r("WAWebNoop"),
                            },
                          ),
                        },
                      ),
                    )
                  : null,
              ],
            }),
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
