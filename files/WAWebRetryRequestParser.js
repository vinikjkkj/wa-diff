__d(
  "WAWebRetryRequestParser",
  ["WADeprecatedWapParser", "WASignalPQTypes", "WAWebJidToWid", "cr:475"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("retryRequestParser", function (
        e,
      ) {
        var t;
        e.assertTag("receipt");
        var r = e.attrString("type");
        if (r !== "retry" && r !== "enc_rekey_retry")
          throw e.createParseError(
            'to have type "retry" or "enc_rekey_retry", got "' + r + '"',
          );
        var a = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
          i = e.hasAttr("participant")
            ? o("WAWebJidToWid").deviceJidToDeviceWid(
                e.attrDeviceJid("participant"),
              )
            : null,
          l = !1;
        i != null &&
          i.isBot() &&
          e.hasAttr("is_lid") &&
          (l = e.attrString("is_lid") === "true");
        var s = e.hasAttr("recipient")
            ? o("WAWebJidToWid").deviceJidToUserWid(
                e.attrDeviceJid("recipient"),
              )
            : null,
          u = e.child("retry"),
          c = e.maybeChild("keys"),
          d = null;
        if (c != null) {
          var m,
            p,
            _,
            f = c.child("skey"),
            g = (m = c.maybeChild("pqkey")) != null ? m : c.maybeChild("pq"),
            h;
          if (g != null)
            try {
              h = {
                id: g.child("id").contentUint(3),
                publicKey: g
                  .child("value")
                  .contentBytes(o("WASignalPQTypes").KYBER_PUBLIC_KEY_BYTES),
                signature: g.child("signature").contentBytes(64),
              };
            } catch (e) {
              h = void 0;
            }
          var y = {
            identity: c.child("identity").contentBytes(32),
            deviceIdentity:
              (p = c.maybeChild("device-identity")) == null
                ? void 0
                : p.contentBytes(),
            skey: {
              id: f.child("id").contentUint(3),
              pubkey: f.child("value").contentBytes(32),
              signature: f.child("signature").contentBytes(64),
            },
            kyberKey: h,
            aeaEvidence:
              (_ =
                n("cr:475") == null
                  ? void 0
                  : n("cr:475").parseAeaEvidenceFromIdentity(c)) != null
                ? _
                : void 0,
          };
          if (a.isFbidBot() || (a.isGroup() && i != null && i.isFbidBot())) {
            var C = null,
              b = c.maybeChild("key");
            (b != null &&
              (C = {
                id: b.child("id").contentUint(3),
                pubkey: b.child("value").contentBytes(32),
              }),
              (d = babelHelpers.extends({ type: "bot_retry" }, y, { key: C })));
          } else {
            var v = c.child("key");
            d = babelHelpers.extends({ type: "regular_retry" }, y, {
              key: {
                id: v.child("id").contentUint(3),
                pubkey: v.child("value").contentBytes(32),
              },
            });
          }
        }
        return {
          stanzaId: e.attrString("id"),
          originalMsgId: u.attrString("id"),
          ts: e.attrTime("t"),
          retryCount: (t = u.maybeAttrInt("count")) != null ? t : 0,
          regId: e.child("registration").contentUint(4),
          offline: e.hasAttr("offline"),
          from: a,
          participant: i,
          isLid: l,
          recipient: s,
          keyBundle: d,
          type: r,
        };
      }),
      s = e;
    l.default = s;
  },
  98,
);
