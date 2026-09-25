__d(
  "WAWebVoipVideoCameraCapture",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebTypedEventEmitter",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPthreadHardening",
    "WAWebVoipResolutionCap",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureBase",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
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
      ne,
      re,
      oe,
      ae,
      ie,
      le,
      se,
      ue,
      ce,
      de,
      me,
      pe,
      _e,
      fe,
      ge,
      he,
      ye,
      Ce = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebTypedEventEmitter")),
      be = new Ce(),
      ve = new Set(),
      Se = 2e3,
      Re = 2e3,
      Le = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(
        o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
      );
    function Ee(t) {
      var n = 0,
        r = 0;
      for (var a of ve) {
        var i = a.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        (i.length > 0 &&
          (i.forEach(function (e) {
            return e.stop();
          }),
          r++,
          (n += i.length)),
          ve.delete(a));
      }
      n > 0
        ? o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:cameraReconciliation] ",
                  ": stopped ",
                  " leaked live camera track(s) across ",
                  " stream(s) that survived teardown",
                ])),
              t,
              n,
              r,
            )
            .sendLogs("voip-camera-stream-leak")
        : o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:cameraReconciliation] ",
                ": clean \u2014 no live camera tracks after teardown",
              ])),
            t,
          );
    }
    function ke(e, t) {
      if (e.readyState !== "live" || e.muted) return !1;
      var n = e.getSettings().deviceId;
      return r("isStringNullOrEmpty")(n) || n === t;
    }
    var Ie = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "camera"),
            (t.captureParams = null),
            (t.currentDeviceId = null),
            (t.currentFacing = null),
            (t.__lastCapturedStream = null),
            (t.__lastTargetWindow = null),
            (t.__frameMonitorCleanup = null),
            (t.__healthCheckRetryCount = 0),
            (t.__stopping = !1),
            (t.__stopGeneration = 0),
            (t.__callEndGeneration = 0),
            (t.__stackCaptureWanted = !1),
            (t.__facingFlipActive = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.startCameraCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  a = e.camera_id_requested,
                  i = e.facingModeRequested,
                  l = e.height,
                  s = e.isAVUpgrade,
                  y = e.isStackRequest,
                  C = e.max_fps,
                  b = e.stopGeneration,
                  v = e.targetWindow,
                  S = e.width;
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] cam=",
                      " facing=",
                      " w=",
                      " h=",
                      " fps=",
                      " upgrade=",
                      " targetWindow=",
                      "",
                    ])),
                  a,
                  i != null ? i : "none",
                  S,
                  l,
                  C,
                  s,
                  String(v != null),
                ),
                  y === !0 && (this.__stackCaptureWanted = !0));
                var R = b != null ? b : this.__takeStopGeneration();
                R == null && this.__recordStartRequest(a, i, v);
                var L = yield this.__resolveCameraCaptureId({
                  camera_id_requested: a,
                  facingModeRequested: i,
                  targetWindow: v,
                });
                if (this.__stopBeganSince(R)) {
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] stop began while resolving the camera, not acquiring",
                      ])),
                  );
                  return;
                }
                (R != null && this.__recordStartRequest(a, i, v),
                  (this.captureParams = o(
                    "WAWebVoipResolutionCap",
                  ).applyLowEndResolutionCap({
                    width: S,
                    height: l,
                    maxFps: C,
                  })));
                var E = null,
                  k = null,
                  I = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        ) {
                          var e = yield o(
                            "WAWebBackendApi",
                          ).frontendSendAndReceive("voipAcquireMediaStream", {
                            type: "camera",
                            selectedDeviceId: L,
                            params: r("nullthrows")(t.captureParams),
                            isAVUpgrade: s,
                            targetWindow: v,
                            facingMode: i,
                          });
                          if (e == null) {
                            o("WALogger").LOG(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] getUserMedia failed, muting video",
                                ])),
                            );
                            var a = yield o(
                              "WAWebVoipStackInterface",
                            ).getVoipStackInterface();
                            return (
                              (a == null ? void 0 : a.type) === "web" &&
                                (yield a.setCallVideoMute(!0)),
                              null
                            );
                          }
                          ((t.__lastCapturedStream = e), ve.add(e));
                          var l = e.getVideoTracks().at(0);
                          if (l != null) {
                            var u,
                              c,
                              g = l.getSettings();
                            (g.deviceId != null &&
                              g.deviceId !== "" &&
                              (E = g.deviceId),
                              (g.facingMode === "user" ||
                                g.facingMode === "environment") &&
                                (k = g.facingMode),
                              o("WALogger").LOG(
                                m ||
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:getCameraMediaStream] track acquired: readyState=",
                                    ", muted=",
                                    ", enabled=",
                                    ", deviceId=",
                                    ", facingMode=",
                                    ", resolution=",
                                    "x",
                                    "",
                                  ])),
                                l.readyState,
                                String(l.muted),
                                String(l.enabled),
                                (u = g.deviceId) != null ? u : "unknown",
                                (c = g.facingMode) != null ? c : "unknown",
                                String(g.width),
                                String(g.height),
                              ));
                          } else
                            o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] stream acquired but no video track found",
                                ])),
                            );
                          return (
                            l == null ||
                              l.addEventListener(
                                "ended",
                                n("asyncToGeneratorRuntime").asyncToGenerator(
                                  function* () {
                                    if (
                                      o(
                                        "WAWebVoipPopoutWindowState",
                                      ).getIsCameraStreamReacquisitionInProgress() ||
                                      t.__lastCapturedStream !== e
                                    ) {
                                      o("WALogger").LOG(
                                        _ ||
                                          (_ =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap",
                                              ],
                                            )),
                                      );
                                      return;
                                    }
                                    o("WALogger").LOG(
                                      f ||
                                        (f =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[AV:getCameraMediaStream] stream ended, muting video",
                                            ],
                                          )),
                                    );
                                    var n = yield o(
                                      "WAWebVoipStackInterface",
                                    ).getVoipStackInterface();
                                    (n == null ? void 0 : n.type) === "web" &&
                                      (yield n.setCallVideoMute(!0));
                                  },
                                ),
                              ),
                            e
                          );
                        }
                        throw r("err")("getUserMedia not supported");
                      },
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })();
                if (
                  (yield this.__startCapture(
                    babelHelpers.extends(
                      {
                        getMediaStream: I,
                        isStopped: function () {
                          return t.__stopBeganSince(R);
                        },
                        onVideoDataFnType: "onVideoDataFromJs",
                      },
                      r("nullthrows")(this.captureParams),
                    ),
                  ),
                  this.__stopBeganSince(R))
                ) {
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] stop began while acquiring, not monitoring",
                      ])),
                  );
                  return;
                }
                var T = this.__lastCapturedStream;
                T != null &&
                  (o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.resetFirstFrameReceivedForSource(Le),
                  this.__monitorFrameProduction(T));
                var D = this.__updateDeviceFromAcquiredTrack(E, L);
                (this.__updateFacingFromAcquiredTrack(k, i, D),
                  o("WAWebUA").UA.isFirefox &&
                    v != null &&
                    (be.trigger("deviceListRefreshRequested", []),
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startCameraCapture] Firefox popout camera capture ready, refreshing device list",
                        ])),
                    )));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__recordStartRequest = function (t, n, o) {
            ((this.__lastTargetWindow = o != null ? o : null),
              n != null
                ? (this.__facingFlipActive = !0)
                : r("isStringNullOrEmpty")(t) ||
                  (this.__facingFlipActive = !1));
          }),
          (a.__takeStopGeneration = function () {
            return o(
              "WAWebVoipPthreadHardening",
            ).isVoipWorkerLifecycleHardeningEnabled()
              ? this.__stopping
                ? this.__stopGeneration - 1
                : this.__stopGeneration
              : null;
          }),
          (a.__stopBeganSince = function (t) {
            return t == null || this.__stopGeneration === t
              ? !1
              : this.__callEndGeneration > t || !this.__stackCaptureWanted;
          }),
          (a.__resolveCameraCaptureId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.camera_id_requested,
                  n = e.facingModeRequested,
                  a = e.targetWindow;
                if (n != null) return "";
                var i = t;
                if (r("isStringNullOrEmpty")(i)) {
                  var l = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
                  l != null &&
                    ((i = l),
                    o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
                }
                if (
                  (r("isStringNullOrEmpty")(i) &&
                    this.currentDeviceId != null &&
                    (i = this.currentDeviceId),
                  r("isStringNullOrEmpty")(i))
                ) {
                  var s = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
                  s != null && (i = s);
                }
                return yield this.__validateResolvedCameraId(i, a);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__validateResolvedCameraId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (r("isStringNullOrEmpty")(e)) return e;
                var n =
                  t != null
                    ? t
                    : o("WAWebUA").UA.isFirefox
                      ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                      : null;
                try {
                  var a = yield o("WAWebBackendApi").frontendSendAndReceive(
                    "getIsValidVideoDevice",
                    { deviceId: e, targetWindow: n, isInActiveCall: !0 },
                  );
                  if (!a)
                    return (
                      o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startCameraCapture] device ",
                            " no longer available, falling back to default",
                          ])),
                        e,
                      ),
                      ""
                    );
                } catch (t) {
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device validation failed, proceeding with ",
                        ": ",
                        "",
                      ])),
                    e,
                    t,
                  );
                }
                return e;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__updateDeviceFromAcquiredTrack = function (t, n) {
            var e = t != null ? t : n;
            return this.currentDeviceId === e
              ? !1
              : ((this.currentDeviceId = e),
                !this.__facingFlipActive &&
                  !r("isStringNullOrEmpty")(e) &&
                  o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(e),
                be.trigger("deviceSelectionChanged", [e]),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] device changed: requested=",
                      ", actual=",
                      "",
                    ])),
                  n,
                  e,
                ),
                !0);
          }),
          (a.__updateFacingFromAcquiredTrack = function (t, n, r) {
            var e,
              a =
                (e = t != null ? t : n) != null
                  ? e
                  : r
                    ? null
                    : this.currentFacing;
            this.currentFacing !== a &&
              ((this.currentFacing = a),
              be.trigger("facingChanged", [a]),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] facing changed: ",
                    "",
                  ])),
                a != null ? a : "unknown",
              ));
          }),
          (a.startWithStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a, i, l) {
                var s = this;
                (l === void 0 && (l = !1),
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startWithStream] w=",
                        " h=",
                        " fps=",
                        " track=",
                        "",
                      ])),
                    t,
                    a,
                    i,
                    String(l),
                  ));
                var u = this.__takeStopGeneration();
                if (
                  ((this.captureParams = { width: t, height: a, maxFps: i }),
                  (this.__lastTargetWindow = null),
                  yield this.__startCapture({
                    getMediaStream: (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          return e;
                        },
                      );
                      function r() {
                        return t.apply(this, arguments);
                      }
                      return r;
                    })(),
                    isStopped: function () {
                      return s.__stopBeganSince(u);
                    },
                    onVideoDataFnType: "onVideoDataFromJs",
                    width: t,
                    height: a,
                    maxFps: i,
                  }),
                  this.__stopBeganSince(u))
                ) {
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startWithStream] stop began during the start, releasing the stream",
                      ])),
                  ),
                    e.getTracks().forEach(function (e) {
                      return e.stop();
                    }));
                  return;
                }
                if (
                  (o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.resetFirstFrameReceivedForSource(Le),
                  l)
                ) {
                  var c = this.__lastCapturedStream;
                  (c != null && c !== e && ve.delete(c),
                    (this.__lastCapturedStream = e),
                    ve.add(e));
                  var d = e.getVideoTracks().at(0);
                  d == null ||
                    d.addEventListener(
                      "ended",
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          if (
                            !(
                              o(
                                "WAWebVoipPopoutWindowState",
                              ).getIsCameraStreamReacquisitionInProgress() ||
                              s.__lastCapturedStream !== e
                            )
                          ) {
                            o("WALogger").LOG(
                              L ||
                                (L = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:startWithStream] stream ended, muting video",
                                ])),
                            );
                            try {
                              var t = yield o(
                                "WAWebVoipStackInterface",
                              ).getVoipStackInterface();
                              (t == null ? void 0 : t.type) === "web" &&
                                (yield t.setCallVideoMute(!0));
                            } catch (e) {
                              o("WALogger")
                                .ERROR(
                                  E ||
                                    (E =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[AV:startWithStream] mute on stream-ended failed",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .sendLogs(
                                  "voip-popout-reuse-ended-mute-failed",
                                );
                            }
                          }
                        },
                      ),
                    );
                }
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getLastCapturedStream = function () {
            return this.__lastCapturedStream;
          }),
          (a.isDeliveringFramesForCurrentDevice = function () {
            var e,
              t,
              n,
              a = this.currentDeviceId;
            if (r("isStringNullOrEmpty")(a)) return !1;
            var i =
              (e =
                (t = this.__lastCapturedStream) == null
                  ? void 0
                  : t.getVideoTracks()) != null
                ? e
                : [];
            if (
              !i.some(function (e) {
                return ke(e, a);
              })
            )
              return !1;
            var l =
              (n = o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.getDecodeStatsForSource(Le)) == null
                ? void 0
                : n.lastFrameTimestampMs;
            return l != null && window.performance.now() - l < Re;
          }),
          (a.switchVideoDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "voip: switchVideoDevice (" + this.name + ")";
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " switching to device: ",
                      "",
                    ])),
                  n,
                  e,
                );
                var r = this.__takeStopGeneration();
                if (!(yield this.__ensureRestartableForSwitch(n))) return !1;
                var a = this.captureParams;
                if (a == null)
                  return (
                    o("WALogger").ERROR(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " capture params not available",
                        ])),
                      n,
                    ),
                    !1
                  );
                var i = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "getIsValidVideoDevice",
                  { deviceId: e, targetWindow: t, isInActiveCall: !0 },
                );
                if (!i)
                  return (
                    o("WALogger").ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " device not found in available devices: ",
                          "",
                        ])),
                      n,
                      e,
                    ),
                    !1
                  );
                if (this.__stopBeganSince(r))
                  return (
                    o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " stop started before the switch cleaned up, aborting",
                        ])),
                      n,
                    ),
                    !1
                  );
                var l = this.currentDeviceId;
                this.__healthCheckRetryCount = 0;
                try {
                  if ((yield this.__cleanup(), this.__stopBeganSince(r)))
                    return (
                      o("WALogger").LOG(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during switch, aborting before re-acquire",
                          ])),
                        n,
                      ),
                      !1
                    );
                  if (
                    (yield this.startCameraCapture({
                      camera_id_requested: e,
                      height: a.height,
                      isAVUpgrade: !1,
                      max_fps: a.maxFps,
                      stopGeneration: r,
                      targetWindow: t,
                      width: a.width,
                    }),
                    this.__stopBeganSince(r))
                  )
                    return (
                      o("WALogger").LOG(
                        $ ||
                          ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during switch, device not acquired",
                          ])),
                        n,
                      ),
                      !1
                    );
                } catch (e) {
                  if (
                    (o("WALogger").ERROR(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchVideoDevice] error switching device: ",
                          "",
                        ])),
                      e,
                    ),
                    l != null && l !== "")
                  ) {
                    o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:switchVideoDevice] rollback to: ",
                          "",
                        ])),
                      l,
                    );
                    try {
                      var s = this.captureParams;
                      s != null &&
                        (yield this.startCameraCapture({
                          camera_id_requested: l,
                          height: s.height,
                          isAVUpgrade: !1,
                          max_fps: s.maxFps,
                          stopGeneration: r,
                          targetWindow: t,
                          width: s.width,
                        }));
                    } catch (e) {
                      o("WALogger").ERROR(
                        M ||
                          (M = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:switchVideoDevice] rollback failed: ",
                            "",
                          ])),
                        e,
                      );
                    }
                  }
                  return !1;
                }
                return (
                  o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoDevice] switched to: ",
                        "",
                      ])),
                    e,
                  ),
                  !0
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.switchVideoFacing = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "voip: switchVideoFacing (" + this.name + ")";
                if (
                  (o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " switching to facing: ",
                        "",
                      ])),
                    n,
                    e,
                  ),
                  this.__stopping)
                )
                  return (
                    o("WALogger").LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " stop in progress, skipping flip",
                        ])),
                      n,
                    ),
                    !1
                  );
                var r = this.__takeStopGeneration();
                if (!(yield this.__ensureRestartableForSwitch(n))) return !1;
                var a = this.captureParams;
                if (a == null)
                  return (
                    o("WALogger")
                      .ERROR(
                        O ||
                          (O = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture params not available",
                          ])),
                        n,
                      )
                      .sendLogs("voip-switch-video-facing-no-params"),
                    !1
                  );
                if (this.__stopBeganSince(r))
                  return (
                    o("WALogger").LOG(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " stop started before the flip cleaned up, aborting",
                        ])),
                      n,
                    ),
                    !1
                  );
                var i = this.currentDeviceId,
                  l = this.currentFacing,
                  s = this.__facingFlipActive;
                this.__healthCheckRetryCount = 0;
                try {
                  if (
                    (yield this.__cleanup(),
                    this.__stopping || this.__stopBeganSince(r))
                  )
                    return (
                      o("WALogger").LOG(
                        W ||
                          (W = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during flip, aborting before re-acquire",
                          ])),
                        n,
                      ),
                      !1
                    );
                  if (
                    (yield this.startCameraCapture({
                      camera_id_requested: "",
                      height: a.height,
                      isAVUpgrade: !1,
                      max_fps: a.maxFps,
                      stopGeneration: r,
                      targetWindow: t,
                      width: a.width,
                      facingModeRequested: e,
                    }),
                    this.__stopBeganSince(r))
                  )
                    return (
                      o("WALogger").LOG(
                        q ||
                          (q = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during flip, camera not acquired",
                          ])),
                        n,
                      ),
                      !1
                    );
                } catch (n) {
                  return (
                    o("WALogger")
                      .ERROR(
                        U ||
                          (U = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchVideoFacing] error switching facing to ",
                            ": ",
                            "",
                          ])),
                        e,
                        n,
                      )
                      .sendLogs("voip-switch-video-facing-failed"),
                    yield this.__rollbackAfterFacingSwitchFailure({
                      params: a,
                      previousDeviceId: i,
                      previousFacing: l,
                      previousFacingFlipActive: s,
                      stopGenerationBefore: r,
                      targetWindow: t,
                    }),
                    !1
                  );
                }
                return (
                  o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] switched to: ",
                        "",
                      ])),
                    e,
                  ),
                  !0
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__rollbackAfterFacingSwitchFailure = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.params,
                  n = e.previousDeviceId,
                  a = e.previousFacing,
                  i = e.previousFacingFlipActive,
                  l = e.stopGenerationBefore,
                  s = e.targetWindow;
                if (this.__stopping || this.__stopBeganSince(l)) {
                  o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] stop in progress, skipping rollback",
                      ])),
                  );
                  return;
                }
                var u = !r("isStringNullOrEmpty")(n);
                if (!(!u && a == null)) {
                  var c = !u || (i && a != null);
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] rollback to previous camera (facing=",
                        ", device=",
                        ", byFacing=",
                        ")",
                      ])),
                    a != null ? a : "none",
                    n != null ? n : "none",
                    String(c),
                  );
                  try {
                    yield this.startCameraCapture({
                      camera_id_requested: c ? "" : r("nullthrows")(n),
                      height: t.height,
                      isAVUpgrade: !1,
                      max_fps: t.maxFps,
                      stopGeneration: l,
                      targetWindow: s,
                      width: t.width,
                      facingModeRequested: c ? a : null,
                    });
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        z ||
                          (z = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:switchVideoFacing] rollback failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("voip-switch-video-facing-rollback-failed");
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__ensureRestartableForSwitch = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  this.captureInitState ===
                    o("WAWebVoipVideoCaptureBase").CaptureInitState
                      .Initializing &&
                  this.captureInitResolvable != null
                ) {
                  var t = this.captureInitResolvable;
                  o("WALogger").LOG(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture still initializing, waiting for ready",
                      ])),
                    e,
                  );
                  var n = !1;
                  try {
                    yield t.promise;
                  } catch (t) {
                    ((n = !0),
                      o("WALogger").ERROR(
                        K ||
                          (K = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture initialization failed while waiting",
                          ])),
                        e,
                      ));
                  }
                  if (this.captureInitResolvable !== t)
                    return (
                      o("WALogger").LOG(
                        Q ||
                          (Q = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture init resolvable changed while waiting, aborting switch",
                          ])),
                        e,
                      ),
                      !1
                    );
                  if (
                    !n &&
                    this.captureInitState !==
                      o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready
                  )
                    return (
                      o("WALogger").LOG(
                        X ||
                          (X = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture not ready after init wait, aborting switch",
                          ])),
                        e,
                      ),
                      !1
                    );
                  n &&
                    o("WALogger").LOG(
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " continuing switch after failed capture initialization",
                        ])),
                      e,
                    );
                }
                return this.captureInitState !==
                  o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
                  this.captureInitState !==
                    o("WAWebVoipVideoCaptureBase").CaptureInitState.Error &&
                  this.captureInitState !==
                    o("WAWebVoipVideoCaptureBase").CaptureInitState
                      .Uninitialized
                  ? (o("WALogger").ERROR(
                      J ||
                        (J = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture not restartable,\n      current state: ",
                          "",
                        ])),
                      e,
                      this.captureInitState,
                    ),
                    !1)
                  : (this.captureInitState !==
                      o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
                      o("WALogger").LOG(
                        Z ||
                          (Z = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " restarting capture from state: ",
                            "",
                          ])),
                        e,
                        this.captureInitState,
                      ),
                    !0);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__monitorFrameProduction = function (t) {
            var e,
              n,
              a,
              i,
              l = this;
            ((e = this.__frameMonitorCleanup) == null || e.call(this),
              (this.__frameMonitorCleanup = null));
            var s = 2e3,
              u = 15e3,
              c = this.__healthCheckRetryCount === 0,
              d = c ? u : s,
              m = 5,
              p = 0,
              _ =
                (n =
                  (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : a.document) != null
                  ? n
                  : null,
              f = _ != null ? _ : document;
            o("WALogger").LOG(
              ee ||
                (ee = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CameraHealthCheck] monitoring frame production (doc=",
                  ")",
                ])),
              _ != null ? "popout" : "main",
            );
            var g = f.createElement("video");
            (g.setAttribute("playsinline", ""),
              g.setAttribute("aria-hidden", "true"),
              (g.muted = !0),
              (g.style.cssText =
                "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"),
              (g.srcObject = t));
            var h = (i = f.body) != null ? i : document.body;
            if (h == null) {
              (o("WALogger")
                .ERROR(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] no document body to host probe video; skipping monitor",
                    ])),
                )
                .sendLogs("voip-camera-health-check-no-body"),
                (g.srcObject = null));
              return;
            }
            h.appendChild(g);
            var y = !1,
              C = null,
              b = function () {
                y ||
                  ((y = !0),
                  C != null && (self.clearTimeout(C), (C = null)),
                  (g.srcObject = null),
                  g.remove(),
                  l.__frameMonitorCleanup === b &&
                    (l.__frameMonitorCleanup = null));
              };
            this.__frameMonitorCleanup = b;
            var v = function () {
                y ||
                  (o("WALogger").LOG(
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] frame received",
                      ])),
                  ),
                  be.trigger("cameraFrameReceived", []),
                  b());
              },
              S = function () {
                if (!y) {
                  if (
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasReceivedFirstFrameForSource(Le)
                  ) {
                    (o("WALogger").LOG(
                      re ||
                        (re = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] self preview already rendered a frame",
                        ])),
                    ),
                      v());
                    return;
                  }
                  if (
                    !o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasCanvasForSource(Le) &&
                    p < m
                  ) {
                    (p++,
                      o("WALogger").LOG(
                        oe ||
                          (oe = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                            "/",
                            ")",
                          ])),
                        p,
                        m,
                      ),
                      (C = self.setTimeout(S, s)));
                    return;
                  }
                  (o("WALogger").LOG(
                    ae ||
                      (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                        ")",
                      ])),
                    l.__healthCheckRetryCount,
                  ),
                    be.trigger("cameraNotProducingFrames", []),
                    b(),
                    l.__healthCheckRetryCount === 0
                      ? ((l.__healthCheckRetryCount = 1),
                        o("WALogger").LOG(
                          ie ||
                            (ie = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] auto-retrying camera capture",
                            ])),
                        ),
                        l.retryCameraCapture())
                      : (o("WALogger").LOG(
                          le ||
                            (le = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                            ])),
                        ),
                        be.trigger("cameraHealthCheckFailed", [])));
                }
              };
            ((C = self.setTimeout(S, d)),
              typeof g.requestVideoFrameCallback == "function"
                ? g.requestVideoFrameCallback(v)
                : o("WALogger").LOG(
                    se ||
                      (se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                      ])),
                  ),
              g.play().then(function () {
                !c ||
                  y ||
                  (C != null && self.clearTimeout(C),
                  (C = self.setTimeout(S, s)));
              }, r("WAWebNoop")));
          }),
          (a.stopCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n;
                (t === void 0 && (t = !1),
                  (this.__stopping = !0),
                  this.__stopGeneration++,
                  (this.__stackCaptureWanted = !1),
                  (n = this.__frameMonitorCleanup) == null || n.call(this),
                  (this.__frameMonitorCleanup = null));
                var r = this.__lastCapturedStream;
                if (
                  ((this.__lastCapturedStream = null),
                  (this.__healthCheckRetryCount = 0),
                  r != null)
                ) {
                  var a = r.getTracks();
                  o("WALogger").LOG(
                    ue ||
                      (ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopping ",
                        " track(s): ",
                        "",
                      ])),
                    a.length,
                    a
                      .map(function (e) {
                        return e.kind + ":" + e.readyState;
                      })
                      .join(", "),
                  );
                }
                try {
                  yield e.prototype.stopCapture.call(this, t);
                } finally {
                  var i;
                  ((i = this.__frameMonitorCleanup) == null || i.call(this),
                    (this.__frameMonitorCleanup = null));
                  var l = this.__lastCapturedStream;
                  if (
                    ((this.__lastCapturedStream = null),
                    (this.__lastTargetWindow = null),
                    r != null)
                  ) {
                    var s = [],
                      u = 0;
                    (r.getTracks().forEach(function (e) {
                      var t = e.readyState;
                      (e.stop(),
                        u++,
                        s.length < 3 &&
                          s.push(e.kind + ":" + t + "->" + e.readyState));
                    }),
                      u > 0 &&
                        o("WALogger").LOG(
                          ce ||
                            (ce = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:stopCapture] stopped ",
                              " track(s) => ",
                              "",
                            ])),
                          u,
                          s,
                        ));
                  }
                  if (l != null && l !== r) {
                    o("WALogger").LOG(
                      de ||
                        (de = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] cleaning up stream leaked during stop",
                        ])),
                    );
                    var c = [],
                      d = 0;
                    (l.getTracks().forEach(function (e) {
                      (e.stop(),
                        d++,
                        c.length < 3 && c.push(e.kind + ":" + e.readyState));
                    }),
                      d > 0 &&
                        o("WALogger").LOG(
                          me ||
                            (me = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:stopCapture] stopped ",
                              " leaked track(s) => ",
                              "",
                            ])),
                          d,
                          c,
                        ));
                  }
                  (Ee("stopCapture"),
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.resetFirstFrameReceivedForSource(
                      Le,
                    ),
                    this.currentFacing != null &&
                      ((this.currentFacing = null),
                      be.trigger("facingChanged", [null])),
                    this.__facingFlipActive && (this.currentDeviceId = null),
                    (this.__facingFlipActive = !1),
                    (this.__stopping = !1));
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.retryCameraCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (o("WALogger").LOG(
                  pe ||
                    (pe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retrying camera capture",
                    ])),
                ),
                this.__stopping)
              )
                return (
                  o("WALogger").LOG(
                    _e ||
                      (_e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] stop in progress, skipping retry",
                      ])),
                  ),
                  !1
                );
              if (this.captureParams == null)
                return (
                  o("WALogger").ERROR(
                    fe ||
                      (fe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] cannot retry, no capture params",
                      ])),
                  ),
                  !1
                );
              var e = this.captureParams,
                t = this.__lastTargetWindow,
                n = t != null && t.document != null ? t : null,
                r = this.__takeStopGeneration();
              try {
                var a;
                return (
                  yield this.__cleanup(),
                  this.__stopBeganSince(r)
                    ? (o("WALogger").LOG(
                        ge ||
                          (ge = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] stop started during retry, aborting before re-acquire",
                          ])),
                      ),
                      !1)
                    : (yield this.startCameraCapture({
                        camera_id_requested:
                          (a = this.currentDeviceId) != null ? a : "",
                        height: e.height,
                        isAVUpgrade: !1,
                        max_fps: e.maxFps,
                        stopGeneration: r,
                        targetWindow: n,
                        width: e.width,
                      }),
                      !this.__stopBeganSince(r))
                );
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    he ||
                      (he = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] retry failed: ",
                        "",
                      ])),
                    e,
                  ),
                  be.trigger("cameraHealthCheckFailed", []),
                  !1
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.recordCallEnd = function () {
            if (
              ((this.__callEndGeneration = ++this.__stopGeneration),
              o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled())
            ) {
              var e;
              ((e = this.__frameMonitorCleanup) == null || e.call(this),
                (this.__frameMonitorCleanup = null));
            }
          }),
          (a.scheduleCallEndCameraRelease = function () {
            var e = Array.from(ve);
            e.length !== 0 &&
              self.setTimeout(function () {
                var t = 0,
                  n = 0;
                for (var r of e) {
                  var a = r.getTracks().filter(function (e) {
                    return e.readyState === "live";
                  });
                  (a.length > 0 &&
                    (a.forEach(function (e) {
                      return e.stop();
                    }),
                    n++,
                    (t += a.length)),
                    ve.delete(r));
                }
                t > 0 &&
                  o("WALogger")
                    .WARN(
                      ye ||
                        (ye = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
                          " leaked live camera track(s) across ",
                          " stream(s) the WASM teardown never released",
                        ])),
                      t,
                      n,
                    )
                    .sendLogs("voip-camera-callend-backstop");
              }, Se);
          }),
          t
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      Te = new Ie();
    ((l.VideoDeviceEvents = be), (l.WAWebVoipVideoCameraCapture = Te));
  },
  98,
);
