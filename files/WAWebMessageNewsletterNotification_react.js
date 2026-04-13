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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(13),
        a = t.msg,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getTemplateParams,
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebMsgValues").useMsgValues(a.id, i),
        s = l[0],
        u = l[1],
        _,
        f;
      if (n[1] !== a.id.remote || n[2] !== s || n[3] !== u) {
        var g,
          h = r("WAWebNewsletterCollection").get(a.id.remote),
          y = p({ subtype: s, templateParams: u, chat: h }),
          C;
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = c.jsx(
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
            )),
            (n[6] = C))
          : (C = n[6]);
        var b = C,
          v;
        n[7] !== s || n[8] !== u
          ? ((v = c.jsx("span", {
              children:
                s === "newsletter_privacy"
                  ? c.jsxs(c.Fragment, {
                      children: [
                        b,
                        c.jsx(o("WAWebEmojiText.react").EmojiText, {
                          breakWord: !0,
                          text: m({ subtype: s, templateParams: u }),
                        }),
                      ],
                    })
                  : c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      breakWord: !0,
                      inlineblock: !0,
                      text: m({ subtype: s, templateParams: u }),
                    }),
            })),
            (n[7] = s),
            (n[8] = u),
            (n[9] = v))
          : (v = n[9]);
        var S = v;
        ((_ =
          y != null
            ? c.jsx(r("WAWebClickableLink.react"), {
                onClick: y,
                xstyle: d.linkColor,
                children: S,
              })
            : S),
          (f =
            s === "newsletter_admin_context_card" &&
            h != null &&
            o("WAWebNewsletterGatingUtils").isNewsletterAdminContextCardEnabled(
              (g = o("WAWebStateUtils").unproxy(h).newsletterMetadata) == null
                ? void 0
                : g.membershipType,
            )
              ? c.jsx(r("WAWebNewsletterMessageAdminContextCard.react"), {
                  chat: h,
                })
              : null),
          (n[1] = a.id.remote),
          (n[2] = s),
          (n[3] = u),
          (n[4] = _),
          (n[5] = f));
      } else ((_ = n[4]), (f = n[5]));
      var R = f,
        L = s ? "subtype-" + s : null,
        E = R != null ? R : _,
        k;
      return (
        n[10] !== L || n[11] !== E
          ? ((k = c.jsx("div", { "data-testid": void 0, children: E })),
            (n[10] = L),
            (n[11] = E),
            (n[12] = k))
          : (k = n[12]),
        k
      );
    }
    l.default = _;
  },
  226,
);
