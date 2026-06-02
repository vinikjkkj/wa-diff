__d(
  "WAWebGroupCommunityJob",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    async function y(t) {
      var n = t.closed,
        r = t.desc,
        a = t.hasAllowNonAdminSubGroupCreation,
        i = t.name,
        l = t.shouldCreateGeneralChat,
        c = babelHelpers.extends(
          {},
          r != null &&
            r.length > 0 && {
              descriptionArgs: {
                descriptionId: o("WAWap").generateId(),
                bodyElementValue: r,
              },
            },
          {
            namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs: {
              namedSubject: { anySubject: i },
            },
            hasAnnouncement: !1,
            hasCapi: !1,
            hasNoFrequentlyForwarded: !1,
            hasHiddenGroup: !1,
            hasLocked: !1,
            parentArgs: {
              hasParentGroupDefaultMembershipApprovalMode: n ? !0 : void 0,
            },
            hasBreakout: !1,
            hasAllowNonAdminSubGroupCreation: !!a,
            hasCreateGeneralChat: l,
            hasCreatedAsLid: !1,
          },
        ),
        d = await o("WASmaxGroupsCreateRPC").sendCreateRPC(c, {
          timeoutSeconds: 10,
        });
      e: {
        var m = d;
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "CreateResponseSuccess" &&
          "value" in m
        ) {
          var p = m.value,
            _ = p.groupCreation,
            f = p.groupCreator,
            g = p.groupId,
            h = p.groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup,
            y = o("WAWebWidFactory").createWid(g + "@g.us");
          return {
            wid: y,
            subject: h.value.subject,
            creator: o("WAWebJidToWid").userJidToUserWid(f),
            ts: _,
          };
        }
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "CreateResponseClientError" &&
          "value" in m
        ) {
          var C = m.value;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendCreateCommunity failed: ",
                "",
              ])),
            "CreateResponseClientError",
          );
          var b = C.errorCreateClientErrors.value,
            v = b.code,
            S = b.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(v), S),
          );
        }
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "CreateResponseServerError" &&
          "value" in m
        ) {
          var R = m.value;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sendCreateCommunity failed: ",
                "",
              ])),
            "CreateResponseServerError",
          );
          var L = R.errorServerErrors.value,
            E = L.code,
            k = L.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(E), k),
          );
        }
        if (
          ((typeof m == "object" && m !== null) || typeof m == "function") &&
          m.name === "CreateResponseGroupAlreadyExists"
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
            Promise.reject(
              new ((function (e) {
                function t() {
                  var t;
                  return (
                    (t =
                      e.call(this, "CreateResponseGroupAlreadyExists") || this),
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
            m,
        );
      }
    }
    async function C(e) {
      var t = e.parentGroupId,
        n = await o(
          "WASmaxGroupsDeleteParentGroupRPC",
        ).sendDeleteParentGroupRPC({
          iqTo: o("WAWebWidToJid").widToGroupJid(t),
        });
      switch (n.name) {
        case "DeleteParentGroupResponseSuccess":
          return { parent_group_jid: o("WAWebWidToJid").widToGroupJid(t) };
        case "DeleteParentGroupResponseClientError": {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendDeactivateCommunity failed: ",
                "",
              ])),
            n.name,
          );
          var r = n.value.errorDeleteParentGroupClientError.value,
            a = r.code,
            i = r.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(a), i),
          );
        }
        case "DeleteParentGroupResponseServerError": {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "sendDeactivateCommunity failed: ",
                "",
              ])),
            n.name,
          );
          var l = n.value.errorServerErrors.value,
            s = l.code,
            u = l.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(s), u),
          );
        }
      }
    }
    async function b(e) {
      var t = e.contactId,
        n = e.parentGroupId,
        r = await o(
          "WASmaxGroupsRemoveParticipantsRPC",
        ).sendRemoveParticipantsRPC({
          participantArgs: [
            { participantJid: o("WAWebWidToJid").widToUserJid(t) },
          ],
          iqTo: o("WAWebWidToJid").widToGroupJid(n),
          hasRemoveLinkedGroupsTrue: !0,
        });
      switch (r.name) {
        case "RemoveParticipantsResponseSuccess": {
          var a = r.value.removeParticipant[0],
            i = a.jid,
            l =
              a.participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup;
          return {
            parentGroupJid: o("WAWebWidToJid").widToGroupJid(n),
            contactJid: i,
            errorCode: l == null ? void 0 : l.value.error,
          };
        }
        case "RemoveParticipantsResponseClientError": {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "sendRemoveFromCommunity failed: ",
                "",
              ])),
            r.name,
          );
          var s = r.value.errorRemoveParticipantsClientErrors.value,
            u = s.code,
            c = s.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(u), c),
          );
        }
        case "RemoveParticipantsResponseServerError": {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "sendRemoveFromCommunity failed: ",
                "",
              ])),
            r.name,
          );
          var d = r.value.errorServerErrors.value,
            _ = d.code,
            f = d.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(_), f),
          );
        }
      }
    }
    async function v(e) {
      var t = e.parentGroupId,
        n = e.subgroupIds,
        r = await o("WASmaxGroupsLinkSubGroupsRPC").sendLinkSubGroupsRPC({
          groupArgs: n.map(function (e) {
            return {
              groupJid: o("WAWebWidToJid").widToGroupJid(e),
              hasHiddenGroup: !1,
            };
          }),
          iqTo: o("WAWebWidToJid").widToGroupJid(t),
        });
      switch (r.name) {
        case "LinkSubGroupsResponseSuccess": {
          var a = [],
            i = [],
            l = [];
          return (
            r.value.linksLinkGroup.forEach(function (e) {
              var t,
                n = parseInt(
                  (t = e.linkSubGroupsSuccessIqLinksLinkGroupMixinGroup) == null
                    ? void 0
                    : t.value.error,
                  10,
                );
              (n ? i.push({ jid: e.jid, error: n }) : a.push(e.jid),
                e.participant &&
                  l.push.apply(
                    l,
                    e.participant.map(function (e) {
                      return e.jid;
                    }),
                  ));
            }),
            { linkedGroupJids: a, failedGroups: i, failedParticipantJids: l }
          );
        }
        case "LinkSubGroupsResponseClientError": {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "sendLinkSubgroups failed: ",
                "",
              ])),
            r.name,
          );
          var s = r.value.errorLinkSubGroupsClientError.value,
            u = s.code,
            c = s.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(u), c),
          );
        }
        case "LinkSubGroupsResponseServerError": {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "sendLinkSubgroups failed: ",
                "",
              ])),
            r.name,
          );
          var d = r.value.errorServerErrors.value,
            m = d.code,
            p = d.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(m), p),
          );
        }
      }
    }
    async function S(e) {
      var t = e.parentGroupId,
        n = e.removeOrphanMembers,
        r = n === void 0 ? !1 : n,
        a = e.subgroupIds,
        i = await o("WASmaxGroupsUnlinkGroupsRPC").sendUnlinkGroupsRPC({
          groupArgs: a.map(function (e) {
            return {
              groupJid: o("WAWebWidToJid").widToGroupJid(e),
              hasGroupRemoveOrphanedMembersTrue: r,
            };
          }),
          iqTo: o("WAWebWidToJid").widToGroupJid(t),
        });
      switch (i.name) {
        case "UnlinkGroupsResponseSuccess": {
          var l = [],
            s = [];
          return (
            i.value.unlinkGroup.forEach(function (e) {
              var t,
                n = parseInt(
                  (t =
                    e.subGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup) ==
                    null
                    ? void 0
                    : t.value.error,
                  10,
                );
              n ? s.push({ jid: e.jid, error: n }) : l.push(e.jid);
            }),
            { unlinkedGroupJids: l, failedGroups: s }
          );
        }
        case "UnlinkGroupsResponseClientError": {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "sendUnlinkSubgroups failed: ",
                "",
              ])),
            i.name,
          );
          var u = i.value.errorUnlinkGroupsClientError.value,
            c = u.code,
            d = u.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(c), d),
          );
        }
        case "UnlinkGroupsResponseServerError": {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "sendUnlinkSubgroups failed: ",
                "",
              ])),
            i.name,
          );
          var m = i.value.errorServerErrors.value,
            p = m.code,
            _ = m.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(p), _),
          );
        }
      }
    }
    ((l.sendCreateCommunity = y),
      (l.sendDeactivateCommunity = C),
      (l.sendRemoveFromCommunity = b),
      (l.sendLinkSubgroups = v),
      (l.sendUnlinkSubgroups = S));
  },
  98,
);
