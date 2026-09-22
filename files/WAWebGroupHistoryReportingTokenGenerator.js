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
          var d = r.messageBytes;
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
            p = new Uint8Array(d),
            _ = l,
            f = o("WAWebReportingTokenContent").calculateReportingTokenContent(
              p,
              _,
            );
          if (
            (_ > 0 &&
              _ <
                o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3 &&
              f.length === 0 &&
              i &&
              ((_ = o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION
                .V3),
              (f = o(
                "WAWebReportingTokenContent",
              ).calculateReportingTokenContent(p, _))),
            f == null || f.length === 0)
          )
            return {
              info: { stanzaId: u, reportingToken: null, version: null },
              isSupportedReceiveVersion: c,
            };
          var g = yield o("WACryptoHmac").hmacSha256(
            new Uint8Array(m),
            f,
            o("WAWebReportingTokenUtils").REPORTING_TOKEN_SIZE,
          );
          return {
            info: {
              stanzaId: u,
              reportingToken: new Uint8Array(g),
              version: _,
              reportingTokenKey: new Uint8Array(m),
              reportingTokenContent: f,
            },
            isSupportedReceiveVersion: c,
          };
        })),
        p.apply(this, arguments)
      );
    }
    ((l.genGroupHistoryReportingTokens = u),
      (l.computeReportingTokenForMessage = m));
  },
  98,
);
