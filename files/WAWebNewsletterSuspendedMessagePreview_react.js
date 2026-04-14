__d(
  "WAWebNewsletterSuspendedMessagePreview.react",
  [
    "fbt",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebSettingsBlockedIcon.react",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = e.isGeosuspended,
        r = m(s._(/*BTDS*/ "This channel is no longer available")),
        a = r[0],
        i = r[1];
      return (
        d(
          function () {
            function e() {
              return r.apply(this, arguments);
            }
            function r() {
              return (
                (r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (t) {
                      var e = yield o(
                        "WAWebCommonNewsletterIntegrityStrings",
                      ).getGeosuspendedInYourCountryString();
                      i(e);
                    }
                  },
                )),
                r.apply(this, arguments)
              );
            }
            e();
          },
          [t],
        ),
        u.jsxs("span", {
          title: a,
          className: "x1k4tb9n",
          "data-testid": void 0,
          children: [
            u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
              width: 14,
              height: 14,
              displayInline: !0,
              directional: !0,
              xstyle: [
                o("WAWebUISpacing").uiMargin.top3,
                o("WAWebUISpacing").uiMargin.end3,
              ],
            }),
            a,
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
