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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(32),
        a = t.parent,
        i = d(!1),
        l = i[0],
        u = i[1],
        p = d(),
        f = p[0],
        g = p[1],
        h;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            var e = t.trim();
            u(e.length > 0);
          }),
          (n[0] = h))
        : (h = n[0]);
      var y = h,
        C;
      n[1] !== f
        ? ((C = function (t, n) {
            f == null || f.replaceSelection(t, n);
          }),
          (n[1] = f),
          (n[2] = C))
        : (C = n[2]);
      var b = C,
        v,
        S;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = r("WAWebChatPreferenceCollection").getDefault()),
          (S = ["spellcheck", "transformTextEmoji", "enterIsSend"]),
          (n[3] = v),
          (n[4] = S))
        : ((v = n[3]), (S = n[4]));
      var R = o("useWAWebModelValues").useModelValues(v, S),
        L;
      n[5] !== a || n[6] !== f
        ? ((L = function () {
            if (f != null) {
              var e = f.getTextContent();
              if (e != null) {
                var t = e.trim();
                t.length > 0 &&
                  (o("WAWebSendCommentMessageAction")
                    .sendCommentMessage(a, t)
                    .finally(_),
                  f.setTextContent(""),
                  u(!1));
              }
            }
          }),
          (n[5] = a),
          (n[6] = f),
          (n[7] = L))
        : (L = n[7]);
      var E = L,
        k,
        I;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = (e || (e = r("stylex"))).props(
            m.blockCompose,
            o("WAWebUISpacing").uiPadding.vert5,
            o("WAWebUISpacing").uiPadding.horiz15,
          )),
          (I = { className: "x78zum5 x1isitws xuk3077" }),
          (n[8] = k),
          (n[9] = I))
        : ((k = n[8]), (I = n[9]));
      var T;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (e || (e = r("stylex"))).props(
            m.inputContainer,
            o("WAWebUISpacing").uiPadding.vert9,
            o("WAWebUISpacing").uiPadding.horiz12,
            o("WAWebUISpacing").uiMargin.vert5,
            o("WAWebUISpacing").uiMargin.horiz8,
          )),
          (n[10] = T))
        : (T = n[10]);
      var D, x;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Add a reply")),
          (D = function (t) {
            y(t.parsableText);
          }),
          (n[11] = D),
          (n[12] = x))
        : ((D = n[11]), (x = n[12]));
      var $ = R.enterIsSend ? E : r("WAWebNoop"),
        P;
      n[13] !== R.transformTextEmoji
        ? ((P = c.jsx(r("WAWebRichTextInputPlugins.react"), {
            transformTextEmoji: R.transformTextEmoji,
            textFormatEnabled: !0,
            bulletPointsEnabled: !0,
            numberedListEnabled: !0,
            inlineCodeEnabled: !0,
            blockQuoteEnabled: !0,
            phoneNumbersEnabled: !0,
            floatingToolbarEnabled: !0,
          })),
          (n[13] = R.transformTextEmoji),
          (n[14] = P))
        : (P = n[14]);
      var N;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsx(r("WAWebEmojiPickerPlugin"), {})), (n[15] = N))
        : (N = n[15]);
      var M;
      n[16] !== R.spellcheck || n[17] !== $ || n[18] !== P
        ? ((M = c.jsxs(r("WAWebRichTextInput.react"), {
            ref: g,
            placeholder: x,
            onChange: D,
            spellCheck: R.spellcheck,
            onEnter: $,
            multiline: !0,
            children: [P, N],
          })),
          (n[16] = R.spellcheck),
          (n[17] = $),
          (n[18] = P),
          (n[19] = M))
        : (M = n[19]);
      var w;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = [m.emojiButton, o("WAWebUISpacing").uiMargin.start8]),
          (n[20] = w))
        : (w = n[20]);
      var A;
      n[21] !== b
        ? ((A = c.jsx(o("WAWebMessageEditComposer.react").EmojiButton, {
            xstyle: w,
            onEmoji: b,
          })),
          (n[21] = b),
          (n[22] = A))
        : (A = n[22]);
      var F;
      n[23] !== M || n[24] !== A
        ? ((F = c.jsxs(
            "div",
            babelHelpers.extends({}, T, { children: [M, A] }),
          )),
          (n[23] = M),
          (n[24] = A),
          (n[25] = F))
        : (F = n[25]);
      var O;
      n[26] !== E || n[27] !== l
        ? ((O = l
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
                        onClickSend: E,
                        hasText: l,
                        recordingSession: null,
                        onStartRecording: r("WAWebNoop"),
                      },
                    ),
                  },
                ),
              )
            : null),
          (n[26] = E),
          (n[27] = l),
          (n[28] = O))
        : (O = n[28]);
      var B;
      return (
        n[29] !== F || n[30] !== O
          ? ((B = c.jsx(
              "div",
              babelHelpers.extends({}, k, {
                children: c.jsxs(
                  "div",
                  babelHelpers.extends({}, I, { children: [null, F, O] }),
                ),
              }),
            )),
            (n[29] = F),
            (n[30] = O),
            (n[31] = B))
          : (B = n[31]),
        B
      );
    }
    function _() {
      o(
        "WAWebCommentModalActions",
      ).CommentModalActions.scrollReplyModalToBottom();
    }
    l.default = p;
  },
  226,
);
