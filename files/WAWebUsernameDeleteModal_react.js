__d(
  "WAWebUsernameDeleteModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSetContactUsernameAction",
    "WAWebSetUsernameKeyAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameErrorUtils",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WAWebWarningOutlineIcon.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        criticalColor: { color: "x30a034", $$css: !0 },
        marginVert24: {
          marginTop: "x9u28bd",
          marginBottom: "x14mdic9",
          $$css: !0,
        },
      },
      m = function () {
        o("WAWebUsernameCreationActionLogger").UsernameCreationActionLogger.log(
          {
            usernameCreationCurrentScreen: o(
              "WAWebWamEnumUsernameCreationCurrentScreen",
            ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_DELETE_DIALOG,
            usernameCreationActionName: o(
              "WAWebWamEnumUsernameCreationActionName",
            ).USERNAME_CREATION_ACTION_NAME.USERNAME_DELETE_FAILURE,
            usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.CREATION,
          },
        );
      };
    function p(e) {
      var t = e.onDeleteUsername,
        a = c(!1),
        i = a[0],
        l = a[1],
        p = r("useWAWebUnmountSignal")(),
        _ = s._(
          /*BTDS*/ "If you continue, your phone number will show in existing chats and calls instead of your username.",
        ),
        f = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getFaqUrl(),
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        g = s._(
          /*BTDS*/ "Deleted usernames may be available for others to use. {link to learn more}",
          [s._param("link to learn more", f)],
        ),
        h = s._(/*BTDS*/ "Delete your username?"),
        y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              marginBottom: 20,
              children: u.jsx(
                o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
                { iconXstyle: d.criticalColor },
              ),
            }),
            u.jsx(r("WDSText.react"), {
              colorName: "contentDefault",
              textAlign: "center",
              type: "Headline2",
              children: h,
            }),
          ],
        }),
        C = s._(/*BTDS*/ "Username deleted"),
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.log({
              usernameCreationCurrentScreen: o(
                "WAWebWamEnumUsernameCreationCurrentScreen",
              ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_USERNAME_CONFIRM,
              usernameCreationFlowType: o(
                "WAWebWamEnumUsernameCreationFlowType",
              ).USERNAME_CREATION_FLOW_TYPE.CREATION,
            }),
              l(!0),
              yield o("WAWebSetUsernameKeyAction").setMyUsernameKey(null),
              yield o("WAWebSetContactUsernameAction")
                .setMyUsername()
                .then(function (e) {
                  p.aborted ||
                    (e
                      ? (o(
                          "WAWebUsernameCreationActionLogger",
                        ).UsernameCreationActionLogger.log({
                          usernameCreationCurrentScreen: o(
                            "WAWebWamEnumUsernameCreationCurrentScreen",
                          ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
                          usernameCreationActionName: o(
                            "WAWebWamEnumUsernameCreationActionName",
                          ).USERNAME_CREATION_ACTION_NAME
                            .USERNAME_DELETE_SUCCESS,
                          usernameCreationFlowType: o(
                            "WAWebWamEnumUsernameCreationFlowType",
                          ).USERNAME_CREATION_FLOW_TYPE.CREATION,
                        }),
                        t && t(),
                        o("WAWebModalManager").ModalManager.close(),
                        o("WAWebToastManager").ToastManager.open(
                          u.jsx(o("WAWebToast.react").Toast, { msg: C }),
                        ))
                      : m());
                })
                .catch(function (e) {
                  p.aborted ||
                    (m(),
                    o("WAWebUsernameErrorUtils").handleErrorBasedOnErrorCode(e),
                    o("WAWebModalManager").ModalManager.close());
                })
                .finally(function () {
                  p.aborted || l(!1);
                }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        v = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.log({
            usernameCreationCurrentScreen: o(
              "WAWebWamEnumUsernameCreationCurrentScreen",
            ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
            usernameCreationActionName: o(
              "WAWebWamEnumUsernameCreationActionName",
            ).USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_USERNAME_CANCEL,
            usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.CREATION,
          }),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "username-delete" },
        okButtonType: "warning",
        okDisabled: i,
        okSpinner: i,
        okText: s._(/*BTDS*/ "Delete"),
        onCancel: v,
        onOK: b,
        testid: void 0,
        title: y,
        children: [
          u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            xstyle: d.marginVert24,
            children: _,
          }),
          u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: g,
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
