__d(
  "WAWebAudioDeviceManager",
  [
    "Promise",
    "WALogger",
    "WAWebAudioDeviceEvents",
    "WAWebBackendApi",
    "WAWebMediaPermissionsUtils",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
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
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y = 200,
      J = new WeakMap();
    function Z(e) {
      var t = J.get(e);
      if (t != null) return t;
      var n = e.enumerateDevices().finally(function () {
        window.setTimeout(function () {
          J.get(e) === n && J.delete(e);
        }, Y);
      });
      return (J.set(e, n), n);
    }
    function ee(e) {
      return e.every(function (e) {
        return e.deviceId === "";
      });
    }
    var te = null;
    function ne(t) {
      te !== t &&
        ((te = t),
        t != null &&
          (o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
            "deviceSelectionChanged",
            [t],
          ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] Device selection changed, emitted event for deviceId:\n        ",
                "",
              ])),
            t,
          )));
    }
    function re() {
      return te;
    }
    var oe = null;
    function ae(e) {
      oe !== e &&
        ((oe = e),
        e != null &&
          (o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
            "speakerDeviceSelectionChanged",
            [e],
          ),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] Speaker device selection updated: ",
                "",
              ])),
            e,
          )));
    }
    function ie() {
      return oe != null
        ? oe
        : o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function le(e, t) {
      (o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] saved output device preference: ",
              "",
            ])),
          t,
          e.slice(0, 8),
        ));
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield fe(e);
            if (t.length === 0)
              return (
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] No audio output devices found",
                    ])),
                ),
                null
              );
            if (ee(t))
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Output device list is anonymized, keeping current selection",
                    ])),
                ),
                oe != null ? oe : null
              );
            var n = oe;
            if (n != null) {
              var r = t.find(function (e) {
                return e.deviceId === n;
              });
              r ||
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Current output device ",
                      " no longer available, will select fallback",
                    ])),
                  n,
                ),
                (n = null),
                ae(null));
            }
            var a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
            if (a != null && n !== a) {
              var i = t.find(function (e) {
                return e.deviceId === a;
              });
              i && (n = a);
            }
            if ((n != null && n !== oe && ae(n), oe == null && t.length > 0)) {
              var l;
              (ae(t[0].deviceId),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Using fallback audio output device: ",
                      "",
                    ])),
                  (l = t[0].label) != null ? l : "unknown",
                ));
            }
            return oe != null ? oe : null;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Error selecting audio output device: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "voip: [AV] Error selecting audio output device: ${e}",
                ),
              null
            );
          }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e, t, n, r) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            try {
              var a = yield pe({
                allowPermissionPrompt: r,
                isInActiveCall: n,
                skipPermissionRequest: t,
                targetWindow: e,
              });
              if (a.length === 0)
                return (
                  o("WALogger").ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] No audio input devices found",
                      ])),
                  ),
                  null
                );
              if (ee(a)) {
                var i;
                return (
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Device list is anonymized, keeping current selection",
                      ])),
                  ),
                  (i = re()) != null ? i : null
                );
              }
              var l = te;
              if (l != null) {
                var s = a.find(function (e) {
                  return e.deviceId === l;
                });
                s ||
                  ((l = null),
                  ne(null),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Current selected device is no longer available,\n          clearing selection",
                      ])),
                  ));
              }
              var u = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
              if (u != null && l !== u) {
                var c = a.find(function (e) {
                  return e.deviceId === u;
                });
                c && (l = u);
              }
              if (l != null && l !== te) {
                var d = a.find(function (e) {
                  return e.deviceId === l;
                });
                if (d) {
                  var m;
                  (ne(l),
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV] Using selected audio device:\n          ",
                          "",
                        ])),
                      (m = d.label) != null ? m : "unknown",
                    ));
                }
              }
              if (te == null) {
                var p;
                (ne(a[0].deviceId),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Using fallback audio device:\n        ",
                        "",
                      ])),
                    (p = a[0].label) != null ? p : "unknown",
                  ));
              }
              var _ = re();
              return _ != null ? _ : null;
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Error selecting audio device: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: [AV] Error selecting audio device: ${e}"),
                null
              );
            }
          },
        )),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return e.sort(function (e, t) {
        var n = e.deviceId === "default",
          r = t.deviceId === "default";
        return n && !r ? -1 : !n && r ? 1 : 0;
      });
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? {} : e,
            n = t.allowPermissionPrompt,
            r = t.isInActiveCall,
            a = t.skipPermissionRequest,
            i = t.targetWindow;
          try {
            var l,
              s,
              u =
                (l =
                  i == null || (s = i.navigator) == null
                    ? void 0
                    : s.mediaDevices) != null
                  ? l
                  : navigator.mediaDevices;
            if (!(u != null && u.enumerateDevices))
              return (
                o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var c =
                n === !0 && a !== !0 && !(o("WAWebUA").UA.isSafari && r === !0),
              d = o("WAWebUA").UA.isFirefox && i != null;
            if (c) {
              var m = d
                  ? { denied: !1, granted: !1 }
                  : yield o(
                      "WAWebMediaPermissionsUtils",
                    ).checkMediaPermissionState(
                      "microphone",
                      i == null ? void 0 : i.navigator,
                    ),
                p = m.denied,
                _ = m.granted,
                f = _ || p;
              if (!f)
                try {
                  var g = yield u.getUserMedia({ audio: !0 });
                  g.getTracks().forEach(function (e) {
                    return e.stop();
                  });
                } catch (e) {
                  if (r !== !0)
                    throw (
                      o("WALogger").WARN(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:getAvailableAudioDevices] microphone permission denied",
                          ])),
                      ),
                      e
                    );
                }
            }
            var h = yield Z(u),
              y = me(
                h
                  .filter(function (e) {
                    return e.kind === "audioinput";
                  })
                  .map(function (e) {
                    return {
                      deviceId: e.deviceId,
                      label: e.label || "Microphone " + e.deviceId.slice(0, 8),
                    };
                  }),
              );
            return (
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioDevices] loaded ",
                    " devices: ",
                    "",
                  ])),
                y.length,
                y.map(function (e) {
                  return e.label + " (" + e.deviceId.slice(0, 8) + ")";
                }),
              ),
              y
            );
          } catch (e) {
            return (
              (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
                o("WALogger").ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              r,
              a = t === !0 && e != null,
              i = a
                ? navigator.mediaDevices
                : (n =
                      e == null || (r = e.navigator) == null
                        ? void 0
                        : r.mediaDevices) != null
                  ? n
                  : navigator.mediaDevices;
            if (!(i != null && i.enumerateDevices))
              return (
                o("WALogger").ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioOutputDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var l = yield Z(i);
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableAudioOutputDevices] enumerated ",
                  " total devices (kinds: ",
                  ")",
                ])),
              l.length,
              l
                .map(function (e) {
                  return e.kind;
                })
                .filter(function (e, t, n) {
                  return n.indexOf(e) === t;
                }),
            );
            var s = me(
              l
                .filter(function (e) {
                  return e.kind === "audiooutput";
                })
                .map(function (e) {
                  return {
                    deviceId: e.deviceId,
                    label: e.label || "Speaker " + e.deviceId.slice(0, 8),
                  };
                }),
            );
            return (
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] found ",
                    " output devices: ",
                    "",
                  ])),
                s.length,
                s.map(function (e) {
                  return e.label + " (" + e.deviceId.slice(0, 8) + ")";
                }),
              ),
              s
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] error loading devices: ",
                    "",
                  ])),
                e,
              ),
              []
            );
          }
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchAudioInputDeviceInternal] switching to device: ",
                "",
              ])),
            e.deviceId.slice(0, 8),
          );
          try {
            var t = o("WAWebUA").UA.isFirefox
                ? babelHelpers.extends({}, e.captureParams, {
                    sampleRate: e.audioContext.sampleRate,
                  })
                : e.captureParams,
              n = yield o("WAWebBackendApi").frontendSendAndReceive(
                "voipAcquireMediaStream",
                {
                  type: "microphone",
                  selectedDeviceId: e.deviceId,
                  params: t,
                  targetWindow: e.targetWindow,
                },
              );
            return n
              ? (ne(e.deviceId),
                e.isAutoSwitch !== !0 &&
                  o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(
                    e.deviceId,
                  ),
                e.onStreamUpdate(n),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] successfully switched to new device",
                    ])),
                ),
                !0)
              : (o("WALogger").ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] failed to get new audio stream",
                    ])),
                ),
                !1);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "voip: switchAudioInputDeviceInternal error: ${error}",
                ),
              !1
            );
          }
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce(e, t, n) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = e.setSinkId;
            if (typeof a != "function")
              return (
                o("WALogger").WARN(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] setSinkId not available, output will use browser default",
                    ])),
                  r,
                ),
                !1
              );
            try {
              return (
                yield a.call(e, t),
                o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] output device set to ",
                      "",
                    ])),
                  r,
                  t.slice(0, 8),
                ),
                !0
              );
            } catch (e) {
              var i = e instanceof Error ? e.name : String(e);
              if (
                (o("WALogger").WARN(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] setSinkId initial attempt failed for ",
                      ": ",
                      "",
                    ])),
                  r,
                  t.slice(0, 8),
                  i,
                ),
                i === "NotFoundError")
              )
                return (
                  o("WALogger").WARN(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] device ",
                        " not found, skipping retries",
                      ])),
                    r,
                    t.slice(0, 8),
                  ),
                  !1
                );
            }
            for (
              var l = [200, 500, 1e3],
                s = function* () {
                  var i = l[c];
                  (o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] retrying setSinkId in ",
                        "ms (attempt ",
                        "/",
                        ")",
                      ])),
                    r,
                    i,
                    c + 2,
                    l.length + 1,
                  ),
                    yield new (X || (X = n("Promise")))(function (e) {
                      return window.setTimeout(e, i);
                    }));
                  try {
                    return (
                      yield a.call(e, t),
                      o("WALogger").LOG(
                        B ||
                          (B = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [",
                            "] setSinkId succeeded on attempt ",
                            " for ",
                            "",
                          ])),
                        r,
                        c + 2,
                        t.slice(0, 8),
                      ),
                      { v: !0 }
                    );
                  } catch (e) {
                    var s = e instanceof Error ? e.name : String(e);
                    if (
                      (o("WALogger").WARN(
                        W ||
                          (W = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [",
                            "] setSinkId attempt ",
                            " failed for ",
                            ": ",
                            "",
                          ])),
                        r,
                        c + 2,
                        t.slice(0, 8),
                        s,
                      ),
                      s === "NotFoundError")
                    )
                      return (
                        o("WALogger").WARN(
                          q ||
                            (q = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [",
                              "] device ",
                              " not found, aborting retries",
                            ])),
                          r,
                          t.slice(0, 8),
                        ),
                        { v: !1 }
                      );
                  }
                },
                u,
                c = 0;
              c < l.length;
              c++
            )
              if (((u = yield* s()), u)) return u.v;
            return (
              o("WALogger").ERROR(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId failed after ",
                    " attempts for ",
                    "",
                  ])),
                r,
                l.length + 1,
                t.slice(0, 8),
              ),
              !1
            );
          },
        )),
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ie();
          if (
            (o("WALogger").LOG(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] applying output device preference: ",
                  "",
                ])),
              t,
              n != null ? n : "(none)",
            ),
            n != null)
          ) {
            var r = yield Ce(e, n, t);
            if (r) return !0;
          }
          var a = yield se();
          return a != null && a !== n
            ? (o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] preferred device failed, falling back to ",
                    "",
                  ])),
                t,
                a.slice(0, 8),
              ),
              Ce(e, a, t))
            : !1;
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e, t, n, r) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i, l;
            if (
              (o("WALogger").LOG(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] switching to device: ",
                    ", browser=",
                    "/",
                    ", os=",
                    "",
                  ])),
                n,
                e.slice(0, 8),
                (a = o("WAWebUA").UA.browser) != null ? a : "unknown",
                (i = o("WAWebUA").UA.browserVersion) != null ? i : "?",
                (l = o("WAWebUA").UA.os) != null ? l : "unknown",
              ),
              !t)
            )
              return (
                o("WALogger").WARN(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] output sink not initialized",
                      "",
                    ])),
                  n,
                  r === !0 ? "" : ", saving preference",
                ),
                r !== !0 && le(e, n),
                !1
              );
            try {
              var s,
                u = typeof t.setSinkId == "function",
                c = (s = t.sinkId) != null ? s : "(unknown)";
              if (
                (o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] setSinkId supported=",
                      ", currentSinkId=",
                      "",
                    ])),
                  n,
                  String(u),
                  c,
                ),
                !u)
              )
                return (
                  o("WALogger").WARN(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId not supported in this browser",
                        "",
                      ])),
                    n,
                    r === !0 ? "" : ", saving preference",
                  ),
                  r !== !0 && le(e, n),
                  !1
                );
              var d = yield Ce(t, e, n);
              return (
                d &&
                  (r !== !0 &&
                    o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
                  ae(e),
                  o("WALogger").LOG(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] successfully switched to device: ",
                        "",
                      ])),
                    n,
                    e.slice(0, 8),
                  )),
                d
              );
            } catch (t) {
              var m = t instanceof Error ? t.name : String(t),
                p = t instanceof Error ? t.message : "";
              return (
                o("WALogger")
                  .ERROR(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId failed: name=",
                        ", message=",
                        ", targetDevice=",
                        "",
                      ])),
                    n,
                    m,
                    p,
                    e.slice(0, 8),
                  )
                  .sendLogs(
                    "voip: switchAudioOutputSinkIdInternal setSinkId failed",
                  ),
                !1
              );
            }
          },
        )),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t, n) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            return Re(e, t, "AV:switchAudioOutputDeviceInternal", n);
          },
        )),
        ke.apply(this, arguments)
      );
    }
    ((l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents),
      (l.coalescedEnumerateDevices = Z),
      (l.getCurrentSelectedAudioDevice = re),
      (l.getCurrentSelectedAudioOutputDevice = ie),
      (l.saveAudioOutputDevicePreference = le),
      (l.selectAudioOutputDevice = se),
      (l.selectAudioDevice = ce),
      (l.getAvailableAudioDevices = pe),
      (l.getAvailableAudioOutputDevices = fe),
      (l.switchAudioInputDeviceInternal = he),
      (l.applyPreferredAudioOutputSink = ve),
      (l.switchAudioOutputSinkIdInternal = Re),
      (l.switchAudioOutputDeviceInternal = Ee));
  },
  98,
);
