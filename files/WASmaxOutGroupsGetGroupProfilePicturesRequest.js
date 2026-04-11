__d(
  "WASmaxOutGroupsGetGroupProfilePicturesRequest",
  [
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetGroupOrServerMixinGroup",
    "WASmaxOutGroupsGetGroupProfilePicturesProfilePicturesRequestMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseGetGroupOrServerMixinGroupArgs,
        n = o(
          "WASmaxOutGroupsBaseGetGroupOrServerMixinGroup",
        ).mergeBaseGetGroupOrServerMixinGroup(
          o(
            "WASmaxOutGroupsGetGroupProfilePicturesProfilePicturesRequestMixin",
          ).mergeGetGroupProfilePicturesProfilePicturesRequestMixin(
            o("WASmaxJsx").smax("iq", null),
            e,
          ),
          t,
        );
      return n;
    }
    l.makeGetGroupProfilePicturesRequest = e;
  },
  98,
);
