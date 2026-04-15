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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        a;
      t[0] !== n
        ? ((a = function () {
            if (
              o(
                "WAWebChatGroupUtils",
              ).shouldShowLeaveAndReportGroupModalForChat(n)
            )
              o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
                n,
                o("WAWebSpamConstants").SpamFlow.GroupChatlistLeaveReportUpsell,
              );
            else {
              var e,
                t =
                  (e = n.groupMetadata) == null
                    ? void 0
                    : e.getParentGroupChat();
              t != null &&
              o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n)
                ? o("WAWebModalManager").ModalManager.open(
                    s.jsx(r("WAWebLeaveCommunityModal.react"), { chat: t }),
                  )
                : o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(
                    o("WAWebStateUtils").unproxy(n),
                    11,
                  );
            }
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = o("WAWebStateUtils").unproxy(n)), (t[2] = n), (t[3] = l))
        : (l = t[3]);
      var u;
      return (
        t[4] !== i || t[5] !== l
          ? ((u = s.jsx(
              r("WAWebDeleteMenuItem.react"),
              { onDeleteOrExit: i, chat: l },
              "delete",
            )),
            (t[4] = i),
            (t[5] = l),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    l.default = u;
  },
  98,
);
