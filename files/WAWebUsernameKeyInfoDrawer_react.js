__d(
  "WAWebUsernameKeyInfoDrawer.react",
  [
    "fbt",
    "WAWebCreateUsernameKeyDrawer.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebShareIcon.react",
    "WAWebUISpacing",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameCreationSuccessDrawer.react",
    "WAWebUsernameManagementDrawer.react",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WAWebWdsPictoSecurePrivateMentionKeyIcon.react",
    "WDSButton.react",
    "WDSIconIcPerson.react",
    "WDSIconIcVisibility.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        title: { width: "xm6i5cn", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        section: {
          columnGap: "x6mw3hq",
          paddingTop: "x123j3cw",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xs9asl8",
          paddingInlineStart: "x12w63v0",
          width: "xktia5q",
          $$css: !0,
        },
        badge: { marginTop: "x1r0gsg0", $$css: !0 },
        learnMoreLink: { color: "xo1mcw5", $$css: !0 },
        successColor: { color: "x1du590y", $$css: !0 },
      };
    function d(e) {
      var t = e.description,
        n = e.icon;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 24,
        xstyle: [c.section, o("WAWebUISpacing").uiMargin.top18],
        children: [
          n,
          u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: t,
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.contactId,
        a = e.fromUsernameCreation,
        i = e.username,
        l = s._(/*BTDS*/ "Username key"),
        p = s._(
          /*BTDS*/ "Add a key to reduce unwanted messages sent to your username",
        ),
        _ = s._(
          /*BTDS*/ "Share your username and key when telling someone how to contact you for the first time.",
        ),
        f = s._(
          /*BTDS*/ "People in existing conversations or those who have your number won\u2019t need your key.",
        ),
        g = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getFaqUrl(),
          xstyle: c.learnMoreLink,
          children: s._(/*BTDS*/ "More about username keys"),
        }),
        h = s._(
          /*BTDS*/ "Find, edit or remove your key at any time in Settings. {learnMoreLink}",
          [s._param("learnMoreLink", g)],
        ),
        y = s._(/*BTDS*/ "Add key"),
        C = s._(/*BTDS*/ "Skip"),
        b = 30,
        v = [
          [
            _,
            u.jsx(
              o("WAWebShareIcon.react").ShareIcon,
              { iconXstyle: c.secondaryColor, height: b, width: b },
              1,
            ),
          ],
          [
            f,
            u.jsx(
              r("WDSIconIcPerson.react"),
              { iconXstyle: c.secondaryColor, height: b, width: b },
              2,
            ),
          ],
          [
            h,
            u.jsx(
              r("WDSIconIcVisibility.react"),
              { iconXstyle: c.secondaryColor, height: b, width: b },
              3,
            ),
          ],
        ],
        S = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.logBackClicked(
            o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDUCATION,
            o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          ),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                contactId: n,
                username: i,
              }),
            ));
        },
        R = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.logBackClicked(
            o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
            o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          ),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(m, { contactId: n, username: i }),
            ));
        },
        L = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.log({
            usernameCreationCurrentScreen: o(
              "WAWebWamEnumUsernameCreationCurrentScreen",
            ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDUCATION,
            usernameCreationActionName: o(
              "WAWebWamEnumUsernameCreationActionName",
            ).USERNAME_CREATION_ACTION_NAME.CLICK_ADD_PIN,
            usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          }),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
                contactId: n,
                fromUsernameCreation: a,
                handleBack: R,
              }),
            ));
        },
        E = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
              contactId: n,
              username: i,
            }),
          );
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: { surface: "unknown", viewName: "username-key-info" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: S,
            title: l,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  children: [
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: c.badge,
                      children: u.jsx(
                        o("WAWebWdsPictoSecurePrivateMentionKeyIcon.react")
                          .WdsPictoSecurePrivateMentionKeyIcon,
                        { iconXstyle: c.successColor, height: 88, width: 132 },
                      ),
                    }),
                    u.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      textAlign: "center",
                      type: "LargeTitle2",
                      xstyle: [
                        (t = o("WAWebUISpacing")).uiMargin.top48,
                        t.uiMargin.bottom16,
                        c.title,
                      ],
                      children: p,
                    }),
                    v.map(function (e, t) {
                      var n = e[0],
                        r = e[1];
                      return u.jsx(d, { description: n, icon: r }, t);
                    }),
                  ],
                }),
              }),
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: [
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "center",
                    xstyle: [t.uiPadding.horiz32, t.uiPadding.vert16],
                    children: u.jsx(r("WDSButton.react"), {
                      label: y,
                      onPress: L,
                      size: "medium",
                      type: "default",
                      variant: "filled",
                      widthMode: "flexible",
                    }),
                  }),
                  a &&
                    u.jsx(o("WAWebFlex.react").FlexRow, {
                      justify: "center",
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.bottom16,
                        o("WAWebUISpacing").uiPadding.horiz32,
                      ],
                      children: u.jsx(r("WDSButton.react"), {
                        label: C,
                        onPress: E,
                        size: "medium",
                        type: "default",
                        variant: "borderless",
                        widthMode: "flexible",
                      }),
                    }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
