__d(
  "WASmaxOutPreKeysDeleteRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysSetOpDeleteMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("list", null);
      return e;
    }
    function s() {
      var e = o("WASmaxJsx").smax("pq_list", null);
      return e;
    }
    function u(t) {
      var n = t.hasList,
        r = t.hasPqList,
        a = o("WASmaxOutPreKeysSetOpDeleteMixin").mergeSetOpDeleteMixin(
          o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(
            o("WASmaxJsx").smax(
              "iq",
              { type: "set" },
              o("WASmaxChildren").HAS_OPTIONAL_CHILD(e, n),
              o("WASmaxChildren").HAS_OPTIONAL_CHILD(s, r),
            ),
          ),
        );
      return a;
    }
    ((l.makeDeleteRequestList = e),
      (l.makeDeleteRequestPqList = s),
      (l.makeDeleteRequest = u));
  },
  98,
);
