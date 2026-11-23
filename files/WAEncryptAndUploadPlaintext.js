__d(
  "WAEncryptAndUploadPlaintext",
  [
    "MAWCastToMsgrServerMediaType",
    "MIHttpResumeCheck",
    "MIHttpUploadMedia",
    "MIMediaUrl",
    "WABase64",
    "WAErrorMessage",
    "WAGlobals",
    "WAHttpRegularUploadMedia",
    "WAHttpResumeCheck",
    "WALogger",
    "WAMediaCrypto",
    "WAMediaUrl",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
    "gkx",
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
      g = 2;
    async function h(t) {
      var n = t.fromOffset,
        a = n === void 0 ? 0 : n,
        i = t.mediaKey,
        l = t.mediaKeyTimestamp,
        h = t.mediaUploadFlow,
        y = t.onCiphertext,
        C = t.plaintext,
        b = t.plaintextHash,
        v = t.serverMediaType,
        S = t.uploadRetrier,
        R = t.uploadToken;
      (h.addPoint("encrypt_and_upload_plaintext_start"),
        h.addPoint("compute_media_keys_start"));
      var L =
          v === "preview"
            ? await o("WAMediaCrypto").computeMediaKeysForPreview(i)
            : await o("WAMediaCrypto").computeMediaKeys(i, v),
        E = L.cipherKey,
        k = L.hmacKey,
        I = L.iv;
      (h.addPoint("compute_media_keys_end"),
        h.addPoint("encrypt_and_hmac_start"));
      var T = await o("WAMediaCrypto").encryptAndHmac(E, I, k, C, v),
        D = T.ciphertext,
        x = T.ciphertextHash,
        $ = T.ivCiphertextHmac,
        P = T.sidecar;
      h.addPoint("encrypt_and_hmac_end");
      var N = null;
      if (v === "image") {
        h.addPoint("get_progressive_jpeg_details_start");
        var M = await o(
            "WAProgressiveJpegGetPJpegDetails",
          ).getProgressiveJpegDetails(new Uint8Array(C), $, k),
          w = o(
            "WAProgressiveJpegGetPJpegDetails",
          ).isValidProgressiveJpegDetails(M);
        w.success === !1
          ? (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndUploadPlaintext: Created invalid progressiveJpeg details during encrypt and upload: ",
                  "",
                ])),
              w.error,
            ),
            h.addPoint(w.error))
          : w.value === !0 &&
            o("WAGlobals").getConfig().isProgressiveJpegSendEnabled() &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndUploadPlaintext: Found valid progressiveJpeg details. Adding to media entry.",
                ])),
            ),
            (N = M),
            h.addPoint("get_progressive_jpeg_details_end"));
      }
      var A = {
          fileSha256: o("WABase64").decodeB64UrlSafe(b),
          fileEncSha256: x,
          mediaKey: i,
          mediaKeyTimestamp: l,
          serverMediaType: v,
          uploadToken: R,
          sidecar: P,
          progressiveJpegDetails: N,
          size: C.byteLength,
          filename: void 0,
          lastDownloadAttemptTimestamp: void 0,
          directPath: void 0,
        },
        F,
        O = r("gkx")("1921");
      (h.addAnnotations({ bool: { useMIUpload: O } }),
        O &&
          h.addAnnotations({
            bool: {
              mi_upload_same_origin: o("MIMediaUrl").isMIUploadSameOrigin(),
            },
          }));
      var B = await S.run(async function (e, t, n) {
        var r = e.domain,
          i = a,
          l = O && n >= g;
        if (n > 0) {
          h.addPoint("network_retry", { int: { network_retry_attempt: n } });
          try {
            h.addPoint("resume_check_start");
            var s = O
              ? await o("MIHttpResumeCheck").miHttpResumeCheck(
                  o("MIMediaUrl").buildMIUploadUrl(R, x, void 0, !0, l),
                )
              : await o("WAHttpResumeCheck").httpResumeCheck(
                  o("WAMediaUrl").buildUploadUrl(v, R, x, r, t, !0),
                );
            if (s.success) {
              h.addPoint("resume_check_end");
              var _ = s.value;
              if (_.type === "media-found")
                return (
                  h.addAnnotations({ bool: { existingMediaFound: !0 } }),
                  o("WAResultOrError").makeResult(
                    o("WAResultOrError").makeResult({
                      directPath: _.directPath,
                      objectId: null,
                      handle: null,
                    }),
                  )
                );
              _.type === "media-partial-found" && (i = _.resumeFromBytes);
            }
            h.addPoint("resume_check_fail", {
              string: { resume_check_error: s.error },
            });
          } catch (e) {
            (h.addPoint("resume_check_fail", {
              string: {
                resume_check_error:
                  o("WAErrorMessage").maybeGetMessageFromError(e),
              },
            }),
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndUploadPlaintext: error during retrier ",
                    "",
                  ])),
                e,
              ));
          }
        }
        i > 0 && i < D.byteLength
          ? (h.addAnnotations({
              int: { fromOffset: i },
              bool: { continuedFromOffset: !0 },
            }),
            (F = D.subarray(i)))
          : (F = D);
        function f() {
          if (O) {
            var e,
              n = o("MIMediaUrl").buildMIUploadUrl(R, x, i, !1, l);
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndUploadPlaintext: start MI upload media to ",
                    "",
                  ])),
                n,
              ),
              h.addPoint("http_upload_start"),
              o("MIHttpUploadMedia").miHttpUploadMedia(
                n,
                F,
                {
                  entityLength: D.byteLength,
                  entityName: encodeURIComponent(
                    o("WABase64").encodeB64UrlSafe(x),
                  ),
                  mediaType:
                    (e = o(
                      "MAWCastToMsgrServerMediaType",
                    ).castToMsgrServerMediaType(v)) != null
                      ? e
                      : "file",
                  offset: i,
                },
                h,
              )
            );
          } else {
            var a = o("WAMediaUrl").buildUploadUrl(v, R, x, r, t, !1, i);
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndUploadPlaintext: start upload media to ",
                    "",
                  ])),
                a,
              ),
              h.addPoint("http_upload_start"),
              o("WAHttpRegularUploadMedia").httpRegularUploadMedia(a, F)
            );
          }
        }
        var y = f();
        return y
          .then(function (e) {
            if (e.success)
              return (
                h.addPoint("http_upload_end", { int: { attempt: n } }),
                o("WAResultOrError").makeResult(e)
              );
            var t = e.error;
            switch (
              (h.addPoint("http_upload_fail", {
                string: { http_upload_error: t },
              }),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndUploadPlaintext error: ",
                    "",
                  ])),
                t,
              ),
              t)
            ) {
              case "server-timeout":
              case "unspecified-http-error":
                return o("WAResultOrError").makeError({ progressMade: !0 });
              default:
                return o("WAResultOrError").makeResult(
                  o("WAResultOrError").makeError(t),
                );
            }
          })
          .catch(function (e) {
            var t = o("WAErrorMessage").maybeGetMessageFromError(e);
            return (
              h.addPoint("http_upload_fail", {
                string: { http_upload_error: t },
              }),
              o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndUploadPlaintext error: ",
                    "",
                  ])),
                t,
              ),
              o("WAResultOrError").makeError({ progressMade: !1 })
            );
          });
      });
      if (B == null)
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndUploadPlaintext given up",
              ])),
          ),
          o("WAResultOrError").makeError("max-attempts-exceeded")
        );
      if (B.success === !1) return B;
      var W = B.value,
        q = W.directPath,
        U = W.handle,
        V = W.objectId,
        H = babelHelpers.extends({}, A, {
          directPath: q,
          handle: U,
          objectId: V,
        });
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "encryptAndUploadPlaintext: upload success ",
            " ",
            "",
          ])),
        { directPath: q },
        { objectId: V },
      ),
        y == null ||
          y({
            ciphertext: D.slice().buffer,
            mediaKey: i,
            mediaTypeDetails: { mediaType: v, type: "regular" },
            plaintextHash: b,
          }));
      var G = "undefined";
      return (
        V != null && (G = V.length > 60 ? "new" : "old"),
        h.addPoint("encrypt_and_upload_plaintext_end", {
          string: { object_id_type: G },
        }),
        o("WAResultOrError").makeResult(H)
      );
    }
    l.encryptAndUploadPlaintext = h;
  },
  98,
);
