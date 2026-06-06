__d(
  "privateStatsUpload",
  [
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WAPromiseRetryLoop",
    "WATimeUtils",
    "WAWamStorage",
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
      g = "https://dit.whatsapp.net/deidentified_telemetry",
      h = "245118376424571|3e7d275052f1522bf3200afcf53841a7",
      y = 0,
      C = "WAMEventBuffer.dat",
      b = 3,
      v = 9,
      S = 111e3,
      R = 3067002,
      L = 3067003,
      E = 3067004;
    function k(e) {
      return {
        result: e.result,
        httpResponseCode: e.httpResponseCode,
        uploadTime: o("WATimeUtils").monotonicTimeSince(e.uploadStartTime),
      };
    }
    async function I(t, n, r, a) {
      if (
        (await o("WAWamStorage").privateStatsKillSwitchGetBlockedToken()) === h
      )
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Removing private stats buffer without submitting it (kill switch)",
              ])),
          ),
          o("WAWamStorage")
            .removeBufferByKey(r.key)
            .then(function () {
              t();
            })
        );
      var i = o("WATimeUtils").monotonicTime(),
        l = await a();
      if (l == null) {
        (o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Couldn't get token to submit a private stats buffer",
            ])),
        ),
          t());
        return;
      }
      var d = new FormData();
      d.append("access_token", h);
      var m = await o("WACryptoHmac").hmacSha256(l.sharedSecret, r.content),
        p = o("WABase64").encodeB64UrlSafe(l.token, !0),
        _ = o("WABase64").encodeB64UrlSafe(m, !0),
        f = p + "+" + _;
      (d.append("credential", f),
        d.append(
          "message",
          new Blob([r.content], { type: "application/octet-stream" }),
          C,
        ),
        d.append(
          "meta_data",
          JSON.stringify({ t: o("WATimeUtils").unixTime(), p: y }),
        ));
      var b = {
          method: "POST",
          body: d,
          "Content-Type": "multipart/form-data",
        },
        v;
      try {
        v = await fetch(g, b);
      } catch (e) {
        (o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Upload of a private stats buffer failed: ",
              "",
            ])),
          e,
        ),
          n({ uploadStartTime: i, result: "error-other" }));
        return;
      }
      var S = v.status,
        R = function (n) {
          t({ uploadStartTime: i, httpResponseCode: S, result: n });
        },
        L = function (t) {
          n({ uploadStartTime: i, httpResponseCode: S, result: t });
        };
      switch (S) {
        case 200:
          return o("WAWamStorage")
            .removeBufferByKey(r.key)
            .then(function () {
              R("success");
            });
        case 429:
          R("error-server-other");
          return;
        case 401:
          return Promise.all([
            o("WAWamStorage").privateStatsKillSwitchSet(h),
            o("WAWamStorage").removeBufferByKey(r.key),
          ]).then(function () {
            R("error-access-token");
          });
        case 400: {
          var E = await T(v),
            k = E.result,
            I = E.shouldRetry,
            D = { uploadStartTime: i, httpResponseCode: S, result: k };
          I === "retry" ? n(D) : t(D);
          return;
        }
        case 500:
          L("error-server-other");
          return;
      }
      (o("WALogger").WARN(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "Unsupported response status code from PrivateStats upload request: ",
            "",
          ])),
        S,
      ),
        L("error-other"));
    }
    async function T(e) {
      var t = await e.json().catch(function () {});
      if (typeof t != "object")
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Unable to parse error response 400 from PrivateStats upload request or parsed response is not an object",
              ])),
          ),
          { result: "error-other", shouldRetry: "retry" }
        );
      var n = t.error;
      if (typeof n != "object")
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Incorrect or missing error entry in the error response 400 from PrivateStats upload request",
              ])),
          ),
          { result: "error-other", shouldRetry: "retry" }
        );
      var r = n.code,
        a = n.error_subcode;
      if (typeof r != "number" || typeof a != "number")
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Incorrect code or subcode in the error response 400 from PrivateStats upload request",
              ])),
          ),
          { result: "error-other", shouldRetry: "retry" }
        );
      switch (r) {
        case v:
          return { result: "error-server-other", shouldRetry: "no-retry" };
        case S:
          switch (a) {
            case R:
              return { result: "error-parsing", shouldRetry: "retry" };
            case L:
              return { result: "error-decoding", shouldRetry: "retry" };
            case E:
              return { result: "error-credential", shouldRetry: "retry" };
            default:
              return (
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported subcode value in the error response 400 from PrivateStats upload request: ",
                      "",
                    ])),
                  a,
                ),
                { result: "error-other", shouldRetry: "retry" }
              );
          }
        default:
          return (
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "Unsupported code value in the error response 400 from PrivateStats upload request: ",
                  "",
                ])),
              r,
            ),
            { result: "error-other", shouldRetry: "retry" }
          );
      }
    }
    function D(e, t) {
      var n = e.map(function (e) {
        var n = b,
          r = [],
          a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
            name: "uploadPrivateStatsBuffer",
            timer: { algo: { type: "exponential", first: 250 }, max: 1e3 },
            code: function (a) {
              return I(
                a,
                function (e) {
                  var t = k(e);
                  (r.push(t), n <= 0 ? a() : n--);
                },
                e,
                t,
              );
            },
          });
        return (
          a.start(),
          a.promise().then(function (t) {
            if (t != null) {
              var n = k(t);
              r.push(n);
            }
            return {
              uploadedBufferKey:
                (t == null ? void 0 : t.result) === "success" ? e.key : null,
              metrics: r,
            };
          })
        );
      });
      return Promise.all(n).then(function (e) {
        var t = e.reduce(function (e, t) {
            return (e.push.apply(e, t.metrics), e);
          }, []),
          n = e.reduce(function (e, t) {
            return (
              t.uploadedBufferKey != null && e.push(t.uploadedBufferKey),
              e
            );
          }, []);
        return { uploadedBufferKeys: n, metrics: t };
      });
    }
    l.upload_UNSAFE_INTERNAL_DO_NOT_USE = D;
  },
  98,
);
