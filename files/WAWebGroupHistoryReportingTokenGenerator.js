__d(
  "WAWebGroupHistoryReportingTokenGenerator",
  [
    "WACryptoHmac",
    "WALogger",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenContent",
    "WAWebReportingTokenUtils",
    "compactMap",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, a, i, l, s) {
      var d,
        m,
        p,
        _,
        f = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsGroupHistory.pb").GroupHistoryWithMessageBytesSpec,
          t,
        ),
        g =
          l != null
            ? l
            : o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion(),
        h = [].concat(
          (d = f.messages) != null ? d : [],
          ((m = f.uncountedAssociatedMessageLists) != null ? m : []).flatMap(
            function (e) {
              var t;
              return (t = e.messages) != null ? t : [];
            },
          ),
          (p = f.commentMessages) != null ? p : [],
          (_ = f.outOfWindowPinnedMessages) != null ? _ : [],
        ),
        y = await Promise.all(
          h.map(function (e) {
            var t;
            return c(e, n, a, i, g, u((t = e.key) == null ? void 0 : t.id, s));
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
    }
    function u(e, t) {
      var n;
      return e == null
        ? null
        : (n = t == null ? void 0 : t.get(e)) != null
          ? n
          : e;
    }
    async function c(e, t, n, r, a, i) {
      if (i == null) return null;
      var l = e.messageBytes;
      if (l == null)
        return { stanzaId: i, reportingToken: null, version: null };
      var s = await o(
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
      var c = await o("WACryptoHmac").hmacSha256(
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
    }
    ((l.genGroupHistoryReportingTokens = s),
      (l.computeReportingTokenForMessage = c));
  },
  98,
);
