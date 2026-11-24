__d(
  "WASmaxInPrivacyEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = {
        calladd: "calladd",
        dependentaccountmessages: "dependentaccountmessages",
        groupadd: "groupadd",
        last: "last",
        linked_profiles: "linked_profiles",
        messages: "messages",
        pix: "pix",
        profile: "profile",
        status: "status",
        stickers: "stickers",
      },
      s = {
        validators: [
          o("WAJids").validateDomainJid,
          o("WAJids").validateUserJid,
        ],
        typeName: "DomainJid|UserJid",
      };
    ((l.ENUM_CALLADD_DEPENDENTACCOUNTMESSAGES_GROUPADD_LAST_LINKEDPROFILES_MESSAGES_PIX_PROFILE_STATUS_STICKERS =
      e),
      (l.DOMAINJID_USERJID = s));
  },
  98,
);
