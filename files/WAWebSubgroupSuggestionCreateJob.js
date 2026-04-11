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
    function m(e, t, n, r, o, a, i, l) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i, l, c, d) {
            function m(e) {
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
            var p = yield o(
              "WASmaxGroupsCreateSubGroupSuggestionRPC",
            ).sendCreateSubGroupSuggestionRPC({
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
              suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs:
                {
                  createSubGroupSuggestionSuggestionForNewGroup: {
                    subjectElementValue: t,
                    hasAnnouncement: !i,
                    hasLocked: !a,
                    hasHiddenGroup: !1,
                    membershipApprovalModeArgs: {
                      membershipApprovalModesArgs:
                        l === !1
                          ? { isGroupJoinMembershipApprovalModeDisabled: !0 }
                          : { isGroupJoinMembershipApprovalModeEnabled: !0 },
                    },
                    groupMemberAddModeMixinArgs: {
                      memberAddModesArgs:
                        c === !1
                          ? { isAdminAddMode: !0 }
                          : { isAllMembersAddMode: !0 },
                    },
                    groupMemberShareGroupHistoryModeMixinArgs: {
                      memberShareGroupHistoryModesArgs:
                        d === !0
                          ? { isAllMembersShareMode: !0 }
                          : { isAdminShareMode: !0 },
                    },
                    descriptionArgs:
                      r != null ? { bodyElementValue: r } : void 0,
                  },
                },
            });
            switch (p.name) {
              case "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess": {
                var _,
                  f =
                    (_ = p.value.subGroupSuggestionDescription) != null &&
                    _.error
                      ? void 0
                      : r;
                return (
                  o("WAWebCoreActionsODS").logGroupCreate(),
                  {
                    id: o("WAWebWidFactory").createWid(
                      p.value.subGroupSuggestionJid,
                    ),
                    owner: o("WAWebWidFactory").createWid(
                      p.value.subGroupSuggestionCreator,
                    ),
                    t: p.value.subGroupSuggestionCreation,
                    parentGroupId: e,
                    subject: t,
                    desc: f,
                    isExistingGroup: !1,
                    participantCount: void 0,
                    hiddenSubgroup: void 0,
                  }
                );
              }
              case "CreateSubGroupSuggestionResponseClientError": {
                var g = p.value.errorCreateSubGroupSuggestionErrors;
                return m(g.value);
              }
              case "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess":
                return m({
                  code: 500,
                  text: "Received invalid existing group success response for create new subgroup suggestion",
                });
              default:
                return (p.name, m(p.value.errorServerErrors.value));
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.createExistingGroupSubgroupSuggestion = c),
      (l.createNewGroupSubgroupSuggestion = m));
  },
  98,
);
