__d(
  "WASmaxOutAbPropsGetExperimentConfigRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutAbPropsBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.propsHash,
        n = e.propsRefreshId,
        r = o(
          "WASmaxOutAbPropsBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "abt", to: o("WAWap").S_WHATSAPP_NET },
            o("WASmaxJsx").smax("props", {
              protocol: "1",
              hash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
              refresh_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
            }),
          ),
        );
      return r;
    }
    l.makeGetExperimentConfigRequest = e;
  },
  98,
);
