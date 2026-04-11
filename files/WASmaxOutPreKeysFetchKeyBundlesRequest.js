__d(
  "WASmaxOutPreKeysFetchKeyBundlesRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutPreKeysClientRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.userJid,
        n = e.hasUserReasonIdentity,
        r = o("WASmaxJsx").smax("user", {
          jid: o("WAWap").JID(t),
          reason: o("WASmaxAttrs").OPTIONAL_LITERAL("identity", n),
        });
      return r;
    }
    function s(t) {
      var n = t.userArgs,
        r = o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { type: "get" },
            o("WASmaxJsx").smax(
              "key",
              null,
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1e5),
            ),
          ),
        );
      return r;
    }
    ((l.makeFetchKeyBundlesRequestKeyUser = e),
      (l.makeFetchKeyBundlesRequest = s));
  },
  98,
);
