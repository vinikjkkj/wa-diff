__d(
  "WAWebOrgAdminGroupParticipantsAction",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendRuntime",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupParticipantsService",
    "WAWebGroupQueryJob",
    "WAWebGroupQueryService",
    "WAWebMiscErrors",
    "WAWebMiscGatingUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSendForNeededAddRequest",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      f,
      g = 207;
    function h() {
      return Math.max(0, o("WAWebMiscGatingUtils").getGroupSizeLimit() - 1);
    }
    function y(e, t) {
      var n,
        r,
        o = Math.min(e, (n = t.duplicateMemberCount) != null ? n : 0),
        a = Math.max(0, e - o);
      if (t.status !== g)
        return {
          addedMemberCount: 0,
          failedMemberCount: a,
          invitedMemberCount: 0,
        };
      var i = (r = t.invitedOutContacts) != null ? r : [],
        l = t.participants.filter(function (e) {
          return e.code === "200";
        }).length,
        s = i.filter(function (e) {
          return e.code !== "200";
        }).length,
        u =
          t.participants.filter(function (e) {
            return e.code === "403";
          }).length +
          i.filter(function (e) {
            return e.code === "200";
          }).length,
        c = t.participants.length + i.length,
        d = Math.max(0, a - t.skippedMemberCount),
        m =
          t.skippedMemberCount +
          t.participants.filter(function (e) {
            return e.code !== "200" && e.code !== "403";
          }).length +
          s +
          Math.max(0, d - c),
        p = Math.min(a, Math.max(m, c > d ? 1 : 0)),
        _ = a - p,
        f = Math.min(l, _);
      return {
        addedMemberCount: f,
        failedMemberCount: p,
        invitedMemberCount: Math.min(u, _ - f),
      };
    }
    function C(e) {
      if (e.source === "directory") return !0;
      var t = e.rosterEntry.memberLID;
      if (t == null) return !1;
      try {
        return (
          o("WAWebApiContact").getPnIfLidIsLatestMapping(
            o("WAWebWidFactory").createUserLidOrThrow(t, "lid"),
          ) != null
        );
      } catch (e) {
        return !1;
      }
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield I(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = n.requestNeededAdds,
            l = S(t, function (e) {
              return (function (e) {
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.source === "directory" &&
                  "directoryMember" in e
                ) {
                  var t = e.directoryMember;
                  return P(t, a);
                }
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  ((typeof e.rosterEntry == "object" &&
                    e.rosterEntry !== null) ||
                    typeof e.rosterEntry == "function") &&
                  "memberLID" in e.rosterEntry
                ) {
                  var n = e.rosterEntry.memberLID;
                  if (n != null) return P({ lid: n, username: null }, a);
                }
                return null;
              })(e);
            }),
            u = l.duplicateMemberCount,
            c = l.participants,
            d = l.skippedMemberCount;
          d > 0 &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "addOrgGroupCandidatesToGroup: skipped ",
                    " of ",
                    " entries without a usable group identity",
                  ])),
                d,
                t.length,
              )
              .sendLogs("org-admin-group-candidates-skipped");
          var m =
            c.length === 0
              ? { status: g, participants: [] }
              : yield (
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebGroupParticipantsService")
                          .GroupParticipantsService,
                      ).addGroupParticipants
                    : o("WAWebGroupModifyParticipantsJob").addGroupParticipants
                )(r, c);
          return babelHelpers.extends({}, m, {
            duplicateMemberCount: u,
            runParticipantFollowUp: D(m, i),
            skippedMemberCount: d,
          });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n = [],
        r = new Set(),
        o = 0,
        a = 0,
        i = 0,
        l = h();
      for (var s of e) {
        if (n.length >= l) {
          a += e.length - i;
          break;
        }
        i++;
        var u = t(s);
        if (u == null) a++;
        else {
          var c =
            u.lid != null
              ? "lid:" + u.lid.toString()
              : "phone:" + u.phoneNumber.toString();
          if (r.has(c)) {
            o++;
            continue;
          }
          (r.add(c), n.push(u));
        }
      }
      return {
        duplicateMemberCount: o,
        participants: n,
        skippedMemberCount: a,
      };
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield I(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = t.lid;
          if (i == null)
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "removeOrgGroupParticipantFromGroup: participant has no lid",
                    ])),
                )
                .sendLogs("org-admin-remove-participant-missing-lid"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          var l = o("WAWebWidFactory").createUserLidOrThrow(i, "lid"),
            s = a ? l : o("WAWebApiContact").getPnIfLidIsLatestMapping(l);
          if (s == null)
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "removeOrgGroupParticipantFromGroup: participant has no usable phone number",
                    ])),
                )
                .sendLogs("org-admin-remove-participant-missing-pn"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          var m = yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebGroupParticipantsService").GroupParticipantsService,
                  ).removeGroupParticipants
                : o("WAWebGroupModifyParticipantsJob").removeGroupParticipants
            )(r, [s]),
            p = m.participants.find(function (e) {
              return e.code !== "200";
            });
          if (m.status !== g || p != null) {
            var _;
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "removeOrgGroupParticipantFromGroup: GroupD rejected participant removal with status ",
                      " and code ",
                      "",
                    ])),
                  m.status,
                  (_ = p == null ? void 0 : p.code) != null ? _ : "missing",
                )
                .sendLogs("org-admin-remove-participant-failed"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield I(e),
            a = r.groupWid,
            i = r.isLidAddressingMode,
            l = t.lid;
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "setOrgGroupParticipantAdmin: participant has no lid",
                    ])),
                )
                .sendLogs("org-admin-set-participant-admin-missing-lid"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          var s = o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebGroupParticipantsService").GroupParticipantsService,
                )
              : {
                  promoteGroupParticipants: o("WAWebGroupModifyParticipantsJob")
                    .promoteGroupParticipants,
                  demoteGroupParticipants: o("WAWebGroupModifyParticipantsJob")
                    .demoteGroupParticipants,
                },
            u = n ? s.promoteGroupParticipants : s.demoteGroupParticipants,
            c = yield u(
              a,
              [o("WAWebWidFactory").createUserLidOrThrow(l, "lid")],
              i,
            ),
            d = c.participants.find(function (e) {
              return e.code !== "200";
            });
          if (c.status !== g || d != null) {
            var _;
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "setOrgGroupParticipantAdmin: GroupD rejected the admin change with status ",
                      " and code ",
                      "",
                    ])),
                  c.status,
                  (_ = d == null ? void 0 : d.code) != null ? _ : "missing",
                )
                .sendLogs("org-admin-set-participant-admin-failed"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = $(e),
            n = o("WAWebSchemaGroupMetadata").getGroupMetadataTable(),
            a = yield n.get(t.toString());
          if (a == null) {
            try {
              yield (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebGroupQueryService").GroupQueryService,
                    ).queryAndUpdateGroupMetadataById
                  : o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById
              )({ id: t, request: "interactive" });
            } catch (e) {
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "getLocalGroupContext: group metadata refresh failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-admin-group-participants-refresh-failed");
            }
            a = yield n.get(t.toString());
          }
          if (a == null)
            throw (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "getLocalGroupContext: missing group metadata",
                    ])),
                )
                .sendLogs(
                  "org-admin-group-participants-missing-group-metadata",
                ),
              new (o("WAWebMiscErrors").ActionError)()
            );
          var i = a,
            l = i.desc,
            s = i.isLidAddressingMode,
            u = i.subject;
          return {
            groupWid: t,
            isLidAddressingMode: s === !0,
            requestNeededAdds: function (n) {
              return o("WAWebSendForNeededAddRequest").sendForNeededAddRequest({
                groupAddResponse: { gid: t, participants: n.participants },
                groupDesc: l,
                subject: u,
              });
            },
          };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      if (e.status !== g) return null;
      var n = e.participants.some(function (e) {
        return e.code === "403";
      });
      if (!n) return null;
      var r = !1;
      return function () {
        r || ((r = !0), t(e));
      };
    }
    function x(e) {
      return e.includes("@") ? e : e + "@g.us";
    }
    function $(t) {
      var n = x(t);
      try {
        return o("WAWebWidFactory").asGroupWidOrThrow(
          o("WAWebWidFactory").createWid(n),
        );
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getOrgAdminGroupWid: invalid group identifier",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-admin-group-participants-invalid-gid"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      }
    }
    function P(e, t) {
      try {
        var n = o("WAWebWidFactory").createUserLidOrThrow(e.lid, "lid");
        return o(
          "WAWebGroupMutationParticipantUtils",
        ).getGroupMutationParticipantFromIdentity(
          n,
          o("WAWebApiContact").getPnIfLidIsLatestMapping(n),
          e.username == null || e.username === ""
            ? null
            : o("WAWebUsernameTypes").serializeUsername(
                o("WAWebUsernameTypes").asUsername(e.username),
              ),
          t,
          "addOrgGroupCandidatesToGroup",
        );
      } catch (e) {
        if (!(e instanceof o("WAWebMiscErrors").ActionError)) throw e;
        return null;
      }
    }
    ((l.getMaxOrgAdminParticipantsPerRequest = h),
      (l.getOrgAdminGroupParticipantOutcomeCounts = y),
      (l.canAddOrgGroupCandidateDirectly = C),
      (l.addOrgGroupCandidatesToGroup = b),
      (l.removeOrgGroupParticipantFromGroup = R),
      (l.setOrgGroupParticipantAdmin = E),
      (l.getOrgAdminGroupJid = x));
  },
  98,
);
