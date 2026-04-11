__d(
  "WAWebDeleteStatusAction",
  [
    "WALogger",
    "WAWebContactGetters",
    "WAWebDBMessageDelete",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterSyntheticStatusUtils",
    "WAWebStatusCollection",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n =
          r("WAWebNewsletterMetadataCollection") == null
            ? void 0
            : r("WAWebNewsletterMetadataCollection").get(e);
      return (n == null ? void 0 : n.isSubscribedOrOwned) === !0
        ? !0
        : !o("WAWebNewsletterSyntheticStatusUtils").isNewsletterStatusExpired(
            n == null || (t = n.statusMetadata) == null
              ? void 0
              : t.lastStatusSentTime,
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
            (!o("WAWebContactGetters").getIsNewsletter(e.contact) ||
              !s(e.contact.id)) &&
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
