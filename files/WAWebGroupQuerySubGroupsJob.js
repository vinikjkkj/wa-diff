__d(
  "WAWebGroupQuerySubGroupsJob",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WASmaxGroupsGetLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")(
        "WAWebMexFetchLinkedGroupInfoJob",
      ).__setRef("WAWebGroupQuerySubGroupsJob");
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.anyJoinedSubgroupId,
            a = t.parentGroupId,
            i = t.subgroupId;
          if (
            o("WAWebGroupMembershipFormGating").isMexLinkedGroupInfoEnabled()
          ) {
            var l = yield c.load(),
              d = l.mexFetchLinkedGroupInfoJob;
            return d({ anyJoinedSubgroupId: r, subgroupId: i });
          }
          var m = yield o(
            "WASmaxGroupsGetLinkedGroupRPC",
          ).sendGetLinkedGroupRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(a),
            queryLinkedType: "sub_group",
            queryLinkedJid: o("WAWebWidToJid").widToGroupJid(i),
            optionalSubGroupMixinArgs: r
              ? { anySubGroupJid: o("WAWebWidToJid").widToGroupJid(r) }
              : null,
          });
          e: {
            var p = m;
            if (
              ((typeof p == "object" && p !== null) ||
                typeof p == "function") &&
              p.name === "GetLinkedGroupResponseSuccess" &&
              "value" in p
            ) {
              var _ = p.value,
                f = _.linkedGroupLinkedGroupInfoMixin,
                g = f.groupDescriptionGroupInfoDescriptionMixin,
                h = f.groupGroupInfoAttributesMixin,
                y = h.creation,
                C =
                  h.namedSubjectOrUnnamedSubjectFallbackMixinGroup.value
                    .subject,
                b = h.sO,
                v = h.sT,
                S = h.subjectOwnerIdentityMixin,
                R = f.groupMembershipApprovalMode,
                L = f.groupMembershipApprovalRequest,
                E = f.groupParticipant,
                k = f.groupSize,
                I = f.groupSuspended,
                T = f.hasGroupAdminRequestRequired,
                D = f.hasGroupHiddenGroup,
                x = f.jid,
                $ =
                  g != null &&
                  o("WAWebGroupsQueryApi").extractDescriptionSmax(g),
                P = babelHelpers.extends(
                  {
                    id: o("WAWebJidToWid").groupJidToWid(x),
                    creation: y,
                    subjectTime: v,
                    participants: o(
                      "WAWebGroupsQueryApi",
                    ).extractGroupParticipantsSmax(E),
                    size: k,
                    adminRequestRequired: T,
                    membershipApprovalRequest: L != null && L.error !== "304",
                    membershipApprovalMode:
                      (R == null ? void 0 : R.state) === "on",
                    suspended: I != null,
                    hiddenSubgroup: D,
                  },
                  $,
                ),
                N = o("WAWebGroupsQueryApi").parseGroupCreatorSmax(
                  _.linkedGroupLinkedGroupInfoMixin
                    .groupGroupInfoAttributesMixin,
                ),
                M = N.creator,
                w = N.creatorCountryCode,
                A = N.creatorPn,
                F = N.creatorUsername;
              (M != null &&
                ((P.owner = M),
                F != null && (P.creatorUsername = F),
                w != null && (P.creatorCountryCode = w),
                A != null && (P.creatorPn = A)),
                C != null && (P.subject = C));
              var O = o("WAWebGroupsQueryApi").parseSubjectOwnerSmax(b, S),
                B = O.subjectOwner,
                W = O.subjectOwnerPn,
                q = O.subjectOwnerUsername;
              return (
                B != null &&
                  ((P.subjectOwner = B),
                  q != null && (P.subjectOwnerUsername = q),
                  W != null && (P.subjectOwnerPn = W)),
                P
              );
              break e;
            }
            if (
              ((typeof p == "object" && p !== null) ||
                typeof p == "function") &&
              p.name === "GetLinkedGroupResponseClientError" &&
              "value" in p
            ) {
              var U = p.value,
                V = U.errorGetLinkedGroupClientErrors.value,
                H = V.code,
                G = V.text;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  m.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(H),
                    G,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof p == "object" && p !== null) ||
                typeof p == "function") &&
              p.name === "GetLinkedGroupResponseServerError" &&
              "value" in p
            ) {
              var z = p.value,
                j = z.errorServerErrors.value,
                K = j.code,
                Q = j.text;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  m.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(K),
                    Q,
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                p,
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.querySubgroup = d;
  },
  98,
);
