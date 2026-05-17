__d(
  "WAWebWWAITeeTransport",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebTeeClientProvider",
    "WAWebTeeEnums",
    "WAWebTeeRequestBuilder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Set([
        (c = o("WAWebTeeEnums")).TEEResponseStatus.SUCCESS,
        c.TEEResponseStatus.SUCCESS_NO_RESPONSE,
        c.TEEResponseStatus.SUCCESS_RATE_LIMITED,
      ]),
      m = new Set([
        c.TEEResponseStatus.FAILED_LOW_CONFIDENCE,
        c.TEEResponseStatus.FAILED_TOO_MANY_TOKENS,
        c.TEEResponseStatus.FAILED_VIOLATION,
        c.TEEResponseStatus.FAILED_UNKNOWN,
        c.TEEResponseStatus.FAILURE_NO_RESPONSE,
        c.TEEResponseStatus.FAILED_CANNED_RESPONSE,
      ]),
      p = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.sendRequest = function (t) {
            var e = o("WAWebTeeRequestBuilder").buildWriteWithAIRequest(
              t.text,
              t.tone,
              t.numSuggestions,
            );
            return this.$1(e, t);
          }),
          (r.isAvailable = function () {
            try {
              return o("WAWebTeeClientProvider").getClient() != null;
            } catch (t) {
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WWAI][TEE] Client unavailable",
                      ])),
                  )
                  .sendLogs("wwai-tee-client-unavailable"),
                !1
              );
            }
          }),
          (r.getName = function () {
            return "TeeWWAITransport";
          }),
          (r.$1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebTeeClientProvider").getClient(),
                  r = n.sendRequest(e),
                  a = [],
                  i = !0,
                  l = !1,
                  c = !1,
                  p;
                try {
                  for (
                    var _ = babelHelpers.asyncIterator(r), f;
                    (l = !(f = yield _.next()).done);
                    l = !1
                  ) {
                    var g = f.value;
                    {
                      var h = g.common_metadata.status,
                        y = g.wwai_response;
                      if (y != null && y.suggestions.length > 0)
                        for (var C of y.suggestions) a.includes(C) || a.push(C);
                      if (d.has(h)) {
                        i = !1;
                        break;
                      }
                      if (m.has(h)) {
                        (o("WALogger")
                          .WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[WWAI][TEE] Request failed with status ",
                                "",
                              ])),
                            String(h),
                          )
                          .sendLogs("wwai-tee-request-failed"),
                          (i = !1));
                        break;
                      }
                    }
                  }
                } catch (e) {
                  ((c = !0), (p = e));
                } finally {
                  try {
                    l && _.return != null && (yield _.return());
                  } finally {
                    if (c) throw p;
                  }
                }
                i = !1;
                var b = o("WATimeUtils").unixTime(),
                  v = a.map(function (e, n) {
                    return {
                      text: e,
                      tone: t.tone,
                      requestId: t.requestId,
                      timestamp: b + n,
                    };
                  });
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WWAI][TEE] Received ",
                        " suggestions",
                      ])),
                    String(v.length),
                  ),
                  { suggestions: v, requestId: t.requestId, inProgress: i }
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = p;
  },
  98,
);
