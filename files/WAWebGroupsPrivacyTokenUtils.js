__d(
  "WAWebGroupsPrivacyTokenUtils",
  ["WAWebSchemaChat", "WAWebTrustedContactsUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.tcToken,
        n = e.tcTokenTimestamp;
      return t == null ||
        n == null ||
        o("WAWebTrustedContactsUtils").isTokenExpired(
          n,
          o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
        )
        ? null
        : { anyElementValue: new Uint8Array(t) };
    }
    function s(t, n) {
      var r = new Map();
      return (
        n.map(function (n) {
          var o = t.find(function (e) {
            return (e == null ? void 0 : e.id) === n.toString();
          });
          o != null && r.set(n, e(o));
        }),
        r
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat")
            .getChatTable()
            .bulkGet(
              e.map(function (e) {
                return e.toString();
              }),
              !0,
            );
          return s(t, e);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.getPermissionTokenMap = s), (l.getPermissionTokenMapForChatIds = u));
  },
  98,
);
