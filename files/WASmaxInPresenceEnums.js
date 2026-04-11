__d(
  "WASmaxInPresenceEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = { deny: "deny", error: "error", none: "none" },
      s = {
        validators: [o("WAJids").validateGroupJid, o("WAJids").validateUserJid],
        typeName: "GroupJid|UserJid",
      };
    ((l.ENUM_DENY_ERROR_NONE = e), (l.GROUPJID_USERJID = s));
  },
  98,
);
