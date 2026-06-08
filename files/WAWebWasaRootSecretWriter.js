__d(
  "WAWebWasaRootSecretWriter",
  [
    "WAHex",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageSerialization",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWasaUserPrefs",
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
        id: o("WAHex").toHex(n).toLowerCase(),
        selfDir: "out",
      });
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = {
            id: s(t, n),
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
          (yield o("WAWebSchemaMessage")
            .getMessageTable()
            .createOrReplace(
              o("WAWebDBMessageSerialization").dbRowFromMessage(a),
            ),
            yield o("WAWebWasaUserPrefs").setWasaActiveTargetMessageKey(
              t.user,
              n,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = s(e, t),
            r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(n.toString());
          return r == null
            ? null
            : o("WAWebDBMessageSerialization").messageFromDbRow(r)
                .messageSecret;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWasaUserPrefs").getWasaActiveTargetMessageKey(e.user);
          if (t != null) {
            var n = s(e, t);
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .remove(n.toString());
          }
          yield o("WAWebWasaUserPrefs").clearWasaActiveTargetMessageKey(e.user);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getWasaCarrierMsgKey = s),
      (l.applyWasaRootSecret = u),
      (l.getWasaCarrierSecret = d),
      (l.clearWasaRootSecret = p));
  },
  98,
);
