__d(
  "WAWebAdvUpdateParticipantApi",
  [
    "WAJids",
    "WALogger",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebPostSenderKeyExpiredMetric",
    "WAWebSchemaParticipant",
    "WAWebUserUtils",
    "WAWebWamEnumExpiryReason",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n, r) {
      var a;
      try {
        a = await o("WAWebSchemaParticipant")
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
      var i = await p(a, "updateGroupParticipantsInTransaction", function () {
          return o("WAWebSchemaParticipant")
            .getParticipantTable()
            .equalsPrimaryKeys(["participants"], String(t));
        }),
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
            g({ added: n, oldRecord: e, removed: r, rotateKey: a, wid: t }),
            babelHelpers.extends({}, e, { senderKey: i, rotateKey: a })
          );
        });
      return o("WAWebSchemaParticipant")
        .getParticipantTable()
        .bulkCreateOrReplace(l);
    }
    async function m(e) {
      if (e.length !== 0) {
        var t;
        try {
          t = await o("WAWebSchemaParticipant")
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
        var n = await p(
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
                        o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                          i.wid.user,
                          i.wid.server,
                          e,
                        ),
                      );
                    ((t = t || ((r = n.get(a)) != null ? r : !1)), n.delete(a));
                  }),
                    t &&
                      n.forEach(function (e, t) {
                        return n.set(t, !1);
                      }),
                    l.forEach(function (e) {
                      n.set(
                        String(
                          o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                            i.wid.user,
                            i.wid.server,
                            e,
                          ),
                        ),
                        !1,
                      );
                    }),
                    g({
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
    }
    async function p(e, t, n) {
      var a = e.filter(Boolean);
      if (a.length === e.length) return a;
      var i = await _(a, n),
        l = i.summary,
        s = i.unreadableGroupIds;
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
            e.length - a.length,
            e.length,
            l,
          )
          .sendLogs("participant-query-null-record"),
        s.length > 0 &&
          o("WAWebABProps").getABPropConfigValue(
            "web_resync_unreadable_participant_rows",
          ) &&
          r("WAWeb-dexie").ignoreTransaction(function () {
            return f(s);
          }),
        a
      );
    }
    async function _(e, t) {
      try {
        var n = new Set(
            e.map(function (e) {
              return String(e.groupId);
            }),
          ),
          r = await t(),
          a = r.filter(function (e) {
            return !n.has(e);
          }),
          i = await o("WAWebSchemaParticipant")
            .getParticipantTable()
            .bulkGet(a),
          l = a.filter(function (e, t) {
            return i[t] == null;
          });
        return {
          summary:
            "primary keys: " +
            r.length +
            ", missing: " +
            a.length +
            ", unreadable by primary key: " +
            l.length,
          unreadableGroupIds: l,
        };
      } catch (e) {
        return {
          summary: "diagnostics failed: " + String(e),
          unreadableGroupIds: [],
        };
      }
    }
    async function f(e) {
      try {
        (await o("WAWebSchemaParticipant").getParticipantTable().bulkRemove(e),
          o("WAWebBackendApi").frontendFireAndForget(
            "resyncGroupParticipantsForChats",
            { chatIds: e },
          ));
      } catch (t) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "removeAndResyncGroups: removing ",
                " unreadable participant records failed",
              ])),
            e.length,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("participant-unreadable-record-recovery-failed");
      }
    }
    function g(e) {
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
          : o("WAWebUserUtils").isMeAccount(i)
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
    ((l.updateGroupParticipantsInTransaction = d),
      (l.bulkUpdateGroupParticipantsInTransaction = m));
  },
  98,
);
