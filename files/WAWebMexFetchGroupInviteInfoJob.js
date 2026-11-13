__d(
  "WAWebMexFetchGroupInviteInfoJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchGroupInviteInfoJobAddRequestQuery.graphql",
    "WAWebMexFetchGroupInviteInfoJobQuery.graphql",
    "WAWebMexGetTypename",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "XWA2CommunityGroup",
      m = "XWA2CommunityDefaultSubGroup",
      p = "XWA2CommunitySubGroup",
      _ = "XWA2GroupRegularGroup",
      f = "LID",
      g = 401,
      h = 410,
      y = 500,
      C =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchGroupInviteInfoJobQuery.graphql")),
      b =
        s !== void 0
          ? s
          : (s = n("WAWebMexFetchGroupInviteInfoJobAddRequestQuery.graphql"));
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMexClient").fetchQuery(C, {
              invite_code: e,
              include_username: o(
                "WAWebUsernameGatingUtils",
              ).usernameDisplayedEnabled(),
            }),
            n = t.xwa2_group_query_by_id;
          if (n == null)
            throw (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][GROUP] invite info has no group and no error",
                    ])),
                )
                .tags("GQL", "MEX")
                .sendLogs("mex-group-invite-info-no-group"),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(y)
            );
          return E(n);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.admin,
            n = e.code,
            r = e.expiration,
            a = e.groupJid,
            i;
          try {
            i = yield o("WAWebMexClient").fetchQuery(b, {
              group_jid: a,
              add_request: { admin: t, code: n, expiration: r },
              include_username: o(
                "WAWebUsernameGatingUtils",
              ).usernameDisplayedEnabled(),
            });
          } catch (e) {
            throw e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.status === g
              ? new (o("WAWebBackendErrors").ServerStatusCodeError)(h)
              : e;
          }
          var l = i.xwa2_group_query_by_id;
          if (l == null)
            throw (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[MEX][GROUP] add request info has no group and no error",
                    ])),
                )
                .tags("GQL", "MEX")
                .sendLogs("mex-group-add-request-info-no-group"),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(y)
            );
          return E(l);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        p,
        _,
        g,
        h,
        y = o("WAWebMexGetTypename").getTypename(e),
        C = e.creator,
        b = e.description,
        v = e.properties,
        S = e.subject,
        R =
          v == null || (t = v.lid_migration_state) == null
            ? void 0
            : t.addressing_mode;
      return {
        id: o("WAWebWidFactory").createWid(e.id),
        owner:
          (C == null ? void 0 : C.id) != null
            ? o("WAWebWidFactory").createWid(C.id)
            : void 0,
        creatorPn:
          (C == null ? void 0 : C.pn) != null
            ? o("WAWebWidFactory").createWid(C.pn)
            : void 0,
        creatorCountryCode: null,
        creatorUsername:
          C == null || (n = C.username_info) == null ? void 0 : n.username,
        creation: Number(e.creation_time),
        subject: (r = S == null ? void 0 : S.value) != null ? r : "",
        subjectTime:
          (S == null ? void 0 : S.creation_time) != null
            ? Number(S.creation_time)
            : null,
        subjectOwner:
          (S == null || (a = S.creator) == null ? void 0 : a.id) != null
            ? o("WAWebWidFactory").createWid(S.creator.id)
            : void 0,
        subjectOwnerPn:
          (S == null || (i = S.creator) == null ? void 0 : i.pn) != null
            ? o("WAWebWidFactory").createWid(S.creator.pn)
            : void 0,
        subjectOwnerUsername:
          S == null || (l = S.creator) == null || (l = l.username_info) == null
            ? void 0
            : l.username,
        desc: (s = b == null ? void 0 : b.value) != null ? s : void 0,
        descId: (u = b == null ? void 0 : b.id) != null ? u : void 0,
        descOwner:
          (b == null || (c = b.creator) == null ? void 0 : c.id) != null
            ? o("WAWebWidFactory").createWid(b.creator.id)
            : void 0,
        descOwnerUsername:
          b == null || (p = b.creator) == null || (p = p.username_info) == null
            ? void 0
            : p.username,
        descTime:
          (b == null ? void 0 : b.creation_time) != null
            ? Number(b.creation_time)
            : void 0,
        participants: I(e.participants.edges),
        size: e.total_participants_count,
        restrict: !1,
        announce: !1,
        noFrequentlyForwarded: !1,
        suspended: !1,
        suspendAppealStatus: null,
        suspendAppealUpdateTime: null,
        ephemeralDuration:
          (_ =
            v == null || (g = v.ephemeral) == null
              ? void 0
              : g.expiration_time_in_sec) != null
            ? _
            : void 0,
        membershipApprovalMode:
          (v == null ? void 0 : v.membership_approval_mode_enabled) === !0,
        membershipApprovalRequest: k(e, y),
        isLidAddressingMode: R == null || R === f,
        isParentGroup: y === d,
        numSubgroups: e.num_sub_groups,
        isParentGroupClosed:
          (v == null ? void 0 : v.closed_by_membership_approval_mode) === !0,
        defaultSubgroup: y === m,
        generalSubgroup: (v == null ? void 0 : v.general_chat) === !0,
        parentGroup:
          (v == null ? void 0 : v.parent_group_jid) != null
            ? o("WAWebWidFactory").createWid(v.parent_group_jid)
            : void 0,
        parentGroupSubject:
          v == null || (h = v.parent_group_subject) == null ? void 0 : h.value,
        generalChatAutoAddDisabled: !1,
        hasCapi: (v == null ? void 0 : v.capi) === !0,
        hasIncompleteParticipantInformation:
          e.missing_participant_identification === !0,
      };
    }
    function k(e, t) {
      if (t === p) return e.membership_approval_request === !0;
      if (t === _) {
        var n, r;
        return (
          ((n =
            (r = e.membership_approval_requests) == null
              ? void 0
              : r.edges.length) != null
            ? n
            : 0) > 0
        );
      }
      return !1;
    }
    function I(e) {
      return e.map(function (e) {
        var t,
          n,
          r = e.join_time,
          a = e.node,
          i = e.role;
        if (a.id == null)
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            y,
            "missing id in invite info participant",
          );
        return {
          id: o("WAWebWidFactory").createWid(a.id),
          lid: a.lid != null ? o("WAWebWidFactory").createWid(a.lid) : void 0,
          phoneNumber:
            a.pn != null ? o("WAWebWidFactory").createWid(a.pn) : void 0,
          displayName: (t = a.display_name) != null ? t : void 0,
          username: (n = a.username_info) == null ? void 0 : n.username,
          isAdmin: i === "ADMIN_MEMBER" || i === "SUPERADMIN_MEMBER",
          isSuperAdmin: i === "SUPERADMIN_MEMBER",
          joinTime: r != null ? r : void 0,
        };
      });
    }
    ((l.mexFetchGroupInviteInfoJob = v),
      (l.mexFetchGroupAddRequestInfoJob = R));
  },
  98,
);
