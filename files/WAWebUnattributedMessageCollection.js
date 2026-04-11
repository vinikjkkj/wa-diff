__d(
  "WAWebUnattributedMessageCollection",
  [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebUnattributedMessageModel",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebUnattributedMessageModel").UnattributedMessage),
      (e.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .UNATTRIBUTED_MESSAGE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var s = new e();
    l.UnattributedMessageCollection = s;
  },
  98,
);
