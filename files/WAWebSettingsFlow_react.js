__d(
  "WAWebSettingsFlow.react",
  [
    "JSResourceForInteraction",
    "WAWebAccountSettingsDrawer.react",
    "WAWebActiveAccountInfoContext.react",
    "WAWebBizGatingUtils",
    "WAWebBizLabelFlow.react",
    "WAWebBizRefreshedProfileDrawerLoadable",
    "WAWebBizToolsFlowLoadable",
    "WAWebBlockedDrawer.react",
    "WAWebBugnubLoadable",
    "WAWebCallsNotificationsDrawer.react",
    "WAWebChatsSettingsDrawer.react",
    "WAWebConfirmLogoutModal.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebCrashlog",
    "WAWebCurrentUser",
    "WAWebDefaultEphemeralityDrawer.react",
    "WAWebDeveloperMenuConstants",
    "WAWebDirectMessagesNotificationsDrawer.react",
    "WAWebDownloadLogsPopup.react",
    "WAWebDrawerManager",
    "WAWebGdprRequestAccountInfoSettingsDrawer.react",
    "WAWebGlobalChatThemeDrawer.react",
    "WAWebGroupMessagesNotificationsDrawer.react",
    "WAWebHelpDrawer.react",
    "WAWebKeyboardShortcutsPopup.react",
    "WAWebLanguageDrawer.react",
    "WAWebLazyLoadedRetriable",
    "WAWebMediaAutoDownloadDrawer.react",
    "WAWebMediaUploadQualityDrawer.react",
    "WAWebModalManager",
    "WAWebNewsletterDSAReportsFlow.react",
    "WAWebNotificationsDrawer.react",
    "WAWebPrivacyModeBlurPresetDrawer.react",
    "WAWebPrivacyModeCustomizePanel.react",
    "WAWebPrivacySettingsDrawer.react",
    "WAWebPrivacySettingsLastSeenOnlineDrawer.react",
    "WAWebPrivacySettingsStatusPostDrawer.react",
    "WAWebPrivacyVisibilityEditDrawer.react",
    "WAWebProfilePicThumbCollection",
    "WAWebSMBDataSharingDrawer.react",
    "WAWebScreenLockDrawer.react",
    "WAWebSecurityDrawer.react",
    "WAWebSettingsConst",
    "WAWebSettingsDrawer.react",
    "WAWebSettingsModel",
    "WAWebStatusUpdatesNotificationsDrawer.react",
    "WAWebTextStatusCollection",
    "WAWebThemePopup.react",
    "WAWebUserPrefsMeUser",
    "WAWebWallpaperDrawer.react",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
    "cr:17209",
    "cr:1923",
    "cr:1977",
    "cr:2404",
    "cr:7753",
    "cr:8751",
    "react",
    "useWAWebFlow",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      switch (e) {
        case o("WAWebSettingsConst").SettingsSteps.Theme:
          return (
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebThemePopup.react"), {}),
            ),
            !0
          );
        case o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts:
          return (
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebKeyboardShortcutsPopup.react"), {}),
            ),
            !0
          );
        case o("WAWebSettingsConst").SettingsSteps.Logout:
          return (
            o("WAWebWamUtils").forceFlushAllWamAndQplBuffers(),
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebConfirmLogoutModal.react"), { checkUnsent: !0 }),
            ),
            !0
          );
        case o("WAWebSettingsConst").SettingsSteps.Bugnub:
          return (
            o("WAWebCurrentUser").isEmployee() && r("WAWebBugnubLoadable")(),
            !0
          );
        case o("WAWebSettingsConst").SettingsSteps.DownloadLogs:
          return (
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebDownloadLogsPopup.react"), {}),
            ),
            !0
          );
        case o("WAWebSettingsConst").SettingsSteps.DeveloperInfraSettings:
          return (
            o("WAWebCurrentUser").isEmployee() &&
              r("WAWebLazyLoadedRetriable")(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = yield r("JSResourceForInteraction")(
                    "WAWebMdDebugSetting.react",
                  )
                    .__setRef("WAWebSettingsFlow.react")
                    .load();
                  return e;
                }),
                "MdDebugSetting",
              )().then(function (e) {
                o("WAWebModalManager").ModalManager.open(s.jsx(e, {}));
              }),
            !0
          );
        default:
          return !1;
      }
    }
    function d(e) {
      var t = e.initialStep,
        a = t === void 0 ? o("WAWebSettingsConst").SettingsSteps.Settings : t,
        i = e.onEnd,
        l = e.activeAccountInfo,
        d = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        m = l != null ? l : d,
        p = o("WAWebUserPrefsMeUser").getMeUser(),
        _ = o("useWAWebFlow").useFlow(a, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: i,
        }),
        f = _[0],
        g = _[1],
        h = o("WAWebBizGatingUtils").businessProfileRefreshEnabled(),
        y = u(null),
        C = y[0],
        b = y[1],
        v = r("useWAWebFocusOnMount")();
      if (!g.step) return null;
      if (c(g.step)) {
        g.end();
        return;
      }
      var S = function () {
          g.pop();
        },
        R = function (t) {
          c(t) ||
            (t === o("WAWebSettingsConst").SettingsSteps.Help &&
              o("WAWebCrashlog").upload({
                reason: "help-page-opened",
                isHighPri: !0,
                logType: o("WAWebCrashlog").LogType.SUPPORT,
              }),
            g.push(t));
        },
        L;
      switch (g.step) {
        case o("WAWebSettingsConst").SettingsSteps.Settings:
          L = s.jsx(r("WAWebSettingsDrawer.react"), {
            profileId: p,
            onProfile: function () {
              h
                ? o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                    s.jsx(
                      o("WAWebBizRefreshedProfileDrawerLoadable")
                        .WAWebBizRefreshedProfileDrawerLoadable,
                      {
                        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                          .SETTINGS,
                        onClose: function () {
                          return o(
                            "WAWebDrawerManager",
                          ).DrawerManager.closeDrawerMid();
                        },
                      },
                    ),
                  )
                : g.push(o("WAWebSettingsConst").SettingsSteps.Profile);
            },
            onClose: S,
            onSettingClick: R,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Wallpaper:
          L = s.jsx(r("WAWebWallpaperDrawer.react"), {
            chat: null,
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.ChatTheme:
          L = s.jsx(r("WAWebGlobalChatThemeDrawer.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings:
          L = s.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawer.react"), {
            settings: r("WAWebSettingsModel"),
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.NewsletterReports:
          L = s.jsx(r("WAWebNewsletterDSAReportsFlow.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Blocked:
          L = s.jsx(r("WAWebBlockedDrawer.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Profile: {
          var E = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
              p,
            ),
            k = o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.assertGet(p),
            I = o("WAWebContactCollection").ContactCollection.assertGet(p);
          L = s.jsx(n("cr:1923"), {
            status: E,
            profilePicThumb: k,
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS,
            contact: I,
            conn: o("WAWebConnModel").Conn,
            onClose: S,
            isInitialStep: !1,
          });
          break;
        }
        case o("WAWebSettingsConst").SettingsSteps.Notifications:
          L = s.jsx(r("WAWebNotificationsDrawer.react"), {
            onClose: S,
            onShowNotificationBannerClick: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner,
              );
            },
            onTaskbarNotificationSettingsClick: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps
                  .TaskbarNotificationSettings,
              );
            },
            onOpenCalls: function () {
              return g.push(o("WAWebSettingsConst").SettingsSteps.Calls);
            },
            onOpenDirectMessages: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps.DirectMessages,
              );
            },
            onOpenGroupMessages: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps.GroupMessages,
              );
            },
            onOpenStatusUpdates: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps.StatusUpdates,
              );
            },
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.DirectMessages:
          L = s.jsx(r("WAWebDirectMessagesNotificationsDrawer.react"), {
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.GroupMessages:
          L = s.jsx(r("WAWebGroupMessagesNotificationsDrawer.react"), {
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.StatusUpdates:
          L = s.jsx(r("WAWebStatusUpdatesNotificationsDrawer.react"), {
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Calls:
          L = s.jsx(r("WAWebCallsNotificationsDrawer.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Language:
          L = s.jsx(r("WAWebLanguageDrawer.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Lists:
          L = s.jsx(r("WAWebBizLabelFlow.react"), { isInitialStep: !1 });
          break;
        case o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload:
          L = s.jsx(r("WAWebMediaAutoDownloadDrawer.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality:
          L = s.jsx(r("WAWebMediaUploadQualityDrawer.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Security:
          L = s.jsx(r("WAWebSecurityDrawer.react"), { onClose: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.PrivacyVisiblityEditLastSeen:
          L = s.jsx(r("WAWebPrivacySettingsLastSeenOnlineDrawer.react"), {
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps
          .PrivacyVisiblityEditProfilePicture:
          L = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
            onClose: S,
            category: "profilePicture",
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.PrivacyVisiblityEditAbout:
          L = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
            onClose: S,
            category: "about",
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.PrivacyVisiblityEditStatus:
          L = s.jsx(r("WAWebPrivacySettingsStatusPostDrawer.react"), {
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.PrivacyVisiblityEditGroupAdd:
          L = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
            onClose: S,
            category: "groupAdd",
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.PrivacySettings: {
          var T = function (t) {
              switch (t) {
                case "lastSeen":
                  g.push(
                    o("WAWebSettingsConst").SettingsSteps
                      .PrivacyVisiblityEditLastSeen,
                  );
                  break;
                case "about":
                  g.push(
                    o("WAWebSettingsConst").SettingsSteps
                      .PrivacyVisiblityEditAbout,
                  );
                  break;
                case "groupAdd":
                  g.push(
                    o("WAWebSettingsConst").SettingsSteps
                      .PrivacyVisiblityEditGroupAdd,
                  );
                  break;
                case "profilePicture":
                  g.push(
                    o("WAWebSettingsConst").SettingsSteps
                      .PrivacyVisiblityEditProfilePicture,
                  );
                  break;
              }
            },
            D = function () {
              g.push(o("WAWebSettingsConst").SettingsSteps.Blocked);
            },
            x = function () {
              g.push(o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality);
            },
            $ = function () {
              g.push(o("WAWebSettingsConst").SettingsSteps.ScreenLock);
            },
            P = function () {
              g.push(
                o("WAWebSettingsConst").SettingsSteps
                  .PrivacyVisiblityEditStatus,
              );
            },
            N = function () {
              g.push(
                o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize,
              );
            };
          L = s.jsx(
            o("WAWebPrivacySettingsDrawer.react").PrivacySettingsDrawer,
            {
              onClose: S,
              onOpenVisibilityEditDrawer: T,
              onOpenBlockedContacts: D,
              onOpenEphemeralityDrawer: x,
              onOpenPrivacyScreenCustomize: N,
              onOpenScreenLockDrawer: $,
              onOpenStatusPrivacySettingDrawer: P,
            },
          );
          break;
        }
        case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize:
          L = s.jsx(r("WAWebPrivacyModeCustomizePanel.react"), {
            onBack: S,
            onOpenBlurPreset: function (t) {
              (b(t),
                g.push(
                  o("WAWebSettingsConst").SettingsSteps.PrivacyScreenBlurPreset,
                ));
            },
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenBlurPreset:
          C != null &&
            (L = s.jsx(r("WAWebPrivacyModeBlurPresetDrawer.react"), {
              category: C,
              onBack: S,
            }));
          break;
        case o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality:
          L = s.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
            onClose: S,
            entryPoint: o("WAWebWamEnumDisappearingModeEntryPointType")
              .DISAPPEARING_MODE_ENTRY_POINT_TYPE.ACCOUNT_SETTINGS,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Help:
          L = s.jsx(r("WAWebHelpDrawer.react"), {
            onClose: S,
            onNewsletterReports: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps.NewsletterReports,
              );
            },
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Developer: {
          n("cr:8751") && (L = s.jsx(n("cr:8751"), { onBack: S }));
          break;
        }
        case o("WAWebSettingsConst").SettingsSteps.DeveloperABProps: {
          n("cr:8751") &&
            (L = s.jsx(n("cr:8751"), {
              onBack: S,
              initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu
                .ABProps,
            }));
          break;
        }
        case o("WAWebSettingsConst").SettingsSteps.DeveloperGroupABProps: {
          n("cr:8751") &&
            (L = s.jsx(n("cr:8751"), {
              onBack: S,
              initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu
                .GroupABProps,
            }));
          break;
        }
        case o("WAWebSettingsConst").SettingsSteps.BusinessTools:
          L = s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
            adsAccountInfo: m,
            entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType")
              .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_SETTINGS,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.DataSharing:
          L = s.jsx(r("WAWebSMBDataSharingDrawer.react"), {
            onClose: S,
            entrypoint: o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
              .ENTRY_POINT_SETTINGS_SCREEN,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.ScreenLock:
          L = s.jsx(r("WAWebScreenLockDrawer.react"), { onBack: S });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Account:
          L = s.jsx(r("WAWebAccountSettingsDrawer.react"), {
            onClickSecurity: function () {
              return g.push(o("WAWebSettingsConst").SettingsSteps.Security);
            },
            onClickRequestAccountInfo: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps
                  .RequestAccountInfoSettings,
              );
            },
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.Chats:
          L = s.jsx(r("WAWebChatsSettingsDrawer.react"), {
            onClickChatTheme: function () {
              return g.push(o("WAWebSettingsConst").SettingsSteps.ChatTheme);
            },
            onClickTheme: function () {
              return c(o("WAWebSettingsConst").SettingsSteps.Theme);
            },
            onClickWallpaper: function () {
              return g.push(o("WAWebSettingsConst").SettingsSteps.Wallpaper);
            },
            onClickMediaAutoDownload: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload,
              );
            },
            onClickMediaUploadQuality: function () {
              return g.push(
                o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality,
              );
            },
            onClose: S,
          });
          break;
        case o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner:
          n("cr:7753") && (L = s.jsx(n("cr:7753"), { onClose: S }));
          break;
        case o("WAWebSettingsConst").SettingsSteps.TaskbarNotificationSettings:
          n("cr:2404") && (L = s.jsx(n("cr:2404"), { onClose: S }));
          break;
        case o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings:
          n("cr:1977") && (L = s.jsx(n("cr:1977"), { onClose: S }));
          break;
        case o("WAWebSettingsConst").SettingsSteps.WinDevicesSettings:
          n("cr:17209") && (L = s.jsx(n("cr:17209"), { onClose: S }));
        default:
      }
      return s.jsx(f, { ref: v, flow: g, children: L });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.SettingsFlow = d));
  },
  98,
);
