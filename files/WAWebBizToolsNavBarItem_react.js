__d(
  "WAWebBizToolsNavBarItem.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBizToolsFlowLoadable",
    "WAWebBusinessProfileCollection",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebMobilePlatforms",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebNux",
    "WAWebSMBUserJourneyLogger",
    "WAWebStorefrontFilledIcon.react",
    "WAWebStorefrontIcon.react",
    "WAWebUnreadActivityIndicator.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAudienceImportIsFeatureSupported",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      "use no forget";
      var t = e.activeAccountInfo,
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l = o("WAWebMobilePlatforms").isSMB(),
        c = d(function () {
          return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        }, []),
        p = m(!1),
        _ = p[0],
        f = p[1];
      l &&
        o("WAWebBusinessProfileCollection")
          .BusinessProfileCollection.find(c)
          .then(function () {
            f(!0);
          });
      var g = d(
          function () {
            return o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.get(c);
          },
          [c],
        ),
        h = o(
          "useWAWebAudienceImportIsFeatureSupported",
        ).useWAWebAudienceImportIsFeatureSupported(),
        y = r("useWAWebNux")(
          o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD,
        ),
        C = y[0],
        b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(g, "change:profileOptions", b);
      var v =
          _ &&
          !o(
            "WAWebBizGatingUtils",
          ).blockCatalogCreationECommerceComplianceIndia(g),
        S =
          a === o("WAWebNavBarTypes").NavBarItems.BizTools
            ? u.jsx(
                o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon,
                {},
              )
            : u.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {}),
        R = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (a !== o("WAWebNavBarTypes").NavBarItems.BizTools) {
              var e = yield o(
                "WAWebDrawerManager",
              ).DrawerManager.openDrawerLeftAsync(
                u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                  adsAccountInfo: t,
                  entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType")
                    .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_BUSINESS_TOOLS_TAB,
                }),
                {
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  transition: "pop-drawer-fast",
                  focusOnUnMount: !0,
                },
              );
              e &&
                (i(o("WAWebNavBarTypes").NavBarItems.BizTools),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .BUSINESS_TOOLS,
                ),
                o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                  featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                    .SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
                  userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                    .SMB_USER_ACTION_TYPE_ENUM.CLICK,
                  surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
                  userActionTarget: "business_tools_button",
                }));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        L = s._(/*BTDS*/ "Tools"),
        E = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: S,
          title: L,
          testid: void 0,
          isActive: a === o("WAWebNavBarTypes").NavBarItems.BizTools,
          onClick: R,
          inlineActivityIndicator:
            C && h === !0
              ? u.jsx(r("WAWebUnreadActivityIndicator.react"), {})
              : null,
          inlineActivityIndicatorType: o("WAWebNavBarItem.react")
            .InlineActivityIndicatorType.Dot,
        });
      return l && v && o("WAWebBizGatingUtils").isBizToolsDrawerEnabled()
        ? E
        : null;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.BizToolsNavBarItem = p));
  },
  226,
);
