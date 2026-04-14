__d(
  "WAWebNewsletterTransferOwnershipDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCheckBox.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNewsletterDrawerBodyParagraph.react",
    "WAWebNewsletterImageWithAction.react",
    "WAWebNewsletterTransferOwnershipConfirmationModal.react",
    "WAWebPersonArrowIcon.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUserShieldIcon.react",
    "WAWebWarningIcon.react",
    "react",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1nhvcw1",
          paddingTop: "xijc0j3",
          paddingInlineEnd: "x15zmtp0",
          paddingBottom: "xq1608w",
          paddingInlineStart: "x1oiqv2n",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        buttonContainer: { textAlign: "x2b8uid", $$css: !0 },
        header: {
          textAlign: "x2b8uid",
          lineHeight: "x1evy7pa",
          overflowWrap: "xj0a0fe",
          $$css: !0,
        },
        icon: { color: "xhslqc4", $$css: !0 },
      };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.contact,
        c = r("useWAWebToggle")(!1),
        p = c[0],
        _ = c[1];
      if (l == null) return null;
      var f = function () {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(
              r("WAWebNewsletterTransferOwnershipConfirmationModal.react"),
              {
                chat: i,
                contact: l,
                onTransferCompletion: a.onTransferCompletion,
                shouldDismissSelfAsAdmin: p,
              },
            ),
          );
        },
        g = s._(/*BTDS*/ "Transfer ownership to {channel-name}?", [
          s._param(
            "channel-name",
            d.jsx(o("WAWebName.react").ContactName, { contact: l }),
          ),
        ]),
        h = [
          {
            title: s._(
              /*BTDS*/ "You won't be able to invite or dismiss admins",
            ),
            description: s._(
              /*BTDS*/ "You also won't be able to delete the channel.",
            ),
            Icon: o("WAWebWarningIcon.react").WarningIcon,
            key: "no-longer-owner",
          },
          {
            title: s._(
              /*BTDS*/ "You'll remain an admin or choose to dismiss yourself",
            ),
            description: s._(
              /*BTDS*/ "Admins can send updates and change the channel's profile and settings.",
            ),
            Icon: o("WAWebUserShieldIcon.react").UserShieldIcon,
            key: "remain-admin",
          },
        ],
        y = d.jsxs(o("WAWebFlex.react").FlexRow, {
          columnGap: 8,
          paddingTop: 16,
          paddingBottom: 16,
          xstyle: o("WAWebUISpacing").uiMargin.start3,
          alignSelf: "start",
          align: "center",
          children: [
            d.jsx(o("WAWebCheckBox.react").CheckBox, {
              id: "transfer-ownership-dismiss-self-as-admin-checkbox",
              testid: void 0,
              checked: p,
              onChange: _,
            }),
            d.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
              htmlFor: "transfer-ownership-dismiss-self-as-admin-checkbox",
              testid: void 0,
              size: "16",
              className: (u || (u = r("stylex")))(
                o("WAWebUISpacing").uiMargin.horiz10,
              ),
              children: s._(/*BTDS*/ "Dismiss yourself as admin"),
            }),
          ],
        });
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-transfer",
        },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterStrings",
            ).getNewsletterTransferOwnershipText(),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a.onBack,
            onCancel: a.onCancel,
          }),
          d.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: m.container,
            children: [
              d.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                children: d.jsx(r("WAWebNewsletterImageWithAction.react"), {
                  chat: a.chat,
                  actionTheme: "primary",
                  Icon: o("WAWebPersonArrowIcon.react").PersonArrowIcon,
                }),
              }),
              d.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                children: d.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                  xstyle: [
                    m.header,
                    o("WAWebUISpacing").uiMargin.top16,
                    o("WAWebUISpacing").uiMargin.bottom16,
                  ],
                  size: "24",
                  color: "dark",
                  weight: "medium",
                  children: g,
                }),
              }),
              h.map(function (e) {
                var t = e.Icon,
                  n = e.description,
                  o = e.key,
                  a = e.title;
                return d.jsx(
                  r("WAWebNewsletterDrawerBodyParagraph.react"),
                  {
                    icon: d.jsx(t, { width: 24, height: 24, xstyle: m.icon }),
                    title: a,
                    description: n,
                  },
                  o,
                );
              }),
              y,
              d.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: [m.buttonContainer, o("WAWebUISpacing").uiMargin.top16],
                children: d.jsx(o("WAWebButton.react").Button, {
                  testid: void 0,
                  type: "primary",
                  onClick: f,
                  children: s._(/*BTDS*/ "Transfer"),
                }),
              }),
            ],
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
