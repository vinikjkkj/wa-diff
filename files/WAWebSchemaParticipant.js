__d(
  "WAWebSchemaParticipant",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addArrayIndex,
        r = t.addColumn,
        a = t.addUserDefinedPrimaryKey;
      e.add("participant")
        .version(o("WAWebModelStorageVersions").participantCreateTable(), [
          a("groupId"),
          r("senderKey"),
          r("participants"),
          r("pastParticipants"),
          r("admins"),
          r("rotateKey"),
          r("version"),
          n("participants"),
          r("deviceSyncComplete"),
          r("staleType"),
          r("superAdmins"),
        ])
        .view(function (e) {
          var t, n;
          return e.participants != null && e.admins != null
            ? e
            : babelHelpers.extends({}, e, {
                participants: (t = e.participants) != null ? t : [],
                admins: (n = e.admins) != null ? n : [],
              });
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("participant");
    }
    ((l.addTable = e), (l.getParticipantTable = s));
  },
  98,
);
