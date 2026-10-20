__d(
  "WASmaxInProfilePictureEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = { cover: "cover", image: "image", preview: "preview" },
      s = { cover: "cover", picture: "picture" },
      u = { false: "false", true: "true" },
      c = { image: "image", preview: "preview" },
      d = { lid: "lid", pn: "pn" },
      m = {
        validators: [o("WAJids").validateGroupJid, o("WAJids").validateUserJid],
        typeName: "GroupJid|UserJid",
      };
    ((l.ENUM_COVER_IMAGE_PREVIEW = e),
      (l.ENUM_COVER_PICTURE = s),
      (l.ENUM_FALSE_TRUE = u),
      (l.ENUM_IMAGE_PREVIEW = c),
      (l.ENUM_LID_PN = d),
      (l.GROUPJID_USERJID = m));
  },
  98,
);
