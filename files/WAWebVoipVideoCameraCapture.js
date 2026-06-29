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
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
    "justknobx",
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
      j = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebTypedEventEmitter")),
      K = new j(),
      Q = new Set(),
      X = 2e3;
    function Y(t) {
      var n = 0,
        r = 0;
      for (var a of Q) {
        var i = a.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        (i.length > 0 &&
          (i.forEach(function (e) {
            return e.stop();
          }),
          r++,
          (n += i.length)),
          Q.delete(a));
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
    var J = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "camera"),
            (t.captureParams = null),
            (t.currentDeviceId = null),
            (t.__lastCapturedStream = null),
            (t.__lastTargetWindow = null),
            (t.__frameMonitorCleanup = null),
            (t.__healthCheckRetryCount = 0),
            (t.__stopping = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.startCameraCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a, i, l, s) {
                var y = this;
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] cam=",
                      " w=",
                      " h=",
                      " fps=",
                      " upgrade=",
                      " targetWindow=",
                      "",
                    ])),
                  e,
                  t,
                  a,
                  i,
                  l,
                  String(s != null),
                ),
                  (this.__lastTargetWindow = s != null ? s : null));
                var C = e;
                if (r("isStringNullOrEmpty")(C)) {
                  var b = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
                  b != null &&
                    ((C = b),
                    o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
                }
                if (
                  (r("isStringNullOrEmpty")(C) &&
                    this.currentDeviceId != null &&
                    (C = this.currentDeviceId),
                  r("isStringNullOrEmpty")(C))
                ) {
                  var v = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
                  v != null && (C = v);
                }
                var S =
                  s != null
                    ? s
                    : o("WAWebUA").UA.isFirefox
                      ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                      : null;
                if (!r("isStringNullOrEmpty")(C))
                  try {
                    var R = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getIsValidVideoDevice",
                      { deviceId: C, targetWindow: S, isInActiveCall: !0 },
                    );
                    R ||
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startCameraCapture] device ",
                            " no longer available, falling back to default",
                          ])),
                        C,
                      ),
                      (C = ""));
                  } catch (e) {
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startCameraCapture] device validation failed, proceeding with ",
                          ": ",
                          "",
                        ])),
                      C,
                      e,
                    );
                  }
                this.captureParams = o(
                  "WAWebVoipResolutionCap",
                ).applyLowEndResolutionCap({ width: t, height: a, maxFps: i });
                var L = null,
                  E = (function () {
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
                            params: r("nullthrows")(y.captureParams),
                            isAVUpgrade: l,
                            targetWindow: s,
                          });
                          if (e == null) {
                            o("WALogger").LOG(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] getUserMedia failed, muting video",
                                ])),
                            );
                            var t = yield o(
                              "WAWebVoipStackInterface",
                            ).getVoipStackInterface();
                            return (
                              (t == null ? void 0 : t.type) === "web" &&
                                (yield t.setCallVideoMute(!0)),
                              null
                            );
                          }
                          ((y.__lastCapturedStream = e), Q.add(e));
                          var a = e.getVideoTracks().at(0);
                          if (a != null) {
                            var i,
                              u = a.getSettings();
                            (u.deviceId != null &&
                              u.deviceId !== "" &&
                              (L = u.deviceId),
                              o("WALogger").LOG(
                                p ||
                                  (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:getCameraMediaStream] track acquired: readyState=",
                                    ", muted=",
                                    ", enabled=",
                                    ", deviceId=",
                                    ", resolution=",
                                    "x",
                                    "",
                                  ])),
                                a.readyState,
                                String(a.muted),
                                String(a.enabled),
                                (i = u.deviceId) != null ? i : "unknown",
                                String(u.width),
                                String(u.height),
                              ));
                          } else
                            o("WALogger").LOG(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] stream acquired but no video track found",
                                ])),
                            );
                          return (
                            a == null ||
                              a.addEventListener(
                                "ended",
                                n("asyncToGeneratorRuntime").asyncToGenerator(
                                  function* () {
                                    if (
                                      o(
                                        "WAWebVoipPopoutWindowState",
                                      ).getIsCameraStreamReacquisitionInProgress() ||
                                      y.__lastCapturedStream !== e
                                    ) {
                                      o("WALogger").LOG(
                                        f ||
                                          (f =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap",
                                              ],
                                            )),
                                      );
                                      return;
                                    }
                                    o("WALogger").LOG(
                                      g ||
                                        (g =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[AV:getCameraMediaStream] stream ended, muting video",
                                            ],
                                          )),
                                    );
                                    var t = yield o(
                                      "WAWebVoipStackInterface",
                                    ).getVoipStackInterface();
                                    (t == null ? void 0 : t.type) === "web" &&
                                      (yield t.setCallVideoMute(!0));
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
                (yield this.__startCapture(
                  babelHelpers.extends(
                    {
                      getMediaStream: E,
                      onVideoDataFnType: "onVideoDataFromJs",
                    },
                    r("nullthrows")(this.captureParams),
                  ),
                ),
                  this.__lastCapturedStream != null &&
                    this.__monitorFrameProduction(this.__lastCapturedStream));
                var k = L != null ? L : C;
                this.currentDeviceId !== k &&
                  ((this.currentDeviceId = k),
                  r("isStringNullOrEmpty")(k) ||
                    o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(k),
                  K.trigger("deviceSelectionChanged", [k]),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device changed: requested=",
                        ", actual=",
                        "",
                      ])),
                    C,
                    k,
                  ));
              },
            );
            function t(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startWithStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r, a) {
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startWithStream] w=",
                      " h=",
                      " fps=",
                      "",
                    ])),
                  t,
                  r,
                  a,
                ),
                  (this.captureParams = { width: t, height: r, maxFps: a }),
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
                    height: r,
                    maxFps: a,
                  }));
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.switchVideoDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "voip: switchVideoDevice (" + this.name + ")";
                if (
                  (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " switching to device: ",
                        "",
                      ])),
                    n,
                    e,
                  ),
                  this.captureInitState ===
                    o("WAWebVoipVideoCaptureBase").CaptureInitState
                      .Initializing && this.captureInitResolvable != null)
                ) {
                  var r = this.captureInitResolvable;
                  o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture still initializing, waiting for ready",
                      ])),
                    n,
                  );
                  try {
                    yield r.promise;
                  } catch (e) {
                    return (
                      o("WALogger").ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture initialization failed while waiting",
                          ])),
                        n,
                      ),
                      !1
                    );
                  }
                  if (
                    this.captureInitResolvable !== r ||
                    this.captureInitState !==
                      o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready
                  )
                    return (
                      o("WALogger").LOG(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture state changed while waiting, aborting switch",
                          ])),
                        n,
                      ),
                      !1
                    );
                } else if (
                  this.captureInitState !==
                  o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready
                )
                  return (
                    o("WALogger").ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture not initialized,\n      current state: ",
                          "",
                        ])),
                      n,
                      this.captureInitState,
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
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
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
                if (((this.__healthCheckRetryCount = 0), !this.captureParams))
                  return (
                    o("WALogger").ERROR(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " capture params not available",
                        ])),
                      n,
                    ),
                    !1
                  );
                try {
                  var l = this.captureParams;
                  (yield this.__cleanup(),
                    yield this.startCameraCapture(
                      e,
                      l.width,
                      l.height,
                      l.maxFps,
                      !1,
                      t,
                    ));
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
                      var s = this.captureParams;
                      s != null &&
                        (yield this.startCameraCapture(
                          i,
                          s.width,
                          s.height,
                          s.maxFps,
                          !1,
                          t,
                        ));
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
          (a.__monitorFrameProduction = function (t) {
            var e,
              n,
              a,
              i,
              l = this;
            if (r("justknobx")._("5082")) {
              ((e = this.__frameMonitorCleanup) == null || e.call(this),
                (this.__frameMonitorCleanup = null));
              var s = 2e3,
                u = s,
                c = 5,
                d = 0,
                m =
                  (n =
                    (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                    null
                      ? void 0
                      : a.document) != null
                    ? n
                    : null,
                p = m != null ? m : document;
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] monitoring frame production (doc=",
                    ")",
                  ])),
                m != null ? "popout" : "main",
              );
              var _ = p.createElement("video");
              (_.setAttribute("playsinline", ""),
                _.setAttribute("aria-hidden", "true"),
                (_.muted = !0),
                (_.style.cssText =
                  "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"),
                (_.srcObject = t));
              var f = (i = p.body) != null ? i : document.body;
              if (f == null) {
                (o("WALogger")
                  .ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no document body to host probe video; skipping monitor",
                      ])),
                  )
                  .sendLogs("voip-camera-health-check-no-body"),
                  (_.srcObject = null));
                return;
              }
              (f.appendChild(_), _.play().catch(r("WAWebNoop")));
              var g = !1,
                h = null,
                y = function () {
                  g ||
                    ((g = !0),
                    h != null && (self.clearTimeout(h), (h = null)),
                    (_.srcObject = null),
                    _.remove(),
                    l.__frameMonitorCleanup === y &&
                      (l.__frameMonitorCleanup = null));
                };
              this.__frameMonitorCleanup = y;
              var C = function () {
                  g ||
                    (o("WALogger").LOG(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] frame received",
                        ])),
                    ),
                    K.trigger("cameraFrameReceived", []),
                    y());
                },
                b = function () {
                  if (!g) {
                    if (
                      !o(
                        "WAWebVoipVideoRendererRegistry",
                      ).videoRendererRegistry.hasCanvasForJid(
                        o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                      ) &&
                      d < c
                    ) {
                      (d++,
                        o("WALogger").LOG(
                          N ||
                            (N = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                              "/",
                              ")",
                            ])),
                          d,
                          c,
                        ),
                        (h = self.setTimeout(b, u)));
                      return;
                    }
                    (o("WALogger").LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                          ")",
                        ])),
                      l.__healthCheckRetryCount,
                    ),
                      K.trigger("cameraNotProducingFrames", []),
                      y(),
                      l.__healthCheckRetryCount === 0
                        ? ((l.__healthCheckRetryCount = 1),
                          o("WALogger").LOG(
                            w ||
                              (w = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraHealthCheck] auto-retrying camera capture",
                              ])),
                          ),
                          l.retryCameraCapture())
                        : (o("WALogger").LOG(
                            A ||
                              (A = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                              ])),
                          ),
                          K.trigger("cameraHealthCheckFailed", [])));
                  }
                };
              ((h = self.setTimeout(b, u)),
                typeof _.requestVideoFrameCallback == "function"
                  ? _.requestVideoFrameCallback(C)
                  : o("WALogger").LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                        ])),
                    ));
            }
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
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
                          B ||
                            (B = babelHelpers.taggedTemplateLiteralLoose([
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
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
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
                          q ||
                            (q = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:stopCapture] stopped ",
                              " leaked track(s) => ",
                              "",
                            ])),
                          d,
                          c,
                        ));
                  }
                  (Y("stopCapture"), (this.__stopping = !1));
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
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retrying camera capture",
                    ])),
                ),
                this.__stopping)
              )
                return (
                  o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] stop in progress, skipping retry",
                      ])),
                  ),
                  !1
                );
              if (this.captureParams == null)
                return (
                  o("WALogger").ERROR(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
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
                  yield this.startCameraCapture(
                    (r = this.currentDeviceId) != null ? r : "",
                    e.width,
                    e.height,
                    e.maxFps,
                    !1,
                    n,
                  ),
                  !0
                );
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] retry failed: ",
                        "",
                      ])),
                    e,
                  ),
                  K.trigger("cameraHealthCheckFailed", []),
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
            var e = Array.from(Q);
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
                    Q.delete(r));
                }
                t > 0 &&
                  o("WALogger")
                    .WARN(
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
                          " leaked live camera track(s) across ",
                          " stream(s) the WASM teardown never released",
                        ])),
                      t,
                      n,
                    )
                    .sendLogs("voip-camera-callend-backstop");
              }, X);
          }),
          t
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      Z = new J();
    ((l.VideoDeviceEvents = K), (l.WAWebVoipVideoCameraCapture = Z));
  },
  98,
);
