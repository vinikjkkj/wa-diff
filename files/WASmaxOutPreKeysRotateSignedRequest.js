__d(
  "WASmaxOutPreKeysRotateSignedRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysPQLastResortKeyMixin",
    "WASmaxOutPreKeysSetOpRotateMixin",
    "WASmaxOutPreKeysSignedPreKeyMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasSetOpRotate,
        n = e.signedPreKeyMixinArgs,
        r = e.pQLastResortKeyMixinArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutPreKeysSetOpRotateMixin").mergeSetOpRotateMixin,
          o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(
            o("WASmaxJsx").smax(
              "iq",
              { type: "set" },
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutPreKeysPQLastResortKeyMixin")
                  .mergePQLastResortKeyMixin,
                o("WASmaxOutPreKeysSignedPreKeyMixin").mergeSignedPreKeyMixin(
                  o("WASmaxJsx").smax("rotate", null),
                  n,
                ),
                r,
              ),
            ),
          ),
          t,
        );
      return a;
    }
    l.makeRotateSignedRequest = e;
  },
  98,
);
