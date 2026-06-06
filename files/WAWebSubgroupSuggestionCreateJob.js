__d(
  "WAWebSubgroupSuggestionCreateJob",
  [
    "Promise",
    "WALogger",
    "WASmaxGroupsCreateSubGroupSuggestionRPC",
    "WAWebBackendErrors",
    "WAWebCoreActionsODS",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          function a(t) {
            var r = t.code,
              a = t.text;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createExistingGroupSubgroupSuggestion failed: ",
                    ":",
                    "",
                  ])),
                r,
                a,
              ),
              (u || (u = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(r),
                  a,
                ),
              )
            );
          }
          var i = yield o(
            "WASmaxGroupsCreateSubGroupSuggestionRPC",
          ).sendCreateSubGroupSuggestionRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(t),
            suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs:
              {
                createSubGroupSuggestionSuggestionForExistingGroups: {
                  groupArgs: r.map(function (e) {
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
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
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
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "CreateSubGroupSuggestionResponseClientError" &&
              "value" in e
            ) {
              var n = e.value;
              return a(n.errorCreateSubGroupSuggestionErrors.value);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name ===
                "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess" &&
              "value" in e
            )
              return a({
                code: 500,
                text: "Received invalid new group success response for create existing group subgroup suggestion",
              });
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "CreateSubGroupSuggestionResponseServerError" &&
              "value" in e
            ) {
              var r = e.value;
              return a(r.errorServerErrors.value);
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(i);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.announce,
            r = e.description,
            a = e.memberAddMode,
            i = e.memberShareGroupHistoryMode,
            l = e.membershipApprovalMode,
            c = e.parentGroupId,
            d = e.restrict,
            m = e.subject;
          function p(e) {
            var t = e.code,
              r = e.text;
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createNewGroupSubgroupSuggestion failed: ",
                    ":",
                    "",
                  ])),
                t,
                r,
              ),
              (u || (u = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(t),
                  r,
                ),
              )
            );
          }
          var _ = yield o(
            "WASmaxGroupsCreateSubGroupSuggestionRPC",
          ).sendCreateSubGroupSuggestionRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(c),
            suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs:
              {
                createSubGroupSuggestionSuggestionForNewGroup: {
                  subjectElementValue: m,
                  hasAnnouncement: !t,
                  hasLocked: !d,
                  hasHiddenGroup: !1,
                  membershipApprovalModeArgs: {
                    membershipApprovalModesArgs:
                      l === !1
                        ? { isGroupJoinMembershipApprovalModeDisabled: !0 }
                        : { isGroupJoinMembershipApprovalModeEnabled: !0 },
                  },
                  groupMemberAddModeMixinArgs: {
                    memberAddModesArgs:
                      a === !1
                        ? { isAdminAddMode: !0 }
                        : { isAllMembersAddMode: !0 },
                  },
                  groupMemberShareGroupHistoryModeMixinArgs: {
                    memberShareGroupHistoryModesArgs:
                      i === !0
                        ? { isAllMembersShareMode: !0 }
                        : { isAdminShareMode: !0 },
                  },
                  descriptionArgs: r != null ? { bodyElementValue: r } : void 0,
                },
              },
          });
          switch (_.name) {
            case "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess": {
              var f,
                g =
                  (f = _.value.subGroupSuggestionDescription) != null && f.error
                    ? void 0
                    : r;
              return (
                o("WAWebCoreActionsODS").logGroupCreate(),
                {
                  id: o("WAWebWidFactory").createWid(
                    _.value.subGroupSuggestionJid,
                  ),
                  owner: o("WAWebWidFactory").createWid(
                    _.value.subGroupSuggestionCreator,
                  ),
                  t: _.value.subGroupSuggestionCreation,
                  parentGroupId: c,
                  subject: m,
                  desc: g,
                  isExistingGroup: !1,
                  participantCount: void 0,
                  hiddenSubgroup: void 0,
                }
              );
            }
            case "CreateSubGroupSuggestionResponseClientError": {
              var h = _.value.errorCreateSubGroupSuggestionErrors;
              return p(h.value);
            }
            case "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess":
              return p({
                code: 500,
                text: "Received invalid existing group success response for create new subgroup suggestion",
              });
            default:
              return (_.name, p(_.value.errorServerErrors.value));
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.createExistingGroupSubgroupSuggestion = c),
      (l.createNewGroupSubgroupSuggestion = m));
  },
  98,
);
