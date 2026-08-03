__d(
  "WAWebOpenNotificationsOptInModal",
  [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebDialogEventLogger",
    "WAWebModalManager",
    "WAWebNotificationsModalVariant",
    "WAWebNotificationsOptInModal.react",
    "WAWebNotificationsOptInModalController",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumDialogNameType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum")({ OPTED_IN: "opted_in", DECLINED: "declined" });
    function c() {
      o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
        isDismissed: !0,
        lastDismissTime: o("WATimeUtils").unixTime(),
      });
    }
    function d(e, t, n) {
      var a =
        t ===
          o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy
            .PostLoad ||
        t ===
          o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy
            .MissedMessages
          ? o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
              .NOTIFICATION_MESSAGE_OPT_IN
          : t ===
              o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy
                .MissedCall
            ? o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                .NOTIFICATION_CALL_OPT_IN
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebNotificationsOptInModal.react"), {
          copy: t,
          missedCount: n == null ? void 0 : n.missedCount,
          onAllow: function () {
            (r("WAWebDialogEventLogger")({ dialogName: a, source: u.OPTED_IN }),
              n == null || n.onModalResolved == null || n.onModalResolved(),
              o(
                "WAWebNotificationsOptInModalController",
              ).requestNotificationsPermission(e, {
                showGuidePopup: !1,
                onPermissionResult: n == null ? void 0 : n.onPermissionResult,
              }));
          },
          onDismiss: function () {
            (r("WAWebDialogEventLogger")({ dialogName: a, source: u.DECLINED }),
              n == null || n.onModalResolved == null || n.onModalResolved(),
              c());
          },
        }),
      );
    }
    l.openNotificationsOptInModal = d;
  },
  98,
);
