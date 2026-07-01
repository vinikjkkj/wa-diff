__d(
  "WASmaxOutPreKeysAddRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysPQPreKeyListMixin",
    "WASmaxOutPreKeysPreKeyListMixin",
    "WASmaxOutPreKeysSetOpAddMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.preKeyListMixinArgs,
        n = e.pQPreKeyListMixinArgs,
        r = o("WASmaxOutPreKeysSetOpAddMixin").mergeSetOpAddMixin(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutPreKeysPQPreKeyListMixin").mergePQPreKeyListMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutPreKeysPreKeyListMixin").mergePreKeyListMixin,
              o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(
                o("WASmaxJsx").smax("iq", { type: "set" }),
              ),
              t,
            ),
            n,
          ),
        );
      return r;
    }
    l.makeAddRequest = e;
  },
  98,
);
