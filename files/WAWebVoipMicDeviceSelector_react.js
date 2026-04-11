__d(
  "WAWebVoipMicDeviceSelector.react",
  [
    "fbt",
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebCheckmarkIcon.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebDropdownV2.react",
    "WAWebGuidePopup.react",
    "WAWebMenuItems.react",
    "WAWebNoop",
    "WAWebPopoverContext.react",
    "WAWebSelectMenuItem.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUA",
    "WAWebVoipActivityTracker",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipSplitButton.react",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WDSIconIcKeyboardVoiceFilled.react",
    "WDSIconIcMicOffFilled.react",
    "WDSText.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebVoipModalManager",
    "useWAWebVoipPermissionStatus",
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
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q = W || (W = o("react")),
      U = W,
      V = U.useCallback,
      H = U.useContext,
      G = U.useEffect,
      z = U.useRef,
      j = U.useState;
    function K(e) {
      return e instanceof Error && e.name.includes("NotAllowed");
    }
    function Q(t) {
      var a = t.isMuted,
        i = a === void 0 ? !1 : a,
        l = t.onMainClick,
        W = H(r("WAWebVoipUiPopoutWindowContext")),
        U = r("useWAWebVoipModalManager")(),
        Q = U.closeModal,
        X = U.openModal,
        Y = j([]),
        J = Y[0],
        Z = Y[1],
        ee = j([]),
        te = ee[0],
        ne = ee[1],
        re = j(null),
        oe = re[0],
        ae = re[1],
        ie = j(null),
        le = ie[0],
        se = ie[1],
        ue = j(!1),
        ce = ue[0],
        de = ue[1],
        me = j(!1),
        pe = me[0],
        _e = me[1],
        fe = q.createRef(),
        ge = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        he = z(null),
        ye = r("useWAWebVoipPermissionStatus")(!1),
        Ce = ye.micPermission,
        be = Ce === "denied",
        ve = r("useWAWebStableCallback")(l != null ? l : r("WAWebNoop")),
        Se = z(Ce);
      (G(
        function () {
          be &&
            !i &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicDeviceSelector] mic permission denied, auto-muting",
                ])),
            ),
            ve());
        },
        [be, i, ve],
      ),
        G(
          function () {
            var e = Se.current;
            if (((Se.current = Ce), Ce === "denied" && e !== "denied")) {
              var t;
              X(
                q.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                  messaging: t.Messaging.MIC_FAIL,
                  type: t.GuidePopupType.GUIDE_UNBLOCK,
                  featureSurface: t.FeatureSurface.VOIP_ACTIVE,
                  onConfirm: Q,
                }),
              );
            }
          },
          [Ce, X, Q],
        ));
      var Re = V(
        function () {
          if (be) {
            var e;
            X(
              q.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                messaging: e.Messaging.MIC_FAIL,
                type: e.GuidePopupType.GUIDE_UNBLOCK,
                featureSurface: e.FeatureSurface.VOIP_ACTIVE,
                onConfirm: Q,
              }),
            );
            return;
          }
          l == null || l();
        },
        [Q, be, l, X],
      );
      (G(
        function () {
          var e,
            t,
            a,
            i = W.windowEl,
            l =
              (e =
                i == null || (t = i.navigator) == null
                  ? void 0
                  : t.mediaDevices) != null
                ? e
                : navigator.mediaDevices,
            s = o("WAWebUA").UA.isSafari && i != null,
            R = !0;
          function L() {
            return E.apply(this, arguments);
          }
          function E() {
            return (
              (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield o(
                    "WAWebAudioDeviceManager",
                  ).getAvailableAudioDevices(i, s, R);
                  Z(e);
                  var t = o(
                    "WAWebAudioDeviceManager",
                  ).getCurrentSelectedAudioDevice();
                  t != null
                    ? (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] auto-select prev device: ",
                            "",
                          ])),
                        t,
                      ),
                      ae(t))
                    : o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] no device selected, pending",
                          ])),
                      );
                  var n = yield o(
                    "WAWebAudioDeviceManager",
                  ).getAvailableAudioOutputDevices(i, s);
                  ne(n);
                  var a = o(
                    "WAWebAudioDeviceManager",
                  ).getCurrentSelectedAudioOutputDevice();
                  a != null
                    ? (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] auto-select prev speaker: ",
                            "",
                          ])),
                        a,
                      ),
                      se(a))
                    : n.length > 0 && le == null && se(n[0].deviceId);
                  var l = e
                      .map(function (e) {
                        return e.label;
                      })
                      .join(", "),
                    u = n
                      .map(function (e) {
                        return e.label;
                      })
                      .join(", ");
                } catch (e) {
                  (K(e) ||
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] error loading devices",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    Z([]),
                    ne([]));
                }
              })),
              E.apply(this, arguments)
            );
          }
          function k() {
            var e = o(
              "WAWebAudioDeviceManager",
            ).getCurrentSelectedAudioDevice();
            e != null && ae(e);
          }
          function I() {
            return T.apply(this, arguments);
          }
          function T() {
            return (
              (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicDeviceSelector] device change, reloading",
                    ])),
                ),
                  _e(!0));
                var e = o(
                  "WAWebAudioDeviceManager",
                ).getCurrentSelectedAudioDevice();
                try {
                  var t = yield o(
                    "WAWebAudioDeviceManager",
                  ).getAvailableAudioDevices(i, s, R);
                  Z(t);
                  var n = yield o(
                    "WAWebAudioDeviceManager",
                  ).getAvailableAudioOutputDevices(i, s);
                  ne(n);
                  var a = yield o("WAWebAudioDeviceManager").selectAudioDevice(
                      i,
                      s,
                      R,
                    ),
                    l = !1;
                  try {
                    var u,
                      c = yield (u = navigator.permissions) == null
                        ? void 0
                        : u.query({ name: "microphone" });
                    l = (c == null ? void 0 : c.state) === "denied";
                  } catch (e) {}
                  if (
                    !l &&
                    a != null &&
                    a !== e &&
                    t.find(function (e) {
                      return e.deviceId === a;
                    })
                  ) {
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [MicDeviceSelector] auto-switch to: ",
                          "",
                        ])),
                      a,
                    );
                    try {
                      var d = yield o(
                        "WAWebVoipAudioCaptureAndPlayback",
                      ).switchAudioInputDevice(a, i);
                      if (d)
                        (ae(a),
                          o("WALogger").LOG(
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [MicDeviceSelector] auto-switched to: ",
                                "",
                              ])),
                            a,
                          ));
                      else if (
                        (o("WALogger").ERROR(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [MicDeviceSelector] auto-switch failed: ",
                              "",
                            ])),
                          a,
                        ),
                        e != null)
                      ) {
                        var m = yield o(
                          "WAWebVoipAudioCaptureAndPlayback",
                        ).switchAudioInputDevice(e, i);
                        m
                          ? o("WALogger").LOG(
                              C ||
                                (C = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [MicDeviceSelector] auto-reverted to: ",
                                  "",
                                ])),
                              e,
                            )
                          : (o("WALogger").ERROR(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [MicDeviceSelector] auto-revert failed: ",
                                  "",
                                ])),
                              e,
                            ),
                            k());
                      }
                    } catch (e) {
                      (o("WALogger")
                        .ERROR(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [MicDeviceSelector] auto-switch error",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs(
                          "voip: [MicDeviceSelector] auto-switch error",
                        ),
                        k());
                    }
                  }
                  var p = t
                      .map(function (e) {
                        return e.label;
                      })
                      .join(", "),
                    _ = n
                      .map(function (e) {
                        return e.label;
                      })
                      .join(", ");
                } catch (e) {
                  (K(e) ||
                    o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] error reloading devices",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    Z([]),
                    ne([]));
                } finally {
                  _e(!1);
                }
              })),
              T.apply(this, arguments)
            );
          }
          (L().catch(function (e) {
            return o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicDeviceSelector] error in initial loadDevices",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
            l && l.addEventListener("devicechange", I));
          var D =
            (a = i == null ? void 0 : i.navigator) != null ? a : navigator;
          if ("permissions" in D) {
            var x = D.permissions;
            x &&
              x
                .query({ name: "microphone" })
                .then(function (e) {
                  ((he.current = e), e.addEventListener("change", I));
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [MicDeviceSelector] permissions API error",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                });
          }
          return function () {
            (l && l.removeEventListener("devicechange", I),
              he.current &&
                (he.current.removeEventListener("change", I),
                (he.current = null)));
          };
        },
        [le, W.windowEl],
      ),
        G(
          function () {
            var e = function (t) {
                var e,
                  n,
                  r = t[0],
                  a =
                    (e =
                      (n = J.find(function (e) {
                        return e.deviceId === r;
                      })) == null
                        ? void 0
                        : n.label) != null
                      ? e
                      : "unknown";
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicDeviceSelector] mic selection changed: ",
                      " (",
                      ")",
                    ])),
                  a,
                  r,
                ),
                  ae(r));
              },
              t = function (t) {
                var e,
                  n,
                  r = t[0],
                  a =
                    (e =
                      (n = te.find(function (e) {
                        return e.deviceId === r;
                      })) == null
                        ? void 0
                        : n.label) != null
                      ? e
                      : "unknown";
                (o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicDeviceSelector] speaker changed: ",
                      " (",
                      ")",
                    ])),
                  a,
                  r,
                ),
                  se(r));
              };
            return (
              o("WAWebAudioDeviceManager").AudioDeviceEvents.on(
                "deviceSelectionChanged",
                e,
              ),
              o("WAWebAudioDeviceManager").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                t,
              ),
              function () {
                (o("WAWebAudioDeviceManager").AudioDeviceEvents.off(
                  "deviceSelectionChanged",
                  e,
                ),
                  o("WAWebAudioDeviceManager").AudioDeviceEvents.off(
                    "speakerDeviceSelectionChanged",
                    t,
                  ));
              }
            );
          },
          [J, te],
        ),
        o("useWAWebListener").useListener(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "requestAudioReacquisition",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.deviceId,
                  n = e.targetWindow;
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicDeviceSelector] requestAudioReacquisition: ",
                      "",
                    ])),
                  t,
                );
                try {
                  var a = yield o(
                    "WAWebVoipAudioCaptureAndPlayback",
                  ).switchAudioInputDevice(t, n, !0);
                  a ||
                    o("WALogger").WARN(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [MicDeviceSelector] FF popout audio reacq failed",
                        ])),
                    );
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [MicDeviceSelector] FF popout audio error",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ));
      var Le = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t, n;
            if (e === oe) {
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicDeviceSelector] skip, already selected: ",
                    "",
                  ])),
                e,
              );
              return;
            }
            if (ce || pe) {
              o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicDeviceSelector] skip, change in progress",
                  ])),
              );
              return;
            }
            var a =
              (t =
                (n = J.find(function (t) {
                  return t.deviceId === e;
                })) == null
                  ? void 0
                  : n.label) != null
                ? t
                : "unknown";
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicDeviceSelector] changing device to: ",
                  " (",
                  ")",
                ])),
              a,
              e,
            ),
              de(!0),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_SWITCH_MIC_DEVICE,
              ));
            var i = W.windowEl;
            try {
              var l = yield o(
                "WAWebVoipAudioCaptureAndPlayback",
              ).switchAudioInputDevice(e, i);
              if (l)
                (ae(e),
                  o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicDeviceSelector] switched to: ",
                        " (",
                        ")",
                      ])),
                    a,
                    e,
                  ));
              else
                throw (
                  o("WALogger").ERROR(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicDeviceSelector] failed to switch device: ",
                        "",
                      ])),
                    e,
                  ),
                  r("err")("Failed to switch audio device")
                );
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicDeviceSelector] error switching device",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
                o("WAWebToastManager").ToastManager.open(
                  q.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Could not switch microphone device. Please try again.",
                    ),
                  }),
                ));
            } finally {
              de(!1);
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Ee = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t, n;
            if (e === le) {
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicDeviceSelector] skip, speaker selected: ",
                    "",
                  ])),
                e,
              );
              return;
            }
            if (ce || pe) {
              o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicDeviceSelector] skip, speaker change pending",
                  ])),
              );
              return;
            }
            var a =
              (t =
                (n = te.find(function (t) {
                  return t.deviceId === e;
                })) == null
                  ? void 0
                  : n.label) != null
                ? t
                : "unknown";
            (o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicDeviceSelector] changing speaker device to: ",
                  " (",
                  ")",
                ])),
              a,
              e,
            ),
              de(!0),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_SWITCH_SPEAKER_DEVICE,
              ));
            try {
              var i = yield o(
                "WAWebVoipAudioCaptureAndPlayback",
              ).switchAudioOutputDevice(e);
              if (i)
                (se(e),
                  o("WALogger").LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicDeviceSelector] speaker switched: ",
                        " (",
                        ")",
                      ])),
                    a,
                    e,
                  ));
              else
                throw (
                  o("WALogger").ERROR(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicDeviceSelector] failed to switch speaker device: ",
                        "",
                      ])),
                    e,
                  ),
                  r("err")("Failed to switch speaker device")
                );
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicDeviceSelector] error switching speaker device",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
                o("WAWebToastManager").ToastManager.open(
                  q.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Could not switch speaker device. Please try again.",
                    ),
                  }),
                ));
            } finally {
              de(!1);
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        ke = function () {
          var e;
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.USER_OPEN_MIC_DROPDOWN,
          ),
            (e = ge.current) == null || e.showPopover());
        },
        Ie = r("useWAWebVoipWindowPopoutTooltipProps")(),
        Te = Ie.tooltipAnchorRef,
        De = Ie.tooltipOwnerDocument,
        xe = function () {
          var e;
          return q.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
            popoverPortal: (e = W.popoverPortalEl) != null ? e : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 280,
            maxHeight: 200,
            controllerRef: ge,
            target: fe,
            xstyle: o("WDSThemes").WDSDarkTheme,
            children: [
              q.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Microphone"),
              }),
              q.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
                multiselect: !1,
                initialSelection: oe,
                onSelect: function (t) {
                  t !== "no-devices" &&
                    t !== "no-speakers" &&
                    J.find(function (e) {
                      return e.deviceId === t;
                    }) &&
                    Le(t);
                },
                children:
                  J.length === 0
                    ? q.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                        optionId: "no-devices",
                        primary: s._(/*BTDS*/ "No microphones available"),
                        disabled: !0,
                      })
                    : J.map(function (e) {
                        return q.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          {
                            optionId: e.deviceId,
                            primary: e.label,
                            detailRight:
                              e.deviceId === oe
                                ? q.jsx(
                                    o("WAWebCheckmarkIcon.react").CheckmarkIcon,
                                    { height: 16, width: 16 },
                                  )
                                : null,
                          },
                          e.deviceId,
                        );
                      }),
              }),
              q.jsx(r("WAWebDropdownItemSeparator.react"), {}),
              q.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Speaker"),
              }),
              q.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
                multiselect: !1,
                initialSelection: le,
                onSelect: function (t) {
                  t !== "no-devices" &&
                    t !== "no-speakers" &&
                    te.find(function (e) {
                      return e.deviceId === t;
                    }) &&
                    Ee(t);
                },
                children:
                  te.length === 0
                    ? q.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                        optionId: "no-speakers",
                        primary: s._(/*BTDS*/ "No speakers available"),
                        disabled: !0,
                      })
                    : te.map(function (e) {
                        return q.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          {
                            optionId: e.deviceId,
                            primary: e.label,
                            detailRight:
                              e.deviceId === le
                                ? q.jsx(
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
        $e = (function () {
          return be
            ? s._(/*BTDS*/ "Allow microphone access to unmute")
            : i
              ? s._(/*BTDS*/ "Unmute microphone")
              : s._(/*BTDS*/ "Mute microphone");
        })();
      return q.jsxs("div", {
        children: [
          q.jsx(r("WAWebVoipSplitButton.react"), {
            Icon: r(
              i
                ? "WDSIconIcMicOffFilled.react"
                : "WDSIconIcKeyboardVoiceFilled.react",
            ),
            isMuted: i,
            onMainClick: l != null ? Re : ke,
            onDropdownClick: ke,
            dropdownRef: fe,
            testId: "mic-split-button",
            disabled: ce || pe,
            tooltipOwnerAnchorRef: Te,
            tooltipOwnerDocument: De,
            mainButtonLabel: $e,
            mainButtonTestId: i ? "mic-unmute" : "mic-mute",
            dropdownButtonLabel: s._(/*BTDS*/ "Audio settings"),
            dropdownButtonTestId: "audio-settings",
          }),
          xe(),
        ],
      });
    }
    ((Q.displayName = Q.name + " [from " + i.id + "]"), (l.default = Q));
  },
  226,
);
