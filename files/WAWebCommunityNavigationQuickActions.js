__d(
  "WAWebCommunityNavigationQuickActions",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebNoop",
    "WDSIconIcGroup.react",
    "WDSIconIcInfo.react",
    "WDSIconIcSettings.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = [
        {
          id: "community_info",
          Icon: r("WDSIconIcInfo.react"),
          label: function () {
            return s._(/*BTDS*/ "Info");
          },
          onClick: function (t) {
            var e = t.chat;
            o("WAWebCmd").Cmd.openCommunityTabbedInfo(e.id);
          },
        },
        {
          id: "community_members",
          Icon: r("WDSIconIcGroup.react"),
          label: function () {
            return s._(/*BTDS*/ "Members");
          },
          isVisible: function (t) {
            var e = t.isAdmin,
              n = t.isSuspended;
            return !n && !e;
          },
          onClick: function (t) {
            var e = t.chat;
            r("JSResourceForInteraction")(
              "WAWebViewCommunityMembersModal.react",
            )
              .__setRef("WAWebCommunityNavigationQuickActions")
              .load()
              .then(function (t) {
                var n = t.ViewCommunityMembersModal;
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(n, {
                    parentChat: e,
                    onInviteMembersClick: r("WAWebNoop"),
                  }),
                );
              });
          },
        },
        {
          id: "community_settings",
          Icon: r("WDSIconIcSettings.react"),
          label: function () {
            return s._(/*BTDS*/ "Settings");
          },
          isVisible: function (t) {
            var e = t.isAdmin,
              n = t.isSuspended;
            return !n && e;
          },
          onClick: function (t) {
            var e = t.chat;
            o("WAWebCmd").Cmd.openCommunitySettingsDrawer(e.id);
          },
        },
        {
          id: "community_new_group",
          Icon: r("WDSIconIcGroup.react"),
          label: function () {
            return s._(/*BTDS*/ "New group");
          },
          isVisible: function (t) {
            var e = t.allowNonAdminSubGroupCreation,
              n = t.canAddGroup,
              r = t.isAdmin;
            return n && (r || e);
          },
          onClick: function (t) {
            var e = t.chat;
            o("WAWebCmd").Cmd.communityAddNewGroup(
              e.id,
              function (t) {
                return d(e.id, t);
              },
              void 0,
            );
          },
        },
        {
          id: "community_add_existing_group",
          Icon: r("WDSIconIcGroup.react"),
          label: function () {
            return s._(/*BTDS*/ "Existing group");
          },
          isVisible: function (t) {
            var e = t.allowNonAdminSubGroupCreation,
              n = t.canAddGroup,
              r = t.isAdmin;
            return n && (r || e);
          },
          onClick: function (t) {
            var e = t.chat;
            o("WAWebCmd").Cmd.communityAddExistingGroup(e.id);
          },
        },
      ];
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = yield t;
          } catch (e) {
            return;
          }
          if (n != null) {
            o("WAWebCmd").Cmd.openCommunityHome(e);
            var r = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                n,
                "communityHome",
              ),
              a = r.chat,
              i = yield o("WAWebCmd").Cmd.openChatBottom({
                chat: a,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .CommunityNewGroupCreation,
              });
            i && o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
          }
        })),
        m.apply(this, arguments)
      );
    }
    var p = c;
    l.default = p;
  },
  226,
);
