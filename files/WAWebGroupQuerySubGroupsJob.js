__d(
  "WAWebGroupQuerySubGroupsJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WASmaxGroupsGetLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebMexFetchLinkedGroupInfoJob",
      ).__setRef("WAWebGroupQuerySubGroupsJob");
    async function c(t) {
      var n = t.anyJoinedSubgroupId,
        r = t.parentGroupId,
        a = t.subgroupId;
      if (o("WAWebGroupMembershipFormGating").isMexLinkedGroupInfoEnabled()) {
        var i = await u.load(),
          l = i.mexFetchLinkedGroupInfoJob;
        return l({ anyJoinedSubgroupId: n, subgroupId: a });
      }
      var c = await o("WASmaxGroupsGetLinkedGroupRPC").sendGetLinkedGroupRPC({
        iqTo: o("WAWebWidToJid").widToGroupJid(r),
        queryLinkedType: "sub_group",
        queryLinkedJid: o("WAWebWidToJid").widToGroupJid(a),
        optionalSubGroupMixinArgs: n
          ? { anySubGroupJid: o("WAWebWidToJid").widToGroupJid(n) }
          : null,
      });
      e: {
        var d = c;
        if (
          ((typeof d == "object" && d !== null) || typeof d == "function") &&
          d.name === "GetLinkedGroupResponseSuccess" &&
          "value" in d
        ) {
          var m = d.value,
            p = m.linkedGroupLinkedGroupInfoMixin,
            _ = p.groupDescriptionGroupInfoDescriptionMixin,
            f = p.groupGroupInfoAttributesMixin,
            g = f.creation,
            h = f.namedSubjectOrUnnamedSubjectFallbackMixinGroup.value.subject,
            y = f.sO,
            C = f.sT,
            b = f.subjectOwnerIdentityMixin,
            v = p.groupMembershipApprovalMode,
            S = p.groupMembershipApprovalRequest,
            R = p.groupParticipant,
            L = p.groupSize,
            E = p.groupSuspended,
            k = p.hasGroupAdminRequestRequired,
            I = p.hasGroupHiddenGroup,
            T = p.jid,
            D = _ != null && o("WAWebGroupsQueryApi").extractDescriptionSmax(_),
            x = babelHelpers.extends(
              {
                id: o("WAWebJidToWid").groupJidToWid(T),
                creation: g,
                subjectTime: C,
                participants: o(
                  "WAWebGroupsQueryApi",
                ).extractGroupParticipantsSmax(R),
                size: L,
                adminRequestRequired: k,
                membershipApprovalRequest: S != null && S.error !== "304",
                membershipApprovalMode: (v == null ? void 0 : v.state) === "on",
                suspended: E != null,
                hiddenSubgroup: I,
              },
              D,
            ),
            $ = o("WAWebGroupsQueryApi").parseGroupCreatorSmax(
              m.linkedGroupLinkedGroupInfoMixin.groupGroupInfoAttributesMixin,
            ),
            P = $.creator,
            N = $.creatorCountryCode,
            M = $.creatorPn,
            w = $.creatorUsername;
          (P != null &&
            ((x.owner = P),
            w != null && (x.creatorUsername = w),
            N != null && (x.creatorCountryCode = N),
            M != null && (x.creatorPn = M)),
            h != null && (x.subject = h));
          var A = o("WAWebGroupsQueryApi").parseSubjectOwnerSmax(y, b),
            F = A.subjectOwner,
            O = A.subjectOwnerPn,
            B = A.subjectOwnerUsername;
          return (
            F != null &&
              ((x.subjectOwner = F),
              B != null && (x.subjectOwnerUsername = B),
              O != null && (x.subjectOwnerPn = O)),
            x
          );
          break e;
        }
        if (
          ((typeof d == "object" && d !== null) || typeof d == "function") &&
          d.name === "GetLinkedGroupResponseClientError" &&
          "value" in d
        ) {
          var W = d.value,
            q = W.errorGetLinkedGroupClientErrors.value,
            U = q.code,
            V = q.text;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              c.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(U), V),
            )
          );
          break e;
        }
        if (
          ((typeof d == "object" && d !== null) || typeof d == "function") &&
          d.name === "GetLinkedGroupResponseServerError" &&
          "value" in d
        ) {
          var H = d.value,
            G = H.errorServerErrors.value,
            z = G.code,
            j = G.text;
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "joinSubgroup failed: ",
                  "",
                ])),
              c.name,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(z), j),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            d,
        );
      }
    }
    l.querySubgroup = c;
  },
  98,
);
