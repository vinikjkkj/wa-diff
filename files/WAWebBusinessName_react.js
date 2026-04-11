__d(
  "WAWebBusinessName.react",
  [
    "fbt",
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotProfileGetters",
    "WAWebBusinessProfileTypes",
    "WAWebCheckmarkInfoModal.react",
    "WAWebCheckmarkInfoModalLogEvents",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebSupportChatStrings",
    "WAWebUISpacing",
    "WAWebWidFormat",
    "WDSIconWdsIcAiFilled.react",
    "WDSText.react",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        subtitle: {
          color: "xyj2c9f",
          fontSize: "x1jchvi3",
          lineHeight: "x1u7k74",
          $$css: !0,
        },
        botSubtitleDivider: {
          fontWeight: "x117nqv4",
          lineHeight: "x1u7k74",
          color: "x14ug900",
          $$css: !0,
        },
        botIcon: { color: "xhslqc4", $$css: !0 },
        title: { fontSize: "xlm9qay", fontWeight: "x1s688f", $$css: !0 },
      };
    function m(t) {
      var n = t.businessProfile,
        a = t.contact,
        i = o("WAWebBotBaseGating").isBizBot3pEnabled() && n.isBizBot3p,
        l = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          a.id,
          [o("WAWebBotProfileGetters").getIsDefault],
        ),
        u = l[0],
        m,
        p,
        _,
        f = function () {
          o("WAWebMiscGatingUtils").isBlueEducationEnabled() &&
            (o("WAWebCheckmarkInfoModalLogEvents").logClickProfileBadge(a),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebCheckmarkInfoModal.react"), {}),
            ));
        };
      n.customUrl != null &&
        (_ = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              d.subtitle,
              o("WAWebUISpacing").uiMargin.bottom4,
            ]),
            {
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: n.customUrl,
                direction: "auto",
                titlify: !0,
                breakWord: !0,
                inlineblock: !0,
              }),
            },
          ),
        ));
      var g = o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(a),
        h = o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary(a);
      if (o("WAWebContactGetters").getIsMe(a))
        ((m = c.jsx(o("WAWebName.react").Name, {
          contact: a,
          showMessageYourselfName: !0,
          useVerifiedName: !0,
          breakWord: !0,
          selectable: !0,
        })),
          a.name !== a.verifiedName &&
            (p = c.jsx(o("WAWebName.react").Name, {
              contact: a,
              selectable: !0,
            })));
      else {
        var y = o("WAWebFrontendContactGetters").getFormattedUsername(a),
          C = o("WAWebContactGetters").getVerifiedLevel(a),
          b = o("WAWebFrontendContactGetters").getPhoneNumber(a);
        if (
          ((m = c.jsx(o("WAWebName.react").Name, {
            contact: a,
            showBusinessCheckmark: g,
            onClick: g ? f : null,
            makeCheckmarkClickable: g,
            checkmarkLarge: !0,
            breakWord: !0,
            selectable: !0,
          })),
          o("WAWebContactGetters").getIsIAS(a))
        )
          p = c.jsx("div", {
            className: "xyj2c9f x1jchvi3 x1u7k74",
            children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: s._(/*BTDS*/ "Official WhatsApp Account"),
              direction: "auto",
              ellipsify: !0,
              titlify: !0,
              breakWord: !0,
              selectable: !0,
            }),
          });
        else if (o("WAWebContactGetters").getId(a).isBot() || i) {
          var v = o(
              "WAWebFrontendContactGetters",
            ).getShowBiz3pBotVerifiedNameAsSecondary(a),
            S = s._(/*BTDS*/ "AI"),
            R = o("WAWebContactGetters").getId(a).isBot()
              ? c.jsx(r("WDSIconWdsIcAiFilled.react"), {
                  width: 15,
                  height: 15,
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.top2,
                    o("WAWebUISpacing").uiMargin.start2,
                    d.botIcon,
                  ],
                })
              : null;
          (u &&
            ((S = o("WAWebBotFrontendUtils").metaAiLlamaVersionTitleFbs()),
            (R = null)),
            (p = c.jsxs("div", {
              className: "xhslqc4 x1jchvi3 x1u7k74 x78zum5 xl56j7k x1sdyfia",
              children: [
                v &&
                  c.jsxs(c.Fragment, {
                    children: [
                      c.jsx(o("WAWebName.react").Name, {
                        contact: a,
                        showBusinessCheckmark: h,
                        useVerifiedName: !0,
                        breakWord: !0,
                        selectable: !0,
                      }),
                      c.jsx(
                        "span",
                        babelHelpers.extends(
                          {},
                          (e || (e = r("stylex"))).props(
                            d.botSubtitleDivider,
                            h && o("WAWebUISpacing").uiMargin.end8,
                            !h && o("WAWebUISpacing").uiMargin.horiz8,
                          ),
                          { children: "\xB7" },
                        ),
                      ),
                    ],
                  }),
                c.jsxs("div", {
                  className:
                    "xhslqc4 x1jchvi3 x1u7k74 x78zum5 xl56j7k x1sdyfia",
                  children: [S, R],
                }),
              ],
            })));
        } else
          o("WAWebContactGetters").getIsCAPISupportAccount(a)
            ? (p = c.jsx("div", {
                className: "xyj2c9f x1jchvi3 x1u7k74",
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: o("WAWebSupportChatStrings").SupportChatSubtitle(),
                  direction: "auto",
                  ellipsify: !0,
                  titlify: !0,
                  breakWord: !0,
                  selectable: !0,
                }),
              }))
            : !r("isStringNullOrEmpty")(a.name) &&
              !r("isStringNullOrEmpty")(a.verifiedName) &&
              a.name !== a.verifiedName &&
              (p = c.jsx(o("WAWebName.react").Name, {
                contact: a,
                showBusinessCheckmark: h,
                onClick: h ? f : null,
                makeCheckmarkClickable: h,
                useVerifiedName: !0,
                breakWord: !0,
                selectable: !0,
                elevatedPushNamesEnabled: !0,
              }));
        if (p == null)
          if (C === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.UNKNOWN)
            r("isStringNullOrEmpty")(a.verifiedName) ||
              (p = c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: a.verifiedName,
              }));
          else {
            var L =
              y != null
                ? y
                : o("WAWebWidFormat").widToFormattedUser(
                    b != null ? b : o("WAWebContactGetters").getId(a),
                  );
            p = c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: L,
            });
          }
      }
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(o("WAWebUISpacing").uiMargin.bottom6),
          {
            children: [
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(d.title, o("WAWebUISpacing").uiMargin.bottom8),
                  { children: m },
                ),
              ),
              p,
              _,
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
