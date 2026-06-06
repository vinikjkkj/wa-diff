__d(
  "WAWebQuarantineDataStore",
  [
    "WATimeUtils",
    "WAWebCommonMsgUtils",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebSchemaQuarantineData",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [];
      for (var n of e) {
        var r = n.quarantineOriginalProtobuf;
        if (o("WAWebCommonMsgUtils").isQuarantinedMsg(n.type) && r != null) {
          var a,
            i,
            l =
              (a = (i = t[0]) == null ? void 0 : i.createdAt) != null
                ? a
                : o("WATimeUtils").unixTimeMs();
          t.push({ msgId: n.id.toString(), originalProtobuf: r, createdAt: l });
        }
      }
      return t;
    }
    async function s(e, t) {
      if (e.length !== 0) {
        o("WAWebDefenseModeQuarantineLogger").logQuarantinedMessage(e.length);
        var n = t != null ? t : o("WAWebSchemaQuarantineData").getTable();
        await n.bulkCreateOrReplace(e);
      }
    }
    async function u(e) {
      var t = o("WAWebSchemaQuarantineData").getTable();
      await t.bulkRemove(e);
    }
    async function c(e) {
      var t = o("WAWebSchemaQuarantineData").getTable();
      return t.get(e);
    }
    async function d(e, t) {
      var n = o("WAWebSchemaQuarantineData").getTable();
      return n.lessThan(["createdAt"], e, { limit: t });
    }
    async function m(e) {
      var t = o("WAWebSchemaQuarantineData").getTable();
      return t.all({ limit: e, index: ["createdAt"], reverse: !0 });
    }
    async function p(e) {
      var t = o("WAWebSchemaQuarantineData").getTable();
      await t.remove(e);
    }
    ((l.extractQuarantineDataFromMessages = e),
      (l.bulkCreateOrReplaceQuarantineData = s),
      (l.bulkDeleteQuarantineData = u),
      (l.getQuarantineData = c),
      (l.getQuarantineDataBatchOlderThan = d),
      (l.getQuarantineDataBatch = m),
      (l.deleteQuarantineData = p));
  },
  98,
);
