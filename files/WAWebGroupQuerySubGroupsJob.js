__d(
  "WAWebGroupQuerySubGroupsJob",
  [
    "WALogger",
    "WASmaxGroupsGetLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.anyJoinedSubgroupId,
        r = t.parentGroupId,
        a = t.subgroupId,
        i = await o("WASmaxGroupsGetLinkedGroupRPC").sendGetLinkedGroupRPC({
          iqTo: o("WAWebWidToJid").widToGroupJid(r),
          queryLinkedType: "sub_group",
          queryLinkedJid: o("WAWebWidToJid").widToGroupJid(a),
          optionalSubGroupMixinArgs: n
            ? { anySubGroupJid: o("WAWebWidToJid").widToGroupJid(n) }
            : null,
        });
      e: {
        var l = i;
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          l.name === "GetLinkedGroupResponseSuccess" &&
          "value" in l
        ) {
          var u = l.value,
            c = u.linkedGroupLinkedGroupInfoMixin,
            d = c.groupDescriptionGroupInfoDescriptionMixin,
            m = c.groupGroupInfoAttributesMixin,
            p = m.creation,
            _ = m.namedSubjectOrUnnamedSubjectFallbackMixinGroup.value.subject,
            f = m.sO,
            g = m.sT,
            h = m.subjectOwnerIdentityMixin,
            y = c.groupMembershipApprovalMode,
            C = c.groupMembershipApprovalRequest,
            b = c.groupParticipant,
            v = c.groupSize,
            S = c.groupSuspended,
            R = c.hasGroupAdminRequestRequired,
            L = c.hasGroupHiddenGroup,
            E = c.jid,
            k = d != null && o("WAWebGroupsQueryApi").extractDescriptionSmax(d),
            I = babelHelpers.extends(
              {
                id: o("WAWebJidToWid").groupJidToWid(E),
                creation: p,
                subjectTime: g,
                participants: o(
                  "WAWebGroupsQueryApi",
                ).extractGroupParticipantsSmax(b),
                size: v,
                adminRequestRequired: R,
                membershipApprovalRequest: C != null && C.error !== "304",
                membershipApprovalMode: (y == null ? void 0 : y.state) === "on",
                suspended: S != null,
                hiddenSubgroup: L,
              },
              k,
            ),
            T = o("WAWebGroupsQueryApi").parseGroupCreatorSmax(
              u.linkedGroupLinkedGroupInfoMixin.groupGroupInfoAttributesMixin,
            ),
            D = T.creator,
            x = T.creatorCountryCode,
            $ = T.creatorPn,
            P = T.creatorUsername;
          (D != null &&
            ((I.owner = D),
            P != null && (I.creatorUsername = P),
            x != null && (I.creatorCountryCode = x),
            $ != null && (I.creatorPn = $)),
            _ != null && (I.subject = _));
          var N = o("WAWebGroupsQueryApi").parseSubjectOwnerSmax(f, h),
            M = N.subjectOwner,
            w = N.subjectOwnerPn,
            A = N.subjectOwnerUsername;
          return (
            M != null &&
              ((I.subjectOwner = M),
              A != null && (I.subjectOwnerUsername = A),
              w != null && (I.subjectOwnerPn = w)),
            I
          );
          break e;
        }
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          l.name === "GetLinkedGroupResponseClientError" &&
          "value" in l
        ) {
          var F = l.value,
            O = F.errorGetLinkedGroupClientErrors.value,
            B = O.code,
            W = O.text;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              i.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(B), W),
            )
          );
          break e;
        }
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          l.name === "GetLinkedGroupResponseServerError" &&
          "value" in l
        ) {
          var q = l.value,
            U = q.errorServerErrors.value,
            V = U.code,
            H = U.text;
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              i.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(V), H),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            l,
        );
      }
    }
    l.querySubgroup = u;
  },
  98,
);
