__d(
  "WAWebPersistBotProfiles",
  [
    "WAWebBotProfileCollection",
    "WAWebMetaAiThreadPresenceLatch",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["commands", "id", "prompts"],
      s = ["name"];
    async function u(t) {
      (await o("WAWebSchemaBotProfile")
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
        }),
        await o("WAWebMetaAiThreadPresenceLatch").latchMetaAiThreadPresence(t));
    }
    function c(e, t, n) {
      var r = n != null && n !== "" ? n : null,
        a = t != null && t !== "" ? t : null,
        i = r != null ? r : a;
      if (i == null) return d(e);
      var l = a != null ? a : i;
      if (p(e, i, l)) return null;
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
    function d(e) {
      var t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
        e,
      );
      if (
        t == null ||
        t.tag !== "bot" ||
        (t.eurl == null &&
          t.previewEurl == null &&
          t.previewDirectPath == null &&
          t.fullDirectPath == null)
      )
        return null;
      var n = Date.now();
      return (
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(e)
          .set({
            eurl: null,
            previewEurl: null,
            previewDirectPath: null,
            fullDirectPath: null,
            filehash: null,
            stale: !1,
            timestamp: n,
          }),
        {
          id: e.toString(),
          eurl: null,
          previewEurl: null,
          previewDirectPath: null,
          fullDirectPath: null,
          filehash: null,
          tag: "bot",
          timestamp: n,
        }
      );
    }
    function m(e) {
      var t,
        n,
        r,
        a,
        i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
          o("WAWebWidFactory").createWid(e.id),
        );
      return (
        i != null &&
        ((t = i.eurl) != null ? t : null) ===
          ((n = e.eurl) != null ? n : null) &&
        ((r = i.previewEurl) != null ? r : null) ===
          ((a = e.previewEurl) != null ? a : null)
      );
    }
    function p(e, t, n) {
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
    async function _(e, t) {
      return f([{ fields: t, wid: e }]);
    }
    async function f(e) {
      if (e.length !== 0) {
        var t = e.map(function (e) {
          var t = e.fields,
            n = e.wid;
          return { fields: g(t), wid: n };
        });
        (await o("WAWebSchemaBotProfile")
          .getBotProfileTable()
          .bulkCreateOrMerge(
            t.map(function (e) {
              var t = e.fields,
                n = e.wid;
              return babelHelpers.extends({ id: n.toString() }, t);
            }),
          ),
          t.forEach(function (e) {
            var t = e.fields,
              n = e.wid;
            return o("WAWebBotProfileCollection").BotProfileCollection.gadd(
              babelHelpers.extends({ id: n }, t),
            );
          }),
          await o("WAWebMetaAiThreadPresenceLatch").latchMetaAiThreadPresence(
            t.map(function (e) {
              var t = e.fields;
              return t;
            }),
          ));
      }
    }
    function g(e) {
      var t = e.name,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return t != null && t !== ""
        ? babelHelpers.extends({}, n, { name: t })
        : n;
    }
    function h(e) {
      return e != null && (e.name != null || e.lastFetchedTimeMs != null);
    }
    async function y(e) {
      return h(
        await o("WAWebSchemaBotProfile").getBotProfileTable().get(e.toString()),
      );
    }
    ((l.persistBotProfiles = u),
      (l.setBotProfilePicUrls = c),
      (l.isBotPicRowInMemory = m),
      (l.mergeBotSupportFields = _),
      (l.mergeBotSupportFieldsBatch = f),
      (l.isStoredBotProfile = h),
      (l.hasStoredBotProfile = y));
  },
  98,
);
