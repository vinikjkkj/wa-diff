__d(
  "WAWebDBGroupParticipant",
  [
    "$InternalEnum",
    "WABatcher",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAWebDBGroupParticipantHelpers",
    "WAWebDBParticipantTypes",
    "WAWebGroupUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebPhashUtils",
    "WAWebPnhCagUtils",
    "WAWebSchemaParticipant",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 3e3;
    async function g(e) {
      var t = e.groupInfos,
        n = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .bulkGet(
            t.map(function (e) {
              return e.id.toString();
            }),
          ),
        r = new Map();
      n.forEach(function (e) {
        return e && r.set(e.groupId, e.senderKey);
      });
      var a = t.map(function (e) {
        var t,
          n,
          a,
          i = [],
          l = [],
          s = e.id.toString(),
          u = r.get(s),
          c = [];
        (t = e.participants) == null ||
          t.forEach(function (e) {
            (e.isAdmin && i.push(e.id),
              e.isSuperAdmin && l.push(e.id),
              c.push(e.id));
          });
        var d = !!e.defaultSubgroup,
          m = d
            ? o("WAWebPnhCagUtils").augmentedCagGroupParticipantList(
                o("WAWebGroupUtils").amIGroupAdmin(i),
                e.participants,
              )
            : c,
          p =
            (n =
              (a = e.pastParticipants) == null
                ? void 0
                : a.map(function (e) {
                    var t = e.id,
                      n = e.leaveReason,
                      r = e.leaveTs;
                    return { jid: t.toString(), leaveTs: r, leaveReason: n };
                  })) != null
              ? n
              : [],
          _ = new Map();
        if (
          (m.forEach(function (e) {
            _.set(String(e), !1);
          }),
          u)
        ) {
          var f = new Set(
            m.map(function (e) {
              return o("WAWebWidFactory").asUserWidOrThrow(e).user;
            }),
          );
          u.forEach(function (e, t) {
            f.has(o("WAWebWidFactory").createWid(t).user) && _.set(t, e);
          });
        }
        return {
          groupId: s,
          participants: c.map(String),
          pastParticipants: p,
          admins: i.map(String),
          superAdmins: l.map(String),
          senderKey: _,
          rotateKey: !1,
          staleType: o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE,
        };
      });
      return o("WAWebSchemaParticipant")
        .getParticipantTable()
        .bulkCreateOrReplace(a);
    }
    function h(e) {
      var t = e.admins,
        n = e.deviceIds,
        r = e.group,
        a = e.groupInfo,
        i = e.participants,
        l = e.superAdmins,
        s = !1;
      a != null && (s = !!a.defaultSubgroup);
      var u = r.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var r = e[0],
            a = await r.get(u);
          if (!a)
            return r.create(
              o("WAWebDBGroupParticipantHelpers").createParticipantInfo(u, {
                participants: i,
                admins: t,
                superAdmins: l,
                deviceIds: n,
              }),
            );
          await r.createOrReplace(
            s
              ? o("WAWebDBGroupParticipantHelpers").replaceParticipantInfoCAG(
                  a,
                  { participants: i, admins: t, superAdmins: l, deviceIds: n },
                )
              : o("WAWebDBGroupParticipantHelpers").replaceParticipantInfo(a, {
                  participants: i,
                  admins: t,
                  superAdmins: l,
                  deviceIds: n,
                }),
          );
        });
    }
    function y(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (t) {
          var n = t[0],
            r = await n.bulkGet(
              e.map(function (e) {
                return e.groupId;
              }),
            ),
            a = e.map(function (e, t) {
              var n = e.groupId,
                a = e.pastParticipants,
                i = r[t];
              return i
                ? o("WAWebDBGroupParticipantHelpers").addPastParticipantInfo(
                    i,
                    a,
                  )
                : o("WAWebDBGroupParticipantHelpers").createParticipantInfo(n, {
                    pastParticipants: a,
                  });
            });
          return n.bulkCreateOrReplace(a);
        });
    }
    var C = (function () {
        return o("WABatcher").batch({ delayMs: f }, async function (t) {
          var n = Array.from(
            new Set(
              t.map(function (e) {
                return e.id;
              }),
            ),
          );
          return (
            await o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["participant"], async function (r) {
                var a = r[0],
                  i = new Map(
                    (await a.bulkGet(n)).filter(Boolean).map(function (e) {
                      return [e.groupId, e];
                    }),
                  ),
                  l = [],
                  u = [];
                return (
                  t.forEach(function (e) {
                    var t = e.data,
                      n = e.groupMetadata,
                      r = e.id,
                      a = !!(n != null && n.defaultSubgroup),
                      s = i.get(r);
                    if (!s) {
                      l.length < 3 && l.push(r);
                      return;
                    }
                    var c = t.participants,
                      d = null;
                    switch (t.action) {
                      case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .ADD:
                        d = a
                          ? o(
                              "WAWebDBGroupParticipantHelpers",
                            ).addParticipantInfoCAG(s, c, t.deviceIds)
                          : o(
                              "WAWebDBGroupParticipantHelpers",
                            ).addParticipantInfo({
                              deviceIds: t.deviceIds,
                              oldDBRecord: s,
                              participantsAdded: c,
                            });
                        break;
                      case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .REMOVE:
                        d = a
                          ? o(
                              "WAWebDBGroupParticipantHelpers",
                            ).removeParticipantInfoCAG(
                              s,
                              c,
                              t.timestamp,
                              t.author,
                              t.reason,
                            )
                          : o(
                              "WAWebDBGroupParticipantHelpers",
                            ).removeParticipantInfo(
                              s,
                              c,
                              t.timestamp,
                              t.author,
                              t.reason,
                            );
                        break;
                      case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .DEMOTE:
                        d = a
                          ? o(
                              "WAWebDBGroupParticipantHelpers",
                            ).changeParticipantAdminInfoCAG(
                              s,
                              c,
                              t.deviceIds,
                              o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                                .DEMOTE,
                            )
                          : o(
                              "WAWebDBGroupParticipantHelpers",
                            ).changeParticipantAdminInfo(
                              s,
                              c,
                              t.deviceIds,
                              o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                                .DEMOTE,
                            );
                        break;
                      case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .PROMOTE:
                        d = a
                          ? o(
                              "WAWebDBGroupParticipantHelpers",
                            ).changeParticipantAdminInfoCAG(
                              s,
                              c,
                              t.deviceIds,
                              o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                                .PROMOTE,
                            )
                          : o(
                              "WAWebDBGroupParticipantHelpers",
                            ).changeParticipantAdminInfo(
                              s,
                              c,
                              t.deviceIds,
                              o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                                .PROMOTE,
                            );
                        break;
                      default:
                        u.length < 3 && u.push(t.action);
                    }
                    d != null && i.set(d.groupId, d);
                  }),
                  l.length > 0 &&
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "updateParticipantsBatched: no local record found for ",
                          " groups => ",
                          "",
                        ])),
                      l.length,
                      l,
                    ),
                  u.length > 0 &&
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "updateParticipants: failed with ",
                          " unknown actions => ",
                          "",
                        ])),
                      u.length,
                      u,
                    ),
                  a.bulkCreateOrReplace(Array.from(i.values()))
                );
              }),
            t.map(function (e) {})
          );
        });
      })(),
      b = (function () {
        return o("WABatcher").batch({ delayMs: f }, async function (e) {
          var t = Array.from(
            new Set(
              e.map(function (e) {
                return e.id;
              }),
            ),
          );
          return (
            await o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["participant"], async function (n) {
                var r = n[0],
                  a = new Map(
                    (await r.bulkGet(t)).filter(Boolean).map(function (e) {
                      return [e.groupId, e];
                    }),
                  ),
                  i = [],
                  l = [];
                return (
                  e.forEach(function (e) {
                    var t = e.data,
                      n = e.id,
                      r = a.get(n);
                    if (!r) {
                      i.length < 3 && i.push(n);
                      return;
                    }
                    var s = t.participants,
                      u = null;
                    switch (t.action) {
                      case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .LINKED_GROUP_PROMOTE:
                        u = o(
                          "WAWebDBGroupParticipantHelpers",
                        ).changeCommunityParticipantAdminInfo(
                          r,
                          s,
                          o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                            .LINKED_GROUP_PROMOTE,
                        );
                        break;
                      case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .LINKED_GROUP_DEMOTE:
                        u = o(
                          "WAWebDBGroupParticipantHelpers",
                        ).changeCommunityParticipantAdminInfo(
                          r,
                          s,
                          o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                            .LINKED_GROUP_DEMOTE,
                        );
                        break;
                      default:
                        l.length < 3 && l.push(t.action);
                    }
                    u != null && a.set(u.groupId, u);
                  }),
                  i.length > 0 &&
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "updateCommunityParticipantsBatched: no local record found for ",
                          " groups => ",
                          "",
                        ])),
                      i.length,
                      i,
                    ),
                  l.length > 0 &&
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "updateCommunityParticipantsBatched: failed with ",
                          " unknown actions => ",
                          "",
                        ])),
                      l.length,
                      l,
                    ),
                  r.bulkCreateOrReplace(Array.from(a.values()))
                );
              }),
            e.map(function (e) {})
          );
        });
      })();
    function v(e) {
      var t = e.data,
        n = e.group,
        a = e.isOffline,
        i = a === void 0 ? !1 : a;
      if (i) return b({ id: String(n), data: t });
      var l = t.participants,
        s = n.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var n = e[0],
            a = await n.get(s);
          if (!a)
            throw new (o("WAWebDBParticipantTypes").GroupUnSyncedError)(
              "updateCommunityParticipants: group participant info missing for action " +
                t.action,
            );
          switch (t.action) {
            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
              .LINKED_GROUP_PROMOTE:
              return n.createOrReplace(
                o(
                  "WAWebDBGroupParticipantHelpers",
                ).changeCommunityParticipantAdminInfo(
                  a,
                  l,
                  o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                    .LINKED_GROUP_PROMOTE,
                ),
              );
            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
              .LINKED_GROUP_DEMOTE:
              return n.createOrReplace(
                o(
                  "WAWebDBGroupParticipantHelpers",
                ).changeCommunityParticipantAdminInfo(
                  a,
                  l,
                  o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                    .LINKED_GROUP_DEMOTE,
                ),
              );
            default:
              throw r("err")(
                "updateCommunityParticipants: failed with unknown action " +
                  t.action,
              );
          }
        });
    }
    function S(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (n) {
          var r = n[0],
            a = await r.get(e.toString());
          if (!a)
            throw new (o("WAWebDBParticipantTypes").GroupUnSyncedError)(
              "updateParticipants: group participant info missing when trying to update super admin",
            );
          return r.createOrReplace(
            babelHelpers.extends({}, a, { superAdmins: [t.toString()] }),
          );
        });
    }
    function R(e, t, n, a) {
      a === void 0 && (a = !1);
      var i = !!(n != null && n.defaultSubgroup);
      if (a) return C({ id: String(e), data: t, groupMetadata: n });
      var l = t.participants,
        s = e.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var n = e[0],
            a = await n.get(s);
          if (!a)
            throw new (o("WAWebDBParticipantTypes").GroupUnSyncedError)(
              "updateParticipants: group participant info missing for action " +
                t.action,
            );
          switch (t.action) {
            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.ADD:
              return n.createOrReplace(
                i
                  ? o("WAWebDBGroupParticipantHelpers").addParticipantInfoCAG(
                      a,
                      l,
                      t.deviceIds,
                    )
                  : o("WAWebDBGroupParticipantHelpers").addParticipantInfo({
                      deviceIds: t.deviceIds,
                      oldDBRecord: a,
                      participantsAdded: l,
                    }),
              );
            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.REMOVE:
              return n.createOrReplace(
                i
                  ? o(
                      "WAWebDBGroupParticipantHelpers",
                    ).removeParticipantInfoCAG(
                      a,
                      l,
                      t.timestamp,
                      t.author,
                      t.reason,
                    )
                  : o("WAWebDBGroupParticipantHelpers").removeParticipantInfo(
                      a,
                      l,
                      t.timestamp,
                      t.author,
                      t.reason,
                    ),
              );
            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE:
              return n.createOrReplace(
                i
                  ? o(
                      "WAWebDBGroupParticipantHelpers",
                    ).changeParticipantAdminInfoCAG(
                      a,
                      l,
                      t.deviceIds,
                      o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE,
                    )
                  : o(
                      "WAWebDBGroupParticipantHelpers",
                    ).changeParticipantAdminInfo(
                      a,
                      l,
                      t.deviceIds,
                      o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE,
                    ),
              );
            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE:
              return n.createOrReplace(
                i
                  ? o(
                      "WAWebDBGroupParticipantHelpers",
                    ).changeParticipantAdminInfoCAG(
                      a,
                      l,
                      t.deviceIds,
                      o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .PROMOTE,
                    )
                  : o(
                      "WAWebDBGroupParticipantHelpers",
                    ).changeParticipantAdminInfo(
                      a,
                      l,
                      t.deviceIds,
                      o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                        .PROMOTE,
                    ),
              );
            default:
              throw r("err")(
                "updateParticipants: failed with unknown action " + t.action,
              );
          }
        });
    }
    var L = n("$InternalEnum").Mirrored(["Success", "Error"]);
    async function E(e, t) {
      var n = L.Error;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["participant", "group-metadata"], async function (a) {
            var i = a[0],
              l = a[1],
              s = o("WAWebLidMigrationUtils").toAddressingModeFactory(t);
            try {
              var u = r("WANullthrows")(
                  await i.get(e.toString()),
                  "missing participant record to migrate",
                ),
                c = Array.from(u.senderKey.entries()),
                m = o("WAWebGroupUtils").amIGroupAdmin(u.admins),
                p = {
                  admins: u.admins.map(function (e) {
                    return r("WANullthrows")(
                      s(o("WAWebWidFactory").createWid(e)),
                      "admin missing a LID-PN mapping",
                    ).toString();
                  }),
                  participants: u.participants.map(function (e) {
                    if (!m && !t) {
                      var n = o("WAWebWidFactory").createUserWidOrThrow(e);
                      return r("WANullthrows")(
                        o("WAWebLidMigrationUtils").toLid(n),
                        "participant missing a LID mapping",
                      ).toString();
                    }
                    return r("WANullthrows")(
                      s(o("WAWebWidFactory").createWid(e)),
                      "participant missing a LID-PN mapping",
                    ).toString();
                  }),
                  senderKey: new Map(
                    c.map(function (e) {
                      var t = e[0],
                        n = e[1];
                      return [k(t, s).toString(), !1];
                    }),
                  ),
                },
                _ = { isLidAddressingMode: t };
              (await Promise.all([
                i.merge(e.toString(), p),
                l.merge(e.toString(), _),
              ]),
                (n = L.Success));
            } catch (t) {
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "addressing mode migration failed for ",
                    ": ",
                    "",
                  ])),
                e,
                r("getErrorSafe")(t).message,
              );
            }
          }),
        n
      );
    }
    function k(e, t) {
      var n,
        a = o("WAWebWidFactory").createDeviceWidOrThrow(e),
        i = r("WANullthrows")(
          t(o("WAWebWidFactory").asUserWidOrThrow(a)),
          "senderkey device missing a LID-PN mapping",
        );
      return o("WAWebWidFactory")
        .createDeviceWidFromUserAndDevice(
          i.user,
          i.server,
          (n = a.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
        )
        .toString();
    }
    function I(e) {
      var t = e.group;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], function (e) {
          var n = e[0];
          return n.merge(String(t), {
            staleType: o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT,
          });
        });
    }
    function T(e) {
      var t = e.groupIds;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], function (e) {
          var n = e[0];
          return n.bulkCreateOrMerge(
            t.map(function (e) {
              return {
                groupId: String(e),
                staleType: o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT,
              };
            }),
          );
        });
    }
    function D(e) {
      var t = e.group,
        n = e.newId,
        r = e.oldId,
        a = String(t);
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], async function (e) {
          var t = e[0],
            i = await t.get(a);
          if (!i)
            throw new (o("WAWebDBParticipantTypes").GroupUnSyncedError)(
              "modifyGroupParticipant: group participant info missing",
            );
          return t.createOrReplace(
            o("WAWebDBGroupParticipantHelpers").modifyParticipantInfo(i, r, n),
          );
        });
    }
    async function x(e) {
      var t,
        n,
        r,
        a,
        i,
        l = e.groupWid,
        s = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .get(String(l));
      if (!s) return null;
      if (s.senderKey == null) {
        var u,
          c,
          d,
          p,
          _ = (u = s.admins) == null ? void 0 : u.length,
          f = (c = s.superAdmins) == null ? void 0 : c.length,
          g = (d = s.participants) == null ? void 0 : d.length,
          h = (p = s.pastParticipants) == null ? void 0 : p.length;
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "getGroupParticipant: group participant info missing sender key in ",
                  ": admins ",
                  ", superAdmins ",
                  ", participants ",
                  ", pastParticipants ",
                  ", rotateKey ",
                  ", version ",
                  ", staleType ",
                  "",
                ])),
              l.toString(),
              _,
              f,
              g,
              h,
              s.rotateKey,
              s.version,
              s.staleType,
            )
            .sendLogs("get-group-participant-missing-sender-key"),
          null
        );
      }
      var y = new Set(s.admins),
        C = new Set(s.superAdmins),
        b =
          (t =
            (n = s.participants) == null
              ? void 0
              : n.map(function (e) {
                  return {
                    id: o("WAWebWidFactory").createWid(e),
                    isAdmin: y.has(e),
                    isSuperAdmin: C.has(e),
                  };
                })) != null
            ? t
            : [],
        v =
          (r =
            (a = s.pastParticipants) == null
              ? void 0
              : a.map(function (e) {
                  var t = e.jid,
                    n = e.leaveReason,
                    r = e.leaveTs;
                  return {
                    id: o("WAWebWidFactory").createWid(t),
                    leaveTs: r,
                    leaveReason: n,
                  };
                })) != null
            ? r
            : [];
      o("WAWebWamGroupMetricCache").cacheGroupMetrics(s);
      var S =
        s.deviceSyncComplete != null && !s.deviceSyncComplete
          ? o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT
          : void 0;
      return {
        participants: b,
        pastParticipants: v,
        staleType: (i = s.staleType) != null ? i : S,
        deviceCount: s.senderKey.size,
      };
    }
    async function $(e) {
      try {
        var t = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .get(String(e));
        if (!(t != null && t.participants)) return null;
        var n = t.participants.map(function (e) {
          return o("WAWebWidFactory").createWid(e);
        });
        return o("WAWebPhashUtils").phashV2(n);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "computeGroupParticipantsHash: ",
                  "",
                ])),
              e,
            )
            .sendLogs("compute-group-participants-hash-error"),
          null
        );
      }
    }
    ((l.addParticipantInfo = (_ = o(
      "WAWebDBGroupParticipantHelpers",
    )).addParticipantInfo),
      (l.addParticipantInfoCAG = _.addParticipantInfoCAG),
      (l.createParticipantInfo = _.createParticipantInfo),
      (l.removeParticipantInfo = _.removeParticipantInfo),
      (l.removeParticipantInfoCAG = _.removeParticipantInfoCAG),
      (l.replaceParticipantInfo = _.replaceParticipantInfo),
      (l.replaceParticipantInfoCAG = _.replaceParticipantInfoCAG),
      (l.updateGroupParticipantTableWithoutDeviceSync = g),
      (l.replaceParticipants = h),
      (l.addPastParticipants = y),
      (l.updateCommunityParticipants = v),
      (l.setDBGroupSuperAdmin = S),
      (l.updateDBParticipants = R),
      (l.AddressingModeMigrationResult = L),
      (l.migrateParticipantInfoAddressingMode = E),
      (l.markGroupParticipantStale = I),
      (l.bulkMarkGroupParticipantStale = T),
      (l.modifyGroupParticipant = D),
      (l.getGroupParticipant = x),
      (l.computeGroupParticipantsHash = $));
  },
  98,
);
