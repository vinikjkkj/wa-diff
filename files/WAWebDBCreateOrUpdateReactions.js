__d(
  "WAWebDBCreateOrUpdateReactions",
  [
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid) &&
            (e.read = !0);
          var n = s(e),
            r = t.get(n);
          r ? r.timestamp <= e.timestamp && t.set(n, e) : t.set(n, e);
        }),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["reactions"],
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = e[0],
                    r = [],
                    a = [];
                  Array.from(t.values()).forEach(function (e) {
                    a.push([e.parentMsgKey, e.senderUserJid]);
                    var t = o("WAWebApiContact").getAlternateUserWid(
                      o("WAWebWidFactory").createUserWidOrThrow(
                        e.senderUserJid,
                      ),
                    );
                    t != null && a.push([e.parentMsgKey, t.toString()]);
                  });
                  var i = yield n.anyOf(["parentMsgKey", "senderUserJid"], a);
                  return (
                    i.forEach(function (e) {
                      var n = s(e),
                        o = t.get(n);
                      o &&
                        (o.timestamp <= e.timestamp
                          ? t.delete(n)
                          : o.senderUserJid !== e.senderUserJid &&
                            r.push([e.parentMsgKey, e.senderUserJid]));
                    }),
                    r.length > 0 && (yield n.bulkRemove(r)),
                    yield n.bulkCreateOrReplace(Array.from(t.values())),
                    Array.from(t.values())
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
      );
    }
    function s(e) {
      var t = o("WAWebWidFactory").createUserWidOrThrow(e.senderUserJid),
        n = String(o("WAWebLidMigrationUtils").toPn(t)),
        r = String(o("WAWebLidMigrationUtils").toLid(t));
      return e.parentMsgKey + "," + n + "," + r;
    }
    l.createOrUpdateReactions = e;
  },
  98,
);
