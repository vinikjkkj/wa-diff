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
      j = null;
    function K(t) {
      j !== t &&
        ((j = t),
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
    function Q() {
      return j;
    }
    var X = null;
    function Y(e) {
      X !== e &&
        ((X = e),
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
    function J() {
      return X != null
        ? X
        : o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function Z(e, t) {
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
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield le(e);
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
            var n = X;
            if (n != null) {
              var r = t.find(function (e) {
                return e.deviceId === n;
              });
              r ||
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Current output device ",
                      " no longer available, will select fallback",
                    ])),
                  n,
                ),
                (n = null),
                Y(null));
            }
            var a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
            if (a != null && n !== a) {
              var i = t.find(function (e) {
                return e.deviceId === a;
              });
              i && (n = a);
            }
            if ((n != null && n !== X && Y(n), X == null && t.length > 0)) {
              var l;
              (Y(t[0].deviceId),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Using fallback audio output device: ",
                      "",
                    ])),
                  (l = t[0].label) != null ? l : "unknown",
                ));
            }
            return X != null ? X : null;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n, r) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            try {
              var a = yield ae(e, t, n, r);
              if (a.length === 0)
                return (
                  o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] No audio input devices found",
                      ])),
                  ),
                  null
                );
              var i = j;
              if (i != null) {
                var l = a.find(function (e) {
                  return e.deviceId === i;
                });
                l ||
                  ((i = null),
                  K(null),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Current selected device is no longer available,\n          clearing selection",
                      ])),
                  ));
              }
              var s = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
              if (s != null && i !== s) {
                var u = a.find(function (e) {
                  return e.deviceId === s;
                });
                u && (i = s);
              }
              if (i != null && i !== j) {
                var c = a.find(function (e) {
                  return e.deviceId === i;
                });
                if (c) {
                  var d;
                  (K(i),
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV] Using selected audio device:\n          ",
                          "",
                        ])),
                      (d = c.label) != null ? d : "unknown",
                    ));
                }
              }
              if (j == null) {
                var m;
                (K(a[0].deviceId),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Using fallback audio device:\n        ",
                        "",
                      ])),
                    (m = a[0].label) != null ? m : "unknown",
                  ));
              }
              var p = Q();
              return p != null ? p : null;
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
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
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return e.sort(function (e, t) {
        var n = e.deviceId === "default",
          r = t.deviceId === "default";
        return n && !r ? -1 : !n && r ? 1 : 0;
      });
    }
    function ae(e, t, n, r) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            try {
              var a,
                i,
                l =
                  (a =
                    e == null || (i = e.navigator) == null
                      ? void 0
                      : i.mediaDevices) != null
                    ? a
                    : navigator.mediaDevices;
              if (!(l != null && l.enumerateDevices))
                return (
                  o("WALogger").ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableAudioDevices] mediaDevices API not supported",
                      ])),
                  ),
                  []
                );
              var s =
                  r === !0 &&
                  t !== !0 &&
                  !(o("WAWebUA").UA.isSafari && n === !0),
                u = o("WAWebUA").UA.isFirefox && e != null;
              if (s) {
                var c = u
                    ? { denied: !1, granted: !1 }
                    : yield o(
                        "WAWebMediaPermissionsUtils",
                      ).checkMediaPermissionState(
                        "microphone",
                        e == null ? void 0 : e.navigator,
                      ),
                  d = c.denied,
                  m = c.granted,
                  p = m || d;
                if (!p)
                  try {
                    var _ = yield l.getUserMedia({ audio: !0 });
                    _.getTracks().forEach(function (e) {
                      return e.stop();
                    });
                  } catch (e) {
                    if (n !== !0)
                      throw (
                        o("WALogger").WARN(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:getAvailableAudioDevices] microphone permission denied",
                            ])),
                        ),
                        e
                      );
                  }
              }
              var f = yield l.enumerateDevices(),
                g = oe(
                  f
                    .filter(function (e) {
                      return e.kind === "audioinput";
                    })
                    .map(function (e) {
                      return {
                        deviceId: e.deviceId,
                        label:
                          e.label || "Microphone " + e.deviceId.slice(0, 8),
                      };
                    }),
                );
              return (
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioDevices] loaded ",
                      " devices: ",
                      "",
                    ])),
                  g.length,
                  g.map(function (e) {
                    return e.label + " (" + e.deviceId.slice(0, 8) + ")";
                  }),
                ),
                g
              );
            } catch (e) {
              return (
                (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
                  o("WALogger").ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableAudioDevices] error loading devices: ",
                        "",
                      ])),
                    e,
                  ),
                []
              );
            }
          },
        )),
        ie.apply(this, arguments)
      );
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioOutputDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var l = yield i.enumerateDevices();
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
            var s = oe(
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] error loading devices: ",
                    "",
                  ])),
                e,
              ),
              []
            );
          }
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
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
              ? (K(e.deviceId),
                o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.deviceId),
                e.onStreamUpdate(n),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] successfully switched to new device",
                    ])),
                ),
                !0)
              : (o("WALogger").ERROR(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] failed to get new audio stream",
                    ])),
                ),
                !1);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
        ce.apply(this, arguments)
      );
    }
    function de(e, t, n) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = e.setSinkId;
            if (typeof a != "function")
              return (
                o("WALogger").WARN(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WALogger").WARN(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId initial attempt failed for ",
                    ": ",
                    "",
                  ])),
                r,
                t.slice(0, 8),
                i,
              );
            }
            for (
              var l = [200, 500, 1e3],
                s = function* () {
                  var i = l[c];
                  (o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
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
                    yield new (z || (z = n("Promise")))(function (e) {
                      return window.setTimeout(e, i);
                    }));
                  try {
                    return (
                      yield a.call(e, t),
                      o("WALogger").LOG(
                        A ||
                          (A = babelHelpers.taggedTemplateLiteralLoose([
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
                    o("WALogger").WARN(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
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
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
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
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = J();
          if (
            (o("WALogger").LOG(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] applying output device preference: ",
                  "",
                ])),
              t,
              n != null ? n : "(none)",
            ),
            n != null)
          ) {
            var r = yield de(e, n, t);
            if (r) return !0;
          }
          var a = yield ee();
          return a != null && a !== n
            ? (o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] preferred device failed, falling back to ",
                    "",
                  ])),
                t,
                a.slice(0, 8),
              ),
              de(e, a, t))
            : !1;
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t, n) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r, a, i;
            if (
              (o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] switching to device: ",
                    ", browser=",
                    "/",
                    ", os=",
                    "",
                  ])),
                n,
                e.slice(0, 8),
                (r = o("WAWebUA").UA.browser) != null ? r : "unknown",
                (a = o("WAWebUA").UA.browserVersion) != null ? a : "?",
                (i = o("WAWebUA").UA.os) != null ? i : "unknown",
              ),
              !t)
            )
              return (
                o("WALogger").WARN(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] output sink not initialized, saving preference only",
                    ])),
                  n,
                ),
                Z(e, n),
                !1
              );
            try {
              var l,
                s = typeof t.setSinkId == "function",
                u = (l = t.sinkId) != null ? l : "(unknown)";
              if (
                (o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] setSinkId supported=",
                      ", currentSinkId=",
                      "",
                    ])),
                  n,
                  String(s),
                  u,
                ),
                !s)
              )
                return (
                  o("WALogger").WARN(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId not supported in this browser, saving preference only",
                      ])),
                    n,
                  ),
                  Z(e, n),
                  !1
                );
              var c = yield de(t, e, n);
              return (
                c &&
                  (o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
                  Y(e),
                  o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] successfully switched to device: ",
                        "",
                      ])),
                    n,
                    e.slice(0, 8),
                  )),
                c
              );
            } catch (t) {
              var d = t instanceof Error ? t.name : String(t),
                m = t instanceof Error ? t.message : "";
              return (
                o("WALogger")
                  .ERROR(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId failed: name=",
                        ", message=",
                        ", targetDevice=",
                        "",
                      ])),
                    n,
                    d,
                    m,
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
        ge.apply(this, arguments)
      );
    }
    function he(e, t) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return fe(e, t, "AV:switchAudioOutputDeviceInternal");
        })),
        ye.apply(this, arguments)
      );
    }
    ((l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents),
      (l.getCurrentSelectedAudioDevice = Q),
      (l.getCurrentSelectedAudioOutputDevice = J),
      (l.saveAudioOutputDevicePreference = Z),
      (l.selectAudioOutputDevice = ee),
      (l.selectAudioDevice = ne),
      (l.getAvailableAudioDevices = ae),
      (l.getAvailableAudioOutputDevices = le),
      (l.switchAudioInputDeviceInternal = ue),
      (l.setSinkIdWithRetry = de),
      (l.applyPreferredAudioOutputSink = pe),
      (l.switchAudioOutputSinkIdInternal = fe),
      (l.switchAudioOutputDeviceInternal = he));
  },
  98,
);
