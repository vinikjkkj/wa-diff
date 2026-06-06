__d(
  "WAWebMexFetchIntegritySignals",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchIntegritySignalsQuery.graphql",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchIntegritySignalsQuery.graphql"));
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n,
              a,
              i = yield o("WAWebMexClient").fetchQuery(m, {
                input: {
                  query_input: [
                    {
                      jid: e.toJid(),
                      integrity_signals: { use_case: "CHAT_FMX" },
                    },
                  ],
                  telemetry: { context: "INTERACTIVE" },
                },
              }),
              l = (t = i.xwa2_fetch_wa_users) == null ? void 0 : t[0];
            if (l == null)
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[FMX][integrity-signals] empty response for ",
                      "",
                    ])),
                  e.toLogString(),
                ),
                null
              );
            var p = l.integrity_signals_info;
            if (p == null)
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[FMX][integrity-signals] no integrity signals for ",
                      "",
                    ])),
                  e.toLogString(),
                ),
                null
              );
            var _ = (n = p.is_new_account) != null ? n : null,
              f = (a = p.is_suspicious_start_chat) != null ? a : null;
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[FMX][integrity-signals] ",
                    " new=",
                    " sus=",
                    "",
                  ])),
                e.toLogString(),
                String(_),
                String(f),
              ),
              { isNewAccount: _, isSuspicious: f }
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[FMX][integrity-signals] MEX error for ",
                      "",
                    ])),
                  e.toLogString(),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("fmx-integrity-signals-mex-error"),
              null
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.fetchIntegritySignals = p;
  },
  98,
);
