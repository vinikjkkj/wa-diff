__d(
  "WAWebQuarantineDataStore",
  [
    "WATimeUtils",
    "WAWebCommonMsgUtils",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebSchemaQuarantineData",
    "asyncToGeneratorRuntime",
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
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length !== 0) {
            o("WAWebDefenseModeQuarantineLogger").logQuarantinedMessage(
              e.length,
            );
            var n = t != null ? t : o("WAWebSchemaQuarantineData").getTable();
            yield n.bulkCreateOrReplace(e);
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSchemaQuarantineData").getTable();
          yield t.bulkRemove(e);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSchemaQuarantineData").getTable();
          return t.get(e);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebSchemaQuarantineData").getTable();
          return n.lessThan(["createdAt"], e, { limit: t });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSchemaQuarantineData").getTable();
          return t.all({ limit: e, index: ["createdAt"], reverse: !0 });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSchemaQuarantineData").getTable();
          yield t.remove(e);
        })),
        C.apply(this, arguments)
      );
    }
    ((l.extractQuarantineDataFromMessages = e),
      (l.bulkCreateOrReplaceQuarantineData = s),
      (l.bulkDeleteQuarantineData = c),
      (l.getQuarantineData = m),
      (l.getQuarantineDataBatchOlderThan = _),
      (l.getQuarantineDataBatch = g),
      (l.deleteQuarantineData = y));
  },
  98,
);
