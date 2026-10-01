__d(
  "WAWebBizBroadcastProShowReminder",
  [
    "WALogger",
    "WAWebBizBroadcastProPendingActionSync",
    "WAWebBizBroadcastProPendingActions",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumEntryPoint",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      return "bb-pro-customer-base-reminder-" + e;
    }
    function d(e) {
      return e ===
        o("WAWebBizBroadcastProPendingActions")
          .BizBroadcastProCustomerBaseAction.UnsubscribeRecipients
        ? o(
            "WAWebBizBroadcastsHomeStrings",
          ).getManageCustomerBaseReminderToast()
        : e ===
            o("WAWebBizBroadcastProPendingActions")
              .BizBroadcastProCustomerBaseAction.DownloadSubscribedRecipients
          ? o(
              "WAWebBizBroadcastsHomeStrings",
            ).getDownloadSubscribedRecipientsReminderToast()
          : e ===
              o("WAWebBizBroadcastProPendingActions")
                .BizBroadcastProCustomerBaseAction.RemoveFromDataSharing
            ? o(
                "WAWebBizBroadcastsHomeStrings",
              ).getRemoveFromDataSharingReminderToast()
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m(e) {
      (o("WAWebToastManager").ToastManager.close(e),
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          u.jsx(
            o("WAWebBusinessBroadcastHomeFlowLoadable")
              .WAWebBusinessBroadcastHomeFlowLoadable,
            {
              entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
              onClose: function () {
                return o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerFullscreen();
              },
              openCustomerBasePanel: !0,
            },
          ),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ));
    }
    function p(t) {
      r("WAWebBizBroadcastProPendingActionSync")
        .clearPendingAction(t)
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to clear BB Pro customer base reminder",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bb-pro-customer-base-reminder-clear-failed");
        });
      var n = c(t);
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          action: {
            actionText: o(
              "WAWebBizBroadcastsHomeStrings",
            ).getReminderToastActionLabel(),
            onAction: function () {
              return m(n);
            },
          },
          id: n,
          msg: d(t),
        }),
      );
    }
    l.default = p;
  },
  98,
);
