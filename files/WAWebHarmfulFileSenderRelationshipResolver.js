__d(
  "WAWebHarmfulFileSenderRelationshipResolver",
  [
    "$InternalEnum",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ NON_CONTACT: 0, CONTACT: 1 });
    function s(t) {
      var n = o("WAWebMsgGetters").getSender(t);
      if (n == null) return e.NON_CONTACT;
      var r = o("WAWebContactCollection").ContactCollection.get(n);
      return r != null && o("WAWebFrontendContactGetters").getIsMyContact(r)
        ? e.CONTACT
        : e.NON_CONTACT;
    }
    ((l.HarmfulFileSenderRelationship = e),
      (l.resolveHarmfulFileSenderRelationship = s));
  },
  98,
);
