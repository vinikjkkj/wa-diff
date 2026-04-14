__d(
  "WAWebCommunityLinkingFailedModal.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebFormatParticipantNames",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPairList",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.failedGroups,
        n = e.isCommunityFull,
        r = e.parentGroupId,
        a = o("WAWebFormatParticipantNames").getFormattedGroupListForCommunity(
          o("WAWebPairList").flattenPairList(
            t.map(function (e) {
              return [e, ""];
            }),
          ),
        ),
        i = [],
        l;
      if (n) {
        var c = u.jsx(o("WAWebButton.react").Button, {
          type: "secondary",
          onClick: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "OK"),
        });
        (i.push(c),
          (l = s._(
            /*BTDS*/ "{groups} could not be added because the community is full.",
            [s._param("groups", a)],
          )));
      } else {
        var d = u.jsx(o("WAWebButton.react").Button, {
          type: "secondary",
          onClick: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ "Cancel"),
        });
        i.push(d);
        var m = u.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          onClick: function () {
            (o("WAWebCmd").Cmd.openCommunityHomeManageGroups(r),
              o("WAWebModalManager").ModalManager.close());
          },
          children: s._(/*BTDS*/ "Add groups"),
        });
        (i.push(m),
          (l = s._(
            /*BTDS*/ '_j{"*":"{groups} could not be added to the community. Try adding them again.","_1":"{groups} could not be added to the community. Try adding it again."}',
            [s._plural(t.length), s._param("groups", a)],
          )));
      }
      return u.jsx(o("WAWebModal.react").Modal, {
        actions: i,
        children: u.jsx("div", { children: l }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
