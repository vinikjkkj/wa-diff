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
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
      return {
        type: "video/mp4",
        file: new Blob([e], { type: "video/mp4" }),
        isGif: t,
      };
    }
    var y = null;
    function C() {
      if (y == null) {
        var e = document.createElement("video"),
          t = [
            'video/mp4; codecs="hvc1.1.6.L93.B0"',
            'video/mp4; codecs="hev1.1.6.L93.B0"',
            'video/mp4; codecs="hvc1"',
            'video/mp4; codecs="hev1"',
          ];
        y = t.some(function (t) {
          return e.canPlayType(t) === "probably";
        });
      }
      return y;
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
                  supportsHevc: C(),
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
                  o("WAResultOrError").makeResult([h(m.value, n), !0])
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
          var p = yield L(t, n, a).catch(function (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            var l = yield L(e, t, n);
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
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "MediaAnalyzer:checkAndRepair got parsing error! ",
                          "",
                        ])),
                      d,
                    )
                    .sendLogs("media-parsing-error"),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
        E.apply(this, arguments)
      );
    }
    ((l.transcodeToMp4AndMp4RepairMux = b), (l.checkAndRepairAudio = S));
  },
  98,
);
