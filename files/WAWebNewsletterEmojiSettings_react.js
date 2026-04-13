__d(
  "WAWebNewsletterEmojiSettings.react",
  [
    "fbt",
    "WAWebCommonNewsletterEnums",
    "WAWebDefaultReactions",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebRadio.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { title: { color: "xhslqc4", $$css: !0 } };
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx("span", {
              children: o("WAWebDefaultReactions").DEFAULT_REACTIONS.map(p),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p(t, n) {
      var a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t),
        i =
          n + 1 === o("WAWebDefaultReactions").DEFAULT_REACTIONS.length
            ? o("WAWebUISpacing").uiMargin.end0
            : o("WAWebUISpacing").uiMargin.end4;
      return a != null
        ? c.createElement(
            "span",
            babelHelpers.extends({}, (e || (e = r("stylex"))).props(i), {
              key: "newsletter-emoji-container-" + n,
            }),
            c.jsx(
              r("WAWebEmoji.react"),
              { emoji: a, size: "small", element: "span" },
              "newsletter-emoji-" + n,
            ),
          )
        : null;
    }
    var _ = [
      {
        getLabel: function () {
          return s._(/*BTDS*/ "Any emoji");
        },
        value: o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .All,
      },
      {
        getLabel: function () {
          return s._(/*BTDS*/ "Default only ({reaction-emojis})", [
            s._param("reaction-emojis", c.jsx(m, {})),
          ]);
        },
        value: o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .Basic,
      },
      {
        getLabel: function () {
          return s._(/*BTDS*/ "None");
        },
        value: o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .None,
      },
    ];
    function f(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.currentlySelected,
        i = t.onClick,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                d.title,
                o("WAWebUISpacing").uiMargin.bottom15,
              ]),
              { children: s._(/*BTDS*/ "Which reactions can followers send") },
            ),
          )),
          (n[0] = l))
        : (l = n[0]);
      var u = l,
        m = a,
        p;
      n[1] !== i
        ? ((p = _.map(function (e) {
            return {
              value: e.value,
              label: e.getLabel(),
              onChange: i,
              testid: "newsletter-emoji-setting-" + e.value,
            };
          })),
          (n[1] = i),
          (n[2] = p))
        : (p = n[2]);
      var f;
      return (
        n[3] !== i || n[4] !== m || n[5] !== p
          ? ((f = c.jsxs(c.Fragment, {
              children: [
                u,
                c.jsx(o("WAWebRadio.react").RadioGroup, {
                  name: "newsletter-reaction-codes-setting",
                  checkedValue: m,
                  theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
                  onChange: i,
                  options: p,
                }),
              ],
            })),
            (n[3] = i),
            (n[4] = m),
            (n[5] = p),
            (n[6] = f))
          : (f = n[6]),
        f
      );
    }
    l.default = f;
  },
  226,
);
