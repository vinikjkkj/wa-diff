__d(
  "WAWebDBGroupParticipant",
  [
    "$InternalEnum",
    "Promise",
    "WABatcher",
    "WAJids",
    "WALogger",
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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
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
      f,
      g,
      h = 3e3;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupInfos,
            n = yield o("WAWebSchemaParticipant")
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
                        return {
                          jid: t.toString(),
                          leaveTs: r,
                          leaveReason: n,
                        };
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
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = e.admins,
        r = e.deviceIds,
        a = e.group,
        i = e.groupInfo,
        l = e.participants,
        s = e.superAdmins,
        u = !1;
      i != null && (u = !!i.defaultSubgroup);
      var c = a.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  a = yield n.get(c);
                if (!a)
                  return n.create(
                    o("WAWebDBGroupParticipantHelpers").createParticipantInfo(
                      c,
                      {
                        participants: l,
                        admins: t,
                        superAdmins: s,
                        deviceIds: r,
                      },
                    ),
                  );
                yield n.createOrReplace(
                  u
                    ? o(
                        "WAWebDBGroupParticipantHelpers",
                      ).replaceParticipantInfoCAG(a, {
                        participants: l,
                        admins: t,
                        superAdmins: s,
                        deviceIds: r,
                      })
                    : o(
                        "WAWebDBGroupParticipantHelpers",
                      ).replaceParticipantInfo(a, {
                        participants: l,
                        admins: t,
                        superAdmins: s,
                        deviceIds: r,
                      }),
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function v(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  r = yield n.bulkGet(
                    e.map(function (e) {
                      return e.groupId;
                    }),
                  ),
                  a = e.map(function (e, t) {
                    var n = e.groupId,
                      a = e.pastParticipants,
                      i = r[t];
                    return i
                      ? o(
                          "WAWebDBGroupParticipantHelpers",
                        ).addPastParticipantInfo(i, a)
                      : o(
                          "WAWebDBGroupParticipantHelpers",
                        ).createParticipantInfo(n, { pastParticipants: a });
                  });
                return n.bulkCreateOrReplace(a);
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    var S = (function () {
        return o("WABatcher").batch(
          { delayMs: h },
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = Array.from(
                  new Set(
                    t.map(function (e) {
                      return e.id;
                    }),
                  ),
                );
                return (
                  yield o("WAWebModelStorageUtils")
                    .getStorage()
                    .lock(
                      ["participant"],
                      (function () {
                        var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (n) {
                            var a = n[0],
                              i = new Map(
                                (yield a.bulkGet(r))
                                  .filter(Boolean)
                                  .map(function (e) {
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
                                  case o("WAWebDBParticipantTypes")
                                    .PARTICIPANT_OPERATION.ADD:
                                    d = a
                                      ? o(
                                          "WAWebDBGroupParticipantHelpers",
                                        ).addParticipantInfoCAG(
                                          s,
                                          c,
                                          t.deviceIds,
                                        )
                                      : o(
                                          "WAWebDBGroupParticipantHelpers",
                                        ).addParticipantInfo({
                                          deviceIds: t.deviceIds,
                                          oldDBRecord: s,
                                          participantsAdded: c,
                                        });
                                    break;
                                  case o("WAWebDBParticipantTypes")
                                    .PARTICIPANT_OPERATION.REMOVE:
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
                                  case o("WAWebDBParticipantTypes")
                                    .PARTICIPANT_OPERATION.DEMOTE:
                                    d = a
                                      ? o(
                                          "WAWebDBGroupParticipantHelpers",
                                        ).changeParticipantAdminInfoCAG(
                                          s,
                                          c,
                                          t.deviceIds,
                                          o("WAWebDBParticipantTypes")
                                            .PARTICIPANT_OPERATION.DEMOTE,
                                        )
                                      : o(
                                          "WAWebDBGroupParticipantHelpers",
                                        ).changeParticipantAdminInfo(
                                          s,
                                          c,
                                          t.deviceIds,
                                          o("WAWebDBParticipantTypes")
                                            .PARTICIPANT_OPERATION.DEMOTE,
                                        );
                                    break;
                                  case o("WAWebDBParticipantTypes")
                                    .PARTICIPANT_OPERATION.PROMOTE:
                                    d = a
                                      ? o(
                                          "WAWebDBGroupParticipantHelpers",
                                        ).changeParticipantAdminInfoCAG(
                                          s,
                                          c,
                                          t.deviceIds,
                                          o("WAWebDBParticipantTypes")
                                            .PARTICIPANT_OPERATION.PROMOTE,
                                        )
                                      : o(
                                          "WAWebDBGroupParticipantHelpers",
                                        ).changeParticipantAdminInfo(
                                          s,
                                          c,
                                          t.deviceIds,
                                          o("WAWebDBParticipantTypes")
                                            .PARTICIPANT_OPERATION.PROMOTE,
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
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
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
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "updateParticipants: failed with ",
                                        " unknown actions => ",
                                        "",
                                      ])),
                                  u.length,
                                  u,
                                ),
                              a.bulkCreateOrReplace(Array.from(i.values()))
                            );
                          },
                        );
                        return function (e) {
                          return a.apply(this, arguments);
                        };
                      })(),
                    ),
                  t.map(function (e) {})
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
      })(),
      R = (function () {
        return o("WABatcher").batch(
          { delayMs: h },
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = Array.from(
                  new Set(
                    e.map(function (e) {
                      return e.id;
                    }),
                  ),
                );
                return (
                  yield o("WAWebModelStorageUtils")
                    .getStorage()
                    .lock(
                      ["participant"],
                      (function () {
                        var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (n) {
                            var r = n[0],
                              a = new Map(
                                (yield r.bulkGet(t))
                                  .filter(Boolean)
                                  .map(function (e) {
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
                                  case o("WAWebDBParticipantTypes")
                                    .PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE:
                                    u = o(
                                      "WAWebDBGroupParticipantHelpers",
                                    ).changeCommunityParticipantAdminInfo(
                                      r,
                                      s,
                                      o("WAWebDBParticipantTypes")
                                        .PARTICIPANT_OPERATION
                                        .LINKED_GROUP_PROMOTE,
                                    );
                                    break;
                                  case o("WAWebDBParticipantTypes")
                                    .PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE:
                                    u = o(
                                      "WAWebDBGroupParticipantHelpers",
                                    ).changeCommunityParticipantAdminInfo(
                                      r,
                                      s,
                                      o("WAWebDBParticipantTypes")
                                        .PARTICIPANT_OPERATION
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
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
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
                                    (c =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "updateCommunityParticipantsBatched: failed with ",
                                        " unknown actions => ",
                                        "",
                                      ])),
                                  l.length,
                                  l,
                                ),
                              r.bulkCreateOrReplace(Array.from(a.values()))
                            );
                          },
                        );
                        return function (e) {
                          return r.apply(this, arguments);
                        };
                      })(),
                    ),
                  e.map(function (e) {})
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
      })();
    function L(e) {
      var t = e.data,
        a = e.group,
        i = e.isOffline,
        l = i === void 0 ? !1 : i;
      if (l) return R({ id: String(a), data: t });
      var s = t.participants,
        u = a.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  a = yield n.get(u);
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
                        s,
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
                        s,
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
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function E(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var r = n[0],
                  a = yield r.get(e.toString());
                if (!a)
                  throw new (o("WAWebDBParticipantTypes").GroupUnSyncedError)(
                    "updateParticipants: group participant info missing when trying to update super admin",
                  );
                return r.createOrReplace(
                  babelHelpers.extends({}, a, { superAdmins: [t.toString()] }),
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
    }
    function k(e, t, a, i) {
      i === void 0 && (i = !1);
      var l = !!(a != null && a.defaultSubgroup);
      if (i) return S({ id: String(e), data: t, groupMetadata: a });
      var s = t.participants,
        u = e.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  a = yield n.get(u);
                if (!a)
                  throw new (o("WAWebDBParticipantTypes").GroupUnSyncedError)(
                    "updateParticipants: group participant info missing for action " +
                      t.action,
                  );
                switch (t.action) {
                  case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.ADD:
                    return n.createOrReplace(
                      l
                        ? o(
                            "WAWebDBGroupParticipantHelpers",
                          ).addParticipantInfoCAG(a, s, t.deviceIds)
                        : o(
                            "WAWebDBGroupParticipantHelpers",
                          ).addParticipantInfo({
                            deviceIds: t.deviceIds,
                            oldDBRecord: a,
                            participantsAdded: s,
                          }),
                    );
                  case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                    .REMOVE:
                    return n.createOrReplace(
                      l
                        ? o(
                            "WAWebDBGroupParticipantHelpers",
                          ).removeParticipantInfoCAG(
                            a,
                            s,
                            t.timestamp,
                            t.author,
                            t.reason,
                          )
                        : o(
                            "WAWebDBGroupParticipantHelpers",
                          ).removeParticipantInfo(
                            a,
                            s,
                            t.timestamp,
                            t.author,
                            t.reason,
                          ),
                    );
                  case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                    .DEMOTE:
                    return n.createOrReplace(
                      l
                        ? o(
                            "WAWebDBGroupParticipantHelpers",
                          ).changeParticipantAdminInfoCAG(
                            a,
                            s,
                            t.deviceIds,
                            o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                              .DEMOTE,
                          )
                        : o(
                            "WAWebDBGroupParticipantHelpers",
                          ).changeParticipantAdminInfo(
                            a,
                            s,
                            t.deviceIds,
                            o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                              .DEMOTE,
                          ),
                    );
                  case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                    .PROMOTE:
                    return n.createOrReplace(
                      l
                        ? o(
                            "WAWebDBGroupParticipantHelpers",
                          ).changeParticipantAdminInfoCAG(
                            a,
                            s,
                            t.deviceIds,
                            o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                              .PROMOTE,
                          )
                        : o(
                            "WAWebDBGroupParticipantHelpers",
                          ).changeParticipantAdminInfo(
                            a,
                            s,
                            t.deviceIds,
                            o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                              .PROMOTE,
                          ),
                    );
                  default:
                    throw r("err")(
                      "updateParticipants: failed with unknown action " +
                        t.action,
                    );
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    var I = n("$InternalEnum").Mirrored(["Success", "Error"]);
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = I.Error;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["participant", "group-metadata"],
                (function () {
                  var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (i) {
                      var l = i[0],
                        s = i[1],
                        u = o("WAWebLidMigrationUtils").toAddressingModeFactory(
                          t,
                        );
                      try {
                        var c = r("nullthrows")(
                            yield l.get(e.toString()),
                            "missing participant record to migrate",
                          ),
                          d = Array.from(c.senderKey.entries()),
                          p = o("WAWebGroupUtils").amIGroupAdmin(c.admins),
                          _ = {
                            admins: c.admins.map(function (e) {
                              return r("nullthrows")(
                                u(o("WAWebWidFactory").createWid(e)),
                                "admin missing a LID-PN mapping",
                              ).toString();
                            }),
                            participants: c.participants.map(function (e) {
                              if (!p && !t) {
                                var n =
                                  o("WAWebWidFactory").createUserWidOrThrow(e);
                                return r("nullthrows")(
                                  o("WAWebLidMigrationUtils").toLid(n),
                                  "participant missing a LID mapping",
                                ).toString();
                              }
                              return r("nullthrows")(
                                u(o("WAWebWidFactory").createWid(e)),
                                "participant missing a LID-PN mapping",
                              ).toString();
                            }),
                            senderKey: new Map(
                              d.map(function (e) {
                                var t = e[0],
                                  n = e[1];
                                return [x(t, u).toString(), !1];
                              }),
                            ),
                          },
                          f = { isLidAddressingMode: t };
                        (yield (g || (g = n("Promise"))).all([
                          l.merge(e.toString(), _),
                          s.merge(e.toString(), f),
                        ]),
                          (a = I.Success));
                      } catch (t) {
                        o("WALogger").ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "addressing mode migration failed for ",
                              ": ",
                              "",
                            ])),
                          e,
                          r("getErrorSafe")(t).message,
                        );
                      }
                    },
                  );
                  return function (e) {
                    return i.apply(this, arguments);
                  };
                })(),
              ),
            a
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      var n,
        a = o("WAWebWidFactory").createDeviceWidOrThrow(e),
        i = t(o("WAWebWidFactory").asUserWidOrThrow(a));
      i == null &&
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "GroupLidInfra: senderkey device missing a LID-PN mapping, device = ",
                "",
              ])),
            a,
          )
          .sendLogs("grouplidinfra-senderkey-missing-mapping", {
            sampling: 0.01,
          });
      var l = r("nullthrows")(i, "senderkey device missing a LID-PN mapping");
      return o("WAWebWidFactory")
        .createDeviceWidFromUserAndDevice(
          l.user,
          l.server,
          (n = a.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
        )
        .toString();
    }
    function $(e) {
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
    function P(e) {
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
    function N(e) {
      var t = e.group,
        r = e.newId,
        a = e.oldId,
        i = String(t);
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["participant"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e[0],
                  n = yield t.get(i);
                if (!n)
                  throw new (o("WAWebDBParticipantTypes").GroupUnSyncedError)(
                    "modifyGroupParticipant: group participant info missing",
                  );
                return t.createOrReplace(
                  o("WAWebDBGroupParticipantHelpers").modifyParticipantInfo(
                    n,
                    a,
                    r,
                  ),
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            i,
            l = e.groupWid,
            s = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .get(String(l));
          if (!s) return null;
          if (s.senderKey == null) {
            var u,
              c,
              d,
              m,
              _ = (u = s.admins) == null ? void 0 : u.length,
              f = (c = s.superAdmins) == null ? void 0 : c.length,
              g = (d = s.participants) == null ? void 0 : d.length,
              h = (m = s.pastParticipants) == null ? void 0 : m.length;
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebSchemaParticipant")
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "computeGroupParticipantsHash: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("compute-group-participants-hash-error"),
              null
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    ((l.addParticipantInfo = (f = o(
      "WAWebDBGroupParticipantHelpers",
    )).addParticipantInfo),
      (l.addParticipantInfoCAG = f.addParticipantInfoCAG),
      (l.createParticipantInfo = f.createParticipantInfo),
      (l.removeParticipantInfo = f.removeParticipantInfo),
      (l.removeParticipantInfoCAG = f.removeParticipantInfoCAG),
      (l.replaceParticipantInfo = f.replaceParticipantInfo),
      (l.replaceParticipantInfoCAG = f.replaceParticipantInfoCAG),
      (l.updateGroupParticipantTableWithoutDeviceSync = y),
      (l.replaceParticipants = b),
      (l.addPastParticipants = v),
      (l.updateCommunityParticipants = L),
      (l.setDBGroupSuperAdmin = E),
      (l.updateDBParticipants = k),
      (l.AddressingModeMigrationResult = I),
      (l.migrateParticipantInfoAddressingMode = T),
      (l.markGroupParticipantStale = $),
      (l.bulkMarkGroupParticipantStale = P),
      (l.modifyGroupParticipant = N),
      (l.getGroupParticipant = M),
      (l.computeGroupParticipantsHash = A));
  },
  98,
);
