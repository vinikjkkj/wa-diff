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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = yield o(
            "WASmaxGroupsGetLinkedGroupRPC",
          ).sendGetLinkedGroupRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(r),
            queryLinkedType: "sub_group",
            queryLinkedJid: o("WAWebWidToJid").widToGroupJid(t),
            optionalSubGroupMixinArgs: a
              ? { anySubGroupJid: o("WAWebWidToJid").widToGroupJid(a) }
              : null,
          });
          e: {
            var l = i;
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.name === "GetLinkedGroupResponseSuccess" &&
              "value" in l
            ) {
              var c = l.value,
                d = c.linkedGroupLinkedGroupInfoMixin,
                m = d.groupDescriptionGroupInfoDescriptionMixin,
                p = d.groupGroupInfoAttributesMixin,
                _ = p.creation,
                f =
                  p.namedSubjectOrUnnamedSubjectFallbackMixinGroup.value
                    .subject,
                g = p.sO,
                h = p.sT,
                y = p.subjectOwnerIdentityMixin,
                C = d.groupMembershipApprovalMode,
                b = d.groupMembershipApprovalRequest,
                v = d.groupParticipant,
                S = d.groupSize,
                R = d.groupSuspended,
                L = d.hasGroupAdminRequestRequired,
                E = d.hasGroupHiddenGroup,
                k = d.jid,
                I =
                  m != null &&
                  o("WAWebGroupsQueryApi").extractDescriptionSmax(m),
                T = babelHelpers.extends(
                  {
                    id: o("WAWebJidToWid").groupJidToWid(k),
                    creation: _,
                    subjectTime: h,
                    participants: o(
                      "WAWebGroupsQueryApi",
                    ).extractGroupParticipantsSmax(v),
                    size: S,
                    adminRequestRequired: L,
                    membershipApprovalRequest: b != null && b.error !== "304",
                    membershipApprovalMode:
                      (C == null ? void 0 : C.state) === "on",
                    suspended: R != null,
                    hiddenSubgroup: E,
                  },
                  I,
                ),
                D = o("WAWebGroupsQueryApi").parseGroupCreatorSmax(
                  c.linkedGroupLinkedGroupInfoMixin
                    .groupGroupInfoAttributesMixin,
                ),
                x = D.creator,
                $ = D.creatorCountryCode,
                P = D.creatorPn,
                N = D.creatorUsername;
              (x != null &&
                ((T.owner = x),
                N != null && (T.creatorUsername = N),
                $ != null && (T.creatorCountryCode = $),
                P != null && (T.creatorPn = P)),
                f != null && (T.subject = f));
              var M = o("WAWebGroupsQueryApi").parseSubjectOwnerSmax(g, y),
                w = M.subjectOwner,
                A = M.subjectOwnerPn,
                F = M.subjectOwnerUsername;
              return (
                w != null &&
                  ((T.subjectOwner = w),
                  F != null && (T.subjectOwnerUsername = F),
                  A != null && (T.subjectOwnerPn = A)),
                T
              );
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.name === "GetLinkedGroupResponseClientError" &&
              "value" in l
            ) {
              var O = l.value,
                B = O.errorGetLinkedGroupClientErrors.value,
                W = B.code,
                q = B.text;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  i.name,
                ),
                (u || (u = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(W),
                    q,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.name === "GetLinkedGroupResponseServerError" &&
              "value" in l
            ) {
              var U = l.value,
                V = U.errorServerErrors.value,
                H = V.code,
                G = V.text;
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "joinSubgroup failed: ",
                      "",
                    ])),
                  i.name,
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
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                l,
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
