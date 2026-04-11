__d(
  "WAWebRetryRequestParser",
  ["WADeprecatedWapParser", "WAWebJidToWid", "WAWebUserPrefsMeUser"],
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
        e.hasAttr("to") &&
          e.assertAttr(
            "to",
            o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().toJid(),
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
            m = u.child("skey"),
            p = {
              identity: u.child("identity").contentBytes(32),
              deviceIdentity:
                (d = u.maybeChild("device-identity")) == null
                  ? void 0
                  : d.contentBytes(),
              skey: {
                id: m.child("id").contentUint(3),
                pubkey: m.child("value").contentBytes(32),
                signature: m.child("signature").contentBytes(64),
              },
            };
          if (r.isFbidBot() || (r.isGroup() && a != null && a.isFbidBot())) {
            var _ = null,
              f = u.maybeChild("key");
            (f != null &&
              (_ = {
                id: f.child("id").contentUint(3),
                pubkey: f.child("value").contentBytes(32),
              }),
              (c = babelHelpers.extends({ type: "bot_retry" }, p, { key: _ })));
          } else {
            var g = u.child("key");
            c = babelHelpers.extends({ type: "regular_retry" }, p, {
              key: {
                id: g.child("id").contentUint(3),
                pubkey: g.child("value").contentBytes(32),
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
