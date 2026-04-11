__d(
  "WAWebMediaAnalyzer",
  [
    "WABlobToArrayBuffer",
    "WALogger",
    "WAResultOrError",
    "WAWebMediaGatingUtils",
    "WAWebMediaWorkerProxy",
    "WAWebSendMessageToMediaWorker",
    "WAWebWebcMediaAnalyzedWamEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
    function T(e, t) {
      return {
        type: "video/mp4",
        file: new Blob([e], { type: "video/mp4" }),
        isGif: t,
      };
    }
    var D = null;
    function x() {
      if (D == null) {
        var e = document.createElement("video"),
          t = [
            'video/mp4; codecs="hvc1.1.6.L93.B0"',
            'video/mp4; codecs="hev1.1.6.L93.B0"',
            'video/mp4; codecs="hvc1"',
            'video/mp4; codecs="hev1"',
          ];
        D = t.some(function (t) {
          return e.canPlayType(t) === "probably";
        });
      }
      return D;
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[transcodeToMp4AndCheckAndRepair] start transcode to mp4 and mp4RepairMux",
              ])),
          );
          var i = o("WAWebMediaGatingUtils").shouldUseWasmMediaWorkerForFile(t);
          if ((a.addAnnotations({ bool: { use_wasm_worker: i } }), i))
            try {
              a.addPoint("transcode_to_mp4_check_and_repair_start");
              var l = yield o("WABlobToArrayBuffer").blobToArrayBuffer(t),
                d = t.type,
                m = yield o("WAWebMediaWorkerProxy").transcodeToMp4InWorker({
                  input: new Uint8Array(l),
                  mimeType: d,
                  supportsHevc: x(),
                  eventFlow: {
                    addAnnotations: function (t) {
                      return a.addAnnotations(t);
                    },
                    addPoint: function (t, n) {
                      return a.addPoint(t, n);
                    },
                    flowDetails: a.flowDetails,
                  },
                });
              if (m.success)
                return (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[transcodeToMp4AndCheckAndRepair][success]",
                      ])),
                  ),
                  a.addPoint("transcode_to_mp4_check_and_repair_end"),
                  o("WAResultOrError").makeResult([T(m.value, n), !0])
                );
              (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeToMp4AndCheckAndRepair][error] transcode failed, falling back to checkAndRepair",
                  ])),
              ),
                a.addAnnotations({ string: { error: m.error } }),
                a.addPoint("transcode_to_mp4_check_and_repair_fail"));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[transcodeToMp4AndCheckAndRepair] got error!",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("transcode-to-mp4-error");
            }
          a.addAnnotations({ bool: { used_fallback: !0 } });
          var p = yield F(t, n, a).catch(function (e) {
            return o("WAResultOrError").makeError({
              error: "exception",
              errorDetail: r("getErrorSafe")(e).message,
            });
          });
          return p.success
            ? o("WAResultOrError").makeResult([p.value, !1])
            : o("WAResultOrError").makeError({
                error: p.error.error,
                errorDetail: p.error.errorDetail,
              });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[checkAndRepairAudio] start check and repair audio",
              ])),
          );
          var a = new (o(
              "WAWebWebcMediaAnalyzedWamEvent",
            ).WebcMediaAnalyzedWamEvent)(),
            i = !1;
          try {
            (n.addPoint("check_and_repair_audio_start"),
              n.addAnnotations({ bool: { use_wasm_worker: !1 } }));
            var l = yield F(e, t, n);
            return l.success
              ? ((i = l.value != null),
                n.addPoint("check_and_repair_audio_end"),
                o("WAResultOrError").makeResult([l.value, !1]))
              : o("WAResultOrError").makeError(l.error);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaAnalyzer:checkAndRepairAudio got error!",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("media-detection-error"),
              o("WAResultOrError").makeError({
                error: "check_and_repair_audio_exception",
                errorDetail: r("getErrorSafe")(e).message,
              })
            );
          } finally {
            var s = void 0;
            if (e instanceof File) {
              var u = e.name.split(".");
              u.length > 1 && (s = u[u.length - 1]);
            }
            (a.set({ webcMediaSupported: i, webcMediaExtensions: s }),
              a.markWebcMediaAnalyzeT(),
              a.commit());
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[checkAndRepair] start check and repair",
              ])),
          );
          var a = new (o(
              "WAWebWebcMediaAnalyzedWamEvent",
            ).WebcMediaAnalyzedWamEvent)(),
            i = !1;
          try {
            n.addPoint("check_and_repair_start");
            var l = o("WAWebMediaGatingUtils").shouldUseWasmMediaWorkerForFile(
              e,
            );
            if ((n.addAnnotations({ bool: { use_wasm_worker: l } }), l)) {
              n.addPoint("process_video_through_wasm_start");
              var s = yield B(e, t);
              return (
                n.addPoint("process_video_through_wasm_end"),
                s != null
                  ? ((i = !0), o("WAResultOrError").makeResult([s, !0]))
                  : o("WAResultOrError").makeError({
                      error: "process_video_through_wasm_null_result",
                    })
              );
            }
            n.addPoint("send_message_to_media_worker_start");
            var u = { type: "prep", file: e, asGif: t },
              c = yield o(
                "WAWebSendMessageToMediaWorker",
              ).sendMessageToMediaWorker(u),
              d = c.error,
              m = c.file,
              C = c.filename,
              b = c.result,
              v = c.type;
            (n.addPoint("send_message_to_media_worker_end"),
              n.addAnnotations({ string: { worker_response_type: v } }));
            e: {
              if (v === "result") {
                return (
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAnalyzer:checkAndRepair approved file",
                      ])),
                  ),
                  (i = !!b),
                  n.addPoint("check_and_repair_end"),
                  o("WAResultOrError").makeResult([b, !1])
                );
                break e;
              }
              if (v === "parsingError") {
                return (
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "trouble parsing file ",
                        " (fossil ",
                        ") ",
                        "",
                      ])),
                    m,
                    C,
                    String(d),
                  ),
                  m &&
                    o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "MediaAnalyzer:checkAndRepair got parsing error! ",
                            "",
                          ])),
                        String(d),
                      )
                      .sendLogs("media-parsing-error"),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAnalyzer:checkAndRepair rejected file (",
                        ")",
                      ])),
                    String(d),
                  ),
                  o("WAResultOrError").makeError({
                    error: "parsing_error",
                    errorDetail: String(d),
                  })
                );
                break e;
              }
              return o("WAResultOrError").makeError({
                error: "unhandled_type",
              });
            }
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaAnalyzer:checkAndRepair got error!",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("media-detection-error"),
              o("WAResultOrError").makeError({
                error: "check_and_repair_exception",
                errorDetail: r("getErrorSafe")(e).message,
              })
            );
          } finally {
            if (a) {
              var S = void 0;
              if (e.name) {
                var R = e.name.split(".");
                R.length > 1 && (S = R[R.length - 1]);
              }
              (a.set({ webcMediaSupported: i, webcMediaExtensions: S }),
                a.markWebcMediaAnalyzeT(),
                a.commit());
            }
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n.addPoint("send_message_to_media_worker_start");
          var r = { type: "prep", file: e, asGif: t },
            a = yield o(
              "WAWebSendMessageToMediaWorker",
            ).sendMessageToMediaWorker(r),
            i = a.error,
            l = a.file,
            s = a.filename,
            u = a.result,
            c = a.type;
          (n.addPoint("send_message_to_media_worker_end"),
            n.addAnnotations({ string: { worker_response_type: c } }));
          e: {
            if (c === "result") {
              return (
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaAnalyzer:checkAndRepair approved file",
                    ])),
                ),
                o("WAResultOrError").makeResult(u)
              );
              break e;
            }
            if (c === "parsingError") {
              var d = String(i);
              return (
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "trouble parsing file ",
                      " (fossil ",
                      ") ",
                      "",
                    ])),
                  l,
                  s,
                  d,
                ),
                l &&
                  o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "MediaAnalyzer:checkAndRepair got parsing error! ",
                          "",
                        ])),
                      d,
                    )
                    .sendLogs("media-parsing-error"),
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaAnalyzer:checkAndRepair rejected file (",
                      ")",
                    ])),
                  d,
                ),
                o("WAResultOrError").makeError({
                  error: "parsing_error",
                  errorDetail: d,
                })
              );
              break e;
            }
            return o("WAResultOrError").makeError({ error: "unhandled_type" });
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[processVideoThroughWasm] start process video through wasm",
              ])),
          );
          var n = yield e.arrayBuffer(),
            r = yield o("WAWebMediaWorkerProxy").mp4RepairMuxInWorker({
              input: new Uint8Array(n),
              eventFlow: null,
            });
          if (r.success)
            return (
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[processVideoThroughWasm][success]",
                  ])),
              ),
              T(r.value, t)
            );
          switch (r.error) {
            case "undefined-operation":
            case "worker-connection-runtime-error":
            case "invalid-media":
            case "runtime-error":
            case "internal-error":
              o("WALogger").WARN(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[processVideoThroughWasm][error] failed to repair video file",
                  ])),
              );
              break;
            case "worker-connection-timeout":
              o("WALogger")
                .ERROR(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[processVideoThroughWasm][error] error ",
                      "",
                    ])),
                  r.error,
                )
                .sendLogs("worker-connection-timeout-error");
              break;
            default:
              (r.error,
                o("WALogger")
                  .ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[processVideoThroughWasm][error] unrecognised error ",
                        "",
                      ])),
                    r.error,
                  )
                  .sendLogs("media-analyzer-unrecognised-error"));
              break;
          }
        })),
        W.apply(this, arguments)
      );
    }
    ((l.transcodeToMp4AndMp4RepairMux = $),
      (l.checkAndRepairAudio = N),
      (l.checkAndRepair = w));
  },
  98,
);
