__d(
  "WASmaxInPsaEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = { blocked: "blocked", unblocked: "unblocked" },
      s = { image: "image", video: "video" },
      u = {
        validators: [
          o("WAJids").validateStatusJid,
          o("WAJids").validateUserJid,
        ],
        typeName: "StatusJid|UserJid",
      };
    ((l.ENUM_BLOCKED_UNBLOCKED = e),
      (l.ENUM_IMAGE_VIDEO = s),
      (l.STATUSJID_USERJID = u));
  },
  98,
);
