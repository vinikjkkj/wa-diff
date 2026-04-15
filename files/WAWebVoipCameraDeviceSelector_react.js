__d(
  "WAWebVoipCameraDeviceSelector.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebCheckmarkIcon.react",
    "WAWebDropdownV2.react",
    "WAWebGuidePopup.react",
    "WAWebMenuItems.react",
    "WAWebNoop",
    "WAWebPopoverContext.react",
    "WAWebSelectMenuItem.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActivityTracker",
    "WAWebVoipSplitButton.react",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipVideoCameraCapture",
    "WDSIconIcVideocamFilled.react",
    "WDSIconIcVideocamOffFilled.react",
    "WDSText.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebDebouncedCallback",
    "useWAWebStableCallback",
    "useWAWebVoipModalManager",
    "useWAWebVoipWindowPopoutTooltipProps",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = v || (v = o("react")),
      R = v,
      L = R.useCallback,
      E = R.useContext,
      k = R.useEffect,
      I = R.useRef,
      T = R.useState,
      D = 500;
    function x(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        a;
      return (
        t[0] !== n
          ? ((a = S.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              selectable: !1,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function $(e) {
      return e instanceof Error && e.name.includes("NotAllowed");
    }
    function P(t) {
      var a = t.disableMainButton,
        i = a === void 0 ? !1 : a,
        l = t.hasCameraAvailable,
        v = l === void 0 ? !0 : l,
        R = t.isDisabled,
        P = R === void 0 ? !1 : R,
        M = t.isMuted,
        w = M === void 0 ? !1 : M,
        A = t.isVideoCall,
        F = t.onMainClick,
        O = E(r("WAWebVoipUiPopoutWindowContext")),
        B = r("useWAWebVoipModalManager")(),
        W = B.closeModal,
        q = B.openModal,
        U = T([]),
        V = U[0],
        H = U[1],
        G = T(""),
        z = G[0],
        j = G[1],
        K = r("useWAWebStableCallback")(function (e) {
          (e && ce.current.abort(), j(e));
        }),
        Q = T(!1),
        X = Q[0],
        Y = Q[1],
        J = T(!1),
        Z = J[0],
        ee = J[1],
        te = T(!1),
        ne = te[0],
        re = te[1],
        oe = I(null),
        ae = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        ie = r("useWAWebDebouncedCallback")(F != null ? F : r("WAWebNoop"), D, {
          leading: !0,
          trailing: !1,
        }),
        le = L(
          function () {
            if (!v) {
              var e =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_virtual_video_capture_driver",
                ) === !0;
              if (!e) {
                var t;
                q(
                  S.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: t.Messaging.CAMERA_MISSING,
                    type: t.GuidePopupType.GUIDE_UNBLOCK,
                    featureSurface: t.FeatureSurface.VOIP_VIDEO_UPGRADE,
                    onConfirm: W,
                  }),
                );
                return;
              }
            }
            ie();
          },
          [W, ie, v, q],
        ),
        se = O.windowEl,
        ue = N(),
        ce = I(new AbortController());
      (r("useWAWebAsync")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (!A) return;
            var t = o("WAWebUA").UA.isSafari && se != null,
              n = yield o(
                "WAWebVoipAcquireMediaStream",
              ).getAvailableVideoDevices(se, !0, t);
            H(n);
            var r = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture
                .currentDeviceId,
              a =
                r != null &&
                r !== "" &&
                n.some(function (e) {
                  return e.deviceId === r;
                });
            return (
              a && r != null
                ? (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraDeviceSelector] auto-selecting previously selected\n          device: ",
                        "",
                      ])),
                    r,
                  ),
                  K(r))
                : n.length > 0 &&
                  !z &&
                  !ce.current.signal.aborted &&
                  K(n[0].deviceId),
              (ce.current = new AbortController()),
              o("WAWebUA").UA.isSafari && se != null && re(!0),
              n
            );
          } catch (e) {
            throw (
              $(e) ||
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraDeviceSelector] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              H([]),
              e
            );
          }
        }),
        [ue, z, se, A],
      ),
        k(
          function () {
            var e,
              t,
              r =
                (e =
                  se == null || (t = se.navigator) == null
                    ? void 0
                    : t.mediaDevices) != null
                  ? e
                  : navigator.mediaDevices;
            function a() {
              return i.apply(this, arguments);
            }
            function i() {
              return (
                (i = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraDeviceSelector] device change detected, reloading devices",
                        ])),
                    ),
                      ee(!0));
                    try {
                      var e = o("WAWebUA").UA.isSafari && se != null,
                        t = yield o(
                          "WAWebVoipAcquireMediaStream",
                        ).getAvailableVideoDevices(se, !0, e);
                      if ((H(t), z)) {
                        var n = t.find(function (e) {
                          return e.deviceId === z;
                        });
                        !n &&
                          t.length > 0 &&
                          (K(t[0].deviceId),
                          o("WALogger").LOG(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraDeviceSelector] current device no longer available,\n              switching to: ",
                                "",
                              ])),
                            t[0].deviceId,
                          ));
                      } else t.length > 0 && K(t[0].deviceId);
                      (o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraDeviceSelector] loaded ",
                            " video\n          devices: ",
                            "",
                          ])),
                        t.length,
                        t
                          .map(function (e) {
                            return "" + e.label;
                          })
                          .join(", "),
                      ),
                        o("WAWebUA").UA.isSafari && se != null && re(!0));
                    } catch (e) {
                      ($(e) ||
                        o("WALogger").ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraDeviceSelector] error reloading devices: ",
                              "",
                            ])),
                          e,
                        ),
                        H([]));
                    } finally {
                      ee(!1);
                    }
                  },
                )),
                i.apply(this, arguments)
              );
            }
            return (
              r && r.addEventListener("devicechange", a),
              function () {
                r && r.removeEventListener("devicechange", a);
              }
            );
          },
          [z, K, se],
        ),
        k(
          function () {
            var e = function (t) {
              var e = t[0];
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraDeviceSelector] device selection changed event received:\n        ",
                    "",
                  ])),
                e,
              ),
                K(e));
            };
            return (
              o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on(
                "deviceSelectionChanged",
                e,
              ),
              function () {
                o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off(
                  "deviceSelectionChanged",
                  e,
                );
              }
            );
          },
          [K],
        ),
        k(
          function () {
            ne &&
              !w &&
              z &&
              !X &&
              !Z &&
              (re(!1),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraDeviceSelector] Safari popout: re-acquiring video stream after device enumeration",
                  ])),
              ),
              o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.switchVideoDevice(z, se));
          },
          [ne, w, z, se, X, Z],
        ));
      var de = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e === z) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraDeviceSelector] ignoring click on already selected device: ",
                    "",
                  ])),
                e,
              );
              return;
            }
            if (X || Z) {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraDeviceSelector] ignoring device change request while another is in progress",
                  ])),
              );
              return;
            }
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .USER_SWITCH_CAMERA_DEVICE,
            ),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraDeviceSelector] changing device to: ",
                    "",
                  ])),
                e,
              ),
              Y(!0));
            try {
              var t = yield o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.switchVideoDevice(e, se);
              if (t) {
                var n,
                  a =
                    (n = o("WAWebVoipVideoCameraCapture")
                      .WAWebVoipVideoCameraCapture.currentDeviceId) != null
                      ? n
                      : e;
                (K(a),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraDeviceSelector] successfully switched to\n          device: ",
                        "",
                        "",
                      ])),
                    a,
                    a !== e ? " (requested: " + e + ")" : "",
                  ));
              } else throw r("err")("Failed to switch camera device");
            } catch (e) {
              (o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraDeviceSelector] error switching device: ",
                    "",
                  ])),
                e,
              ),
                o("WAWebToastManager").ToastManager.open(
                  S.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Could not switch camera device. Please try again.",
                    ),
                  }),
                ));
            } finally {
              Y(!1);
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        me = function () {
          var e;
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .USER_OPEN_CAMERA_DROPDOWN,
          ),
            (e = ae.current) == null || e.showPopover());
        },
        pe = r("useWAWebVoipWindowPopoutTooltipProps")(),
        _e = pe.tooltipAnchorRef,
        fe = pe.tooltipOwnerDocument,
        ge = function () {
          var e;
          return S.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
            popoverPortal: (e = O.popoverPortalEl) != null ? e : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 280,
            maxHeight: 200,
            controllerRef: ae,
            initialActiveOptionId: z,
            target: oe,
            xstyle: o("WDSThemes").WDSDarkTheme,
            children: [
              S.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                selectable: !1,
                children: s._(/*BTDS*/ "Camera"),
              }),
              S.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
                multiselect: !1,
                initialSelection: z,
                onSelect: function (t) {
                  t !== "no-devices" && de(t);
                },
                children:
                  V.length === 0
                    ? S.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                        optionId: "no-devices",
                        primary: S.jsx(x, {
                          children: s._(/*BTDS*/ "No cameras available"),
                        }),
                        disabled: !0,
                      })
                    : V.map(function (e) {
                        return S.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          {
                            optionId: e.deviceId,
                            primary: S.jsx(x, { children: e.label }),
                            detailRight:
                              e.deviceId === z
                                ? S.jsx(
                                    o("WAWebCheckmarkIcon.react").CheckmarkIcon,
                                    { height: 16, width: 16 },
                                  )
                                : null,
                          },
                          e.deviceId,
                        );
                      }),
              }),
            ],
          });
        },
        he = !A || ue !== "granted" || !v,
        ye = !A && ue === "denied",
        Ce = (function () {
          return ye
            ? s._(/*BTDS*/ "Allow camera access to switch to video")
            : w
              ? s._(/*BTDS*/ "Turn camera on")
              : s._(/*BTDS*/ "Turn camera off");
        })(),
        be = (function () {
          return v
            ? he
              ? s._(/*BTDS*/ "Allow camera access to select camera")
              : s._(/*BTDS*/ "Camera settings")
            : s._(/*BTDS*/ "No camera found");
        })();
      return S.jsxs("div", {
        children: [
          S.jsx(r("WAWebVoipSplitButton.react"), {
            Icon: r(
              w
                ? "WDSIconIcVideocamOffFilled.react"
                : "WDSIconIcVideocamFilled.react",
            ),
            isMuted: w,
            onMainClick: F != null ? le : me,
            onDropdownClick: me,
            dropdownRef: oe,
            testId: "camera-split-button",
            disabled: P || X || Z || ye,
            disableMainButton: i,
            disableDropdownButton: he,
            tooltipOwnerAnchorRef: _e,
            tooltipOwnerDocument: fe,
            mainButtonLabel: Ce,
            mainButtonTestId: w ? "camera-turn-on" : "camera-turn-off",
            dropdownButtonLabel: be,
            dropdownButtonTestId: "camera-settings",
          }),
          V.length > 0 && !P && ge(),
        ],
      });
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      var e = o("react-compiler-runtime").c(5),
        t = T(null),
        a = t[0],
        i = t[1],
        l = r("useWAWebStableCallback")(i),
        s;
      e[0] !== a || e[1] !== l
        ? ((s = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                !(navigator === void 0 || !navigator.permissions || a != null)
              ) {
                var e = function () {
                    l(null);
                  },
                  t = yield navigator.permissions.query({ name: "camera" });
                return (
                  l(t.state),
                  (t.onchange = e),
                  function () {
                    t.onchange = null;
                  }
                );
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (e[0] = a),
          (e[1] = l),
          (e[2] = s))
        : (s = e[2]);
      var u;
      return (
        e[3] !== a ? ((u = [a]), (e[3] = a), (e[4] = u)) : (u = e[4]),
        r("useWAWebAsync")(s, u),
        a
      );
    }
    l.default = P;
  },
  226,
);
