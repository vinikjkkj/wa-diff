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
    function u(e, t, n, r, o, a) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u, c) {
            var p,
              _,
              f,
              g,
              h = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsGroupHistory.pb")
                  .GroupHistoryWithMessageBytesSpec,
                t,
              ),
              y =
                u != null
                  ? u
                  : o(
                      "WAWebMessagingGatingUtils",
                    ).getSenderReportingTokenVersion(),
              C = [].concat(
                (p = h.messages) != null ? p : [],
                ((_ = h.uncountedAssociatedMessageLists) != null
                  ? _
                  : []
                ).flatMap(function (e) {
                  var t;
                  return (t = e.messages) != null ? t : [];
                }),
                (f = h.commentMessages) != null ? f : [],
                (g = h.outOfWindowPinnedMessages) != null ? g : [],
              ),
              b = yield (s || (s = n("Promise"))).all(
                C.map(function (e) {
                  var t;
                  return m(
                    e,
                    a,
                    i,
                    l,
                    y,
                    d((t = e.key) == null ? void 0 : t.id, c),
                  );
                }),
              ),
              v = r("compactMap")(b, function (e) {
                return e;
              });
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Generated ",
                    " reporting tokens",
                  ])),
                v.length,
              ),
              v
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n;
      return e == null
        ? null
        : (n = t == null ? void 0 : t.get(e)) != null
          ? n
          : e;
    }
    function m(e, t, n, r, o, a) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            if (i == null) return null;
            var l = e.messageBytes;
            if (l == null)
              return { stanzaId: i, reportingToken: null, version: null };
            var s = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenKeyFromMessageSecret({
                messageSecret: t,
                stanzaId: i,
                senderJid: n,
                remoteJid: r,
              }),
              u = new (o(
                "WAWebReportingTokenContent",
              ).ReportingTokenContentCalculator)(
                new Uint8Array(l),
                o("WAWebReportingTokenConfig").getReportingTokenConfig(a),
              ).getReportingTokenContent();
            if (u == null || u.length === 0)
              return { stanzaId: i, reportingToken: null, version: null };
            var c = yield o("WACryptoHmac").hmacSha256(
              new Uint8Array(s),
              u,
              o("WAWebReportingTokenUtils").REPORTING_TOKEN_SIZE,
            );
            return {
              stanzaId: i,
              reportingToken: new Uint8Array(c),
              version: a,
              reportingTokenKey: new Uint8Array(s),
              reportingTokenContent: u,
            };
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.genGroupHistoryReportingTokens = u),
      (l.computeReportingTokenForMessage = m));
  },
  98,
);
