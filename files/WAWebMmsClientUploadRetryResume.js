__d(
  "WAWebMmsClientUploadRetryResume",
  [
    "WALogger",
    "WAWebHttpErrors",
    "WAWebMmsClientErrors",
    "WAWebMmsClientMmsCheckIfUploadExists",
    "WAWebMmsClientMmsUpload",
    "WAWebMmsMediaTypes",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 1e4,
      f = 1024 * 1024,
      g = new Set([
        o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
        o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
        o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
      ]),
      h = 415,
      y = !1;
    function C(e) {
      var t = e.byteLength,
        n = e.encFilehash,
        r = e.failCount,
        a = e.firstAttemptOffset,
        i = e.pollsUploadHosts,
        l = e.previousAttemptError,
        s = e.token,
        u = e.type;
      return (
        r === 1 &&
        l instanceof o("WAWebHttpErrors").HttpNetworkError &&
        !i &&
        (a != null ? a : 0) === 0 &&
        t >= f &&
        g.has(u) &&
        s === n &&
        S()
      );
    }
    async function b(t) {
      var n = await R(t);
      if (n > 0)
        try {
          return await E(t, n);
        } catch (n) {
          if (!v(n, t.signal)) throw n;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.upload: server rejected the resumed retry's file, sending the whole file",
              ])),
          ),
            I(t.uploadQpl, { bool: { retry_resume_fallback: !0 } }));
        }
      return E(t, 0);
    }
    function v(e, t) {
      return (
        !t.aborted &&
        e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
        e.status === h
      );
    }
    function S() {
      try {
        return r("gkx")("11606") === !0;
      } catch (e) {
        return (
          y ||
            ((y = !0),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "mms upload retry resume: gate read failed, treating it as off",
                ])),
            )),
          !1
        );
      }
    }
    async function R(e) {
      if (e.signal.aborted) return 0;
      var t = Date.now(),
        n = await L(e);
      if (e.signal.aborted) return 0;
      var r = typeof n == "number" && n < e.ciphertextHmac.byteLength ? n : 0;
      return (
        I(e.uploadQpl, {
          bool: {
            retry_resume_check_timed_out: n === "timed-out",
            retry_resume_fallback: !1,
          },
          int: {
            retry_resume_check_ms: Date.now() - t,
            retry_resume_offset_kb: Math.round(r / 1024),
          },
        }),
        r > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.upload: retry resumes from the server's count",
              ])),
          ),
        r
      );
    }
    async function L(e) {
      var t = e.signal,
        n = new AbortController(),
        a = !1,
        i = function () {
          n.abort();
        },
        l = self.setTimeout(function () {
          ((a = !0), i());
        }, _);
      t.addEventListener("abort", i, { once: !0 });
      try {
        var s = await r("WAWebMmsClientMmsCheckIfUploadExists")({
          auth: e.auth,
          encFilehash: e.encFilehash,
          generateThumbnailOnServer: e.generateThumbnailOnServer,
          hostname: e.hostname,
          mediaId: e.mediaId,
          signal: n.signal,
          token: e.token,
          type: e.type,
        });
        return s.complete || s.resume <= 0 ? "none" : s.resume;
      } catch (e) {
        return a
          ? (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "mmsClient.upload: retry resume check timed out",
                ])),
            ),
            "timed-out")
          : (t.aborted || k(e), "none");
      } finally {
        (self.clearTimeout(l), t.removeEventListener("abort", i));
      }
    }
    function E(e, t) {
      var n = e.ciphertextHmac,
        o = e.onProgress;
      return r("WAWebMmsClientMmsUpload")({
        auth: e.auth,
        ciphertextHmac: t > 0 ? new Uint8Array(n).subarray(t) : n,
        hostname: e.hostname,
        encFilehash: e.encFilehash,
        type: e.type,
        signal: e.signal,
        onProgress: function (n) {
          o(n, t);
        },
        byteRange: t > 0 ? { start: t, end: n.byteLength } : void 0,
        mediaId: e.mediaId,
        token: e.token,
        generateThumbnailOnServer: e.generateThumbnailOnServer,
      });
    }
    function k(e) {
      if (
        !(
          e instanceof o("WAWebMmsClientErrors").MediaNotFoundError ||
          e instanceof o("WAWebHttpErrors").HttpNetworkError
        )
      ) {
        if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError) {
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.upload: server answered the retry resume check with ",
                "",
              ])),
            e.status,
          );
          return;
        }
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.upload: retry resume check failed: ",
                "",
              ])),
            r("getErrorSafe")(e).name,
          )
          .sendLogs("upload-retry-resume-check-failed");
      }
    }
    function I(e, t) {
      try {
        e == null || e.addAnnotations(t);
      } catch (e) {
        o("WALogger").WARN(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "mmsClient.upload: retry resume annotation failed",
            ])),
        );
      }
    }
    ((l.RETRY_RESUME_MIN_BYTES = f),
      (l.shouldResumeUploadRetry = C),
      (l.uploadRetryFromServerCount = b));
  },
  98,
);
