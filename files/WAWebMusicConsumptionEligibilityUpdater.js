__d(
  "WAWebMusicConsumptionEligibilityUpdater",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebL10NCountryCodes",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
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
      var l = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (l != null) {
        var u = o("WAWebAsISOCountryCode").asISOCountryCode(
          o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(l.user),
        );
        if (u != null) {
          var d = n.findIndex(function (e) {
            var t;
            return (
              ((t = e.embeddedContent) == null ? void 0 : t.embeddedMusic) !=
              null
            );
          });
          if (d !== -1) {
            var m = n[d],
              p = (a = m.embeddedContent) == null ? void 0 : a.embeddedMusic;
            if (p != null) {
              var _ = p.countryBlocklist,
                f = p.musicContentMediaId;
              if (f != null)
                try {
                  var g = await s.load(),
                    h = g.fetchMusicConsumptionAvailability,
                    y = await h(f, u),
                    C =
                      _ != null
                        ? o("WAWebMusicParsingUtils").mapToCountryCode(_)
                        : new Set(),
                    b = C.has(u);
                  if (y !== b) return;
                  (y ? C.delete(u) : C.add(u),
                    await c({
                      currentAnnotations: n,
                      embeddedMusicIndex: d,
                      msgKey: t,
                      updatedCountryBlocklist: C,
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
