__d(
  "WAWebGroupCommunityJob",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WASmaxGroupsCreateRPC",
    "WASmaxGroupsDeleteParentGroupRPC",
    "WASmaxGroupsLinkSubGroupsRPC",
    "WASmaxGroupsRemoveParticipantsRPC",
    "WASmaxGroupsUnlinkGroupsRPC",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebJidToWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.closed,
            a = t.desc,
            i = t.hasAllowNonAdminSubGroupCreation,
            l = t.name,
            c = t.shouldCreateGeneralChat,
            d = babelHelpers.extends(
              {},
              a != null &&
                a.length > 0 && {
                  descriptionArgs: {
                    descriptionId: o("WAWap").generateId(),
                    bodyElementValue: a,
                  },
                },
              {
                namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs: {
                  namedSubject: { anySubject: l },
                },
                hasAnnouncement: !1,
                hasCapi: !1,
                hasNoFrequentlyForwarded: !1,
                hasHiddenGroup: !1,
                hasLocked: !1,
                parentArgs: {
                  hasParentGroupDefaultMembershipApprovalMode: r ? !0 : void 0,
                },
                hasBreakout: !1,
                hasAllowNonAdminSubGroupCreation: !!i,
                hasCreateGeneralChat: c,
                hasCreatedAsLid: !1,
              },
            ),
            m = yield o("WASmaxGroupsCreateRPC").sendCreateRPC(d, {
              timeoutSeconds: 10,
            });
          e: {
            var p = m;
            if (
              ((typeof p == "object" && p !== null) ||
                typeof p == "function") &&
              p.name === "CreateResponseSuccess" &&
              "value" in p
            ) {
              var _ = p.value,
                f = _.groupCreation,
                g = _.groupCreator,
                h = _.groupId,
                C = _.groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup,
                b = o("WAWebWidFactory").createWid(h + "@g.us");
              return {
                wid: b,
                subject: C.value.subject,
                creator: o("WAWebJidToWid").userJidToUserWid(g),
                ts: f,
              };
            }
            if (
              ((typeof p == "object" && p !== null) ||
                typeof p == "function") &&
              p.name === "CreateResponseClientError" &&
              "value" in p
            ) {
              var v = p.value;
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendCreateCommunity failed: ",
                    "",
                  ])),
                "CreateResponseClientError",
              );
              var S = v.errorCreateClientErrors.value,
                R = S.code,
                L = S.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(R),
                  L,
                ),
              );
            }
            if (
              ((typeof p == "object" && p !== null) ||
                typeof p == "function") &&
              p.name === "CreateResponseServerError" &&
              "value" in p
            ) {
              var E = p.value;
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendCreateCommunity failed: ",
                    "",
                  ])),
                "CreateResponseServerError",
              );
              var k = E.errorServerErrors.value,
                I = k.code,
                T = k.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(I),
                  T,
                ),
              );
            }
            if (
              ((typeof p == "object" && p !== null) ||
                typeof p == "function") &&
              p.name === "CreateResponseGroupAlreadyExists"
            ) {
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "sendCreateCommunity failed: ",
                      "",
                    ])),
                  "CreateResponseGroupAlreadyExists",
                ),
                (y || (y = n("Promise"))).reject(
                  new ((function (e) {
                    function t() {
                      var t;
                      return (
                        (t =
                          e.call(this, "CreateResponseGroupAlreadyExists") ||
                          this),
                        (t.name = "CreateResponseGroupAlreadyExists"),
                        t
                      );
                    }
                    return (babelHelpers.inheritsLoose(t, e), t);
                  })(o("WACustomError").CustomError))(),
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentGroupId,
            r = yield o(
              "WASmaxGroupsDeleteParentGroupRPC",
            ).sendDeleteParentGroupRPC({
              iqTo: o("WAWebWidToJid").widToGroupJid(t),
            });
          switch (r.name) {
            case "DeleteParentGroupResponseSuccess":
              return { parent_group_jid: o("WAWebWidToJid").widToGroupJid(t) };
            case "DeleteParentGroupResponseClientError": {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "sendDeactivateCommunity failed: ",
                    "",
                  ])),
                r.name,
              );
              var a = r.value.errorDeleteParentGroupClientError.value,
                i = a.code,
                l = a.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(i),
                  l,
                ),
              );
            }
            case "DeleteParentGroupResponseServerError": {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendDeactivateCommunity failed: ",
                    "",
                  ])),
                r.name,
              );
              var s = r.value.errorServerErrors.value,
                u = s.code,
                m = s.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(u),
                  m,
                ),
              );
            }
          }
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
          var t = e.contactId,
            r = e.parentGroupId,
            a = yield o(
              "WASmaxGroupsRemoveParticipantsRPC",
            ).sendRemoveParticipantsRPC({
              participantArgs: [
                { participantJid: o("WAWebWidToJid").widToUserJid(t) },
              ],
              iqTo: o("WAWebWidToJid").widToGroupJid(r),
              hasRemoveLinkedGroupsTrue: !0,
            });
          switch (a.name) {
            case "RemoveParticipantsResponseSuccess": {
              var i = a.value.removeParticipant[0],
                l = i.jid,
                s =
                  i.participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup;
              return {
                parentGroupJid: o("WAWebWidToJid").widToGroupJid(r),
                contactJid: l,
                errorCode: s == null ? void 0 : s.value.error,
              };
            }
            case "RemoveParticipantsResponseClientError": {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sendRemoveFromCommunity failed: ",
                    "",
                  ])),
                a.name,
              );
              var u = a.value.errorRemoveParticipantsClientErrors.value,
                c = u.code,
                d = u.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(c),
                  d,
                ),
              );
            }
            case "RemoveParticipantsResponseServerError": {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "sendRemoveFromCommunity failed: ",
                    "",
                  ])),
                a.name,
              );
              var _ = a.value.errorServerErrors.value,
                f = _.code,
                g = _.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(f),
                  g,
                ),
              );
            }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentGroupId,
            r = e.subgroupIds,
            a = yield o("WASmaxGroupsLinkSubGroupsRPC").sendLinkSubGroupsRPC({
              groupArgs: r.map(function (e) {
                return {
                  groupJid: o("WAWebWidToJid").widToGroupJid(e),
                  hasHiddenGroup: !1,
                };
              }),
              iqTo: o("WAWebWidToJid").widToGroupJid(t),
            });
          switch (a.name) {
            case "LinkSubGroupsResponseSuccess": {
              var i = [],
                l = [],
                s = [];
              return (
                a.value.linksLinkGroup.forEach(function (e) {
                  var t,
                    n = parseInt(
                      (t = e.linkSubGroupsSuccessIqLinksLinkGroupMixinGroup) ==
                        null
                        ? void 0
                        : t.value.error,
                      10,
                    );
                  (n ? l.push({ jid: e.jid, error: n }) : i.push(e.jid),
                    e.participant &&
                      s.push.apply(
                        s,
                        e.participant.map(function (e) {
                          return e.jid;
                        }),
                      ));
                }),
                {
                  linkedGroupJids: i,
                  failedGroups: l,
                  failedParticipantJids: s,
                }
              );
            }
            case "LinkSubGroupsResponseClientError": {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "sendLinkSubgroups failed: ",
                    "",
                  ])),
                a.name,
              );
              var u = a.value.errorLinkSubGroupsClientError.value,
                c = u.code,
                d = u.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(c),
                  d,
                ),
              );
            }
            case "LinkSubGroupsResponseServerError": {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "sendLinkSubgroups failed: ",
                    "",
                  ])),
                a.name,
              );
              var m = a.value.errorServerErrors.value,
                p = m.code,
                g = m.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(p),
                  g,
                ),
              );
            }
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentGroupId,
            r = e.removeOrphanMembers,
            a = r === void 0 ? !1 : r,
            i = e.subgroupIds,
            l = yield o("WASmaxGroupsUnlinkGroupsRPC").sendUnlinkGroupsRPC({
              groupArgs: i.map(function (e) {
                return {
                  groupJid: o("WAWebWidToJid").widToGroupJid(e),
                  hasGroupRemoveOrphanedMembersTrue: a,
                };
              }),
              iqTo: o("WAWebWidToJid").widToGroupJid(t),
            });
          switch (l.name) {
            case "UnlinkGroupsResponseSuccess": {
              var s = [],
                u = [];
              return (
                l.value.unlinkGroup.forEach(function (e) {
                  var t,
                    n = parseInt(
                      (t =
                        e.subGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup) ==
                        null
                        ? void 0
                        : t.value.error,
                      10,
                    );
                  n ? u.push({ jid: e.jid, error: n }) : s.push(e.jid);
                }),
                { unlinkedGroupJids: s, failedGroups: u }
              );
            }
            case "UnlinkGroupsResponseClientError": {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "sendUnlinkSubgroups failed: ",
                    "",
                  ])),
                l.name,
              );
              var c = l.value.errorUnlinkGroupsClientError.value,
                d = c.code,
                m = c.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(d),
                  m,
                ),
              );
            }
            case "UnlinkGroupsResponseServerError": {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "sendUnlinkSubgroups failed: ",
                    "",
                  ])),
                l.name,
              );
              var p = l.value.errorServerErrors.value,
                _ = p.code,
                f = p.text;
              return (y || (y = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(_),
                  f,
                ),
              );
            }
          }
        })),
        T.apply(this, arguments)
      );
    }
    ((l.sendCreateCommunity = C),
      (l.sendDeactivateCommunity = v),
      (l.sendRemoveFromCommunity = R),
      (l.sendLinkSubgroups = E),
      (l.sendUnlinkSubgroups = I));
  },
  98,
);
