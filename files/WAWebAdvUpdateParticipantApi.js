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
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          try {
            r = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .equals(["participants"], String(e));
          } catch (e) {
            throw (
              String(e).includes("Failed to read large IndexedDB value") &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "updateGroupParticipantsInTransaction: error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("indexeddb-participant-read-large-value"),
              e
            );
          }
          var a = _(r, "updateGroupParticipantsInTransaction").map(
            function (r) {
              var a = r.rotateKey,
                i = new Map(r.senderKey);
              return (
                n.forEach(function (t) {
                  var n,
                    r = String(
                      o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                        e.user,
                        e.server,
                        t,
                      ),
                    );
                  ((a = a || ((n = i.get(r)) != null ? n : !1)), i.delete(r));
                }),
                a &&
                  i.forEach(function (e, t) {
                    return i.set(t, !1);
                  }),
                t.forEach(function (t) {
                  i.set(
                    String(
                      o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                        e.user,
                        e.server,
                        t,
                      ),
                    ),
                    !1,
                  );
                }),
                f({ added: t, oldRecord: r, removed: n, rotateKey: a, wid: e }),
                babelHelpers.extends({}, r, { senderKey: i, rotateKey: a })
              );
            },
          );
          return o("WAWebSchemaParticipant")
            .getParticipantTable()
            .bulkCreateOrReplace(a);
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
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "bulkUpdateGroupParticipantsInTransaction: error: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("indexeddb-participant-bulk-read-large-value"),
                e
              );
            }
            var n = _(t, "bulkUpdateGroupParticipantsInTransaction");
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
                        f({
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
    function _(t, n) {
      var r = t.filter(Boolean);
      return (
        r.length !== t.length &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": participant query dropped ",
                  " null records out of ",
                  "",
                ])),
              n,
              t.length - r.length,
              t.length,
            )
            .sendLogs("participant-query-null-record"),
        r
      );
    }
    function f(e) {
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
