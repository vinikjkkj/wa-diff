__d(
  "WAWebRetryRequestParser",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WASignalPQTypes",
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
            p,
            _ = c.child("skey"),
            f = (m = c.maybeChild("pqkey")) != null ? m : c.maybeChild("pq"),
            g;
          if (f != null)
            try {
              g = {
                id: f.child("id").contentUint(3),
                publicKey: f
                  .child("value")
                  .contentBytes(o("WASignalPQTypes").KYBER_PUBLIC_KEY_BYTES),
                signature: f.child("signature").contentBytes(64),
              };
            } catch (e) {
              g = void 0;
            }
          var h = {
            identity: c.child("identity").contentBytes(32),
            deviceIdentity:
              (p = c.maybeChild("device-identity")) == null
                ? void 0
                : p.contentBytes(),
            skey: {
              id: _.child("id").contentUint(3),
              pubkey: _.child("value").contentBytes(32),
              signature: _.child("signature").contentBytes(64),
            },
            kyberKey: g,
          };
          if (a.isFbidBot() || (a.isGroup() && i != null && i.isFbidBot())) {
            var y = null,
              C = c.maybeChild("key");
            (C != null &&
              (y = {
                id: C.child("id").contentUint(3),
                pubkey: C.child("value").contentBytes(32),
              }),
              (d = babelHelpers.extends({ type: "bot_retry" }, h, { key: y })));
          } else {
            var b = c.child("key");
            d = babelHelpers.extends({ type: "regular_retry" }, h, {
              key: {
                id: b.child("id").contentUint(3),
                pubkey: b.child("value").contentBytes(32),
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
