__d(
  "WAWebCreateUsernameKeyDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebClickable.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebRefreshIcon.react",
    "WAWebSetUsernameKeyAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameCreationSuccessDrawer.react",
    "WAWebUsernameKeyDeleteModal.react",
    "WAWebUsernameManagementDrawer.react",
    "WAWebUsernameUtils",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "useWAWebContactValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        keySuggestionContainer: {
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          $$css: !0,
        },
        keySection: {
          width: "xycev2y",
          height: "x1jjfqgs",
          background: "xh5507f",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          rowGap: "x121sasi",
          columnGap: "x1mn2tih",
          paddingTop: "xl7twdi",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
        descriptionContainer: {
          rowGap: "x1j3ira4",
          columnGap: "xrdqr27",
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        usernameKeyContainer: {
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          rowGap: "x121sasi",
          columnGap: "x1mn2tih",
          $$css: !0,
        },
        refreshIcon: { color: "xo1mcw5", $$css: !0 },
      };
    function m(e) {
      var t,
        n = e.contactId,
        a = e.fromUsernameCreation,
        i = e.handleBack,
        l = o("useWAWebContactValues").useContactValues(n, [
          o("WAWebFrontendContactGetters").getUsername,
          o("WAWebFrontendContactGetters").getUsernameKey,
        ]),
        m = l[0],
        p = l[1],
        _ = c(
          p != null
            ? null
            : o("WAWebUsernameUtils").generateUsernameKeySuggestion(),
        ),
        f = _[0],
        g = _[1],
        h = c(!1),
        y = h[0],
        C = h[1],
        b = r("useWAWebUnmountSignal")();
      if (m == null) return null;
      var v = p != null,
        S = f != null,
        R = (t = f != null ? f : p) == null ? void 0 : t.split("").join(" "),
        L = s._(/*BTDS*/ "Username key"),
        E = s._(/*BTDS*/ "Suggest a different key"),
        k = s._(
          /*BTDS*/ "This key is meant to be shared along with your username.",
        ),
        I = s._(/*BTDS*/ "Save key"),
        T = s._(/*BTDS*/ "Remove key"),
        D = s._(/*BTDS*/ "Username key changed"),
        x = s._(/*BTDS*/ "Username key added"),
        $ = function () {
          o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.log({
            usernameCreationCurrentScreen: o(
              "WAWebWamEnumUsernameCreationCurrentScreen",
            ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
            usernameCreationActionName: o(
              "WAWebWamEnumUsernameCreationActionName",
            ).USERNAME_CREATION_ACTION_NAME.CLICK_SUGGEST_NEW_PIN,
            usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          });
          var e = o("WAWebUsernameUtils").generateUsernameKeySuggestion();
          g(e);
        },
        P = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.log({
            usernameCreationCurrentScreen: o(
              "WAWebWamEnumUsernameCreationCurrentScreen",
            ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
            usernameCreationActionName: o(
              "WAWebWamEnumUsernameCreationActionName",
            ).USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_PIN,
            usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          }),
            C(!0),
            o("WAWebSetUsernameKeyAction")
              .setMyUsernameKey(f)
              .then(function (e) {
                if (!b.aborted && e) {
                  if (a)
                    f != null &&
                      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                        u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
                          contactId: n,
                          username: m,
                          usernameKey: f,
                        }),
                      );
                  else {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                      u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                        contactId: n,
                        username: m,
                      }),
                    );
                    var t = v ? D : x;
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, { msg: t }),
                    );
                  }
                  o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.log({
                    usernameCreationCurrentScreen: o(
                      "WAWebWamEnumUsernameCreationCurrentScreen",
                    ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
                    usernameCreationActionName: o(
                      "WAWebWamEnumUsernameCreationActionName",
                    ).USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_SAVE_SUCCESS,
                    usernameCreationFlowType: o(
                      "WAWebWamEnumUsernameCreationFlowType",
                    ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                  });
                }
              })
              .catch(function () {
                b.aborted ||
                  (o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.log({
                    usernameCreationCurrentScreen: o(
                      "WAWebWamEnumUsernameCreationCurrentScreen",
                    ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
                    usernameCreationActionName: o(
                      "WAWebWamEnumUsernameCreationActionName",
                    ).USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_SAVE_FAILURE,
                    usernameCreationFlowType: o(
                      "WAWebWamEnumUsernameCreationFlowType",
                    ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                  }),
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "We couldn\u2019t complete your request.",
                      ),
                      action: {
                        actionText: r("WAWebFbtCommon")("Try again"),
                        onAction: P,
                      },
                    }),
                  ));
              })
              .finally(function () {
                b.aborted || C(!1);
              }));
        },
        N = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.log({
            usernameCreationCurrentScreen: o(
              "WAWebWamEnumUsernameCreationCurrentScreen",
            ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
            usernameCreationActionName: o(
              "WAWebWamEnumUsernameCreationActionName",
            ).USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN,
            usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          }),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebUsernameKeyDeleteModal.react"), {
                contactId: n,
                username: m,
              }),
            ));
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "create-username-key",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: L,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: [
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: d.keySuggestionContainer,
                    marginTop: 32,
                    children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                      align: "center",
                      xstyle: d.keySection,
                      children: [
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: d.usernameKeyContainer,
                          children: u.jsx(r("WDSText.react"), {
                            type: "LargeTitle1",
                            colorName: "contentDefault",
                            children: R,
                          }),
                        }),
                        u.jsx(o("WAWebClickable.react").Clickable, {
                          onClick: $,
                          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                            align: "center",
                            gap: 8,
                            children: [
                              u.jsx(o("WAWebFlex.react").FlexItem, {
                                children: u.jsx(
                                  o("WAWebRefreshIcon.react").RefreshIcon,
                                  {
                                    xstyle: d.refreshIcon,
                                    width: 18,
                                    height: 18,
                                  },
                                ),
                              }),
                              u.jsx(r("WDSText.react"), {
                                type: "Body2Emphasized",
                                colorName: "contentActionEmphasized",
                                children: E,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: d.descriptionContainer,
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      textAlign: "center",
                      children: k,
                    }),
                  }),
                ],
              }),
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: [
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    justify: "center",
                    xstyle: [
                      v
                        ? o("WAWebUISpacing").uiPadding.bottom10
                        : o("WAWebUISpacing").uiPadding.bottom40,
                      o("WAWebUISpacing").uiPadding.horiz32,
                    ],
                    children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                      onClick: P,
                      stretch: !0,
                      disabled: !S || y,
                      spinner: y,
                      children: I,
                    }),
                  }),
                  v &&
                    u.jsx(o("WAWebFlex.react").FlexRow, {
                      justify: "center",
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.bottom16,
                        o("WAWebUISpacing").uiPadding.horiz32,
                      ],
                      children: u.jsx(r("WDSButton.react"), {
                        widthMode: "flexible",
                        onPress: N,
                        size: "medium",
                        variant: "borderless",
                        type: "destructive",
                        label: T,
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
