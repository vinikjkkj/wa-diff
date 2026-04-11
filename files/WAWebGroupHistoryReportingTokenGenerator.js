__d(
  "WAWebGroupHistoryReportingTokenGenerator",
  [
    "Promise",
    "WACryptoHmac",
    "WALogger",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenContent",
    "WAWebReportingTokenUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, r, o) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u) {
            var c,
              m,
              p,
              _,
              f = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsGroupHistory.pb")
                  .GroupHistoryWithMessageBytesSpec,
                t,
              ),
              g =
                u != null
                  ? u
                  : o(
                      "WAWebMessagingGatingUtils",
                    ).getSenderReportingTokenVersion(),
              h = [].concat(
                (c = f.messages) != null ? c : [],
                ((m = f.uncountedAssociatedMessageLists) != null
                  ? m
                  : []
                ).flatMap(function (e) {
                  var t;
                  return (t = e.messages) != null ? t : [];
                }),
                (p = f.commentMessages) != null ? p : [],
                (_ = f.outOfWindowPinnedMessages) != null ? _ : [],
              ),
              y = yield (s || (s = n("Promise"))).all(
                h.map(function (e) {
                  return d(e, a, i, l, g);
                }),
              ),
              C = r("compactMap")(y, function (e) {
                return e;
              });
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Generated ",
                    " reporting tokens",
                  ])),
                C.length,
              ),
              C
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r, o) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i,
              l = (i = e.key) == null ? void 0 : i.id;
            if (l == null) return null;
            var s = e.messageBytes;
            if (s == null)
              return { stanzaId: l, reportingToken: null, version: null };
            var u = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenKeyFromMessageSecret({
                messageSecret: t,
                stanzaId: l,
                senderJid: n,
                remoteJid: r,
              }),
              c = new (o(
                "WAWebReportingTokenContent",
              ).ReportingTokenContentCalculator)(
                new Uint8Array(s),
                o("WAWebReportingTokenConfig").getReportingTokenConfig(a),
              ).getReportingTokenContent();
            if (c == null || c.length === 0)
              return { stanzaId: l, reportingToken: null, version: null };
            var d = yield o("WACryptoHmac").hmacSha256(
              new Uint8Array(u),
              c,
              o("WAWebReportingTokenUtils").REPORTING_TOKEN_SIZE,
            );
            return {
              stanzaId: l,
              reportingToken: new Uint8Array(d),
              version: a,
              reportingTokenKey: new Uint8Array(u),
              reportingTokenContent: c,
            };
          },
        )),
        m.apply(this, arguments)
      );
    }
    ((l.genGroupHistoryReportingTokens = u),
      (l.computeReportingTokenForMessage = d));
  },
  98,
);
