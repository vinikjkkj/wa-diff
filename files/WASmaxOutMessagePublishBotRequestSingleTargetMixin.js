__d(
  "WASmaxOutMessagePublishBotRequestSingleTargetMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishEncRetryMixin",
    "WASmaxOutMessagePublishEncTypeIndividualMixin",
    "WASmaxOutMessagePublishEncVersionBot",
    "WASmaxOutMessagePublishMediaTypeOrEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.toJid,
        n = e.encRetryMixinArgs,
        r = e.encTypeIndividualMixinArgs,
        a = e.encVersionBotArgs,
        i =
          e.mediaTypeOrEncLiveLocationOrEncLiveLocationDeprecatedMixinGroupArgs,
        l = o("WASmaxJsx").smax(
          "bot",
          null,
          o("WASmaxJsx").smax(
            "to",
            { jid: o("WAWap").JID(t) },
            o("WASmaxMixins").optionalMerge(
              o(
                "WASmaxOutMessagePublishMediaTypeOrEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
              )
                .mergeMediaTypeOrEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup,
              o("WASmaxOutMessagePublishEncVersionBot").mergeEncVersionBot(
                o(
                  "WASmaxOutMessagePublishEncTypeIndividualMixin",
                ).mergeEncTypeIndividualMixin(
                  o("WASmaxMixins").optionalMerge(
                    o("WASmaxOutMessagePublishEncRetryMixin")
                      .mergeEncRetryMixin,
                    o("WASmaxJsx").smax("enc", null),
                    n,
                  ),
                  r,
                ),
                a,
              ),
              i,
            ),
          ),
        );
      return l;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBotRequestSingleTargetMixin = s;
  },
  98,
);
