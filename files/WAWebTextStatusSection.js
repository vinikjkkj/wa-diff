__d(
  "WAWebTextStatusSection",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAboutPrompts",
    "WAWebAboutWamLogger",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebDrawerSection.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebPencilIcon.react",
    "WAWebText.react",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WDSIconIcMood.react",
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
      m = {
        editIconUnset: { color: "xhslqc4", fill: "xvt3oi1", $$css: !0 },
        editIconSet: { color: "xhslqc4", fill: "xvt3oi1", $$css: !0 },
        moodIcon: { color: "x1v5yvga", $$css: !0 },
      };
    function p(t) {
      var n = t.promptKey,
        a = o("WAWebUserPrefsMeUser").getMeUser(),
        i = o("WAWebContactCollection").ContactCollection.assertGet(a);
      r("useWAWebTextStatus")({ contact: i });
      var l = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled(),
        u = d(function () {
          return o("WAWebAboutPrompts").getRandomAboutPromptKey();
        }),
        p = u[0],
        _ = n != null ? n : p,
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
        L = o("WAWebTextStatusUtils").hasTextStatusSet(C, b, v, S, R);
      if (
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        !i ||
        (!o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() && !L)
      )
        return null;
      if (v === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED)
        h = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(o("WAWebUISpacing").uiPadding.end5),
            { children: s._(/*BTDS*/ "Loading...") },
          ),
        );
      else if (!L)
        ((g = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(o("WAWebUISpacing").uiPadding.end10),
            {
              children: c.jsx(r("WDSIconIcMood.react"), { xstyle: m.moodIcon }),
            },
          ),
        )),
          (h = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              e.props(o("WAWebUISpacing").uiPadding.end5),
              { children: l ? f : s._(/*BTDS*/ "What are you up to?") },
            ),
          )));
      else {
        if (b != null) {
          var E = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(b);
          E != null &&
            (g = c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.end7,
                ),
                {
                  children: c.jsx(
                    r("WAWebEmoji.react"),
                    { emoji: E, size: "small" },
                    "low-res",
                  ),
                },
              ),
            ));
        }
        C &&
          (h = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.end5,
              ),
              { children: C },
            ),
          ));
      }
      var k = c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [g, h],
        }),
        I = s._(/*BTDS*/ "About"),
        T = c.jsx(o("WAWebPencilIcon.react").PencilIcon, {
          directional: !0,
          iconXstyle: L ? m.editIconSet : m.editIconUnset,
        }),
        D = function () {
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
        x =
          o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
          v !== o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED
            ? c.jsx(r("WAWebUnstyledButton.react"), {
                "aria-label": s._(
                  /*BTDS*/ "Edit button for text status creation",
                ),
                xstyle: o("WAWebUISpacing").uiMargin.startAuto,
                testid: void 0,
                onClick: D,
                children: T,
              })
            : null;
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
              { "data-testid": void 0 },
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiMargin.start30,
                o("WAWebUISpacing").uiMargin.top4,
                o("WAWebUISpacing").uiMargin.bottom28,
                o("WAWebUISpacing").uiMargin.end20,
              ),
              {
                children: [
                  R !==
                    o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
                    S != null &&
                    c.jsx(o("WAWebText.react").WAWebTextMuted, {
                      as: "span",
                      children: o("WAWebClock").Clock.textStatusExpiryStr(
                        o("WATimeUtils").castToUnixTime(S),
                      ),
                    }),
                  R ===
                    o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
                    c.jsx(o("WAWebText.react").WAWebTextMuted, {
                      as: "span",
                      children: s._(/*BTDS*/ "Until I change it"),
                    }),
                ],
              },
            ),
          ),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
