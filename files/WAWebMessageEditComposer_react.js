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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(18),
        a = t.onEmoji,
        i = t.onFocusNext,
        l = t.onFocusPrev,
        u = t.xstyle,
        m = d(null),
        p = m[0],
        _ = m[1],
        f;
      n[0] !== a || n[1] !== i || n[2] !== l
        ? ((f = function (t) {
            (t.preventDefault(), t.stopPropagation());
            var e = c.jsx(r("WAWebEmojiPanel.react"), {
              onEmoji: a,
              onFocusNext: i,
              onFocusPrev: l,
            });
            _({
              menu: e,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              type: o("WAWebDropdown.react").MenuType.EmojiPicker,
              anchor: t.target,
            });
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = f))
        : (f = n[3]);
      var g = f,
        h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            _(null);
          }),
          (n[4] = h))
        : (h = n[4]);
      var y = h,
        C = r("useWAWebStaticButtonA11y")(g),
        b = C[0],
        v = C[1],
        S;
      n[5] !== u
        ? ((S = (e || (e = r("stylex")))(u)), (n[5] = u), (n[6] = S))
        : (S = n[6]);
      var R;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Open emojis panel")), (n[7] = R))
        : (R = n[7]);
      var L;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = c.jsx(r("WDSIconIcMood.react"), {})), (n[8] = L))
        : (L = n[8]);
      var E;
      n[9] !== v || n[10] !== b || n[11] !== S
        ? ((E = c.jsx(
            "div",
            babelHelpers.extends({ ref: b, className: S, title: R }, v, {
              children: L,
            }),
          )),
          (n[9] = v),
          (n[10] = b),
          (n[11] = S),
          (n[12] = E))
        : (E = n[12]);
      var k = E,
        I = null;
      if (p) {
        var T;
        (n[13] !== p
          ? ((T = c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: y,
              children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: p }),
            })),
            (n[13] = p),
            (n[14] = T))
          : (T = n[14]),
          (I = T));
      }
      var D;
      return (
        n[15] !== k || n[16] !== I
          ? ((D = c.jsxs(c.Fragment, { children: [k, I] })),
            (n[15] = k),
            (n[16] = I),
            (n[17] = D))
          : (D = n[17]),
        D
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.disabled,
        a = e.onClick,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Send edited message")), (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] !== n || t[2] !== a
          ? ((l = c.jsx(r("WDSButton.react"), {
              testid: void 0,
              onPress: a,
              Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
              disabled: n,
              variant: "filled",
              size: "medium",
              "aria-label": i,
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function g(e) {
      var t,
        n = o("react-compiler-runtime").c(62),
        a = e.disableConfirmButton,
        i = e.initialLinkPreview,
        l = e.msg,
        s = e.onConfirm,
        u = e.onInputChange,
        g = e.onLinkPreviewChange,
        y;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            o("WAWebFrontendMsgGetters").getText,
            o("WAWebMsgGetters").getCaption,
          ]),
          (n[0] = y))
        : (y = n[0]);
      var C = o("useWAWebMsgValues").useMsgValues(l.id, y),
        b = C[0],
        v = C[1],
        S;
      n[1] !== l
        ? ((S = o("WAWebFrontendMsgGetters").getChat(l.unsafe())),
          (n[1] = l),
          (n[2] = S))
        : (S = n[2]);
      var R = S,
        L = d((t = b != null ? b : v) != null ? t : ""),
        E = L[0],
        k = L[1],
        I = d(),
        T = I[0],
        D = I[1],
        x,
        $;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = r("WAWebChatPreferenceCollection").getDefault()),
          ($ = ["spellcheck", "transformTextEmoji", "enterIsSend"]),
          (n[3] = x),
          (n[4] = $))
        : ((x = n[3]), ($ = n[4]));
      var P = o("useWAWebModelValues").useModelValues(x, $),
        N;
      n[5] !== T
        ? ((N = function (t) {
            T && (T.focus(), T.replaceSelection(t));
          }),
          (n[5] = T),
          (n[6] = N))
        : (N = n[6]);
      var M = N,
        w;
      n[7] !== T
        ? ((w = function () {
            T && T.focus();
          }),
          (n[7] = T),
          (n[8] = w))
        : (w = n[8]);
      var A = w,
        F;
      n[9] !== u
        ? ((F = function (t) {
            (k(t.text), u(t));
          }),
          (n[9] = u),
          (n[10] = F))
        : (F = n[10]);
      var O = F,
        B,
        W;
      n[11] !== l.type
        ? ((W = o("WAWebMessageEditUtils").getMsgEditType(l.type)),
          (n[11] = l.type),
          (n[12] = W))
        : (W = n[12]);
      var q = W;
      if (q === o("WAWebMessageEditUtils").MsgEditType.TextEdit) {
        var U;
        (n[13] !== R || n[14] !== i || n[15] !== g || n[16] !== E
          ? ((U = c.jsx(r("WAWebMessageEditLinkPreviewPanel.react"), {
              chat: R,
              text: E,
              onChange: g,
              initialLinkPreview: i,
            })),
            (n[13] = R),
            (n[14] = i),
            (n[15] = g),
            (n[16] = E),
            (n[17] = U))
          : (U = n[17]),
          (B = U));
      }
      var V = q === o("WAWebMessageEditUtils").MsgEditType.CaptionEdit,
        H;
      n[18] !== R || n[19] !== V
        ? ((H = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
            chat: R,
            isEditingCaption: V,
          })),
          (n[18] = R),
          (n[19] = V),
          (n[20] = H))
        : (H = n[20]);
      var G = H,
        z;
      n[21] !== l ? ((z = h(l)), (n[21] = l), (n[22] = z)) : (z = n[22]);
      var j = P.spellcheck,
        K = !P.enterIsSend,
        Q;
      n[23] !== R.groupMetadata || n[24] !== P.transformTextEmoji
        ? ((Q = c.jsx(r("WAWebRichTextInputPlugins.react"), {
            groupMetadata: R.groupMetadata,
            transformTextEmoji: P.transformTextEmoji,
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
          })),
          (n[23] = R.groupMetadata),
          (n[24] = P.transformTextEmoji),
          (n[25] = Q))
        : (Q = n[25]);
      var X;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = c.jsx(r("WAWebEmojiPickerPlugin"), {})), (n[26] = X))
        : (X = n[26]);
      var Y;
      n[27] !== R
        ? ((Y = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(R)),
          (n[27] = R),
          (n[28] = Y))
        : (Y = n[28]);
      var J;
      n[29] !== R || n[30] !== Y
        ? ((J = c.jsx(r("WAWebMentionPickerPlugin"), {
            chat: R,
            elevatedPushNamesEnabled: Y,
            source: "message_edit",
          })),
          (n[29] = R),
          (n[30] = Y),
          (n[31] = J))
        : (J = n[31]);
      var Z;
      n[32] !== P.spellcheck ||
      n[33] !== O ||
      n[34] !== s ||
      n[35] !== G ||
      n[36] !== z ||
      n[37] !== K ||
      n[38] !== Q ||
      n[39] !== J
        ? ((Z = c.jsxs(r("WAWebRichTextInput.react"), {
            testid: void 0,
            ref: D,
            initialText: z,
            xstyle: m.input,
            onChange: O,
            onEnter: s,
            placeholder: G,
            title: G,
            maxLength: r("WAWebConstantsDeprecated").MAX_TXT_MSG_SIZE,
            maxVisibleLines: p,
            multiline: !0,
            focusOnMount: !0,
            spellCheck: j,
            enterIsNewLine: K,
            children: [Q, X, J],
          })),
          (n[32] = P.spellcheck),
          (n[33] = O),
          (n[34] = s),
          (n[35] = G),
          (n[36] = z),
          (n[37] = K),
          (n[38] = Q),
          (n[39] = J),
          (n[40] = Z))
        : (Z = n[40]);
      var ee = Z,
        te;
      n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = [
            m.emojiButton,
            m.emojiButtonRefreshed,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ]),
          (n[41] = te))
        : (te = n[41]);
      var ne;
      n[42] !== M || n[43] !== A
        ? ((ne = c.jsx(_, {
            xstyle: te,
            onEmoji: M,
            onFocusNext: A,
            onFocusPrev: A,
          })),
          (n[42] = M),
          (n[43] = A),
          (n[44] = ne))
        : (ne = n[44]);
      var re = ne,
        oe;
      n[45] !== a || n[46] !== s
        ? ((oe = c.jsx(f, { onClick: s, disabled: a })),
          (n[45] = a),
          (n[46] = s),
          (n[47] = oe))
        : (oe = n[47]);
      var ae = oe,
        ie;
      n[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = { className: "x1n2onr6 x1c4vz4f x2lah0s" }), (n[48] = ie))
        : (ie = n[48]);
      var le, se, ue;
      n[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = [0, 20, 20, 20]),
          (se = [2, 0, 8, 0]),
          (ue = [m.composer, m.composerRefreshed]),
          (n[49] = le),
          (n[50] = se),
          (n[51] = ue))
        : ((le = n[49]), (se = n[50]), (ue = n[51]));
      var ce;
      n[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = [m.inputContainer, m.inputContainerRefreshed]), (n[52] = ce))
        : (ce = n[52]);
      var de;
      n[53] !== ee
        ? ((de = c.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: ce,
            children: ee,
          })),
          (n[53] = ee),
          (n[54] = de))
        : (de = n[54]);
      var me;
      n[55] !== ae || n[56] !== re || n[57] !== de
        ? ((me = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            alignSelf: "stretch",
            justify: "center",
            columnGap: 8,
            margin: le,
            padding: se,
            xstyle: ue,
            children: [de, re, ae],
          })),
          (n[55] = ae),
          (n[56] = re),
          (n[57] = de),
          (n[58] = me))
        : (me = n[58]);
      var pe;
      return (
        n[59] !== B || n[60] !== me
          ? ((pe = c.jsxs(
              "div",
              babelHelpers.extends({}, ie, { children: [B, null, me] }),
            )),
            (n[59] = B),
            (n[60] = me),
            (n[61] = pe))
          : (pe = n[61]),
        pe
      );
    }
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
