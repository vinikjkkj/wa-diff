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
      U = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebTypedEventEmitter")),
      V = new U(),
      H = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "camera"),
            (e.captureParams = null),
            (e.currentDeviceId = null),
            (e.__lastCapturedStream = null),
            (e.__frameMonitorCleanup = null),
            (e.__healthCheckRetryCount = 0),
            (e.__stopping = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.startCameraCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i, l, f, g) {
                var h = this;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] cam=",
                      " w=",
                      " h=",
                      " fps=",
                      " upgrade=",
                      "",
                    ])),
                  t,
                  a,
                  i,
                  l,
                  f,
                );
                var y = t;
                if (r("isStringNullOrEmpty")(y)) {
                  var C = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
                  C != null &&
                    ((y = C),
                    o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
                }
                if (
                  (r("isStringNullOrEmpty")(y) &&
                    this.currentDeviceId != null &&
                    (y = this.currentDeviceId),
                  r("isStringNullOrEmpty")(y))
                ) {
                  var b = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
                  b != null && (y = b);
                }
                var v =
                  g != null
                    ? g
                    : o("WAWebUA").UA.isFirefox
                      ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                      : null;
                if (!r("isStringNullOrEmpty")(y))
                  try {
                    var S = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getIsValidVideoDevice",
                      { deviceId: y, targetWindow: v, isInActiveCall: !0 },
                    );
                    S ||
                      (o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startCameraCapture] device ",
                            " no longer available, falling back to default",
                          ])),
                        y,
                      ),
                      (y = ""));
                  } catch (e) {
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startCameraCapture] device validation failed, proceeding with ",
                          ": ",
                          "",
                        ])),
                      y,
                      e,
                    );
                  }
                this.captureParams = o(
                  "WAWebVoipResolutionCap",
                ).applyLowEndResolutionCap({ width: a, height: i, maxFps: l });
                var R = null,
                  L = (function () {
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
                            selectedDeviceId: y,
                            params: r("nullthrows")(h.captureParams),
                            isAVUpgrade: f,
                          });
                          if (e == null) {
                            o("WALogger").LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                          h.__lastCapturedStream = e;
                          var a = e.getVideoTracks().at(0);
                          if (a != null) {
                            var i,
                              l = a.getSettings();
                            (l.deviceId != null &&
                              l.deviceId !== "" &&
                              (R = l.deviceId),
                              o("WALogger").LOG(
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
                                (i = l.deviceId) != null ? i : "unknown",
                                String(l.width),
                                String(l.height),
                              ));
                          } else
                            o("WALogger").LOG(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] stream acquired but no video track found",
                                ])),
                            );
                          return (
                            a == null ||
                              a.addEventListener(
                                "ended",
                                n("asyncToGeneratorRuntime").asyncToGenerator(
                                  function* () {
                                    o("WALogger").LOG(
                                      p ||
                                        (p =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[AV:getCameraMediaStream] stream ended, muting video",
                                            ],
                                          )),
                                    );
                                    var e = yield o(
                                      "WAWebVoipStackInterface",
                                    ).getVoipStackInterface();
                                    (e == null ? void 0 : e.type) === "web" &&
                                      (yield e.setCallVideoMute(!0));
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
                      getMediaStream: L,
                      onVideoDataFnType: "onVideoDataFromJs",
                    },
                    r("nullthrows")(this.captureParams),
                  ),
                ),
                  this.__lastCapturedStream != null &&
                    this.__monitorFrameProduction(this.__lastCapturedStream));
                var E = R != null ? R : y;
                this.currentDeviceId !== E &&
                  ((this.currentDeviceId = E),
                  r("isStringNullOrEmpty")(E) ||
                    o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(E),
                  V.trigger("deviceSelectionChanged", [E]),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device changed: requested=",
                        ", actual=",
                        "",
                      ])),
                    y,
                    E,
                  ));
              },
            );
            function a(e, n, r, o, a, i) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.startWithStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r, a) {
                (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.switchVideoDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "voip: switchVideoDevice (" + this.name + ")";
                if (
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
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
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
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
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchVideoDevice] error switching device: ",
                          "",
                        ])),
                      e,
                    ),
                    i != null && i !== "")
                  ) {
                    o("WALogger").LOG(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
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
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.__monitorFrameProduction = function (t) {
            var e,
              n,
              a,
              i,
              l,
              s = this;
            if (r("justknobx")._("5082")) {
              ((e = this.__frameMonitorCleanup) == null || e.call(this),
                (this.__frameMonitorCleanup = null));
              var u = 2e3,
                c = u,
                d = 5,
                m = 0,
                p =
                  (n =
                    (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                    null
                      ? void 0
                      : a.document) != null
                    ? n
                    : null,
                _ = p != null ? p : document;
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] monitoring frame production (doc=",
                    ")",
                  ])),
                p != null ? "popout" : "main",
              );
              var f = _.createElement("video");
              (f.setAttribute("playsinline", ""),
                (f.muted = !0),
                (f.style.display = "none"),
                (f.srcObject = t),
                (i = (l = _.body) != null ? l : document.body) == null ||
                  i.appendChild(f),
                f.play().catch(r("WAWebNoop")));
              var g = !1,
                h = null,
                y = function () {
                  g ||
                    ((g = !0),
                    h != null && (self.clearTimeout(h), (h = null)),
                    (f.srcObject = null),
                    f.remove(),
                    s.__frameMonitorCleanup === y &&
                      (s.__frameMonitorCleanup = null));
                };
              this.__frameMonitorCleanup = y;
              var C = function () {
                  g ||
                    (o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] frame received",
                        ])),
                    ),
                    V.trigger("cameraFrameReceived", []),
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
                      m < d
                    ) {
                      (m++,
                        o("WALogger").LOG(
                          D ||
                            (D = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                              "/",
                              ")",
                            ])),
                          m,
                          d,
                        ),
                        (h = self.setTimeout(b, c)));
                      return;
                    }
                    (o("WALogger").LOG(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                          ")",
                        ])),
                      s.__healthCheckRetryCount,
                    ),
                      V.trigger("cameraNotProducingFrames", []),
                      y(),
                      s.__healthCheckRetryCount === 0
                        ? ((s.__healthCheckRetryCount = 1),
                          o("WALogger").LOG(
                            $ ||
                              ($ = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraHealthCheck] auto-retrying camera capture",
                              ])),
                          ),
                          s.retryCameraCapture())
                        : (o("WALogger").LOG(
                            P ||
                              (P = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                              ])),
                          ),
                          V.trigger("cameraHealthCheckFailed", [])));
                  }
                };
              ((h = self.setTimeout(b, c)),
                typeof f.requestVideoFrameCallback == "function"
                  ? f.requestVideoFrameCallback(C)
                  : o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                        ])),
                    ));
            }
          }),
          (i.stopCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n;
                (e === void 0 && (e = !1),
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
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
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
                  yield t.prototype.stopCapture.call(this, e);
                } finally {
                  var i;
                  ((i = this.__frameMonitorCleanup) == null || i.call(this),
                    (this.__frameMonitorCleanup = null));
                  var l = this.__lastCapturedStream;
                  if (((this.__lastCapturedStream = null), r != null)) {
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
                          w ||
                            (w = babelHelpers.taggedTemplateLiteralLoose([
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
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
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
                          F ||
                            (F = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:stopCapture] stopped ",
                              " leaked track(s) => ",
                              "",
                            ])),
                          d,
                          c,
                        ));
                  }
                  this.__stopping = !1;
                }
              },
            );
            function r(t) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (i.retryCameraCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (o("WALogger").LOG(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retrying camera capture",
                    ])),
                ),
                this.__stopping)
              )
                return (
                  o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] stop in progress, skipping retry",
                      ])),
                  ),
                  !1
                );
              if (this.captureParams == null)
                return (
                  o("WALogger").ERROR(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] cannot retry, no capture params",
                      ])),
                  ),
                  !1
                );
              var e = this.captureParams;
              try {
                var t;
                return (
                  yield this.__cleanup(),
                  yield this.startCameraCapture(
                    (t = this.currentDeviceId) != null ? t : "",
                    e.width,
                    e.height,
                    e.maxFps,
                    !1,
                  ),
                  !0
                );
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] retry failed: ",
                        "",
                      ])),
                    e,
                  ),
                  V.trigger("cameraHealthCheckFailed", []),
                  !1
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      G = new H();
    ((l.VideoDeviceEvents = V), (l.WAWebVoipVideoCameraCapture = G));
  },
  98,
);
