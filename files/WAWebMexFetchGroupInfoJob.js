__d(
  "WAWebMexFetchGroupInfoJob",
  [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebMexClient",
    "WAWebMexFetchGroupInfoJobQuery.graphql",
    "WAWebMexGetTypename",
    "WAWebNewsletterRpcUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSuspendAppealStatusType",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "XWA2CommunityGroup",
      c = "XWA2CommunityDefaultSubGroup",
      d = "XWA2CommunitySubGroup",
      m = "LID",
      p = e !== void 0 ? e : (e = n("WAWebMexFetchGroupInfoJobQuery.graphql"));
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            r = e.participantsPhash,
            a = e.queryContext;
          return o("WAWebNewsletterRpcUtils").runWithBackoff(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebMexClient").fetchQuery(p, {
                id: t,
                query_context: a,
                include_username: o(
                  "WAWebUsernameGatingUtils",
                ).usernameDisplayedEnabled(),
                participants_phash: r,
              });
              return (
                o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][GROUP] fetched get group info for ",
                        "",
                      ])),
                    t,
                  )
                  .tags("GQL", "MEX"),
                e
              );
            }),
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupId,
            n = e.participantsPhash,
            r = e.queryContext,
            o = b(r),
            a = yield _({ groupId: t, queryContext: o, participantsPhash: n });
          if (a != null) return y(a);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        p,
        _,
        f,
        g,
        h,
        y,
        b,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O = e.xwa2_group_query_by_id;
      if (O == null) return null;
      var B = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        W = O.id,
        q = O.creation_time,
        U = O.creator,
        V = (t = O.creator) == null ? void 0 : t.pn,
        H = B
          ? (n = O.creator) == null || (n = n.username_info) == null
            ? void 0
            : n.username
          : null,
        G = O.description,
        z = B
          ? (r = O.description) == null ||
            (r = r.creator) == null ||
            (r = r.username_info) == null
            ? void 0
            : r.username
          : null,
        j = (a = O.participants) == null ? void 0 : a.edges,
        K = (i = O.properties) == null ? void 0 : i.allow_admin_reports,
        Q =
          (l = O.properties) == null
            ? void 0
            : l.allow_non_admin_sub_group_creation,
        X = (s = O.properties) == null ? void 0 : s.announcement,
        Y =
          (p = O.properties) == null || (p = p.ephemeral) == null
            ? void 0
            : p.expiration_time_in_sec,
        J =
          Y != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          o("WAWebAfterReadUtils").isAfterReadDuration(Y),
        Z =
          ((_ = O.properties) == null || (_ = _.lid_migration_state) == null
            ? void 0
            : _.addressing_mode) === m,
        ee = (f = O.properties) == null ? void 0 : f.locked,
        te = (g = O.properties) == null ? void 0 : g.member_add_mode,
        ne = (h = O.properties) == null ? void 0 : h.member_link_mode,
        re =
          (y = O.properties) == null
            ? void 0
            : y.member_share_group_history_mode,
        oe =
          (b = O.properties) == null
            ? void 0
            : b.membership_approval_mode_enabled,
        ae = (R = O.properties) == null ? void 0 : R.support,
        ie = O.state,
        le = O.subject,
        se = (L = O.subject) == null || (L = L.creator) == null ? void 0 : L.pn,
        ue = B
          ? (E = O.subject) == null ||
            (E = E.creator) == null ||
            (E = E.username_info) == null
            ? void 0
            : E.username
          : null,
        ce = O.total_participants_count,
        de =
          ((k = O.participants) == null
            ? void 0
            : k.participants_phash_match) === !0,
        me =
          (I = O.properties) == null
            ? void 0
            : I.closed_by_membership_approval_mode,
        pe = (T = O.properties) == null ? void 0 : T.general_chat,
        _e =
          O == null ||
          (D = O.properties) == null ||
          (D = D.growth_locked2) == null
            ? void 0
            : D.locked,
        fe =
          O == null || (x = O.properties) == null
            ? void 0
            : x.auto_add_disabled,
        ge =
          O == null || ($ = O.properties) == null ? void 0 : $.parent_group_jid,
        he = O == null || (P = O.properties) == null ? void 0 : P.capi,
        ye = O == null || (N = O.properties) == null ? void 0 : N.hidden_group,
        Ce =
          O == null || (M = O.properties) == null
            ? void 0
            : M.group_safety_check,
        be = O == null || (w = O.properties) == null ? void 0 : w.limit_sharing,
        ve = O == null || (A = O.properties) == null ? void 0 : A.appeal_status,
        Se =
          O == null || (F = O.properties) == null
            ? void 0
            : F.appeal_update_time,
        Re = (O == null ? void 0 : O.missing_participant_identification) === !0;
      if (W != null && q != null && (le == null ? void 0 : le.value) != null) {
        var Le,
          Ee,
          ke,
          Ie,
          Te,
          De,
          xe,
          $e = o("WAWebMexGetTypename").getTypename(O),
          Pe = {
            groupInfo: babelHelpers.extends(
              {
                id: o("WAWebWidFactory").createWid(W),
                owner:
                  (U == null ? void 0 : U.id) != null
                    ? o("WAWebWidFactory").createWid(U == null ? void 0 : U.id)
                    : void 0,
                creatorPn:
                  V != null ? o("WAWebWidFactory").createWid(V) : void 0,
                creatorUsername: H,
                subject: le.value,
                creation: Number(q),
                participants: S(de, j),
                subjectTime: Number(le == null ? void 0 : le.creation_time),
                subjectOwner:
                  (le == null || (Le = le.creator) == null ? void 0 : Le.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        le == null || (Ee = le.creator) == null
                          ? void 0
                          : Ee.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  se != null ? o("WAWebWidFactory").createWid(se) : void 0,
                subjectOwnerUsername: ue,
                allowNonAdminSubGroupCreation: Q != null ? Q : !1,
                generalChatAutoAddDisabled: $e === d && fe != null ? fe : !1,
                restrict: ee === !0,
                announce: $e === c || X === !0,
                support: ae != null ? ae : !1,
                desc: (ke = G == null ? void 0 : G.value) != null ? ke : void 0,
                descId: (Ie = G == null ? void 0 : G.id) != null ? Ie : void 0,
                descOwner:
                  (G == null || (Te = G.creator) == null ? void 0 : Te.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        G == null || (De = G.creator) == null ? void 0 : De.id,
                      )
                    : void 0,
                descOwnerUsername: z,
                descTime:
                  (G == null ? void 0 : G.creation_time) != null
                    ? Number(G == null ? void 0 : G.creation_time)
                    : void 0,
                size: ce,
                noFrequentlyForwarded: !1,
                ephemeralDuration: J
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : Y != null
                    ? Y
                    : void 0,
                afterReadDuration: J ? Y : void 0,
                membershipApprovalMode: oe != null ? oe : !1,
                memberAddMode: v(te),
                memberLinkMode: o(
                  "WAWebGroupMemberLinkMode",
                ).getMemberLinkModeFromMexType(ne),
                memberShareGroupHistoryMode: o(
                  "WAWebGroupHistoryShareMode",
                ).getMemberShareGroupHistoryModeFromMexType(re),
                suspended: ie === C.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(ve),
                suspendAppealUpdateTime: Se != null ? Se : null,
                terminated: ie === C.TERMINATED ? !0 : void 0,
                isLidAddressingMode: Z,
                reportToAdminMode: K != null ? K : !1,
                isParentGroupClosed: me === !0,
                isParentGroup: $e === u,
                parentGroup:
                  ge != null ? o("WAWebWidFactory").createWid(ge) : void 0,
                generalSubgroup: pe === !0,
                defaultSubgroup: $e === c,
              },
              ($e === d || $e === c) && { parentGroupSubject: null },
              {
                numSubgroups: 0,
                membershipApprovalRequest: O.membership_approval_request === !0,
                growthLockType: _e === !0 ? "invite" : void 0,
                hasCapi: he === !0,
                hiddenSubgroup: ye != null ? ye : void 0,
                groupSafetyCheck: Ce != null ? Ce : void 0,
                limitSharingEnabled:
                  (xe = be == null ? void 0 : be.limit_sharing_enabled) != null
                    ? xe
                    : void 0,
                hasIncompleteParticipantInformation: Re,
              },
            ),
            participantPhashMatch: de,
          };
        return Pe;
      }
    }
    var C = {
      ACTIVE: "ACTIVE",
      TERMINATED: "NON_EXISTENT",
      SUSPENDED: "SUSPENDED",
    };
    function b(e) {
      return e === "interactive" || e === "enter_group_info"
        ? "INTERACTIVE"
        : e === "missing_participant_identification"
          ? "MISSING_PARTICIPANT_IDENTIFICATION"
          : e === void 0 || e === "out_of_sync_update"
            ? "UNKNOWN"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function v(e) {
      switch (e) {
        case "ADMIN_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        case "ALL_MEMBER_ADD":
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        default:
          return o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
      }
    }
    function S(e, t) {
      if (e) return [];
      if (t == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "missing participants in group info participant response",
        );
      var n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        r = t.map(function (e) {
          var t,
            r,
            a = e.node,
            i = e.role,
            l,
            s,
            u;
          if (a.id == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing id in group info participant response",
            );
          return (
            (l = o("WAWebWidFactory").createWid(a.id)),
            a.lid != null && (s = o("WAWebWidFactory").createWid(a.lid)),
            a.pn != null && (u = o("WAWebWidFactory").createWid(a.pn)),
            {
              id: l,
              lid: s,
              phoneNumber: u != null ? u : null,
              displayName: (t = a.display_name) != null ? t : null,
              isAdmin: i === "ADMIN_MEMBER" || i === "SUPERADMIN_MEMBER",
              isSuperAdmin: i === "SUPERADMIN_MEMBER",
              username: n
                ? (r = a.username_info) == null
                  ? void 0
                  : r.username
                : null,
            }
          );
        });
      return r;
    }
    l.mexGetGroupInfo = g;
  },
  98,
);
