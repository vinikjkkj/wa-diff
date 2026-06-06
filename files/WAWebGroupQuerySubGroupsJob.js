__d(
  "WAWebGroupQuerySubGroupsJob",
  [
    "Promise",
    "WALogger",
    "WASmaxGroupsGetLinkedGroupRPC",
    "WAWebBackendErrors",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.anyJoinedSubgroupId,
            a = t.parentGroupId,
            i = t.subgroupId,
            l = yield o("WASmaxGroupsGetLinkedGroupRPC").sendGetLinkedGroupRPC({
              iqTo: o("WAWebWidToJid").widToGroupJid(a),
              queryLinkedType: "sub_group",
              queryLinkedJid: o("WAWebWidToJid").widToGroupJid(i),
              optionalSubGroupMixinArgs: r
                ? { anySubGroupJid: o("WAWebWidToJid").widToGroupJid(r) }
                : null,
            });
          e: {
            var c = l;
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.name === "GetLinkedGroupResponseSuccess" &&
              "value" in c
            ) {
              var d = c.value,
                m = d.linkedGroupLinkedGroupInfoMixin,
                p = m.groupDescriptionGroupInfoDescriptionMixin,
                _ = m.groupGroupInfoAttributesMixin,
                f = _.creation,
                g =
                  _.namedSubjectOrUnnamedSubjectFallbackMixinGroup.value
                    .subject,
                h = _.sO,
                y = _.sT,
                C = _.subjectOwnerIdentityMixin,
                b = m.groupMembershipApprovalMode,
                v = m.groupMembershipApprovalRequest,
                S = m.groupParticipant,
                R = m.groupSize,
                L = m.groupSuspended,
                E = m.hasGroupAdminRequestRequired,
                k = m.hasGroupHiddenGroup,
                I = m.jid,
                T =
                  p != null &&
                  o("WAWebGroupsQueryApi").extractDescriptionSmax(p),
                D = babelHelpers.extends(
                  {
                    id: o("WAWebJidToWid").groupJidToWid(I),
                    creation: f,
                    subjectTime: y,
                    participants: o(
                      "WAWebGroupsQueryApi",
                    ).extractGroupParticipantsSmax(S),
                    size: R,
                    adminRequestRequired: E,
                    membershipApprovalRequest: v != null && v.error !== "304",
                    membershipApprovalMode:
                      (b == null ? void 0 : b.state) === "on",
                    suspended: L != null,
                    hiddenSubgroup: k,
                  },
                  T,
                ),
                x = o("WAWebGroupsQueryApi").parseGroupCreatorSmax(
                  d.linkedGroupLinkedGroupInfoMixin
                    .groupGroupInfoAttributesMixin,
                ),
                $ = x.creator,
                P = x.creatorCountryCode,
                N = x.creatorPn,
                M = x.creatorUsername;
              ($ != null &&
                ((D.owner = $),
                M != null && (D.creatorUsername = M),
                P != null && (D.creatorCountryCode = P),
                N != null && (D.creatorPn = N)),
                g != null && (D.subject = g));
              var w = o("WAWebGroupsQueryApi").parseSubjectOwnerSmax(h, C),
                A = w.subjectOwner,
                F = w.subjectOwnerPn,
                O = w.subjectOwnerUsername;
              return (
                A != null &&
                  ((D.subjectOwner = A),
                  O != null && (D.subjectOwnerUsername = O),
                  F != null && (D.subjectOwnerPn = F)),
                D
              );
              break e;
            }
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.name === "GetLinkedGroupResponseClientError" &&
              "value" in c
            ) {
              var B = c.value,
                W = B.errorGetLinkedGroupClientErrors.value,
                q = W.code,
                U = W.text;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  l.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(q),
                    U,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.name === "GetLinkedGroupResponseServerError" &&
              "value" in c
            ) {
              var V = c.value,
                H = V.errorServerErrors.value,
                G = H.code,
                z = H.text;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  l.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(G),
                    z,
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                c,
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.querySubgroup = c;
  },
  98,
);
