__d(
  "WAWebDeveloperMenuDeveloperDrawer.react",
  [
    "JSResourceForInteraction",
    "WAJids",
    "WAWebBusinessIcon.react",
    "WAWebCallNewRefreshedIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebDebugWWWSettings.react",
    "WAWebDeveloperMenuDeveloperMenuIcons.react",
    "WAWebDeveloperMenuPromotedDebugCommands.react",
    "WAWebDeveloperMenuSVG.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebE2EStatusIcon.react",
    "WAWebExternalLink.react",
    "WAWebGlobals",
    "WAWebImageIcon.react",
    "WAWebInfoAltIcon.react",
    "WAWebMdDebugSetting.react",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebModelStatsModal.react",
    "WAWebRecalledIcon.react",
    "WAWebSettingsIcon.react",
    "WAWebVoipGatingUtils",
    "WDSIconIcDescription.react",
    "WDSIconIcStore.react",
    "WDSIconWdsIcChat.react",
    "WDSText.react",
    "WDSVars.stylex",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = e.onABProps,
        n = e.onDebugCommands,
        a = e.onGroupABProps,
        i = e.onNuxManager,
        l = e.onSimulateNativeANR,
        s = e.onVoipUiDebug,
        c = e.onVoipWasmSamples;
      return u.jsxs(o("WAWebMenu.react").WAWebMenu, {
        size: "medium",
        colorScheme: "default",
        material: !0,
        children: [
          u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Common" }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "ab-props",
            testid: void 0,
            detailLeft: u.jsx(
              o("WAWebDeveloperMenuDeveloperMenuIcons.react").ABPropsIcon,
              {},
            ),
            onSelect: t,
            primary: "ABProps",
            searchCriteria: "ABProps",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "group-ab-props",
            testid: void 0,
            detailLeft: u.jsx(
              o("WAWebDeveloperMenuDeveloperMenuIcons.react").ABPropsIcon,
              {},
            ),
            onSelect: a,
            primary: "Group ABProps",
            searchCriteria: "Group ABProps",
          }),
          u.jsx(
            o("WAWebDeveloperMenuPromotedDebugCommands.react").DebugCommands,
            {},
          ),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "debug-drawer",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {}),
            onSelect: n,
            primary: "Debug Commands Explorer",
            searchCriteria: "Debug Commands Explorer",
          }),
          u.jsx(
            o("WAWebDeveloperMenuPromotedDebugCommands.react").ErrorToast,
            {},
          ),
          u.jsx(
            o("WAWebDeveloperMenuPromotedDebugCommands.react")
              .ShowHiddenBotChats,
            {},
          ),
          u.jsx(
            o("WAWebDeveloperMenuPromotedDebugCommands.react").E2EDebugMode,
            {},
          ),
          u.jsx(
            o("WAWebDeveloperMenuPromotedDebugCommands.react").VPVOverlay,
            {},
          ),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "nux-manager",
            testid: void 0,
            detailLeft: u.jsx(
              o("WAWebDeveloperMenuDeveloperMenuIcons.react").NUXManagerIcon,
              {},
            ),
            onSelect: i,
            primary: "NUX Manager",
            searchCriteria: "NUX Manager",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "svg-components",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
              height: 24,
              width: 24,
            }),
            onSelect: f,
            primary: "SVG Components",
            searchCriteria: "SVG Components",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "showroom",
            testid: void 0,
            detailLeft: u.jsx(r("WDSIconIcStore.react"), {}),
            onSelect: g,
            primary: "UI Showroom",
            searchCriteria: "UI Showroom",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "message-bubble-showroom",
            testid: void 0,
            detailLeft: u.jsx(r("WDSIconWdsIcChat.react"), {}),
            onSelect: y,
            primary: "Message Bubble Showroom",
            searchCriteria: "Message Bubble Showroom",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "work-contact-sync",
            testid: void 0,
            detailLeft: u.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              children: "\uD83D\uDC64",
            }),
            onSelect: v,
            primary: "Work Contact Sync",
            searchCriteria: "Work Contact Sync",
          }),
          u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Infra" }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "md-debug",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebSettingsIcon.react").SettingsIcon, {}),
            onSelect: b,
            primary: "Infra Settings",
            searchCriteria: "Infra Settings",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "mex-playground",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}),
            onSelect: p,
            primary: "MEX Playground",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "trace-log",
            testid: void 0,
            detailLeft: u.jsx(r("WDSIconIcDescription.react"), {}),
            onSelect: S,
            primary: "Trace Log",
            searchCriteria: "Trace Log",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "www-settings",
            testid: void 0,
            detailLeft: u.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              children: "\uD83D\uDE80",
            }),
            onSelect: R,
            primary: "Canonical",
            searchCriteria: "Canonical",
          }),
          u.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Localization",
          }),
          u.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").RTL, {}),
          u.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Performance",
          }),
          u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "stats",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {}),
            onSelect: m,
            primary: "Model Stats",
            searchCriteria: "Model Stats",
          }),
          o("WAWebVoipGatingUtils").isCallingEnabled()
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebMenuItems.react").MenuHeading, {
                    children: "VoIP",
                  }),
                  u.jsx(
                    o("WAWebDeveloperMenuPromotedDebugCommands.react")
                      .CpuPressureSlider,
                    {},
                  ),
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "simulateNativeANR",
                    testid: void 0,
                    detailLeft: u.jsx(
                      o("WAWebRecalledIcon.react").RecalledIcon,
                      {},
                    ),
                    onSelect: l,
                    primary: "Simulate Native ANR",
                    searchCriteria: "Simulate Native ANR",
                  }),
                  u.jsx(
                    o("WAWebDeveloperMenuPromotedDebugCommands.react")
                      .SimulateWebAnr,
                    {},
                  ),
                  u.jsx(
                    o("WAWebDeveloperMenuPromotedDebugCommands.react")
                      .VoipDebugInfo,
                    {},
                  ),
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "voipUiDebug",
                    testid: void 0,
                    detailLeft: u.jsx(
                      o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
                      {},
                    ),
                    onSelect: s,
                    primary: "VoIP UI Debug",
                    searchCriteria: "VoIP UI Debug",
                  }),
                  u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "voipWasm",
                    testid: void 0,
                    detailLeft: u.jsx(
                      o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
                      {},
                    ),
                    onSelect: c,
                    primary: "VoIP WASM Samples",
                    searchCriteria: "VoIP WASM Samples",
                  }),
                ],
              })
            : null,
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onABProps,
        l = a.onBack,
        s = a.onCancel,
        d = a.onDebugCommands,
        m = a.onGroupABProps,
        p = a.onNuxManager,
        _ = a.onSimulateNativeANR,
        f = a.onVoipUiDebug,
        g = a.onVoipWasmSamples;
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "settings",
        testid: void 0,
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: "Developer",
            onBack: l,
            onCancel: s,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(c, {
              onABProps: i,
              onGroupABProps: m,
              onNuxManager: p,
              onDebugCommands: d,
              onVoipUiDebug: f,
              onVoipWasmSamples: g,
              onSimulateNativeANR: _,
            }),
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebModelStatsModal.react"), {}),
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebMexPlaygroundModal")
              .__setRef("WAWebDeveloperMenuDeveloperDrawer.react")
              .load(),
            t = e;
          t != null &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(t, { onClose: o("WAWebModalManager").closeModalManager }),
            );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebDeveloperMenuSVG.react"), {}),
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
              "WAWebShowroomModal.react",
            )
              .__setRef("WAWebDeveloperMenuDeveloperDrawer.react")
              .load(),
            t = e.openShowroom;
          t();
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMessageBubbleShowroom.react",
          )
            .__setRef("WAWebDeveloperMenuDeveloperDrawer.react")
            .load();
          o("WAWebModalManager").ModalManager.open(u.jsx(e, {}));
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebMdDebugSetting.react"), {}),
      );
    }
    function v() {
      var e = window.location.hostname,
        t = e.match(/(?:dev-web|web)\.(.+?)\.whatsapp\.com$/),
        n;
      t && t[1] ? (n = t[1] + ".internalfb.com") : (n = "www.internalfb.com");
      var a = encodeURIComponent(window.location.href),
        i =
          "https://" +
          n +
          "/intern/whatsapp/work_contact_sync/?return_url=" +
          a;
      (o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "developer-menu" },
          type: o("WAWebModal.react").ModalTheme.Flex,
          children: u.jsxs("div", {
            style: {
              minWidth: "450px",
              paddingTop: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
              paddingInline: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
              paddingBottom: o("WDSVars.stylex").WDSVars.spacingDoublePlus,
            },
            children: [
              u.jsx("h1", {
                style: {
                  fontSize: "18px",
                  marginBottom: o("WDSVars.stylex").WDSVars.spacingSinglePlus,
                },
                children: "Redirecting...",
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children:
                  "Please wait while we redirect you to the Work Contact Sync page.",
              }),
            ],
          }),
        }),
      ),
        window.setTimeout(function () {
          o("WAWebExternalLink.react").openExternalLink(i, {
            target: o("WAWebExternalLink.react").ExternalLinkTarget.CURRENT_TAB,
          });
        }, 500));
    }
    function S() {
      var e = o("WAJids").extractDeviceIDParts(
          o("WAWebGlobals").getMyDeviceJid(),
        ),
        t = e.deviceID,
        n = e.userId;
      o("WAWebExternalLink.react").openExternalLink(
        "https://www.internalfb.com/intern/whatsapp/admin/trace_log?phone=" +
          n +
          "%3A" +
          t.toString() +
          "&start=-10s&end=follow",
      );
    }
    function R() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebDebugWWWSettings.react"), {}),
      );
    }
    l.default = d;
  },
  98,
);
