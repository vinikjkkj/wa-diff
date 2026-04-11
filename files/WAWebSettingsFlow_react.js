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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(145),
        a = e.initialStep,
        i = e.onEnd,
        l = e.activeAccountInfo,
        d = a === void 0 ? o("WAWebSettingsConst").SettingsSteps.Settings : a,
        _ = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        f = l != null ? l : _,
        g = o("WAWebUserPrefsMeUser").getMeUser(),
        h;
      t[0] !== i
        ? ((h = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: i,
          }),
          (t[0] = i),
          (t[1] = h))
        : (h = t[1]);
      var y = o("useWAWebFlow").useFlow(d, h),
        C = y[0],
        b = y[1],
        v;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = o("WAWebBizGatingUtils").businessProfileRefreshEnabled()),
          (t[2] = v))
        : (v = t[2]);
      var S = v,
        R = u(null),
        L = R[0],
        E = R[1],
        k = r("useWAWebFocusOnMount")();
      if (!b.step) return null;
      if (c(b.step)) {
        b.end();
        return;
      }
      var I;
      t[3] !== b
        ? ((I = function () {
            b.pop();
          }),
          (t[3] = b),
          (t[4] = I))
        : (I = t[4]);
      var T = I,
        D;
      t[5] !== b
        ? ((D = function (t) {
            c(t) ||
              (t === o("WAWebSettingsConst").SettingsSteps.Help &&
                o("WAWebCrashlog").upload({
                  reason: "help-page-opened",
                  isHighPri: !0,
                  logType: o("WAWebCrashlog").LogType.SUPPORT,
                }),
              b.push(t));
          }),
          (t[5] = b),
          (t[6] = D))
        : (D = t[6]);
      var x = D,
        $;
      e: switch (b.step) {
        case o("WAWebSettingsConst").SettingsSteps.Settings: {
          var P;
          (t[7] !== b
            ? ((P = function () {
                S
                  ? o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                      s.jsx(
                        o("WAWebBizRefreshedProfileDrawerLoadable")
                          .WAWebBizRefreshedProfileDrawerLoadable,
                        {
                          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                            .SETTINGS,
                          onClose: p,
                        },
                      ),
                    )
                  : b.push(o("WAWebSettingsConst").SettingsSteps.Profile);
              }),
              (t[7] = b),
              (t[8] = P))
            : (P = t[8]),
            ($ = s.jsx(r("WAWebSettingsDrawer.react"), {
              profileId: g,
              onProfile: P,
              onClose: T,
              onSettingClick: x,
            })));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Wallpaper: {
          var N;
          (t[9] !== T
            ? ((N = s.jsx(r("WAWebWallpaperDrawer.react"), {
                chat: null,
                onClose: T,
              })),
              (t[9] = T),
              (t[10] = N))
            : (N = t[10]),
            ($ = N));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.ChatTheme: {
          var M;
          (t[11] !== T
            ? ((M = s.jsx(r("WAWebGlobalChatThemeDrawer.react"), {
                onClose: T,
              })),
              (t[11] = T),
              (t[12] = M))
            : (M = t[12]),
            ($ = M));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings: {
          var w;
          (t[13] !== T
            ? ((w = s.jsx(
                r("WAWebGdprRequestAccountInfoSettingsDrawer.react"),
                { settings: r("WAWebSettingsModel"), onClose: T },
              )),
              (t[13] = T),
              (t[14] = w))
            : (w = t[14]),
            ($ = w));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.NewsletterReports: {
          var A;
          (t[15] !== T
            ? ((A = s.jsx(r("WAWebNewsletterDSAReportsFlow.react"), {
                onClose: T,
              })),
              (t[15] = T),
              (t[16] = A))
            : (A = t[16]),
            ($ = A));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Blocked: {
          var F;
          (t[17] !== T
            ? ((F = s.jsx(r("WAWebBlockedDrawer.react"), { onClose: T })),
              (t[17] = T),
              (t[18] = F))
            : (F = t[18]),
            ($ = F));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Profile: {
          var O = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
              g,
            ),
            B = o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.assertGet(g),
            W = o("WAWebContactCollection").ContactCollection.assertGet(g),
            q;
          (t[19] !== W || t[20] !== T || t[21] !== B || t[22] !== O
            ? ((q = s.jsx(n("cr:1923"), {
                status: O,
                profilePicThumb: B,
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS,
                contact: W,
                conn: o("WAWebConnModel").Conn,
                onClose: T,
                isInitialStep: !1,
              })),
              (t[19] = W),
              (t[20] = T),
              (t[21] = B),
              (t[22] = O),
              (t[23] = q))
            : (q = t[23]),
            ($ = q));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Notifications: {
          var U, V, H, G, z, j;
          t[24] !== b
            ? ((V = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner,
                );
              }),
              (H = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps
                    .TaskbarNotificationSettings,
                );
              }),
              (G = function () {
                return b.push(o("WAWebSettingsConst").SettingsSteps.Calls);
              }),
              (z = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps.DirectMessages,
                );
              }),
              (j = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps.GroupMessages,
                );
              }),
              (U = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps.StatusUpdates,
                );
              }),
              (t[24] = b),
              (t[25] = U),
              (t[26] = V),
              (t[27] = H),
              (t[28] = G),
              (t[29] = z),
              (t[30] = j))
            : ((U = t[25]),
              (V = t[26]),
              (H = t[27]),
              (G = t[28]),
              (z = t[29]),
              (j = t[30]));
          var K;
          (t[31] !== T ||
          t[32] !== U ||
          t[33] !== V ||
          t[34] !== H ||
          t[35] !== G ||
          t[36] !== z ||
          t[37] !== j
            ? ((K = s.jsx(r("WAWebNotificationsDrawer.react"), {
                onClose: T,
                onShowNotificationBannerClick: V,
                onTaskbarNotificationSettingsClick: H,
                onOpenCalls: G,
                onOpenDirectMessages: z,
                onOpenGroupMessages: j,
                onOpenStatusUpdates: U,
              })),
              (t[31] = T),
              (t[32] = U),
              (t[33] = V),
              (t[34] = H),
              (t[35] = G),
              (t[36] = z),
              (t[37] = j),
              (t[38] = K))
            : (K = t[38]),
            ($ = K));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.DirectMessages: {
          var Q;
          (t[39] !== T
            ? ((Q = s.jsx(r("WAWebDirectMessagesNotificationsDrawer.react"), {
                onClose: T,
              })),
              (t[39] = T),
              (t[40] = Q))
            : (Q = t[40]),
            ($ = Q));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.GroupMessages: {
          var X;
          (t[41] !== T
            ? ((X = s.jsx(r("WAWebGroupMessagesNotificationsDrawer.react"), {
                onClose: T,
              })),
              (t[41] = T),
              (t[42] = X))
            : (X = t[42]),
            ($ = X));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.StatusUpdates: {
          var Y;
          (t[43] !== T
            ? ((Y = s.jsx(r("WAWebStatusUpdatesNotificationsDrawer.react"), {
                onClose: T,
              })),
              (t[43] = T),
              (t[44] = Y))
            : (Y = t[44]),
            ($ = Y));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Calls: {
          var J;
          (t[45] !== T
            ? ((J = s.jsx(r("WAWebCallsNotificationsDrawer.react"), {
                onClose: T,
              })),
              (t[45] = T),
              (t[46] = J))
            : (J = t[46]),
            ($ = J));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Language: {
          var Z;
          (t[47] !== T
            ? ((Z = s.jsx(r("WAWebLanguageDrawer.react"), { onClose: T })),
              (t[47] = T),
              (t[48] = Z))
            : (Z = t[48]),
            ($ = Z));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Lists: {
          var ee;
          (t[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((ee = s.jsx(r("WAWebBizLabelFlow.react"), {
                isInitialStep: !1,
              })),
              (t[49] = ee))
            : (ee = t[49]),
            ($ = ee));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload: {
          var te;
          (t[50] !== T
            ? ((te = s.jsx(r("WAWebMediaAutoDownloadDrawer.react"), {
                onClose: T,
              })),
              (t[50] = T),
              (t[51] = te))
            : (te = t[51]),
            ($ = te));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality: {
          var ne;
          (t[52] !== T
            ? ((ne = s.jsx(r("WAWebMediaUploadQualityDrawer.react"), {
                onClose: T,
              })),
              (t[52] = T),
              (t[53] = ne))
            : (ne = t[53]),
            ($ = ne));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Security: {
          var re;
          (t[54] !== T
            ? ((re = s.jsx(r("WAWebSecurityDrawer.react"), { onClose: T })),
              (t[54] = T),
              (t[55] = re))
            : (re = t[55]),
            ($ = re));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps
          .PrivacyVisiblityEditLastSeen: {
          var oe;
          (t[56] !== T
            ? ((oe = s.jsx(
                r("WAWebPrivacySettingsLastSeenOnlineDrawer.react"),
                { onClose: T },
              )),
              (t[56] = T),
              (t[57] = oe))
            : (oe = t[57]),
            ($ = oe));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps
          .PrivacyVisiblityEditProfilePicture: {
          var ae;
          (t[58] !== T
            ? ((ae = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
                onClose: T,
                category: "profilePicture",
              })),
              (t[58] = T),
              (t[59] = ae))
            : (ae = t[59]),
            ($ = ae));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.PrivacyVisiblityEditAbout: {
          var ie;
          (t[60] !== T
            ? ((ie = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
                onClose: T,
                category: "about",
              })),
              (t[60] = T),
              (t[61] = ie))
            : (ie = t[61]),
            ($ = ie));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.PrivacyVisiblityEditStatus: {
          var le;
          (t[62] !== T
            ? ((le = s.jsx(r("WAWebPrivacySettingsStatusPostDrawer.react"), {
                onClose: T,
              })),
              (t[62] = T),
              (t[63] = le))
            : (le = t[63]),
            ($ = le));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps
          .PrivacyVisiblityEditGroupAdd: {
          var se;
          (t[64] !== T
            ? ((se = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
                onClose: T,
                category: "groupAdd",
              })),
              (t[64] = T),
              (t[65] = se))
            : (se = t[65]),
            ($ = se));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.PrivacySettings: {
          var ue;
          t[66] !== b
            ? ((ue = function (t) {
                t: switch (t) {
                  case "lastSeen": {
                    b.push(
                      o("WAWebSettingsConst").SettingsSteps
                        .PrivacyVisiblityEditLastSeen,
                    );
                    break t;
                  }
                  case "about": {
                    b.push(
                      o("WAWebSettingsConst").SettingsSteps
                        .PrivacyVisiblityEditAbout,
                    );
                    break t;
                  }
                  case "groupAdd": {
                    b.push(
                      o("WAWebSettingsConst").SettingsSteps
                        .PrivacyVisiblityEditGroupAdd,
                    );
                    break t;
                  }
                  case "profilePicture":
                    b.push(
                      o("WAWebSettingsConst").SettingsSteps
                        .PrivacyVisiblityEditProfilePicture,
                    );
                }
              }),
              (t[66] = b),
              (t[67] = ue))
            : (ue = t[67]);
          var ce = ue,
            de;
          t[68] !== b
            ? ((de = function () {
                b.push(o("WAWebSettingsConst").SettingsSteps.Blocked);
              }),
              (t[68] = b),
              (t[69] = de))
            : (de = t[69]);
          var me = de,
            pe;
          t[70] !== b
            ? ((pe = function () {
                b.push(
                  o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality,
                );
              }),
              (t[70] = b),
              (t[71] = pe))
            : (pe = t[71]);
          var _e = pe,
            fe;
          t[72] !== b
            ? ((fe = function () {
                b.push(o("WAWebSettingsConst").SettingsSteps.ScreenLock);
              }),
              (t[72] = b),
              (t[73] = fe))
            : (fe = t[73]);
          var ge = fe,
            he;
          t[74] !== b
            ? ((he = function () {
                b.push(
                  o("WAWebSettingsConst").SettingsSteps
                    .PrivacyVisiblityEditStatus,
                );
              }),
              (t[74] = b),
              (t[75] = he))
            : (he = t[75]);
          var ye = he,
            Ce;
          t[76] !== b
            ? ((Ce = function () {
                b.push(
                  o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize,
                );
              }),
              (t[76] = b),
              (t[77] = Ce))
            : (Ce = t[77]);
          var be = Ce,
            ve;
          (t[78] !== T ||
          t[79] !== me ||
          t[80] !== _e ||
          t[81] !== be ||
          t[82] !== ce ||
          t[83] !== ge ||
          t[84] !== ye
            ? ((ve = s.jsx(
                o("WAWebPrivacySettingsDrawer.react").PrivacySettingsDrawer,
                {
                  onClose: T,
                  onOpenVisibilityEditDrawer: ce,
                  onOpenBlockedContacts: me,
                  onOpenEphemeralityDrawer: _e,
                  onOpenPrivacyScreenCustomize: be,
                  onOpenScreenLockDrawer: ge,
                  onOpenStatusPrivacySettingDrawer: ye,
                },
              )),
              (t[78] = T),
              (t[79] = me),
              (t[80] = _e),
              (t[81] = be),
              (t[82] = ce),
              (t[83] = ge),
              (t[84] = ye),
              (t[85] = ve))
            : (ve = t[85]),
            ($ = ve));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize: {
          var Se;
          t[86] !== b
            ? ((Se = function (t) {
                (E(t),
                  b.push(
                    o("WAWebSettingsConst").SettingsSteps
                      .PrivacyScreenBlurPreset,
                  ));
              }),
              (t[86] = b),
              (t[87] = Se))
            : (Se = t[87]);
          var Re;
          (t[88] !== T || t[89] !== Se
            ? ((Re = s.jsx(r("WAWebPrivacyModeCustomizePanel.react"), {
                onBack: T,
                onOpenBlurPreset: Se,
              })),
              (t[88] = T),
              (t[89] = Se),
              (t[90] = Re))
            : (Re = t[90]),
            ($ = Re));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenBlurPreset: {
          if (L != null) {
            var Le;
            (t[91] !== L || t[92] !== T
              ? ((Le = s.jsx(r("WAWebPrivacyModeBlurPresetDrawer.react"), {
                  category: L,
                  onBack: T,
                })),
                (t[91] = L),
                (t[92] = T),
                (t[93] = Le))
              : (Le = t[93]),
              ($ = Le));
          }
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality: {
          var Ee;
          (t[94] !== T
            ? ((Ee = s.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
                onClose: T,
                entryPoint: o("WAWebWamEnumDisappearingModeEntryPointType")
                  .DISAPPEARING_MODE_ENTRY_POINT_TYPE.ACCOUNT_SETTINGS,
              })),
              (t[94] = T),
              (t[95] = Ee))
            : (Ee = t[95]),
            ($ = Ee));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Help: {
          var ke;
          t[96] !== b
            ? ((ke = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps.NewsletterReports,
                );
              }),
              (t[96] = b),
              (t[97] = ke))
            : (ke = t[97]);
          var Ie;
          (t[98] !== T || t[99] !== ke
            ? ((Ie = s.jsx(r("WAWebHelpDrawer.react"), {
                onClose: T,
                onNewsletterReports: ke,
              })),
              (t[98] = T),
              (t[99] = ke),
              (t[100] = Ie))
            : (Ie = t[100]),
            ($ = Ie));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Developer: {
          if (n("cr:8751")) {
            var Te;
            (t[101] !== T
              ? ((Te = s.jsx(n("cr:8751"), { onBack: T })),
                (t[101] = T),
                (t[102] = Te))
              : (Te = t[102]),
              ($ = Te));
          }
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.DeveloperABProps: {
          if (n("cr:8751")) {
            var De;
            (t[103] !== T
              ? ((De = s.jsx(n("cr:8751"), {
                  onBack: T,
                  initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu
                    .ABProps,
                })),
                (t[103] = T),
                (t[104] = De))
              : (De = t[104]),
              ($ = De));
          }
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.DeveloperGroupABProps: {
          if (n("cr:8751")) {
            var xe;
            (t[105] !== T
              ? ((xe = s.jsx(n("cr:8751"), {
                  onBack: T,
                  initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu
                    .GroupABProps,
                })),
                (t[105] = T),
                (t[106] = xe))
              : (xe = t[106]),
              ($ = xe));
          }
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.BusinessTools: {
          var $e;
          (t[107] !== f
            ? (($e = s.jsx(
                o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable,
                {
                  adsAccountInfo: f,
                  entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType")
                    .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_SETTINGS,
                },
              )),
              (t[107] = f),
              (t[108] = $e))
            : ($e = t[108]),
            ($ = $e));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.DataSharing: {
          var Pe;
          (t[109] !== T
            ? ((Pe = s.jsx(r("WAWebSMBDataSharingDrawer.react"), {
                onClose: T,
                entrypoint: o(
                  "WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
                ).SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
                  .ENTRY_POINT_SETTINGS_SCREEN,
              })),
              (t[109] = T),
              (t[110] = Pe))
            : (Pe = t[110]),
            ($ = Pe));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.ScreenLock: {
          var Ne;
          (t[111] !== T
            ? ((Ne = s.jsx(r("WAWebScreenLockDrawer.react"), { onBack: T })),
              (t[111] = T),
              (t[112] = Ne))
            : (Ne = t[112]),
            ($ = Ne));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Account: {
          var Me, we;
          t[113] !== b
            ? ((Me = function () {
                return b.push(o("WAWebSettingsConst").SettingsSteps.Security);
              }),
              (we = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps
                    .RequestAccountInfoSettings,
                );
              }),
              (t[113] = b),
              (t[114] = Me),
              (t[115] = we))
            : ((Me = t[114]), (we = t[115]));
          var Ae;
          (t[116] !== T || t[117] !== Me || t[118] !== we
            ? ((Ae = s.jsx(r("WAWebAccountSettingsDrawer.react"), {
                onClickSecurity: Me,
                onClickRequestAccountInfo: we,
                onClose: T,
              })),
              (t[116] = T),
              (t[117] = Me),
              (t[118] = we),
              (t[119] = Ae))
            : (Ae = t[119]),
            ($ = Ae));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.Chats: {
          var Fe;
          t[120] !== b
            ? ((Fe = function () {
                return b.push(o("WAWebSettingsConst").SettingsSteps.ChatTheme);
              }),
              (t[120] = b),
              (t[121] = Fe))
            : (Fe = t[121]);
          var Oe, Be, We;
          t[122] !== b
            ? ((Oe = function () {
                return b.push(o("WAWebSettingsConst").SettingsSteps.Wallpaper);
              }),
              (Be = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload,
                );
              }),
              (We = function () {
                return b.push(
                  o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality,
                );
              }),
              (t[122] = b),
              (t[123] = Oe),
              (t[124] = Be),
              (t[125] = We))
            : ((Oe = t[123]), (Be = t[124]), (We = t[125]));
          var qe;
          (t[126] !== T ||
          t[127] !== Fe ||
          t[128] !== Oe ||
          t[129] !== Be ||
          t[130] !== We
            ? ((qe = s.jsx(r("WAWebChatsSettingsDrawer.react"), {
                onClickChatTheme: Fe,
                onClickTheme: m,
                onClickWallpaper: Oe,
                onClickMediaAutoDownload: Be,
                onClickMediaUploadQuality: We,
                onClose: T,
              })),
              (t[126] = T),
              (t[127] = Fe),
              (t[128] = Oe),
              (t[129] = Be),
              (t[130] = We),
              (t[131] = qe))
            : (qe = t[131]),
            ($ = qe));
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner: {
          if (n("cr:7753")) {
            var Ue;
            (t[132] !== T
              ? ((Ue = s.jsx(n("cr:7753"), { onClose: T })),
                (t[132] = T),
                (t[133] = Ue))
              : (Ue = t[133]),
              ($ = Ue));
          }
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps
          .TaskbarNotificationSettings: {
          if (n("cr:2404")) {
            var Ve;
            (t[134] !== T
              ? ((Ve = s.jsx(n("cr:2404"), { onClose: T })),
                (t[134] = T),
                (t[135] = Ve))
              : (Ve = t[135]),
              ($ = Ve));
          }
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings: {
          if (n("cr:1977")) {
            var He;
            (t[136] !== T
              ? ((He = s.jsx(n("cr:1977"), { onClose: T })),
                (t[136] = T),
                (t[137] = He))
              : (He = t[137]),
              ($ = He));
          }
          break e;
        }
        case o("WAWebSettingsConst").SettingsSteps.WinDevicesSettings:
          if (n("cr:17209")) {
            var Ge;
            (t[138] !== T
              ? ((Ge = s.jsx(n("cr:17209"), { onClose: T })),
                (t[138] = T),
                (t[139] = Ge))
              : (Ge = t[139]),
              ($ = Ge));
          }
        default:
      }
      var ze;
      return (
        t[140] !== C || t[141] !== $ || t[142] !== b || t[143] !== k
          ? ((ze = s.jsx(C, { ref: k, flow: b, children: $ })),
            (t[140] = C),
            (t[141] = $),
            (t[142] = b),
            (t[143] = k),
            (t[144] = ze))
          : (ze = t[144]),
        ze
      );
    }
    function m() {
      return c(o("WAWebSettingsConst").SettingsSteps.Theme);
    }
    function p() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
    }
    l.SettingsFlow = d;
  },
  98,
);
