__d(
  "WAWebMusicConsumptionEligibilityUpdater",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebMusicViewerCountry",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebFetchMusicConsumptionAvailability",
      ).__setRef("WAWebMusicConsumptionEligibilityUpdater");
    async function u(t, n, r) {
      var a;
      if (r != null) {
        var i = r;
        if (
          o("WATimeUtils").unixTime() - i <=
          o("WAWebMusicGatingUtils")
            .MIN_SECONDS_BETWEEN_MUSIC_CONSUMPTION_AVAILABILITY_CHECK
        )
          return;
      }
      var l = o("WAWebMusicViewerCountry").getMusicViewerCountry();
      if (l != null) {
        var u = n.findIndex(function (e) {
          var t;
          return (
            ((t = e.embeddedContent) == null ? void 0 : t.embeddedMusic) != null
          );
        });
        if (u !== -1) {
          var d = n[u],
            m = (a = d.embeddedContent) == null ? void 0 : a.embeddedMusic;
          if (m != null) {
            var p = m.countryBlocklist,
              _ = m.musicContentMediaId;
            if (_ != null)
              try {
                var f = await s.load(),
                  g = f.fetchMusicConsumptionAvailability,
                  h = await g(_, l),
                  y =
                    p != null
                      ? o("WAWebMusicParsingUtils").mapToCountryCode(p)
                      : new Set(),
                  C = y.has(l);
                if (h !== C) return;
                (h ? y.delete(l) : y.add(l),
                  await c({
                    currentAnnotations: n,
                    embeddedMusicIndex: u,
                    msgKey: t,
                    updatedCountryBlocklist: y,
                  }));
              } catch (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to update music consumption availability",
                    ])),
                );
              }
          }
        }
      }
    }
    async function c(e) {
      var t,
        n = e.currentAnnotations,
        r = e.embeddedMusicIndex,
        a = e.msgKey,
        i = e.updatedCountryBlocklist;
      if (!(r < 0 || r >= n.length)) {
        var l = n[r],
          s = (t = l.embeddedContent) == null ? void 0 : t.embeddedMusic;
        if (s != null) {
          var u = o("WAWebMusicParsingUtils").countryCodeSetToBuffer(i),
            c = [].concat(n);
          c[r] = babelHelpers.extends({}, l, {
            embeddedContent: babelHelpers.extends({}, l.embeddedContent, {
              embeddedMusic: babelHelpers.extends({}, s, {
                countryBlocklist: u,
              }),
            }),
          });
          var d = o("WAWebSchemaMessage").getMessageTable();
          await d.bulkMergeOnly([
            { id: a.toString(), interactiveAnnotations: c },
          ]);
          var m = [];
          for (var p of i) m.push(p);
          o("WAWebBackendApi").frontendFireAndForget("updateMusicBlocklist", {
            countryBlocklist: m,
            msgKey: a.toString(),
          });
        }
      }
    }
    l.updateMusicConsumptionAvailability = u;
  },
  98,
);
