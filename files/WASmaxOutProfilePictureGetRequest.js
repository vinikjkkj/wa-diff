__d(
  "WASmaxOutProfilePictureGetRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutProfilePictureAddRequestMixin",
    "WASmaxOutProfilePictureAvatarMixin",
    "WASmaxOutProfilePictureBaseGetIQMixin",
    "WASmaxOutProfilePictureGetIQMixin",
    "WASmaxOutProfilePictureTCTokenMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.pictureType,
        a = e.pictureId,
        i = e.pictureQuery,
        l = e.pictureInvite,
        s = e.picturePersonaId,
        u = e.pictureCommonGid,
        c = e.addRequestMixinArgs,
        d = e.tCTokenMixinArgs,
        m = e.avatarMixinArgs,
        p = o("WASmaxOutProfilePictureGetIQMixin").mergeGetIQMixin(
          o("WASmaxOutProfilePictureBaseGetIQMixin").mergeBaseGetIQMixin(
            o("WASmaxJsx").smax(
              "iq",
              null,
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutProfilePictureAvatarMixin").mergeAvatarMixin,
                o("WASmaxMixins").optionalMerge(
                  o("WASmaxOutProfilePictureTCTokenMixin").mergeTCTokenMixin,
                  o("WASmaxMixins").optionalMerge(
                    o("WASmaxOutProfilePictureAddRequestMixin")
                      .mergeAddRequestMixin,
                    o("WASmaxJsx").smax("picture", {
                      type: (t = o("WASmaxAttrs")).OPTIONAL(
                        (n = o("WAWap")).CUSTOM_STRING,
                        r,
                      ),
                      id: t.OPTIONAL(n.CUSTOM_STRING, a),
                      query: t.OPTIONAL(n.CUSTOM_STRING, i),
                      invite: t.OPTIONAL(n.CUSTOM_STRING, l),
                      persona_id: t.OPTIONAL(n.CUSTOM_STRING, s),
                      common_gid: t.OPTIONAL(n.GROUP_JID, u),
                    }),
                    c,
                  ),
                  d,
                ),
                m,
              ),
            ),
          ),
          e,
        );
      return p;
    }
    l.makeGetRequest = e;
  },
  98,
);
