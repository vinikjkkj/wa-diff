__d(
  "WAWebBizBroadcastMessageSection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastCTAButtonSection.react",
    "WAWebBizBroadcastGenAIEntryPoint.react",
    "WAWebBizBroadcastMessageAttachmentSection.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebFlex.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSButton.react",
    "WDSIconIcMood.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        messageInputContainer: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1280gxy",
          borderTopColor: "xx42vgk x1iho30r",
          borderInlineEndColor: "xbogo7e xwdt1gy",
          borderBottomColor: "x120ee7l x1vtqnfi",
          borderInlineStartColor: "x1vb5itz xhu2vye",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z xs2lk21",
          borderInlineEndWidth: "x1lun4ml x1o7urej",
          borderBottomWidth: "xso031l x16hne5i",
          borderInlineStartWidth: "xpilrb4 x15xq2pl",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(49),
        n = e.attachmentData,
        a = e.buttonData,
        i = e.entryPoint,
        l = e.message,
        c = e.onButtonDataChange,
        d = e.onGenAIPress,
        f = e.onMessageChange,
        g = e.richTextInputRef,
        h = e.setAttachmentData,
        y = m(null),
        C = m(null),
        b = p(null),
        v = b[0],
        S = b[1],
        R = p(!1),
        L = R[0],
        E = R[1],
        k = r("useWAWebIsKeyboardUser")(),
        I = k.isKeyboardUser,
        T;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            E(!0);
          }),
          (t[0] = T))
        : (T = t[0]);
      var D = T,
        x;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            (C.current != null &&
              t.relatedTarget instanceof Node &&
              C.current.contains(t.relatedTarget)) ||
              E(!1);
          }),
          (t[1] = x))
        : (x = t[1]);
      var $ = x,
        P;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            (S(null),
              (C.current == null ||
                !C.current.contains(document.activeElement)) &&
                E(!1));
          }),
          (t[2] = P))
        : (P = t[2]);
      var N = P,
        M;
      t[3] !== I || t[4] !== l || t[5] !== f || t[6] !== g
        ? ((M = function (t) {
            var e = g.current;
            (e != null ? (e.replaceSelection(t), e.focus()) : f(l + t),
              I && N());
          }),
          (t[3] = I),
          (t[4] = l),
          (t[5] = f),
          (t[6] = g),
          (t[7] = M))
        : (M = t[7]);
      var w = M,
        A;
      t[8] !== w
        ? ((A = function (t) {
            (t.preventDefault(), t.stopPropagation());
            var e = u.jsx(r("WAWebEmojiPanel.react"), {
              onEmoji: w,
              onFocusNext: N,
              onFocusPrev: N,
            });
            S({
              anchor: t.target,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              menu: e,
              type: o("WAWebDropdown.react").MenuType.EmojiPicker,
            });
          }),
          (t[8] = w),
          (t[9] = A))
        : (A = t[9]);
      var F = A,
        O;
      t[10] !== f
        ? ((O = function (t) {
            var e = t.text.trim();
            f(e);
          }),
          (t[10] = f),
          (t[11] = O))
        : (O = t[11]);
      var B = O,
        W = null;
      if (v) {
        var q;
        (t[12] !== v
          ? ((q = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              ref: y,
              requestDismiss: N,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: v }),
            })),
            (t[12] = v),
            (t[13] = q))
          : (q = t[13]),
          (W = q));
      }
      var U;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = { className: "x19aeb6u xh8yej3" }), (t[14] = U))
        : (U = t[14]);
      var V;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getMessageSectionTitle()),
          (t[15] = V))
        : (V = t[15]);
      var H;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = {
            className: "x6s0dn4 x78zum5 x1iyjqo2 x129bwdz x1trrmfo xu0aao5",
          }),
          (t[16] = H))
        : (H = t[16]);
      var G;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getMessageTextFieldLabel()),
          (t[17] = G))
        : (G = t[17]);
      var z;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = u.jsx(r("WAWebRichTextInputPlugins.react"), {
            textFormatEnabled: !0,
            textFormatShortcutsEnabled: !0,
            floatingToolbarEnabled: !0,
            bulletPointsEnabled: !0,
            numberedListEnabled: !0,
            inlineCodeEnabled: !0,
            blockQuoteEnabled: !0,
          })),
          (t[18] = z))
        : (z = t[18]);
      var j;
      t[19] !== B || t[20] !== l || t[21] !== g
        ? ((j = u.jsx(
            "div",
            babelHelpers.extends({}, H, {
              children: u.jsx(r("WAWebRichTextInput.react"), {
                ref: g,
                initialText: l,
                placeholder: G,
                multiline: !0,
                testid: void 0,
                onChange: B,
                onFocus: D,
                onBlur: $,
                children: z,
              }),
            }),
          )),
          (t[19] = B),
          (t[20] = l),
          (t[21] = g),
          (t[22] = j))
        : (j = t[22]);
      var K;
      t[23] !== v || t[24] !== L || t[25] !== l || t[26] !== d
        ? ((K =
            (L || v != null) &&
            u.jsx("div", {
              className: "x2lah0s",
              children: u.jsx(r("WAWebBizBroadcastGenAIEntryPoint.react"), {
                message: l,
                onPress: d,
              }),
            })),
          (t[23] = v),
          (t[24] = L),
          (t[25] = l),
          (t[26] = d),
          (t[27] = K))
        : (K = t[27]);
      var Q;
      t[28] !== v || t[29] !== F || t[30] !== L
        ? ((Q =
            (L || v != null) &&
            u.jsx("div", {
              className: "x2lah0s",
              children: u.jsx(r("WDSButton.react"), {
                variant: "borderless",
                size: "small",
                Icon: r("WDSIconIcMood.react"),
                onPress: F,
                "aria-label": s._(/*BTDS*/ "Emoji"),
                testid: void 0,
              }),
            })),
          (t[28] = v),
          (t[29] = F),
          (t[30] = L),
          (t[31] = Q))
        : (Q = t[31]);
      var X;
      t[32] !== j || t[33] !== K || t[34] !== Q
        ? ((X = u.jsxs(o("WAWebFlex.react").FlexRow, {
            ref: C,
            xstyle: _.messageInputContainer,
            children: [j, K, Q],
          })),
          (t[32] = j),
          (t[33] = K),
          (t[34] = Q),
          (t[35] = X))
        : (X = t[35]);
      var Y;
      t[36] !== n || t[37] !== i || t[38] !== h
        ? ((Y = u.jsx(
            o("WAWebBizBroadcastMessageAttachmentSection.react")
              .WAWebBizBroadcastMessageAttachmentSection,
            { attachmentData: n, entryPoint: i, setAttachmentData: h },
          )),
          (t[36] = n),
          (t[37] = i),
          (t[38] = h),
          (t[39] = Y))
        : (Y = t[39]);
      var J;
      t[40] !== a || t[41] !== i || t[42] !== c
        ? ((J = u.jsx(r("WAWebBizBroadcastCTAButtonSection.react"), {
            buttonData: a,
            entryPoint: i,
            onButtonDataChange: c,
          })),
          (t[40] = a),
          (t[41] = i),
          (t[42] = c),
          (t[43] = J))
        : (J = t[43]);
      var Z;
      return (
        t[44] !== X || t[45] !== Y || t[46] !== J || t[47] !== W
          ? ((Z = u.jsx(
              "div",
              babelHelpers.extends({}, U, {
                children: u.jsxs(r("WAWebBizAdCard.react"), {
                  header: V,
                  headerTestid: "biz-broadcasts-message-section",
                  children: [X, W, Y, J],
                }),
              }),
            )),
            (t[44] = X),
            (t[45] = Y),
            (t[46] = J),
            (t[47] = W),
            (t[48] = Z))
          : (Z = t[48]),
        Z
      );
    }
    l.default = f;
  },
  226,
);
