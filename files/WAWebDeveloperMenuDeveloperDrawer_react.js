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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(41),
        n = e.onABProps,
        a = e.onDebugCommands,
        i = e.onGroupABProps,
        l = e.onNuxManager,
        s = e.onSimulateNativeANR,
        c = e.onVoipUiDebug,
        d = e.onVoipWasmSamples,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Common",
          })),
          (t[0] = _))
        : (_ = t[0]);
      var h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(
            o("WAWebDeveloperMenuDeveloperMenuIcons.react").ABPropsIcon,
            {},
          )),
          (t[1] = h))
        : (h = t[1]);
      var C;
      t[2] !== n
        ? ((C = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "ab-props",
            testid: void 0,
            detailLeft: h,
            onSelect: n,
            primary: "ABProps",
            searchCriteria: "ABProps",
          })),
          (t[2] = n),
          (t[3] = C))
        : (C = t[3]);
      var L;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(
            o("WAWebDeveloperMenuDeveloperMenuIcons.react").ABPropsIcon,
            {},
          )),
          (t[4] = L))
        : (L = t[4]);
      var E;
      t[5] !== i
        ? ((E = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "group-ab-props",
            testid: void 0,
            detailLeft: L,
            onSelect: i,
            primary: "Group ABProps",
            searchCriteria: "Group ABProps",
          })),
          (t[5] = i),
          (t[6] = E))
        : (E = t[6]);
      var k;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(
            o("WAWebDeveloperMenuPromotedDebugCommands.react").DebugCommands,
            {},
          )),
          (t[7] = k))
        : (k = t[7]);
      var I;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {})),
          (t[8] = I))
        : (I = t[8]);
      var T;
      t[9] !== a
        ? ((T = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "debug-drawer",
            testid: void 0,
            detailLeft: I,
            onSelect: a,
            primary: "Debug Commands Explorer",
            searchCriteria: "Debug Commands Explorer",
          })),
          (t[9] = a),
          (t[10] = T))
        : (T = t[10]);
      var D, x, $, P;
      if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
        var N;
        ((P = u.jsx(
          (N = o("WAWebDeveloperMenuPromotedDebugCommands.react")).ErrorToast,
          {},
        )),
          (D = u.jsx(N.ShowHiddenBotChats, {})),
          (x = u.jsx(N.E2EDebugMode, {})),
          ($ = u.jsx(N.VPVOverlay, {})),
          (t[11] = D),
          (t[12] = x),
          (t[13] = $),
          (t[14] = P));
      } else ((D = t[11]), (x = t[12]), ($ = t[13]), (P = t[14]));
      var M;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = u.jsx(
            o("WAWebDeveloperMenuDeveloperMenuIcons.react").NUXManagerIcon,
            {},
          )),
          (t[15] = M))
        : (M = t[15]);
      var w;
      t[16] !== l
        ? ((w = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "nux-manager",
            testid: void 0,
            detailLeft: M,
            onSelect: l,
            primary: "NUX Manager",
            searchCriteria: "NUX Manager",
          })),
          (t[16] = l),
          (t[17] = w))
        : (w = t[17]);
      var A;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "svg-components",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebImageIcon.react").ImageIcon, {
              height: 24,
              width: 24,
            }),
            onSelect: f,
            primary: "SVG Components",
            searchCriteria: "SVG Components",
          })),
          (t[18] = A))
        : (A = t[18]);
      var F;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "showroom",
            testid: void 0,
            detailLeft: u.jsx(r("WDSIconIcStore.react"), {}),
            onSelect: g,
            primary: "UI Showroom",
            searchCriteria: "UI Showroom",
          })),
          (t[19] = F))
        : (F = t[19]);
      var O;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "message-bubble-showroom",
            testid: void 0,
            detailLeft: u.jsx(r("WDSIconWdsIcChat.react"), {}),
            onSelect: y,
            primary: "Message Bubble Showroom",
            searchCriteria: "Message Bubble Showroom",
          })),
          (t[20] = O))
        : (O = t[20]);
      var B, W;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
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
          })),
          (W = u.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Infra",
          })),
          (t[21] = B),
          (t[22] = W))
        : ((B = t[21]), (W = t[22]));
      var q;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "md-debug",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebSettingsIcon.react").SettingsIcon, {}),
            onSelect: b,
            primary: "Infra Settings",
            searchCriteria: "Infra Settings",
          })),
          (t[23] = q))
        : (q = t[23]);
      var U;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "mex-playground",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebE2EStatusIcon.react").E2EStatusIcon, {}),
            onSelect: p,
            primary: "MEX Playground",
          })),
          (t[24] = U))
        : (U = t[24]);
      var V;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "trace-log",
            testid: void 0,
            detailLeft: u.jsx(r("WDSIconIcDescription.react"), {}),
            onSelect: S,
            primary: "Trace Log",
            searchCriteria: "Trace Log",
          })),
          (t[25] = V))
        : (V = t[25]);
      var H, G, z, j;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
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
          })),
          (G = u.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Localization",
          })),
          (z = u.jsx(
            o("WAWebDeveloperMenuPromotedDebugCommands.react").RTL,
            {},
          )),
          (j = u.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Performance",
          })),
          (t[26] = H),
          (t[27] = G),
          (t[28] = z),
          (t[29] = j))
        : ((H = t[26]), (G = t[27]), (z = t[28]), (j = t[29]));
      var K;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "stats",
            testid: void 0,
            detailLeft: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {}),
            onSelect: m,
            primary: "Model Stats",
            searchCriteria: "Model Stats",
          })),
          (t[30] = K))
        : (K = t[30]);
      var Q;
      t[31] !== s || t[32] !== c || t[33] !== d
        ? ((Q = o("WAWebVoipGatingUtils").isCallingEnabled()
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
                    onSelect: s,
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
                    onSelect: c,
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
                    onSelect: d,
                    primary: "VoIP WASM Samples",
                    searchCriteria: "VoIP WASM Samples",
                  }),
                ],
              })
            : null),
          (t[31] = s),
          (t[32] = c),
          (t[33] = d),
          (t[34] = Q))
        : (Q = t[34]);
      var X;
      return (
        t[35] !== w || t[36] !== Q || t[37] !== C || t[38] !== E || t[39] !== T
          ? ((X = u.jsxs(o("WAWebMenu.react").WAWebMenu, {
              size: "medium",
              colorScheme: "default",
              material: !0,
              children: [
                _,
                C,
                E,
                k,
                T,
                P,
                D,
                x,
                $,
                w,
                A,
                F,
                O,
                B,
                W,
                q,
                U,
                V,
                H,
                G,
                z,
                j,
                K,
                Q,
              ],
            })),
            (t[35] = w),
            (t[36] = Q),
            (t[37] = C),
            (t[38] = E),
            (t[39] = T),
            (t[40] = X))
          : (X = t[40]),
        X
      );
    }
    function d(t) {
      var n = o("react-compiler-runtime").c(18),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.onABProps,
        d = l.onBack,
        m = l.onCancel,
        p = l.onDebugCommands,
        _ = l.onGroupABProps,
        f = l.onNuxManager,
        g = l.onSimulateNativeANR,
        h = l.onVoipUiDebug,
        y = l.onVoipWasmSamples,
        C;
      n[3] !== d || n[4] !== m
        ? ((C = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: "Developer",
            onBack: d,
            onCancel: m,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (n[3] = d),
          (n[4] = m),
          (n[5] = C))
        : (C = n[5]);
      var b;
      n[6] !== s ||
      n[7] !== p ||
      n[8] !== _ ||
      n[9] !== f ||
      n[10] !== g ||
      n[11] !== h ||
      n[12] !== y
        ? ((b = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(c, {
              onABProps: s,
              onGroupABProps: _,
              onNuxManager: f,
              onDebugCommands: p,
              onVoipUiDebug: h,
              onVoipWasmSamples: y,
              onSimulateNativeANR: g,
            }),
          })),
          (n[6] = s),
          (n[7] = p),
          (n[8] = _),
          (n[9] = f),
          (n[10] = g),
          (n[11] = h),
          (n[12] = y),
          (n[13] = b))
        : (b = n[13]);
      var v;
      return (
        n[14] !== i || n[15] !== C || n[16] !== b
          ? ((v = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "settings",
              testid: void 0,
              children: [C, b],
            })),
            (n[14] = i),
            (n[15] = C),
            (n[16] = b),
            (n[17] = v))
          : (v = n[17]),
        v
      );
    }
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
