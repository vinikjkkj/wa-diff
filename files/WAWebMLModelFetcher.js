__d(
  "WAWebMLModelFetcher",
  [
    "WALogger",
    "WAWebMLModelDownloader",
    "WAWebMLModelMetadataFetcher",
    "WAWebMLPostProcessingManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "WAWebMLModelFetcher";
    async function p(t, n, r) {
      if (t.length === 0) return { failed: [], successful: [] };
      var a = [],
        i = [],
        l = await o("WAWebMLModelMetadataFetcher").fetchModelMetadata(t, n);
      if (l.type === "error") {
        for (var p of t) i.push({ error: l.error, request: p });
        return { failed: i, successful: a };
      }
      var _ = new Map();
      for (var f of l.results) {
        var g,
          h =
            f.request.name +
            ":v" +
            ((g = f.request.version) != null ? g : "unknown");
        _.set(h, f);
      }
      for (var y of t) {
        var C,
          b = y.name + ":v" + ((C = y.version) != null ? C : "unknown");
        _.has(b) ||
          i.push({
            error: {
              type: "model-not-found",
              reason: "Metadata not found in batch response",
            },
            request: y,
          });
      }
      var v = [],
        S = [],
        R = [],
        L = [],
        E = Array.from(_.values()).map(async function (t) {
          var n = t.metadata,
            l = t.request;
          try {
            var s, u, c;
            if (n.url == null) {
              if (v.length < 3) {
                var d;
                v.push(
                  l.name + " v" + ((d = l.version) != null ? d : "unknown"),
                );
              }
              i.push({
                error: {
                  type: "download-error",
                  reason: "Missing URL in metadata",
                },
                request: l,
              });
              return;
            }
            var p = await o("WAWebMLModelDownloader").downloadModelBinary(
              n.url,
            );
            if (!p.success) {
              i.push({
                error: { type: "download-error", reason: p.error },
                request: l,
              });
              return;
            }
            var _ = p.value,
              f = null,
              g = null,
              h = r == null ? void 0 : r.hashCheckDeterminer,
              y =
                (s = r == null ? void 0 : r.shouldSkipHashCheck) != null
                  ? s
                  : !0;
            if (h != null && l.version != null) {
              var C = h(l.version, y, n.source_content_hash);
              if (C.type === "error") {
                if (S.length < 3) {
                  var b;
                  S.push(
                    l.name +
                      " v" +
                      ((b = l.version) != null ? b : "unknown") +
                      ": " +
                      C.reason,
                  );
                }
                i.push({
                  error: { type: "hash-not-found", reason: C.reason },
                  request: l,
                });
                return;
              }
              C.type === "use-sha256"
                ? (f = C.sha256Hash)
                : C.type === "use-md5" && (g = C.md5Hash);
            }
            var E = {
                modelName: l.name,
                version: (u = l.version) != null ? u : 0,
                compressionType: (c = n.compression_type) != null ? c : "NONE",
                expectedHash: f,
                expectedMd5Hash: g,
              },
              k = await o(
                "WAWebMLPostProcessingManager",
              ).processDownloadedModel(_, E);
            if (!k.success) {
              if (R.length < 3) {
                var I;
                R.push(
                  l.name +
                    " v" +
                    ((I = l.version) != null ? I : "unknown") +
                    ": " +
                    k.error,
                );
              }
              i.push({
                error: { type: "download-error", reason: k.error },
                request: l,
              });
              return;
            }
            var T = k.value;
            if (l.version == null) {
              (L.length < 3 && L.push(l.name),
                i.push({
                  error: {
                    type: "download-error",
                    reason: "Model version is required but was not provided",
                  },
                  request: l,
                }));
              return;
            }
            var D = { modelName: l.name, version: l.version, data: T };
            a.push(D);
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
              m,
              l.name,
              l.version,
              t instanceof Error ? t.message : String(t),
            ),
              i.push({
                error: {
                  type: "unknown-error",
                  reason: t instanceof Error ? t.message : "Unexpected error",
                },
                request: l,
              }));
          }
        });
      return (
        await Promise.all(E),
        v.length > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": Missing URL for ",
                " models => ",
                "",
              ])),
            m,
            v.length,
            v,
          ),
        S.length > 0 &&
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": Hash check determination failed for ",
                " models => ",
                "",
              ])),
            m,
            S.length,
            S,
          ),
        R.length > 0 &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": Post-processing failed for ",
                " models => ",
                "",
              ])),
            m,
            R.length,
            R,
          ),
        L.length > 0 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": Missing version for ",
                " models => ",
                "",
              ])),
            m,
            L.length,
            L,
          ),
        { failed: i, successful: a }
      );
    }
    l.fetchMLModelsFromNetwork = p;
  },
  98,
);
