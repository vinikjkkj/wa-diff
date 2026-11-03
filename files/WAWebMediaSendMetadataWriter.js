__d(
  "WAWebMediaSendMetadataWriter",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaOpaqueData",
    "WAWebMediaProvenanceWriteGate",
    "WAWebMediaTypes",
    "WAWebMediaWorkerProxy",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 1e4,
      p = 3e3,
      _ = 12e3;
    function f(t, n) {
      var r = o("WALogger").ERROR(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[media-sgi] provenance marker not written: ",
            "",
          ])),
        t,
      );
      (n != null ? r.catching(n) : r).sendLogs(
        "media-sgi-provenance-marker-broken",
      );
    }
    function g(e) {
      e: {
        if (e === "invalid-media") {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-sgi] provenance marker not written: media format not supported by the metadata writer",
                ])),
            )
            .sendLogs("media-sgi-provenance-marker-unsupported");
          break e;
        }
        if (e === "worker-error") {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-sgi] provenance marker not written: media worker failed or timed out while writing metadata",
                ])),
            )
            .sendLogs("media-sgi-provenance-marker-failed");
          break e;
        }
        if (e === "internal-error") {
          f("internal error while writing metadata");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function h(e) {
      return e === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ? _ : p;
    }
    function y(e) {
      return e.mediaBlob instanceof r("WAWebMediaOpaqueData")
        ? e.mediaBlob.formData()
        : e.mediaBlob;
    }
    function C(e, t, n) {
      (e.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
        e.mediaBlob.autorelease(),
        (e.mediaBlob = t),
        (e.size = t.size),
        (e.filehash = n));
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = y(e);
          if (r != null) {
            var a = e.mimetype,
              i = yield o("WAWebMediaWorkerProxy").writeMediaMetadataInWorker({
                fields: t,
                hints: a != null && a !== "" ? [a] : [],
                input: yield r.arrayBuffer(),
                timeoutMs: h(e.type),
              });
            if (!n.current) {
              if (!i.success) {
                g(i.error);
                return;
              }
              var l = new Blob([i.value], { type: r.type }),
                s = yield o(
                  "WAWebCryptoCalculateFilehash",
                ).calculateFilehashFromBlob(l);
              if (s == null || s === "") {
                f("filehash of the marked media was empty");
                return;
              }
              n.current ||
                (C(e, l, s),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-sgi] embedded provenance marker type=",
                      "",
                    ])),
                  e.type,
                ));
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isChannel,
            a = e.media,
            i = e.resolveVerdict;
          if (
            !(
              !t ||
              !o("WAWebMediaProvenanceWriteGate").isMarkableMediaType(a.type)
            )
          ) {
            var l = { current: !1 },
              s = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = yield i();
                    return l.current ? null : e;
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              u = "verdict";
            try {
              var c = yield o("WAPromiseTimeout").promiseTimeout(
                o("WAWebMediaProvenanceWriteGate").fieldsToEmbed({
                  isChannel: t,
                  mediaType: a.type,
                  resolveVerdict: s,
                }),
                m,
              );
              if (c.length === 0) return;
              ((u = "write"),
                yield o("WAPromiseTimeout").promiseTimeout(
                  b(a, c, l),
                  h(a.type),
                ));
            } catch (e) {
              if (e instanceof o("WACustomError").TimeoutError) {
                ((l.current = !0),
                  o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[media-sgi] provenance marker not written: ",
                          " deadline exceeded",
                        ])),
                      u,
                    )
                    .sendLogs("media-sgi-provenance-marker-failed"));
                return;
              }
              f("unexpected exception", r("getErrorSafe")(e));
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    ((l.VERDICT_DEADLINE_MS = m),
      (l.IMAGE_WRITE_DEADLINE_MS = p),
      (l.VIDEO_WRITE_DEADLINE_MS = _),
      (l.writeMediaMetadataForSend = S));
  },
  98,
);
