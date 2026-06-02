__d(
  "WAWebWWAITeeTransport",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebTeeClientProvider",
    "WAWebTeeEnums",
    "WAWebTeeRequestBuilder",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        (u = o("WAWebTeeEnums")).TEEResponseStatus.SUCCESS,
        u.TEEResponseStatus.SUCCESS_NO_RESPONSE,
        u.TEEResponseStatus.SUCCESS_RATE_LIMITED,
      ]),
      d = new Set([
        u.TEEResponseStatus.FAILED_LOW_CONFIDENCE,
        u.TEEResponseStatus.FAILED_TOO_MANY_TOKENS,
        u.TEEResponseStatus.FAILED_VIOLATION,
        u.TEEResponseStatus.FAILED_UNKNOWN,
        u.TEEResponseStatus.FAILURE_NO_RESPONSE,
        u.TEEResponseStatus.FAILED_CANNED_RESPONSE,
      ]),
      m = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.sendRequest = function (t) {
            var e = o("WAWebTeeRequestBuilder").buildWriteWithAIRequest(
              t.text,
              t.tone,
              t.numSuggestions,
            );
            return this.$1(e, t);
          }),
          (n.isAvailable = function () {
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
          (n.getName = function () {
            return "TeeWWAITransport";
          }),
          (n.$1 = async function (t, n) {
            var e = o("WAWebTeeClientProvider").getClient(),
              a = e.sendRequest(t),
              i = [],
              l = new Set(),
              u = !1,
              m = !1,
              p;
            try {
              for (
                var _ = babelHelpers.asyncIterator(a), f;
                (u = !(f = await _.next()).done);
                u = !1
              ) {
                var g = f.value;
                {
                  var h = g.common_metadata.status,
                    y = g.wwai_response;
                  if (y != null && y.suggestions.length > 0)
                    for (var C of y.suggestions)
                      l.has(C) || (l.add(C), i.push(C));
                  if (c.has(h)) break;
                  if (d.has(h))
                    throw r("err")(
                      "TEE request failed with status " + String(h),
                    );
                }
              }
            } catch (e) {
              ((m = !0), (p = e));
            } finally {
              try {
                u && _.return != null && (await _.return());
              } finally {
                if (m) throw p;
              }
            }
            var b = o("WATimeUtils").unixTime(),
              v = i.map(function (e, t) {
                return {
                  text: e,
                  tone: n.tone,
                  requestId: n.requestId,
                  timestamp: b + t,
                };
              });
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WWAI][TEE] Received ",
                    " suggestions",
                  ])),
                String(v.length),
              ),
              { suggestions: v, requestId: n.requestId, inProgress: !1 }
            );
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
