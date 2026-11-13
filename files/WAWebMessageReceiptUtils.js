__d(
  "WAWebMessageReceiptUtils",
  [
    "WAWebAck",
    "WAWebBackendApi",
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
          var t = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              e.map(function (e) {
                return p(r("WAWebMsgKey").fromString(e)).toString();
              }),
            );
          return r("compactMap")(t, function (e) {
            return e != null && u(e) && e.ack < o("WAWebAck").ACK.READ
              ? r("WAWebMsgKey").fromString(e.id)
              : null;
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: e.remote,
        id: e.id,
        participant: e.participant,
      });
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e.length !== 0 &&
            (o("WAWebBackendApi").frontendFireAndForget("handleReadStatus", {
              msgKeys: e,
            }),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateMsgPeerAcks",
              { msgKeys: e, ack: o("WAWebAck").ACK.READ, t: t },
            ));
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
        h.apply(this, arguments)
      );
    }
    ((l.isGroupOrChannelStatusRow = u),
      (l.getUnreadStatusKeysFromOthers = c),
      (l.getMyUnreadStatusKeysReadByMyOtherDevice = d),
      (l.markStatusesReadFromPeer = _),
      (l.fixStatusReceiptKeys = g));
  },
  98,
);
