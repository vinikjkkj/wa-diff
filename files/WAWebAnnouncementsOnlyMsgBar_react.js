__d(
  "WAWebAnnouncementsOnlyMsgBar.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebMsgBarActions",
    "WAWebMuteGetters",
    "WAWebTabOrder",
    "react",
    "useWAWebModelValues",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.groupMetadata,
        a = e.mute;
      o("useWAWebMuteValues").useMuteValues(a.id, [
        o("WAWebMuteGetters").getIsMuted,
      ]);
      var i = o("useWAWebModelValues").useModelValues(n, [
          "participants",
          "id",
        ]),
        l = u.jsx(r("WAWebClickableLink.react"), {
          tabIndex: 0,
          "data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
          ariaLabel: s._(/*BTDS*/ "Message admin"),
          onClick: function () {
            o("WAWebMsgBarActions").handleMsgAdmin(
              i,
              s._(/*BTDS*/ "Message admin"),
            );
          },
          children: s._(/*BTDS*/ "admins"),
        });
      return u.jsx("span", {
        className: "x126k92a",
        children: s._(/*BTDS*/ "Only {admins} can send messages", [
          s._param("admins", l),
        ]),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
