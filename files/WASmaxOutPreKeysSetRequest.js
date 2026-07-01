__d(
  "WASmaxOutPreKeysSetRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysIdentityKeyOrPQKeyBundleMixinGroup",
    "WASmaxOutPreKeysSetOpDefaultMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.setOpDefaultMixinArgs,
        n = e.identityKeyOrPQKeyBundleMixinGroupArgs,
        r = o(
          "WASmaxOutPreKeysIdentityKeyOrPQKeyBundleMixinGroup",
        ).mergeIdentityKeyOrPQKeyBundleMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutPreKeysSetOpDefaultMixin").mergeSetOpDefaultMixin,
            o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(
              o("WASmaxJsx").smax("iq", { type: "set" }),
            ),
            t,
          ),
          n,
        );
      return r;
    }
    l.makeSetRequest = e;
  },
  98,
);
