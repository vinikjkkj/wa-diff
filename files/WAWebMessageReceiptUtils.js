__d(
  "WAWebMessageReceiptUtils",
  [
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
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
    async function d(e) {
      var t = await o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(
          e.map(function (e) {
            return m(r("WAWebMsgKey").fromString(e)).toString();
          }),
        );
      return r("compactMap")(t, function (e) {
        return e != null && u(e) && e.ack < o("WAWebAck").ACK.READ
          ? r("WAWebMsgKey").fromString(e.id)
          : null;
      });
    }
    function m(e) {
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: e.remote,
        id: e.id,
        participant: e.participant,
      });
    }
    async function p(e, t) {
      e.length !== 0 &&
        (o("WAWebBackendApi").frontendFireAndForget("handleReadStatus", {
          msgKeys: e,
        }),
        await o("WAWebBackendApi").frontendSendAndReceive("updateMsgPeerAcks", {
          msgKeys: e,
          ack: o("WAWebAck").ACK.READ,
          t,
        }));
    }
    async function _(e) {
      var t = r("compactMap")(e, function (e) {
          return o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
        }),
        n = await o("WAWebSchemaMessage")
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
    }
    ((l.isGroupOrChannelStatusRow = u),
      (l.getUnreadStatusKeysFromOthers = c),
      (l.getMyUnreadStatusKeysReadByMyOtherDevice = d),
      (l.markStatusesReadFromPeer = p),
      (l.fixStatusReceiptKeys = _));
  },
  98,
);
