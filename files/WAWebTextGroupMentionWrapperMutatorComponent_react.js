__d(
  "WAWebTextGroupMentionWrapperMutatorComponent.react",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataContext",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useContext;
    function m(t) {
      var n,
        a,
        i,
        l = d(r("WAWebGroupMetadataContext")),
        u = function () {
          var n = t.fromChatWid;
          n &&
            new (o(
              "WAWebCommunityGroupJourneyEventImpl",
            ).CommunityGroupJourneyEvent)({
              action: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.SUBGROUP_MENTION_CLICK,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
              chat: o("WAWebChatCollection").ChatCollection.get(n),
            }).commit();
          var a = r("WAWebUnjoinedSubgroupMetadataCollection").get(t.groupJid);
          if (a) {
            o("WAWebCmd").Cmd.openCommunitySubgroupJoinModal(
              a,
              "group_mention",
            );
            return;
          }
          var i = r("WAWebGroupMetadataCollection").get(t.groupJid);
          i
            ? o("WAWebFindChatAction")
                .findOrCreateLatestChat(i.id, "groupMentionWrapper")
                .then(function (e) {
                  var n = e.chat;
                  o("WAWebCmd")
                    .Cmd.openChatBottom({
                      chat: n,
                      chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                        .Mention,
                    })
                    .then(function (e) {
                      e &&
                        new (o(
                          "WAWebCommunityGroupJourneyEventImpl",
                        ).CommunityGroupJourneyEvent)({
                          action: o("WAWebWamEnumChatFilterActionTypes")
                            .CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
                          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                            .CHAT,
                          chat: o("WAWebChatCollection").ChatCollection.get(
                            t.groupJid,
                          ),
                        }).commit();
                    });
                })
                .catch(function (t) {
                  return o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[groupMention] findChat failed, gmd exists",
                      ])),
                  );
                })
            : o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "No local model found for given group mention JID",
                  ])),
              );
        },
        m = (n = (a = t.theme) == null ? void 0 : a.quoted) != null ? n : !1,
        p = r("WAWebGroupMetadataCollection").get(
          (i = l == null ? void 0 : l.parentGroup) != null ? i : "",
        ),
        _ =
          p != null
            ? p.joinedSubgroups.some(function (e) {
                return e.toString() === t.groupJid;
              }) ||
              p.unjoinedSubgroups.some(function (e) {
                return e.toString() === t.groupJid;
              })
            : !1,
        f = t.clickable === !0 && _ === !0 && m === !1,
        g = f ? u : void 0;
      return c.jsx(r("WAWebMentionMutatorComponentBase.react"), {
        text: t.groupSubject,
        jid: t.groupJid,
        theme: t.theme,
        selectable: t.selectable,
        lastMessage: t.lastMessage,
        onClick: g,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
