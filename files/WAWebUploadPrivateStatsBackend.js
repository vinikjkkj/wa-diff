__d(
  "WAWebUploadPrivateStatsBackend",
  [
    "WABackoffUtils",
    "WABase64",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebIssuePrivateStatsToken",
    "WAWebNetworkStatus",
    "WAWebPsBufferUploadWamEvent",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumPsBufferUploadResult",
    "privateStatsUpload",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = new Uint8Array(o("WABase64").decodeB64(e));
      return d(t, async function (e) {
        var r = await o("privateStatsUpload").upload_UNSAFE_INTERNAL_DO_NOT_USE(
            [{ key: t, content: n }],
            o("WAWebIssuePrivateStatsToken").getToken,
          ),
          a = r.metrics,
          i = r.uploadedBufferKeys;
        (a.map(c), i.length === 0 && e(t), e(void 0));
      });
    }
    function u(e) {
      return e === "success"
        ? o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.SUCCESS
        : e === "error-server-other"
          ? o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT
              .ERROR_SERVER_OTHER
          : e === "error-parsing"
            ? o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT
                .ERROR_PARSING
            : e === "error-decoding"
              ? o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT
                  .ERROR_DECODING
              : e === "error-credential"
                ? o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT
                    .ERROR_CREDENTIAL
                : e === "error-other"
                  ? o("WAWebWamEnumPsBufferUploadResult")
                      .PS_BUFFER_UPLOAD_RESULT.ERROR_OTHER
                  : e === "error-access-token"
                    ? o("WAWebWamEnumPsBufferUploadResult")
                        .PS_BUFFER_UPLOAD_RESULT.ERROR_ACCESS_TOKEN
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function c(e) {
      var t = e.httpResponseCode,
        n = e.result,
        r = e.uploadTime,
        a = u(n);
      new (o("WAWebPsBufferUploadWamEvent").PsBufferUploadWamEvent)({
        psBufferUploadResult: a,
        psBufferUploadT: r,
        psBufferUploadHttpResponseCode: t,
        applicationState:
          document.visibilityState === "visible"
            ? o("WAWebWamEnumApplicationState").APPLICATION_STATE.FOREGROUND
            : o("WAWebWamEnumApplicationState").APPLICATION_STATE.BACKGROUND,
      }).commit();
    }
    function d(t, n) {
      return o("WAPromiseLoop").promiseLoop(async function (a, i, l) {
        var s = o("WAPromiseDelays").delayMs(
          o("WABackoffUtils").expBackoff(l, 12e4, 1e3, 0.1),
        );
        try {
          return (await r("WAWebNetworkStatus").waitIfOffline(), await n(a));
        } catch (n) {
          return l > 1
            ? (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] sendLogs failure error: ",
                    "",
                  ])),
                String(n),
              ),
              a(t))
            : s;
        }
      });
    }
    l.default = s;
  },
  98,
);
