__d(
  "WAWebCoexV2RevokeRetention",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          if (
            (a === void 0 && (a = null),
            i === void 0 && (i = o("WATimeUtils").unixTime()),
            !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled())
          )
            return new Map();
          var l = t.filter(function (e) {
              var t = e.revokeMsgKey.remote;
              return (
                t.isUser() &&
                !o("WAWebBotUtils").isAnyMetaAiBot(t) &&
                !o("WAWebBotUtils").isBusinessAssistantBot(t)
              );
            }),
            s = new Map(),
            u = yield (c || (c = n("Promise"))).all(
              l.map(function (e) {
                return g(e.revokeMsgKey.id);
              }),
            ),
            d = l.map(function (e) {
              var t, n;
              return (t =
                (n = a) == null ? void 0 : n.get(e.revokeMsgKey.toString())) !=
                null
                ? t
                : e.revokeMsgKey;
            }),
            m = d.map(function (e, t) {
              return (
                !u[t] &&
                e.fromMe &&
                o("WAWebCoexV2UserAgentEligibility").isCoexV2UserAgentTarget(
                  e.remote,
                )
              );
            }),
            p =
              m.some(Boolean) &&
              (yield o("WAWebCoexV2UserAgentEligibility").isSelfCoexV2Hosted()),
            f = d.flatMap(function (e, t) {
              return u[t] || (p && m[t]) ? [t] : [];
            });
          if (f.length === 0) return s;
          var h = f.map(function (e) {
              return l[e];
            }),
            y = f.map(function (e) {
              return d[e];
            }),
            C = y.map(String),
            b = y.map(function (e) {
              var t, n;
              return (t =
                (n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                  ? void 0
                  : n.toString()) != null
                ? t
                : e.toString();
            });
          h.forEach(function (e, t) {
            var n = [e.revokeMsgKey.toString(), C[t], b[t]],
              r = n.flatMap(function (e) {
                var t;
                return (t = s.get(e)) != null ? t : [];
              }),
              o = Array.from(new Set([].concat(r, n)));
            o.forEach(function (e) {
              return s.set(e, o);
            });
          });
          try {
            var v = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet([].concat(C, b)),
              S = h.length;
            yield (c || (c = n("Promise"))).all(
              h.map(function (e, t) {
                var n;
                return _(e, (n = v[t]) != null ? n : v[t + S], i);
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
          return s;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                t.t +
                o("WAWebCoexV2ResponseWindow").COEXV2_RESPONSE_WINDOW_SECONDS;
              if (i <= n) return;
              var l =
                (a = o("WAWebDBMessageSerialization").messageFromDbRow(t)) ==
                null
                  ? void 0
                  : a.messageSecret;
              if (l == null) return;
              var u = yield o(
                "WAWebBotMessageSecret",
              ).genBotMsgSecretFromMsgSecret(l);
              yield o("WAWebCoexV2BotSecretStore").setBotMessageSecret(
                t.id,
                u,
                i,
              );
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
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o(
              "WAWebApiCoexV2RelayReceiptStore",
            ).hasCoexV2RelayReceipt(e);
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
        })),
        h.apply(this, arguments)
      );
    }
    ((l.retainCoexV2BotSecretsForAuthorizedRevokes = d),
      (l.evictCoexV2RawSecretsForCommittedRevokes = p));
  },
  98,
);
