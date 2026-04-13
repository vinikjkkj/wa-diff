__d(
  "WAWebSendMsgAttachmentPreview.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebClickable.react",
    "WAWebEmojiPickerPlugin",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendMsgSharedUtils.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        textContainer: {
          position: "x1n2onr6",
          height: "x5yr21d",
          width: "xh8yej3",
          $$css: !0,
        },
        mediaThumbContainer: {
          minWidth: "xculje8",
          height: "x5yr21d",
          $$css: !0,
        },
        container: {
          position: "x1n2onr6",
          height: "x5yr21d",
          width: "x86nts4",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
        composerContainer: {
          cursor: "x1ed109x",
          opacity: "x1hc1fzr",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        composerInput: { height: "x1plxi8p", alignItems: "x6s0dn4", $$css: !0 },
        composerFont: { fontSize: "x1lkfr7t", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.attachments,
        a = e.onAppendMessage,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = r("WAWebChatPreferenceCollection").getDefault()),
          (l = ["spellcheck", "transformTextEmoji", "enterIsSend"]),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var m = o("useWAWebModelValues").useModelValues(i, l),
        p = c(),
        _ = p[0],
        f = p[1],
        g;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Add a message...")), (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      t[3] !== _
        ? ((y = function () {
            _ == null || _.focus();
          }),
          (t[3] = _),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b;
      t[5] !== a
        ? ((b = function (t) {
            a(t.text);
          }),
          (t[5] = a),
          (t[6] = b))
        : (b = t[6]);
      var v = b,
        S = n[0],
        R;
      if (t[7] !== S) {
        var L = u.jsx(r("WAWebSendMsgSharedUtils.react"), { file: S });
        ((R = u.jsx(r("WAWebFlexItem.react"), {
          grow: 0,
          xstyle: d.mediaThumbContainer,
          children: L,
        })),
          (t[7] = S),
          (t[8] = R));
      } else R = t[8];
      var E = R,
        k,
        I;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [d.container, d.composerContainer]),
          (I = { className: "x1xrf6ya xde1mab xscbp6u x1iw51ew x78zum5" }),
          (t[9] = k),
          (t[10] = I))
        : ((k = t[9]), (I = t[10]));
      var T = !m.enterIsSend,
        D;
      t[11] !== m.transformTextEmoji
        ? ((D = u.jsx(r("WAWebRichTextInputPlugins.react"), {
            transformTextEmoji: m.transformTextEmoji,
            textFormatEnabled: !0,
            bulletPointsEnabled: !0,
            numberedListEnabled: !0,
            inlineCodeEnabled: !0,
            blockQuoteEnabled: !0,
          })),
          (t[11] = m.transformTextEmoji),
          (t[12] = D))
        : (D = t[12]);
      var x;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(r("WAWebEmojiPickerPlugin"), {})), (t[13] = x))
        : (x = t[13]);
      var $;
      t[14] !== m.spellcheck || t[15] !== v || t[16] !== D || t[17] !== T
        ? (($ = u.jsx(r("WAWebFlexItem.react"), {
            grow: 1,
            xstyle: k,
            children: u.jsx(
              "div",
              babelHelpers.extends({}, I, {
                children: u.jsxs(r("WAWebRichTextInput.react"), {
                  ref: f,
                  xstyle: d.composerInput,
                  textXstyle: d.composerFont,
                  multiline: !0,
                  readOnly: !1,
                  placeholder: h,
                  title: h,
                  maxVisibleLines: 3,
                  onChange: v,
                  testid: void 0,
                  spellCheck: m.spellcheck,
                  enterIsNewLine: T,
                  children: [D, x],
                }),
              }),
            ),
          })),
          (t[14] = m.spellcheck),
          (t[15] = v),
          (t[16] = D),
          (t[17] = T),
          (t[18] = $))
        : ($ = t[18]);
      var P;
      t[19] !== C || t[20] !== $
        ? ((P = u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: C,
            children: $,
          })),
          (t[19] = C),
          (t[20] = $),
          (t[21] = P))
        : (P = t[21]);
      var N = P,
        M,
        w;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = u.jsx(o("WAWebFlex.react").FlexRow, {})),
          (w = {
            className:
              "x1n2onr6 xcbkimw x3p9ev8 x1od0jb8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
          }),
          (t[22] = M),
          (t[23] = w))
        : ((M = t[22]), (w = t[23]));
      var A;
      return (
        t[24] !== N || t[25] !== E
          ? ((A = u.jsxs(u.Fragment, {
              children: [
                M,
                u.jsx(
                  "div",
                  babelHelpers.extends({}, w, {
                    children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                      xstyle: d.textContainer,
                      align: "center",
                      justify: "start",
                      children: [E, N],
                    }),
                  }),
                ),
              ],
            })),
            (t[24] = N),
            (t[25] = E),
            (t[26] = A))
          : (A = t[26]),
        A
      );
    }
    l.default = m;
  },
  226,
);
