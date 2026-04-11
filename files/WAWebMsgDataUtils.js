__d(
  "WAWebMsgDataUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBizGatingUtils",
    "WAWebBotTypes",
    "WAWebChatGetters",
    "WAWebCommonMsgUtils",
    "WAWebCurrentUser",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.type,
        n = e.subtype,
        a;
      return (
        t === o("WAWebMsgType").MSG_TYPE.GP2
          ? n === "subject"
            ? (a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY)
            : n === "add" ||
                n === "invite" ||
                n === "invite_auto_add" ||
                n === "linked_group_join" ||
                n === "community_invite_auto_add_rich"
              ? e.recipients &&
                o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0])
                ? (a = o("WAWebCommonMsgUtils").EventType.SIGNIFICANT)
                : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
              : n === "community_owner_update"
                ? e.recipients &&
                  o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0])
                  ? (a = o("WAWebCommonMsgUtils").EventType.DEFAULT)
                  : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
                : n === "linked_group_promote" || n === "linked_group_demote"
                  ? r("WAWebWid").isGroup(e.id.remote) &&
                    e.recipients &&
                    o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0]) &&
                    !o("WAWebUserPrefsMeUser").isMeAccount(e.author)
                    ? (a = o("WAWebCommonMsgUtils").EventType.SIGNIFICANT)
                    : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
                  : n === "remove"
                    ? e.recipients &&
                      o("WAWebUserPrefsMeUser").isMePrimary(e.recipients[0])
                      ? (a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY)
                      : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
                    : n === "create" ||
                        n === "empty_subgroup_create" ||
                        n === "general_chat_add"
                      ? (a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY)
                      : n === "created_subgroup_suggestion"
                        ? (a = o("WAWebCommonMsgUtils").EventType.DEFAULT)
                        : n === "parent_group_link" ||
                            n === "auto_add" ||
                            n === "default_sub_group_admin_add" ||
                            n === "community_participant_add_rich" ||
                            n === "subgroup_admin_triggered_auto_add" ||
                            n === "subgroup_admin_triggered_invite_auto_add" ||
                            n === "sibling_group_link" ||
                            n === "community_invite_rich" ||
                            n === "sub_group_participant_add_rich" ||
                            n === "sub_group_invite_rich" ||
                            n === "community_link_parent_group_rich"
                          ? (a = o("WAWebCommonMsgUtils").EventType.SIGNIFICANT)
                          : n === "membership_approval_request" ||
                              n === "created_membership_requests" ||
                              n === "sibling_group_unlink"
                            ? (a = o("WAWebCommonMsgUtils").EventType
                                .NOTEWORTHY)
                            : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
          : t === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION ||
              t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION ||
              t === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
            ? n === "create"
              ? (a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY)
              : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
            : t === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
                o("WAWebUserPrefsMeUser").isMePrimary(e.from)
              ? (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
              : t === o("WAWebMsgType").MSG_TYPE.CALL_LOG
                ? (a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY)
                : e.broadcast === !0
                  ? r("WAWebWid").isBroadcast(e.id.remote)
                    ? (a = o("WAWebCommonMsgUtils").EventType.NOTEWORTHY)
                    : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
                  : o("WAWebMsgGetters").getIsGroupStatus(e) ||
                      o("WAWebMsgGetters").getIsNewsletterStatus(e) ||
                      t === o("WAWebMsgType").MSG_TYPE.REVOKED
                    ? (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
                    : r("WAWebWid").isPSA(e.id.remote)
                      ? (a =
                          e.ack === o("WAWebAck").ACK.RECEIVED
                            ? o("WAWebCommonMsgUtils").EventType.DEFAULT
                            : o("WAWebCommonMsgUtils").EventType.AMBIENT)
                      : t === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                          t === o("WAWebMsgType").MSG_TYPE.OVERSIZED
                        ? (a = o("WAWebCommonMsgUtils").EventType.AMBIENT)
                        : t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE
                          ? n === "sender_invite" ||
                            ((n === "chat_assignment" ||
                              n === "chat_assignment_unassign") &&
                              o(
                                "WAWebBizGatingUtils",
                              ).shouldReorderChatOnAssignment(
                                n === "chat_assignment_unassign",
                              ))
                            ? (a = o("WAWebCommonMsgUtils").EventType
                                .NOTEWORTHY)
                            : (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
                          : (t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                                n === "ephemeral_setting") ||
                              t === o("WAWebMsgType").MSG_TYPE.REACTION
                            ? (a = o("WAWebCommonMsgUtils").EventType.IGNORE)
                            : (a = o("WAWebCommonMsgUtils").EventType.DEFAULT),
        a
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i = t.id,
            l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            u = t.id.isLid() ? s : l,
            c = void 0;
          if (o("WAWebChatGetters").getIsGroup(t)) {
            var d;
            if (
              ((u =
                ((d = t.groupMetadata) == null
                  ? void 0
                  : d.isLidAddressingMode) === !0
                  ? s
                  : l),
              (c = o("WAWebWidFactory").asUserWidOrThrow(u)),
              o("WAWebCurrentUser").isEmployee())
            ) {
              var m;
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "genOutgoingMsgData: generating key for group ",
                    ", has metadata: ",
                    ",\n          isLidAddressingMode: ",
                    ", participant: ",
                    "",
                  ])),
                i.toString(),
                t.groupMetadata != null,
                (m = t.groupMetadata) == null ? void 0 : m.isLidAddressingMode,
                c,
              );
            }
          } else t.id.isStatus() && (c = l);
          var p = new (r("WAWebMsgKey"))({
              from: u,
              to: i,
              id: yield r("WAWebMsgKey").newId(),
              participant: c,
              selfDir: "out",
            }),
            _ =
              (a = t.contact.businessProfile) == null
                ? void 0
                : a.automatedType,
            f;
          return (
            _ &&
              (f =
                _ === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P
                  ? o("WAWebBotTypes").BizBotType.BIZ_1P
                  : _ === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P
                    ? o("WAWebBotTypes").BizBotType.BIZ_3P
                    : _ === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN
                      ? null
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              _,
                          );
                        })()),
            {
              id: p,
              from: u,
              to: i,
              type: n,
              t: o("WATimeUtils").unixTime(),
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              bizBotType: f,
            }
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.eventTypeFromMsgType = s), (l.genOutgoingMsgData = u));
  },
  98,
);
