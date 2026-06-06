__d(
  "WAWebQueryPrivacyDisallowedListUtil",
  [
    "WALogger",
    "WAWebPrivacyGatingUtils",
    "WAWebQueryPrivacyDisallowedListLidJob",
    "WAWebQueryPrivacyDisallowedListMexJob",
    "WAWebQueryPrivacyDisallowedListPnJob",
    "WAWebUserPrefsMeUser",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      if (o("WAWebPrivacyGatingUtils").isMexPrivacyContactListEnabled()) {
        var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
        if (n != null)
          try {
            return await o(
              "WAWebQueryPrivacyDisallowedListMexJob",
            ).queryPrivacyDisallowedListMex(t, n.toString());
          } catch (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryPrivacyDisallowedList] mex failed ",
                    " ",
                    " -> smax",
                  ])),
                t,
                n,
              )
              .sendLogs("queryPrivacyDisallowedList-with-mex-failed");
          }
      }
      if (d())
        try {
          return await o(
            "WAWebQueryPrivacyDisallowedListLidJob",
          ).queryPrivacyDisallowedListLid(t);
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[queryPrivacyDisallowedList] lid failed ",
                  " ",
                  " -> pn",
                ])),
              t,
              e,
            )
            .sendLogs("queryPrivacyDisallowedList-with-lid-failed");
        }
      try {
        return await o(
          "WAWebQueryPrivacyDisallowedListPnJob",
        ).queryPrivacyDisallowedListPn(t);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[queryPrivacyDisallowedList] pn failed ",
                  " ",
                  "",
                ])),
              t,
              e,
            )
            .sendLogs("queryPrivacyDisallowedList-with-pn-failed"),
          e
        );
      }
    }
    function d() {
      var e = r("justknobx")._("5326");
      return !e;
    }
    ((l.queryPrivacyDisallowedList = c),
      (l.isPrivacyDisallowedListTypeLidMigrated = d));
  },
  98,
);
