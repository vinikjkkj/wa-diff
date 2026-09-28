__d(
  "WAWebPersistBotProfiles",
  [
    "WAWebBotProfileCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["name"],
      s = ["commands", "id", "prompts"];
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .bulkCreateOrMerge(
              e.map(function (e) {
                var t = e.commands,
                  n = e.id,
                  r = e.prompts,
                  o = babelHelpers.objectWithoutPropertiesLoose(e, s);
                return babelHelpers.extends(
                  {
                    id: n.toString(),
                    prompts: JSON.stringify(r),
                    commands: JSON.stringify(t),
                  },
                  o,
                );
              }),
            ),
            e.forEach(function (e) {
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
          return f([{ fields: t, wid: e }]);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = e.map(function (e) {
              var t = e.fields,
                n = e.wid;
              return { fields: h(t), wid: n };
            });
            (yield o("WAWebSchemaBotProfile")
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
              }));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      var n = t.name,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return n != null && n !== ""
        ? babelHelpers.extends({}, r, { name: n })
        : r;
    }
    function y(e) {
      return o("WAWebBotProfileCollection").BotProfileCollection.get(e) != null;
    }
    ((l.persistBotProfiles = u),
      (l.setBotProfilePicUrls = d),
      (l.mergeBotSupportFields = p),
      (l.mergeBotSupportFieldsBatch = f),
      (l.isBotProfileCached = y));
  },
  98,
);
