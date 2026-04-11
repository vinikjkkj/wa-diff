__d(
  "WAWebGroupModifyInfoJob",
  [
    "Promise",
    "WASmaxGroupsSetDescriptionRPC",
    "WASmaxGroupsSetPropertyRPC",
    "WASmaxGroupsSetSubjectRPC",
    "WAWebBackendErrors",
    "WAWebEphemeralityUtils",
    "WAWebGroupConstants",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield o("WASmaxGroupsSetSubjectRPC").sendSetSubjectRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(t),
            subjectElementValue: r,
          });
          e: {
            var i = a;
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.name === "SetSubjectResponseSuccess"
            )
              return;
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.name === "SetSubjectResponseClientError" &&
              ((typeof i.value == "object" && i.value !== null) ||
                typeof i.value == "function") &&
              ((typeof i.value.errorSetSubjectClientErrors == "object" &&
                i.value.errorSetSubjectClientErrors !== null) ||
                typeof i.value.errorSetSubjectClientErrors == "function") &&
              ((typeof i.value.errorSetSubjectClientErrors.value == "object" &&
                i.value.errorSetSubjectClientErrors.value !== null) ||
                typeof i.value.errorSetSubjectClientErrors.value ==
                  "function") &&
              "code" in i.value.errorSetSubjectClientErrors.value &&
              "text" in i.value.errorSetSubjectClientErrors.value
            ) {
              var l = i.value.errorSetSubjectClientErrors.value.code,
                s = i.value.errorSetSubjectClientErrors.value.text;
              return (e || (e = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(l),
                  s,
                ),
              );
            }
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.name === "SetSubjectResponseServerError" &&
              ((typeof i.value == "object" && i.value !== null) ||
                typeof i.value == "function") &&
              ((typeof i.value.errorServerErrors == "object" &&
                i.value.errorServerErrors !== null) ||
                typeof i.value.errorServerErrors == "function") &&
              ((typeof i.value.errorServerErrors.value == "object" &&
                i.value.errorServerErrors.value !== null) ||
                typeof i.value.errorServerErrors.value == "function") &&
              "code" in i.value.errorServerErrors.value &&
              "text" in i.value.errorServerErrors.value
            ) {
              var u = i.value.errorServerErrors.value.code,
                c = i.value.errorServerErrors.value.text;
              return (e || (e = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(u),
                  c,
                ),
              );
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                i,
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l =
              r != null
                ? yield o(
                    "WASmaxGroupsSetDescriptionRPC",
                  ).sendSetDescriptionRPC({
                    bodyArgs: { bodyElementValue: r },
                    iqTo: o("WAWebWidToJid").widToGroupJid(t),
                    descriptionId: a,
                    descriptionPrev: i,
                    hasDescriptionDeleteTrue: !1,
                  })
                : yield o(
                    "WASmaxGroupsSetDescriptionRPC",
                  ).sendSetDescriptionRPC({
                    bodyArgs: void 0,
                    iqTo: o("WAWebWidToJid").widToGroupJid(t),
                    descriptionId: a,
                    descriptionPrev: i,
                    hasDescriptionDeleteTrue: !0,
                  });
            switch (l.name) {
              case "SetDescriptionResponseSuccess":
                return;
              case "SetDescriptionResponseClientError": {
                var s = l.value.errorSetDescriptionClientErrors.value,
                  u = s.code,
                  c = s.text;
                return (e || (e = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(u),
                    c,
                  ),
                );
              }
              case "SetDescriptionResponseServerError": {
                var d = l.value.errorServerErrors.value,
                  m = d.code,
                  p = d.text;
                return (e || (e = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(m),
                    p,
                  ),
                );
              }
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(t, a, i) {
      var l = {
        hasLocked: !1,
        hasAnnouncement: !1,
        hasNoFrequentlyForwarded: !1,
        ephemeralArgs: null,
        hasUnlocked: !1,
        hasNotAnnouncement: !1,
        hasFrequentlyForwardedOk: !1,
        hasNotEphemeral: !1,
        membershipApprovalModeArgs: null,
        hasAllowAdminReports: !1,
        hasNotAllowAdminReports: !1,
        hasAllowNonAdminSubGroupCreation: !1,
        hasNotAllowNonAdminSubGroupCreation: !1,
        hasGroupHistory: !1,
        hasNoGroupHistory: !1,
        iqTo: o("WAWebWidToJid").widToGroupJid(t),
      };
      switch (a) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT:
          l = babelHelpers.extends({}, l, {
            hasAnnouncement: i === 1,
            hasNotAnnouncement: i !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT:
          l = babelHelpers.extends({}, l, {
            hasLocked: i === 1,
            hasUnlocked: i !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .NO_FREQUENTLY_FORWARDED:
          l = babelHelpers.extends({}, l, {
            hasNoFrequentlyForwarded: i === 1,
            hasFrequentlyForwardedOk: i !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL:
          l = babelHelpers.extends({}, l, {
            ephemeralArgs: i > 0 ? { ephemeralExpiration: i } : null,
            hasNotEphemeral: i <= 0,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .MEMBERSHIP_APPROVAL_MODE:
          l = babelHelpers.extends({}, l, {
            membershipApprovalModeArgs: {
              membershipApprovalModesArgs:
                i === 1
                  ? { isGroupJoinMembershipApprovalModeEnabled: !0 }
                  : { isGroupJoinMembershipApprovalModeDisabled: !0 },
            },
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
          l = babelHelpers.extends({}, l, {
            hasAllowAdminReports: i === 1,
            hasNotAllowAdminReports: i !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          l = babelHelpers.extends({}, l, {
            hasAllowNonAdminSubGroupCreation: i === 1,
            hasNotAllowNonAdminSubGroupCreation: i !== 1,
          });
          break;
        default:
          return (e || (e = n("Promise"))).reject(
            r("err")("invalid group property " + a),
          );
      }
      return o("WASmaxGroupsSetPropertyRPC").sendSetPropertyRPC(l);
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = {
              hasLocked: !1,
              hasAnnouncement: !1,
              hasNoFrequentlyForwarded: !1,
              ephemeralArgs: null,
              hasUnlocked: !1,
              hasNotAnnouncement: !1,
              hasFrequentlyForwardedOk: !1,
              hasNotEphemeral: !0,
              membershipApprovalModeArgs: null,
              hasAllowAdminReports: !1,
              hasNotAllowAdminReports: !1,
              hasAllowNonAdminSubGroupCreation: !1,
              hasNotAllowNonAdminSubGroupCreation: !1,
              hasGroupHistory: !1,
              hasNoGroupHistory: !1,
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
            },
            a = o("WAWebEphemeralityUtils").getGroupEphemeralTrigger(n);
          return (
            n != null
              ? (r = babelHelpers.extends({}, r, {
                  ephemeralArgs:
                    t > 0
                      ? { ephemeralExpiration: t, ephemeralTrigger: a }
                      : null,
                  hasNotEphemeral: t <= 0,
                }))
              : (r = babelHelpers.extends({}, r, {
                  ephemeralArgs: t > 0 ? { ephemeralExpiration: t } : null,
                  hasNotEphemeral: t <= 0,
                })),
            o("WASmaxGroupsSetPropertyRPC").sendSetPropertyRPC(r)
          );
        })),
        _.apply(this, arguments)
      );
    }
    ((l.setGroupSubject = s),
      (l.setGroupDescription = c),
      (l.setGroupProperty = m),
      (l.setEphemeralGroupProperty = p));
  },
  98,
);
