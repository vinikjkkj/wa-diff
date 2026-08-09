__d(
  "LSVerifyContactRowExistsStoredProcedure",
  ["LSSynchronousPromise", "LSVerifyContactRowExists", "Promise", "cr:8709"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSVerifyContactRowExists"),
        a.id,
        a.contactIdType,
        a.profilePictureUrl,
        a.name,
        a.contactType,
        a.profilePictureFallbackUrl,
        a.profilePictureUrlExpirationTimestampMs,
        a.urlExpirationTimestampMs,
        a.normalizedNameForSearch,
        a.isMemorialized,
        a.isBlocked,
        a.blockedByViewerStatus,
        a.canViewerMessage,
        a.isSelf,
        a.authorityLevel,
        a.capabilities,
        a.capabilities2,
        a.workForeignEntityType,
        a.gender,
        a.contactViewerRelationship,
        a.secondaryName,
        a.firstName,
        a.friendshipStatus,
      );
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);
