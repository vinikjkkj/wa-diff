__d(
  "WAWebRichTextInput.story",
  [
    "WALogger",
    "WAWebButton.react",
    "WAWebChat.react",
    "WAWebDebugCommandSuggestions.react",
    "WAWebEmojiPickerPlugin",
    "WAWebMentionPickerPlugin",
    "WAWebQuickReplyGatingUtils",
    "WAWebQuickReplySuggestions.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputContentEditable.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebShowroomUtils",
    "WAWebSuggestionsPanelContainer.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
    "useWAWebCheckbox",
    "useWAWebSelect",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useEffect,
      h = f.useRef,
      y = f.useState,
      C = {
        container: {
          position: "x1n2onr6",
          marginInlineEnd: "x1xegmmw",
          marginBottom: "x1e56ztr",
          marginInlineStart: "x13fj5qh",
          marginTop: "x7iklje",
          $$css: !0,
        },
        inputContainer: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          marginBottom: "xod5an3",
          $$css: !0,
        },
        input: { zIndex: "xhtitgo", backgroundColor: "xk7ee7b", $$css: !0 },
        fontSize13: { fontSize: "x1nxh6w3", $$css: !0 },
        fontSize17: { fontSize: "x1lkfr7t", $$css: !0 },
        fontSize19: { fontSize: "xlm9qay", $$css: !0 },
        fontSize21: { fontSize: "x1n34360", $$css: !0 },
        fontSize23: { fontSize: "xwudbvs", $$css: !0 },
        fontSize25: { fontSize: "x1r90a5f", $$css: !0 },
        marginAll8: {
          marginTop: "x1380le5",
          marginInlineEnd: "xqf2s3x",
          marginBottom: "xefnzgg",
          marginInlineStart: "x150mmf0",
          $$css: !0,
        },
      },
      b = [
        "fontSize13",
        "fontSize17",
        "fontSize19",
        "fontSize21",
        "fontSize23",
        "fontSize25",
      ],
      v = o("WAWebShowroomUtils").getRandomGroup();
    function S(e) {
      o("WAWebToastManager").ToastManager.open(
        _.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function R() {
      var e,
        t = o("react-compiler-runtime").c(71),
        n = y(),
        a = n[0],
        i = n[1],
        l = (e = o("useWAWebCheckbox")).useCheckBox("Read only", !1),
        s = l[0],
        u = l[1],
        c = e.useCheckBox("Spell check", !1),
        d = c[0],
        m = c[1],
        p = e.useCheckBox("Multiline", !0),
        f = p[0],
        h = p[1],
        S = e.useCheckBox("Max Length (10)", !1),
        R = S[0],
        P = S[1],
        M = e.useCheckBox("Line Wrap (true by default)", !0),
        w = M[0],
        F = M[1],
        O = e.useCheckBox("Show placeholder", !0),
        B = O[0],
        W = O[1],
        q = e.useCheckBox("Show title", !0),
        U = q[0],
        V = q[1],
        H = A(),
        G = H.formatCheckBoxes,
        z = H.formatOptions,
        j,
        K;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = [
            13,
            o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE,
            17,
            19,
            21,
            23,
            25,
          ]),
          (K = { defaultSelectedIndex: 1, onChange: N }),
          (t[0] = j),
          (t[1] = K))
        : ((j = t[0]), (K = t[1]));
      var Q = o("useWAWebSelect").useSelect("Font size", j, K),
        X = Q[0],
        Y = Q[1],
        J,
        Z;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = [3, 4, 5, 6, 7, 8]),
          (Z = { defaultSelectedIndex: 2 }),
          (t[2] = J),
          (t[3] = Z))
        : ((J = t[2]), (Z = t[3]));
      var ee = o("useWAWebSelect").useSelect(
          "Max Visible Lines (default 5)",
          J,
          Z,
        ),
        te = ee[0],
        ne = ee[1],
        re = o("useWAWebCheckbox").useCheckBox("Focus on mount", !1),
        oe = re[0],
        ae = re[1],
        ie = o("useWAWebCheckbox").useCheckBox(
          "Select on mount (will also focus the input)",
          !1,
        ),
        le = ie[0],
        se = ie[1],
        ue = o("useWAWebCheckbox").useCheckBox("Set initial text", !1, le),
        ce = ue[0],
        de = ue[1],
        me = o("useWAWebCheckbox").useCheckBox("Paste from HTML", !1),
        pe = me[0],
        _e = me[1],
        fe = String(ce) + "-" + String(oe) + "-" + String(le),
        ge;
      if (
        (t[4] !== fe ? ((ge = [fe]), (t[4] = fe), (t[5] = ge)) : (ge = t[5]),
        g($, ge),
        !v)
      ) {
        var he;
        return (
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((he = _.jsx("span", { children: "No groups found" })),
              (t[6] = he))
            : (he = t[6]),
          he
        );
      }
      var ye = a == null ? void 0 : a.editor,
        Ce = b.find(function (e) {
          return e === "fontSize" + String(X);
        }),
        be = x,
        ve = D,
        Se = T,
        Re = I,
        Le = k,
        Ee = E,
        ke = L,
        Ie;
      t[7] !== a
        ? ((Ie = function (t, n) {
            setTimeout(function () {
              return a == null ? void 0 : a.setTextContent(t);
            }, n);
          }),
          (t[7] = a),
          (t[8] = Ie))
        : (Ie = t[8]);
      var Te = Ie,
        De,
        xe;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = { className: "x1n2onr6 x1xegmmw x1e56ztr x13fj5qh x7iklje" }),
          (xe = {
            className:
              "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xod5an3",
          }),
          (t[9] = De),
          (t[10] = xe))
        : ((De = t[9]), (xe = t[10]));
      var $e = Ce != null ? C[Ce] : void 0,
        Pe = ce || le ? "Sample text \u2764\uFE0F *bold*" : void 0,
        Ne = B ? "Type a message" : void 0,
        Me = U ? "Type a message" : void 0,
        we = R ? 10 : void 0,
        Ae = te != null ? te : 5,
        Fe;
      t[11] !== z
        ? ((Fe = _.jsx(
            r("WAWebRichTextInputPlugins.react"),
            babelHelpers.extends(
              { groupMetadata: v.groupMetadata, textFormatEnabled: !0 },
              z,
            ),
          )),
          (t[11] = z),
          (t[12] = Fe))
        : (Fe = t[12]);
      var Oe, Be;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = _.jsx(r("WAWebEmojiPickerPlugin"), {})),
          (Be = _.jsx(r("WAWebMentionPickerPlugin"), {
            chat: v,
            source: "chat-composer",
          })),
          (t[13] = Oe),
          (t[14] = Be))
        : ((Oe = t[13]), (Be = t[14]));
      var We;
      t[15] !== oe ||
      t[16] !== fe ||
      t[17] !== w ||
      t[18] !== f ||
      t[19] !== pe ||
      t[20] !== s ||
      t[21] !== le ||
      t[22] !== d ||
      t[23] !== Ne ||
      t[24] !== Me ||
      t[25] !== we ||
      t[26] !== Ae ||
      t[27] !== Fe ||
      t[28] !== $e ||
      t[29] !== Pe
        ? ((We = _.jsxs(
            r("WAWebRichTextInput.react"),
            {
              xstyle: C.input,
              textXstyle: $e,
              ref: i,
              initialText: Pe,
              readOnly: s,
              spellCheck: d,
              multiline: f,
              lineWrap: w,
              placeholder: Ne,
              title: Me,
              showDebugPanel: !0,
              maxLength: we,
              maxVisibleLines: Ae,
              focusOnMount: oe,
              selectOnMount: le,
              pasteFromHTML: pe,
              onChange: be,
              onFiles: Le,
              onTextPaste: Ee,
              onMaxPasteExceeded: ke,
              onEnter: Re,
              onBlur: ve,
              onFocus: Se,
              children: [Fe, Oe, Be],
            },
            fe,
          )),
          (t[15] = oe),
          (t[16] = fe),
          (t[17] = w),
          (t[18] = f),
          (t[19] = pe),
          (t[20] = s),
          (t[21] = le),
          (t[22] = d),
          (t[23] = Ne),
          (t[24] = Me),
          (t[25] = we),
          (t[26] = Ae),
          (t[27] = Fe),
          (t[28] = $e),
          (t[29] = Pe),
          (t[30] = We))
        : (We = t[30]);
      var qe;
      t[31] !== ye
        ? ((qe =
            ye &&
            _.jsxs(_.Fragment, {
              children: [
                o("WAWebQuickReplyGatingUtils").canSendQuickReply() &&
                  _.jsx(r("WAWebQuickReplySuggestions.react"), {
                    kind: o("WAWebSuggestionsPanelContainer.react")
                      .SuggestionsPanelKind.ComposeBox,
                    editor: ye,
                  }),
                _.jsx(r("WAWebDebugCommandSuggestions.react"), {
                  kind: o("WAWebSuggestionsPanelContainer.react")
                    .SuggestionsPanelKind.ComposeBox,
                  editor: ye,
                }),
              ],
            })),
          (t[31] = ye),
          (t[32] = qe))
        : (qe = t[32]);
      var Ue;
      t[33] !== We || t[34] !== qe
        ? ((Ue = _.jsxs(
            "div",
            babelHelpers.extends({}, xe, { children: [We, qe] }),
          )),
          (t[33] = We),
          (t[34] = qe),
          (t[35] = Ue))
        : (Ue = t[35]);
      var Ve, He, Ge;
      t[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = _.jsx("h2", { children: "Test group for mentions" })),
          (He = _.jsx(o("WAWebChat.react").Chat, {
            chat: v,
            noContext: !0,
            mode: "INFO",
          })),
          (Ge = _.jsx("h2", { children: "Options" })),
          (t[36] = Ve),
          (t[37] = He),
          (t[38] = Ge))
        : ((Ve = t[36]), (He = t[37]), (Ge = t[38]));
      var ze;
      t[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((ze = _.jsx("h2", { children: "Text Format Options" })),
          (t[39] = ze))
        : (ze = t[39]);
      var je;
      t[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((je = _.jsx("h2", { children: "Ref APIs" })), (t[40] = je))
        : (je = t[40]);
      var Ke;
      t[41] !== Te
        ? ((Ke = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: function () {
              return Te("Hello *World*!\nLine 2\nLine 3");
            },
            children: "Set text via 'inputRef.setTextContent'",
          })),
          (t[41] = Te),
          (t[42] = Ke))
        : (Ke = t[42]);
      var Qe;
      t[43] !== Te
        ? ((Qe = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: function () {
              return Te("Hello *World*!\nLine 2\nLine 3", 5e3);
            },
            children: "Set text via 'inputRef.setTextContent' (5s delay)",
          })),
          (t[43] = Te),
          (t[44] = Qe))
        : (Qe = t[44]);
      var Xe;
      t[45] !== Te
        ? ((Xe = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: function () {
              return Te("");
            },
            children: "Clear text via 'inputRef.setTextContent'",
          })),
          (t[45] = Te),
          (t[46] = Xe))
        : (Xe = t[46]);
      var Ye;
      t[47] !== Te
        ? ((Ye = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: function () {
              return Te("", 5e3);
            },
            children: "Clear text via 'inputRef.setTextContent' (5s delay)",
          })),
          (t[47] = Te),
          (t[48] = Ye))
        : (Ye = t[48]);
      var Je;
      t[49] !== Ke || t[50] !== Qe || t[51] !== Xe || t[52] !== Ye
        ? ((Je = _.jsx("div", {
            children: _.jsxs(o("WAWebButton.react").ButtonGroup, {
              direction: "vertical",
              children: [Ke, Qe, Xe, Ye],
            }),
          })),
          (t[49] = Ke),
          (t[50] = Qe),
          (t[51] = Xe),
          (t[52] = Ye),
          (t[53] = Je))
        : (Je = t[53]);
      var Ze;
      return (
        t[54] !== ae ||
        t[55] !== Y ||
        t[56] !== G ||
        t[57] !== de ||
        t[58] !== F ||
        t[59] !== P ||
        t[60] !== ne ||
        t[61] !== h ||
        t[62] !== _e ||
        t[63] !== W ||
        t[64] !== u ||
        t[65] !== se ||
        t[66] !== m ||
        t[67] !== Ue ||
        t[68] !== Je ||
        t[69] !== V
          ? ((Ze = _.jsxs(
              "div",
              babelHelpers.extends({}, De, {
                children: [
                  Ue,
                  Ve,
                  He,
                  Ge,
                  u,
                  W,
                  V,
                  m,
                  h,
                  F,
                  P,
                  de,
                  ae,
                  se,
                  _e,
                  Y,
                  ne,
                  ze,
                  G,
                  je,
                  Je,
                ],
              }),
            )),
            (t[54] = ae),
            (t[55] = Y),
            (t[56] = G),
            (t[57] = de),
            (t[58] = F),
            (t[59] = P),
            (t[60] = ne),
            (t[61] = h),
            (t[62] = _e),
            (t[63] = W),
            (t[64] = u),
            (t[65] = se),
            (t[66] = m),
            (t[67] = Ue),
            (t[68] = Je),
            (t[69] = V),
            (t[70] = Ze))
          : (Ze = t[70]),
        Ze
      );
    }
    function L() {
      S("onMaxPasteExceeded triggered");
    }
    function E(t) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[rich-text-input] onTextPaste",
            ])),
        ),
        S("onTextPaste triggered (see console for output)"),
        !1
      );
    }
    function k(e) {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[rich-text-input] onFiles",
          ])),
      ),
        S("onFiles triggered (see console for output)"));
    }
    function I(e) {
      (S("onEnter triggered"),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[rich-text-input] onEnter",
            ])),
        ));
    }
    function T() {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[rich-text-input] onFocus",
          ])),
      );
    }
    function D() {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[rich-text-input] onBlur",
          ])),
      );
    }
    function x(e, t) {
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[rich-text-input] onChange",
          ])),
      );
    }
    function $() {
      return P;
    }
    function P() {
      return S("Input is forced re-rendered.");
    }
    function N(e) {
      e < o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE &&
        S(
          "Using a font size smaller than " +
            o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE +
            " is not supported. This is for testing purpose only.",
        );
    }
    function M() {
      var e = A(),
        t = e.formatCheckBoxes,
        n = e.formatOptions,
        o = h(
          "\n*Text formats*\n\n*bold* _italic_ ~strikethrough~ ```code```\n\nNested formats\n_~*nested*~_\n~crossed *bold* _italic_~\n*bold ~crossed~*\n_italic ~crossed~ *bold*_\n\nEmojis\n\u2764\uFE0F\uD83D\uDC9A\n\n\n*Code Block*\n\n```\nconst enabled = true;\n*bold* _italic_ ~strikethrough~\n`inline code`\n> Quoted message\n```\n\n\n*Bulleted List*\n\n* Item with plaintext\n* Item with emojis \u2764\uFE0F\uD83D\uDC9A\n* *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n* ```Entire item inside a code block```\n\n* Item before\n* Item ends with code block ```\n* Item 1 inside code block\n* Item 2 inside code block```\n* Item after\n\n* Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Hyphen List*\n\n- Item with plaintext\n- Item with emojis \u2764\uFE0F\uD83D\uDC9A\n- *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n- ```Entire item inside a code block```\n\n- Item before\n- Item ends with code block ```\n- Item 1 inside code block\n- Item 2 inside code block```\n- Item after\n\n- Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Numbered List*\n\n1. Item with plaintext\n2. Item with emojis \u2764\uFE0F\uD83D\uDC9A\n3. Item with link https://whatsapp.com/\n4. *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n5. ```Entire item inside a code block```\n15. Item starting with a non-sequential number\n\n1. Item before\n2. Item ends with code block ```\n3. Item 1 inside code block\n4. Item 2 inside code block```\n5. Item after\n\n1. Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Inline Code*\n\nWhat is `const var = '123'`?\nExplain `const name = \"world\"; const fun = () => { console.log('Hello'); }`\n\n\n*Block Quote*\n\n> Quoted message 1\n> *bold* _italic_ ~strikethrough~ `inline code` ```block code```\n> Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog word\n> Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna.\n\n> Quote ends with code block ```code\n```\n  ",
        );
      return _.jsxs("div", {
        className: "x1380le5 xqf2s3x xefnzgg x150mmf0",
        children: [
          _.jsx("div", {
            className:
              "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xod5an3",
            children: _.jsx(r("WAWebRichTextInput.react"), {
              xstyle: C.input,
              initialText: o.current,
              multiline: !0,
              showDebugPanel: !0,
              onChange: function (t) {
                var e = t.text;
                o.current = e;
              },
              children: _.jsx(
                r("WAWebRichTextInputPlugins.react"),
                babelHelpers.extends({ textFormatEnabled: !0 }, n),
              ),
            }),
          }),
          _.jsx("h2", { children: "Text Format Options" }),
          t,
        ],
      });
    }
    M.displayName = M.name + " [from " + i.id + "]";
    var w = {
      storyName: "WAWebRichTextInput",
      component: R,
      description:
        "\n    New rich text input based on Facebook's Lexical Editor.\n  ",
      examples: [
        {
          title: "RichTextInput",
          description:
            "\n        Supported plugins\n        - mentions\n        - emojis\n        - text format\n        - quick replies\n      ",
          example: function () {
            return _.jsx(R, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "RichTextInput",
          description: "\n        With initial text\n      ",
          example: function () {
            return _.jsx(M, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
      ],
    };
    function A() {
      var e,
        t = o("react-compiler-runtime").c(17),
        n = (e = o("useWAWebCheckbox")).useCheckBox("Enable bullet points", !0),
        r = n[0],
        a = n[1],
        i = e.useCheckBox("Enable numbered list", !0),
        l = i[0],
        s = i[1],
        u = e.useCheckBox("Enable inline code", !0),
        c = u[0],
        d = u[1],
        m = e.useCheckBox("Enable block quote", !0),
        p = m[0],
        f = m[1],
        g = e.useCheckBox("Enable text format shortcuts", !0),
        h = g[0],
        y = g[1],
        C = e.useCheckBox("Enable floating toolbar", !0),
        b = C[0],
        v = C[1],
        S;
      t[0] !== p ||
      t[1] !== r ||
      t[2] !== b ||
      t[3] !== c ||
      t[4] !== l ||
      t[5] !== h
        ? ((S = {
            bulletPointsEnabled: r,
            numberedListEnabled: l,
            inlineCodeEnabled: c,
            blockQuoteEnabled: p,
            textFormatShortcutsEnabled: h,
            floatingToolbarEnabled: b,
          }),
          (t[0] = p),
          (t[1] = r),
          (t[2] = b),
          (t[3] = c),
          (t[4] = l),
          (t[5] = h),
          (t[6] = S))
        : (S = t[6]);
      var R;
      t[7] !== f ||
      t[8] !== a ||
      t[9] !== v ||
      t[10] !== d ||
      t[11] !== s ||
      t[12] !== y
        ? ((R = _.jsxs(_.Fragment, { children: [a, s, d, f, y, v] })),
          (t[7] = f),
          (t[8] = a),
          (t[9] = v),
          (t[10] = d),
          (t[11] = s),
          (t[12] = y),
          (t[13] = R))
        : (R = t[13]);
      var L;
      return (
        t[14] !== S || t[15] !== R
          ? ((L = { formatOptions: S, formatCheckBoxes: R }),
            (t[14] = S),
            (t[15] = R),
            (t[16] = L))
          : (L = t[16]),
        L
      );
    }
    l.default = w;
  },
  98,
);
