__d(
  "WABulkSaveSignalDataApi",
  ["WACryptoManager", "WADbSignal", "WAJids", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      var e = t.dhashUpdate,
        n = t.identityRemove,
        r = t.identityUpdate,
        a = t.lastSyncTsUpdate,
        i = t.preKeyRemove,
        l = t.senderKeySessionUpdate,
        c = t.sessionRemove,
        d = t.sessionUpdate,
        m = d.map(function (e) {
          var t = e.id,
            n = e.updated;
          return { id: t, session: o("WACryptoManager").encodeSession(n) };
        }),
        p = [];
      (l.forEach(function (e) {
        var t = e.author,
          n = e.groupId,
          r = e.updated,
          a = o("WAJids").extractUserJid(t),
          i = o("WAJids").extractDeviceId(t),
          l = o("WADbSignal").buildSenderKeySessionId(n, a, i);
        p.push({
          deviceId: i,
          groupJid: n,
          id: l,
          record: o("WACryptoManager").encodeSenderKeySession(r),
          userJid: a,
        });
      }),
        await o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["contacts", "identity", "prekey", "senderKeySessions", "session"],
            "readwrite",
            function (t) {
              var o = t.stores,
                l = o.identity,
                d = o.prekey,
                _ = o.senderKeySessions,
                f = o.session;
              return Promise.all([
                f.bulkDelete(c),
                l.bulkDelete(n),
                f.bulkPut(m),
                _.bulkPut(p),
                u(t.stores, r),
                s(t.stores, r, e, a),
                d.bulkDelete(
                  i.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                ),
              ]);
            },
            o("WASignalDB").signalOp("bulkSaveSignalData"),
          ));
    };
    async function s(e, t, n, r) {
      var a = new Set();
      for (var i of t) a.add(o("WAJids").extractUserJid(i.id));
      var l = Array.from(a),
        s = await e.contacts.bulkGet(Array.from(a)),
        u = new Map();
      for (var c of s) c != null && u.set(c.contactJid, c);
      for (var d of l) {
        var m = u.get(d);
        m == null
          ? ((m = { contactJid: d, dhash: null }), u.set(d, m))
          : (m.dhash = null);
      }
      for (var p of n) {
        var _ = u.get(p.id);
        _ == null
          ? ((_ = { contactJid: p.id, dhash: p.dhash }), u.set(p.id, _))
          : (_.dhash = p.dhash);
      }
      for (var f of r) {
        var g = u.get(f.id);
        g == null
          ? ((g = { contactJid: f.id, dhash: null, lastSyncTs: f.lastSyncTs }),
            u.set(f.id, g))
          : (g.lastSyncTs = f.lastSyncTs);
      }
      await e.contacts.bulkPut(Array.from(u.values()));
    }
    async function u(e, t) {
      if (t.length !== 0) {
        var n = t.map(function (e) {
          var t = e.id,
            n = e.identity;
          return {
            deviceJid: t,
            identity: n,
            userJid: o("WAJids").extractUserJid(t),
          };
        });
        await e.identity.bulkPut(n);
      }
    }
    l.bulkSaveSignalData = e;
  },
  98,
);
