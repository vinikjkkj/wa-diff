__d(
  "WASmaxOutMdGetCountryCodeRequest",
  ["WASmaxJsx", "WASmaxOutMdBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxOutMdBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
          o("WASmaxJsx").smax("link_code_companion_reg", {
            stage: "get_country_code",
          }),
        ),
      );
      return e;
    }
    l.makeGetCountryCodeRequest = e;
  },
  98,
);
