__d(
  "WAWebSubgroupSuggestionCreateJob",
  [
    "WALogger",
    "WASmaxGroupsCreateSubGroupSuggestionRPC",
    "WAWebBackendErrors",
    "WAWebCoreActionsODS",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      function r(t) {
        var n = t.code,
          r = t.text;
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "createExistingGroupSubgroupSuggestion failed: ",
                ":",
                "",
              ])),
            n,
            r,
          ),
          Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(n), r),
          )
        );
      }
      var a = await o(
        "WASmaxGroupsCreateSubGroupSuggestionRPC",
      ).sendCreateSubGroupSuggestionRPC({
        iqTo: o("WAWebWidToJid").widToGroupJid(t),
        suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs:
          {
            createSubGroupSuggestionSuggestionForExistingGroups: {
              groupArgs: n.map(function (e) {
                return {
                  groupJid: o("WAWebWidToJid").widToGroupJid(e),
                  hasHiddenGroup: !1,
                };
              }),
            },
          },
      });
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name ===
            "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess" &&
          "value" in e
        ) {
          var t = e.value;
          return t.subGroupSuggestionGroup.map(function (e) {
            var t;
            return {
              groupJid: e.jid,
              error:
                (t =
                  e.subGroupNotAuthorizedOrNotExistOrConflictOrSuggestionNotAllowedOrResourceLimitOrBadRequestOrNotAcceptableOrServerErrorMixinGroup) ==
                null
                  ? void 0
                  : t.value.error,
            };
          });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "CreateSubGroupSuggestionResponseClientError" &&
          "value" in e
        ) {
          var n = e.value;
          return r(n.errorCreateSubGroupSuggestionErrors.value);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name ===
            "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess" &&
          "value" in e
        )
          return r({
            code: 500,
            text: "Received invalid new group success response for create existing group subgroup suggestion",
          });
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "CreateSubGroupSuggestionResponseServerError" &&
          "value" in e
        ) {
          var o = e.value;
          return r(o.errorServerErrors.value);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(a);
    }
    async function c(e) {
      var t = e.announce,
        n = e.description,
        r = e.memberAddMode,
        a = e.memberShareGroupHistoryMode,
        i = e.membershipApprovalMode,
        l = e.parentGroupId,
        u = e.restrict,
        c = e.subject;
      function d(e) {
        var t = e.code,
          n = e.text;
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "createNewGroupSubgroupSuggestion failed: ",
                ":",
                "",
              ])),
            t,
            n,
          ),
          Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(t), n),
          )
        );
      }
      var m = await o(
        "WASmaxGroupsCreateSubGroupSuggestionRPC",
      ).sendCreateSubGroupSuggestionRPC({
        iqTo: o("WAWebWidToJid").widToGroupJid(l),
        suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs:
          {
            createSubGroupSuggestionSuggestionForNewGroup: {
              subjectElementValue: c,
              hasAnnouncement: !t,
              hasLocked: !u,
              hasHiddenGroup: !1,
              membershipApprovalModeArgs: {
                membershipApprovalModesArgs:
                  i === !1
                    ? { isGroupJoinMembershipApprovalModeDisabled: !0 }
                    : { isGroupJoinMembershipApprovalModeEnabled: !0 },
              },
              groupMemberAddModeMixinArgs: {
                memberAddModesArgs:
                  r === !1
                    ? { isAdminAddMode: !0 }
                    : { isAllMembersAddMode: !0 },
              },
              groupMemberShareGroupHistoryModeMixinArgs: {
                memberShareGroupHistoryModesArgs:
                  a === !0
                    ? { isAllMembersShareMode: !0 }
                    : { isAdminShareMode: !0 },
              },
              descriptionArgs: n != null ? { bodyElementValue: n } : void 0,
            },
          },
      });
      switch (m.name) {
        case "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess": {
          var p,
            _ =
              (p = m.value.subGroupSuggestionDescription) != null && p.error
                ? void 0
                : n;
          return (
            o("WAWebCoreActionsODS").logGroupCreate(),
            {
              id: o("WAWebWidFactory").createWid(m.value.subGroupSuggestionJid),
              owner: o("WAWebWidFactory").createWid(
                m.value.subGroupSuggestionCreator,
              ),
              t: m.value.subGroupSuggestionCreation,
              parentGroupId: l,
              subject: c,
              desc: _,
              isExistingGroup: !1,
              participantCount: void 0,
              hiddenSubgroup: void 0,
            }
          );
        }
        case "CreateSubGroupSuggestionResponseClientError": {
          var f = m.value.errorCreateSubGroupSuggestionErrors;
          return d(f.value);
        }
        case "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess":
          return d({
            code: 500,
            text: "Received invalid existing group success response for create new subgroup suggestion",
          });
        default:
          return (m.name, d(m.value.errorServerErrors.value));
      }
    }
    ((l.createExistingGroupSubgroupSuggestion = u),
      (l.createNewGroupSubgroupSuggestion = c));
  },
  98,
);
