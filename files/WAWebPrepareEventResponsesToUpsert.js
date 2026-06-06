__d(
  "WAWebPrepareEventResponsesToUpsert",
  [
    "WANullthrows",
    "WAWebAddonDBTable",
    "WAWebLidMigrationUtils",
    "WAWebMaxPerGroup",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebWidFactory").createWidFromWidLike(
        r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
      );
      return (
        String(e.parentMsgKey) +
        "|" +
        String(o("WAWebLidMigrationUtils").toLid(t)) +
        "|" +
        String(o("WAWebLidMigrationUtils").toPn(t))
      );
    }
    function s(t) {
      return o("WAWebMaxPerGroup").maxPerGroup(
        t,
        function (e) {
          return e.senderTimestampMs;
        },
        e,
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.map(function (e) {
              return [
                e.parentMsgKey,
                r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
              ];
            }),
            a = s(t),
            i = yield o(
              "WAWebAddonDBTable",
            ).addonDBTable.bulkGetByParentAndSender(
              o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
              n,
            ),
            l = new Map();
          i.forEach(function (t) {
            t.kind === o("WAWebMsgType").MsgKind.EventResponseDecrypted &&
              l.set(e(t), t);
          });
          var u = [];
          return (
            a.forEach(function (t) {
              var n,
                r = l.get(e(t));
              if (!(r != null && r.senderTimestampMs > t.senderTimestampMs)) {
                var o = r != null && r.eventResponse === t.eventResponse,
                  a = (n = r == null ? void 0 : r.read) != null ? n : !1,
                  i =
                    o && a && t.read !== a
                      ? babelHelpers.extends({}, t, { read: !0 })
                      : t;
                u.push(i);
              }
            }),
            u
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.getNewestEventResponses = s), (l.prepareEventResponsesToUpsert = u));
  },
  98,
);
