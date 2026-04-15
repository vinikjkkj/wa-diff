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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        a;
      return (
        t[0] !== n
          ? ((a = q.jsx(r("WDSText.react"), {
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
    function Q(e) {
      return e instanceof Error && e.name.includes("NotAllowed");
    }
    function X(t) {
      var a = t.isMuted,
        i = a === void 0 ? !1 : a,
        l = t.onMainClick,
        W = H(r("WAWebVoipUiPopoutWindowContext")),
        U = r("useWAWebVoipModalManager")(),
        X = U.closeModal,
        Y = U.openModal,
        J = j([]),
        Z = J[0],
        ee = J[1],
        te = j([]),
        ne = te[0],
        re = te[1],
        oe = j(null),
        ae = oe[0],
        ie = oe[1],
        le = j(null),
        se = le[0],
        ue = le[1],
        ce = j(!1),
        de = ce[0],
        me = ce[1],
        pe = j(!1),
        _e = pe[0],
        fe = pe[1],
        ge = q.createRef(),
        he = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        ye = z(null),
        Ce = r("useWAWebVoipPermissionStatus")(!1),
        be = Ce.micPermission,
        ve = be === "denied",
        Se = r("useWAWebStableCallback")(l != null ? l : r("WAWebNoop")),
        Re = z(be);
      (G(
        function () {
          ve &&
            !i &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicDeviceSelector] mic permission denied, auto-muting",
                ])),
            ),
            Se());
        },
        [ve, i, Se],
      ),
        G(
          function () {
            var e = Re.current;
            if (((Re.current = be), be === "denied" && e !== "denied")) {
              var t;
              Y(
                q.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                  messaging: t.Messaging.MIC_FAIL,
                  type: t.GuidePopupType.GUIDE_UNBLOCK,
                  featureSurface: t.FeatureSurface.VOIP_ACTIVE,
                  onConfirm: X,
                }),
              );
            }
          },
          [be, Y, X],
        ));
      var Le = V(
        function () {
          if (ve) {
            var e;
            Y(
              q.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                messaging: e.Messaging.MIC_FAIL,
                type: e.GuidePopupType.GUIDE_UNBLOCK,
                featureSurface: e.FeatureSurface.VOIP_ACTIVE,
                onConfirm: X,
              }),
            );
            return;
          }
          l == null || l();
        },
        [X, ve, l, Y],
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
                  ee(e);
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
                      ie(t))
                    : o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] no device selected, pending",
                          ])),
                      );
                  var n = yield o(
                    "WAWebAudioDeviceManager",
                  ).getAvailableAudioOutputDevices(i, s);
                  re(n);
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
                      ue(a))
                    : n.length > 0 && se == null && ue(n[0].deviceId);
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
                  (Q(e) ||
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] error loading devices",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    ee([]),
                    re([]));
                }
              })),
              E.apply(this, arguments)
            );
          }
          function k() {
            var e = o(
              "WAWebAudioDeviceManager",
            ).getCurrentSelectedAudioDevice();
            e != null && ie(e);
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
                  fe(!0));
                var e = o(
                  "WAWebAudioDeviceManager",
                ).getCurrentSelectedAudioDevice();
                try {
                  var t = yield o(
                    "WAWebAudioDeviceManager",
                  ).getAvailableAudioDevices(i, s, R);
                  ee(t);
                  var n = yield o(
                    "WAWebAudioDeviceManager",
                  ).getAvailableAudioOutputDevices(i, s);
                  re(n);
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
                        (ie(a),
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
                  (Q(e) ||
                    o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicDeviceSelector] error reloading devices",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    ee([]),
                    re([]));
                } finally {
                  fe(!1);
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
                  ((ye.current = e), e.addEventListener("change", I));
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
              ye.current &&
                (ye.current.removeEventListener("change", I),
                (ye.current = null)));
          };
        },
        [se, W.windowEl],
      ),
        G(
          function () {
            var e = function (t) {
                var e,
                  n,
                  r = t[0],
                  a =
                    (e =
                      (n = Z.find(function (e) {
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
                  ie(r));
              },
              t = function (t) {
                var e,
                  n,
                  r = t[0],
                  a =
                    (e =
                      (n = ne.find(function (e) {
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
                  ue(r));
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
          [Z, ne],
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
      var Ee = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t, n;
            if (e === ae) {
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
            if (de || _e) {
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
                (n = Z.find(function (t) {
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
              me(!0),
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
                (ie(e),
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
              me(!1);
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        ke = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t, n;
            if (e === se) {
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
            if (de || _e) {
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
                (n = ne.find(function (t) {
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
              me(!0),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_SWITCH_SPEAKER_DEVICE,
              ));
            try {
              var i = yield o(
                "WAWebVoipAudioCaptureAndPlayback",
              ).switchAudioOutputDevice(e);
              if (i)
                (ue(e),
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
              me(!1);
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Ie = function () {
          var e;
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.USER_OPEN_MIC_DROPDOWN,
          ),
            (e = he.current) == null || e.showPopover());
        },
        Te = r("useWAWebVoipWindowPopoutTooltipProps")(),
        De = Te.tooltipAnchorRef,
        xe = Te.tooltipOwnerDocument,
        $e = function () {
          var e;
          return q.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
            popoverPortal: (e = W.popoverPortalEl) != null ? e : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 280,
            maxHeight: 200,
            controllerRef: he,
            target: ge,
            xstyle: o("WDSThemes").WDSDarkTheme,
            children: [
              q.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                selectable: !1,
                children: s._(/*BTDS*/ "Microphone"),
              }),
              q.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
                multiselect: !1,
                initialSelection: ae,
                onSelect: function (t) {
                  t !== "no-devices" &&
                    t !== "no-speakers" &&
                    Z.find(function (e) {
                      return e.deviceId === t;
                    }) &&
                    Ee(t);
                },
                children:
                  Z.length === 0
                    ? q.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                        optionId: "no-devices",
                        primary: q.jsx(K, {
                          children: s._(/*BTDS*/ "No microphones available"),
                        }),
                        disabled: !0,
                      })
                    : Z.map(function (e) {
                        return q.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          {
                            optionId: e.deviceId,
                            primary: q.jsx(K, { children: e.label }),
                            detailRight:
                              e.deviceId === ae
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
                selectable: !1,
                children: s._(/*BTDS*/ "Speaker"),
              }),
              q.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
                multiselect: !1,
                initialSelection: se,
                onSelect: function (t) {
                  t !== "no-devices" &&
                    t !== "no-speakers" &&
                    ne.find(function (e) {
                      return e.deviceId === t;
                    }) &&
                    ke(t);
                },
                children:
                  ne.length === 0
                    ? q.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
                        optionId: "no-speakers",
                        primary: q.jsx(K, {
                          children: s._(/*BTDS*/ "No speakers available"),
                        }),
                        disabled: !0,
                      })
                    : ne.map(function (e) {
                        return q.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          {
                            optionId: e.deviceId,
                            primary: q.jsx(K, { children: e.label }),
                            detailRight:
                              e.deviceId === se
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
        Pe = (function () {
          return ve
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
            onMainClick: l != null ? Le : Ie,
            onDropdownClick: Ie,
            dropdownRef: ge,
            testId: "mic-split-button",
            disabled: de || _e,
            tooltipOwnerAnchorRef: De,
            tooltipOwnerDocument: xe,
            mainButtonLabel: Pe,
            mainButtonTestId: i ? "mic-unmute" : "mic-mute",
            dropdownButtonLabel: s._(/*BTDS*/ "Audio settings"),
            dropdownButtonTestId: "audio-settings",
          }),
          $e(),
        ],
      });
    }
    ((X.displayName = X.name + " [from " + i.id + "]"), (l.default = X));
  },
  226,
);
