__d(
  "WAWebUsernameKeyDeleteModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSetUsernameKeyAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameManagementDrawer.react",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = function () {
        (o(
          "WAWebUsernameCreationActionLogger",
        ).UsernameCreationActionLogger.log({
          usernameCreationCurrentScreen: o(
            "WAWebWamEnumUsernameCreationCurrentScreen",
          ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
          usernameCreationActionName: o(
            "WAWebWamEnumUsernameCreationActionName",
          ).USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN_CANCEL,
          usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
            .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
        }),
          o("WAWebModalManager").ModalManager.close());
      };
    function m(e) {
      var t = e.contactId,
        a = e.username,
        i = c(!1),
        l = i[0],
        m = i[1],
        p = r("useWAWebUnmountSignal")(),
        _ = r("WAWebFbtCommon")("Cancel"),
        f = s._(/*BTDS*/ "Remove"),
        g = s._(/*BTDS*/ "Are you sure you want to remove your username key?"),
        h = u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Username key removed"),
        }),
        y = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.log({
              usernameCreationCurrentScreen: o(
                "WAWebWamEnumUsernameCreationCurrentScreen",
              ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_DELETE_DIALOG,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN_CONFIRM,
              usernameCreationFlowType: o(
                "WAWebWamEnumUsernameCreationFlowType",
              ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            }),
              m(!0),
              yield o("WAWebSetUsernameKeyAction")
                .setMyUsernameKey(null)
                .then(function (e) {
                  p.aborted ||
                    (e &&
                      (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                        u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                          contactId: t,
                          username: a,
                        }),
                      ),
                      o("WAWebModalManager").ModalManager.close(),
                      o("WAWebToastManager").ToastManager.open(h),
                      o(
                        "WAWebUsernameCreationActionLogger",
                      ).UsernameCreationActionLogger.log({
                        usernameCreationCurrentScreen: o(
                          "WAWebWamEnumUsernameCreationCurrentScreen",
                        ).USERNAME_CREATION_CURRENT_SCREEN
                          .USERNAME_PIN_DELETE_DIALOG,
                        usernameCreationActionName: o(
                          "WAWebWamEnumUsernameCreationActionName",
                        ).USERNAME_CREATION_ACTION_NAME
                          .USERNAME_PIN_DELETE_SUCCESS,
                        usernameCreationFlowType: o(
                          "WAWebWamEnumUsernameCreationFlowType",
                        ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                      })));
                })
                .catch(function () {
                  p.aborted ||
                    (o(
                      "WAWebUsernameCreationActionLogger",
                    ).UsernameCreationActionLogger.log({
                      usernameCreationCurrentScreen: o(
                        "WAWebWamEnumUsernameCreationCurrentScreen",
                      ).USERNAME_CREATION_CURRENT_SCREEN
                        .USERNAME_PIN_DELETE_DIALOG,
                      usernameCreationActionName: o(
                        "WAWebWamEnumUsernameCreationActionName",
                      ).USERNAME_CREATION_ACTION_NAME
                        .USERNAME_PIN_DELETE_FAILURE,
                      usernameCreationFlowType: o(
                        "WAWebWamEnumUsernameCreationFlowType",
                      ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                    }),
                    o("WAWebModalManager").ModalManager.close(),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "We couldn\u2019t complete your request.",
                        ),
                        action: {
                          actionText: r("WAWebFbtCommon")("Try again"),
                          onAction: function () {
                            y();
                          },
                        },
                      }),
                    ));
                })
                .finally(function () {
                  p.aborted || m(!1);
                }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: f,
        okSpinner: l,
        okDisabled: l,
        onOK: y,
        cancelText: _,
        onCancel: d,
        okButtonType: "warning",
        cancelButtonType: "plain-white",
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "start",
          children: u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            xstyle: [
              o("WAWebUISpacing").uiMargin.top18,
              o("WAWebUISpacing").uiMargin.start18,
            ],
            children: g,
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
