__d(
  "WAWebRetryRequestParser",
  ["WADeprecatedWapParser", "WASignalPQTypes", "WAWebJidToWid"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("retryRequestParser", function (
        e,
      ) {
        var t;
        e.assertTag("receipt");
        var n = e.attrString("type");
        if (n !== "retry" && n !== "enc_rekey_retry")
          throw e.createParseError(
            'to have type "retry" or "enc_rekey_retry", got "' + n + '"',
          );
        var r = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
          a = e.hasAttr("participant")
            ? o("WAWebJidToWid").deviceJidToDeviceWid(
                e.attrDeviceJid("participant"),
              )
            : null,
          i = !1;
        a != null &&
          a.isBot() &&
          e.hasAttr("is_lid") &&
          (i = e.attrString("is_lid") === "true");
        var l = e.hasAttr("recipient")
            ? o("WAWebJidToWid").deviceJidToUserWid(
                e.attrDeviceJid("recipient"),
              )
            : null,
          s = e.child("retry"),
          u = e.maybeChild("keys"),
          c = null;
        if (u != null) {
          var d,
            m,
            p = u.child("skey"),
            _ = (d = u.maybeChild("pqkey")) != null ? d : u.maybeChild("pq"),
            f;
          if (_ != null)
            try {
              f = {
                id: _.child("id").contentUint(3),
                publicKey: _.child("value").contentBytes(
                  o("WASignalPQTypes").KYBER_PUBLIC_KEY_BYTES,
                ),
                signature: _.child("signature").contentBytes(64),
              };
            } catch (e) {
              f = void 0;
            }
          var g = {
            identity: u.child("identity").contentBytes(32),
            deviceIdentity:
              (m = u.maybeChild("device-identity")) == null
                ? void 0
                : m.contentBytes(),
            skey: {
              id: p.child("id").contentUint(3),
              pubkey: p.child("value").contentBytes(32),
              signature: p.child("signature").contentBytes(64),
            },
            kyberKey: f,
          };
          if (r.isFbidBot() || (r.isGroup() && a != null && a.isFbidBot())) {
            var h = null,
              y = u.maybeChild("key");
            (y != null &&
              (h = {
                id: y.child("id").contentUint(3),
                pubkey: y.child("value").contentBytes(32),
              }),
              (c = babelHelpers.extends({ type: "bot_retry" }, g, { key: h })));
          } else {
            var C = u.child("key");
            c = babelHelpers.extends({ type: "regular_retry" }, g, {
              key: {
                id: C.child("id").contentUint(3),
                pubkey: C.child("value").contentBytes(32),
              },
            });
          }
        }
        return {
          stanzaId: e.attrString("id"),
          originalMsgId: s.attrString("id"),
          ts: e.attrTime("t"),
          retryCount: (t = s.maybeAttrInt("count")) != null ? t : 0,
          regId: e.child("registration").contentUint(4),
          offline: e.hasAttr("offline"),
          from: r,
          participant: a,
          isLid: i,
          recipient: l,
          keyBundle: c,
          type: n,
        };
      }),
      s = e;
    l.default = s;
  },
  98,
);
