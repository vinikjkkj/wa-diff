__d(
  "WAWebRetryRequestParser",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebJidToWid",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))("retryRequestParser", function (t) {
        var n;
        t.assertTag("receipt");
        var r = t.attrString("type");
        if (r !== "retry" && r !== "enc_rekey_retry")
          throw t.createParseError(
            'to have type "retry" or "enc_rekey_retry", got "' + r + '"',
          );
        t.hasAttr("to") &&
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  '[retryRequestParser] received "to" attribute from server',
                ])),
            )
            .sendLogs("retry-request-parser-has-to-attribute", {
              sampling: 0.01,
            }),
          t.assertAttr(
            "to",
            o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().toJid(),
          ));
        var a = o("WAWebJidToWid").jidWithTypeToWid(t.attrJidWithType("from")),
          i = t.hasAttr("participant")
            ? o("WAWebJidToWid").deviceJidToDeviceWid(
                t.attrDeviceJid("participant"),
              )
            : null,
          l = !1;
        i != null &&
          i.isBot() &&
          t.hasAttr("is_lid") &&
          (l = t.attrString("is_lid") === "true");
        var s = t.hasAttr("recipient")
            ? o("WAWebJidToWid").deviceJidToUserWid(
                t.attrDeviceJid("recipient"),
              )
            : null,
          u = t.child("retry"),
          c = t.maybeChild("keys"),
          d = null;
        if (c != null) {
          var m,
            p = c.child("skey"),
            _ = {
              identity: c.child("identity").contentBytes(32),
              deviceIdentity:
                (m = c.maybeChild("device-identity")) == null
                  ? void 0
                  : m.contentBytes(),
              skey: {
                id: p.child("id").contentUint(3),
                pubkey: p.child("value").contentBytes(32),
                signature: p.child("signature").contentBytes(64),
              },
            };
          if (a.isFbidBot() || (a.isGroup() && i != null && i.isFbidBot())) {
            var f = null,
              g = c.maybeChild("key");
            (g != null &&
              (f = {
                id: g.child("id").contentUint(3),
                pubkey: g.child("value").contentBytes(32),
              }),
              (d = babelHelpers.extends({ type: "bot_retry" }, _, { key: f })));
          } else {
            var h = c.child("key");
            d = babelHelpers.extends({ type: "regular_retry" }, _, {
              key: {
                id: h.child("id").contentUint(3),
                pubkey: h.child("value").contentBytes(32),
              },
            });
          }
        }
        return {
          stanzaId: t.attrString("id"),
          originalMsgId: u.attrString("id"),
          ts: t.attrTime("t"),
          retryCount: (n = u.maybeAttrInt("count")) != null ? n : 0,
          regId: t.child("registration").contentUint(4),
          offline: t.hasAttr("offline"),
          from: a,
          participant: i,
          isLid: l,
          recipient: s,
          keyBundle: d,
          type: r,
        };
      }),
      u = s;
    l.default = u;
  },
  98,
);
