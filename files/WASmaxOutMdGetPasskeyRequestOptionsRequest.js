__d(
  "WASmaxOutMdGetPasskeyRequestOptionsRequest",
  ["WASmaxJsx", "WASmaxOutMdBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxOutMdBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
          o("WASmaxJsx").smax("passkey_request_options", null),
        ),
      );
      return e;
    }
    l.makeGetPasskeyRequestOptionsRequest = e;
  },
  98,
);
