__d(
  "WASmaxOutUserNoticeGetDisclosureStageByIdsRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutUserNoticeBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.getDisclosureStageByIdId,
        n = e.getDisclosureStageByIdT,
        r = o("WASmaxJsx").smax("get_disclosure_stage_by_id", {
          id: o("WAWap").INT(t),
          t: o("WAWap").INT(n),
        });
      return r;
    }
    function s(t) {
      var n = t.getDisclosureStageByIdArgs,
        r = o(
          "WASmaxOutUserNoticeBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "tos" },
            o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 1 / 0),
          ),
        );
      return r;
    }
    ((l.makeGetDisclosureStageByIdsRequestGetDisclosureStageById = e),
      (l.makeGetDisclosureStageByIdsRequest = s));
  },
  98,
);
