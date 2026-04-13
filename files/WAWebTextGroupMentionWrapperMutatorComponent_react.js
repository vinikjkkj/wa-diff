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
    "react-compiler-runtime",
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
        l = o("react-compiler-runtime").c(9),
        s = d(r("WAWebGroupMetadataContext")),
        u;
      l[0] !== t
        ? ((u = function () {
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
            var a = r("WAWebUnjoinedSubgroupMetadataCollection").get(
              t.groupJid,
            );
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
                  .catch(p)
              : o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "No local model found for given group mention JID",
                    ])),
                );
          }),
          (l[0] = t),
          (l[1] = u))
        : (u = l[1]);
      var m = u,
        _ = (n = (a = t.theme) == null ? void 0 : a.quoted) != null ? n : !1,
        f = r("WAWebGroupMetadataCollection").get(
          (i = s == null ? void 0 : s.parentGroup) != null ? i : "",
        ),
        g =
          f != null
            ? f.joinedSubgroups.some(function (e) {
                return e.toString() === t.groupJid;
              }) ||
              f.unjoinedSubgroups.some(function (e) {
                return e.toString() === t.groupJid;
              })
            : !1,
        h = t.clickable === !0 && g === !0 && _ === !1,
        y = h ? m : void 0,
        C;
      return (
        l[2] !== y ||
        l[3] !== t.groupJid ||
        l[4] !== t.groupSubject ||
        l[5] !== t.lastMessage ||
        l[6] !== t.selectable ||
        l[7] !== t.theme
          ? ((C = c.jsx(r("WAWebMentionMutatorComponentBase.react"), {
              text: t.groupSubject,
              jid: t.groupJid,
              theme: t.theme,
              selectable: t.selectable,
              lastMessage: t.lastMessage,
              onClick: y,
            })),
            (l[2] = y),
            (l[3] = t.groupJid),
            (l[4] = t.groupSubject),
            (l[5] = t.lastMessage),
            (l[6] = t.selectable),
            (l[7] = t.theme),
            (l[8] = C))
          : (C = l[8]),
        C
      );
    }
    function p(e) {
      return o("WALogger").ERROR(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[groupMention] findChat failed, gmd exists",
          ])),
      );
    }
    l.default = m;
  },
  98,
);
