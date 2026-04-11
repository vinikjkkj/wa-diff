__d(
  "WAWebSyncdRotateKey",
  [
    "WAArrayBuffersConcat",
    "WABaseGlobals",
    "WAByteArray",
    "WACryptoDependencies",
    "WAJids",
    "WASyncdKeyManagementUtils",
    "WASyncdKeyTypes",
    "WATimeUtils",
    "WAWebSyncdGatingUtils",
    "equalsSet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 90;
    function u(t) {
      var n = t.timestamp,
        r = Math.min(
          s,
          Math.max(e, o("WAWebSyncdGatingUtils").getSyncdKeyMaxUseDays()),
        ),
        a = r * o("WATimeUtils").DAY_MILLISECONDS,
        i = o("WATimeUtils").unixTimeMs() - n;
      return i > a;
    }
    function c(e, t) {
      for (
        var n = e.fingerprint,
          o = t.currentIndex,
          a = t.deviceIndexes,
          i = t.rawId,
          l = new Set(n.deviceIndexes),
          s = n.currentIndex + 1;
        s <= o;
        s++
      )
        l.add(s);
      return n.rawId !== i || !r("equalsSet")(l, new Set(a));
    }
    function d(e, t) {
      var n = m(t),
        r = n.keyEpoch,
        a = n.keyId,
        i = p(),
        l = o("WATimeUtils").unixTimeMs();
      return {
        keyId: a,
        keyEpoch: r,
        keyData: i,
        fingerprint: e,
        timestamp: l,
      };
    }
    function m(e) {
      var t;
      if (e == null) {
        var n = new Uint8Array(16);
        (o("WACryptoDependencies").getCrypto().getRandomValues(n),
          (t = o("WASyncdKeyManagementUtils").generateNewKeyEpoch(
            o("WASyncdKeyTypes").toSyncKeyId(n.buffer),
          )));
      } else t = o("WASyncdKeyManagementUtils").generateNewKeyEpoch(e.keyId);
      var r = o("WAJids").interpretAsNumber(
        o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid()),
      );
      return {
        keyId: o("WASyncdKeyTypes").toSyncKeyId(
          new Uint8Array(
            o("WAArrayBuffersConcat").concatArrayBuffers(
              o("WAByteArray").intToBytes(2, r).buffer,
              o("WAByteArray").intToBytes(4, t).buffer,
            ),
          ).buffer,
        ),
        keyEpoch: t,
      };
    }
    function p() {
      return o("WASyncdKeyTypes").toSyncKeyData(
        o("WACryptoDependencies")
          .getCrypto()
          .getRandomValues(new Uint8Array(32)).buffer,
      );
    }
    ((l.hasKeyExpired = u), (l.hasADeviceBeenRemoved = c), (l.rotateKey = d));
  },
  98,
);
