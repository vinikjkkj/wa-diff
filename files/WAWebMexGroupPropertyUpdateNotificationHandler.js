__d(
  "WAWebMexGroupPropertyUpdateNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupGatingUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupType",
    "WAWebHandleGroupNotification",
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
            i = n.xwa2_notify_group_on_prop_change,
            l = i.id,
            s = i.lid_migration_state,
            u = i.properties,
            c = i.update_time,
            d = i.updated_by,
            m = d.id,
            p = d.notify_name,
            _ = d.pn,
            f;
          switch (t.OperationName) {
            case "NotificationGroupPropertyUpdate": {
              u.allow_non_admin_sub_group_creation != null &&
                (f = {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS
                      .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                  value: u.allow_non_admin_sub_group_creation,
                });
              break;
            }
            case "NotificationGroupHiddenPropertyUpdate":
              f = {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP,
                value: (r = u.hidden_group) != null ? r : !1,
              };
              break;
            case "NotificationGroupSafetyCheckPropertyUpdate":
              f = {
                actionType:
                  o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
                value: (a = u.group_safety_check) != null ? a : !1,
              };
              break;
            case "NotificationGroupMemberLinkPropertyUpdate":
              o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
                (f = {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE,
                  value: o(
                    "WAWebGroupMemberLinkMode",
                  ).getMemberLinkModeFromMexType(u.member_link_mode),
                });
              break;
            case "NotificationGroupMemberShareGroupHistoryModePropertyUpdate":
              o("WAWebGroupHistoryGating").isGroupHistorySettingsEnabled() &&
                (f = {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS
                      .MEMBER_SHARE_GROUP_HISTORY_MODE,
                  value: o(
                    "WAWebGroupHistoryShareMode",
                  ).getMemberShareGroupHistoryModeFromMexType(
                    u.member_share_group_history_mode,
                  ),
                });
              break;
          }
          if (f != null) {
            var g = {
              chatId: o("WAWebWidFactory").createWid(l),
              ts: o("WATimeUtils").castMilliSecondsToUnixTime(Number(c)),
              actions: [f],
              author: m != null ? o("WAWebWidFactory").createWid(m) : null,
              authorPhoneNumber:
                _ != null ? o("WAWebWidFactory").createWid(_) : null,
              isLidAddressingMode:
                (s == null ? void 0 : s.addressing_mode) === "LID",
              pushname: p,
              externalId: t.stanzaId,
              offline: t.offline,
              hasIncompleteParticipantInformation: !1,
            };
            try {
              yield o(
                "WAWebHandleGroupNotification",
              ).handleParsedGroupNotification(g);
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
