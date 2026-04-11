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
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a;
          try {
            a = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .equals(["participants"], String(t));
          } catch (t) {
            throw (
              t.toString().includes("Failed to read large IndexedDB value") &&
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
          var i = a.map(function (e) {
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
              p(t, a, e, n, r),
              babelHelpers.extends({}, e, { senderKey: i, rotateKey: a })
            );
          });
          return o("WAWebSchemaParticipant")
            .getParticipantTable()
            .bulkCreateOrReplace(i);
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
                e.toString().includes("Failed to read large IndexedDB value") &&
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
            if (t.length !== 0) {
              var n = new Map();
              e.forEach(function (e) {
                n.set(String(e.wid), e);
              });
              var r = t.map(function (e) {
                var t = e.rotateKey,
                  r = new Map(e.senderKey);
                return (
                  e.participants.forEach(function (a) {
                    var i = n.get(a);
                    if (i) {
                      var l = i.added,
                        s = i.removed,
                        u = i.wid;
                      (s.forEach(function (e) {
                        var n,
                          a = String(
                            o(
                              "WAWebWidFactory",
                            ).createDeviceWidFromUserAndDevice(
                              i.wid.user,
                              i.wid.server,
                              e,
                            ),
                          );
                        ((t = t || ((n = r.get(a)) != null ? n : !1)),
                          r.delete(a));
                      }),
                        t &&
                          r.forEach(function (e, t) {
                            return r.set(t, !1);
                          }),
                        l.forEach(function (e) {
                          r.set(
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
                        p(u, t, e, l, s));
                    }
                  }),
                  babelHelpers.extends({}, e, { senderKey: r, rotateKey: t })
                );
              });
              return o("WAWebSchemaParticipant")
                .getParticipantTable()
                .bulkCreateOrReplace(r);
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r, a) {
      if (t && !n.rotateKey) {
        var i, l;
        (a.includes(o("WAJids").DEFAULT_DEVICE_ID) &&
        r.includes(o("WAJids").DEFAULT_DEVICE_ID)
          ? (l = o("WAWebWamEnumExpiryReason").EXPIRY_REASON.IDENTITY_CHANGE)
          : (i = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null &&
              i.equals(e)
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
    ((l.updateGroupParticipantsInTransaction = u),
      (l.bulkUpdateGroupParticipantsInTransaction = d));
  },
  98,
);
