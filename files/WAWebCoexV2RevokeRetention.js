__d(
  "WAWebCoexV2RevokeRetention",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebCoexV2BotSecretStore",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ResponseWindow",
    "WAWebCoexV2UserAgentEligibility",
    "WAWebDBMessageSerialization",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsmsgMsgSecretCache",
    "WAWebRevoke",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, a) {
      if (
        (n === void 0 && (n = null),
        a === void 0 && (a = o("WATimeUtils").unixTime()),
        !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled())
      )
        return new Map();
      var i = t.filter(function (e) {
          var t = e.revokeMsgKey.remote;
          return (
            t.isUser() &&
            !o("WAWebBotUtils").isAnyMetaAiBot(t) &&
            !o("WAWebBotUtils").isBusinessAssistantBot(t)
          );
        }),
        l = new Map(),
        s = await Promise.all(
          i.map(function (e) {
            return p(e.revokeMsgKey.id);
          }),
        ),
        u = i.map(function (e) {
          var t, r;
          return (t =
            (r = n) == null ? void 0 : r.get(e.revokeMsgKey.toString())) != null
            ? t
            : e.revokeMsgKey;
        }),
        c = u.map(function (e, t) {
          return (
            !s[t] &&
            e.fromMe &&
            o("WAWebCoexV2UserAgentEligibility").isCoexV2UserAgentTarget(
              e.remote,
            )
          );
        }),
        d =
          c.some(Boolean) &&
          (await o("WAWebCoexV2UserAgentEligibility").isSelfCoexV2Hosted()),
        _ = u.flatMap(function (e, t) {
          return s[t] || (d && c[t]) ? [t] : [];
        });
      if (_.length === 0) return l;
      var f = _.map(function (e) {
          return i[e];
        }),
        g = _.map(function (e) {
          return u[e];
        }),
        h = g.map(String),
        y = g.map(function (e) {
          var t, n;
          return (t =
            (n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
              ? void 0
              : n.toString()) != null
            ? t
            : e.toString();
        });
      f.forEach(function (e, t) {
        var n = [e.revokeMsgKey.toString(), h[t], y[t]],
          r = n.flatMap(function (e) {
            var t;
            return (t = l.get(e)) != null ? t : [];
          }),
          o = Array.from(new Set([].concat(r, n)));
        o.forEach(function (e) {
          return l.set(e, o);
        });
      });
      try {
        var C = await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet([].concat(h, y)),
          b = f.length;
        await Promise.all(
          f.map(function (e, t) {
            var n;
            return m(e, (n = C[t]) != null ? n : C[t + b], a);
          }),
        );
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] failed to retain bot secret before revoke",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("coexv2-retain-bot-secret-failed");
      }
      return l;
    }
    function d(e, t) {
      e.forEach(function (e) {
        var n;
        (n = t.get(e)) == null ||
          n.forEach(function (e) {
            o(
              "WAWebMsmsgMsgSecretCache",
            ).msmsgMsgSecretCache.deleteMsmsgMsgSecretFromCache(e);
          });
      });
    }
    async function m(e, t, n) {
      if (t != null)
        try {
          var a;
          if (
            e.skipRevokeWindow !== !0 &&
            !o("WAWebRevoke").isWithinRevokeWindow({
              revokedMsgKey: r("WAWebMsgKey").fromString(t.id),
              revokedMsgTimestamp: t.t,
              revokeTimestamp: e.revokeTimestamp,
            })
          )
            return;
          var i =
            t.t + o("WAWebCoexV2ResponseWindow").COEXV2_RESPONSE_WINDOW_SECONDS;
          if (i <= n) return;
          var l =
            (a = o("WAWebDBMessageSerialization").messageFromDbRow(t)) == null
              ? void 0
              : a.messageSecret;
          if (l == null) return;
          var u = await o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
            l,
          );
          await o("WAWebCoexV2BotSecretStore").setBotMessageSecret(t.id, u, i);
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to retain bot secret for a single revoked row",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-retain-bot-secret-single-row-failed");
        }
    }
    async function p(e) {
      try {
        return await o("WAWebApiCoexV2RelayReceiptStore").hasCoexV2RelayReceipt(
          e,
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to read relay marker before revoke",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-relay-marker-read-failed"),
          !1
        );
      }
    }
    ((l.retainCoexV2BotSecretsForAuthorizedRevokes = c),
      (l.evictCoexV2RawSecretsForCommittedRevokes = d));
  },
  98,
);
