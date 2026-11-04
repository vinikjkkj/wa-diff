__d(
  "WAWebStartChatContextSignal",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebMexFetchIntegritySignals",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 600,
      d = { joinDateMs: null, signal: "failed" };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n,
              a = yield o("WAPromiseTimeout").promiseTimeout(
                o("WAWebMexFetchIntegritySignals").queryIntegritySignals(
                  t,
                  "START_CHAT_CONTEXT",
                ),
                c,
              ),
              i = (function (e) {
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.__typename === "XWA2IntegritySignals" &&
                  e.is_suspicious_start_chat === !0
                ) {
                  var t = e;
                  return {
                    joinDateMs: o(
                      "WAWebMexFetchIntegritySignals",
                    ).getJoinDateMs(t),
                    signal: "suspicious",
                  };
                }
                return ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                  e.__typename === "XWA2IntegritySignals"
                  ? { joinDateMs: null, signal: "not_suspicious" }
                  : d;
              })(
                (n = a.xwa2_fetch_wa_users) == null || (n = n[0]) == null
                  ? void 0
                  : n.integrity_signals_info,
              );
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[start-chat-context] ",
                    " signal=",
                    "",
                  ])),
                t.toLogString(),
                i.signal,
              ),
              i
            );
          } catch (e) {
            return (
              e instanceof o("WACustomError").TimeoutError
                ? o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[start-chat-context] integrity signals timed out for ",
                        "",
                      ])),
                    t.toLogString(),
                  )
                : o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[start-chat-context] integrity signals fetch failed for ",
                          "",
                        ])),
                      t.toLogString(),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("start-chat-context-signal-fetch-failed"),
              d
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.fetchStartChatContextSignal = m;
  },
  98,
);
