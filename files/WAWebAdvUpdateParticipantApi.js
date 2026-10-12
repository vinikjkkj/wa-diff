__d(
  "WAWebAdvUpdateParticipantApi",
  [
    "WAJids",
    "WALogger",
    "WAWebPostSenderKeyExpiredMetric",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumExpiryReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a;
          try {
            a = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .equals(["participants"], String(t));
          } catch (t) {
            throw (
              String(t).includes("Failed to read large IndexedDB value") &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "updateGroupParticipantsInTransaction: error: ",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("indexeddb-participant-read-large-value"),
              t
            );
          }
          var i = yield _(
              a,
              "updateGroupParticipantsInTransaction",
              function () {
                return o("WAWebSchemaParticipant")
                  .getParticipantTable()
                  .equalsPrimaryKeys(["participants"], String(t));
              },
            ),
            l = i.map(function (e) {
              var a = e.rotateKey,
                i = new Map(e.senderKey);
              return (
                r.forEach(function (e) {
                  var n,
                    r = String(
                      o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                        t.user,
                        t.server,
                        e,
                      ),
                    );
                  ((a = a || ((n = i.get(r)) != null ? n : !1)), i.delete(r));
                }),
                a &&
                  i.forEach(function (e, t) {
                    return i.set(t, !1);
                  }),
                n.forEach(function (e) {
                  i.set(
                    String(
                      o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                        t.user,
                        t.server,
                        e,
                      ),
                    ),
                    !1,
                  );
                }),
                y({ added: n, oldRecord: e, removed: r, rotateKey: a, wid: t }),
                babelHelpers.extends({}, e, { senderKey: i, rotateKey: a })
              );
            });
          return o("WAWebSchemaParticipant")
            .getParticipantTable()
            .bulkCreateOrReplace(l);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t;
            try {
              t = yield o("WAWebSchemaParticipant")
                .getParticipantTable()
                .anyOf(
                  ["participants"],
                  e.map(function (e) {
                    return String(e.wid);
                  }),
                );
            } catch (e) {
              throw (
                String(e).includes("Failed to read large IndexedDB value") &&
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "bulkUpdateGroupParticipantsInTransaction: error: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("indexeddb-participant-bulk-read-large-value"),
                e
              );
            }
            var n = yield _(
              t,
              "bulkUpdateGroupParticipantsInTransaction",
              function () {
                return o("WAWebSchemaParticipant")
                  .getParticipantTable()
                  .anyOfPrimaryKeys(
                    ["participants"],
                    e.map(function (e) {
                      return String(e.wid);
                    }),
                  );
              },
            );
            if (n.length !== 0) {
              var r = new Map();
              e.forEach(function (e) {
                r.set(String(e.wid), e);
              });
              var a = n.map(function (e) {
                var t = e.rotateKey,
                  n = new Map(e.senderKey);
                return (
                  e.participants.forEach(function (a) {
                    var i = r.get(a);
                    if (i) {
                      var l = i.added,
                        s = i.removed,
                        u = i.wid;
                      (s.forEach(function (e) {
                        var r,
                          a = String(
                            o(
                              "WAWebWidFactory",
                            ).createDeviceWidFromUserAndDevice(
                              i.wid.user,
                              i.wid.server,
                              e,
                            ),
                          );
                        ((t = t || ((r = n.get(a)) != null ? r : !1)),
                          n.delete(a));
                      }),
                        t &&
                          n.forEach(function (e, t) {
                            return n.set(t, !1);
                          }),
                        l.forEach(function (e) {
                          n.set(
                            String(
                              o(
                                "WAWebWidFactory",
                              ).createDeviceWidFromUserAndDevice(
                                i.wid.user,
                                i.wid.server,
                                e,
                              ),
                            ),
                            !1,
                          );
                        }),
                        y({
                          added: l,
                          oldRecord: e,
                          removed: s,
                          rotateKey: t,
                          wid: u,
                        }));
                    }
                  }),
                  babelHelpers.extends({}, e, { senderKey: n, rotateKey: t })
                );
              });
              return o("WAWebSchemaParticipant")
                .getParticipantTable()
                .bulkCreateOrReplace(a);
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.filter(Boolean);
          if (r.length === e.length) return r;
          var a = yield g(r, n);
          return (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": participant query dropped ",
                    " null records out of ",
                    ", ",
                    "",
                  ])),
                t,
                e.length - r.length,
                e.length,
                a,
              )
              .sendLogs("participant-query-null-record"),
            r
          );
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
          try {
            var n = new Set(
                e.map(function (e) {
                  return String(e.groupId);
                }),
              ),
              r = yield t(),
              a = r.filter(function (e) {
                return !n.has(e);
              }),
              i = yield o("WAWebSchemaParticipant")
                .getParticipantTable()
                .bulkGet(a),
              l = i.filter(function (e) {
                return e == null;
              }).length;
            return (
              "primary keys: " +
              r.length +
              ", missing: " +
              a.length +
              ", unreadable by primary key: " +
              l
            );
          } catch (e) {
            return "diagnostics failed: " + String(e);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = e.added,
        n = e.oldRecord,
        r = e.removed,
        a = e.rotateKey,
        i = e.wid;
      if (a && !n.rotateKey) {
        var l;
        (r.includes(o("WAJids").DEFAULT_DEVICE_ID) &&
        t.includes(o("WAJids").DEFAULT_DEVICE_ID)
          ? (l = o("WAWebWamEnumExpiryReason").EXPIRY_REASON.IDENTITY_CHANGE)
          : o("WAWebUserPrefsMeUser").isMeAccount(i)
            ? (l = o("WAWebWamEnumExpiryReason").EXPIRY_REASON
                .PEER_COMPANION_UNPAIR)
            : (l = o("WAWebWamEnumExpiryReason").EXPIRY_REASON
                .OTHER_DEVICE_UNPAIR),
          o("WAWebPostSenderKeyExpiredMetric").postSenderKeyExpiredMetric({
            chatId: n.groupId,
            deviceCount: n.senderKey.size,
            expiryReason: l,
          }));
      }
    }
    ((l.updateGroupParticipantsInTransaction = c),
      (l.bulkUpdateGroupParticipantsInTransaction = m));
  },
  98,
);
