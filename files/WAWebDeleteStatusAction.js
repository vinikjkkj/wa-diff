__d(
  "WAWebDeleteStatusAction",
  [
    "Promise",
    "WALogger",
    "WAWebContactGetters",
    "WAWebDBMessageDelete",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebStatusCollection",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return (
        o("WAWebContactGetters").getIsNewsletter(e.contact) && !e.isExpired()
      );
    }
    function d() {
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
            !c(e) &&
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
    function m(e) {
      var t = o("WAWebStatusCollection").StatusCollection.get(e);
      if (t == null) return (u || (u = n("Promise"))).resolve();
      var r = t.msgs.toArray();
      return (
        t.delete(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "deleteStatusForContact: remove ",
              " status msgs ",
            ])),
          r.length,
        ),
        o("WAWebDBMessageDelete").removeStatusMessage(r)
      );
    }
    ((l.clearStatusForRemovedContact = d), (l.deleteStatusForContact = m));
  },
  98,
);
