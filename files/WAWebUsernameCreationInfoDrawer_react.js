__d(
  "WAWebUsernameCreationInfoDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebShareIcon.react",
    "WAWebWdsPictoPrivateMentionIcon.react",
    "WDSButton.react",
    "WDSIconIcPerson.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          width: "xktia5q",
          marginInlineStart: "x1315kfy",
          $$css: !0,
        },
        section: { $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        paddingAll32: {
          paddingTop: "x1sk1jro",
          paddingInlineEnd: "x1evaxtz",
          paddingBottom: "x1ci70gm",
          paddingInlineStart: "x1m4z3lf",
          $$css: !0,
        },
      };
    function d() {
      var e = s._(/*BTDS*/ "More about usernames"),
        t = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getFaqUrl(),
          children: e,
        });
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        marginBottom: 20,
        marginTop: 32,
        children: u.jsxs(r("WDSText.react"), {
          colorName: "contentDeemphasized",
          textAlign: "center",
          type: "Body2",
          children: [
            s._(
              /*BTDS*/ "People who don't have your number saved will see your username.",
            ),
            " ",
            t,
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.description,
        n = e.icon;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 24,
        marginTop: 20,
        xstyle: c.section,
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
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.onBack,
        n = e.onContinue,
        a = e.ref,
        i = s._(/*BTDS*/ "Username"),
        l = s._(/*BTDS*/ "Create a username for phone number privacy"),
        p = s._(/*BTDS*/ "Create username"),
        _ = s._(
          /*BTDS*/ "You can share your username instead of your number when telling someone how to contact you.",
        ),
        f = s._(
          /*BTDS*/ "People you\u2019re already talking to will see that you created a username.",
        ),
        g = 30,
        h = [
          [
            _,
            u.jsx(
              o("WAWebShareIcon.react").ShareIcon,
              { iconXstyle: c.secondaryColor, height: g, width: g },
              1,
            ),
          ],
          [
            f,
            u.jsx(
              r("WDSIconIcPerson.react"),
              { iconXstyle: c.secondaryColor, height: g, width: g },
              2,
            ),
          ],
        ];
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "username-creation-info",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: t,
            title: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  xstyle: c.container,
                  children: [
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      marginTop: 40,
                      children: u.jsx(
                        o("WAWebWdsPictoPrivateMentionIcon.react")
                          .WdsPictoPrivateMentionIcon,
                        { height: 87.01, width: 87.36 },
                      ),
                    }),
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      marginTop: 40,
                      children: u.jsx(r("WDSText.react"), {
                        colorName: "contentDefault",
                        textAlign: "center",
                        type: "LargeTitle2",
                        children: l,
                      }),
                    }),
                    u.jsx(d, {}),
                    h.map(function (e, t) {
                      var n = e[0],
                        r = e[1];
                      return u.jsx(m, { description: n, icon: r }, t);
                    }),
                  ],
                }),
              }),
              u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  xstyle: c.paddingAll32,
                  children: u.jsx(r("WDSButton.react"), {
                    label: p,
                    onPress: n,
                    size: "medium",
                    type: "default",
                    variant: "filled",
                    widthMode: "flexible",
                  }),
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
