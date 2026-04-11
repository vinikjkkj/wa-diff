__d(
  "WAWebSendGroupInviteFlow.react",
  ["fbt", "WANullthrows", "WAWebGroupType", "WAWebSendTextFlow.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = e.chat,
        i = r("WANullthrows")(
          (t = a.groupMetadata) == null ? void 0 : t.groupInviteLink,
        ),
        l =
          ((n = a.groupMetadata) == null ? void 0 : n.groupType) ===
          o("WAWebGroupType").GroupType.COMMUNITY,
        c = l
          ? s
              ._(/*BTDS*/ "Follow this link to join my WhatsApp community:")
              .toString() +
            " " +
            i
          : s
              ._(/*BTDS*/ "Follow this link to join my WhatsApp group:")
              .toString() +
            " " +
            i;
      return u.jsx(r("WAWebSendTextFlow.react"), {
        title: s._(/*BTDS*/ "Send link to"),
        text: c,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
