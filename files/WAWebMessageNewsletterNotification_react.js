__d(
  "WAWebMessageNewsletterNotification.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterStrings",
    "WAWebEmojiText.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMessageAdminContextCard.react",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPhoneNumberPrivacyNux.react",
    "WAWebNewsletterPublicChannelPrivacyNux.react",
    "WAWebNewsletterSystemMessageIcon.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        linkColor: { color: "x1bvqhpb", $$css: !0 },
        channelsIcon: {
          display: "x1rg5ohu",
          verticalAlign: "x16dsc37",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.subtype,
        n = e.templateParams;
      switch (t) {
        case "newsletter_created": {
          var r = n[0],
            a = n[1];
          return a === "owner"
            ? o(
                "WAWebCommonNewsletterStrings",
              ).getYouCreatedChannelWithNameText(String(r))
            : s._(/*BTDS*/ 'The channel "{channel_name}" was created', [
                s._param("channel_name", r),
              ]);
        }
        case "newsletter_privacy": {
          var i = n[0];
          return o("WAWebNewsletterModelUtils").isMembershipAdminOrOwner(
            i == null ? void 0 : i.toString(),
          )
            ? s._(
                /*BTDS*/ "This channel is public and visible to anyone, including WhatsApp. There is added privacy for your profile and phone number. Click to learn more.",
              )
            : s._(
                /*BTDS*/ "This channel has added privacy for your profile and phone number. Click to learn more.",
              );
        }
        case "newsletter_deleted": {
          var l = n[0];
          return s._(/*BTDS*/ 'The channel "{newsletter_name}" was deleted', [
            s._param("newsletter_name", l),
          ]);
        }
      }
    }
    function p(e) {
      var t = e.chat,
        n = e.subtype,
        a = e.templateParams;
      switch (n) {
        case "newsletter_privacy": {
          var i = a[0],
            l = o("WAWebNewsletterModelUtils").isMembershipAdminOrOwner(
              i == null ? void 0 : i.toString(),
            )
              ? c.jsx(r("WAWebNewsletterPublicChannelPrivacyNux.react"), {
                  chat: t,
                  userRole: o(
                    "WAWebCommonNewsletterEnums",
                  ).NewsletterMembershipType.cast(
                    i == null ? void 0 : i.toString(),
                  ),
                })
              : c.jsx(r("WAWebNewsletterPhoneNumberPrivacyNux.react"), {});
          return function () {
            o("WAWebModalManager").ModalManager.open(l);
          };
        }
        default:
          return null;
      }
    }
    function _(t) {
      var n,
        a = t.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getSubtype,
          o("WAWebMsgGetters").getTemplateParams,
        ]),
        l = i[0],
        s = i[1],
        u = r("WAWebNewsletterCollection").get(a.id.remote),
        _ = p({ subtype: l, templateParams: s, chat: u }),
        f = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props([
              d.channelsIcon,
              o("WAWebUISpacing").uiMargin.top3,
              o("WAWebUISpacing").uiMargin.end4,
            ]),
            {
              children: c.jsx(
                o("WAWebNewsletterSystemMessageIcon.react")
                  .NewsletterSystemMessageIcon,
                { width: 14, height: 14 },
              ),
            },
          ),
        ),
        g = c.jsx("span", {
          children:
            l === "newsletter_privacy"
              ? c.jsxs(c.Fragment, {
                  children: [
                    f,
                    c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      breakWord: !0,
                      text: m({ subtype: l, templateParams: s }),
                    }),
                  ],
                })
              : c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  breakWord: !0,
                  inlineblock: !0,
                  text: m({ subtype: l, templateParams: s }),
                }),
        }),
        h =
          _ != null
            ? c.jsx(r("WAWebClickableLink.react"), {
                onClick: _,
                xstyle: d.linkColor,
                children: g,
              })
            : g,
        y =
          l === "newsletter_admin_context_card" &&
          u != null &&
          o("WAWebNewsletterGatingUtils").isNewsletterAdminContextCardEnabled(
            (n = o("WAWebStateUtils").unproxy(u).newsletterMetadata) == null
              ? void 0
              : n.membershipType,
          )
            ? c.jsx(r("WAWebNewsletterMessageAdminContextCard.react"), {
                chat: u,
              })
            : null;
      return c.jsx("div", {
        "data-testid": void 0,
        children: y != null ? y : h,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
