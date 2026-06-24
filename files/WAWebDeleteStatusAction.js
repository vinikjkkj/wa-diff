__d(
  "WAWebDeleteStatusAction",
  [
    "WALogger",
    "WAWebContactGetters",
    "WAWebDBMessageDelete",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebStatusCollection",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (
        o("WAWebContactGetters").getIsNewsletter(e.contact) && !e.isExpired()
      );
    }
    function u() {
      var t = o("WAWebStatusCollection").StatusCollection.filter(function (e) {
          var t;
          return (
            !o("WAWebUserPrefsMeUser").isMeAccount(e.contact.id) &&
            !o("WAWebFrontendContactGetters").getIsMyContact(e.contact) &&
            (!o("WAWebContactGetters").getIsGroup(e.contact) ||
              (r("WAWebGroupMetadataCollection") == null ||
              (t = r("WAWebGroupMetadataCollection").get(e.contact.id)) ==
                null ||
              (t = t.participants) == null
                ? void 0
                : t.iAmMember()) !== !0) &&
            !s(e) &&
            !o("WAWebContactGetters").getIsPSA(e.contact)
          );
        }),
        n = t.reduce(function (e, t) {
          var n = e.concat(t.msgs.toArray());
          return (t.delete(), n);
        }, []);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "clearStatusForNonAddressBook: remove ",
              " status ",
            ])),
          n.length,
        ),
        o("WAWebDBMessageDelete").removeStatusMessage(n)
      );
    }
    l.clearStatusForRemovedContact = u;
  },
  98,
);
