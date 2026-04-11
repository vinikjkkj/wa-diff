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
        A = e.xwa2_group_query_by_id;
      if (A == null) return null;
      var F = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        O = A.id,
        B = A.creation_time,
        W = A.creator,
        q = (t = A.creator) == null ? void 0 : t.pn,
        U = F
          ? (n = A.creator) == null || (n = n.username_info) == null
            ? void 0
            : n.username
          : null,
        V = A.description,
        H = F
          ? (r = A.description) == null ||
            (r = r.creator) == null ||
            (r = r.username_info) == null
            ? void 0
            : r.username
          : null,
        G = (a = A.participants) == null ? void 0 : a.edges,
        z = (i = A.properties) == null ? void 0 : i.allow_admin_reports,
        j =
          (l = A.properties) == null
            ? void 0
            : l.allow_non_admin_sub_group_creation,
        K = (s = A.properties) == null ? void 0 : s.announcement,
        Q =
          (p = A.properties) == null || (p = p.ephemeral) == null
            ? void 0
            : p.expiration_time_in_sec,
        X =
          ((_ = A.properties) == null || (_ = _.lid_migration_state) == null
            ? void 0
            : _.addressing_mode) === m,
        Y = (f = A.properties) == null ? void 0 : f.locked,
        J = (g = A.properties) == null ? void 0 : g.member_add_mode,
        Z = (h = A.properties) == null ? void 0 : h.member_link_mode,
        ee =
          (y = A.properties) == null
            ? void 0
            : y.member_share_group_history_mode,
        te =
          (b = A.properties) == null
            ? void 0
            : b.membership_approval_mode_enabled,
        ne = (R = A.properties) == null ? void 0 : R.support,
        re = A.state,
        oe = A.subject,
        ae = (L = A.subject) == null || (L = L.creator) == null ? void 0 : L.pn,
        ie = F
          ? (E = A.subject) == null ||
            (E = E.creator) == null ||
            (E = E.username_info) == null
            ? void 0
            : E.username
          : null,
        le = A.total_participants_count,
        se =
          ((k = A.participants) == null
            ? void 0
            : k.participants_phash_match) === !0,
        ue =
          (I = A.properties) == null
            ? void 0
            : I.closed_by_membership_approval_mode,
        ce = (T = A.properties) == null ? void 0 : T.general_chat,
        de =
          A == null ||
          (D = A.properties) == null ||
          (D = D.growth_locked2) == null
            ? void 0
            : D.locked,
        me =
          A == null || (x = A.properties) == null
            ? void 0
            : x.auto_add_disabled,
        pe =
          A == null || ($ = A.properties) == null ? void 0 : $.parent_group_jid,
        _e = A == null || (P = A.properties) == null ? void 0 : P.capi,
        fe = A == null || (N = A.properties) == null ? void 0 : N.hidden_group,
        ge =
          A == null || (M = A.properties) == null
            ? void 0
            : M.group_safety_check,
        he = A == null || (w = A.properties) == null ? void 0 : w.limit_sharing,
        ye = (A == null ? void 0 : A.missing_participant_identification) === !0;
      if (O != null && B != null && (oe == null ? void 0 : oe.value) != null) {
        var Ce,
          be,
          ve,
          Se,
          Re,
          Le,
          Ee,
          ke = o("WAWebMexGetTypename").getTypename(A),
          Ie = {
            groupInfo: babelHelpers.extends(
              {
                id: o("WAWebWidFactory").createWid(O),
                owner:
                  (W == null ? void 0 : W.id) != null
                    ? o("WAWebWidFactory").createWid(W == null ? void 0 : W.id)
                    : void 0,
                creatorPn:
                  q != null ? o("WAWebWidFactory").createWid(q) : void 0,
                creatorUsername: U,
                subject: oe.value,
                creation: Number(B),
                participants: S(se, G),
                subjectTime: Number(oe == null ? void 0 : oe.creation_time),
                subjectOwner:
                  (oe == null || (Ce = oe.creator) == null ? void 0 : Ce.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        oe == null || (be = oe.creator) == null
                          ? void 0
                          : be.id,
                      )
                    : void 0,
                subjectOwnerPn:
                  ae != null ? o("WAWebWidFactory").createWid(ae) : void 0,
                subjectOwnerUsername: ie,
                allowNonAdminSubGroupCreation: j != null ? j : !1,
                generalChatAutoAddDisabled: ke === d && me != null ? me : !1,
                restrict: Y === !0,
                announce: ke === c || K === !0,
                support: ne != null ? ne : !1,
                desc: (ve = V == null ? void 0 : V.value) != null ? ve : void 0,
                descId: (Se = V == null ? void 0 : V.id) != null ? Se : void 0,
                descOwner:
                  (V == null || (Re = V.creator) == null ? void 0 : Re.id) !=
                  null
                    ? o("WAWebWidFactory").createWid(
                        V == null || (Le = V.creator) == null ? void 0 : Le.id,
                      )
                    : void 0,
                descOwnerUsername: H,
                descTime:
                  (V == null ? void 0 : V.creation_time) != null
                    ? Number(V == null ? void 0 : V.creation_time)
                    : void 0,
                size: le,
                noFrequentlyForwarded: !1,
                ephemeralDuration: Q != null ? Q : void 0,
                membershipApprovalMode: te != null ? te : !1,
                memberAddMode: v(J),
                memberLinkMode: o(
                  "WAWebGroupMemberLinkMode",
                ).getMemberLinkModeFromMexType(Z),
                memberShareGroupHistoryMode: o(
                  "WAWebGroupHistoryShareMode",
                ).getMemberShareGroupHistoryModeFromMexType(ee),
                suspended: re === C.SUSPENDED,
                terminated: re === C.TERMINATED ? !0 : void 0,
                isLidAddressingMode: X,
                reportToAdminMode: z != null ? z : !1,
                isParentGroupClosed: ue === !0,
                isParentGroup: ke === u,
                parentGroup:
                  pe != null ? o("WAWebWidFactory").createWid(pe) : void 0,
                generalSubgroup: ce === !0,
                defaultSubgroup: ke === c,
              },
              (ke === d || ke === c) && { parentGroupSubject: null },
              {
                numSubgroups: 0,
                membershipApprovalRequest: A.membership_approval_request === !0,
                growthLockType: de === !0 ? "invite" : void 0,
                hasCapi: _e === !0,
                hiddenSubgroup: fe != null ? fe : void 0,
                groupSafetyCheck: ge != null ? ge : void 0,
                limitSharingEnabled:
                  (Ee = he == null ? void 0 : he.limit_sharing_enabled) != null
                    ? Ee
                    : void 0,
                hasIncompleteParticipantInformation: ye,
              },
            ),
            participantPhashMatch: se,
          };
        return Ie;
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
