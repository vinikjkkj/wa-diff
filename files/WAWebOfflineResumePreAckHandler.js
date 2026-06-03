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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWap").S_WHATSAPP_NET.toString(),
      c = o("WAWap").G_US.toString();
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            g({
              ackClass: a,
              ackId: i,
              to: s,
              tag: l,
              participant: u,
              type: c,
              error: d,
            });
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            e.type != null
              ? o("WAWap").CUSTOM_STRING(e.type)
              : o("WAWap").DROP_ATTR;
          try {
            var n = o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(e.ackId),
              class: o("WAWap").CUSTOM_STRING(e.ackClass),
              to: p(e.to),
              type: t,
              participant:
                e.participant != null
                  ? o("WAWebCommsWapMd").DEVICE_JID(
                      o("WAWebWidFactory").createWid(e.participant),
                    )
                  : o("WAWap").DROP_ATTR,
              error:
                e.error != null
                  ? o("WAWap").INT(e.error)
                  : o("WAWap").DROP_ATTR,
            });
            return o("WADeprecatedSendIq").deprecatedCastStanza(n, {
              preAck: !0,
            });
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
        })),
        f.apply(this, arguments)
      );
    }
    var g = (function () {
      return o("WABatcher").batch(
        { delayMs: 3e3, maxSize: 400 },
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            try {
              o("WAWebUserPrefsMultiDevice").isRegistered() &&
                (yield o("WAWebSchemaDanglingReceipt")
                  .getTable()
                  .create({ receipts: [], acks: t }));
            } catch (n) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "persistPreAcksBatched: failed for ",
                      " pre-acks: ",
                      ", stack: ",
                      "",
                    ])),
                  t.length,
                  n,
                  n instanceof Error ? n.stack : "",
                )
                .sendLogs("persist-pre-acks-batched-failed", {
                  sampling: 0.01,
                });
            }
            return [];
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    })();
    ((l.parseAndSerializeOfflinePreAck = d), (l.sendOfflinePreAck = _));
  },
  98,
);
