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
    "WAWebNoop",
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
      _ = 1e4,
      f = 3e3,
      g = 12e3;
    function h(t, n) {
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
    function y(e) {
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
          h("internal error while writing metadata");
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
    var C = {
        broken: h,
        failure: y,
        deadline: function (t) {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-sgi] provenance marker not written: ",
                  " deadline exceeded",
                ])),
              t,
            )
            .sendLogs("media-sgi-provenance-marker-failed");
        },
        embedded: function (t) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[media-sgi] embedded provenance marker type=",
                "",
              ])),
            t,
          );
        },
      },
      b = {
        broken: (p = r("WAWebNoop")),
        failure: p,
        deadline: p,
        embedded: p,
      };
    function v(e) {
      return e ? C : b;
    }
    function S(e) {
      return e === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ? g : f;
    }
    function R(e) {
      return e.mediaBlob instanceof r("WAWebMediaOpaqueData")
        ? e.mediaBlob.formData()
        : e.mediaBlob;
    }
    function L(e, t, n) {
      return new (r("WAWebMediaData"))(
        babelHelpers.extends({}, e.serialize(), {
          filehash: n,
          mediaBlob: t,
          size: t.size,
        }),
      );
    }
    async function E(e, t, n, r) {
      var a = R(e);
      if (a == null) return e;
      var i = e.mimetype,
        l = await o("WAWebMediaWorkerProxy").writeMediaMetadataInWorker({
          fields: t,
          hints: i != null && i !== "" ? [i] : [],
          input: await a.arrayBuffer(),
          logProvenanceDetails: r,
          timeoutMs: S(e.type),
        });
      if (n.current) return e;
      if (!l.success) return (v(r).failure(l.error), e);
      var s = new Blob([l.value], { type: a.type }),
        u = await o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(
          s,
        );
      return u == null || u === ""
        ? (v(r).broken("filehash of the marked media was empty"), e)
        : n.current
          ? e
          : (v(r).embedded(e.type), L(e, s, u));
    }
    async function k(e) {
      var t = e.isChannel,
        n = e.media,
        a = e.resolveSystemProvenance;
      if (!o("WAWebMediaProvenanceWriteGate").isMarkableMediaType(n.type))
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
          _,
        );
        return u == null
          ? n
          : ((s = "write"),
            await o("WAPromiseTimeout").promiseTimeout(
              E(n, u, i, t),
              S(n.type),
            ));
      } catch (e) {
        return e instanceof o("WACustomError").TimeoutError
          ? ((i.current = !0), v(t).deadline(s), n)
          : (v(t).broken("unexpected exception", r("getErrorSafe")(e)), n);
      }
    }
    ((l.VERDICT_DEADLINE_MS = _),
      (l.IMAGE_WRITE_DEADLINE_MS = f),
      (l.VIDEO_WRITE_DEADLINE_MS = g),
      (l.writeMediaMetadataForSend = k));
  },
  98,
);
