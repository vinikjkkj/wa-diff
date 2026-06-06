__d(
  "WAWebSyncdKeyManagement",
  [
    "WALogger",
    "WAPromiseQueue",
    "WASyncdKeyManagementUtils",
    "WAWebGetSyncKey",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdGatingUtils",
    "WAWebSyncdKeyCallbacksApi",
    "WAWebSyncdMetrics",
    "WAWebSyncdRotateKey",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = new (o("WAPromiseQueue").PromiseQueue)();
    function p(e) {
      return (
        e === void 0 && (e = !0),
        m.enqueue(function () {
          return _(e);
        })
      );
    }
    async function _(t) {
      t === void 0 && (t = !0);
      var n = await f(),
        a = await o("WAWebSyncdKeyCallbacksApi").getDeviceFingerprint(),
        i = !1,
        l = !1;
      if (n != null) {
        if (
          ((i = o("WAWebSyncdRotateKey").hasKeyExpired(n)),
          (l = o("WAWebSyncdRotateKey").hasADeviceBeenRemoved(n, a)),
          !t || (!i && !l))
        )
          return { keyId: n.keyId, keyData: n.keyData };
      } else throw r("err")("syncd: No sync key available");
      var m = o("WAWebSyncdRotateKey").rotateKey(a, n);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: rotating key id ",
              "",
            ])),
          o("WAWebSyncdCryptoUtils").syncKeyIdToHex(m.keyId),
        ),
        o(
          "WAWebSyncdGatingUtils",
        ).getEnableSyncdKeyPersistenceOnlyAfterServerAck()
          ? (await o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRotation([m]),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: key share ACK received, storing key id ",
                  "",
                ])),
              o("WAWebSyncdCryptoUtils").syncKeyIdToHex(m.keyId),
            ),
            await o("WAWebGetSyncKey").setSyncKeyInTransaction(m))
          : (await o("WAWebGetSyncKey").setSyncKeyInTransaction(m),
            await o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRotation([m])),
        i &&
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: key rotation due to key expiry",
              ])),
          ),
          o("WAWebSyncdMetrics").reportSyncdKeyRotationEvent(
            o("WAWebSyncdMetrics").SyncdKeyRotationEventType
              .APP_STATE_SYNC_KEY_EXPIRY,
          )),
        l &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: key rotation due to device removal",
              ])),
          ),
          o("WAWebSyncdMetrics").reportSyncdKeyRotationEvent(
            o("WAWebSyncdMetrics").SyncdKeyRotationEventType
              .DEVICE_DEREGISTERATION,
          )),
        n == null &&
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: key rotation due to no key present",
              ])),
          ),
          o("WAWebSyncdMetrics").reportSyncdKeyRotationEvent(
            o("WAWebSyncdMetrics").SyncdKeyRotationEventType.NO_KEYS,
          )),
        _(t)
      );
    }
    async function f() {
      var e = await o("WAWebGetSyncKey").getAllSyncKeysInTransaction();
      if (e.length === 0) return null;
      var t = e.map(function (e) {
          return o("WASyncdKeyManagementUtils").getKeyEpoch(e.keyId);
        }),
        n = Math.max.apply(Math, t),
        r = e.filter(function (e) {
          return o("WASyncdKeyManagementUtils").getKeyEpoch(e.keyId) === n;
        }),
        a = r.map(function (e) {
          return o("WASyncdKeyManagementUtils").getKeyDeviceId(e.keyId);
        }),
        i = Math.min.apply(Math, a),
        l = a.indexOf(i);
      return r[l];
    }
    ((l.getActiveKey = p), (l.getNewestKeyPair = f));
  },
  98,
);
