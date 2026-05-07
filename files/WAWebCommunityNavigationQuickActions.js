__d(
  "WAWebCommunityNavigationQuickActions",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebNoop",
    "WDSIconIcGroup.react",
    "WDSIconIcInfo.react",
    "WDSIconIcSettings.react",
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
          onClick: function (t) {
            var e = t.chat;
            o("WAWebCmd").Cmd.openCommunitySettingsDrawer(e.id);
          },
        },
      ],
      d = c;
    l.default = d;
  },
  226,
);
