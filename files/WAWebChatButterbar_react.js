__d(
  "WAWebChatButterbar.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBrigadingButterBar.react",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebGuidePopup.react",
    "WAWebL10N",
    "WAWebLocaleManualUpdateButterbar.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebNoticeButterbar.react",
    "WAWebNoticeModel",
    "WAWebNotificationConstants",
    "WAWebNotificationsFlow.react",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeTypes.flow",
    "WAWebPDFNLogging",
    "WAWebPrimaryButterbar.react",
    "WAWebPushNotificationsGatingUtils",
    "WAWebStreamModel",
    "WAWebSubscribePushManagerAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumUserNoticeEvent",
    "cr:5037",
    "cr:5735",
    "gkx",
    "react",
    "useLazyRef",
    "useWAWebABPropConfigValue",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        container: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
      },
      f = 1e4;
    function g(t) {
      "use no forget";
      var a,
        i = t.setShowButterBar,
        l = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      (o("useWAWebModelValues").useModelValues(t.stream, [
        "displayInfo",
        "needsUpdate",
        "isHardRefresh",
      ]),
        o("useWAWebModelValues").useModelValues(t.notice, [
          "noticeId",
          "blocking",
          "banner",
          "shouldShowButterBar",
        ]));
      var u = p((a = window.Notification) == null ? void 0 : a.permission),
        d = u[0],
        g = u[1],
        h = p(!1),
        y = h[0],
        C = h[1],
        b = p(!1),
        v = b[0],
        S = b[1],
        R = p({ detected: !1 }),
        L = R[0],
        E = R[1],
        k = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "brigading_privacy_setting_enabled",
        ),
        I = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          "WABrigadingState",
        ),
        T = p(I),
        D = T[0],
        x = T[1],
        $ = p(function () {
          return !1;
        }),
        P = $[0],
        N = $[1],
        M = p(function () {
          return r("gkx")("26258")
            ? null
            : o("WAWebUserPrefsGeneral").getStorageAlert();
        }),
        w = M[0],
        A = M[1],
        F = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function (e) {
            C(e);
          });
        }),
        O = p(
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.getResumeUIProgressBarType() ===
            o("WAWebOfflineResumeTypes.flow").ResumeUIProgressBarType.ButterBar,
        ),
        B = O[0],
        W = O[1],
        q = function () {
          F.current.onOrBefore(f, !0);
        },
        U = function (t) {
          var e;
          (o("WAWebModalManager").ModalManager.open(
            c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
              messaging: e.Messaging.NOTIFICATIONS,
              onConfirm: e.guideConfirm,
              onCancel: e.notificationGuideLearnMore,
              type: e.GuidePopupType.GUIDE_ALLOW,
              enableNewBannerLogic: t,
              featureSurface: e.FeatureSurface.NOTIFICATION,
            }),
          ),
            window.Notification.requestPermission(function (e) {
              var n;
              if (
                (o(
                  "WAWebPushNotificationsGatingUtils",
                ).canShowNotificationsBanner(
                  (n = window.Notification) == null ? void 0 : n.permission,
                  t,
                ) || o("WAWebModalManager").ModalManager.close(),
                g(e),
                e === o("WAWebNotificationConstants").PERMISSION_ALLOWED)
              ) {
                var r = o(
                  "WAWebMuteCollection",
                ).MuteCollection.getGlobalNotifications();
                if (
                  (r ||
                    o(
                      "WAWebMuteCollection",
                    ).MuteCollection.setAllNotificationsAndReactions(!0),
                  o(
                    "WAWebPushNotificationsGatingUtils",
                  ).canEnableOfflineNotifications())
                ) {
                  var a = o(
                    "WAWebMuteCollection",
                  ).MuteCollection.getGlobalOfflineNotifications();
                  a ||
                    (o(
                      "WAWebSubscribePushManagerAction",
                    ).handleOfflineNotifications(!0),
                    o(
                      "WAWebMuteCollection",
                    ).MuteCollection.setGlobalOfflineNotifications(!0));
                }
              }
            }));
        },
        V = function () {
          if (
            window.Notification &&
            d === o("WAWebNotificationConstants").PERMISSION_ALLOWED
          ) {
            (o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalOfflineNotifications(!0),
              o("WAWebSubscribePushManagerAction").handleOfflineNotifications(
                !0,
              ),
              l());
            var t = s._(/*BTDS*/ "Background sync on"),
              n = s._(/*BTDS*/ "View");
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: t,
                action: {
                  actionText: n,
                  onAction: function () {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                      o(
                        "WAWebAdaptiveLayoutGatingUtils",
                      ).shouldUseDrawerDescriptor()
                        ? { descriptorType: "notifications" }
                        : c.jsx(
                            o("WAWebNotificationsFlow.react").NotificationsFlow,
                            { onEnd: o("WAWebDrawerManager").closeDrawerLeft },
                          ),
                    );
                  },
                },
              }),
              o("WAWebToastManager").ToastPosition.LEFT,
            );
          } else if (
            window.Notification &&
            d === o("WAWebNotificationConstants").PERMISSION_DEFAULT
          ) {
            var r;
            (o("WAWebModalManager").ModalManager.open(
              c.jsx((r = o("WAWebGuidePopup.react")).GuidePopup, {
                messaging: r.Messaging.BACKGROUND_SYNC,
                onConfirm: r.guideConfirm,
                onCancel: r.notificationGuideLearnMore,
                type: r.GuidePopupType.GUIDE_ALLOW,
                featureSurface: r.FeatureSurface.NOTIFICATION,
              }),
            ),
              window.Notification.requestPermission(function (e) {
                if (
                  (o("WAWebModalManager").ModalManager.close(),
                  g(e),
                  e === o("WAWebNotificationConstants").PERMISSION_ALLOWED)
                ) {
                  var t = o(
                    "WAWebMuteCollection",
                  ).MuteCollection.getGlobalOfflineNotifications();
                  t ||
                    (o(
                      "WAWebMuteCollection",
                    ).MuteCollection.setGlobalOfflineNotifications(!0),
                    o(
                      "WAWebSubscribePushManagerAction",
                    ).handleOfflineNotifications(!0));
                }
              }));
          } else
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-notif] failed: Notification unavailable/denied",
                ])),
            );
        },
        H = function () {
          return (
            r("WAWebNoticeModel").shouldShowButterBar &&
            r("WAWebNoticeModel").noticeId != null &&
            r("WAWebNoticeModel").banner != null &&
            r("WAWebNoticeModel").blocking === !1
          );
        },
        G = function () {
          H() &&
            (v ||
              (o("WAWebPDFNLogging").logUserNoticeEvent({
                noticeId: r("WAWebNoticeModel").noticeId,
                noticeContentVersion: r("WAWebNoticeModel").policyVersion,
                noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT
                  .BANNER_APPEAR,
              }),
              S(!0)));
        },
        z = function () {
          r("gkx")("26258") || A(o("WAWebUserPrefsGeneral").getStorageAlert());
        },
        j = function () {
          S(!1);
        },
        K = function () {
          N(!1);
        },
        Q = function () {
          i && i(y || v);
        };
      (m(function () {
        Q();
      }, []),
        r("useWAWebOnUnmount")(function () {
          F.current.cancel();
        }),
        o("useWAWebListener").useListener(
          r("WAWebNoticeModel"),
          "change:noticeId",
          j,
        ),
        o("useWAWebListener").useListener(
          r("WAWebNoticeModel"),
          ["change:banner", "change:blocking"],
          G,
        ),
        o("useWAWebListener").useListener(
          r("gkx")("26258") ? o("WAWebCmd").Cmd : null,
          "handle_low_storage_butter_bar",
          z,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "on_notification_permission_change",
          function () {
            g(window.Notification.permission);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "on_brigading_state_change_from_bridge",
          function (e) {
            x(e);
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebL10N"),
          "locale_changed_on_phone",
          function (e) {
            var t = e.currentLocale,
              n = e.newLocale;
            E(n !== t ? { detected: !0, newLocale: n } : { detected: !1 });
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          [
            "offline_progress_update_from_bridge",
            "offline_delivery_end_from_bridge",
          ],
          function () {
            W(
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.getResumeUIProgressBarType() ===
                o("WAWebOfflineResumeTypes.flow").ResumeUIProgressBarType
                  .ButterBar,
            );
          },
        ));
      var X = null,
        Y = n("cr:5735") ? c.jsx(n("cr:5735"), { alertType: w }) : null,
        J = L.detected
          ? c.jsx(r("WAWebLocaleManualUpdateButterbar.react"), {
              locale: L.newLocale,
            })
          : null,
        Z =
          k && D != null
            ? c.jsx(r("WAWebBrigadingButterBar.react"), {
                state: D,
                onDismiss: function () {
                  (o("WAWebUserPrefsGeneral").clearBrigadingstate(), x(null));
                },
              })
            : null;
      return c.jsxs(r("WAWebVelocityTransitionGroup"), {
        transitionName: "butterbar",
        xstyle: _.container,
        testid: void 0,
        children: [
          Z,
          X,
          Y,
          J,
          c.jsx(r("WAWebNoticeButterbar.react"), {
            shouldShow: H(),
            banner: r("WAWebNoticeModel").banner,
          }),
          c.jsx(r("WAWebPrimaryButterbar.react"), {
            displayInfo: o("WAWebStreamModel").Stream.displayInfo,
            needsUpdate: o("WAWebStreamModel").Stream.needsUpdate,
            isHardRefresh: o("WAWebStreamModel").Stream.isHardRefresh,
            showResumeProgress: B,
            showNotify: y,
            notifyPermission: d,
            onShowNotifyDelay: q,
            onRequestPermissions: U,
            onEnableOfflineNotifications: V,
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.setShowButterBar;
      return c.jsx(g, {
        stream: o("WAWebStreamModel").Stream,
        notice: r("WAWebNoticeModel"),
        setShowButterBar: t,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
