__d(
  "WASmaxOutPreKeysFetchDigestRequest",
  ["WASmaxJsx", "WASmaxOutPreKeysClientRequestMixin"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { type: "get" },
          o("WASmaxJsx").smax("digest", null),
        ),
      );
      return e;
    }
    l.makeFetchDigestRequest = e;
  },
  98,
);
