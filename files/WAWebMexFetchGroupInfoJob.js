__d(
  "WAWebMexFetchGroupInfoJob",
  [
    "WALogger",
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
          ((_ = O.properties) == null || (_ = _.lid_migration_state) == null
            ? void 0
            : _.addressing_mode) === m,
        Z = (f = O.properties) == null ? void 0 : f.locked,
        ee = (g = O.properties) == null ? void 0 : g.member_add_mode,
        te = (h = O.properties) == null ? void 0 : h.member_link_mode,
        ne =
          (y = O.properties) == null
            ? void 0
            : y.member_share_group_history_mode,
        re =
          (b = O.properties) == null
            ? void 0
            : b.membership_approval_mode_enabled,
        oe = (R = O.properties) == null ? void 0 : R.support,
        ae = O.state,
        ie = O.subject,
        le = (L = O.subject) == null || (L = L.creator) == null ? void 0 : L.pn,
        se = B
          ? (E = O.subject) == null ||
            (E = E.creator) == null ||
            (E = E.username_info) == null
            ? void 0
            : E.username
          : null,
        ue = O.total_participants_count,
        ce =
          ((k = O.participants) == null
            ? void 0
            : k.participants_phash_match) === !0,
        de =
          (I = O.properties) == null
            ? void 0
            : I.closed_by_membership_approval_mode,
        me = (T = O.properties) == null ? void 0 : T.general_chat,
        pe =
          O == null ||
          (D = O.properties) == null ||
          (D = D.growth_locked2) == null
            ? void 0
            : D.locked,
        _e =
          O == null || (x = O.properties) == null
            ? void 0
            : x.auto_add_disabled,
        fe =
          O == null || ($ = O.properties) == null ? void 0 : $.parent_group_jid,
        ge = O == null || (P = O.properties) == null ? void 0 : P.capi,
        he = O == null || (N = O.properties) == null ? void 0 : N.hidden_group,
        ye =
          O == null || (M = O.properties) == null
            ? void 0
            : M.group_safety_check,
        Ce = O == null || (w = O.properties) == null ? void 0 : w.limit_sharing,
        be = O == null || (A = O.properties) == null ? void 0 : A.appeal_status,
        ve =
          O == null || (F = O.properties) == null
            ? void 0
            : F.appeal_update_time,
        Se = (O == null ? void 0 : O.missing_participant_identification) === !0;
      if (W != null && q != null && (ie == null ? void 0 : ie.value) != null) {
        var Re,
          Le,
          Ee,
          ke,
          Ie,
          Te,
          De,
          xe = o("WAWebMexGetTypename").getTypename(O),
          $e = {
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
                subject: ie.value,
                creation: Number(q),
                participants: S(ce, j),
                subjectTime: Number(ie == null ? void 0 : ie.creation_time),
                subjectOwner:
                  (ie == null || (Re = ie.creator) == null ? void 0 : Re.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        ie == null || (Le = ie.creator) == null
                          ? void 0
                          : Le.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  le != null ? o("WAWebWidFactory").createWid(le) : void 0,
                subjectOwnerUsername: se,
                allowNonAdminSubGroupCreation: Q != null ? Q : !1,
                generalChatAutoAddDisabled: xe === d && _e != null ? _e : !1,
                restrict: Z === !0,
                announce: xe === c || X === !0,
                support: oe != null ? oe : !1,
                desc: (Ee = G == null ? void 0 : G.value) != null ? Ee : void 0,
                descId: (ke = G == null ? void 0 : G.id) != null ? ke : void 0,
                descOwner:
                  (G == null || (Ie = G.creator) == null ? void 0 : Ie.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        G == null || (Te = G.creator) == null ? void 0 : Te.id,
                      )
                    : void 0,
                descOwnerUsername: z,
                descTime:
                  (G == null ? void 0 : G.creation_time) != null
                    ? Number(G == null ? void 0 : G.creation_time)
                    : void 0,
                size: ue,
                noFrequentlyForwarded: !1,
                ephemeralDuration: Y != null ? Y : void 0,
                membershipApprovalMode: re != null ? re : !1,
                memberAddMode: v(ee),
                memberLinkMode: o(
                  "WAWebGroupMemberLinkMode",
                ).getMemberLinkModeFromMexType(te),
                memberShareGroupHistoryMode: o(
                  "WAWebGroupHistoryShareMode",
                ).getMemberShareGroupHistoryModeFromMexType(ne),
                suspended: ae === C.SUSPENDED,
                suspendAppealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(be),
                suspendAppealUpdateTime: ve != null ? ve : null,
                terminated: ae === C.TERMINATED ? !0 : void 0,
                isLidAddressingMode: J,
                reportToAdminMode: K != null ? K : !1,
                isParentGroupClosed: de === !0,
                isParentGroup: xe === u,
                parentGroup:
                  fe != null ? o("WAWebWidFactory").createWid(fe) : void 0,
                generalSubgroup: me === !0,
                defaultSubgroup: xe === c,
              },
              (xe === d || xe === c) && { parentGroupSubject: null },
              {
                numSubgroups: 0,
                membershipApprovalRequest: O.membership_approval_request === !0,
                growthLockType: pe === !0 ? "invite" : void 0,
                hasCapi: ge === !0,
                hiddenSubgroup: he != null ? he : void 0,
                groupSafetyCheck: ye != null ? ye : void 0,
                limitSharingEnabled:
                  (De = Ce == null ? void 0 : Ce.limit_sharing_enabled) != null
                    ? De
                    : void 0,
                hasIncompleteParticipantInformation: Se,
              },
            ),
            participantPhashMatch: ce,
          };
        return $e;
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
