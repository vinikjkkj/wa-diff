__d(
  "WASmaxOutWaffleForceDeleteStateRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.onlyIfSuspendedElementValue,
        n = o("WASmaxJsx").smax("only_if_suspended", null, t);
      return n;
    }
    function s(t) {
      var n = t.onlyIfSuspendedArgs,
        r = t.timestampElementValue,
        a = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(59),
              to: o("WAWap").S_WHATSAPP_NET,
            },
            o("WASmaxJsx").smax("timestamp", null, o("WAWap").INT(r)),
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
          ),
        );
      return a;
    }
    ((l.makeForceDeleteStateRequestOnlyIfSuspended = e),
      (l.makeForceDeleteStateRequest = s));
  },
  98,
);
