__d(
  "WAWebPrimaryButterbar.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackgroundSyncReporter",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebNotificationsFlow.react",
    "WAWebNotificationsM1Butterbar.react",
    "WAWebOfflineButterbar.react",
    "WAWebOfflineProgressButterbar.react",
    "WAWebPushNotificationsGatingUtils",
    "WAWebResumeButterbar.react",
    "WAWebSettingsFBT",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "WAWebTabOrder",
    "WAWebUpdater",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumOnboardSources",
    "WAWebWamEnumWebcButterbarActionType",
    "WAWebWamEnumWebcButterbarBbType",
    "WAWebWebcButterbarEventWamEvent",
    "WDSBanner.react",
    "WDSIconIcRefresh.react",
    "WDSIconIcSync.react",
    "cr:17163",
    "cr:474",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = null;
    function m(e) {
      "use no forget";
      var t = e.displayInfo,
        a = e.isHardRefresh,
        i = e.needsUpdate,
        l = e.notifyPermission,
        m = e.onEnableOfflineNotifications,
        y = e.onRequestPermissions,
        C = e.onShowNotifyDelay,
        b = e.ref,
        v = e.showNotify,
        S = e.showResumeProgress,
        R = null,
        L = null,
        E = c(o("WAWebSocketModel").Socket.stream),
        k = E[0],
        I = E[1],
        T = function () {
          return (
            !o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalNotificationsEnabled() &&
            !o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupNotificationsEnabled() &&
            !o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalStatusNotificationsEnabled()
          );
        },
        D = c(T),
        x = D[0],
        $ = D[1],
        P = c(function () {
          return f(!0, !0);
        }),
        N = P[0],
        M = P[1],
        w = c(function () {
          return f(!0);
        }),
        A = w[0],
        F = w[1],
        O = c(function () {
          var e;
          return (e = o(
            "WAWebUserPrefsNotifications",
          ).getOfflineNotificationsBBStatus().isDismissed) != null
            ? e
            : !1;
        }),
        B = O[0],
        W = O[1];
      if (
        (o("useWAWebListener").useListener(
          o("WAWebSocketModel").Socket,
          "change:stream",
          function () {
            I(o("WAWebSocketModel").Socket.stream);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebMuteCollection").MuteCollection,
          "change:notificationsEnabled",
          function () {
            $(T());
          },
        ),
        n("cr:17163") != null &&
          n("cr:17163").shouldShowBrokenHybrid2559Modal() &&
          n("cr:474"))
      )
        return u.jsx(n("cr:474"), {});
      switch (t) {
        case o("WAWebStreamModel").StreamInfo.OFFLINE:
          ((L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
            .OFFLINE),
            (R = u.jsx(r("WAWebOfflineButterbar.react"), {}, "bbar")));
          break;
        case o("WAWebStreamModel").StreamInfo.OPENING:
        case o("WAWebStreamModel").StreamInfo.CONNECTING:
          ((L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
            .RESUME_CONNECTING),
            (R = u.jsx(r("WAWebResumeButterbar.react"), {}, "bbar")));
          break;
        case o("WAWebStreamModel").StreamInfo.NORMAL:
          if (
            r("WAWebEnvironment").isWindows &&
            k === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED
          ) {
            ((L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
              .OFFLINE),
              (R = u.jsx(r("WAWebOfflineButterbar.react"), {}, "bbar")));
            break;
          }
          break;
        case o("WAWebStreamModel").StreamInfo.RESUMING: {
          ((L = null),
            (R = u.jsx("div", {
              className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
              children: u.jsx(r("WDSBanner.react"), {
                type: "warning",
                title: s._(/*BTDS*/ "Phone not connected"),
                body: s._(
                  /*BTDS*/ "Make sure your phone has an active internet connection.",
                ),
                actionText: s._(/*BTDS*/ "Learn more"),
                onAction: _,
              }),
            })));
          break;
        }
        default:
          break;
      }
      (R == null &&
        S &&
        ((L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
          .RESUME_LOADING_MSGS_PROGRESS),
        (R = u.jsx(r("WAWebOfflineProgressButterbar.react"), {}))),
        R == null &&
          i &&
          !r("WAWebEnvironment").isWindows &&
          !a &&
          ((L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
            .UPDATE_DUE_TO_SOFT_MIN),
          (R = u.jsx("div", {
            className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
            children: u.jsx(
              r("WDSBanner.react"),
              {
                ref: b,
                type: "default",
                title: s._(/*BTDS*/ "Refresh to update"),
                body: s._(/*BTDS*/ "A new version of WhatsApp is available."),
                actionText: s._(/*BTDS*/ "Refresh"),
                icon: r("WDSIconIcRefresh.react"),
                onAction: function () {
                  (h(
                    o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
                      .UPDATE_DUE_TO_SOFT_MIN,
                    o("WAWebWamEnumWebcButterbarActionType")
                      .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA,
                  ),
                    p());
                },
                tabOrder: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR,
              },
              "bbar",
            ),
          }))));
      var q = !1;
      if (
        (R == null &&
          window.Notification &&
          !r("WAWebEnvironment").isWindows &&
          (l !== o("WAWebNotificationConstants").PERMISSION_ALLOWED || x) &&
          (q = o("WAWebABProps").getABPropConfigValue(
            "web_notifications_banner_new_logic_enabled",
          )),
        R == null)
      ) {
        var U = l === o("WAWebNotificationConstants").PERMISSION_ALLOWED,
          V = o("WAWebABProps").getABPropConfigValue(
            "wa_web_enable_granular_notifications",
          ),
          H = function () {
            (L != null && g(L),
              o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
                isDismissed: !0,
                lastDismissTime: o("WATimeUtils").unixTime(),
              }),
              F(!1),
              M(!1),
              $(T()));
          },
          G = function () {
            (L != null &&
              h(
                L,
                o("WAWebWamEnumWebcButterbarActionType")
                  .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA,
              ),
              r("WAWebEnvironment").isWindows ||
                o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent(
                  {
                    offboardSource: null,
                    onboardSource: o("WAWebWamEnumOnboardSources")
                      .ONBOARD_SOURCES.WEB_NOTIFICATION_BUTTERBAR,
                  },
                ),
              x &&
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                  u.jsx(o("WAWebNotificationsFlow.react").NotificationsFlow, {
                    onEnd: function () {
                      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
                        $(T()));
                    },
                  }),
                ),
              !U && !r("WAWebEnvironment").isWindows && y(q));
          };
        if (r("WAWebEnvironment").isWindows && V && N && x)
          ((L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
            .NOTIFICATION_DISABLED),
            (R = u.jsx(r("WAWebNotificationsM1Butterbar.react"), {
              onDismiss: H,
              onAction: G,
              bannerVariant: 4,
              ref: b,
            })));
        else if (
          window.Notification &&
          (o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(
            l,
            q,
          ) ||
            x) &&
          A
        )
          if (v) {
            L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
              .NOTIFICATION;
            var z = o("WAWebABProps").getABPropConfigValue(
                "web_notifications_banner_variant",
              ),
              j = l === o("WAWebNotificationConstants").PERMISSION_DENIED;
            (q &&
              z > 0 &&
              V &&
              (j || (U && x)) &&
              ((z = 4),
              (L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
                .NOTIFICATION_DISABLED)),
              (R = u.jsx(r("WAWebNotificationsM1Butterbar.react"), {
                onDismiss: H,
                onAction: G,
                bannerVariant: z,
                ref: b,
              })));
          } else C();
        else if (
          !v &&
          o(
            "WAWebPushNotificationsGatingUtils",
          ).canEnableOfflineNotifications() &&
          window.Notification &&
          l !== o("WAWebNotificationConstants").PERMISSION_DENIED &&
          R == null
        ) {
          var K = o(
              "WAWebUserPrefsNotifications",
            ).getOfflineNotificationsBBStatus(),
            Q = K.firstSeenTime,
            X = o(
              "WAWebUserPrefsNotifications",
            ).getGlobalOfflineNotifications();
          !B &&
            (!X || l === o("WAWebNotificationConstants").PERMISSION_DEFAULT) &&
            (Q == null &&
              ((Q = o("WATimeUtils").unixTime()),
              o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({
                isDismissed: !1,
                firstSeenTime: Q,
              })),
            o("WATimeUtils").unixTime() - Q <=
              7 * o("WATimeUtils").DAY_SECONDS &&
              ((L = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE
                .OFFLINE_NOTIFICATION),
              (R = u.jsx("div", {
                className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
                children: u.jsx(
                  r("WDSBanner.react"),
                  {
                    type: "default",
                    icon: r("WDSIconIcSync.react"),
                    title: s._(/*BTDS*/ "Turn on background sync"),
                    body: o("WAWebSettingsFBT").offlineSyncSubtitle(),
                    actionText: s._(/*BTDS*/ "Turn on"),
                    onAction: function () {
                      (h(
                        o("WAWebWamEnumWebcButterbarBbType")
                          .WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION,
                        o("WAWebWamEnumWebcButterbarActionType")
                          .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA,
                      ),
                        o(
                          "WAWebBackgroundSyncReporter",
                        ).logBackgroundSyncAdoptionEvent({
                          offboardSource: null,
                          onboardSource: o("WAWebWamEnumOnboardSources")
                            .ONBOARD_SOURCES.BACKGROUND_SYNC_BUTTERBAR,
                        }),
                        m());
                    },
                    onDismiss: function () {
                      (g(
                        o("WAWebWamEnumWebcButterbarBbType")
                          .WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION,
                      ),
                        o(
                          "WAWebUserPrefsNotifications",
                        ).setOfflineNotificationsBBStatus({ isDismissed: !0 }),
                        W(!0));
                    },
                  },
                  "bbar",
                ),
              }))));
        }
      }
      return (
        R != null &&
          L &&
          d !== L &&
          (d != null &&
            h(
              d,
              o("WAWebWamEnumWebcButterbarActionType")
                .WEBC_BUTTERBAR_ACTION_TYPE.AUTO_DISMISS,
            ),
          (d = L),
          h(
            L,
            o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE
              .IMPRESSION,
          )),
        R
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      o("WAWebUpdater").Updater.restart();
    }
    function _() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getCannotConnectFaqUrl(),
      );
    }
    function f(e, t) {
      if ((t === void 0 && (t = !1), r("WAWebEnvironment").isWindows && !t))
        return !1;
      var n = o("WAWebUserPrefsNotifications").getWebNotificationsBBStatus(),
        a = n.firstSeenTime,
        i = n.isDismissed,
        l = n.lastDismissTime;
      if (e) {
        if (i)
          return (
            l == null ||
            o("WATimeUtils").unixTime() - l > 2 * o("WATimeUtils").WEEK_SECONDS
          );
      } else if (a == null)
        o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
          isDismissed: !1,
          firstSeenTime: o("WATimeUtils").unixTime(),
        });
      else if (
        i ||
        o("WATimeUtils").unixTime() - a > 4 * o("WATimeUtils").WEEK_SECONDS
      )
        return !1;
      return !0;
    }
    function g(e) {
      ((d = null),
        h(
          e,
          o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE
            .CLICK_DISMISS,
        ));
    }
    function h(e, t) {
      new (o("WAWebWebcButterbarEventWamEvent").WebcButterbarEventWamEvent)({
        webcButterbarType: e,
        webcButterbarAction: t,
      }).commit();
    }
    l.default = m;
  },
  226,
);
