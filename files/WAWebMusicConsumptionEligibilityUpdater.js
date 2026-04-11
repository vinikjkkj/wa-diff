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
                      (y ? C.delete(u) : C.add(u), yield d(t, n, c, C));
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
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a;
            if (!(n < 0 || n >= t.length)) {
              var i = t[n],
                l = (a = i.embeddedContent) == null ? void 0 : a.embeddedMusic;
              if (l != null) {
                var s = o("WAWebMusicParsingUtils").countryCodeSetToBuffer(r),
                  u = [].concat(t);
                u[n] = babelHelpers.extends({}, i, {
                  embeddedContent: babelHelpers.extends({}, i.embeddedContent, {
                    embeddedMusic: babelHelpers.extends({}, l, {
                      countryBlocklist: s,
                    }),
                  }),
                });
                var c = o("WAWebSchemaMessage").getMessageTable();
                yield c.bulkMergeOnly([
                  { id: e.toString(), interactiveAnnotations: u },
                ]);
                var d = [];
                for (var m of r) d.push(m);
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateMusicBlocklist",
                  { countryBlocklist: d, msgKey: e.toString() },
                );
              }
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.updateMusicConsumptionAvailability = u;
  },
  98,
);
