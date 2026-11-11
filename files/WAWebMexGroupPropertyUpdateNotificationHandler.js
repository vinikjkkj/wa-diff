__d(
  "WAWebMexGroupPropertyUpdateNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupReactionSettings",
    "WAWebGroupType",
    "WAWebHandleParsedGroupNotification",
    "WAWebSuspendAppealStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i,
            l,
            s,
            u = n.xwa2_notify_group_on_prop_change,
            c = u.id,
            d = u.lid_migration_state,
            m = u.properties,
            p = u.update_time,
            _ = u.updated_by,
            f = _.id,
            g = _.notify_name,
            h = _.pn,
            y;
          switch (t.OperationName) {
            case "NotificationGroupPropertyUpdate": {
              m.allow_non_admin_sub_group_creation != null &&
                (y = {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS
                      .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                  value: m.allow_non_admin_sub_group_creation,
                });
              break;
            }
            case "NotificationGroupHiddenPropertyUpdate":
              y = {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP,
                value: (a = m.hidden_group) != null ? a : !1,
              };
              break;
            case "NotificationGroupSafetyCheckPropertyUpdate":
              y = {
                actionType:
                  o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
                value: (i = m.group_safety_check) != null ? i : !1,
              };
              break;
            case "NotificationGroupMemberLinkPropertyUpdate":
              y = {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE,
                value: o(
                  "WAWebGroupMemberLinkMode",
                ).getMemberLinkModeFromMexType(m.member_link_mode),
              };
              break;
            case "NotificationGroupMemberShareGroupHistoryModePropertyUpdate":
              y = {
                actionType:
                  o("WAWebGroupType").GROUP_ACTIONS
                    .MEMBER_SHARE_GROUP_HISTORY_MODE,
                value: o(
                  "WAWebGroupHistoryShareMode",
                ).getMemberShareGroupHistoryModeFromMexType(
                  m.member_share_group_history_mode,
                ),
              };
              break;
            case "NotificationGroupCustomReactionsPropertyUpdate":
              if (!r("justknobx")._("7606") || !("group_custom_reactions" in m))
                return;
              y = {
                actionType:
                  o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS,
                value: o(
                  "WAWebGroupReactionSettings",
                ).getGroupReactionSettingsFromMex(
                  (l = m.group_custom_reactions) == null
                    ? void 0
                    : l.default_reactions,
                ),
              };
              break;
            case "NotificationGroupAppealStatusUpdate":
              y = {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL,
                appealStatus: o(
                  "WAWebSuspendAppealStatusType",
                ).toSuspendAppealStatus(m.appeal_status),
                appealUpdateTime: (s = m.appeal_update_time) != null ? s : null,
              };
              break;
          }
          if (y != null) {
            var C = {
              chatId: o("WAWebWidFactory").createWid(c),
              ts: o("WATimeUtils").castMilliSecondsToUnixTime(Number(p)),
              actions: [y],
              author: f != null ? o("WAWebWidFactory").createWid(f) : null,
              authorPhoneNumber:
                h != null ? o("WAWebWidFactory").createWid(h) : null,
              isLidAddressingMode:
                (d == null ? void 0 : d.addressing_mode) == null ||
                (d == null ? void 0 : d.addressing_mode) === "LID",
              pushname: g,
              externalId: t.stanzaId,
              offline: t.offline,
              hasIncompleteParticipantInformation: !1,
            };
            try {
              yield o(
                "WAWebHandleParsedGroupNotification",
              ).handleParsedGroupNotification(C);
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
