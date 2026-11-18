__d(
  "WAWebPersistBotProfiles",
  [
    "WAWebBotProfileCollection",
    "WAWebMetaAiThreadPresenceLatch",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
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
            }),
            yield o("WAWebMetaAiThreadPresenceLatch").latchMetaAiThreadPresence(
              e,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      var r = n != null && n !== "" ? n : null,
        a = t != null && t !== "" ? t : null,
        i = r != null ? r : a;
      if (i == null) return m(e);
      var l = a != null ? a : i;
      if (_(e, i, l)) return null;
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
    function m(e) {
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
    function p(e) {
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
    function _(e, t, n) {
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return h([{ fields: t, wid: e }]);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = e.map(function (e) {
              var t = e.fields,
                n = e.wid;
              return { fields: C(t), wid: n };
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
              }),
              yield o(
                "WAWebMetaAiThreadPresenceLatch",
              ).latchMetaAiThreadPresence(
                t.map(function (e) {
                  var t = e.fields;
                  return t;
                }),
              ));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      var n = t.name,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return n != null && n !== ""
        ? babelHelpers.extends({}, r, { name: n })
        : r;
    }
    function b(e) {
      return e != null && (e.name != null || e.lastFetchedTimeMs != null);
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return b(
            yield o("WAWebSchemaBotProfile")
              .getBotProfileTable()
              .get(e.toString()),
          );
        })),
        S.apply(this, arguments)
      );
    }
    ((l.persistBotProfiles = u),
      (l.setBotProfilePicUrls = d),
      (l.isBotPicRowInMemory = p),
      (l.mergeBotSupportFields = f),
      (l.mergeBotSupportFieldsBatch = h),
      (l.isStoredBotProfile = b),
      (l.hasStoredBotProfile = v));
  },
  98,
);
