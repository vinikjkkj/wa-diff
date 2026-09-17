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
      ce = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebTypedEventEmitter")),
      de = new ce(),
      me = new Set(),
      pe = 2e3,
      _e = 2e3,
      fe = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(
        o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
      );
    function ge(t) {
      var n = 0,
        r = 0;
      for (var a of me) {
        var i = a.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        (i.length > 0 &&
          (i.forEach(function (e) {
            return e.stop();
          }),
          r++,
          (n += i.length)),
          me.delete(a));
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
    function he(e, t) {
      if (e.readyState !== "live" || e.muted) return !1;
      var n = e.getSettings().deviceId;
      return r("isStringNullOrEmpty")(n) || n === t;
    }
    var ye = (function (e) {
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
                  g = e.max_fps,
                  h = e.targetWindow,
                  y = e.width;
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
                  y,
                  l,
                  g,
                  s,
                  String(h != null),
                ),
                  (this.__lastTargetWindow = h != null ? h : null),
                  i != null
                    ? (this.__facingFlipActive = !0)
                    : r("isStringNullOrEmpty")(a) ||
                      (this.__facingFlipActive = !1));
                var C = yield this.__resolveCameraCaptureId({
                  camera_id_requested: a,
                  facingModeRequested: i,
                  targetWindow: h,
                });
                this.captureParams = o(
                  "WAWebVoipResolutionCap",
                ).applyLowEndResolutionCap({ width: y, height: l, maxFps: g });
                var b = null,
                  v = null,
                  S = (function () {
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
                            selectedDeviceId: C,
                            params: r("nullthrows")(t.captureParams),
                            isAVUpgrade: s,
                            targetWindow: h,
                            facingMode: i,
                          });
                          if (e == null) {
                            o("WALogger").LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                          ((t.__lastCapturedStream = e), me.add(e));
                          var l = e.getVideoTracks().at(0);
                          if (l != null) {
                            var u,
                              f,
                              g = l.getSettings();
                            (g.deviceId != null &&
                              g.deviceId !== "" &&
                              (b = g.deviceId),
                              (g.facingMode === "user" ||
                                g.facingMode === "environment") &&
                                (v = g.facingMode),
                              o("WALogger").LOG(
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
                                (f = g.facingMode) != null ? f : "unknown",
                                String(g.width),
                                String(g.height),
                              ));
                          } else
                            o("WALogger").LOG(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
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
                                        p ||
                                          (p =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap",
                                              ],
                                            )),
                                      );
                                      return;
                                    }
                                    o("WALogger").LOG(
                                      _ ||
                                        (_ =
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
                yield this.__startCapture(
                  babelHelpers.extends(
                    {
                      getMediaStream: S,
                      onVideoDataFnType: "onVideoDataFromJs",
                    },
                    r("nullthrows")(this.captureParams),
                  ),
                );
                var R = this.__lastCapturedStream;
                R != null &&
                  (o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.resetFirstFrameReceivedForSource(fe),
                  this.__monitorFrameProduction(R));
                var L = this.__updateDeviceFromAcquiredTrack(b, C);
                (this.__updateFacingFromAcquiredTrack(v, i, L),
                  o("WAWebUA").UA.isFirefox &&
                    h != null &&
                    (de.trigger("deviceListRefreshRequested", []),
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startCameraCapture] device ",
                            " no longer available, falling back to default",
                          ])),
                        e,
                      ),
                      ""
                    );
                } catch (t) {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                de.trigger("deviceSelectionChanged", [e]),
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
              de.trigger("facingChanged", [a]),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
                if (
                  (l === void 0 && (l = !1),
                  o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
                  ),
                  (this.captureParams = { width: t, height: a, maxFps: i }),
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
                    onVideoDataFnType: "onVideoDataFromJs",
                    width: t,
                    height: a,
                    maxFps: i,
                  }),
                  o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.resetFirstFrameReceivedForSource(fe),
                  l)
                ) {
                  var u = this.__lastCapturedStream;
                  (u != null && u !== e && me.delete(u),
                    (this.__lastCapturedStream = e),
                    me.add(e));
                  var c = e.getVideoTracks().at(0);
                  c == null ||
                    c.addEventListener(
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
                              v ||
                                (v = babelHelpers.taggedTemplateLiteralLoose([
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
                                  S ||
                                    (S =
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
                return he(e, a);
              })
            )
              return !1;
            var l =
              (n = o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.getDecodeStatsForSource(fe)) == null
                ? void 0
                : n.lastFrameTimestampMs;
            return l != null && window.performance.now() - l < _e;
          }),
          (a.switchVideoDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "voip: switchVideoDevice (" + this.name + ")";
                if (
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " switching to device: ",
                        "",
                      ])),
                    n,
                    e,
                  ),
                  !(yield this.__ensureRestartableForSwitch(n)))
                )
                  return !1;
                var r = this.captureParams;
                if (r == null)
                  return (
                    o("WALogger").ERROR(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " capture params not available",
                        ])),
                      n,
                    ),
                    !1
                  );
                var a = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "getIsValidVideoDevice",
                  { deviceId: e, targetWindow: t, isInActiveCall: !0 },
                );
                if (!a)
                  return (
                    o("WALogger").ERROR(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " device not found in available devices: ",
                          "",
                        ])),
                      n,
                      e,
                    ),
                    !1
                  );
                var i = this.currentDeviceId;
                this.__healthCheckRetryCount = 0;
                try {
                  (yield this.__cleanup(),
                    yield this.startCameraCapture({
                      camera_id_requested: e,
                      height: r.height,
                      isAVUpgrade: !1,
                      max_fps: r.maxFps,
                      targetWindow: t,
                      width: r.width,
                    }));
                } catch (e) {
                  if (
                    (o("WALogger").ERROR(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchVideoDevice] error switching device: ",
                          "",
                        ])),
                      e,
                    ),
                    i != null && i !== "")
                  ) {
                    o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:switchVideoDevice] rollback to: ",
                          "",
                        ])),
                      i,
                    );
                    try {
                      var l = this.captureParams;
                      l != null &&
                        (yield this.startCameraCapture({
                          camera_id_requested: i,
                          height: l.height,
                          isAVUpgrade: !1,
                          max_fps: l.maxFps,
                          targetWindow: t,
                          width: l.width,
                        }));
                    } catch (e) {
                      o("WALogger").ERROR(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
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
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
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
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " stop in progress, skipping flip",
                        ])),
                      n,
                    ),
                    !1
                  );
                if (!(yield this.__ensureRestartableForSwitch(n))) return !1;
                var r = this.captureParams;
                if (r == null)
                  return (
                    o("WALogger")
                      .ERROR(
                        P ||
                          (P = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture params not available",
                          ])),
                        n,
                      )
                      .sendLogs("voip-switch-video-facing-no-params"),
                    !1
                  );
                var a = this.currentDeviceId,
                  i = this.currentFacing,
                  l = this.__facingFlipActive;
                this.__healthCheckRetryCount = 0;
                try {
                  if ((yield this.__cleanup(), this.__stopping))
                    return (
                      o("WALogger").LOG(
                        N ||
                          (N = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " stop started during flip, aborting before re-acquire",
                          ])),
                        n,
                      ),
                      !1
                    );
                  yield this.startCameraCapture({
                    camera_id_requested: "",
                    height: r.height,
                    isAVUpgrade: !1,
                    max_fps: r.maxFps,
                    targetWindow: t,
                    width: r.width,
                    facingModeRequested: e,
                  });
                } catch (n) {
                  return (
                    o("WALogger")
                      .ERROR(
                        M ||
                          (M = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchVideoFacing] error switching facing to ",
                            ": ",
                            "",
                          ])),
                        e,
                        n,
                      )
                      .sendLogs("voip-switch-video-facing-failed"),
                    yield this.__rollbackAfterFacingSwitchFailure({
                      params: r,
                      previousDeviceId: a,
                      previousFacing: i,
                      previousFacingFlipActive: l,
                      targetWindow: t,
                    }),
                    !1
                  );
                }
                return (
                  o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
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
                  l = e.targetWindow;
                if (this.__stopping) {
                  o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] stop in progress, skipping rollback",
                      ])),
                  );
                  return;
                }
                var s = !r("isStringNullOrEmpty")(n);
                if (!(!s && a == null)) {
                  var u = !s || (i && a != null);
                  o("WALogger").LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] rollback to previous camera (facing=",
                        ", device=",
                        ", byFacing=",
                        ")",
                      ])),
                    a != null ? a : "none",
                    n != null ? n : "none",
                    String(u),
                  );
                  try {
                    yield this.startCameraCapture({
                      camera_id_requested: u ? "" : r("nullthrows")(n),
                      height: t.height,
                      isAVUpgrade: !1,
                      max_fps: t.maxFps,
                      targetWindow: l,
                      width: t.width,
                      facingModeRequested: u ? a : null,
                    });
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        O ||
                          (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                        W ||
                          (W = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture initialization failed while waiting",
                          ])),
                        e,
                      ));
                  }
                  if (this.captureInitResolvable !== t)
                    return (
                      o("WALogger").LOG(
                        q ||
                          (q = babelHelpers.taggedTemplateLiteralLoose([
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
                        U ||
                          (U = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture not ready after init wait, aborting switch",
                          ])),
                        e,
                      ),
                      !1
                    );
                  n &&
                    o("WALogger").LOG(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
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
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
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
                        G ||
                          (G = babelHelpers.taggedTemplateLiteralLoose([
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
              z ||
                (z = babelHelpers.taggedTemplateLiteralLoose([
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
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
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
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] frame received",
                      ])),
                  ),
                  de.trigger("cameraFrameReceived", []),
                  b());
              },
              S = function () {
                if (!y) {
                  if (
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasReceivedFirstFrameForSource(fe)
                  ) {
                    (o("WALogger").LOG(
                      Q ||
                        (Q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] self preview already rendered a frame",
                        ])),
                    ),
                      v());
                    return;
                  }
                  if (
                    !o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasCanvasForSource(fe) &&
                    p < m
                  ) {
                    (p++,
                      o("WALogger").LOG(
                        X ||
                          (X = babelHelpers.taggedTemplateLiteralLoose([
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
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                        ")",
                      ])),
                    l.__healthCheckRetryCount,
                  ),
                    de.trigger("cameraNotProducingFrames", []),
                    b(),
                    l.__healthCheckRetryCount === 0
                      ? ((l.__healthCheckRetryCount = 1),
                        o("WALogger").LOG(
                          J ||
                            (J = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] auto-retrying camera capture",
                            ])),
                        ),
                        l.retryCameraCapture())
                      : (o("WALogger").LOG(
                          Z ||
                            (Z = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                            ])),
                        ),
                        de.trigger("cameraHealthCheckFailed", [])));
                }
              };
            ((C = self.setTimeout(S, d)),
              typeof g.requestVideoFrameCallback == "function"
                ? g.requestVideoFrameCallback(v)
                : o("WALogger").LOG(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                    te ||
                      (te = babelHelpers.taggedTemplateLiteralLoose([
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
                          ne ||
                            (ne = babelHelpers.taggedTemplateLiteralLoose([
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
                      re ||
                        (re = babelHelpers.taggedTemplateLiteralLoose([
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
                          oe ||
                            (oe = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:stopCapture] stopped ",
                              " leaked track(s) => ",
                              "",
                            ])),
                          d,
                          c,
                        ));
                  }
                  (ge("stopCapture"),
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.resetFirstFrameReceivedForSource(
                      fe,
                    ),
                    this.currentFacing != null &&
                      ((this.currentFacing = null),
                      de.trigger("facingChanged", [null])),
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
                  ae ||
                    (ae = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retrying camera capture",
                    ])),
                ),
                this.__stopping)
              )
                return (
                  o("WALogger").LOG(
                    ie ||
                      (ie = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] stop in progress, skipping retry",
                      ])),
                  ),
                  !1
                );
              if (this.captureParams == null)
                return (
                  o("WALogger").ERROR(
                    le ||
                      (le = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] cannot retry, no capture params",
                      ])),
                  ),
                  !1
                );
              var e = this.captureParams,
                t = this.__lastTargetWindow,
                n = t != null && t.document != null ? t : null;
              try {
                var r;
                return (
                  yield this.__cleanup(),
                  yield this.startCameraCapture({
                    camera_id_requested:
                      (r = this.currentDeviceId) != null ? r : "",
                    height: e.height,
                    isAVUpgrade: !1,
                    max_fps: e.maxFps,
                    targetWindow: n,
                    width: e.width,
                  }),
                  !0
                );
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    se ||
                      (se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] retry failed: ",
                        "",
                      ])),
                    e,
                  ),
                  de.trigger("cameraHealthCheckFailed", []),
                  !1
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.scheduleCallEndCameraRelease = function () {
            var e = Array.from(me);
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
                    me.delete(r));
                }
                t > 0 &&
                  o("WALogger")
                    .WARN(
                      ue ||
                        (ue = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
                          " leaked live camera track(s) across ",
                          " stream(s) the WASM teardown never released",
                        ])),
                      t,
                      n,
                    )
                    .sendLogs("voip-camera-callend-backstop");
              }, pe);
          }),
          t
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      Ce = new ye();
    ((l.VideoDeviceEvents = de), (l.WAWebVoipVideoCameraCapture = Ce));
  },
  98,
);
