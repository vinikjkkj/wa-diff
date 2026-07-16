__d(
  "WAWebMexGroupPropertyUpdateNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupGatingUtils",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupType",
    "WAWebHandleParsedGroupNotification",
    "WAWebSuspendAppealStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a,
            i,
            l = n.xwa2_notify_group_on_prop_change,
            s = l.id,
            u = l.lid_migration_state,
            c = l.properties,
            d = l.update_time,
            m = l.updated_by,
            p = m.id,
            _ = m.notify_name,
            f = m.pn,
            g;
          switch (t.OperationName) {
            case "NotificationGroupPropertyUpdate": {
              c.allow_non_admin_sub_group_creation != null &&
                (g = {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS
                      .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                  value: c.allow_non_admin_sub_group_creation,
                });
              break;
            }
            case "NotificationGroupHiddenPropertyUpdate":
              g = {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP,
                value: (r = c.hidden_group) != null ? r : !1,
              };
              break;
            case "NotificationGroupSafetyCheckPropertyUpdate":
              g = {
                actionType:
                  o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
                value: (a = c.group_safety_check) != null ? a : !1,
              };
              break;
            case "NotificationGroupMemberLinkPropertyUpdate":
              o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
                (g = {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE,
                  value: o(
                    "WAWebGroupMemberLinkMode",
                  ).getMemberLinkModeFromMexType(c.member_link_mode),
                });
              break;
            case "NotificationGroupMemberShareGroupHistoryModePropertyUpdate":
              g = {
                actionType:
                  o("WAWebGroupType").GROUP_ACTIONS
                    .MEMBER_SHARE_GROUP_HISTORY_MODE,
                value: o(
                  "WAWebGroupHistoryShareMode",
                ).getMemberShareGroupHistoryModeFromMexType(
                  c.member_share_group_history_mode,
                ),
              };
              break;
            case "NotificationGroupAppealStatusUpdate":
              g = {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL,
                appealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(c.appeal_status),
                appealUpdateTime: (i = c.appeal_update_time) != null ? i : null,
              };
              break;
          }
          if (g != null) {
            var h = {
              chatId: o("WAWebWidFactory").createWid(s),
              ts: o("WATimeUtils").castMilliSecondsToUnixTime(Number(d)),
              actions: [g],
              author: p != null ? o("WAWebWidFactory").createWid(p) : null,
              authorPhoneNumber:
                f != null ? o("WAWebWidFactory").createWid(f) : null,
              isLidAddressingMode:
                (u == null ? void 0 : u.addressing_mode) === "LID",
              pushname: _,
              externalId: t.stanzaId,
              offline: t.offline,
              hasIncompleteParticipantInformation: !1,
            };
            try {
              yield o(
                "WAWebHandleParsedGroupNotification",
              ).handleParsedGroupNotification(h);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][group-prop-update] update failed",
                    ])),
                )
                .tags("mex")
                .sendLogs("mex-group-property-update-notification-fail");
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.mexHandleGroupPropertyUpdate = s;
  },
  98,
);
