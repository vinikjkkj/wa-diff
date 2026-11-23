__d(
  "WADbPersonalSenderKeyStatusTxns",
  ["WASignalDB", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["groupJid", "senderKeyTs"],
      s = ["groupJid", "senderKeyTs"],
      u = {
        hasSenderKey: new Set(),
        rotateSenderKey: !0,
        senderKeyId: null,
        senderKeyTs: o("WATimeUtils").castToUnixTime(0),
      },
      c = function (t) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["personalSenderKeyStatuses"],
            "readwrite",
            function (e) {
              return e.stores.personalSenderKeyStatuses.bulkPut(
                t.map(function (e) {
                  return babelHelpers.extends({}, u, { groupJid: e });
                }),
              );
            },
            o("WASignalDB").signalOp("bulkPutNewPersonalSenderKeyStatus"),
          )
          .then(function () {});
      },
      d = function (t, n, r) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["personalSenderKeyStatuses"],
            "readwrite",
            async function (e) {
              var o = await e.stores.personalSenderKeyStatuses.get(t);
              await e.stores.personalSenderKeyStatuses.bulkPut([
                babelHelpers.extends({}, o || u, {
                  groupJid: t,
                  rotateSenderKey: !1,
                  senderKeyId: n,
                  senderKeyTs: r,
                }),
              ]);
            },
            o("WASignalDB").signalOp("markSenderKeyAsRotated"),
          );
      },
      m = function (n) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["personalSenderKeyStatuses"],
            "readwrite",
            async function (t) {
              var r = await t.stores.personalSenderKeyStatuses.get(n);
              if (r != null) {
                var o = r.groupJid,
                  a = r.senderKeyTs,
                  i = babelHelpers.objectWithoutPropertiesLoose(r, e);
                return babelHelpers.extends({}, i, { ts: a });
              }
              var l = babelHelpers.extends({}, u, { groupJid: n });
              await t.stores.personalSenderKeyStatuses.bulkPut([l]);
              var c = l.groupJid,
                d = l.senderKeyTs,
                m = babelHelpers.objectWithoutPropertiesLoose(l, s);
              return babelHelpers.extends({}, m, { ts: d });
            },
            "Signal - getSenderKeyStatus",
          );
      },
      p = function (t) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["personalSenderKeyStatuses"],
            "readwrite",
            async function (e) {
              var n = await e.stores.personalSenderKeyStatuses.bulkGet(t);
              await e.stores.personalSenderKeyStatuses.bulkPut(
                n
                  .filter(function (e) {
                    return e != null;
                  })
                  .map(function (e) {
                    return babelHelpers.extends({}, e, { rotateSenderKey: !0 });
                  }),
              );
            },
            o("WASignalDB").signalOp("bulkSetRotateSenderKeyToTrue"),
          );
      },
      _ = function (t) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["personalSenderKeyStatuses"],
            "readwrite",
            function (e) {
              return e.stores.personalSenderKeyStatuses.bulkDelete(t);
            },
            o("WASignalDB").signalOp("deletePersonalSenderKeyStatus"),
          );
      };
    ((l.bulkPutNewPersonalSenderKeyStatus = c),
      (l.markSenderKeyAsRotated = d),
      (l.getSenderKeyStatus = m),
      (l.bulkSetRotateSenderKeyToTrue = p),
      (l.deletePersonalSenderKeyStatus = _));
  },
  98,
);
