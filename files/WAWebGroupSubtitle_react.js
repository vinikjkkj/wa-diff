__d(
  "WAWebGroupSubtitle.react",
  [
    "fbt",
    "WAChatState",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebChatAssignmentLogEvents",
    "WAWebChatCollection",
    "WAWebChatSubtitleText",
    "WAWebCurrentUser",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebGroupQueryJob",
    "WAWebGroupType",
    "WAWebParticipantsList.react",
    "WAWebPresenceEnum",
    "WAWebTypingIndicatorGatingUtils",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d.useEffect;
    function _(t) {
      var n = t.assignmentSubtitle,
        a = t.chatId,
        i = t.chatstate,
        l = t.groupMetadata,
        d = t.location,
        _ = t.placeholder,
        f = t.presence;
      o("useWAWebModelValues").useModelValues(i, ["id", "type", "deny", "t"]);
      var g = o("useWAWebModelValues").useModelValues(l, [
          "announce",
          "participants",
          "groupType",
          "size",
          "id",
          "hasCapi",
          "isCag",
          "isOpenBotGroup",
        ]),
        h = o("useWAWebModelValues").useModelValues(f, [
          "forceDisplay",
          "withholdDisplayStage",
        ]),
        y = function () {
          return (
            g.groupType ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
            g.participants.iAmMember() &&
            !g.participants.iAmAdmin()
          );
        };
      (p(function () {
        y() &&
          g.isCag &&
          g.id.isGroup() &&
          !g.size &&
          o("WAWebGroupQueryJob")
            .queryAndUpdateGroupMetadataById({ id: g.id })
            .catch(function (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[CAG][Group Subtitle]",
                    ])),
                )
                .catching(t),
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[CAG][Group Subtitle] Failed to query group metadata for CAG",
                      ])),
                  )
                  .sendLogs("failed-to-query-group-metadata-for-cag"),
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[CAG] Failed to query group metadata ",
                        " isCAG=",
                        " isGroup=",
                        "",
                      ])),
                    g.id.toString(),
                    g.isCag,
                    g.id.isGroup(),
                  ));
            });
      }, []),
        p(
          function () {
            n != null &&
              h.withholdDisplayStage ===
                o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment &&
              o("WAWebChatAssignmentLogEvents").logChatStatusTickerShown(a);
          },
          [a, h.withholdDisplayStage, n],
        ));
      var C = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(
          o("WAWebChatCollection").ChatCollection.get(a),
        ),
        b = function () {
          if (
            g.groupType ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          )
            return { text: s._(/*BTDS*/ "Announcements") };
          var e =
            (i.type === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING ||
              i.type ===
                o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO) &&
            o(
              "WAWebTypingIndicatorGatingUtils",
            ).isTypingIndicatorMessageBubbleEnabled(a);
          return e === !0
            ? null
            : h.getGroupSubtitleText({ elevatedPushNamesEnabled: C });
        },
        v,
        S,
        R = !1;
      if (
        h.withholdDisplayStage ===
        o("WAWebPresenceEnum").WithholdDisplayStage.CommunityName
      ) {
        var L,
          E = o("WAWebChatCollection").ChatCollection.get(a),
          k =
            E == null || (L = E.groupMetadata) == null
              ? void 0
              : L.getParentGroupChat(),
          I = k == null ? void 0 : k.contact,
          T =
            I != null
              ? o("WAWebFrontendContactGetters").getFormattedName(I)
              : null;
        v = s._(/*BTDS*/ "{community}", [s._param("community", T)]);
      } else if (
        h.withholdDisplayStage ===
        o("WAWebPresenceEnum").WithholdDisplayStage.OnlyAdminsCanSend
      )
        v = s._(/*BTDS*/ "Only admins can send messages");
      else if (g.hasCapi === !0) v = n;
      else if (
        h.withholdDisplayStage ===
        o("WAWebPresenceEnum").WithholdDisplayStage.E2EE
      )
        ((v = o("WAWebChatSubtitleText").e2eChatSubtitleText()), (R = !0));
      else if (
        h.withholdDisplayStage ===
        o("WAWebPresenceEnum").WithholdDisplayStage.Info
      )
        v = _;
      else if (
        n != null &&
        h.withholdDisplayStage ===
          o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment
      )
        v = n;
      else {
        var D = b();
        D != null && ((v = D.text), (S = D.ariaLabel));
      }
      return (
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
          g.isOpenBotGroup === !0 &&
          ((R = !1), (v = void 0)),
        m.jsx(r("WAWebParticipantsList.react"), {
          groupMetadata: g,
          overridingText: v,
          placeholder: _,
          ariaLabel: S,
          location: d,
          showLockIcon: R,
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
