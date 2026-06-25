__d(
  "WAWebWasaRootSecretDb",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageSerialization",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isLid()
        ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
        : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
    }
    function s(t, n) {
      return new (r("WAWebMsgKey"))({
        from: e(t),
        to: t,
        id: n,
        selfDir: "out",
      });
    }
    function u(t, n, r) {
      return {
        id: n,
        from: e(t),
        to: t,
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.Protocol,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        count: null,
        t: o("WATimeUtils").unixTime(),
        ack: o("WAWebAck").ACK.CLOCK,
        local: !0,
        messageSecret: r,
      };
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield o("WAWebSchemaMessage")
            .getMessageTable()
            .createOrReplace(
              o("WAWebDBMessageSerialization").dbRowFromMessage(
                u(e, s(e, t), n),
              ),
            );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length !== 0 &&
            (yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateOrReplace(
                t.map(function (t) {
                  var n = t.secret,
                    r = t.stanzaId;
                  return o("WAWebDBMessageSerialization").dbRowFromMessage(
                    u(e, s(e, r), n),
                  );
                }),
              ));
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
          var n = s(e, t),
            r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(n.toString());
          return r == null
            ? null
            : o("WAWebDBMessageSerialization").messageFromDbRow(r)
                .messageSecret;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = s(e, t);
          yield o("WAWebSchemaMessage").getMessageTable().remove(n.toString());
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length !== 0 &&
            (yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkRemove(
                t.map(function (t) {
                  return s(e, t).toString();
                }),
              ));
        })),
        C.apply(this, arguments)
      );
    }
    ((l.getWasaRootSecretMsgKeyForId = s),
      (l.upsertWasaRootSecretForId = c),
      (l.upsertWasaRootSecretsForIds = m),
      (l.getWasaRootSecretForId = _),
      (l.removeWasaRootSecretForId = g),
      (l.removeWasaRootSecretsForIds = y));
  },
  98,
);
