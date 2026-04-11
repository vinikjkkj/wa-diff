__d(
  "WASmaxOutGroupsGroupCreatorPhoneNumberMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyCreatorPn,
        n = o("WASmaxJsx").smax("smax$any", { creator_pn: o("WAWap").JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGroupCreatorPhoneNumberMixin = s;
  },
  98,
);
