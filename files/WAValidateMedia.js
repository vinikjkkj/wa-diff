__d(
  "WAValidateMedia",
  [
    "FBLogger",
    "WAIsMp4",
    "WAIsOgg",
    "WAIsWebP",
    "WAKaleidoscopeClassify",
    "WAMp4Check",
    "WAParseWav",
    "WAResultOrError",
    "WAWebPCheck",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = function () {
        return r("FBLogger")("wmi").tags(["WAValidateMedia"]);
      };
    function m(t, n, a) {
      return (
        a === void 0 && (a = "document"),
        n.addPoint("media_validation_start"),
        (r("gkx")("3272") ? p(t, a, n) : _(t))
          .then(function (e) {
            return (
              e.success
                ? n.addPoint("media_validation_end", {
                    bool: {
                      is_validation_setup_failed: e.value.validationSetupFailed,
                      is_validation_skipped: e.value.skipValidation,
                    },
                    string: { validated_mime_type: e.value.mimeType },
                  })
                : n.addPoint("media_validation_fail", {
                    string: { validationError: e.error },
                  }),
              e
            );
          })
          .catch(function (a) {
            var i = r("getErrorSafe")(a);
            return (
              d()
                .catching(i)
                .MUSTFIX(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "validateMedia threw an exception: ",
                      "",
                    ])),
                  i.message,
                ),
              n.addPoint("media_validation_fail", {
                string: { validationError: i.message },
              }),
              o("WAResultOrError").makeResult({
                skipValidation: !0,
                mimeType: null,
                validatedPlaintext: t,
                validationSetupFailed: !0,
              })
            );
          })
      );
    }
    async function p(e, t, n) {
      n.addPoint("kaleidoscope_classify_start");
      var r = await o("WAKaleidoscopeClassify").kaleidoscopeClassifyByMediaType(
        e,
        t,
        null,
        {
          strictJpegScanValidationEnabled: !1,
          strictOggOpusValidationEnabled: !1,
          strictMp4ValidationEnabled: !1,
          zipArchiveCheckEnabled: !1,
          allowAv1VideoCodec: !1,
          claimedTypeValidationEnabled: !1,
          strictAacAdtsValidationEnabled: !1,
        },
      );
      if ((n.addPoint("kaleidoscope_classify_end"), !r.success))
        return (
          d().MUSTFIX(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "kaleidoscopeClassifyByMediaType failed with error: ",
                "",
              ])),
            r.error,
          ),
          o("WAResultOrError").makeError("runtime-error")
        );
      var a = r.value,
        i = a.mimetype,
        l = a.score;
      return l >= 80
        ? o("WAResultOrError").makeError("invalid-media")
        : o("WAResultOrError").makeResult({
            skipValidation: !1,
            mimeType: i,
            validatedPlaintext: e,
            validationSetupFailed: !1,
            isKaleidoscopeClassify: !0,
          });
    }
    function _(e) {
      var t = new Uint8Array(e);
      if (o("WAIsWebP").isWebP(t)) return h(e);
      if (o("WAIsMp4").isMp4(t)) return y(e);
      if (o("WAIsOgg").isOgg(t))
        return Promise.resolve(
          o("WAResultOrError").makeResult({
            skipValidation: !1,
            mimeType: "audio/ogg",
            validatedPlaintext: e,
            validationSetupFailed: !1,
            audioStreamReport: null,
          }),
        );
      var n = o("WAParseWav").validateWav(e);
      return n != null
        ? Promise.resolve(C(n))
        : Promise.resolve(
            o("WAResultOrError").makeResult({
              mimeType: null,
              skipValidation: !0,
              validatedPlaintext: e,
              validationSetupFailed: !1,
            }),
          );
    }
    var f = function (t) {
        t !== "" &&
          d().WARN(
            u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            t,
          );
      },
      g = function (t) {
        t !== "" &&
          d().DEBUG(
            c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            t,
          );
      };
    async function h(e) {
      var t = o("WAWebPCheck").createWebPCheck({
          getWasmModule: o("WAWebPCheck").getWebpCheckWasm,
          logError: f,
          logMessage: g,
        }),
        n = await t({ input: e });
      return n.success
        ? o("WAResultOrError").makeResult({
            skipValidation: !1,
            mimeType: "image/webp",
            validatedPlaintext: e,
            validationSetupFailed: !1,
          })
        : n;
    }
    async function y(e) {
      var t = o("WAMp4Check").createMp4Check({
          getWasmModule: o("WAMp4Check").getMp4CheckWasm,
          logError: f,
          logMessage: g,
        }),
        n = await t({ input: e });
      if (!n.success) return o("WAResultOrError").makeError(n.error);
      var r = n.value,
        a = r.audioStreamReport,
        i = r.videoStreamReport;
      return i == null
        ? a == null
          ? o("WAResultOrError").makeError("invalid-media")
          : o("WAResultOrError").makeResult({
              skipValidation: !1,
              mimeType: "audio/mp4",
              validatedPlaintext: e,
              validationSetupFailed: !1,
              audioStreamReport: a,
            })
        : o("WAResultOrError").makeResult({
            skipValidation: !1,
            mimeType: "video/mp4",
            validatedPlaintext: e,
            validationSetupFailed: !1,
            videoStreamReport: i,
            audioStreamReport: a,
          });
    }
    function C(e) {
      var t = o("WAParseWav").parseWav(e),
        n = t.numChannels,
        r = t.sampleRate;
      return o("WAResultOrError").makeResult({
        skipValidation: !1,
        mimeType: "audio/wav",
        validatedPlaintext: e,
        validationSetupFailed: !1,
        audioStreamReport: {
          streamType: "LPCM",
          samplingRate: r,
          numberOfChannels: n,
        },
      });
    }
    l.validateMedia = m;
  },
  98,
);
