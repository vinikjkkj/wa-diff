__d(
  "WAWebWDSRichTextFieldWithPlugins.story",
  [
    "fbt",
    "WALogger",
    "WAWebBidiParagraphNode",
    "WAWebDelimiterNode",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebMentionNode",
    "WAWebMultilinePlugin",
    "WAWebNonJidMentionNode",
    "WAWebQuoteLineNode",
    "WAWebRichTextField.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebShowroomStory.react",
    "WAWebShowroomUtils",
    "WAWebWDSRichTextField.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCheckbox",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(e) {}
    function p(e) {
      return e ? s._(/*BTDS*/ "Hide password") : s._(/*BTDS*/ "Show password");
    }
    var _ = [
        o("WAWebMentionNode").MentionNode,
        o("WAWebListBulletNode").ListBulletNode,
        o("WAWebListNumberNode").ListNumberNode,
        o("WAWebQuoteLineNode").QuoteLineNode,
        o("WAWebBidiParagraphNode").BidiParagraphNode,
        o("WAWebDelimiterNode").DelimiterNode,
        o("WAWebNonJidMentionNode").NonJidMentionNode,
      ],
      f =
        "*Bold text* _italic_ ~strikethrough~\n\n* Bullet point 1\n* Bullet point 2\n* Bullet point 3\n\n1. Numbered item 1\n2. Numbered item 2\n3. Numbered item 3\n\n> Block quote text\n> Second line of quote\n\nInline code: `const x = 42;`\n\n```\nfunction hello() {\n  return 'world';\n}\n```";
    function g() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "xyamay9 xv54qhq x1l90r2v xf7dkkf" }), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: c.jsxs(r("WAWebWDSRichTextField.react"), {
                  label: "Type a message",
                  placeholder: "Type a message",
                  rows: 6,
                  nodes: _,
                  testid: "showroom_wds_rtf_all_formatting_textfield",
                  emoji: { display: !0, keyboardShortcut: !0 },
                  children: [
                    c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
                      multiline: !0,
                    }),
                    c.jsx(r("WAWebRichTextInputPlugins.react"), {
                      textFormatEnabled: !0,
                      bulletPointsEnabled: !0,
                      numberedListEnabled: !0,
                      blockQuoteEnabled: !0,
                      inlineCodeEnabled: !0,
                    }),
                  ],
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "xyamay9 xv54qhq x1l90r2v xf7dkkf" }), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: c.jsxs(r("WAWebWDSRichTextField.react"), {
                  label: "Pre-populated content",
                  placeholder: "Pre-populated content",
                  initialText: f,
                  rows: 12,
                  maxCharacterCount: 500,
                  nodes: _,
                  testid: "showroom_wds_rtf_pre_populated_textfield",
                  emoji: { display: !0, keyboardShortcut: !0 },
                  children: [
                    c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
                      multiline: !0,
                    }),
                    c.jsx(r("WAWebRichTextInputPlugins.react"), {
                      textFormatEnabled: !0,
                      bulletPointsEnabled: !0,
                      numberedListEnabled: !0,
                      blockQuoteEnabled: !0,
                      inlineCodeEnabled: !0,
                    }),
                  ],
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function y() {
      var e,
        t = o("react-compiler-runtime").c(17),
        n = (e = o("useWAWebCheckbox")).useCheckBox("Enable bullet points", !0),
        a = n[0],
        i = n[1],
        l = e.useCheckBox("Enable numbered lists", !0),
        s = l[0],
        u = l[1],
        d = e.useCheckBox("Enable block quotes", !0),
        m = d[0],
        p = d[1],
        f = e.useCheckBox("Enable text formatting", !0),
        g = f[0],
        h = f[1],
        y = e.useCheckBox("Enable inline code", !0),
        C = y[0],
        b = y[1],
        v;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "xyamay9 xv54qhq x1l90r2v xf7dkkf" }), (t[0] = v))
        : (v = t[0]);
      var S, R;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { display: !0, keyboardShortcut: !0 }),
          (R = c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
            multiline: !0,
          })),
          (t[1] = S),
          (t[2] = R))
        : ((S = t[1]), (R = t[2]));
      var L;
      t[3] !== m || t[4] !== a || t[5] !== C || t[6] !== s || t[7] !== g
        ? ((L = c.jsxs(r("WAWebWDSRichTextField.react"), {
            label: "Type a message",
            placeholder: "Type a message",
            rows: 6,
            nodes: _,
            testid: "showroom_wds_rtf_configurable_textfield",
            emoji: S,
            children: [
              R,
              c.jsx(r("WAWebRichTextInputPlugins.react"), {
                textFormatEnabled: g,
                bulletPointsEnabled: a,
                numberedListEnabled: s,
                blockQuoteEnabled: m,
                inlineCodeEnabled: C,
              }),
            ],
          })),
          (t[3] = m),
          (t[4] = a),
          (t[5] = C),
          (t[6] = s),
          (t[7] = g),
          (t[8] = L))
        : (L = t[8]);
      var E;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = c.jsx("h2", { children: "Formatting Options" })), (t[9] = E))
        : (E = t[9]);
      var k;
      return (
        t[10] !== p ||
        t[11] !== i ||
        t[12] !== b ||
        t[13] !== u ||
        t[14] !== L ||
        t[15] !== h
          ? ((k = c.jsxs(
              "div",
              babelHelpers.extends({}, v, { children: [L, E, h, i, u, p, b] }),
            )),
            (t[10] = p),
            (t[11] = i),
            (t[12] = b),
            (t[13] = u),
            (t[14] = L),
            (t[15] = h),
            (t[16] = k))
          : (k = t[16]),
        k
      );
    }
    function C() {
      var t = o("react-compiler-runtime").c(4),
        n = d(""),
        r = n[0],
        a = n[1],
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (n, r) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[auto-migration-example] onChange",
                ])),
            ),
              a(n.text));
          }),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        s;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { className: "xyamay9 xv54qhq x1l90r2v xf7dkkf" }), (t[1] = s))
        : (s = t[1]);
      var u;
      return (
        t[2] !== r
          ? ((u = c.jsx(
              "div",
              babelHelpers.extends({}, s, {
                children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
                  title: "Auto-migrated RichTextField",
                  value: r,
                  onChange: l,
                  textFormatEnabled: !0,
                  bulletPointsEnabled: !0,
                  numberedListEnabled: !0,
                  blockQuoteEnabled: !0,
                  multiline: !0,
                  emojiBtnPosition: "side",
                }),
              }),
            )),
            (t[2] = r),
            (t[3] = u))
          : (u = t[3]),
        u
      );
    }
    function b() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "xyamay9 xv54qhq x1l90r2v xf7dkkf" }), (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebMentionNode").MentionNode,
            o("WAWebListBulletNode").ListBulletNode,
            o("WAWebListNumberNode").ListNumberNode,
            o("WAWebQuoteLineNode").QuoteLineNode,
            o("WAWebBidiParagraphNode").BidiParagraphNode,
            o("WAWebDelimiterNode").DelimiterNode,
            o("WAWebNonJidMentionNode").NonJidMentionNode,
          ]),
          (e[1] = n))
        : (n = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = c.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: c.jsxs(r("WAWebWDSRichTextField.react"), {
                  label: "Type a message",
                  placeholder: "Type a message",
                  rows: 3,
                  nodes: n,
                  testid: "showroom_wds_rtf_emoji_picker",
                  emoji: {
                    picker: { ariaLabel: s._(/*BTDS*/ "Open emoji picker") },
                    keyboardShortcut: !0,
                  },
                  children: [
                    c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
                      multiline: !0,
                    }),
                    c.jsx(r("WAWebRichTextInputPlugins.react"), {
                      textFormatEnabled: !0,
                      bulletPointsEnabled: !0,
                      numberedListEnabled: !0,
                      blockQuoteEnabled: !0,
                      inlineCodeEnabled: !0,
                    }),
                  ],
                }),
              }),
            )),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    var v = {
      storyName: "WAWebWDSRichTextFieldWithPlugins",
      section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
      component: g,
      description:
        "Tests WAWebWDSRichTextField used with WAWebRichTextInputPlugins and BidiParagraphNode \u2014 the WAWeb wrapper pattern for WDS rich text fields. Verifies that BidiParagraphNode is registered as a ParagraphNode replacement (needed for bullet points, numbered lists, and block quotes) and that LineBreakNodes are handled correctly by the text format preview plugin.",
      examples: [
        {
          title: "All Formatting Features",
          description:
            "WAWebWDSRichTextField with all formatting enabled. Type bullet points (*, -), numbered lists (1.), block quotes (>), and press Enter for newlines. Previously crashed with getTargetIndent (missing BidiParagraphNode replacement) and setFormat (missing $isTextNode guards for LineBreakNode).",
          example: function () {
            return c.jsx(g, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "Pre-populated Rich Text",
          description:
            "WAWebWDSRichTextField initialized with formatted text including bold, italic, bullet points, numbered lists, block quotes, and a maxCount character counter.",
          example: function () {
            return c.jsx(h, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "Configurable Formatting",
          description:
            "WAWebWDSRichTextField with toggleable formatting options to test individual feature combinations.",
          example: function () {
            return c.jsx(y, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "Arabic Text Formatting",
          description:
            "WAWebWDSRichTextField example focused on Arabic (RTL) text input to verify formatting behavior with right-to-left content.",
          example: function () {
            return c.jsx("div", {
              className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
              children: c.jsxs(r("WAWebWDSRichTextField.react"), {
                label:
                  "\u0627\u0643\u062A\u0628 \u0631\u0633\u0627\u0644\u0629",
                placeholder:
                  "\u0627\u0643\u062A\u0628 \u0631\u0633\u0627\u0644\u0629",
                initialText:
                  "\u0647\u0630\u0627 \u0646\u0635 \u0639\u0631\u0628\u064A \u0644\u0644\u062A\u062C\u0631\u0628\u0629\nsome english on this line\n* \u0646\u0642\u0637\u0629 \u0623\u0648\u0644\u0649\n1. \u0639\u0646\u0635\u0631 \u0645\u0631\u0642\u0645\n> \u0627\u0642\u062A\u0628\u0627\u0633",
                rows: 8,
                nodes: _,
                testid: "showroom_wds_rtf_arabic_text_textfield",
                emoji: { display: !0, keyboardShortcut: !0 },
                children: [
                  c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
                    multiline: !0,
                  }),
                  c.jsx(r("WAWebRichTextInputPlugins.react"), {
                    textFormatEnabled: !0,
                    bulletPointsEnabled: !0,
                    numberedListEnabled: !0,
                    blockQuoteEnabled: !0,
                    inlineCodeEnabled: !0,
                  }),
                ],
              }),
            });
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "Password Input",
          description:
            'WAWebWDSRichTextField with type="password" to mask text input with bullets. Uses -webkit-text-security: disc for masking. Intended for plain-text use only (no rich text plugins).',
          example: function () {
            return c.jsx("div", {
              className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
              children: c.jsx(r("WAWebWDSRichTextField.react"), {
                label: "Enter password",
                placeholder: "Enter password",
                type: "password",
                testid: "password-example",
                passwordVisibilityToggled: m,
                visibilityToggleButtonAriaLabel: p,
              }),
            });
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "Emoji Picker Prop",
          description:
            "WAWebWDSRichTextField with the declarative emoji picker prop \u2014 renders a dedicated mood icon button at the far right of the field and inserts selected emoji into the editor.",
          example: function () {
            return c.jsx(b, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "Auto-Migration via WAWebRichTextField",
          description:
            "Uses WAWebRichTextField (RichTextField) which auto-migrates to WDSRichTextField when the wds_web_rich_text_field ABProp is enabled. Tests the full migration path with formatting features.",
          example: function () {
            return c.jsx(C, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
      ],
    };
    l.default = v;
  },
  226,
);
