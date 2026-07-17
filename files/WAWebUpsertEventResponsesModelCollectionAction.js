__d(
  "WAWebUpsertEventResponsesModelCollectionAction",
  [
    "WAAckLevel",
    "WAWebEventResponseCollection",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebPrepareEventResponsesToUpsert",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "compactMap",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = r("compactMap")(t || [], function (e) {
          return o("WAWebEventResponseCollection").EventResponseCollection.get(
            e,
          );
        }),
        a = [],
        i = o("WAWebPrepareEventResponsesToUpsert").getNewestEventResponses(e);
      (i.forEach(function (e) {
        var t = r("nullthrows")(o("WAWebMsgGetters").getSender(e)),
          i = o("WAWebEventResponseCollection")
            .EventResponseCollection.byParent(e.parentMsgKey)
            .findFirst(function (e) {
              var n = e.sender;
              return r("WAWebWid").equals.apply(
                r("WAWebWid"),
                o("WAWebLidMigrationUtils").toCommonAddressingMode(n, t),
              );
            });
        (i != null && !i.id.equals(e.id) && n.push(i),
          a.push(
            o("WAWebEventResponseCollection").createEventResponseModel(
              babelHelpers.extends({}, e, {
                isSendFailure:
                  e.ack != null &&
                  e.ack < o("WAAckLevel").ACK.CLOCK &&
                  o("WAWebUserPrefsMeUser").isMeAccount(t),
              }),
            ),
          ));
      }),
        a.length > 0 &&
          o("WAWebEventResponseCollection").EventResponseCollection.add(a, {
            merge: !0,
          }),
        n.length > 0 &&
          o("WAWebEventResponseCollection").EventResponseCollection.remove(n));
    }
    l.upsertEventResponsesModelCollection = e;
  },
  98,
);
