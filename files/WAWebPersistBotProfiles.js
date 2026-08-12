__d(
  "WAWebPersistBotProfiles",
  [
    "WAWebBotProfileCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["commands", "id", "prompts"],
      s = ["name"];
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .bulkCreateOrMerge(
              t.map(function (t) {
                var n = t.commands,
                  r = t.id,
                  o = t.prompts,
                  a = babelHelpers.objectWithoutPropertiesLoose(t, e);
                return babelHelpers.extends(
                  {
                    id: r.toString(),
                    prompts: JSON.stringify(o),
                    commands: JSON.stringify(n),
                  },
                  a,
                );
              }),
            ),
            t.forEach(function (e) {
              return o("WAWebBotProfileCollection").BotProfileCollection.gadd(
                babelHelpers.extends({ id: e.id }, e),
              );
            }));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      var r = n != null && n !== "" ? n : null,
        a = t != null && t !== "" ? t : null,
        i = r != null ? r : a;
      if (i == null) return null;
      var l = a != null ? a : i;
      if (m(e, i, l)) return null;
      var s = Date.now();
      return (
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(e)
          .set({
            eurl: i,
            previewEurl: l,
            previewDirectPath: null,
            fullDirectPath: null,
            filehash: null,
            tag: "bot",
            stale: !1,
            timestamp: s,
          }),
        {
          id: e.toString(),
          eurl: i,
          previewEurl: l,
          previewDirectPath: null,
          fullDirectPath: null,
          filehash: null,
          tag: "bot",
          timestamp: s,
        }
      );
    }
    function m(e, t, n) {
      var r = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
        e,
      );
      return (
        r != null &&
        r.eurl === t &&
        r.previewEurl === n &&
        r.previewDirectPath == null &&
        r.fullDirectPath == null &&
        r.filehash == null
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.name,
            r = babelHelpers.objectWithoutPropertiesLoose(t, s),
            a =
              n != null && n !== ""
                ? babelHelpers.extends({}, r, { name: n })
                : r;
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .bulkCreateOrMerge([babelHelpers.extends({ id: e.toString() }, a)]),
            o("WAWebBotProfileCollection").BotProfileCollection.gadd(
              babelHelpers.extends({ id: e }, a),
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return o("WAWebBotProfileCollection").BotProfileCollection.get(e) != null;
    }
    ((l.persistBotProfiles = u),
      (l.setBotProfilePicUrls = d),
      (l.mergeBotSupportFields = p),
      (l.isBotProfileCached = f));
  },
  98,
);
