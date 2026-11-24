__d(
  "WAWebMediaSendMetadataWriter",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaData",
    "WAWebMediaOpaqueData",
    "WAWebMediaProvenanceWriteGate",
    "WAWebMediaTypes",
    "WAWebMediaWorkerProxy",
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
      p = 1e4,
      _ = 3e3,
      f = 12e3;
    function g(t, n) {
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
    function h(e) {
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
          g("internal error while writing metadata");
          break e;
        }
        if (e === "unsupported-field-set") {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[media-sgi] provenance marker not written: the loaded kscli.wasm needs a digital source type",
              ])),
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function y(e) {
      return e === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ? f : _;
    }
    function C(e) {
      return e.mediaBlob instanceof r("WAWebMediaOpaqueData")
        ? e.mediaBlob.formData()
        : e.mediaBlob;
    }
    function b(e, t, n) {
      return new (r("WAWebMediaData"))(
        babelHelpers.extends({}, e.serialize(), {
          filehash: n,
          mediaBlob: t,
          size: t.size,
        }),
      );
    }
    async function v(e, t, n) {
      var r = C(e);
      if (r == null) return e;
      var a = e.mimetype,
        i = await o("WAWebMediaWorkerProxy").writeMediaMetadataInWorker({
          fields: t,
          hints: a != null && a !== "" ? [a] : [],
          input: await r.arrayBuffer(),
          timeoutMs: y(e.type),
        });
      if (n.current) return e;
      if (!i.success) return (h(i.error), e);
      var l = new Blob([i.value], { type: r.type }),
        s = await o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(
          l,
        );
      return s == null || s === ""
        ? (g("filehash of the marked media was empty"), e)
        : n.current
          ? e
          : (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-sgi] embedded provenance marker type=",
                  "",
                ])),
              e.type,
            ),
            b(e, l, s));
    }
    async function S(e) {
      var t = e.isChannel,
        n = e.media,
        a = e.resolveSystemProvenance;
      if (!t || !o("WAWebMediaProvenanceWriteGate").isMarkableMediaType(n.type))
        return n;
      var i = { current: !1 },
        l = async function () {
          var e = await a();
          return i.current ? null : e;
        },
        s = "verdict";
      try {
        var u = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebMediaProvenanceWriteGate").fieldsToEmbed({
            isChannel: t,
            mediaType: n.type,
            resolveSystemProvenance: l,
          }),
          p,
        );
        return u == null
          ? n
          : ((s = "write"),
            await o("WAPromiseTimeout").promiseTimeout(v(n, u, i), y(n.type)));
      } catch (e) {
        return e instanceof o("WACustomError").TimeoutError
          ? ((i.current = !0),
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-sgi] provenance marker not written: ",
                    " deadline exceeded",
                  ])),
                s,
              )
              .sendLogs("media-sgi-provenance-marker-failed"),
            n)
          : (g("unexpected exception", r("getErrorSafe")(e)), n);
      }
    }
    ((l.VERDICT_DEADLINE_MS = p),
      (l.IMAGE_WRITE_DEADLINE_MS = _),
      (l.VIDEO_WRITE_DEADLINE_MS = f),
      (l.writeMediaMetadataForSend = S));
  },
  98,
);
