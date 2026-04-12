__d(
  "WAWebInAppSignupConfirmationHeader.react",
  [
    "fbt",
    "WAPromiseDelays",
    "WAWebDefaultProfilePicture.react",
    "WAWebInAppSignupConfirmation",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebSignupCTAExperiment",
    "WAWebUserPrefsMeUser",
    "WDSFlex.stylex",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        wrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
        badgeIcon: { color: "x1pse0pq", $$css: !0 },
        contentWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        fallbackPhotoBackground: { backgroundColor: "x16w0wmm", $$css: !0 },
      };
    function f(t) {
      var n = t.msg,
        a = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(n),
        i = o("WAWebSignupCTAExperiment").getSignupCTAExperiment(),
        l = p(null),
        u = l[0],
        d = l[1],
        f = p(null),
        g = f[0],
        h = f[1],
        y = r("useWAWebUnmountSignal")();
      return (
        m(
          function () {
            var e = o("WAWebUserPrefsMeUser").getMeUser();
            e != null &&
              o("WAWebProfilePicThumbCollection")
                .ProfilePicThumbCollection.find(e)
                .then(function (e) {
                  return o("WAPromiseDelays")
                    .releaseToEventLoop()
                    .then(function () {
                      return e;
                    });
                })
                .then(function (e) {
                  y.aborted || (h(e), d(e == null ? void 0 : e.img));
                })
                .catch(r("WAWebNoop"));
          },
          [y],
        ),
        o("useWAWebListener").useListener(g, "change:img", function (e) {
          d(e == null ? void 0 : e.img);
        }),
        a == null
          ? null
          : c.jsx(
              "div",
              babelHelpers.extends(
                { "data-testid": void 0 },
                (e || (e = r("stylex"))).props(
                  o("WDSFlex.stylex").wdsFlex.flexColumn,
                  _.wrapper,
                ),
                {
                  children: c.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      e.props(
                        o("WDSFlex.stylex").wdsFlex.flexRowCenter,
                        o("WDSFlex.stylex").wdsFlex.columnGapSingle,
                      ),
                      {
                        children: [
                          c.jsxs("div", {
                            className: "x1n2onr6 x1useyqa xsdox4t x2lah0s",
                            children: [
                              u != null
                                ? c.jsx("img", {
                                    className:
                                      "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r",
                                    src: u,
                                    alt: "",
                                    onError: function () {
                                      return d(null);
                                    },
                                  })
                                : c.jsx(r("WAWebDefaultProfilePicture.react"), {
                                    type: "1-1",
                                    size: 48,
                                    backgroundStyles: _.fallbackPhotoBackground,
                                  }),
                              c.jsx("div", {
                                className:
                                  "x10l6tqk x1me21xl x1l195vm x1xvr5cs x1nqnulx x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1y9zq84 xt9xd2u x3tsejo x1ahzpo1",
                                children: c.jsx(r("WDSIconIcCheck.react"), {
                                  width: 16,
                                  height: 16,
                                  iconXstyle: _.badgeIcon,
                                }),
                              }),
                            ],
                          }),
                          c.jsxs(
                            "div",
                            babelHelpers.extends(
                              {},
                              e.props(
                                o("WDSFlex.stylex").wdsFlex.flexColumn,
                                o("WDSFlex.stylex").wdsFlex.flexGrow1,
                                o("WDSFlex.stylex").wdsFlex.justifyCenter,
                                _.contentWrapper,
                              ),
                              {
                                children: [
                                  c.jsx(r("WDSText.react"), {
                                    type: "Body2Emphasized",
                                    colorName: "contentDefault",
                                    testid: void 0,
                                    children:
                                      i ===
                                      o("WAWebSignupCTAExperiment")
                                        .SignupCTAExperiment.GetOffers
                                        ? s._(/*BTDS*/ "Request successful")
                                        : s._(/*BTDS*/ "Sign up successful"),
                                  }),
                                  c.jsx(r("WDSText.react"), {
                                    type: "Body3",
                                    colorName: "contentDeemphasized",
                                    testid: void 0,
                                    children: s._(/*BTDS*/ "View details"),
                                  }),
                                ],
                              },
                            ),
                          ),
                        ],
                      },
                    ),
                  ),
                },
              ),
            )
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
