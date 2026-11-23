__d(
  "WAWebMexGroupPropertyUpdateNotificationHandler",
  [
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupReactionSettings",
    "WAWebGroupType",
    "WAWebHandleParsedGroupNotification",
    "WAWebSuspendAppealStatusType",
    "WAWebWidFactory",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a,
        i,
        l,
        u,
        d = n.xwa2_notify_group_on_prop_change,
        m = d.id,
        p = d.lid_migration_state,
        _ = d.properties,
        f = d.update_time,
        g = d.updated_by,
        h = g.id,
        y = g.notify_name,
        C = g.pn,
        b;
      switch (t.OperationName) {
        case "NotificationGroupPropertyUpdate": {
          _.allow_non_admin_sub_group_creation != null &&
            (b = {
              actionType:
                o("WAWebGroupType").GROUP_ACTIONS
                  .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
              value: _.allow_non_admin_sub_group_creation,
            });
          break;
        }
        case "NotificationGroupHiddenPropertyUpdate":
          b = {
            actionType: o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP,
            value: (a = _.hidden_group) != null ? a : !1,
          };
          break;
        case "NotificationGroupSafetyCheckPropertyUpdate":
          b = {
            actionType: o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
            value: (i = _.group_safety_check) != null ? i : !1,
          };
          break;
        case "NotificationGroupMemberLinkPropertyUpdate":
          b = {
            actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE,
            value: o("WAWebGroupMemberLinkMode").getMemberLinkModeFromMexType(
              _.member_link_mode,
            ),
          };
          break;
        case "NotificationGroupMemberShareGroupHistoryModePropertyUpdate":
          b = {
            actionType:
              o("WAWebGroupType").GROUP_ACTIONS.MEMBER_SHARE_GROUP_HISTORY_MODE,
            value: o(
              "WAWebGroupHistoryShareMode",
            ).getMemberShareGroupHistoryModeFromMexType(
              _.member_share_group_history_mode,
            ),
          };
          break;
        case "NotificationGroupCustomReactionsPropertyUpdate":
          if (!r("justknobx")._("7606") || !("group_custom_reactions" in _))
            return;
          b = {
            actionType:
              o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS,
            value: o(
              "WAWebGroupReactionSettings",
            ).getGroupReactionSettingsFromMex(
              (l = _.group_custom_reactions) == null
                ? void 0
                : l.default_reactions,
            ),
          };
          break;
        case "NotificationGroupMembershipFormPropertyUpdate": {
          var v;
          try {
            var S;
            v = c((S = _.membership_form) == null ? void 0 : S.questions);
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][group-prop-update] invalid membership form bytes",
                  ])),
              )
              .tags("mex")
              .catching(r("getErrorSafe")(t))
              .sendLogs("mex-group-property-update-notification-fail");
            return;
          }
          b = {
            actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM,
            membershipForm: v,
          };
          break;
        }
        case "NotificationGroupAppealStatusUpdate":
          b = {
            actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL,
            appealStatus: o(
              "WAWebSuspendAppealStatusType",
            ).toSuspendAppealStatus(_.appeal_status),
            appealUpdateTime: (u = _.appeal_update_time) != null ? u : null,
          };
          break;
      }
      if (b != null) {
        var R = {
          chatId: o("WAWebWidFactory").createWid(m),
          ts: o("WATimeUtils").castMilliSecondsToUnixTime(Number(f)),
          actions: [b],
          author: h != null ? o("WAWebWidFactory").createWid(h) : null,
          authorPhoneNumber:
            C != null ? o("WAWebWidFactory").createWid(C) : null,
          isLidAddressingMode:
            (p == null ? void 0 : p.addressing_mode) == null ||
            (p == null ? void 0 : p.addressing_mode) === "LID",
          pushname: y,
          externalId: t.stanzaId,
          offline: t.offline,
          hasIncompleteParticipantInformation: !1,
        };
        try {
          await o(
            "WAWebHandleParsedGroupNotification",
          ).handleParsedGroupNotification(R);
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][group-prop-update] update failed",
                ])),
            )
            .tags("mex")
            .sendLogs("mex-group-property-update-notification-fail");
        }
      }
    }
    function c(e) {
      return e == null || e === "" ? null : o("WABase64").decodeB64(e);
    }
    l.mexHandleGroupPropertyUpdate = u;
  },
  98,
);
