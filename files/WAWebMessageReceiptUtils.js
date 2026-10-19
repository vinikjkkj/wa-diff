__d(
  "WAWebMessageReceiptUtils",
  [
    "WAWebAck",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isGroupStatus === !0;
    }
    function s(e) {
      return e.isNewsletterStatus === !0;
    }
    function u(t) {
      return e(t) || s(t);
    }
    function c(e) {
      return e
        .filter(function (e) {
          return e.ack < o("WAWebAck").ACK.READ;
        })
        .map(function (e) {
          return r("WAWebMsgKey").fromString(e.id);
        })
        .filter(function (e) {
          return !e.fromMe;
        });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("compactMap")(e, function (e) {
              return o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            }),
            n = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(
                t.map(function (e) {
                  return e.toString();
                }),
              ),
            a = new Set(
              n.map(function (e) {
                return e == null ? void 0 : e.id;
              }),
            );
          return r("compactMap")(e, function (e) {
            var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            return t && a.has(t.toString()) ? t : e;
          });
        })),
        m.apply(this, arguments)
      );
    }
    ((l.isGroupOrChannelStatusRow = u),
      (l.getUnreadStatusKeysFromOthers = c),
      (l.fixStatusReceiptKeys = d));
  },
  98,
);
