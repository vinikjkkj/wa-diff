__d(
  "WASmaxInProfilePictureEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { false: "false", true: "true" },
      u = { image: "image", preview: "preview" },
      c = { lid: "lid", pn: "pn" },
      d = {
        validators: [
          (e = o("WAJids")).validateDomainJid,
          e.validateGroupJid,
          e.validateUserJid,
          e.validateUserJid,
        ],
        typeName: "DomainJid|GroupJid|UserJid|UserJid",
      },
      m = {
        validators: [e.validateGroupJid, e.validateUserJid],
        typeName: "GroupJid|UserJid",
      },
      p = {
        validators: [e.validateUserJid, e.validateUserJid],
        typeName: "UserJid|UserJid",
      };
    ((l.ENUM_FALSE_TRUE = s),
      (l.ENUM_IMAGE_PREVIEW = u),
      (l.ENUM_LID_PN = c),
      (l.DOMAINJID_GROUPJID_USERJID_USERJID = d),
      (l.GROUPJID_USERJID = m),
      (l.USERJID_USERJID = p));
  },
  98,
);
