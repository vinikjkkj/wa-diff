__d(
  "WAWebTextStatusSection",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAboutPrompts",
    "WAWebAboutWamLogger",
    "WAWebBox.react",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebDrawerSection.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusUtils",
    "WAWebUserUtils",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "WDSIconIcMood.react",
    "WDSMargins.stylex",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebTextStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = { marginInlineStart30: { marginInlineStart: "xymharo", $$css: !0 } },
      p = { moodIcon: { color: "x1v5yvga", $$css: !0 } };
    function _(t) {
      var n = t.promptKey,
        a = o("WAWebUserUtils").getMeUserOrThrow(),
        i = o("WAWebContactCollection").ContactCollection.assertGet(a);
      r("useWAWebTextStatus")({ contact: i });
      var l = d(function () {
          return o("WAWebAboutPrompts").getRandomAboutPromptKey();
        }),
        u = l[0],
        _ = n != null ? n : u,
        f = o("WAWebAboutPrompts").getAboutPromptText(_),
        g,
        h,
        y = o("useWAWebContactValues").useContactValues(i.id, [
          o("WAWebFrontendContactGetters").getTextStatusString,
          o("WAWebFrontendContactGetters").getTextStatusEmoji,
          o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
          o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
          o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration,
        ]),
        C = y[0],
        b = y[1],
        v = y[2],
        S = y[3],
        R = y[4],
        L = o("WAWebTextStatusUtils").hasTextStatusSet({
          textStatusEmoji: b,
          textStatusEphemeralDuration: R,
          textStatusExpiryTs: S,
          textStatusLastUpdateTime: v,
          textStatusString: C,
        });
      if (!i) return null;
      if (o("WAWebTextStatusUtils").isTextStatusNotFetched(v))
        h = c.jsx("div", { className: "x1gabggj", children: s._(/*BTDS*/ "") });
      else if (!L)
        ((g = c.jsx("div", {
          className: "x2vl965",
          children: c.jsx(r("WDSIconIcMood.react"), { xstyle: p.moodIcon }),
        })),
          (h = c.jsx("div", { className: "x1gabggj", children: f })));
      else {
        if (b != null) {
          var E = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(b);
          E != null &&
            (g = c.jsx("div", {
              className: "x1bjonze",
              children: c.jsx(
                r("WAWebEmoji.react"),
                { emoji: E, size: "small" },
                "low-res",
              ),
            }));
        }
        C && (h = c.jsx("div", { className: "x1gabggj", children: C }));
      }
      var k = c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          testid: "self_profile_about_content",
          children: [g, h],
        }),
        I = s._(/*BTDS*/ ""),
        T = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(
              o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable,
              {
                entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE
                  .SETTINGS,
                promptKey: L ? null : _,
              },
            ),
          );
        },
        D = s._(/*BTDS*/ ""),
        x = o("WAWebTextStatusUtils").isTextStatusNotFetched(v)
          ? null
          : c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WDSMargins.stylex").wdsMargins.marginStartAuto,
                ),
                {
                  children: c.jsx(r("WDSButton.react"), {
                    testid: "edit_text_status",
                    Icon: r("WDSIconIcEdit.react"),
                    variant: "borderless",
                    onPress: T,
                    "aria-label": D,
                  }),
                },
              ),
            );
      return c.jsxs("div", {
        children: [
          c.jsx(r("WAWebDrawerSection.react"), {
            title: I,
            animation: !1,
            theme: "padding",
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                c.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  children: k,
                }),
                x,
              ],
            }),
          }),
          c.jsxs(
            "div",
            babelHelpers.extends(
              { "data-testid": "text-status-ephemeral" },
              (e || (e = r("stylex"))).props(
                m.marginInlineStart30,
                o("WDSMargins.stylex").wdsMargins.marginTop4,
                o("WDSMargins.stylex").wdsMargins.marginBottom28,
                o("WDSMargins.stylex").wdsMargins.marginEnd20,
              ),
              {
                children: [
                  R !==
                    o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
                    S != null &&
                    c.jsx(r("WAWebBox.react"), {
                      as: "span",
                      children: c.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: o("WAWebClock").Clock.textStatusExpiryStr(
                          o("WATimeUtils").castToUnixTime(S),
                        ),
                      }),
                    }),
                  R ===
                    o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
                    c.jsx(r("WAWebBox.react"), {
                      as: "span",
                      children: c.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: s._(/*BTDS*/ ""),
                      }),
                    }),
                ],
              },
            ),
          ),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
