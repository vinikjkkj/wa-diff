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
      Y,
      J,
      Z,
      ee,
      te,
      ne = 200,
      re = new WeakMap();
    function oe(e) {
      var t = re.get(e);
      if (t != null) return t;
      var n = e.enumerateDevices().finally(function () {
        window.setTimeout(function () {
          re.get(e) === n && re.delete(e);
        }, ne);
      });
      return (re.set(e, n), n);
    }
    function ae(e) {
      return e.every(function (e) {
        return e.deviceId === "";
      });
    }
    var ie = null;
    function le(t) {
      ie !== t &&
        ((ie = t),
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
    function se() {
      return ie;
    }
    var ue = null,
      ce = null;
    function de(e) {
      ue !== e &&
        ((ue = e),
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
    function me() {
      return ue != null
        ? ue
        : o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function pe(e, t) {
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
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield ve(e);
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
            if (ae(t))
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Output device list is anonymized, keeping current selection",
                    ])),
                ),
                ue != null ? ue : null
              );
            var n = ue;
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
                de(null));
            }
            var a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
            if (a != null && n !== a) {
              var i = t.find(function (e) {
                return e.deviceId === a;
              });
              i && (n = a);
            }
            if ((n != null && n !== ue && de(n), ue == null && t.length > 0)) {
              var l;
              (de(t[0].deviceId),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Using fallback audio output device: ",
                      "",
                    ])),
                  (l = t[0].label) != null ? l : "unknown",
                ));
            }
            return ue != null ? ue : null;
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
        fe.apply(this, arguments)
      );
    }
    function ge(e, t, n, r) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            try {
              var a = yield Ce({
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
              if (ae(a)) {
                var i;
                return (
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Device list is anonymized, keeping current selection",
                      ])),
                  ),
                  (i = se()) != null ? i : null
                );
              }
              var l = ie;
              if (l != null) {
                var s = a.find(function (e) {
                  return e.deviceId === l;
                });
                s ||
                  ((l = null),
                  le(null),
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
              if (l != null && l !== ie) {
                var d = a.find(function (e) {
                  return e.deviceId === l;
                });
                if (d) {
                  var m;
                  (le(l),
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
              if (ie == null) {
                var p;
                (le(a[0].deviceId),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Using fallback audio device:\n        ",
                        "",
                      ])),
                    (p = a[0].label) != null ? p : "unknown",
                  ));
              }
              var _ = se();
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
        he.apply(this, arguments)
      );
    }
    function ye(e) {
      return e.sort(function (e, t) {
        var n = e.deviceId === "default",
          r = t.deviceId === "default";
        return n && !r ? -1 : !n && r ? 1 : 0;
      });
    }
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var h = yield oe(u),
              y = ye(
                h
                  .filter(function (e) {
                    return e.kind === "audioinput";
                  })
                  .map(function (e) {
                    return {
                      deviceId: e.deviceId,
                      groupId: Ee(e),
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
                y.map(Re),
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
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var l = yield oe(i);
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
            var s = ye(
              l
                .filter(function (e) {
                  return e.kind === "audiooutput";
                })
                .map(function (e) {
                  return {
                    deviceId: e.deviceId,
                    groupId: Ee(e),
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
                s.map(Re),
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
        Se.apply(this, arguments)
      );
    }
    function Re(e) {
      var t = e.groupId == null ? "none" : e.groupId.slice(0, 8);
      return e.label + " (" + e.deviceId.slice(0, 8) + ", group " + t + ")";
    }
    function Le(e, t, n) {
      return e != null
        ? (e.label || "unlabeled") + " (" + e.deviceId.slice(0, 8) + ")"
        : t != null
          ? "(not in device list: " + t.slice(0, 8) + ")"
          : n;
    }
    function Ee(e) {
      var t = e == null ? void 0 : e.groupId;
      return t != null && t !== "" ? t : null;
    }
    function ke(e, t, n, r) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            try {
              var a = navigator.mediaDevices;
              if (!(a != null && a.enumerateDevices)) return;
              var i = yield oe(a),
                l = i.filter(function (e) {
                  return e.kind === "audioinput";
                }),
                s = i.filter(function (e) {
                  return e.kind === "audiooutput";
                }),
                u = l.find(function (e) {
                  return e.deviceId === n;
                }),
                c = s.find(function (e) {
                  return e.deviceId === r;
                });
              o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] audio topology (",
                    "): ",
                    " mic(s), ",
                    " speaker(s), mic=",
                    ", speaker=",
                    "",
                  ])),
                e,
                t,
                l.length,
                s.length,
                Le(u, n, "(none)"),
                Le(c, r, "(browser default)"),
              );
              var d = Ee(u),
                m = Ee(c);
              d == null || m == null
                ? o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] mic/speaker (",
                        ") pairing unknown, groupId unavailable",
                      ])),
                    e,
                    t,
                  )
                : d === m
                  ? o("WALogger").LOG(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [",
                          "] mic/speaker (",
                          ") paired on one device, group ",
                          "",
                        ])),
                      e,
                      t,
                      d.slice(0, 8),
                    )
                  : o("WALogger").LOG(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [",
                          "] mic/speaker (",
                          ") group mismatch, mic group ",
                          " vs speaker group ",
                          "",
                        ])),
                      e,
                      t,
                      d.slice(0, 8),
                      m.slice(0, 8),
                    );
            } catch (n) {
              o("WALogger").WARN(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] failed to log audio topology (",
                    "): ",
                    "",
                  ])),
                e,
                t,
                n,
              );
            }
          },
        )),
        Ie.apply(this, arguments)
      );
    }
    function Te(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
              ? (le(e.deviceId),
                e.isAutoSwitch !== !0 &&
                  o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(
                    e.deviceId,
                  ),
                e.onStreamUpdate(n),
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] successfully switched to new device",
                    ])),
                ),
                ke(
                  "AV:switchAudioInputDeviceInternal",
                  "input-switch",
                  e.deviceId,
                  ce,
                ),
                !0)
              : (o("WALogger").ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] failed to get new audio stream",
                    ])),
                ),
                !1);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
        De.apply(this, arguments)
      );
    }
    function xe(e, t, n) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = e.setSinkId;
            if (typeof a != "function")
              return (
                o("WALogger").WARN(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
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
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
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
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
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
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
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
                    yield new (te || (te = n("Promise")))(function (e) {
                      return window.setTimeout(e, i);
                    }));
                  try {
                    return (
                      yield a.call(e, t),
                      o("WALogger").LOG(
                        H ||
                          (H = babelHelpers.taggedTemplateLiteralLoose([
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
                        G ||
                          (G = babelHelpers.taggedTemplateLiteralLoose([
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
                          z ||
                            (z = babelHelpers.taggedTemplateLiteralLoose([
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
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
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
        $e.apply(this, arguments)
      );
    }
    function Pe(e, t) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield Me(e, t);
          return (
            n != null && (ce = n),
            ke(t, "call-start", se(), n),
            n != null
          );
        })),
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = me();
          if (
            (o("WALogger").LOG(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] applying output device preference: ",
                  "",
                ])),
              t,
              n != null ? n : "(none)",
            ),
            n != null)
          ) {
            var r = yield xe(e, n, t);
            if (r) return n;
          }
          var a = yield _e();
          if (a != null && a !== n) {
            o("WALogger").LOG(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] preferred device failed, falling back to ",
                  "",
                ])),
              t,
              a.slice(0, 8),
            );
            var i = yield xe(e, a, t);
            return i ? a : null;
          }
          return null;
        })),
        we.apply(this, arguments)
      );
    }
    function Ae(e, t, n, r) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i, l;
            if (
              (o("WALogger").LOG(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] output sink not initialized",
                      "",
                    ])),
                  n,
                  r === !0 ? "" : ", saving preference",
                ),
                r !== !0 && pe(e, n),
                !1
              );
            try {
              var s,
                u = typeof t.setSinkId == "function",
                c = (s = t.sinkId) != null ? s : "(unknown)";
              if (
                (o("WALogger").LOG(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId not supported in this browser",
                        "",
                      ])),
                    n,
                    r === !0 ? "" : ", saving preference",
                  ),
                  r !== !0 && pe(e, n),
                  !1
                );
              var d = yield xe(t, e, n);
              return (
                d &&
                  (r !== !0 &&
                    o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
                  de(e),
                  o("WALogger").LOG(
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] successfully switched to device: ",
                        "",
                      ])),
                    n,
                    e.slice(0, 8),
                  ),
                  (ce = e),
                  ke(n, "output-switch", se(), e)),
                d
              );
            } catch (t) {
              var m = t instanceof Error ? t.name : String(t),
                p = t instanceof Error ? t.message : "";
              return (
                o("WALogger")
                  .ERROR(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
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
        Fe.apply(this, arguments)
      );
    }
    function Oe(e, t, n) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            return Ae(e, t, "AV:switchAudioOutputDeviceInternal", n);
          },
        )),
        Be.apply(this, arguments)
      );
    }
    ((l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents),
      (l.coalescedEnumerateDevices = oe),
      (l.isAnonymizedDeviceList = ae),
      (l.getCurrentSelectedAudioDevice = se),
      (l.getCurrentSelectedAudioOutputDevice = me),
      (l.saveAudioOutputDevicePreference = pe),
      (l.selectAudioOutputDevice = _e),
      (l.selectAudioDevice = ge),
      (l.getAvailableAudioDevices = Ce),
      (l.getAvailableAudioOutputDevices = ve),
      (l.switchAudioInputDeviceInternal = Te),
      (l.applyPreferredAudioOutputSink = Pe),
      (l.switchAudioOutputSinkIdInternal = Ae),
      (l.switchAudioOutputDeviceInternal = Oe));
  },
  98,
);
