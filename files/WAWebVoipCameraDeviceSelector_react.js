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
      return e instanceof Error && e.name.includes("NotAllowed");
    }
    function $(t) {
      var a = t.disableMainButton,
        i = a === void 0 ? !1 : a,
        l = t.hasCameraAvailable,
        v = l === void 0 ? !0 : l,
        R = t.isDisabled,
        $ = R === void 0 ? !1 : R,
        N = t.isMuted,
        M = N === void 0 ? !1 : N,
        w = t.isVideoCall,
        A = t.onMainClick,
        F = E(r("WAWebVoipUiPopoutWindowContext")),
        O = r("useWAWebVoipModalManager")(),
        B = O.closeModal,
        W = O.openModal,
        q = T([]),
        U = q[0],
        V = q[1],
        H = T(""),
        G = H[0],
        z = H[1],
        j = r("useWAWebStableCallback")(function (e) {
          (e && ue.current.abort(), z(e));
        }),
        K = T(!1),
        Q = K[0],
        X = K[1],
        Y = T(!1),
        J = Y[0],
        Z = Y[1],
        ee = T(!1),
        te = ee[0],
        ne = ee[1],
        re = I(null),
        oe = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        ae = r("useWAWebDebouncedCallback")(A != null ? A : r("WAWebNoop"), D, {
          leading: !0,
          trailing: !1,
        }),
        ie = L(
          function () {
            if (!v) {
              var e =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_virtual_video_capture_driver",
                ) === !0;
              if (!e) {
                var t;
                W(
                  S.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: t.Messaging.CAMERA_MISSING,
                    type: t.GuidePopupType.GUIDE_UNBLOCK,
                    featureSurface: t.FeatureSurface.VOIP_VIDEO_UPGRADE,
                    onConfirm: B,
                  }),
                );
                return;
              }
            }
            ae();
          },
          [B, ae, v, W],
        ),
        le = F.windowEl,
        se = P(),
        ue = I(new AbortController());
      (r("useWAWebAsync")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (!w) return;
            var t = yield o(
              "WAWebVoipAcquireMediaStream",
            ).getAvailableVideoDevices(le, !0);
            V(t);
            var n = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture
                .currentDeviceId,
              r =
                n != null &&
                n !== "" &&
                t.some(function (e) {
                  return e.deviceId === n;
                });
            return (
              r && n != null
                ? (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraDeviceSelector] auto-selecting previously selected\n          device: ",
                        "",
                      ])),
                    n,
                  ),
                  j(n))
                : t.length > 0 &&
                  !G &&
                  !ue.current.signal.aborted &&
                  j(t[0].deviceId),
              (ue.current = new AbortController()),
              o("WAWebUA").UA.isSafari && le != null && ne(!0),
              t
            );
          } catch (e) {
            throw (
              x(e) ||
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraDeviceSelector] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              V([]),
              e
            );
          }
        }),
        [se, G, le, w],
      ),
        k(
          function () {
            var e,
              t,
              r =
                (e =
                  le == null || (t = le.navigator) == null
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
                      Z(!0));
                    try {
                      var e = yield o(
                        "WAWebVoipAcquireMediaStream",
                      ).getAvailableVideoDevices(le, !0);
                      if ((V(e), G)) {
                        var t = e.find(function (e) {
                          return e.deviceId === G;
                        });
                        !t &&
                          e.length > 0 &&
                          (j(e[0].deviceId),
                          o("WALogger").LOG(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraDeviceSelector] current device no longer available,\n              switching to: ",
                                "",
                              ])),
                            e[0].deviceId,
                          ));
                      } else e.length > 0 && j(e[0].deviceId);
                      (o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraDeviceSelector] loaded ",
                            " video\n          devices: ",
                            "",
                          ])),
                        e.length,
                        e
                          .map(function (e) {
                            return "" + e.label;
                          })
                          .join(", "),
                      ),
                        o("WAWebUA").UA.isSafari && le != null && ne(!0));
                    } catch (e) {
                      (x(e) ||
                        o("WALogger").ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraDeviceSelector] error reloading devices: ",
                              "",
                            ])),
                          e,
                        ),
                        V([]));
                    } finally {
                      Z(!1);
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
          [G, j, le],
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
                j(e));
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
          [j],
        ),
        k(
          function () {
            te &&
              !M &&
              G &&
              !Q &&
              !J &&
              (ne(!1),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraDeviceSelector] Safari popout: re-acquiring video stream after device enumeration",
                  ])),
              ),
              o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.switchVideoDevice(G, le));
          },
          [te, M, G, le, Q, J],
        ));
      var ce = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e === G) {
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
            if (Q || J) {
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
              X(!0));
            try {
              var t = yield o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.switchVideoDevice(e, le);
              if (t) {
                var n,
                  a =
                    (n = o("WAWebVoipVideoCameraCapture")
                      .WAWebVoipVideoCameraCapture.currentDeviceId) != null
                      ? n
                      : e;
                (j(a),
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
              X(!1);
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        de = function () {
          var e;
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .USER_OPEN_CAMERA_DROPDOWN,
          ),
            (e = oe.current) == null || e.showPopover());
        },
        me = r("useWAWebVoipWindowPopoutTooltipProps")(),
        pe = me.tooltipAnchorRef,
        _e = me.tooltipOwnerDocument,
        fe = function () {
          var e;
          return S.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
            popoverPortal: (e = F.popoverPortalEl) != null ? e : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 280,
            maxHeight: 200,
            controllerRef: oe,
            initialActiveOptionId: G,
            target: re,
            xstyle: o("WDSThemes").WDSDarkTheme,
            children: [
              S.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Camera"),
              }),
              S.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
                multiselect: !1,
                initialSelection: G,
                onSelect: function (t) {
                  t !== "no-devices" && ce(t);
                },
                children:
                  U.length === 0
                    ? S.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                        optionId: "no-devices",
                        primary: "No cameras available",
                        disabled: !0,
                      })
                    : U.map(function (e) {
                        return S.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          {
                            optionId: e.deviceId,
                            primary: e.label,
                            detailRight:
                              e.deviceId === G
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
        ge = !w || se !== "granted" || !v,
        he = !w && se === "denied",
        ye = (function () {
          return he
            ? s._(/*BTDS*/ "Allow camera access to switch to video")
            : M
              ? s._(/*BTDS*/ "Turn camera on")
              : s._(/*BTDS*/ "Turn camera off");
        })(),
        Ce = (function () {
          return v
            ? ge
              ? s._(/*BTDS*/ "Allow camera access to select camera")
              : s._(/*BTDS*/ "Camera settings")
            : s._(/*BTDS*/ "No camera found");
        })();
      return S.jsxs("div", {
        children: [
          S.jsx(r("WAWebVoipSplitButton.react"), {
            Icon: r(
              M
                ? "WDSIconIcVideocamOffFilled.react"
                : "WDSIconIcVideocamFilled.react",
            ),
            isMuted: M,
            onMainClick: A != null ? ie : de,
            onDropdownClick: de,
            dropdownRef: re,
            testId: "camera-split-button",
            disabled: $ || Q || J || he,
            disableMainButton: i,
            disableDropdownButton: ge,
            tooltipOwnerAnchorRef: pe,
            tooltipOwnerDocument: _e,
            mainButtonLabel: ye,
            mainButtonTestId: M ? "camera-turn-on" : "camera-turn-off",
            dropdownButtonLabel: Ce,
            dropdownButtonTestId: "camera-settings",
          }),
          U.length > 0 && !$ && fe(),
        ],
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      var e = T(null),
        t = e[0],
        o = e[1],
        a = r("useWAWebStableCallback")(o);
      return (
        r("useWAWebAsync")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(navigator === void 0 || !navigator.permissions || t != null)
            ) {
              var e = function () {
                  a(null);
                },
                n = yield navigator.permissions.query({ name: "camera" });
              return (
                a(n.state),
                (n.onchange = e),
                function () {
                  n.onchange = null;
                }
              );
            }
          }),
          [t],
        ),
        t
      );
    }
    l.default = $;
  },
  226,
);
