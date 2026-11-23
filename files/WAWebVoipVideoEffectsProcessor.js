__d(
  "WAWebVoipVideoEffectsProcessor",
  [
    "WALogger",
    "WAWebVoipBackgroundBlurStrength",
    "WAWebVoipBackgroundImages",
    "WAWebVoipColorBackground",
    "WAWebVoipVideoEffectsAssetsConfig",
    "WAWebVoipVideoEffectsAvailability",
    "WAWebVoipVideoEffectsFrameStats",
    "WAWebVoipVideoEffectsODS",
    "WAWebVoipVideoEffectsOverloadDetector",
    "WAWebVoipVideoEffectsState",
    "WAWebVoipVideoEffectsWorkerResource",
    "WorkerBundleResource",
    "WorkerMessagePort",
    "err",
    "getErrorSafe",
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
      T = 15e3,
      D = 1e3,
      x = 2 * D,
      $ = 15,
      P = 1e3,
      N = 5 * 6e4,
      M = 3e4,
      w = 1e3;
    function A() {
      return new (o("WorkerMessagePort").WorkerMessagePort)(
        o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAWebVoipVideoEffectsWorkerResource"),
        ),
        "WAWebVoipVideoEffectsWorker",
      );
    }
    function F() {
      var e = r("WAWebVoipVideoEffectsAssetsConfig"),
        t = {
          modelUrl: e.model_url,
          wasmBinaryUrl: e.wasm_binary_url,
          wasmLoaderUrl: e.wasm_loader_url,
        };
      if (t.modelUrl === "" || t.wasmBinaryUrl === "" || t.wasmLoaderUrl === "")
        throw r("err")("missing effects asset urls");
      return t;
    }
    function O() {
      return self.performance.now();
    }
    function B() {
      var e = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
        t = e.blur,
        n = e.image;
      return n != null
        ? { kind: "image", id: n }
        : { kind: "blur", strength: t };
    }
    function W() {
      var e = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
        t = e.blur,
        n = e.image;
      return n != null
        ? Math.max(
            t,
            o("WAWebVoipBackgroundBlurStrength").DEFAULT_BLUR_STRENGTH,
          )
        : t;
    }
    function q() {
      var e = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
        t = e.blur,
        n = e.image;
      return n != null && o("WAWebVoipColorBackground").isColorBackgroundId(n)
        ? 0
        : t;
    }
    function U(e, t) {
      return e.kind === "blur"
        ? t.kind === "blur" && t.strength === e.strength
        : t.kind === "image" && t.id === e.id;
    }
    function V() {
      return (
        o("WAWebVoipVideoEffectsState").isVideoEffectsRequested() &&
        o("WAWebVoipVideoEffectsAvailability").isVideoEffectsAvailable()
      );
    }
    var H = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = !1),
            (this.$3 = !1),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.$6 = !1),
            (this.$7 = !1),
            (this.$8 = -1 / 0),
            (this.$9 = -1 / 0),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = new Map()),
            (this.$13 = 0),
            (this.$14 = 0),
            (this.$15 = null),
            (this.$16 = !1),
            (this.$17 = !1),
            (this.$18 = 0),
            (this.$19 = 0),
            (this.$20 = new (o(
              "WAWebVoipVideoEffectsFrameStats",
            ).WAWebVoipVideoEffectsFrameStats)()),
            (this.$21 = new (o(
              "WAWebVoipVideoEffectsOverloadDetector",
            ).WAWebVoipVideoEffectsOverloadDetector)()));
        }
        var n = t.prototype;
        return (
          (n.shouldProcess = function () {
            var e = this,
              t = O(),
              n = t - this.$8;
            ((this.$8 = t),
              this.$4 ||
                ((this.$4 = !0),
                (this.$3 = V()),
                o("WAWebVoipVideoEffectsState").subscribeToVideoEffects(
                  function () {
                    return e.$22();
                  },
                ),
                o("WAWebVoipBackgroundImages").subscribeToBackgroundImageReady(
                  function (t) {
                    return e.$23(t);
                  },
                )));
            var r = this.$5;
            return (
              (this.$5 = !0),
              (n >= N || (this.$6 && (n > P || this.$7))) && this.$24(),
              this.$25(),
              r || this.$26(),
              this.$3 ? ((this.$9 = t), this.$2) : !1
            );
          }),
          (n.process = function (n) {
            var t = this,
              a = this.$1;
            if (a == null || !this.$2 || !this.$3) return Promise.resolve(n);
            if (this.$12.size > 0) return (n.close(), Promise.resolve(null));
            var i = this.$13++,
              l = O();
            return new Promise(function (u) {
              var c = { resolve: u, sentAtMs: l, timeoutId: 0 },
                d = function (r) {
                  if (t.$12.get(i) === c) {
                    if (!r && O() - l > x) {
                      c.timeoutId = self.setTimeout(function () {
                        return d(!0);
                      }, D);
                      return;
                    }
                    (t.$12.delete(i),
                      u(null),
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] frame not processed within ",
                            " ms",
                          ])),
                        D,
                      ),
                      t.$27("failed"));
                  }
                };
              ((c.timeoutId = self.setTimeout(function () {
                return d(!1);
              }, D)),
                t.$12.set(i, c));
              try {
                a.postMessage({ type: "processFrame", id: i, frame: n }, [n]);
              } catch (e) {
                (self.clearTimeout(c.timeoutId),
                  t.$12.delete(i),
                  n.close(),
                  u(null),
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] could not send a frame to the worker",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  t.$27("failed"));
              }
            });
          }),
          (n.recordCallEnd = function () {
            this.$4 && ((this.$6 = !0), this.$28());
          }),
          (n.recordCallStart = function () {
            this.$7 = this.$6;
          }),
          (n.$25 = function () {
            !this.$3 && V() && this.$22();
          }),
          (n.$22 = function () {
            if (
              o("WAWebVoipVideoEffectsState").isVideoEffectsRequested() &&
              o("WAWebVoipVideoEffectsAvailability").isVideoEffectsTooSlow()
            ) {
              o("WAWebVoipVideoEffectsState").stopVideoEffects("too_slow");
              return;
            }
            var e = this.$1,
              t = this.$15;
            e != null && t != null && this.$29(e, t);
            var n = V();
            n !== this.$3 &&
              ((this.$3 = n), n && (this.$9 = O()), this.$30(), this.$26());
          }),
          (n.$31 = function () {
            return this.$3 && this.$5;
          }),
          (n.$26 = function () {
            var e = this;
            if ((this.$28(), !this.$31())) {
              (this.$32(),
                o("WAWebVoipVideoEffectsState").setVideoEffectsStatus("off"));
              return;
            }
            if (this.$2) {
              o("WAWebVoipVideoEffectsState").setVideoEffectsStatus("on");
              return;
            }
            (this.$10 == null &&
              (this.$10 = self.setTimeout(function () {
                ((e.$10 = null),
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] effects worker not ready within ",
                        " ms",
                      ])),
                    T,
                  ),
                  e.$27("start_timeout"));
              }, T)),
              o("WAWebVoipVideoEffectsState").setVideoEffectsStatus("starting"),
              this.$1 == null && this.$31() && this.$33());
          }),
          (n.$33 = function () {
            var e = this;
            o("WAWebVoipVideoEffectsODS").logVideoEffects("worker_start");
            var t;
            try {
              t = A();
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [effects] could not create the effects worker",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
                this.$27("start_failed"));
              return;
            }
            this.$1 = t;
            var n = O();
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] starting the effects worker",
                ])),
            ),
              t.addMessageListener("ready", function () {
                if (e.$1 === t) {
                  var n;
                  try {
                    n = F();
                  } catch (t) {
                    (o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] effects assets unavailable",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t)),
                      e.$27("start_failed"));
                    return;
                  }
                  (t.postMessage({ type: "init", assets: n }), e.$34(t));
                }
              }),
              t.addMessageListener("initDone", function (r) {
                var a = r.gpu,
                  i = r.initMs,
                  l = r.modelMs;
                if (e.$1 === t) {
                  var s = l != null ? l.toFixed(1) + " ms" : "unknown";
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] effects worker ready after ",
                        " ms (init ",
                        " ms, model ",
                        "), gpu=",
                        "",
                      ])),
                    Math.round(O() - n),
                    Math.round(i),
                    s,
                    a,
                  ),
                    o("WAWebVoipVideoEffectsODS").logVideoEffects(
                      "worker_ready",
                    ),
                    (e.$2 = !0),
                    e.$32(),
                    e.$26());
                }
              }),
              t.addMessageListener("initFailed", function (n) {
                var r = n.detail,
                  a = n.reason;
                if (e.$1 === t) {
                  if (
                    (o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] effects worker init failed (",
                          "): ",
                          "",
                        ])),
                      a,
                      r,
                    ),
                    o("WAWebVoipVideoEffectsODS").logVideoEffects(
                      a === "unsupported"
                        ? "worker_init_failed_unsupported"
                        : a === "software_gpu"
                          ? "worker_init_failed_software_gpu"
                          : a === "too_slow"
                            ? "worker_init_failed_too_slow"
                            : a === "error"
                              ? "worker_init_failed_error"
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      a,
                                  );
                                })(),
                    ),
                    a !== "too_slow")
                  ) {
                    e.$27("start_error");
                    return;
                  }
                  (o(
                    "WAWebVoipVideoEffectsAvailability",
                  ).markVideoEffectsTooSlow(),
                    e.$35(),
                    o("WAWebVoipVideoEffectsState").isVideoEffectsRequested()
                      ? o("WAWebVoipVideoEffectsState").stopVideoEffects(
                          "too_slow",
                        )
                      : e.$26());
                }
              }),
              t.addMessageListener("contextLost", function () {
                e.$1 === t &&
                  (o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] effects worker lost its WebGL context",
                      ])),
                  ),
                  e.$27(e.$2 ? "failed" : "start_error"));
              }),
              t.addMessageListener("frameProcessed", function (n) {
                var r = n.frame,
                  a = n.id,
                  i = n.processMs,
                  l = n.segmented;
                if (e.$1 !== t) {
                  r.close();
                  return;
                }
                e.$14 = 0;
                var s = e.$36(a, r);
                if (s != null) {
                  var u = O();
                  e.$20.recordProcessed(u, {
                    roundTripMs: u - s,
                    segmented: l,
                    workerMs: i,
                  });
                }
                (e.$30(),
                  l &&
                    e.$21.record(i, O()) &&
                    (o("WALogger").WARN(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] the effects worker can't keep up with the camera",
                        ])),
                    ),
                    e.$27("overloaded")));
              }),
              t.addMessageListener("frameFailed", function (n) {
                var r = n.detail,
                  a = n.id;
                e.$1 === t &&
                  (e.$36(a, null),
                  e.$20.recordFailed(O()),
                  e.$30(),
                  e.$14++,
                  e.$14 >= $ &&
                    (o("WALogger").WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          " frames failed in a row, last: ",
                          "",
                        ])),
                      e.$14,
                      r,
                    ),
                    e.$27("failed")));
              }),
              t.addMessageListener("log", function (e) {
                var t = e.level,
                  n = e.message;
                switch (t) {
                  case "log":
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          "",
                        ])),
                      n,
                    );
                    break;
                  case "warn":
                    o("WALogger").WARN(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          "",
                        ])),
                      n,
                    );
                    break;
                  case "error":
                    o("WALogger").ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          "",
                        ])),
                      n,
                    );
                    break;
                }
              }),
              t.onError.add(function (n) {
                e.$1 === t &&
                  (o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] effects worker error",
                        ])),
                    )
                    .catching(r("getErrorSafe")(n)),
                  e.$27(e.$2 ? "failed" : "start_error"));
              }));
          }),
          (n.$29 = function (t, n) {
            if (!U(n, B())) {
              this.$34(t);
              return;
            }
            if (this.$17) {
              var e = q();
              e !== this.$18 &&
                ((this.$18 = e),
                t.postMessage({ type: "setImageBlur", strength: e }));
            } else !this.$16 && W() !== this.$19 && this.$37(t);
          }),
          (n.$34 = function (t) {
            var e = B(),
              n = this.$15 == null;
            ((this.$15 = e),
              (this.$17 = !1),
              (e.kind === "blur" || n) && this.$37(t),
              e.kind === "image" && this.$38(t, e));
          }),
          (n.$37 = function (t) {
            var e = W(),
              n = {
                kind: "blur",
                level: o("WAWebVoipBackgroundBlurStrength").getNearestBlurLevel(
                  e,
                ),
                strength: e,
              };
            (t.postMessage({ type: "setEffect", effect: n }), (this.$19 = e));
          }),
          (n.$38 = async function (t, n) {
            var e = this,
              a = function () {
                return e.$1 === t && e.$15 === n;
              };
            this.$16 = !0;
            var i, l;
            try {
              ((i = await o("WAWebVoipBackgroundImages").getBackgroundImage(
                n.id,
              )),
                (l = a() ? await z(i) : []));
            } catch (e) {
              if (!a()) return;
              ((this.$16 = !1),
                o("WAWebVoipBackgroundImages").isBackgroundImageUnusable(n.id)
                  ? (o("WALogger")
                      .WARN(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] background ",
                            " can't be shown, blurring instead",
                          ])),
                        n.id,
                      )
                      .catching(r("getErrorSafe")(e)),
                    o(
                      "WAWebVoipVideoEffectsState",
                    ).blurInsteadOfBackgroundImage())
                  : (o("WALogger")
                      .WARN(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] background ",
                            " didn't load, blurring until it does",
                          ])),
                        n.id,
                      )
                      .catching(r("getErrorSafe")(e)),
                    this.$37(t)));
              return;
            }
            var s = function () {
              for (var e of l) e.close();
            };
            if (!a()) {
              s();
              return;
            }
            this.$16 = !1;
            var u = q(),
              c = {
                blur: u,
                columns: i.columns,
                kind: "image",
                rows: i.rows,
                tiles: l,
              };
            try {
              t.postMessage({ type: "setEffect", effect: c }, Array.from(l));
            } catch (e) {
              (s(),
                o("WALogger")
                  .ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] could not send background ",
                        " to the worker",
                      ])),
                    n.id,
                  )
                  .catching(r("getErrorSafe")(e)));
              return;
            }
            ((this.$17 = !0),
              (this.$18 = u),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] showing background ",
                    "",
                  ])),
                n.id,
              ));
          }),
          (n.$23 = function (t) {
            var e = this.$1,
              n = this.$15;
            e != null &&
              (n == null ? void 0 : n.kind) === "image" &&
              n.id === t &&
              !this.$16 &&
              !this.$17 &&
              this.$38(e, n);
          }),
          (n.$36 = function (t, n) {
            var e = this.$12.get(t);
            return e == null
              ? (n == null || n.close(), null)
              : (this.$12.delete(t),
                self.clearTimeout(e.timeoutId),
                e.resolve(n),
                e.sentAtMs);
          }),
          (n.$30 = function () {
            !this.$3 && this.$12.size === 0 && this.$39(this.$20.take());
          }),
          (n.$39 = function (t) {
            if (t != null) {
              var e = function (t) {
                return t.toFixed(1);
              };
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] ",
                    " frames in ",
                    " s, ",
                    " segmented, ",
                    " failed; worker ",
                    " ms avg, ",
                    " ms segmenting, ",
                    " ms max; round trip ",
                    " ms avg, ",
                    " ms max",
                  ])),
                t.frames,
                e(t.spanMs / 1e3),
                t.segmented,
                t.failed,
                e(t.averageWorkerMs),
                e(t.averageSegmentedMs),
                e(t.maxWorkerMs),
                e(t.averageRoundTripMs),
                e(t.maxRoundTripMs),
              );
            }
          }),
          (n.$27 = function (t) {
            var e = this.$31();
            (this.$35(),
              e
                ? o("WAWebVoipVideoEffectsState").stopVideoEffects(t)
                : this.$26());
          }),
          (n.$35 = function () {
            this.$39(this.$20.take());
            var e = this.$1;
            ((this.$1 = null),
              (this.$2 = !1),
              (this.$15 = null),
              (this.$16 = !1),
              (this.$17 = !1),
              (this.$14 = 0),
              this.$21.reset(),
              this.$32());
            var t = Array.from(this.$12.values());
            (this.$12.clear(),
              t.forEach(function (e) {
                var t = e.resolve,
                  n = e.timeoutId;
                (self.clearTimeout(n), t(null));
              }),
              e == null || e.close());
          }),
          (n.$28 = function () {
            var e = this,
              t =
                this.$1 != null ||
                this.$5 ||
                o(
                  "WAWebVoipVideoEffectsState",
                ).hasVideoEffectsChoiceToRestore();
            t && this.$11 == null
              ? (this.$11 = self.setInterval(function () {
                  return e.$40();
                }, w))
              : !t &&
                this.$11 != null &&
                (self.clearInterval(this.$11), (this.$11 = null));
          }),
          (n.$40 = function () {
            var e = O();
            (this.$39(this.$20.takeIfDue(e)),
              this.$5 &&
                this.$12.size === 0 &&
                e - this.$8 > P &&
                ((this.$5 = !1), this.$39(this.$20.take()), this.$26()),
              !this.$5 && (this.$6 || e - this.$8 >= N) && this.$24(),
              this.$1 != null &&
                !this.$31() &&
                e - this.$9 > M &&
                (o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [effects] stopping the idle effects worker",
                    ])),
                ),
                o("WAWebVoipVideoEffectsODS").logVideoEffects(
                  "worker_idle_stop",
                ),
                this.$35(),
                this.$26()),
              this.$28());
          }),
          (n.$24 = function () {
            ((this.$6 = !1),
              (this.$7 = !1),
              o(
                "WAWebVoipVideoEffectsState",
              ).restoreRememberedVideoEffectsChoice());
          }),
          (n.$32 = function () {
            this.$10 != null &&
              (self.clearTimeout(this.$10), (this.$10 = null));
          }),
          t
        );
      })(),
      G = new H();
    async function z(e) {
      var t = await Promise.allSettled(
          e.tiles.map(function (e) {
            return createImageBitmap(e);
          }),
        ),
        n = t.flatMap(function (e) {
          return e.status === "fulfilled" ? [e.value] : [];
        });
      for (var o of t)
        if (o.status === "rejected") {
          for (var a of n) a.close();
          throw r("getErrorSafe")(o.reason);
        }
      return n;
    }
    ((l.WAWebVoipVideoEffectsProcessor = H), (l.videoEffectsProcessor = G));
  },
  98,
);
