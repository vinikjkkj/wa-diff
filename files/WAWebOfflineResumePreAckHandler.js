__d(
  "WAWebOfflineResumePreAckHandler",
  [
    "WABatcher",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebSchemaDanglingReceipt",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWap").S_WHATSAPP_NET.toString(),
      c = o("WAWap").G_US.toString();
    function d(t) {
      var n = o("WABatcher").batch(
        { delayMs: 3e3, maxSize: 400 },
        async function (n) {
          try {
            t() &&
              (await o("WAWebSchemaDanglingReceipt")
                .getTable()
                .create({ receipts: [], acks: n }));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "persistPreAcksBatched: failed for ",
                    " pre-acks: ",
                    ", stack: ",
                    "",
                  ])),
                n.length,
                t,
                t instanceof Error ? t.stack : "",
              )
              .sendLogs("persist-pre-acks-batched-failed", { sampling: 0.01 });
          }
          return [];
        },
      );
      return async function (e) {
        var t,
          r,
          o,
          a,
          i = e.attrs.class.toString();
        if (!(i !== "notification" && i !== "receipt")) {
          var l = e.attrs.id.toString(),
            s = e.tag,
            u = e.attrs.to.toString(),
            c = (t = e.attrs.participant) == null ? void 0 : t.toString(),
            d = (r = e.attrs.type) == null ? void 0 : r.toString(),
            m =
              (o = e.attrs) != null && o.error
                ? parseInt(
                    (a = e.attrs) == null ? void 0 : a.error.toString(),
                    10,
                  )
                : void 0;
          n({
            ackClass: i,
            ackId: l,
            to: u,
            tag: s,
            participant: c,
            type: d,
            error: m,
          });
        }
      };
    }
    function m(e) {
      switch (e) {
        case c:
          return o("WAWap").G_US;
        case u:
          return o("WAWap").S_WHATSAPP_NET;
        default:
          return o("WAWebCommsWapMd").JID(
            o("WAWebWidFactory").createWidFromWidLike(e),
          );
      }
    }
    async function p(e) {
      var t =
        e.type != null
          ? o("WAWap").CUSTOM_STRING(e.type)
          : o("WAWap").DROP_ATTR;
      try {
        var n = o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(e.ackId),
          class: o("WAWap").CUSTOM_STRING(e.ackClass),
          to: m(e.to),
          type: t,
          participant:
            e.participant != null
              ? o("WAWebCommsWapMd").DEVICE_JID(
                  o("WAWebWidFactory").createWid(e.participant),
                )
              : o("WAWap").DROP_ATTR,
          error:
            e.error != null ? o("WAWap").INT(e.error) : o("WAWap").DROP_ATTR,
        });
        return o("WADeprecatedSendIq").deprecatedCastStanza(n, { preAck: !0 });
      } catch (t) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to send offline pre-ack for envelope: ",
                " with error: ",
                "",
              ])),
            e.ackClass,
            t,
          )
          .sendLogs("offline-pre-ack");
      }
    }
    ((l.createParseAndSerializeOfflinePreAck = d), (l.sendOfflinePreAck = p));
  },
  98,
);
