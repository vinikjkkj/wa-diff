__d(
  "WAWebGroupHistoryReportingTokenGenerator",
  [
    "WACryptoHmac",
    "WALogger",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenConstants",
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
        h = o(
          "WAWebMessagingGatingUtils",
        ).isReportingTokenV3HybridSendingEnabled(),
        y = [].concat(
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
        C = await Promise.all(
          y.map(function (e) {
            var t;
            return c({
              bundleMessageSecret: n,
              groupJid: i,
              msgInfo: e,
              promoteEmptyContentToV3: h,
              reportingTokenVersion: g,
              senderJid: a,
              stanzaId: u((t = e.key) == null ? void 0 : t.id, s),
            });
          }),
        ),
        b = r("compactMap")(C, function (e) {
          return e.info;
        });
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-history] Generated ",
              " reporting tokens",
            ])),
          b.length,
        ),
        b
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
    async function c(e) {
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
      var m = d({
        messageBytes: r.messageBytes,
        promoteEmptyContentToV3: i,
        reportingTokenVersion: l,
      });
      if (m == null)
        return {
          info: { stanzaId: u, reportingToken: null, version: null },
          isSupportedReceiveVersion: c,
        };
      var p = await o(
          "WAWebReportingTokenUtils",
        ).genReportingTokenKeyFromMessageSecret({
          messageSecret: t,
          stanzaId: u,
          senderJid: s,
          remoteJid: n,
        }),
        _ = m.content,
        f = m.version,
        g = await o("WACryptoHmac").hmacSha256(
          new Uint8Array(p),
          _,
          o("WAWebReportingTokenUtils").REPORTING_TOKEN_SIZE,
        );
      return {
        info: {
          stanzaId: u,
          reportingToken: new Uint8Array(g),
          version: f,
          reportingTokenKey: new Uint8Array(p),
          reportingTokenContent: _,
        },
        isSupportedReceiveVersion: c,
      };
    }
    function d(e) {
      var t = e.messageBytes,
        n = e.promoteEmptyContentToV3,
        r = e.reportingTokenVersion;
      if (t == null) {
        var a = m(r, n)
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
          m(l, n) &&
          ((l = o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3),
          (s = o("WAWebReportingTokenContent").calculateReportingTokenContent(
            i,
            l,
          ))),
        s == null || s.length === 0 ? null : { content: s, version: l }
      );
    }
    function m(e, t) {
      return (
        t &&
        e > 0 &&
        e < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3
      );
    }
    ((l.genGroupHistoryReportingTokens = s),
      (l.computeReportingTokenForMessage = c),
      (l.deriveReportingTokenContent = d));
  },
  98,
);
