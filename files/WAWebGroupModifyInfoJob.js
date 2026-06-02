__d(
  "WAWebGroupModifyInfoJob",
  [
    "WASmaxGroupsSetDescriptionRPC",
    "WASmaxGroupsSetPropertyRPC",
    "WASmaxGroupsSetSubjectRPC",
    "WAWebBackendErrors",
    "WAWebEphemeralityUtils",
    "WAWebGroupConstants",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o("WASmaxGroupsSetSubjectRPC").sendSetSubjectRPC({
        iqTo: o("WAWebWidToJid").widToGroupJid(e),
        subjectElementValue: t,
      });
      e: {
        var r = n;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.name === "SetSubjectResponseSuccess"
        )
          return;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.name === "SetSubjectResponseClientError" &&
          ((typeof r.value == "object" && r.value !== null) ||
            typeof r.value == "function") &&
          ((typeof r.value.errorSetSubjectClientErrors == "object" &&
            r.value.errorSetSubjectClientErrors !== null) ||
            typeof r.value.errorSetSubjectClientErrors == "function") &&
          ((typeof r.value.errorSetSubjectClientErrors.value == "object" &&
            r.value.errorSetSubjectClientErrors.value !== null) ||
            typeof r.value.errorSetSubjectClientErrors.value == "function") &&
          "code" in r.value.errorSetSubjectClientErrors.value &&
          "text" in r.value.errorSetSubjectClientErrors.value
        ) {
          var a = r.value.errorSetSubjectClientErrors.value.code,
            i = r.value.errorSetSubjectClientErrors.value.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(a), i),
          );
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.name === "SetSubjectResponseServerError" &&
          ((typeof r.value == "object" && r.value !== null) ||
            typeof r.value == "function") &&
          ((typeof r.value.errorServerErrors == "object" &&
            r.value.errorServerErrors !== null) ||
            typeof r.value.errorServerErrors == "function") &&
          ((typeof r.value.errorServerErrors.value == "object" &&
            r.value.errorServerErrors.value !== null) ||
            typeof r.value.errorServerErrors.value == "function") &&
          "code" in r.value.errorServerErrors.value &&
          "text" in r.value.errorServerErrors.value
        ) {
          var l = r.value.errorServerErrors.value.code,
            s = r.value.errorServerErrors.value.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(l), s),
          );
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    async function s(e, t, n, r) {
      var a =
        t != null
          ? await o("WASmaxGroupsSetDescriptionRPC").sendSetDescriptionRPC({
              bodyArgs: { bodyElementValue: t },
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
              descriptionId: n,
              descriptionPrev: r,
              hasDescriptionDeleteTrue: !1,
            })
          : await o("WASmaxGroupsSetDescriptionRPC").sendSetDescriptionRPC({
              bodyArgs: void 0,
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
              descriptionId: n,
              descriptionPrev: r,
              hasDescriptionDeleteTrue: !0,
            });
      switch (a.name) {
        case "SetDescriptionResponseSuccess":
          return;
        case "SetDescriptionResponseClientError": {
          var i = a.value.errorSetDescriptionClientErrors.value,
            l = i.code,
            s = i.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(l), s),
          );
        }
        case "SetDescriptionResponseServerError": {
          var u = a.value.errorServerErrors.value,
            c = u.code,
            d = u.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(c), d),
          );
        }
      }
    }
    function u(e, t, n) {
      var a = {
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
        iqTo: o("WAWebWidToJid").widToGroupJid(e),
      };
      switch (t) {
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT:
          a = babelHelpers.extends({}, a, {
            hasAnnouncement: n === 1,
            hasNotAnnouncement: n !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT:
          a = babelHelpers.extends({}, a, {
            hasLocked: n === 1,
            hasUnlocked: n !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .NO_FREQUENTLY_FORWARDED:
          a = babelHelpers.extends({}, a, {
            hasNoFrequentlyForwarded: n === 1,
            hasFrequentlyForwardedOk: n !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL:
          a = babelHelpers.extends({}, a, {
            ephemeralArgs: n > 0 ? { ephemeralExpiration: n } : null,
            hasNotEphemeral: n <= 0,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .MEMBERSHIP_APPROVAL_MODE:
          a = babelHelpers.extends({}, a, {
            membershipApprovalModeArgs: {
              membershipApprovalModesArgs:
                n === 1
                  ? { isGroupJoinMembershipApprovalModeEnabled: !0 }
                  : { isGroupJoinMembershipApprovalModeDisabled: !0 },
            },
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
          a = babelHelpers.extends({}, a, {
            hasAllowAdminReports: n === 1,
            hasNotAllowAdminReports: n !== 1,
          });
          break;
        case o("WAWebGroupConstants").GROUP_SETTING_TYPE
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          a = babelHelpers.extends({}, a, {
            hasAllowNonAdminSubGroupCreation: n === 1,
            hasNotAllowNonAdminSubGroupCreation: n !== 1,
          });
          break;
        default:
          return Promise.reject(r("err")("invalid group property " + t));
      }
      return o("WASmaxGroupsSetPropertyRPC").sendSetPropertyRPC(a);
    }
    async function c(e) {
      var t = e.ephemeralExpiration,
        n = e.groupWid,
        r = e.trigger,
        a = {
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
          iqTo: o("WAWebWidToJid").widToGroupJid(n),
        },
        i = o("WAWebEphemeralityUtils").getGroupEphemeralTrigger(r);
      return (
        r != null
          ? (a = babelHelpers.extends({}, a, {
              ephemeralArgs:
                t > 0 ? { ephemeralExpiration: t, ephemeralTrigger: i } : null,
              hasNotEphemeral: t <= 0,
            }))
          : (a = babelHelpers.extends({}, a, {
              ephemeralArgs: t > 0 ? { ephemeralExpiration: t } : null,
              hasNotEphemeral: t <= 0,
            })),
        o("WASmaxGroupsSetPropertyRPC").sendSetPropertyRPC(a)
      );
    }
    ((l.setGroupSubject = e),
      (l.setGroupDescription = s),
      (l.setGroupProperty = u),
      (l.setEphemeralGroupProperty = c));
  },
  98,
);
