__d(
  "WAWebPrivacyNarrativeE2ESummary.react",
  [
    "fbt",
    "WAWebChatRefreshedIcon.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebLimitSharingGatingUtils",
    "WAWebLocationRefreshedOutlineIcon.react",
    "WAWebPrinaUtils",
    "WAWebSecurityMessageLockIllustrationIcon.react",
    "WAWebStatusRefreshedIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcCall.react",
    "WDSIconIcFilter.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        textAlignStart: { textAlign: "x1yc453h", $$css: !0 },
        iconContainer: {
          paddingTop: "xyamay9",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xq1608w",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        horizontalPadding: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1xnnf8n",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
        title: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        listItem: { height: "xsdox4t", $$css: !0 },
        minHeight: { minHeight: "xgujvf1", $$css: !0 },
      };
    function d(e) {
      var t = e.id,
        n = {
          xstyle: o("WAWebUISpacing").uiPadding.all8,
          width: 24,
          height: 24,
        };
      switch (t) {
        case "text":
          return u.jsx(
            o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
            babelHelpers.extends({}, n),
          );
        case "calls":
          return u.jsx(r("WDSIconIcCall.react"), babelHelpers.extends({}, n));
        case "media":
          return u.jsx(r("WDSIconIcFilter.react"), babelHelpers.extends({}, n));
        case "location":
          return u.jsx(
            o("WAWebLocationRefreshedOutlineIcon.react")
              .LocationRefreshedOutlineIcon,
            babelHelpers.extends({}, n),
          );
        case "status":
          return u.jsx(
            o("WAWebStatusRefreshedIcon.react").StatusRefreshedIcon,
            babelHelpers.extends({}, n),
          );
      }
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = (function () {
      return "wdsContentDefault";
    })();
    function p() {
      return u.jsx(
        o("WAWebSecurityMessageLockIllustrationIcon.react")
          .SecurityMessageLockIllustrationIcon,
        {},
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.icon,
        n = e.isMessageYourselfChat,
        r = n === void 0 ? !1 : n,
        a = e.subTitle,
        i = e.textAlignment,
        l = e.title,
        p = e.xstyle,
        _ = [
          {
            id: "text",
            icon: u.jsx(d, { id: "text" }),
            text: s._(/*BTDS*/ "Text and voice messages"),
          },
          r
            ? null
            : {
                id: "calls",
                icon: u.jsx(d, { id: "calls" }),
                text: s._(/*BTDS*/ "Audio and video calls"),
              },
          {
            id: "media",
            icon: u.jsx(d, { id: "media" }),
            text: s._(/*BTDS*/ "Photos, videos and documents"),
          },
          {
            id: "location",
            icon: u.jsx(d, { id: "location" }),
            text: s._(/*BTDS*/ "Location sharing"),
          },
          r
            ? null
            : {
                id: "status",
                icon: u.jsx(d, { id: "status" }),
                text: s._(/*BTDS*/ "Status updates"),
              },
        ].filter(Boolean);
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: p,
        justify: "center",
        align: "stretch",
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            xstyle: c.iconContainer,
            children: u.jsx("div", {
              className: "xqy66fx x1pic42t xr1496l x1onr9mi",
              children: t,
            }),
          }),
          u.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: [i, [c.horizontalPadding, c.title]],
            margin: [16, 0],
            weight: "medium",
            as: "h1",
            children: l,
          }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: [
              i,
              [c.horizontalPadding, o("WAWebUISpacing").uiMargin.bottom0],
            ],
            marginBottom: 8,
            color: "wdsContentDefault",
            children: a,
          }),
          u.jsx("ul", {
            className: "xyamay9 xf159sx x1l90r2v xmzvs34",
            children: _.map(function (e) {
              return u.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  as: "li",
                  margin: 0,
                  padding: [0, 16, 0, 12],
                  align: "center",
                  xstyle: c.listItem,
                  children: [
                    e.icon,
                    u.jsx(o("WAWebText.react").WAWebTextMuted, {
                      color: m,
                      children: e.text,
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      var e = s._(/*BTDS*/ "Your chats and calls are private"),
        t = o(
          "WAWebLimitSharingGatingUtils",
        ).isRenderUpdatedDisclosureGatingEnabled()
          ? s._(
              /*BTDS*/ "End-to-end encryption keeps your personal messages and calls between you and the people you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them. This includes your:",
            )
          : s._(
              /*BTDS*/ "End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:",
            ),
        n = s._(/*BTDS*/ "Learn more");
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(_, {
            icon: u.jsx(p, {}),
            textAlignment: c.textAlignStart,
            title: e,
            subTitle: t,
          }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: [c.horizontalPadding, c.minHeight],
            children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebPrinaUtils").securityUrl(),
              children: n,
            }),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.E2eSummary = _),
      (l.E2eSummarySecurityDrawer = f));
  },
  226,
);
