__d(
  "WAWebWasaRootSecretWriter",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageSerialization",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaMessage",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWasaUserPrefs",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e.isLid()
        ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
        : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
    }
    function u(e, t) {
      return new (r("WAWebMsgKey"))({
        from: s(e),
        to: e,
        id: t,
        selfDir: "out",
      });
    }
    function c(e, t, n) {
      return {
        id: t,
        from: s(e),
        to: e,
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.Protocol,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        count: null,
        t: o("WATimeUtils").unixTime(),
        ack: o("WAWebAck").ACK.CLOCK,
        local: !0,
        messageSecret: n,
      };
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield o("WAWebSchemaMessage")
            .getMessageTable()
            .createOrReplace(
              o("WAWebDBMessageSerialization").dbRowFromMessage(
                c(e, u(e, t), n),
              ),
            );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length !== 0 &&
            (yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateOrReplace(
                t.map(function (t) {
                  var n = t.secret,
                    r = t.stanzaId;
                  return o("WAWebDBMessageSerialization").dbRowFromMessage(
                    c(e, u(e, r), n),
                  );
                }),
              ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield d(e, t, n),
            yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = u(e, t),
            r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(n.toString());
          return r == null
            ? null
            : o("WAWebDBMessageSerialization").messageFromDbRow(r)
                .messageSecret;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = u(e, t);
          yield o("WAWebSchemaMessage").getMessageTable().remove(n.toString());
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.length !== 0 &&
            (yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkRemove(
                t.map(function (t) {
                  return u(e, t).toString();
                }),
              ));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
          (t != null && (yield C(e, t)),
            yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield I(t, n);
            return a == null ? !1 : (yield d(t, a.stanzaId, a.secret), !0);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] maybeRecoverWasaRootSecretFromStore failed: ",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("wasa-root-secret-recovery-failed"),
              !1
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a =
              '["' +
              o("WASyncdConst").Actions.WasaRootSecret +
              '","' +
              e.toJid() +
              '"]',
            i = yield o("WAWebSyncdDb").getSyncAction(a);
          if ((i == null ? void 0 : i.binarySyncData) == null) return null;
          var l =
              (n = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                i.binarySyncData,
              ).value) == null
                ? void 0
                : n.wasaRootSecretAction,
            s =
              l == null || (r = l.secrets) == null
                ? void 0
                : r.find(function (e) {
                    return e.id === t;
                  }),
            u = s == null ? void 0 : s.id,
            c = s == null ? void 0 : s.rootSecret;
          return u == null || c == null
            ? null
            : { stanzaId: u, secret: new Uint8Array(c) };
        })),
        T.apply(this, arguments)
      );
    }
    ((l.getWasaRootSecretMsgKeyForId = u),
      (l.upsertWasaRootSecretForId = d),
      (l.upsertWasaRootSecretsForIds = p),
      (l.applyWasaRootSecretForId = f),
      (l.getWasaRootSecretForId = h),
      (l.removeWasaRootSecretForId = C),
      (l.removeWasaRootSecretsForIds = v),
      (l.clearWasaRootSecret = R),
      (l.maybeRecoverWasaRootSecretFromStore = E));
  },
  98,
);
