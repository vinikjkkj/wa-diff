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
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { title: { color: "xhslqc4", $$css: !0 } };
    function m() {
      return c.jsx("span", {
        children: o("WAWebDefaultReactions").DEFAULT_REACTIONS.map(
          function (t, n) {
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
          },
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = [
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
    function _(t) {
      var n = t.currentlySelected,
        a = t.onClick,
        i = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              d.title,
              o("WAWebUISpacing").uiMargin.bottom15,
            ]),
            { children: s._(/*BTDS*/ "Which reactions can followers send") },
          ),
        );
      return c.jsxs(c.Fragment, {
        children: [
          i,
          c.jsx(o("WAWebRadio.react").RadioGroup, {
            name: "newsletter-reaction-codes-setting",
            checkedValue: n,
            theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
            onChange: a,
            options: p.map(function (e) {
              return {
                value: e.value,
                label: e.getLabel(),
                onChange: a,
                testid: "newsletter-emoji-setting-" + e.value,
              };
            }),
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
