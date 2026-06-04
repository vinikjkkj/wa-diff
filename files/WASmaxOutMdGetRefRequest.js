__d(
  "WASmaxOutMdGetRefRequest",
  ["WASmaxJsx", "WASmaxOutMdBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxOutMdBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
          o("WASmaxJsx").smax("ref", null),
        ),
      );
      return e;
    }
    l.makeGetRefRequest = e;
  },
  98,
);
