__d(
  "WASmaxOutPreKeysFetchMissingPreKeysRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysRegistrationIDMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.deviceId,
        n = o("WASmaxOutPreKeysRegistrationIDMixin").mergeRegistrationIDMixin(
          o("WASmaxJsx").smax("device", { id: o("WAWap").INT(t) }),
          e,
        );
      return n;
    }
    function s(t) {
      var n = t.deviceArgs,
        r = t.userJid,
        a = t.hasUserReasonIdentity,
        i = o("WASmaxJsx").smax(
          "user",
          {
            jid: o("WAWap").JID(r),
            reason: o("WASmaxAttrs").OPTIONAL_LITERAL("identity", a),
          },
          o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 100),
        );
      return i;
    }
    function u(e) {
      var t = e.userArgs,
        n = e.hasKeyFetchPqsupportTrue,
        r = e.keyFetchContextJid,
        a = o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { type: "get" },
            o("WASmaxJsx").smax(
              "key_fetch",
              {
                pqsupport: o("WASmaxAttrs").OPTIONAL_LITERAL("true", n),
                context_jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, r),
              },
              o("WASmaxChildren").REPEATED_CHILD(s, t, 1, 1e5),
            ),
          ),
        );
      return a;
    }
    ((l.makeFetchMissingPreKeysRequestKeyFetchUserDevice = e),
      (l.makeFetchMissingPreKeysRequestKeyFetchUser = s),
      (l.makeFetchMissingPreKeysRequest = u));
  },
  98,
);
