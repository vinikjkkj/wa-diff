__d(
  "WAWebLeaveCommunityAnnouncementGroupPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isArchived,
        n = e.isCommunityCreator,
        a = e.onArchive,
        i = s._(
          /*BTDS*/ "You cannot exit the announcement group as a community admin. You can remove yourself as an admin and then exit this group.",
        );
      return (
        n &&
          (i = s._(
            /*BTDS*/ "You cannot exit the announcement group because you created the community it's in. You can deactivate the community through community info instead.",
          )),
        u.jsx(
          o("WAWebConfirmPopup.react").ConfirmPopup,
          babelHelpers.extends(
            {
              testid: void 0,
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("Cancel"),
            },
            !t && {
              onCancel: a,
              cancelText: r("WAWebFbtCommon")("Archive instead"),
            },
            { children: i },
          ),
        )
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.isArchived,
        n = e.onArchive;
      return u.jsx(
        o("WAWebConfirmPopup.react").ConfirmPopup,
        babelHelpers.extends(
          { testid: void 0 },
          t
            ? {
                okText: r("WAWebFbtCommon")("OK"),
                onOK: o("WAWebModalManager").closeModalManager,
              }
            : {
                okText: r("WAWebFbtCommon")("Archive instead"),
                onOK: n,
                cancelText: r("WAWebFbtCommon")("OK"),
                onCancel: o("WAWebModalManager").closeModalManager,
              },
          {
            children: t
              ? s._(/*BTDS*/ "To exit this group, you must exit the community.")
              : s._(
                  /*BTDS*/ "To exit this group, you must exit the community. You can always archive it instead.",
                ),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.LeaveCommunityAnnouncementGroupAdminPopup = c),
      (l.LeaveCommunityAnnouncementGroupMemberPopup = d));
  },
  226,
);
