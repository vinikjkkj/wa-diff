__d(
  "WAWebOfflineResumePreAckHandler",
  [
    "WABatcher",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebSchemaDanglingReceipt",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWap").S_WHATSAPP_NET.toString(),
      c = o("WAWap").G_US.toString();
    async function d(e) {
      var t,
        n,
        r,
        o,
        a = e.attrs.class.toString();
      if (!(a !== "notification" && a !== "receipt")) {
        var i = e.attrs.id.toString(),
          l = e.tag,
          s = e.attrs.to.toString(),
          u = (t = e.attrs.participant) == null ? void 0 : t.toString(),
          c = (n = e.attrs.type) == null ? void 0 : n.toString(),
          d =
            (r = e.attrs) != null && r.error
              ? parseInt(
                  (o = e.attrs) == null ? void 0 : o.error.toString(),
                  10,
                )
              : void 0;
        _({
          ackClass: a,
          ackId: i,
          to: s,
          tag: l,
          participant: u,
          type: c,
          error: d,
        });
      }
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
    async function p(t) {
      var n =
        t.type != null
          ? o("WAWap").CUSTOM_STRING(t.type)
          : o("WAWap").DROP_ATTR;
      try {
        var r = o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(t.ackId),
          class: o("WAWap").CUSTOM_STRING(t.ackClass),
          to: m(t.to),
          type: n,
          participant:
            t.participant != null
              ? o("WAWebCommsWapMd").DEVICE_JID(
                  o("WAWebWidFactory").createWid(t.participant),
                )
              : o("WAWap").DROP_ATTR,
          error:
            t.error != null ? o("WAWap").INT(t.error) : o("WAWap").DROP_ATTR,
        });
        return o("WADeprecatedSendIq").deprecatedCastStanza(r, { preAck: !0 });
      } catch (n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to send offline pre-ack for envelope: ",
                " with error: ",
                "",
              ])),
            t.ackClass,
            n,
          )
          .sendLogs("offline-pre-ack");
      }
    }
    var _ = (function () {
      return o("WABatcher").batch(
        { delayMs: 3e3, maxSize: 400 },
        async function (e) {
          try {
            o("WAWebUserPrefsMultiDevice").isRegistered() &&
              (await o("WAWebSchemaDanglingReceipt")
                .getTable()
                .create({ receipts: [], acks: e }));
          } catch (t) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "persistPreAcksBatched: failed for ",
                    " pre-acks: ",
                    ", stack: ",
                    "",
                  ])),
                e.length,
                t,
                t instanceof Error ? t.stack : "",
              )
              .sendLogs("persist-pre-acks-batched-failed", { sampling: 0.01 });
          }
          return [];
        },
      );
    })();
    ((l.parseAndSerializeOfflinePreAck = d), (l.sendOfflinePreAck = p));
  },
  98,
);
