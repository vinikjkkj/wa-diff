__d(
  "WAWebChatContextMenuItemDelete.react",
  [
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebDeleteMenuItem.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebModalManager",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebSuspendedGroupUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chat,
        n = function () {
          if (
            o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(
              t,
            )
          )
            o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
              t,
              o("WAWebSpamConstants").SpamFlow.GroupChatlistLeaveReportUpsell,
            );
          else {
            var e,
              n =
                (e = t.groupMetadata) == null ? void 0 : e.getParentGroupChat();
            n != null &&
            o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t)
              ? o("WAWebModalManager").ModalManager.open(
                  s.jsx(r("WAWebLeaveCommunityModal.react"), { chat: n }),
                )
              : o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(
                  o("WAWebStateUtils").unproxy(t),
                  11,
                );
          }
        };
      return s.jsx(
        r("WAWebDeleteMenuItem.react"),
        { onDeleteOrExit: n, chat: o("WAWebStateUtils").unproxy(t) },
        "delete",
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
