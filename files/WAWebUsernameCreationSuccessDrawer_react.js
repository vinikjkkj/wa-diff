__d(
  "WAWebUsernameCreationSuccessDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameManagementDrawer.react",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WAWebWdsPictoSucessCelebrationTickIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          width: "x1rfehsz",
          paddingInlineStart: "xjwn8et",
          $$css: !0,
        },
        content: { marginTop: "xevwqry", $$css: !0 },
        successColor: { color: "x1du590y", $$css: !0 },
        buttonContainer: {
          marginBottom: "xg6s713",
          paddingInlineStart: "x1m4z3lf",
          paddingInlineEnd: "x1evaxtz",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.description;
      return u.jsx(r("WDSText.react"), {
        colorName: "contentDeemphasized",
        textAlign: "center",
        type: "Body2",
        xstyle: c.content,
        children: t,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.contactId,
        n = e.username,
        a = e.usernameKey,
        i = s._(/*BTDS*/ "Username"),
        l = u.jsx(r("WDSText.react"), {
          colorName: "contentDefault",
          textAlign: "center",
          type: "LargeTitle2",
          children: s._(/*BTDS*/ "You\u2019re \u0040{username}", [
            s._param("username", n),
          ]),
        }),
        m = u.jsx(r("WDSText.react"), {
          colorName: "contentDefault",
          textAlign: "center",
          type: "Headline1",
          children: s._(
            /*BTDS*/ "You\u2019re \u0040{username} and your key is {username-key}",
            [s._param("username", n), s._param("username-key", a)],
          ),
        }),
        p = a != null,
        _ = p ? m : l,
        f = s._(
          /*BTDS*/ "Now you can share your username and key instead of your phone number when telling someone how to contact you for the first time.",
        ),
        g = s._(
          /*BTDS*/ "Now you can share your username instead of your phone number when telling someone how to contact you for the first time.",
        ),
        h = s._(
          /*BTDS*/ "You can add a key from Settings to reduce unwanted messages.",
        ),
        y = s._(/*BTDS*/ "Done"),
        C = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            u.jsx(r("WAWebUsernameManagementDrawer.react"), {
              contactId: t,
              username: n,
            }),
          );
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "username-creation-success",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: function () {
              (o(
                "WAWebUsernameCreationActionLogger",
              ).UsernameCreationActionLogger.logBackClicked(
                o("WAWebWamEnumUsernameCreationCurrentScreen")
                  .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_COMPLETE,
                o("WAWebWamEnumUsernameCreationFlowType")
                  .USERNAME_CREATION_FLOW_TYPE.CREATION,
              ),
                C());
            },
            title: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                xstyle: c.container,
                children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  alignSelf: "center",
                  children: [
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      align: "center",
                      marginTop: 40,
                      children: u.jsx(
                        o("WAWebWdsPictoSucessCelebrationTickIcon.react")
                          .WdsPictoSucessCelebrationTickIcon,
                        { iconXstyle: c.successColor },
                      ),
                    }),
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      align: "center",
                      marginTop: 40,
                      children: u.jsx(r("WDSText.react"), {
                        colorName: "contentDefault",
                        textAlign: "center",
                        type: "LargeTitle2",
                        children: _,
                      }),
                    }),
                    p
                      ? u.jsx(d, { description: f })
                      : u.jsxs(o("WAWebFlex.react").FlexItem, {
                          align: "center",
                          children: [
                            u.jsx(d, { description: g }),
                            u.jsx(d, { description: h }),
                          ],
                        }),
                  ],
                }),
              }),
              u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  xstyle: c.buttonContainer,
                  children: u.jsx(r("WDSButton.react"), {
                    label: y,
                    onPress: function () {
                      (o(
                        "WAWebUsernameCreationActionLogger",
                      ).UsernameCreationActionLogger.log({
                        usernameCreationCurrentScreen: o(
                          "WAWebWamEnumUsernameCreationCurrentScreen",
                        ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_COMPLETE,
                        usernameCreationActionName: o(
                          "WAWebWamEnumUsernameCreationActionName",
                        ).USERNAME_CREATION_ACTION_NAME
                          .CLICK_USERNAME_COMPLETE_CONTINUE,
                        usernameCreationFlowType: o(
                          "WAWebWamEnumUsernameCreationFlowType",
                        ).USERNAME_CREATION_FLOW_TYPE.CREATION,
                      }),
                        C());
                    },
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
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
