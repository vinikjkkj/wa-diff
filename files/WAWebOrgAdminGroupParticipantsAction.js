__d(
  "WAWebOrgAdminGroupParticipantsAction",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupQueryJob",
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
      g,
      h = 207;
    function y() {
      return Math.max(0, o("WAWebMiscGatingUtils").getGroupSizeLimit() - 1);
    }
    function C(e, t) {
      var n,
        r,
        o = Math.min(e, (n = t.duplicateMemberCount) != null ? n : 0),
        a = Math.max(0, e - o);
      if (t.status !== h)
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
    function b(e) {
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
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield x(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = n.requestNeededAdds,
            l = E(t, function (e) {
              return (function (e) {
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.source === "directory" &&
                  "directoryMember" in e
                ) {
                  var t = e.directoryMember;
                  return w(t, a);
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
                  if (n != null) return w({ lid: n, username: null }, a);
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
              ? { status: h, participants: [] }
              : yield o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
                  r,
                  c,
                );
          return babelHelpers.extends({}, m, {
            duplicateMemberCount: u,
            runParticipantFollowUp: P(m, i),
            skippedMemberCount: d,
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield x(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = n.requestNeededAdds,
            l = E(t, function (e) {
              return A(e, a);
            }),
            s = l.duplicateMemberCount,
            c = l.participants,
            d = l.skippedMemberCount;
          d > 0 &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "addPhoneNumbersToOrgGroup: skipped ",
                    " of ",
                    " phone numbers without a usable local identity",
                  ])),
                d,
                t.length,
              )
              .sendLogs("org-admin-phone-numbers-skipped");
          var m =
            c.length === 0
              ? { status: h, participants: [] }
              : yield o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
                  r,
                  c,
                );
          return babelHelpers.extends({}, m, {
            duplicateMemberCount: s,
            runParticipantFollowUp: P(m, i),
            skippedMemberCount: d,
          });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n = [],
        r = new Set(),
        o = 0,
        a = 0,
        i = 0,
        l = y();
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield x(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = t.lid;
          if (i == null)
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "removeOrgGroupParticipantFromGroup: participant has no usable phone number",
                    ])),
                )
                .sendLogs("org-admin-remove-participant-missing-pn"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          var u = yield o(
              "WAWebGroupModifyParticipantsJob",
            ).removeGroupParticipants(r, [s]),
            p = u.participants.find(function (e) {
              return e.code !== "200";
            });
          if (u.status !== h || p != null) {
            var _;
            throw (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "removeOrgGroupParticipantFromGroup: GroupD rejected participant removal with status ",
                      " and code ",
                      "",
                    ])),
                  u.status,
                  (_ = p == null ? void 0 : p.code) != null ? _ : "missing",
                )
                .sendLogs("org-admin-remove-participant-failed"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield x(e),
            a = r.groupWid,
            i = r.isLidAddressingMode,
            l = t.lid;
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "setOrgGroupParticipantAdmin: participant has no lid",
                    ])),
                )
                .sendLogs("org-admin-set-participant-admin-missing-lid"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          var s = n
              ? o("WAWebGroupModifyParticipantsJob").promoteGroupParticipants
              : o("WAWebGroupModifyParticipantsJob").demoteGroupParticipants,
            u = yield s(
              a,
              [o("WAWebWidFactory").createUserLidOrThrow(l, "lid")],
              i,
            ),
            c = u.participants.find(function (e) {
              return e.code !== "200";
            });
          if (u.status !== h || c != null) {
            var d;
            throw (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "setOrgGroupParticipantAdmin: GroupD rejected the admin change with status ",
                      " and code ",
                      "",
                    ])),
                  u.status,
                  (d = c == null ? void 0 : c.code) != null ? d : "missing",
                )
                .sendLogs("org-admin-set-participant-admin-failed"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = M(e),
            n = o("WAWebSchemaGroupMetadata").getGroupMetadataTable(),
            a = yield n.get(t.toString());
          if (a == null) {
            try {
              yield o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                id: t,
                request: "interactive",
              });
            } catch (e) {
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      if (e.status !== h) return null;
      var n = e.participants.some(function (e) {
        return e.code === "403";
      });
      if (!n) return null;
      var r = !1;
      return function () {
        r || ((r = !0), t(e));
      };
    }
    function N(e) {
      return e.includes("@") ? e : e + "@g.us";
    }
    function M(t) {
      var n = N(t);
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
    function w(e, t) {
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
    function A(e, t) {
      try {
        var n = o("WAWebWidFactory").createUserWidOrThrow(e),
          r = o("WAWebApiContact").getCurrentLid(n);
        return r == null
          ? { phoneNumber: n }
          : o(
              "WAWebGroupMutationParticipantUtils",
            ).getGroupMutationParticipantFromIdentity(
              r,
              n,
              null,
              t,
              "addPhoneNumbersToOrgGroup",
            );
      } catch (e) {
        if (!(e instanceof o("WAWebMiscErrors").ActionError)) throw e;
        return null;
      }
    }
    ((l.getMaxOrgAdminParticipantsPerRequest = y),
      (l.getOrgAdminGroupParticipantOutcomeCounts = C),
      (l.canAddOrgGroupCandidateDirectly = b),
      (l.addOrgGroupCandidatesToGroup = v),
      (l.addPhoneNumbersToOrgGroup = R),
      (l.removeOrgGroupParticipantFromGroup = k),
      (l.setOrgGroupParticipantAdmin = T),
      (l.getOrgAdminGroupJid = N));
  },
  98,
);
