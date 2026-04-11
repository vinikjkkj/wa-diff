__d(
  "WASmaxOutAbPropsGetGroupExperimentConfigRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutAbPropsBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.propsGroup,
        n = e.propsHash,
        r = o(
          "WASmaxOutAbPropsBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "abt", to: o("WAWap").S_WHATSAPP_NET },
            o("WASmaxJsx").smax("props", {
              group: o("WAWap").GROUP_JID(t),
              hash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
            }),
          ),
        );
      return r;
    }
    l.makeGetGroupExperimentConfigRequest = e;
  },
  98,
);
