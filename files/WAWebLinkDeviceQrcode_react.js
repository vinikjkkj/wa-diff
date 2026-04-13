__d(
  "WAWebLinkDeviceQrcode.react",
  [
    "cx",
    "fbt",
    "CometPlaceholder.react",
    "Promise",
    "SecurePostMessage",
    "WALogger",
    "WAWebAppRootInteractionContext.react",
    "WAWebAutoLogoutGating",
    "WAWebBackendEventBus",
    "WAWebClassnames",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebConnectionIcon.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebLinkDeviceQrcodeLayout.react",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebQRCode.react",
    "WAWebRefreshLargeIcon.react",
    "WAWebSocketConstants",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "cr:1064",
    "deferredLoadComponent",
    "gkx",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebRenderCallbacks",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useCallback,
      g = _.useEffect,
      h = _.useRef,
      y = _.useState,
      C = r("requireDeferred")("WABase64").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      b = r("requireDeferred")("WAWebAdvSignatureApi").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      v = r("requireDeferred")("WAWebCmd").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      S = r("requireDeferred")("WAWebCompanionRegClientUtils").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      R = r("requireDeferred")("WAWebNativeCameraQRLinkedDeviceUtils").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      L = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      E = r("requireDeferred")("WAWebSignalStoreApi").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      k = r("requireDeferred")("WAWebUserPrefsInfoStore").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      I = r("requireDeferred")("WAWebWamQrCodeCount").__setRef(
        "WAWebLinkDeviceQrcode.react",
      ),
      T = r("deferredLoadComponent")(
        r("requireDeferred")("WAWebVelocityTransitionGroup").__setRef(
          "WAWebLinkDeviceQrcode.react",
        ),
      ),
      D = "https://faq.whatsapp.com/r/ld",
      x = "https://wa.me/settings/linked_devices#",
      $ = 228,
      P = {
        qrCodeWarning: {
          backgroundColor: "x1l6jbk0",
          color: "xbkck4w",
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          bottom: "x1ey2m1c",
          borderStartStartRadius: "x1rgw4pv",
          borderStartEndRadius: "x1vjm0to",
          borderEndEndRadius: "xnqoqkk",
          borderEndStartRadius: "x16lu3ki",
          zIndex: "x11uqc5h",
          height: "x1m3v4wt",
          width: "x1oysuqx",
          $$css: !0,
        },
        qrCodeOfflineWarning: { cursor: "x1ypdohk", $$css: !0 },
        qrCodeWarningIcon: { color: "xbkck4w", $$css: !0 },
        qrCodeWarningThemed: {
          backgroundColor: "x1od0jb8",
          color: "x14ug900",
          $$css: !0,
        },
        qrCodeWarningIconThemed: { color: "x14ug900", $$css: !0 },
      };
    function N(e) {
      var t = e.apiCmd,
        a = e.autoLogoutEnabled,
        i = e.children,
        l = e.enabedAlternateDeviceLinking,
        s = e.onAutoLogoutToggle,
        u = e.onClickLinkWithPhoneNumber,
        c = e.theme,
        d = y(
          o("WAWebBackendEventBus").BackendEventBus.socketState ===
            o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE,
        ),
        m = d[0],
        _ = d[1],
        h = y(!r("WAWebNetworkStatus").online),
        C = h[0],
        b = h[1],
        v = y(
          o("WAWebBackendEventBus").BackendEventBus.socketState ===
            o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED,
        ),
        S = v[0],
        R = v[1],
        E = function () {
          (o("WAWebBackendEventBus").BackendEventBus.socketState ===
            o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE &&
            L.onReady(function (e) {
              return e.companionDeviceLinkingScreenQpl.qrCodeExpired();
            }),
            _(
              o("WAWebBackendEventBus").BackendEventBus.socketState ===
                o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE,
            ),
            b(!r("WAWebNetworkStatus").online),
            o("WAWebBackendEventBus").BackendEventBus.socketState ===
              o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED &&
              L.onReady(function (e) {
                return e.companionDeviceLinkingScreenQpl.qrCodeInitialised();
              }),
            R(
              o("WAWebBackendEventBus").BackendEventBus.socketState ===
                o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED,
            ),
            o("WAWebAutoLogoutGating").isAutoLogoutEnabled() &&
              o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() &&
              o("WAWebBackendEventBus").BackendEventBus.socketState ===
                o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED &&
              r("SecurePostMessage").sendMessageForCurrentOrigin(
                self.parent,
                "QR_CODE_LOADED_FOR_AUTO_LOGOUT",
              ));
        };
      (o("useWAWebListener").useListener(
        o("WAWebBackendEventBus").BackendEventBus,
        "set_socket_state",
        E,
      ),
        o("useWAWebListener").useListener(
          r("WAWebNetworkStatus"),
          "change:online",
          E,
        ));
      var k = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy")
            .NAVIGATION_LOGIN_DEVICE_LINKING_PHONE,
          !0,
          !0,
        ),
        I = k.startInteraction,
        T = k.stopInteraction,
        D = f(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (I(), yield u());
          }),
          [u, I],
        );
      g(function () {
        (L.onReady(function (e) {
          return e.companionDeviceLinkingScreenQpl.initialize(t);
        }),
          n("cr:1064") == null || n("cr:1064").initialize());
      }, []);
      var x;
      return (
        C
          ? (x = p.jsx(w, { onLoadingComplete: T, theme: c }))
          : m
            ? (x = p.jsx(A, { onLoadingComplete: T, theme: c }))
            : S
              ? (x = p.jsx(M, { onLoadingComplete: T, theme: c }))
              : (x = p.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {
                  theme: c,
                })),
        a &&
          !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() &&
          (x = p.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {
            theme: c,
          })),
        p.jsx(
          o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout,
          {
            apiCmd: t,
            autoLogoutEnabled: a,
            enabedAlternateDeviceLinking: l,
            onAutoLogoutToggle: s,
            onClickLinkWithPhoneNumber: D,
            theme: c,
            children: x,
          },
        )
      );
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(t) {
      var a,
        i = t.children,
        l = t.onLoadingComplete,
        s = t.theme,
        u = i,
        m = h(),
        _ = y(!1),
        g = _[0],
        P = _[1],
        N = y(null),
        M = N[0],
        w = N[1],
        A = r("useWAWebDebouncedCallback")(function () {
          P(!0);
        }, 100),
        F = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!o("WAWebConnModel").Conn.connected) {
              var t = o("WAWebConnModel").Conn.ref,
                a = yield (d || (d = n("Promise"))).all([
                  E.load(),
                  k.load(),
                  b.load(),
                  C.load(),
                  S.load(),
                  R.load(),
                ]),
                i = a[0].waSignalStore,
                l = a[1].waNoiseInfo,
                s = a[2].getADVSecretKey,
                u = a[3].encodeB64,
                m = a[4].DEVICE_PLATFORM,
                p = a[5].isNativeCameraQRLinkedDeviceTest,
                _ = yield i.getRegistrationInfo(),
                f = yield l.get();
              if (!f || !_)
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs("Empty noiseInfo or empty regInfo"),
                  null
                );
              var g = u(f.staticKeyPair.pubKey),
                h = u(_.identityKeyPair.pubKey),
                y;
              try {
                y = yield s();
              } catch (e) {
                return (
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "QR code render failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("qr-code-page-adv-secret-key-failed"),
                  null
                );
              }
              var v = t + "," + g + "," + h + "," + y + "," + m;
              return (
                p() ? (v = x + v) : r("justknobx")._("770") && (v += "," + D),
                v
              );
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        O = f(
          function () {
            F().then(function (e) {
              e == null ||
                e === "" ||
                (w(e),
                I.onReady(function (e) {
                  e.inc();
                }),
                l());
            });
          },
          [w, l],
        ),
        W = f(
          function (e) {
            M != null && e != null && e.removeAttribute("title");
          },
          [M],
        );
      (o("useWAWebListener").useListener(
        o("WAWebConnModel").Conn,
        "change:ref",
        function () {
          (O(),
            L.onReady(function (e) {
              return e.companionDeviceLinkingScreenQpl.qrCodeRefreshed();
            }));
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebUserPrefsMultiDevice").advSecretEventEmitter,
          "change",
          function () {
            (O(),
              L.onReady(function (e) {
                return e.companionDeviceLinkingScreenQpl.qrCodeRegRefreshed();
              }));
          },
        ),
        r("useWAWebRenderCallbacks")({
          onMount: function () {
            (O(),
              v.onReady(function (e) {
                return e.Cmd.onInitialLoadReadyFromBridge();
              }));
          },
          onUnmount: function () {
            I.onReady(function (e) {
              e.reset();
            });
          },
        }));
      var q = function () {
          var e = window.getSelection(),
            t = m.current;
          (t != null &&
            (e == null || e.selectAllChildren(t), document.execCommand("copy")),
            o("WAWebModalManager").ModalManager.close());
        },
        U = function () {
          (g && P(!1), A());
        },
        V = function (t) {
          (A.cancel(), P(!1));
        },
        H = function (t) {
          (t.stopPropagation(),
            t.preventDefault(),
            F().then(function (e) {
              o("WAWebModalManager").ModalManager.open(
                p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: q,
                  okText: "Copy to Clipboard",
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "link-device-qr",
                  },
                  children: p.jsx(
                    o("WAWebCopyPasteSelectable.react").SelectableSpan,
                    {
                      ref: m,
                      className: "x1mzt3pk x1hx0egp",
                      selectable: !0,
                      children: e,
                    },
                  ),
                }),
              );
            }));
        },
        G = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}), (a._akau = !0), (a._akay = !!u), a),
          {
            0: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8",
            1: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xvxx97b x1028phh x1es37l9 xq7a5ml x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l xyi3aci xwf5gio x1p453bz x1suzm8a",
          }[!!(s === "wds" || r("WAWebEnvironment").isWindows) << 0],
        ),
        z = g && u == null ? { cursor: "none" } : null,
        j = null;
      return (
        r("gkx")("26258") || (j = H),
        M == null
          ? p.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {
              theme: s,
            })
          : p.jsx(r("WAWebQRCode.react"), {
              data: M,
              size: $,
              colorDark: "#122e31",
              onChange: W,
              children: function (t) {
                return p.jsxs("div", {
                  ref: t,
                  "data-testid": void 0,
                  className: G,
                  "data-ref": M,
                  onContextMenu: j,
                  style: z,
                  onMouseMove: U,
                  onMouseLeave: V,
                  children: [
                    p.jsx(r("CometPlaceholder.react"), {
                      fallback: u != null ? u : null,
                      name: "WAWebVelocityTransitionGroup",
                      children: p.jsx(T, {
                        transitionName: "scale",
                        children: u,
                      }),
                    }),
                    p.jsx("div", {
                      className: "_akaz",
                      children: p.jsx(B, {}),
                    }),
                  ],
                });
              },
            })
      );
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onLoadingComplete,
        a = e.theme,
        i = a === "wds" && P.qrCodeWarningThemed,
        l;
      t[0] !== i
        ? ((l = [
            P.qrCodeWarning,
            i,
            P.qrCodeOfflineWarning,
            o("WAWebUISpacing").uiMargin.allAuto,
            o("WAWebUISpacing").uiPadding.horiz30,
          ]),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s = a === "wds" && P.qrCodeWarningIconThemed,
        c;
      t[2] !== s
        ? ((c = p.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom10,
            children: p.jsx(o("WAWebConnectionIcon.react").ConnectionIcon, {
              width: 48,
              height: 48,
              iconXstyle: [P.qrCodeWarningIcon, s],
            }),
          })),
          (t[2] = s),
          (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = p.jsx(o("WAWebFlex.react").FlexItem, {
            justify: "center",
            align: "center",
            children: u._(/*BTDS*/ "No internet connection"),
          })),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] !== c
        ? ((m = p.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: [c, d],
          })),
          (t[5] = c),
          (t[6] = m))
        : (m = t[6]);
      var _;
      t[7] !== l || t[8] !== m
        ? ((_ = p.jsx(
            r("WAWebUnstyledButton.react"),
            { xstyle: l, onClick: W, children: m },
            "offline",
          )),
          (t[7] = l),
          (t[8] = m),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      return (
        t[10] !== n || t[11] !== _ || t[12] !== a
          ? ((f = p.jsx(M, { onLoadingComplete: n, theme: a, children: _ })),
            (t[10] = n),
            (t[11] = _),
            (t[12] = a),
            (t[13] = f))
          : (f = t[13]),
        f
      );
    }
    function A(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onLoadingComplete,
        a = e.theme,
        i = F,
        l = a === "wds" && P.qrCodeWarningThemed,
        s;
      t[0] !== l
        ? ((s = [
            P.qrCodeWarning,
            l,
            o("WAWebUISpacing").uiMargin.allAuto,
            o("WAWebUISpacing").uiPadding.horiz30,
          ]),
          (t[0] = l),
          (t[1] = s))
        : (s = t[1]);
      var c = a === "wds" && P.qrCodeWarningIconThemed,
        d;
      t[2] !== c
        ? ((d = p.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom10,
            children: p.jsx(o("WAWebRefreshLargeIcon.react").RefreshLargeIcon, {
              iconXstyle: [P.qrCodeWarningIcon, c],
            }),
          })),
          (t[2] = c),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = p.jsx(o("WAWebFlex.react").FlexItem, {
            children: u._(/*BTDS*/ "Click to reload QR code"),
          })),
          (t[4] = m))
        : (m = t[4]);
      var _;
      t[5] !== d
        ? ((_ = p.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: [d, m],
          })),
          (t[5] = d),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== s || t[8] !== _
        ? ((f = p.jsx(
            r("WAWebUnstyledButton.react"),
            { xstyle: s, onClick: i, children: _ },
            "expiry",
          )),
          (t[7] = s),
          (t[8] = _),
          (t[9] = f))
        : (f = t[9]);
      var g;
      return (
        t[10] !== n || t[11] !== f || t[12] !== a
          ? ((g = p.jsx(M, { onLoadingComplete: n, theme: a, children: f })),
            (t[10] = n),
            (t[11] = f),
            (t[12] = a),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    function F() {
      (L.onReady(O),
        o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR());
    }
    function O(e) {
      return e.companionDeviceLinkingScreenQpl.qrCodeReloaded();
    }
    function B() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            0: { className: "x1rg5ohu x16dsc37 x82xf8i" },
            1: { className: "x1rg5ohu x16dsc37 x8dwe99" },
          }[!!r("WAWebEnvironment").isWindows << 0]),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = p.jsx(
              "span",
              babelHelpers.extends({}, t, {
                children: p.jsxs("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "64",
                  height: "64",
                  viewBox: "0 0 64 64",
                  children: [
                    p.jsx("title", { children: u._(/*BTDS*/ "WhatsApp logo") }),
                    p.jsx("path", {
                      fill: "#FFF",
                      d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z",
                    }),
                    p.jsx("path", {
                      fill: "currentColor",
                      d: "M50.801 13.135c-4.739-4.742-11.039-7.354-17.752-7.357-13.837 0-25.094 11.253-25.099 25.085a25.039 25.039 0 0 0 3.349 12.541l-3.56 12.999 13.304-3.488a25.084 25.084 0 0 0 11.996 3.054h.011c13.83 0 25.088-11.256 25.095-25.087.002-6.703-2.607-13.005-7.344-17.747zM33.05 51.733h-.008a20.866 20.866 0 0 1-10.62-2.906l-.762-.452-7.894 2.07 2.108-7.694-.497-.789a20.802 20.802 0 0 1-3.189-11.097c.004-11.496 9.361-20.85 20.87-20.85a20.73 20.73 0 0 1 14.746 6.115 20.733 20.733 0 0 1 6.104 14.752c-.006 11.497-9.363 20.851-20.858 20.851z",
                    }),
                    p.jsx("path", {
                      fill: "currentColor",
                      d: "M25.429 19.26a8.65 8.65 0 0 0-1.028.011 2.352 2.352 0 0 0-.95.255c-.221.114-.427.277-.75.582-.305.288-.481.54-.668.782a6.974 6.974 0 0 0-1.443 4.291l.001.003a8.243 8.243 0 0 0 .844 3.607c1.043 2.307 2.763 4.746 5.035 7.008a24.676 24.676 0 0 0 1.657 1.6 24.145 24.145 0 0 0 9.814 5.229s.751.179 1.391.218c.021.001.04.003.061.003a9.207 9.207 0 0 0 1.422-.033 5.086 5.086 0 0 0 2.129-.59c.423-.225.623-.337.978-.561 0 0 .11-.072.319-.23.345-.257.558-.438.845-.736.211-.22.394-.479.534-.772.2-.417.401-1.213.481-1.874.061-.505.042-.781.036-.952-.011-.275-.238-.558-.487-.678l-1.486-.668s-2.222-.967-3.581-1.587a1.278 1.278 0 0 0-.452-.104c-.341-.021-.723.068-.966.324v-.004c-.013-.001-.182.145-2.031 2.385-.102.122-.341.387-.754.362a1.086 1.086 0 0 1-.185-.029 3.402 3.402 0 0 1-.49-.17c-.316-.134-.427-.185-.643-.278l-.013-.006a15.361 15.361 0 0 1-4.013-2.556 15.88 15.88 0 0 1-.927-.885c-1.074-1.041-1.953-2.148-2.607-3.24-.035-.06-.09-.146-.15-.242-.107-.174-.225-.381-.262-.523-.095-.376.157-.678.157-.678s.622-.68.911-1.05c.278-.356.518-.704.671-.952.301-.484.39-.982.238-1.37a216.767 216.767 0 0 0-2.219-5.215c-.156-.339-.598-.589-1.005-.636a6.284 6.284 0 0 0-.414-.041",
                    }),
                  ],
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function W() {
      o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
    }
    l.default = N;
  },
  226,
);
