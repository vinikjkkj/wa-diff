__d(
  "ZenonDataChannelWrapper",
  [
    "CompactSerializerPolyfill",
    "RequestStreamBodyUtils",
    "SctpSctpDatagramSerializers",
    "ZenonAuditedCheckpointLogId",
    "ZenonE2ee",
    "ZenonInfraActionsLogger",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = (function () {
        function t(e, t, n) {
          var o = this,
            a;
          ((this.$1 = []),
            (this.onMessage = function (e) {
              var t = e.data;
              typeof t == "string"
                ? o.$12(t, null)
                : t instanceof ArrayBuffer
                  ? o.$13(t)
                  : r("ZenonInfraActionsLogger").logError({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__ERROR,
                      error:
                        "Message type is not supported " +
                        typeof t +
                        " and will not be processed.",
                      errorDomain: "ZenonDataChannelWrapper onMessage",
                    });
            }),
            (this.onClose = function () {
              var e, t;
              ((o.$1 = []),
                (e = o.$6) == null || e.deregisterSctpTopic(o.$3),
                (t = o.$5) == null || t.onClosing());
            }),
            (this.onOpen = function () {
              var e;
              (o.$14(), (e = o.$5) == null || e.onOpen());
            }),
            (this.$2 = e),
            (this.$3 = this.$2.label),
            (this.$4 = t),
            (this.$5 = n),
            (this.$2.onclose = this.onClose),
            (this.$2.onmessage = this.onMessage),
            (this.$2.onopen = this.onOpen),
            (this.$6 = r("ZenonE2ee").getSecureDataMessageManager()),
            (this.$7 = this.$8()),
            (a = this.$6) == null || a.registerSctpTopic(this.$3, this.$7));
        }
        var n = t.prototype;
        return (
          (n.send = function (t) {
            if (this.getState() !== "open") {
              this.$9(t);
              return;
            }
            this.$10(t);
          }),
          (n.$10 = function (t) {
            try {
              if (!this.$11(t)) return;
              var e = this.$4.toSctpDatagram(t);
              if (e == null) {
                r("ZenonInfraActionsLogger").logError({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  error:
                    "Could not convert ZenonDataMessage to Datagram. Not sending message.",
                  errorDomain: "ZenonDataChannelWrapper send",
                });
                return;
              }
              var n = o("CompactSerializerPolyfill").serialize(
                e,
                o("SctpSctpDatagramSerializers").serializeDatagram,
              );
              this.$2.send(n);
            } catch (e) {
              var a = r("getErrorSafe")(e);
              r("ZenonInfraActionsLogger").logError({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__ERROR,
                error:
                  "Could not convert serialize Datagram with error: " +
                  a.message +
                  ". Not sending message.",
                errorDomain: "ZenonDataChannelWrapper send",
              });
            }
          }),
          (n.$11 = function (t) {
            if (this.$6 == null) return !0;
            var e = this.$6.encryptSctpMessage(this.$3, t.message);
            return e == null ? !1 : ((t.message = e), !0);
          }),
          (n.close = function () {
            this.$2.close();
          }),
          (n.getState = function () {
            return this.$2.readyState;
          }),
          (n.setListeners = function (t) {
            this.$5 = t;
          }),
          (n.$14 = function () {
            for (; this.$1.length > 0 && this.getState() === "open"; )
              this.$10(this.$1.shift());
          }),
          (n.$9 = function (n) {
            this.getState() !== "closed" && this.$1.length < e
              ? this.$1.push(n)
              : r(
                  "ZenonInfraActionsLogger",
                ).logCheckpointEmployeesTestUsersOnly({
                  checkpoint:
                    "We failed to queue message for" +
                    this.$3 +
                    " max queue size of" +
                    e +
                    " current queue size: " +
                    this.$1.length +
                    " current data channel state is " +
                    this.getState(),
                });
          }),
          (n.$8 = function () {
            var e = this;
            return function (t, n, r) {
              var o;
              (o = e.$5) == null ||
                o.onMessage({ message: t, sender: n, senderNodeId: r });
            };
          }),
          (n.$12 = function (t, n) {
            if (n == null) {
              this.$7(t, "", -1);
              return;
            }
            var e = this.$4.toUserId(n);
            if (e == null) {
              r("ZenonInfraActionsLogger").logError({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__ERROR,
                error: "Could not find associated sender id of node id. " + n,
                errorDomain: "ZenonDataChannelWrapper _onSctpMessage",
              });
              return;
            }
            if (this.$6 == null) {
              this.$7(t, e, n);
              return;
            }
            this.$6.onSctpMessage(this.$3, t, e, n);
          }),
          (n.$13 = function (t) {
            try {
              var e = o("CompactSerializerPolyfill").deserialize(
                new Uint8Array(t),
                o("SctpSctpDatagramSerializers").deserializeDatagram,
              );
              if (e.sender === 0)
                throw r("err")(
                  "Incorrectly deserialized datagram. Received a node id of 0.",
                );
              this.$12(
                o("RequestStreamBodyUtils").uint8ArrayToString(e.payload),
                e.sender,
              );
            } catch (e) {
              var n = r("getErrorSafe")(e);
              (r("ZenonInfraActionsLogger").logError({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__ERROR,
                error:
                  "Could not deserialize datagram with error " +
                  n.message +
                  ". Treating as unwrapped payload.",
                errorDomain: "ZenonDataChannelWrapper onMessage",
              }),
                this.$12(
                  o("RequestStreamBodyUtils").uint8ArrayToString(
                    new Uint8Array(t),
                  ),
                  null,
                ));
            }
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
