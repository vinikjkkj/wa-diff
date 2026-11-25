__d(
  "WAWebVoipVideoCameraCapture",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebBackendApi",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipCameraFingerprintLogging",
    "WAWebVoipCaptureCap",
    "WAWebVoipGatingUtils",
    "WAWebVoipLazyVideoEffectsProcessor",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPthreadHardening",
    "WAWebVoipResolutionCap",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureBase",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
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
      Ce,
      be,
      ve,
      Se,
      Re,
      Le,
      Ee = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter")),
      ke = new Ee(),
      Ie = new Set(),
      Te = 2e3,
      De = 2e3,
      xe = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(
        o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
      );
    function $e(t) {
      var n = 0,
        r = 0;
      for (var a of Ie) {
        var i = a.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        (i.length > 0 &&
          (i.forEach(function (e) {
            return e.stop();
          }),
          r++,
          (n += i.length)),
          Ie.delete(a));
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
    function Pe(e, t) {
      if (e.readyState !== "live" || e.muted) return !1;
      var n = e.getSettings().deviceId;
      return r("isStringNullOrEmpty")(n) || n === t;
    }
    var Ne = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "camera"),
            (t.captureParams = null),
            (t.$WAWebVoipVideoCameraCaptureImpl$p_1 = null),
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
            (t.$WAWebVoipVideoCameraCaptureImpl$p_2 = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isCameraTrackMuted = function () {
            return this.$WAWebVoipVideoCameraCaptureImpl$p_2;
          }),
          (n.startCameraCapture = async function (t) {
            var e = this,
              n = t.camera_id_requested,
              a = t.facingModeRequested,
              i = t.height,
              l = t.isAVUpgrade,
              s = t.isStackRequest,
              y = t.max_fps,
              C = t.stopGeneration,
              b = t.targetWindow,
              v = t.width;
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
              n,
              a != null ? a : "none",
              v,
              i,
              y,
              l,
              String(b != null),
            ),
              s === !0 && (this.__stackCaptureWanted = !0));
            var S = C != null ? C : this.__takeStopGeneration();
            S == null && this.__recordStartRequest(n, a, b);
            var R = Ae(b),
              L = await this.__resolveCameraCaptureId({
                camera_id_requested: n,
                facingModeRequested: a,
                isCameraListingHeld: R,
                targetWindow: b,
              });
            if (this.__stopBeganSince(S)) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] stop began while resolving the camera, not acquiring",
                  ])),
              );
              return;
            }
            (S != null && this.__recordStartRequest(n, a, b),
              (this.captureParams = o(
                "WAWebVoipResolutionCap",
              ).applyLowEndResolutionCap({ width: v, height: i, maxFps: y })));
            var E = r("nullthrows")(this.getOpenCaptureParams()),
              k = null,
              I = "",
              T = null,
              D = async function () {
                if (
                  navigator.mediaDevices &&
                  navigator.mediaDevices.getUserMedia
                ) {
                  var t = await o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    {
                      type: "camera",
                      selectedDeviceId: L,
                      params: E,
                      isAVUpgrade: l,
                      targetWindow: b,
                      facingMode: a,
                      preferSelectedDevice: R,
                    },
                  );
                  if (t == null) {
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:getCameraMediaStream] getUserMedia failed, muting video",
                        ])),
                    );
                    var n = await o(
                      "WAWebVoipStackInterface",
                    ).getVoipStackInterface();
                    return (
                      (n == null ? void 0 : n.type) === "web" &&
                        (await n.setCallVideoMute(!0)),
                      null
                    );
                  }
                  ((e.__lastCapturedStream = t), Ie.add(t));
                  var i = t.getVideoTracks().at(0);
                  if (i != null) {
                    var s,
                      u,
                      c = i.getSettings();
                    (c.deviceId != null &&
                      c.deviceId !== "" &&
                      (k = c.deviceId),
                      (I = i.label),
                      (c.facingMode === "user" ||
                        c.facingMode === "environment") &&
                        (T = c.facingMode),
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
                        i.readyState,
                        String(i.muted),
                        String(i.enabled),
                        (s = c.deviceId) != null ? s : "unknown",
                        (u = c.facingMode) != null ? u : "unknown",
                        String(c.width),
                        String(c.height),
                      ));
                  } else
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:getCameraMediaStream] stream acquired but no video track found",
                        ])),
                    );
                  return (
                    i == null ||
                      i.addEventListener("ended", async function () {
                        if (
                          o(
                            "WAWebVoipPopoutWindowState",
                          ).getIsCameraStreamReacquisitionInProgress() ||
                          e.__lastCapturedStream !== t
                        ) {
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap",
                              ])),
                          );
                          return;
                        }
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[AV:getCameraMediaStream] stream ended, muting video",
                            ])),
                        );
                        var n = await o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        (n == null ? void 0 : n.type) === "web" &&
                          (await n.setCallVideoMute(!0));
                      }),
                    e.$WAWebVoipVideoCameraCaptureImpl$p_3(t, i),
                    t
                  );
                }
                throw r("err")("getUserMedia not supported");
              };
            if (
              (await this.__startCapture(
                babelHelpers.extends(
                  {
                    getMediaStream: D,
                    isStopped: function () {
                      return e.__stopBeganSince(S);
                    },
                    onVideoDataFnType: "onVideoDataFromJs",
                    videoFrameProcessor: o("WAWebVoipLazyVideoEffectsProcessor")
                      .lazyVideoEffectsProcessor,
                  },
                  E,
                ),
              ),
              this.__stopBeganSince(S))
            ) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] stop began while acquiring, not monitoring",
                  ])),
              );
              return;
            }
            var x = this.__lastCapturedStream;
            (x != null &&
              (o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.resetFirstFrameReceivedForSource(xe),
              this.__monitorFrameProduction(x),
              ke.trigger("cameraCaptureStarted")),
              await this.__updateFromAcquiredCamera({
                deviceId: k,
                facing: T,
                isCameraListingHeld: R,
                label: I,
                requestedDeviceId: L,
                requestedFacing: a,
                stream: x,
                targetWindow: b,
              }),
              o("WAWebUA").UA.isFirefox &&
                b != null &&
                (ke.trigger("deviceListRefreshRequested"),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] Firefox popout camera capture ready, refreshing device list",
                    ])),
                )));
          }),
          (n.$WAWebVoipVideoCameraCaptureImpl$p_3 = function (t, n) {
            var e = this;
            if (n != null) {
              var r = function () {
                e.__lastCapturedStream === t &&
                  e.$WAWebVoipVideoCameraCaptureImpl$p_4(
                    n.readyState === "live" && n.muted,
                  );
              };
              (r(),
                n.addEventListener("mute", r),
                n.addEventListener("unmute", r));
            }
          }),
          (n.$WAWebVoipVideoCameraCaptureImpl$p_4 = function (t) {
            this.$WAWebVoipVideoCameraCaptureImpl$p_2 !== t &&
              ((this.$WAWebVoipVideoCameraCaptureImpl$p_2 = t),
              ke.trigger("cameraTrackMutedChanged"));
          }),
          (n.__recordStartRequest = function (t, n, o) {
            ((this.__lastTargetWindow = o != null ? o : null),
              n != null
                ? (this.__facingFlipActive = !0)
                : r("isStringNullOrEmpty")(t) ||
                  (this.__facingFlipActive = !1));
          }),
          (n.__takeStopGeneration = function () {
            return o(
              "WAWebVoipPthreadHardening",
            ).isVoipWorkerLifecycleHardeningEnabled()
              ? this.__stopping
                ? this.__stopGeneration - 1
                : this.__stopGeneration
              : null;
          }),
          (n.__stopBeganSince = function (t) {
            return t == null || this.__stopGeneration === t
              ? !1
              : this.__callEndGeneration > t || !this.__stackCaptureWanted;
          }),
          (n.__resolveCameraCaptureId = async function (t) {
            var e = t.camera_id_requested,
              n = t.facingModeRequested,
              a = t.isCameraListingHeld,
              i = t.targetWindow;
            if (n != null) return "";
            var l = e;
            if (r("isStringNullOrEmpty")(l)) {
              var s = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
              s != null &&
                ((l = s),
                o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
            }
            if (
              (r("isStringNullOrEmpty")(l) &&
                this.currentDeviceId != null &&
                (l = this.currentDeviceId),
              r("isStringNullOrEmpty")(l))
            ) {
              var u = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
              u != null && (l = u);
            }
            return await this.__validateResolvedCameraId(l, i, a);
          }),
          (n.__validateResolvedCameraId = async function (t, n, a) {
            if (r("isStringNullOrEmpty")(t)) return t;
            if (a)
              return (
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] main window can't list cameras without focus, asking for ",
                      " as a preference",
                    ])),
                  t,
                ),
                t
              );
            var e =
              n != null
                ? n
                : o("WAWebUA").UA.isFirefox
                  ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                  : null;
            try {
              var i = await o("WAWebBackendApi").frontendSendAndReceive(
                "getIsValidVideoDevice",
                { deviceId: t, targetWindow: e, isInActiveCall: !0 },
              );
              if (!i)
                return (
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device ",
                        " no longer available, falling back to default",
                      ])),
                    t,
                  ),
                  ""
                );
            } catch (e) {
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] device validation failed, proceeding with ",
                    ": ",
                    "",
                  ])),
                t,
                e,
              );
            }
            return t;
          }),
          (n.__getMainWindowDeviceId = async function (t, n, r, a) {
            var e;
            if (t == null || !we(t, r, a)) return t;
            var i = await Fe();
            if (
              i.some(function (e) {
                return e.deviceId === t;
              })
            )
              return t;
            var l = (e = Oe(i, n)) != null ? e : r;
            return (
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] call window camera ",
                    " isn't a main window id, using ",
                    "",
                  ])),
                t,
                l,
              ),
              l
            );
          }),
          (n.__updateFromAcquiredCamera = async function (t) {
            var e = await this.__getMainWindowDeviceId(
              t.deviceId,
              t.label,
              t.requestedDeviceId,
              t.targetWindow,
            );
            if (this.__lastCapturedStream !== t.stream) {
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] capture changed while matching the main window camera, not updating the device",
                  ])),
              );
              return;
            }
            var n = this.__updateDeviceFromAcquiredTrack(
              e,
              t.requestedDeviceId,
              t.isCameraListingHeld,
            );
            (o("WAWebVoipCameraFingerprintLogging").retryCameraFingerprint(),
              this.__updateFacingFromAcquiredTrack(
                t.facing,
                t.requestedFacing,
                n,
              ));
          }),
          (n.__updateDeviceFromAcquiredTrack = function (t, n, a) {
            var e = t != null ? t : n;
            if (this.currentDeviceId === e) return !1;
            this.currentDeviceId = e;
            var i = a && !r("isStringNullOrEmpty")(n) && e !== n;
            return (
              !this.__facingFlipActive &&
                !i &&
                !r("isStringNullOrEmpty")(e) &&
                o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(e),
              ke.trigger("deviceSelectionChanged", e),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] device changed: requested=",
                    ", actual=",
                    "",
                  ])),
                n,
                e,
              ),
              !0
            );
          }),
          (n.__updateFacingFromAcquiredTrack = function (t, n, r) {
            var e,
              a =
                (e = t != null ? t : n) != null
                  ? e
                  : r
                    ? null
                    : this.currentFacing;
            this.currentFacing !== a &&
              ((this.currentFacing = a),
              ke.trigger("facingChanged", a),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] facing changed: ",
                    "",
                  ])),
                a != null ? a : "unknown",
              ));
          }),
          (n.startWithStream = async function (t, n, a, i, l) {
            var e = this;
            (l === void 0 && (l = !1),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startWithStream] w=",
                    " h=",
                    " fps=",
                    " track=",
                    "",
                  ])),
                n,
                a,
                i,
                String(l),
              ));
            var s = this.__takeStopGeneration();
            if (
              ((this.captureParams = { width: n, height: a, maxFps: i }),
              (this.__lastTargetWindow = null),
              await this.__startCapture({
                getMediaStream: async function () {
                  return t;
                },
                isStopped: function () {
                  return e.__stopBeganSince(s);
                },
                onVideoDataFnType: "onVideoDataFromJs",
                videoFrameProcessor: o("WAWebVoipLazyVideoEffectsProcessor")
                  .lazyVideoEffectsProcessor,
                width: n,
                height: a,
                maxFps: i,
              }),
              this.__stopBeganSince(s))
            ) {
              (o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startWithStream] stop began during the start, releasing the stream",
                  ])),
              ),
                t.getTracks().forEach(function (e) {
                  return e.stop();
                }));
              return;
            }
            if (
              (o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.resetFirstFrameReceivedForSource(xe),
              l)
            ) {
              var u = this.__lastCapturedStream;
              (u != null && u !== t && Ie.delete(u),
                (this.__lastCapturedStream = t),
                Ie.add(t));
              var c = t.getVideoTracks().at(0);
              c == null ||
                c.addEventListener("ended", async function () {
                  if (
                    !(
                      o(
                        "WAWebVoipPopoutWindowState",
                      ).getIsCameraStreamReacquisitionInProgress() ||
                      e.__lastCapturedStream !== t
                    )
                  ) {
                    o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startWithStream] stream ended, muting video",
                        ])),
                    );
                    try {
                      var n = await o(
                        "WAWebVoipStackInterface",
                      ).getVoipStackInterface();
                      (n == null ? void 0 : n.type) === "web" &&
                        (await n.setCallVideoMute(!0));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          T ||
                            (T = babelHelpers.taggedTemplateLiteralLoose([
                              "[AV:startWithStream] mute on stream-ended failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("voip-popout-reuse-ended-mute-failed");
                    }
                  }
                });
            }
          }),
          (n.setCaptureCap = function (t) {
            var e = this.$WAWebVoipVideoCameraCaptureImpl$p_1;
            this.$WAWebVoipVideoCameraCaptureImpl$p_1 = t;
            var n = this.captureParams;
            if (n == null) return null;
            var r = o("WAWebVoipCaptureCap").applyCaptureCap(n, e),
              a = o("WAWebVoipCaptureCap").applyCaptureCap(n, t);
            return r.width === a.width && r.height === a.height ? null : a;
          }),
          (n.getOpenCaptureParams = function () {
            var e = this.captureParams;
            return e == null
              ? null
              : o("WAWebVoipCaptureCap").applyCaptureCap(
                  e,
                  this.$WAWebVoipVideoCameraCaptureImpl$p_1,
                );
          }),
          (n.getLastCapturedStream = function () {
            return this.__lastCapturedStream;
          }),
          (n.isDeliveringFramesForCurrentDevice = function () {
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
                return Pe(e, a);
              })
            )
              return !1;
            var l =
              (n = o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.getDecodeStatsForSource(xe)) == null
                ? void 0
                : n.lastFrameTimestampMs;
            return l != null && window.performance.now() - l < De;
          }),
          (n.isStackCaptureWanted = function () {
            return this.__stackCaptureWanted;
          }),
          (n.switchVideoDevice = async function (t, n) {
            var e = "voip: switchVideoDevice (" + this.name + ")";
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " switching to device: ",
                  "",
                ])),
              e,
              t,
            );
            var r = this.__takeStopGeneration();
            if (!(await this.__ensureRestartableForSwitch(e))) return !1;
            var a = this.captureParams;
            if (a == null)
              return (
                o("WALogger").ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " capture params not available",
                    ])),
                  e,
                ),
                !1
              );
            var i = await o("WAWebBackendApi").frontendSendAndReceive(
              "getIsValidVideoDevice",
              { deviceId: t, targetWindow: n, isInActiveCall: !0 },
            );
            if (!i)
              return (
                o("WALogger").ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " device not found in available devices: ",
                      "",
                    ])),
                  e,
                  t,
                ),
                !1
              );
            if (this.__stopBeganSince(r))
              return (
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " stop started before the switch cleaned up, aborting",
                    ])),
                  e,
                ),
                !1
              );
            var l = this.currentDeviceId;
            this.__healthCheckRetryCount = 0;
            try {
              if ((await this.__cleanup(), this.__stopBeganSince(r)))
                return (
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during switch, aborting before re-acquire",
                      ])),
                    e,
                  ),
                  !1
                );
              if (
                (await this.startCameraCapture({
                  camera_id_requested: t,
                  height: a.height,
                  isAVUpgrade: !1,
                  max_fps: a.maxFps,
                  stopGeneration: r,
                  targetWindow: n,
                  width: a.width,
                }),
                this.__stopBeganSince(r))
              )
                return (
                  o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during switch, device not acquired",
                      ])),
                    e,
                  ),
                  !1
                );
            } catch (e) {
              if (
                (o("WALogger").ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchVideoDevice] error switching device: ",
                      "",
                    ])),
                  e,
                ),
                l != null && l !== "")
              ) {
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:switchVideoDevice] rollback to: ",
                      "",
                    ])),
                  l,
                );
                try {
                  var s = this.captureParams;
                  s != null &&
                    (await this.startCameraCapture({
                      camera_id_requested: l,
                      height: s.height,
                      isAVUpgrade: !1,
                      max_fps: s.maxFps,
                      stopGeneration: r,
                      targetWindow: n,
                      width: s.width,
                    }));
                } catch (e) {
                  o("WALogger").ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
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
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoDevice] switched to: ",
                    "",
                  ])),
                t,
              ),
              !0
            );
          }),
          (n.switchVideoFacing = async function (t, n) {
            var e = "voip: switchVideoFacing (" + this.name + ")";
            if (
              (o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " switching to facing: ",
                    "",
                  ])),
                e,
                t,
              ),
              this.__stopping)
            )
              return (
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " stop in progress, skipping flip",
                    ])),
                  e,
                ),
                !1
              );
            var r = this.__takeStopGeneration();
            if (!(await this.__ensureRestartableForSwitch(e))) return !1;
            var a = this.captureParams;
            if (a == null)
              return (
                o("WALogger")
                  .ERROR(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture params not available",
                      ])),
                    e,
                  )
                  .sendLogs("voip-switch-video-facing-no-params"),
                !1
              );
            if (this.__stopBeganSince(r))
              return (
                o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " stop started before the flip cleaned up, aborting",
                    ])),
                  e,
                ),
                !1
              );
            var i = this.currentDeviceId,
              l = this.currentFacing,
              s = this.__facingFlipActive;
            this.__healthCheckRetryCount = 0;
            try {
              if (
                (await this.__cleanup(),
                this.__stopping || this.__stopBeganSince(r))
              )
                return (
                  o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during flip, aborting before re-acquire",
                      ])),
                    e,
                  ),
                  !1
                );
              if (
                (await this.startCameraCapture({
                  camera_id_requested: "",
                  height: a.height,
                  isAVUpgrade: !1,
                  max_fps: a.maxFps,
                  stopGeneration: r,
                  targetWindow: n,
                  width: a.width,
                  facingModeRequested: t,
                }),
                this.__stopBeganSince(r))
              )
                return (
                  o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during flip, camera not acquired",
                      ])),
                    e,
                  ),
                  !1
                );
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchVideoFacing] error switching facing to ",
                        ": ",
                        "",
                      ])),
                    t,
                    e,
                  )
                  .sendLogs("voip-switch-video-facing-failed"),
                await this.__rollbackAfterFacingSwitchFailure({
                  params: a,
                  previousDeviceId: i,
                  previousFacing: l,
                  previousFacingFlipActive: s,
                  stopGenerationBefore: r,
                  targetWindow: n,
                }),
                !1
              );
            }
            return (
              o("WALogger").LOG(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoFacing] switched to: ",
                    "",
                  ])),
                t,
              ),
              !0
            );
          }),
          (n.__rollbackAfterFacingSwitchFailure = async function (t) {
            var e = t.params,
              n = t.previousDeviceId,
              a = t.previousFacing,
              i = t.previousFacingFlipActive,
              l = t.stopGenerationBefore,
              s = t.targetWindow;
            if (this.__stopping || this.__stopBeganSince(l)) {
              o("WALogger").LOG(
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoFacing] stop in progress, skipping rollback",
                  ])),
              );
              return;
            }
            var u = !r("isStringNullOrEmpty")(n);
            if (!(!u && a == null)) {
              var c = !u || (i && a != null);
              o("WALogger").LOG(
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
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
                await this.startCameraCapture({
                  camera_id_requested: c ? "" : r("nullthrows")(n),
                  height: e.height,
                  isAVUpgrade: !1,
                  max_fps: e.maxFps,
                  stopGeneration: l,
                  targetWindow: s,
                  width: e.width,
                  facingModeRequested: c ? a : null,
                });
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] rollback failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip-switch-video-facing-rollback-failed");
              }
            }
          }),
          (n.__ensureRestartableForSwitch = async function (t) {
            if (
              this.captureInitState ===
                o("WAWebVoipVideoCaptureBase").CaptureInitState.Initializing &&
              this.captureInitResolvable != null
            ) {
              var e = this.captureInitResolvable;
              o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " capture still initializing, waiting for ready",
                  ])),
                t,
              );
              var n = !1;
              try {
                await e.promise;
              } catch (e) {
                ((n = !0),
                  o("WALogger").ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture initialization failed while waiting",
                      ])),
                    t,
                  ));
              }
              if (this.captureInitResolvable !== e)
                return (
                  o("WALogger").LOG(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture init resolvable changed while waiting, aborting switch",
                      ])),
                    t,
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
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture not ready after init wait, aborting switch",
                      ])),
                    t,
                  ),
                  !1
                );
              n &&
                o("WALogger").LOG(
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " continuing switch after failed capture initialization",
                    ])),
                  t,
                );
            }
            return this.captureInitState !==
              o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
              this.captureInitState !==
                o("WAWebVoipVideoCaptureBase").CaptureInitState.Error &&
              this.captureInitState !==
                o("WAWebVoipVideoCaptureBase").CaptureInitState.Uninitialized
              ? (o("WALogger").ERROR(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ` video capture not restartable,
      current state: `,
                      "",
                    ])),
                  t,
                  this.captureInitState,
                ),
                !1)
              : (this.captureInitState !==
                  o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
                  o("WALogger").LOG(
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " restarting capture from state: ",
                        "",
                      ])),
                    t,
                    this.captureInitState,
                  ),
                !0);
          }),
          (n.__monitorFrameProduction = function (t) {
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
              _ = 15,
              f = 0,
              g =
                (n =
                  (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : a.document) != null
                  ? n
                  : null,
              h = g != null ? g : document,
              y = h.hidden,
              C = null;
            o("WALogger").LOG(
              re ||
                (re = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CameraHealthCheck] monitoring frame production (doc=",
                  ")",
                ])),
              g != null ? "popout" : "main",
            );
            var b = h.createElement("video");
            (b.setAttribute("playsinline", ""),
              b.setAttribute("aria-hidden", "true"),
              (b.muted = !0),
              (b.style.cssText =
                "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"),
              (b.srcObject = t));
            var v = (i = h.body) != null ? i : document.body;
            if (v == null) {
              (o("WALogger")
                .ERROR(
                  oe ||
                    (oe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] no document body to host probe video; skipping monitor",
                    ])),
                )
                .sendLogs("voip-camera-health-check-no-body"),
                (b.srcObject = null));
              return;
            }
            v.appendChild(b);
            var S = function () {
              h.hidden && (y = !0);
            };
            h.addEventListener("visibilitychange", S);
            var R = !1,
              L = null,
              E = function () {
                R ||
                  ((R = !0),
                  L != null && (self.clearTimeout(L), (L = null)),
                  h.removeEventListener("visibilitychange", S),
                  (b.srcObject = null),
                  b.remove(),
                  l.__frameMonitorCleanup === E &&
                    (l.__frameMonitorCleanup = null));
              };
            this.__frameMonitorCleanup = E;
            var k = function () {
                R ||
                  (o("WALogger").LOG(
                    ae ||
                      (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] frame received",
                      ])),
                  ),
                  ke.trigger("cameraFrameReceived"),
                  E());
              },
              I = function () {
                return !h.hidden && !y
                  ? ((C = null), !1)
                  : ((y = h.hidden),
                    C !== h.hidden &&
                      ((C = h.hidden),
                      o("WALogger").LOG(
                        ie ||
                          (ie = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] probe doc hidden recently, deferring verdict (hidden=",
                            ")",
                          ])),
                        String(h.hidden),
                      )),
                    !0);
              },
              T = function () {
                o(
                  "WAWebVoipPopoutWindowState",
                ).getIsCameraStreamReacquisitionInProgress() || (f = 0);
              },
              D = function () {
                return !o(
                  "WAWebVoipPopoutWindowState",
                ).getIsCameraStreamReacquisitionInProgress() || f >= _
                  ? !1
                  : (f++,
                    o("WALogger").LOG(
                      le ||
                        (le = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] stream swapping, deferring verdict (deferral=",
                          "/",
                          ")",
                        ])),
                      f,
                      _,
                    ),
                    !0);
              },
              x = function () {
                if (!R) {
                  if (
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasReceivedFirstFrameForSource(xe)
                  ) {
                    (o("WALogger").LOG(
                      se ||
                        (se = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] self preview already rendered a frame",
                        ])),
                    ),
                      k());
                    return;
                  }
                  if ((T(), I())) {
                    L = self.setTimeout(x, s);
                    return;
                  }
                  if (
                    !o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasCanvasForSource(xe) &&
                    p < m
                  ) {
                    (p++,
                      o("WALogger").LOG(
                        ue ||
                          (ue = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                            "/",
                            ")",
                          ])),
                        p,
                        m,
                      ),
                      (L = self.setTimeout(x, s)));
                    return;
                  }
                  if (D()) {
                    L = self.setTimeout(x, s);
                    return;
                  }
                  (o("WALogger").LOG(
                    ce ||
                      (ce = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                        ")",
                      ])),
                    l.__healthCheckRetryCount,
                  ),
                    ke.trigger("cameraNotProducingFrames"),
                    E(),
                    l.__healthCheckRetryCount === 0
                      ? ((l.__healthCheckRetryCount = 1),
                        o("WALogger").LOG(
                          de ||
                            (de = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] auto-retrying camera capture",
                            ])),
                        ),
                        l.retryCameraCapture())
                      : (o("WALogger").LOG(
                          me ||
                            (me = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                            ])),
                        ),
                        ke.trigger("cameraHealthCheckFailed")));
                }
              };
            ((L = self.setTimeout(x, d)),
              typeof b.requestVideoFrameCallback == "function"
                ? b.requestVideoFrameCallback(k)
                : o("WALogger").LOG(
                    pe ||
                      (pe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                      ])),
                  ),
              b.play().then(function () {
                !c ||
                  R ||
                  (L != null && self.clearTimeout(L),
                  (L = self.setTimeout(x, s)));
              }, r("WAWebNoop")));
          }),
          (n.stopCapture = async function (n) {
            var t;
            (n === void 0 && (n = !1),
              (this.__stopping = !0),
              this.__stopGeneration++,
              (this.__stackCaptureWanted = !1),
              (t = this.__frameMonitorCleanup) == null || t.call(this),
              (this.__frameMonitorCleanup = null));
            var r = this.__lastCapturedStream;
            if (
              ((this.__lastCapturedStream = null),
              (this.__healthCheckRetryCount = 0),
              r != null)
            ) {
              var a = r.getTracks();
              o("WALogger").LOG(
                _e ||
                  (_e = babelHelpers.taggedTemplateLiteralLoose([
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
              await e.prototype.stopCapture.call(this, n);
            } finally {
              var i;
              ((i = this.__frameMonitorCleanup) == null || i.call(this),
                (this.__frameMonitorCleanup = null));
              var l = this.__lastCapturedStream;
              if (
                ((this.__lastCapturedStream = null),
                (this.__lastTargetWindow = null),
                this.$WAWebVoipVideoCameraCaptureImpl$p_4(!1),
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
                      fe ||
                        (fe = babelHelpers.taggedTemplateLiteralLoose([
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
                  ge ||
                    (ge = babelHelpers.taggedTemplateLiteralLoose([
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
                      he ||
                        (he = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] stopped ",
                          " leaked track(s) => ",
                          "",
                        ])),
                      d,
                      c,
                    ));
              }
              ($e("stopCapture"),
                o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.resetFirstFrameReceivedForSource(xe),
                this.currentFacing != null &&
                  ((this.currentFacing = null),
                  ke.trigger("facingChanged", null)),
                this.__facingFlipActive && (this.currentDeviceId = null),
                (this.__facingFlipActive = !1),
                (this.__stopping = !1));
            }
          }),
          (n.retryCameraCapture = async function () {
            if (
              (o("WALogger").LOG(
                ye ||
                  (ye = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] retrying camera capture",
                  ])),
              ),
              this.__stopping)
            )
              return (
                o("WALogger").LOG(
                  Ce ||
                    (Ce = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] stop in progress, skipping retry",
                    ])),
                ),
                !1
              );
            if (this.captureParams == null)
              return (
                o("WALogger").ERROR(
                  be ||
                    (be = babelHelpers.taggedTemplateLiteralLoose([
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
                await this.__cleanup(),
                this.__stopBeganSince(r)
                  ? (o("WALogger").LOG(
                      ve ||
                        (ve = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] stop started during retry, aborting before re-acquire",
                        ])),
                    ),
                    !1)
                  : (await this.startCameraCapture({
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
                  Se ||
                    (Se = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retry failed: ",
                      "",
                    ])),
                  e,
                ),
                ke.trigger("cameraHealthCheckFailed"),
                !1
              );
            }
          }),
          (n.recordCallEnd = function () {
            if (
              ((this.__callEndGeneration = ++this.__stopGeneration),
              o(
                "WAWebVoipLazyVideoEffectsProcessor",
              ).lazyVideoEffectsProcessor.recordCallEnd(),
              o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled())
            ) {
              var e;
              ((e = this.__frameMonitorCleanup) == null || e.call(this),
                (this.__frameMonitorCleanup = null));
            }
          }),
          (n.recordCallStart = function () {
            o(
              "WAWebVoipLazyVideoEffectsProcessor",
            ).lazyVideoEffectsProcessor.recordCallStart();
          }),
          (n.scheduleCallEndCameraRelease = function () {
            var e = Array.from(Ie);
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
                    Ie.delete(r));
                }
                t > 0 &&
                  o("WALogger")
                    .WARN(
                      Re ||
                        (Re = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
                          " leaked live camera track(s) across ",
                          " stream(s) the WASM teardown never released",
                        ])),
                      t,
                      n,
                    )
                    .sendLogs("voip-camera-callend-backstop");
              }, Te);
          }),
          t
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      Me = new Ne();
    function we(e, t, n) {
      return (
        n != null &&
        !o("WAWebUA").UA.isFirefox &&
        !o("WAWebUA").UA.isSafari &&
        e !== t &&
        !r("isStringNullOrEmpty")(t)
      );
    }
    function Ae(e) {
      var t = e != null ? e : o("WAWebVoipPopoutWindowState").getPopoutWindow();
      return (
        o("WAWebUA").UA.isFirefox &&
        t != null &&
        o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled() &&
        !document.hasFocus()
      );
    }
    function Fe() {
      var e = navigator.mediaDevices;
      return e == null
        ? Promise.resolve([])
        : o("WAWebAudioDeviceManager")
            .coalescedEnumerateDevices(e)
            .then(
              function (e) {
                return e.filter(function (e) {
                  return e.kind === "videoinput";
                });
              },
              function (e) {
                return (
                  o("WALogger").LOG(
                    Le ||
                      (Le = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] main window camera list failed: ",
                        "",
                      ])),
                    e,
                  ),
                  []
                );
              },
            );
    }
    function Oe(e, t) {
      var n;
      if (t === "") return null;
      var o =
        (n = e.find(function (e) {
          return e.label === t;
        })) == null
          ? void 0
          : n.deviceId;
      return r("isStringNullOrEmpty")(o) ? null : o;
    }
    ((l.VideoDeviceEvents = ke), (l.WAWebVoipVideoCameraCapture = Me));
  },
  98,
);
