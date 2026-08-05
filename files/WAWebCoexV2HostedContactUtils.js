__d(
  "WAWebCoexV2HostedContactUtils",
  [
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBlocklistMigration",
    "WAWebSchemaBlocklist",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebApiContact").getContactRecord(t);
            return (n == null ? void 0 : n.isHosted) === !0;
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay: failed to read peer contact record",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-peer-hosted-read-failed"),
              !1
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser()) return !1;
          try {
            return o("WAWebBlocklistMigration").applyBlocklistV2Rules()
              ? yield p(e)
              : yield f(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay: failed to read peer blocklist; treating peer as blocked",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-peer-blocklist-read-failed"),
              !0
            );
          }
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
          if (e.isRegularUserPn()) {
            var t,
              n =
                (t = yield o("WAWebApiChatCommon").getChatRecord(e)) == null
                  ? void 0
                  : t.accountLid;
            return n == null
              ? !1
              : (yield o("WAWebSchemaBlocklist").getBlocklistTable().get(n)) !=
                  null;
          }
          return h(e);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (yield h(e)) return !0;
          var t = o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").asUserWidOrThrow(e),
          );
          return t != null && (yield h(t));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            (yield o("WAWebSchemaBlocklist")
              .getBlocklistTable()
              .get(e.toString())) != null
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.isPeerCoexV2Hosted = u), (l.isPeerCoexV2Blocked = d));
  },
  98,
);
