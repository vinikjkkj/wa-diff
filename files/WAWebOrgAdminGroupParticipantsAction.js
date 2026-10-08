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
    "WAWebModalManager",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteGating",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "WAWebSchemaGroupMetadata",
    "WAWebSendForNeededAddRequest",
    "WAWebUsernameTypes",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
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
      h,
      y,
      C = y || (y = o("react")),
      b = 207;
    function v() {
      return Math.max(0, o("WAWebMiscGatingUtils").getGroupSizeLimit() - 1);
    }
    function S(e, t, n) {
      var r, o;
      n === void 0 && (n = 0);
      var a = Math.min(e, (r = t.duplicateMemberCount) != null ? r : 0),
        i = Math.max(0, e - a);
      if (t.status !== b)
        return {
          addedMemberCount: 0,
          failedMemberCount: i,
          invitedMemberCount: 0,
        };
      var l = (o = t.invitedOutContacts) != null ? o : [],
        s = t.participants.filter(function (e) {
          return e.code === "200";
        }).length,
        u = l.filter(function (e) {
          return e.code !== "200";
        }).length,
        c = Math.min(n, u),
        d =
          t.participants.filter(function (e) {
            return e.code === "403";
          }).length +
          l.filter(function (e) {
            return e.code === "200";
          }).length +
          c,
        m = t.participants.length + l.length,
        p = Math.max(0, i - t.skippedMemberCount),
        _ =
          t.skippedMemberCount +
          t.participants.filter(function (e) {
            return e.code !== "200" && e.code !== "403";
          }).length +
          (u - c) +
          Math.max(0, p - m),
        f = Math.min(i, Math.max(_, m > p ? 1 : 0)),
        g = i - f,
        h = Math.min(s, g);
      return {
        addedMemberCount: h,
        failedMemberCount: f,
        invitedMemberCount: Math.min(d, g - h),
      };
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield P(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = n.requestNeededAdds,
            l = I(t, function (e) {
              var t;
              if (e.source === "directory") t = B(e.directoryMember, a);
              else {
                var n = o(
                  "WAWebOrgAdminGroupCandidate",
                ).normalizeOrgAdminRosterPhoneNumber(e.rosterEntry.phoneNumber);
                t = n == null ? null : W(n, a);
              }
              return t;
            }),
            s = l.duplicateMemberCount,
            c = l.includedEntries,
            d = l.participants,
            m = l.skippedMemberCount;
          m > 0 &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "addOrgGroupCandidatesToGroup: skipped ",
                    " of ",
                    " entries without a usable group identity",
                  ])),
                m,
                t.length,
              )
              .sendLogs("org-admin-group-candidates-skipped");
          var p =
              d.length === 0
                ? { status: b, participants: [] }
                : yield o(
                    "WAWebGroupModifyParticipantsJob",
                  ).addGroupParticipants(r, d),
            _ = p.status === b ? w(c, p) : [],
            f = M(
              r,
              p,
              i,
              _,
              o("WAWebWamEnumCompanionInviteOriginType")
                .COMPANION_INVITE_ORIGIN_TYPE
                .GROUPS_CREATE_PARTICIPANT_SELECTOR,
            );
          return babelHelpers.extends({}, p, {
            duplicateMemberCount: s,
            runParticipantFollowUp: f,
            skippedMemberCount: m,
            smsInviteCandidateCount: _.length,
          });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield P(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = n.requestNeededAdds,
            l = I(t, function (e) {
              return W(e, a);
            }),
            s = l.duplicateMemberCount,
            u = l.participants,
            d = l.skippedMemberCount;
          d > 0 &&
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "addPhoneNumbersToOrgGroup: skipped ",
                    " of ",
                    " phone numbers without a usable local identity",
                  ])),
                d,
                t.length,
              )
              .sendLogs("org-admin-phone-numbers-skipped");
          var m =
            u.length === 0
              ? { status: b, participants: [] }
              : yield o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
                  r,
                  u,
                );
          return babelHelpers.extends({}, m, {
            duplicateMemberCount: s,
            runParticipantFollowUp: M(
              r,
              m,
              i,
              [],
              o("WAWebWamEnumCompanionInviteOriginType")
                .COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR,
            ),
            skippedMemberCount: d,
          });
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      var n = [],
        r = [],
        o = new Set(),
        a = 0,
        i = 0,
        l = 0,
        s = v();
      for (var u of e) {
        if (r.length >= s) {
          i += e.length - l;
          break;
        }
        l++;
        var c = t(u);
        if (c == null) i++;
        else {
          var d =
            c.lid != null
              ? "lid:" + c.lid.toString()
              : "phone:" + c.phoneNumber.toString();
          if (o.has(d)) {
            a++;
            continue;
          }
          (o.add(d), n.push(u), r.push(c));
        }
      }
      return {
        duplicateMemberCount: a,
        includedEntries: n,
        participants: r,
        skippedMemberCount: i,
      };
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield P(e),
            r = n.groupWid,
            a = n.isLidAddressingMode,
            i = t.lid;
          if (i == null)
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "removeOrgGroupParticipantFromGroup: participant has no usable phone number",
                    ])),
                )
                .sendLogs("org-admin-remove-participant-missing-pn"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          var u = yield o(
              "WAWebGroupModifyParticipantsJob",
            ).removeGroupParticipants(r, [s]),
            c = u.participants.find(function (e) {
              return e.code !== "200";
            });
          if (u.status !== b || c != null) {
            var _;
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "removeOrgGroupParticipantFromGroup: GroupD rejected participant removal with status ",
                      " and code ",
                      "",
                    ])),
                  u.status,
                  (_ = c == null ? void 0 : c.code) != null ? _ : "missing",
                )
                .sendLogs("org-admin-remove-participant-failed"),
              new (o("WAWebMiscErrors").ActionError)()
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield P(e),
            a = r.groupWid,
            i = r.isLidAddressingMode,
            l = t.lid;
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
          if (u.status !== b || c != null) {
            var d;
            throw (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = O(e),
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
            requestNeededAdds: function (n, r) {
              return o("WAWebSendForNeededAddRequest").sendForNeededAddRequest({
                groupAddResponse: { gid: t, participants: n.participants },
                groupDesc: l,
                onFinish: r,
                subject: u,
              });
            },
          };
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r, o) {
      if (t.status !== b) return null;
      var a = t.participants.some(function (e) {
        return e.code === "403";
      });
      if (!a && r.length === 0) return null;
      var i = !1;
      return function () {
        if (!i) {
          i = !0;
          var l = function () {
            return A(e, r, o);
          };
          a ? n(t, l) : l();
        }
      };
    }
    function w(t, n) {
      var r;
      if (!o("WAWebOutContactInviteGating").isOutContactInviteEnabled())
        return [];
      var a = new Set(
        ((r = n.invitedOutContacts) != null ? r : [])
          .filter(function (e) {
            return e.code === "403";
          })
          .map(function (e) {
            return e.phoneNumberWid.toString();
          }),
      );
      if (a.size === 0) return [];
      var i = new Map();
      for (var l of t) {
        var s =
          l.source === "roster"
            ? o(
                "WAWebOrgAdminGroupCandidate",
              ).normalizeOrgAdminRosterPhoneNumber(l.rosterEntry.phoneNumber)
            : null;
        if (s != null)
          try {
            var u = o("WAWebWidFactory").createUserWidOrThrow(s).toString();
            a.has(u) &&
              !i.has(u) &&
              i.set(u, { name: l.displayName, phoneNumber: s });
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getRosterSmsInviteCandidates: ignored an invalid out-contact identity",
                  ])),
              )
              .sendLogs("org-admin-roster-sms-invite-invalid-identity");
          }
      }
      return Array.from(i.values());
    }
    function A(e, t, n) {
      t.length !== 0 &&
        o("WAWebModalManager").ModalManager.openSupportModal(
          C.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
            names: t.map(function (e) {
              return e.name;
            }),
            onConfirm: function () {
              (o("WAWebOutContactInviteAction").sendMultiGroupInvite(
                t.map(function (e) {
                  return e.phoneNumber;
                }),
                o("WAWebWidToJid").widToGroupJid(e),
                n,
              ),
                o("WAWebModalManager").closeSupportOrModal());
            },
            onCancel: o("WAWebModalManager").closeSupportOrModal,
          }),
        );
    }
    function F(e) {
      return e.includes("@") ? e : e + "@g.us";
    }
    function O(e) {
      var t = F(e);
      try {
        return o("WAWebWidFactory").asGroupWidOrThrow(
          o("WAWebWidFactory").createWid(t),
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getOrgAdminGroupWid: invalid group identifier",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-admin-group-participants-invalid-gid"),
          new (o("WAWebMiscErrors").ActionError)()
        );
      }
    }
    function B(e, t) {
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
    function W(e, t) {
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
    ((l.getMaxOrgAdminParticipantsPerRequest = v),
      (l.getOrgAdminGroupParticipantOutcomeCounts = S),
      (l.addOrgGroupCandidatesToGroup = R),
      (l.addPhoneNumbersToOrgGroup = E),
      (l.removeOrgGroupParticipantFromGroup = T),
      (l.setOrgGroupParticipantAdmin = x),
      (l.getOrgAdminGroupJid = F));
  },
  98,
);
