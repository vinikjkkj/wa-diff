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
                  (y ? C.delete(u) : C.add(u), await c(t, n, d, C));
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
    async function c(e, t, n, r) {
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
          await c.bulkMergeOnly([
            { id: e.toString(), interactiveAnnotations: u },
          ]);
          var d = [];
          for (var m of r) d.push(m);
          o("WAWebBackendApi").frontendFireAndForget("updateMusicBlocklist", {
            countryBlocklist: d,
            msgKey: e.toString(),
          });
        }
      }
    }
    l.updateMusicConsumptionAvailability = u;
  },
  98,
);
