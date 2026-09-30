__d(
  "WAWebGroupHistoryReportingTokenGenerator",
  [
    "Promise",
    "WACryptoHmac",
    "WALogger",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenConstants",
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
              C = o(
                "WAWebMessagingGatingUtils",
              ).isReportingTokenV3HybridSendingEnabled(),
              b = [].concat(
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
              v = yield (s || (s = n("Promise"))).all(
                b.map(function (e) {
                  var t;
                  return m({
                    bundleMessageSecret: a,
                    groupJid: l,
                    msgInfo: e,
                    promoteEmptyContentToV3: C,
                    reportingTokenVersion: y,
                    senderJid: i,
                    stanzaId: d((t = e.key) == null ? void 0 : t.id, c),
                  });
                }),
              ),
              S = r("compactMap")(v, function (e) {
                return e.info;
              });
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Generated ",
                    " reporting tokens",
                  ])),
                S.length,
              ),
              S
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.bundleMessageSecret,
            n = e.groupJid,
            r = e.msgInfo,
            a = e.promoteEmptyContentToV3,
            i = a === void 0 ? !1 : a,
            l = e.reportingTokenVersion,
            s = e.senderJid,
            u = e.stanzaId,
            c = o("WAWebReportingTokenUtils").isSupportedReceiveVersion(l);
          if (u == null) return { info: null, isSupportedReceiveVersion: c };
          var d = _({
            messageBytes: r.messageBytes,
            promoteEmptyContentToV3: i,
            reportingTokenVersion: l,
          });
          if (d == null)
            return {
              info: { stanzaId: u, reportingToken: null, version: null },
              isSupportedReceiveVersion: c,
            };
          var m = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenKeyFromMessageSecret({
              messageSecret: t,
              stanzaId: u,
              senderJid: s,
              remoteJid: n,
            }),
            p = d.content,
            f = d.version,
            g = yield o("WACryptoHmac").hmacSha256(
              new Uint8Array(m),
              p,
              o("WAWebReportingTokenUtils").REPORTING_TOKEN_SIZE,
            );
          return {
            info: {
              stanzaId: u,
              reportingToken: new Uint8Array(g),
              version: f,
              reportingTokenKey: new Uint8Array(m),
              reportingTokenContent: p,
            },
            isSupportedReceiveVersion: c,
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.messageBytes,
        n = e.promoteEmptyContentToV3,
        r = e.reportingTokenVersion;
      if (t == null) {
        var a = f(r, n)
          ? o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3
          : r;
        return a < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3
          ? null
          : {
              content: o(
                "WAWebReportingTokenConstants",
              ).GHS_NULL_REPORTING_TOKEN_CONTENT.slice(),
              version: a,
            };
      }
      var i = new Uint8Array(t),
        l = r,
        s = o("WAWebReportingTokenContent").calculateReportingTokenContent(
          i,
          l,
        );
      return (
        s.length === 0 &&
          f(l, n) &&
          ((l = o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3),
          (s = o("WAWebReportingTokenContent").calculateReportingTokenContent(
            i,
            l,
          ))),
        s == null || s.length === 0 ? null : { content: s, version: l }
      );
    }
    function f(e, t) {
      return (
        t &&
        e > 0 &&
        e < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3
      );
    }
    ((l.genGroupHistoryReportingTokens = u),
      (l.computeReportingTokenForMessage = m));
  },
  98,
);
