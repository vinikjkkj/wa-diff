__d(
  "WAWebMLModelFetcher",
  [
    "Promise",
    "WALogger",
    "WAWebMLModelDownloader",
    "WAWebMLModelMetadataFetcher",
    "WAWebMLPostProcessingManager",
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
      p = "WAWebMLModelFetcher";
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          if (t.length === 0) return { failed: [], successful: [] };
          var i = [],
            l = [],
            _ = yield o("WAWebMLModelMetadataFetcher").fetchModelMetadata(t, r);
          if (_.type === "error") {
            for (var f of t) l.push({ error: _.error, request: f });
            return { failed: l, successful: i };
          }
          var g = new Map();
          for (var h of _.results) {
            var y,
              C =
                h.request.name +
                ":v" +
                ((y = h.request.version) != null ? y : "unknown");
            g.set(C, h);
          }
          for (var b of t) {
            var v,
              S = b.name + ":v" + ((v = b.version) != null ? v : "unknown");
            g.has(S) ||
              l.push({
                error: {
                  type: "model-not-found",
                  reason: "Metadata not found in batch response",
                },
                request: b,
              });
          }
          var R = [],
            L = [],
            E = [],
            k = [],
            I = Array.from(g.values()).map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t.metadata,
                      r = t.request;
                    try {
                      var s, u, c;
                      if (n.url == null) {
                        if (R.length < 3) {
                          var d;
                          R.push(
                            r.name +
                              " v" +
                              ((d = r.version) != null ? d : "unknown"),
                          );
                        }
                        l.push({
                          error: {
                            type: "download-error",
                            reason: "Missing URL in metadata",
                          },
                          request: r,
                        });
                        return;
                      }
                      var m = yield o(
                        "WAWebMLModelDownloader",
                      ).downloadModelBinary(n.url);
                      if (!m.success) {
                        l.push({
                          error: { type: "download-error", reason: m.error },
                          request: r,
                        });
                        return;
                      }
                      var _ = m.value,
                        f = null,
                        g = null,
                        h = a == null ? void 0 : a.hashCheckDeterminer,
                        y =
                          (s = a == null ? void 0 : a.shouldSkipHashCheck) !=
                          null
                            ? s
                            : !0;
                      if (h != null && r.version != null) {
                        var C = h(r.version, y, n.source_content_hash);
                        if (C.type === "error") {
                          if (L.length < 3) {
                            var b;
                            L.push(
                              r.name +
                                " v" +
                                ((b = r.version) != null ? b : "unknown") +
                                ": " +
                                C.reason,
                            );
                          }
                          l.push({
                            error: { type: "hash-not-found", reason: C.reason },
                            request: r,
                          });
                          return;
                        }
                        C.type === "use-sha256"
                          ? (f = C.sha256Hash)
                          : C.type === "use-md5" && (g = C.md5Hash);
                      }
                      var v = {
                          modelName: r.name,
                          version: (u = r.version) != null ? u : 0,
                          compressionType:
                            (c = n.compression_type) != null ? c : "NONE",
                          expectedHash: f,
                          expectedMd5Hash: g,
                        },
                        S = yield o(
                          "WAWebMLPostProcessingManager",
                        ).processDownloadedModel(_, v);
                      if (!S.success) {
                        if (E.length < 3) {
                          var I;
                          E.push(
                            r.name +
                              " v" +
                              ((I = r.version) != null ? I : "unknown") +
                              ": " +
                              S.error,
                          );
                        }
                        l.push({
                          error: { type: "download-error", reason: S.error },
                          request: r,
                        });
                        return;
                      }
                      var T = S.value;
                      if (r.version == null) {
                        (k.length < 3 && k.push(r.name),
                          l.push({
                            error: {
                              type: "download-error",
                              reason:
                                "Model version is required but was not provided",
                            },
                            request: r,
                          }));
                        return;
                      }
                      var D = {
                        modelName: r.name,
                        version: r.version,
                        data: T,
                      };
                      i.push(D);
                    } catch (t) {
                      (o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": Unexpected error for ",
                            " v",
                            ": ",
                            "",
                          ])),
                        p,
                        r.name,
                        r.version,
                        t instanceof Error ? t.message : String(t),
                      ),
                        l.push({
                          error: {
                            type: "unknown-error",
                            reason:
                              t instanceof Error
                                ? t.message
                                : "Unexpected error",
                          },
                          request: r,
                        }));
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
          return (
            yield (m || (m = n("Promise"))).all(I),
            R.length > 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Missing URL for ",
                    " models => ",
                    "",
                  ])),
                p,
                R.length,
                R,
              ),
            L.length > 0 &&
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Hash check determination failed for ",
                    " models => ",
                    "",
                  ])),
                p,
                L.length,
                L,
              ),
            E.length > 0 &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Post-processing failed for ",
                    " models => ",
                    "",
                  ])),
                p,
                E.length,
                E,
              ),
            k.length > 0 &&
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Missing version for ",
                    " models => ",
                    "",
                  ])),
                p,
                k.length,
                k,
              ),
            { failed: l, successful: i }
          );
        })),
        f.apply(this, arguments)
      );
    }
    l.fetchMLModelsFromNetwork = _;
  },
  98,
);
