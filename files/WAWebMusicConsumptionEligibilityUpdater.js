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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebFetchMusicConsumptionAvailability",
      ).__setRef("WAWebMusicConsumptionEligibilityUpdater");
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
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
              var c = n.findIndex(function (e) {
                var t;
                return (
                  ((t = e.embeddedContent) == null
                    ? void 0
                    : t.embeddedMusic) != null
                );
              });
              if (c !== -1) {
                var m = n[c],
                  p =
                    (a = m.embeddedContent) == null ? void 0 : a.embeddedMusic;
                if (p != null) {
                  var _ = p.countryBlocklist,
                    f = p.musicContentMediaId;
                  if (f != null)
                    try {
                      var g = yield s.load(),
                        h = g.fetchMusicConsumptionAvailability,
                        y = yield h(f, u),
                        C =
                          _ != null
                            ? o("WAWebMusicParsingUtils").mapToCountryCode(_)
                            : new Set(),
                        b = C.has(u);
                      if (y !== b) return;
                      (y ? C.delete(u) : C.add(u),
                        yield d({
                          currentAnnotations: n,
                          embeddedMusicIndex: c,
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              yield d.bulkMergeOnly([
                { id: a.toString(), interactiveAnnotations: c },
              ]);
              var m = [];
              for (var p of i) m.push(p);
              o("WAWebBackendApi").frontendFireAndForget(
                "updateMusicBlocklist",
                { countryBlocklist: m, msgKey: a.toString() },
              );
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.updateMusicConsumptionAvailability = u;
  },
  98,
);
