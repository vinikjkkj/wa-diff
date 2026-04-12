__d(
  "WAWebMembersRemovedAlert.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebLinkJoinedMembersUtils",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.groupMetadata,
        r = e.messageTimestamp,
        a = function () {
          o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(t, n);
        },
        i = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        l =
          r != null
            ? (function () {
                var e = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(r),
                  t = e.endTime,
                  n = e.startTime;
                return o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(
                  n,
                  t,
                );
              })()
            : null;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "members-removed-alert",
        },
        title: s._(/*BTDS*/ "Members removed"),
        onOK: a,
        okText: s._(/*BTDS*/ "Manage link permissions"),
        onCancel: i,
        cancelText: s._(/*BTDS*/ "Cancel"),
        children:
          l != null
            ? s._(
                /*BTDS*/ "All members who joined using a group link on {timeRange} were removed by an admin.",
                [s._param("timeRange", l)],
              )
            : s._(
                /*BTDS*/ "All members who joined using a group link were removed by an admin.",
              ),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(c, { chat: e, groupMetadata: t, messageTimestamp: n }),
      );
    }
    l.openMembersRemovedAlert = d;
  },
  226,
);
