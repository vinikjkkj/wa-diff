__d(
  "WASmaxOutPreKeysSetOpDefaultMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.coexTokenElementValue,
        n = o("WASmaxJsx").smax("coex_token", null, t);
      return n;
    }
    function s(t) {
      var n = t.coexTokenArgs,
        r = t.opReason,
        a = o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax(
            "op",
            {
              mode: "set",
              reason: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
            },
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
          ),
        );
      return a;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeSetOpDefaultOpCoexToken = e), (l.mergeSetOpDefaultMixin = u));
  },
  98,
);
