__d(
  "WASmaxOutGroupsGetGroupProfilePicturesProfilePicturesRequestMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsParentOrSubGroupMixinGroup",
    "WASmaxOutGroupsProfilePictureIdMixin",
    "WASmaxOutGroupsProfilePictureQueryMixin",
    "WASmaxOutGroupsProfilePictureTypeMixin",
    "WASmaxOutGroupsSubGroupHintMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.profilePictureIdMixinArgs,
        n = e.profilePictureTypeMixinArgs,
        r = e.profilePictureQueryMixinArgs,
        a = e.parentOrSubGroupMixinGroupArgs,
        i = o(
          "WASmaxOutGroupsParentOrSubGroupMixinGroup",
        ).mergeParentOrSubGroupMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutGroupsProfilePictureQueryMixin")
              .mergeProfilePictureQueryMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutGroupsProfilePictureTypeMixin")
                .mergeProfilePictureTypeMixin,
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutGroupsProfilePictureIdMixin")
                  .mergeProfilePictureIdMixin,
                o("WASmaxJsx").smax("picture", null),
                t,
              ),
              n,
            ),
            r,
          ),
          a,
        );
      return i;
    }
    function s(t) {
      var n = t.pictureArgs,
        r = t.subGroupHintMixinArgs,
        a = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutGroupsSubGroupHintMixin").mergeSubGroupHintMixin,
            o("WASmaxJsx").smax(
              "pictures",
              null,
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1e3),
            ),
            r,
          ),
        );
      return a;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeGetGroupProfilePicturesProfilePicturesRequestPicturesPicture = e),
      (l.mergeGetGroupProfilePicturesProfilePicturesRequestMixin = u));
  },
  98,
);
