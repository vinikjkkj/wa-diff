__d(
  "useWAWebShowCommunitySubjectSyncIssue",
  [
    "WAWebChatCommunityUtils",
    "WAWebCommunitySubjectChangePopups.react",
    "WAWebGroupType",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = d(!1),
        n = t[0],
        r = t[1],
        a = function () {
          var t, n;
          if (
            (e == null || (t = e.groupMetadata) == null
              ? void 0
              : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY
          )
            return e;
          if (
            (e == null || (n = e.groupMetadata) == null
              ? void 0
              : n.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ) {
            var r;
            return e == null || (r = e.groupMetadata) == null
              ? void 0
              : r.getParentGroupChat();
          }
        };
      return (
        c(function () {
          var e,
            t = a();
          t &&
            (e = t.groupMetadata) != null &&
            e.participants.iAmAdmin() &&
            o("WAWebChatCommunityUtils").cagAndCommunitySubjectDiffer(t) &&
            (r(!0),
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebCommunitySubjectChangePopups.react")
                  .CommunitySubjectSyncingIssuePopup,
                { parentChat: t },
              ),
            ));
        }, []),
        n
      );
    }
    l.default = m;
  },
  98,
);
