__d(
  "WAWebQueryOptOutListJob",
  [
    "WALogger",
    "WAWebApiOptOutList",
    "WAWebGetOptOutList",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMultiDevice",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[OptOutUserJob] fetch optoutlist using optoutlist",
          ])),
      );
      var t = await o("WAWebGetOptOutList").getOptOutList();
      if (t.errorCode != null) return t;
      if (t.dhash != null && t.dhash !== "") {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[OptOutUserJob] updating optoutlist with ",
              " contact(s)",
            ])),
          t.wids.length || 0,
        ),
          await o("WAWebUserPrefsMultiDevice").setOptOutlistHash(t.dhash),
          await o("WAWebApiOptOutList").updateOptOutList(
            t.wids.map(function (e) {
              return e.wid;
            }),
          ));
        var n = r("compactMap")(t.wids, function (e) {
          var t = e.wid;
          if (!t.isLid()) return null;
          var n = {};
          return { lid: t, data: n };
        });
        await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(n);
      } else
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[OptOutUserJob] no change in optoutlist, skip update",
            ])),
        );
      return t;
    }
    l.fetchAndUpdateOptOutList = c;
  },
  98,
);
