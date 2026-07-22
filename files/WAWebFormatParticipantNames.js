__d(
  "WAWebFormatParticipantNames",
  [
    "fbt",
    "WAWebBotFrontendUtils",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "WAWebL10NEnumeration.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebPairList",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSuspendedCommunityUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "fbs",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { linkColor: { color: "x1bvqhpb", $$css: !0 } };
    function d(e, t) {
      return function (n) {
        (n && (n.preventDefault(), n.stopPropagation()),
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(e, "formatParticipantNames")
            .then(function (e) {
              var n = e.chat;
              if (
                o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() &&
                !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                  chat: n,
                  contact: n.contact,
                })
              ) {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebReachoutTimelockRestrictedModalLoadable")
                      .ReachoutTimelockRestrictedModalLoadable,
                    {},
                  ),
                );
                return;
              }
              (t === "sibling_group_link" &&
                new (o(
                  "WAWebCommunityGroupJourneyEventImpl",
                ).CommunityGroupJourneyEvent)({
                  action: o("WAWebWamEnumChatFilterActionTypes")
                    .CHAT_FILTER_ACTION_TYPES.GROUP_SYSTEM_MESSAGE_CLICK,
                  surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                  chat: n,
                }).commit(),
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({
                    chat: n,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                      .SystemMessage,
                  })
                  .then(function (e) {
                    e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
                  }));
            }));
      };
    }
    function m(e) {
      return function (t) {
        (t && (t.preventDefault(), t.stopPropagation()),
          o("WAWebCmd").Cmd.openCommunityHome(e, void 0));
      };
    }
    function p(e) {
      return function (t) {
        (t && (t.preventDefault(), t.stopPropagation()),
          o("WAWebCmd").Cmd.openCommunityTabbedInfo(e, void 0, !1, !0));
      };
    }
    function _(e) {
      return function (t) {
        (t && (t.preventDefault(), t.stopPropagation()),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "format-participant-names",
              },
              onOK: o("WAWebModalManager").closeModalManager,
              children: s._(
                /*BTDS*/ 'You are no longer a member of the community "{community}"',
                [
                  s._param(
                    "community",
                    u.jsx(o("WAWebName.react").Name, { contact: e }),
                  ),
                ],
              ),
            }),
          ));
      };
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "This community no longer exists"),
        }),
      );
    }
    function g(e, t) {
      return t
        ? u.jsx(r("WAWebClickableLink.react"), {
            onClick: f,
            xstyle: c.linkColor,
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e }),
          })
        : e;
    }
    function h(e) {
      var t = e.asString,
        n = e.clickable,
        r = e.communityName,
        a = e.jid,
        i = o("WAWebContactCollection").ContactCollection.get(a.toString());
      return t === !1 && i != null
        ? L(a, n ? m(a) : null)
        : r == null || r === ""
          ? null
          : t === !1 && n
            ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: r,
                onClick: o("WAWebSuspendedCommunityUtils")
                  .openTerminatedCommunityModal,
              })
            : r;
    }
    function y(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebContactCollection").ContactCollection.get(e.toString());
      if (!n) return null;
      if (t) return n.name;
      var a = r("WAWebGroupMetadataCollection").get(e),
        i = m(e);
      return ((a != null && a.joinedSubgroups.length) || (i = _(n)), L(e, i));
    }
    function C(e, t) {
      return t
        ? r("fbs")._(/*BTDS*/ '"{community-name}"', [
            r("fbs")._param("community-name", e),
          ])
        : u.jsx("span", {
            className: "xuxw1ft",
            children: s._(/*BTDS*/ '"{community-name}"', [
              s._param("community-name", e),
            ]),
          });
    }
    function b(e) {
      var t = e.alternativeStringName,
        n = e.asString,
        r = n === void 0 ? !1 : n,
        a = e.jid,
        i = y(a, r);
      return i == null && t
        ? g(t, !r)
        : typeof i == "string" && !r
          ? u.jsx(o("WAWebEmojiText.react").EmojiText, { text: i })
          : i;
    }
    function v(e, t, n) {
      if (
        (t === void 0 && (t = !1),
        o("WAWebContactCollection").ContactCollection.get(e.toString()) !=
          null && !t)
      )
        return L(e, d(e, n));
      var a = r("WAWebUnjoinedSubgroupMetadataCollection").get(e.toString());
      return a != null && a.subject ? a.subject : null;
    }
    function S(e) {
      var t = e.asString,
        n = t === void 0 ? !1 : t,
        a = e.groups,
        i = e.subtype,
        l = o("WAWebPairList")
          .unFlattenPairList(a)
          .map(function (e) {
            var t = e[0],
              r = e[1],
              o = v(t, n, i);
            return o !== "" && o != null ? o : r;
          });
      return r("WAWebL10NEnumeration.react")(l, n);
    }
    function R(e, t, n, r) {
      if ((t === void 0 && (t = !0), !e.isUser()))
        return L(e, t ? d(e, n) : null, r);
      var o = t ? d(e, n) : null;
      return L(e, o, r);
    }
    function L(e, t, n) {
      if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)) {
        var a = o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName();
        return t
          ? u.jsx(r("WAWebClickableLink.react"), {
              onClick: t,
              xstyle: c.linkColor,
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: a }),
            })
          : u.jsx(o("WAWebEmojiText.react").EmojiText, { text: a });
      }
      var i = o("WAWebContactCollection").ContactCollection.gadd(e, {
        silent: !0,
      });
      return u.jsx(o("WAWebName.react").Name, {
        contact: i,
        showNotifyName: !0,
        elevatedPushNamesEnabled: !0,
        onClick: t,
        tabIndex: n,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t, n, o) {
      if (
        (t === void 0 && (t = !0), n === void 0 && (n = !1), !Array.isArray(e))
      )
        return R(e, t, void 0, o);
      var a = e.map(function (e) {
        return R(e, t, void 0, o);
      });
      return r("WAWebFbtIntlList")(
        a,
        n
          ? r("WAWebFbtIntlList").CONJUNCTIONS.NONE
          : r("WAWebFbtIntlList").CONJUNCTIONS.AND,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      );
    }
    ((l.openCommunity = m),
      (l.openCommunityInfo = p),
      (l.getClickableDeactivatedCommunityName = g),
      (l.getClickableIntegrityDeactivateCommunityName = h),
      (l.getCommunityNameInQuotationMarks = C),
      (l.getFormattedCommunityNameWithAlternative = b),
      (l.getFormattedNameIfExists = v),
      (l.getFormattedGroupListForCommunity = S),
      (l.getFormattedName = R),
      (l.getFormattedNames = E));
  },
  226,
);
