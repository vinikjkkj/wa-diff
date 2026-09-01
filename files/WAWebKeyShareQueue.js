__d(
  "WAWebKeyShareQueue",
  [
    "WASyncdKeyTypes",
    "WAWebKeyShareQueueDef",
    "WAWebRecoverableQueue",
    "WAWebScheduledOperations",
    "WAWebSendRequestedKeyShareJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = null;
    function u() {
      p().start();
    }
    function c(e, t, n) {
      return p().addAndDrain({
        keys: e.map(d),
        orphanKeys: t.map(o("WASyncdKeyTypes").fromSyncKeyId),
        peerDeviceId: n.toString(),
      });
    }
    function d(e) {
      return {
        fingerprint: {
          currentIndex: e.fingerprint.currentIndex,
          deviceIndexes: e.fingerprint.deviceIndexes,
          rawId: e.fingerprint.rawId,
        },
        keyData: o("WASyncdKeyTypes").fromSyncKeyData(e.keyData),
        keyEpoch: e.keyEpoch,
        keyId: o("WASyncdKeyTypes").fromSyncKeyId(e.keyId),
        timestamp: e.timestamp,
      };
    }
    function m(e) {
      return {
        fingerprint: {
          currentIndex: e.fingerprint.currentIndex,
          deviceIndexes: [].concat(e.fingerprint.deviceIndexes),
          rawId: e.fingerprint.rawId,
        },
        keyData: o("WASyncdKeyTypes").toSyncKeyData(e.keyData),
        keyEpoch: e.keyEpoch,
        keyId: o("WASyncdKeyTypes").toSyncKeyId(e.keyId),
        timestamp: e.timestamp,
      };
    }
    function p() {
      return (
        s == null &&
          (s = new (o("WAWebRecoverableQueue").WAWebRecoverableQueue)({
            maxAttempts: e,
            operation: o("WAWebScheduledOperations").ScheduledOperation
              .SEND_REQUESTED_KEY_SHARE,
            queue: o("WAWebKeyShareQueueDef").SEND_REQUESTED_KEY_SHARE_QUEUE,
            run: function (t) {
              return o("WAWebSendRequestedKeyShareJob").sendKeyShare({
                keys: t.keys.map(m),
                orphanKeys: t.orphanKeys.map(o("WASyncdKeyTypes").toSyncKeyId),
                peerDeviceId: t.peerDeviceId,
              });
            },
          })),
        s
      );
    }
    ((l.startKeyShareQueue = u), (l.requestKeyShareNow = c));
  },
  98,
);
