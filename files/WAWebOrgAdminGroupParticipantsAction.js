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
    async function b(t, n) {
      var r = await L(t),
        a = r.groupWid,
        i = r.isLidAddressingMode,
        l = r.requestNeededAdds,
        s = v(n, function (e) {
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.source === "directory" &&
              "directoryMember" in e
            ) {
              var t = e.directoryMember;
              return T(t, i);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              ((typeof e.rosterEntry == "object" && e.rosterEntry !== null) ||
                typeof e.rosterEntry == "function") &&
              "memberLID" in e.rosterEntry
            ) {
              var n = e.rosterEntry.memberLID;
              if (n != null) return T({ lid: n, username: null }, i);
            }
            return null;
          })(e);
        }),
        u = s.duplicateMemberCount,
        c = s.participants,
        d = s.skippedMemberCount;
      d > 0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "addOrgGroupCandidatesToGroup: skipped ",
                " of ",
                " entries without a usable group identity",
              ])),
            d,
            n.length,
          )
          .sendLogs("org-admin-group-candidates-skipped");
      var m =
        c.length === 0
          ? { status: g, participants: [] }
          : await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebGroupParticipantsService").GroupParticipantsService,
                  ).addGroupParticipants
                : o("WAWebGroupModifyParticipantsJob").addGroupParticipants
            )(a, c);
      return babelHelpers.extends({}, m, {
        duplicateMemberCount: u,
        runParticipantFollowUp: E(m, l),
        skippedMemberCount: d,
      });
    }
    function v(e, t) {
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
    async function S(e, t) {
      var n = await L(e),
        r = n.groupWid,
        a = n.isLidAddressingMode,
        i = t.lid;
      if (i == null)
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "removeOrgGroupParticipantFromGroup: participant has no lid",
                ])),
            )
            .sendLogs("org-admin-remove-participant-missing-lid"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      var l = o("WAWebWidFactory").createUserLidOrThrow(i, "lid"),
        d = a ? l : o("WAWebApiContact").getPnIfLidIsLatestMapping(l);
      if (d == null)
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "removeOrgGroupParticipantFromGroup: participant has no usable phone number",
                ])),
            )
            .sendLogs("org-admin-remove-participant-missing-pn"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      var m = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupParticipantsService").GroupParticipantsService,
              ).removeGroupParticipants
            : o("WAWebGroupModifyParticipantsJob").removeGroupParticipants
        )(r, [d]),
        p = m.participants.find(function (e) {
          return e.code !== "200";
        });
      if (m.status !== g || p != null) {
        var _;
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    async function R(e, t, n) {
      var r = await L(e),
        a = r.groupWid,
        i = r.isLidAddressingMode,
        l = t.lid;
      if (l == null)
        throw (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
        c = await u(
          a,
          [o("WAWebWidFactory").createUserLidOrThrow(l, "lid")],
          i,
        ),
        p = c.participants.find(function (e) {
          return e.code !== "200";
        });
      if (c.status !== g || p != null) {
        var _;
        throw (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "setOrgGroupParticipantAdmin: GroupD rejected the admin change with status ",
                  " and code ",
                  "",
                ])),
              c.status,
              (_ = p == null ? void 0 : p.code) != null ? _ : "missing",
            )
            .sendLogs("org-admin-set-participant-admin-failed"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      }
    }
    async function L(e) {
      var t = I(e),
        n = o("WAWebSchemaGroupMetadata").getGroupMetadataTable(),
        a = await n.get(t.toString());
      if (a == null) {
        try {
          await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebGroupQueryService").GroupQueryService,
                ).queryAndUpdateGroupMetadataById
              : o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById
          )({ id: t, request: "interactive" });
        } catch (e) {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "getLocalGroupContext: group metadata refresh failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-admin-group-participants-refresh-failed");
        }
        a = await n.get(t.toString());
      }
      if (a == null)
        throw (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "getLocalGroupContext: missing group metadata",
                ])),
            )
            .sendLogs("org-admin-group-participants-missing-group-metadata"),
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
    }
    function E(e, t) {
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
    function k(e) {
      return e.includes("@") ? e : e + "@g.us";
    }
    function I(e) {
      var t = k(e);
      try {
        return o("WAWebWidFactory").asGroupWidOrThrow(
          o("WAWebWidFactory").createWid(t),
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "getOrgAdminGroupWid: invalid group identifier",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-admin-group-participants-invalid-gid"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      }
    }
    function T(e, t) {
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
      (l.removeOrgGroupParticipantFromGroup = S),
      (l.setOrgGroupParticipantAdmin = R),
      (l.getOrgAdminGroupJid = k));
  },
  98,
);
