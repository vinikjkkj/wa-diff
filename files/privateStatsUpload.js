__d(
  "privateStatsUpload",
  [
    "Promise",
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WAPromiseRetryLoop",
    "WATimeUtils",
    "WAWamStorage",
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
      p,
      _,
      f,
      g,
      h = "https://dit.whatsapp.net/deidentified_telemetry",
      y = "245118376424571|3e7d275052f1522bf3200afcf53841a7",
      C = 0,
      b = "WAMEventBuffer.dat",
      v = 3,
      S = 9,
      R = 111e3,
      L = 3067002,
      E = 3067003,
      k = 3067004;
    function I(e) {
      return {
        result: e.result,
        httpResponseCode: e.httpResponseCode,
        uploadTime: o("WATimeUtils").monotonicTimeSince(e.uploadStartTime),
      };
    }
    function T(e, t, n, r) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            if (
              (yield o(
                "WAWamStorage",
              ).privateStatsKillSwitchGetBlockedToken()) === y
            )
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Removing private stats buffer without submitting it (kill switch)",
                    ])),
                ),
                o("WAWamStorage")
                  .removeBufferByKey(a.key)
                  .then(function () {
                    t();
                  })
              );
            var l = o("WATimeUtils").monotonicTime(),
              d = yield i();
            if (d == null) {
              (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Couldn't get token to submit a private stats buffer",
                  ])),
              ),
                t());
              return;
            }
            var m = new FormData();
            m.append("access_token", y);
            var p = yield o("WACryptoHmac").hmacSha256(
                d.sharedSecret,
                a.content,
              ),
              _ = o("WABase64").encodeB64UrlSafe(d.token, !0),
              f = o("WABase64").encodeB64UrlSafe(p, !0),
              v = _ + "+" + f;
            (m.append("credential", v),
              m.append(
                "message",
                new Blob([a.content], { type: "application/octet-stream" }),
                b,
              ),
              m.append(
                "meta_data",
                JSON.stringify({ t: o("WATimeUtils").unixTime(), p: C }),
              ));
            var S = {
                method: "POST",
                body: m,
                "Content-Type": "multipart/form-data",
              },
              R;
            try {
              R = yield fetch(h, S);
            } catch (e) {
              (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Upload of a private stats buffer failed: ",
                    "",
                  ])),
                e,
              ),
                r({ uploadStartTime: l, result: "error-other" }));
              return;
            }
            var L = R.status,
              E = function (n) {
                t({ uploadStartTime: l, httpResponseCode: L, result: n });
              },
              k = function (t) {
                r({ uploadStartTime: l, httpResponseCode: L, result: t });
              };
            switch (L) {
              case 200:
                return o("WAWamStorage")
                  .removeBufferByKey(a.key)
                  .then(function () {
                    E("success");
                  });
              case 429:
                E("error-server-other");
                return;
              case 401:
                return (g || (g = n("Promise")))
                  .all([
                    o("WAWamStorage").privateStatsKillSwitchSet(y),
                    o("WAWamStorage").removeBufferByKey(a.key),
                  ])
                  .then(function () {
                    E("error-access-token");
                  });
              case 400: {
                var I = yield x(R),
                  T = I.result,
                  D = I.shouldRetry,
                  $ = { uploadStartTime: l, httpResponseCode: L, result: T };
                D === "retry" ? r($) : t($);
                return;
              }
              case 500:
                k("error-server-other");
                return;
            }
            (o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Unsupported response status code from PrivateStats upload request: ",
                  "",
                ])),
              L,
            ),
              k("error-other"));
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.json().catch(function () {});
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
            case S:
              return { result: "error-server-other", shouldRetry: "no-retry" };
            case R:
              switch (a) {
                case L:
                  return { result: "error-parsing", shouldRetry: "retry" };
                case E:
                  return { result: "error-decoding", shouldRetry: "retry" };
                case k:
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
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      var r = e.map(function (e) {
        var n = v,
          r = [],
          a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
            name: "uploadPrivateStatsBuffer",
            timer: { algo: { type: "exponential", first: 250 }, max: 1e3 },
            code: function (a) {
              return T(
                a,
                function (e) {
                  var t = I(e);
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
              var n = I(t);
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
      return (g || (g = n("Promise"))).all(r).then(function (e) {
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
    l.upload_UNSAFE_INTERNAL_DO_NOT_USE = P;
  },
  98,
);
