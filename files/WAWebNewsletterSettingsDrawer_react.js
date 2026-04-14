__d(
  "WAWebNewsletterSettingsDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEditNewsletterMetadataAction",
    "WAWebNewsletterEmojiSettings.react",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c.useCallback;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            return yield o(
              "WAWebEditNewsletterMetadataAction",
            ).editNewsletterMetadataAction(
              t,
              { editReactionCodesSetting: !0 },
              { reactionCodesSetting: n },
            );
          } catch (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleReactionCodesSettingChange] reaction settings err ",
                    "",
                  ])),
                t.id,
              )
              .catching(r("getErrorSafe")(n))
              .tags("reactions", "newsletter")
              .sendLogs("newsletter-edit-reaction-settings-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    var f = {
      body: {
        flexShrink: "x2lah0s",
        flexGrow: "x1iyjqo2",
        flexBasis: "xdl72j9",
        paddingBottom: "x1w3bhph",
        $$css: !0,
      },
      drawer: { backgroundColor: "x1280gxy", $$css: !0 },
    };
    function g(e) {
      var t,
        a = e.adminFunnelLogger,
        i = e.isFirstLevel,
        l = e.newsletter,
        c = e.onBack,
        _ = e.ref,
        g = m(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n =
                    (t = o(
                      "WAWebCommonNewsletterEnums",
                    ).NewsletterReactionCodesSetting.cast(e)) != null
                      ? t
                      : o("WAWebCommonNewsletterEnums")
                          .NewsletterReactionCodesSetting.Basic;
                (a.logReactionSetting(n), yield p(l, n));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [l, a],
        ),
        h = o("useWAWebModelValues").useOptionalModelValues(
          l == null ? void 0 : l.newsletterMetadata,
          ["reactionCodesSetting"],
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "edit_newsletter_description",
        function () {
          return c();
        },
      );
      var y = i === !0 ? { onCancel: c } : { onBack: c };
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: _,
        theme: "striped",
        testid: void 0,
        xstyle: f.drawer,
        children: [
          d.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              {
                title: s._(/*BTDS*/ "Channel settings"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              },
              y,
              { rtlFixIfOnDarwin: !0, testid: void 0 },
            ),
          ),
          d.jsx(r("WAWebDrawerBody.react"), {
            children: d.jsx(
              "section",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props([
                  f.body,
                  o("WAWebUISpacing").uiMargin.horiz30,
                  o("WAWebUISpacing").uiMargin.vert30,
                ]),
                {
                  "data-testid": void 0,
                  children: d.jsx(r("WAWebNewsletterEmojiSettings.react"), {
                    onClick: g,
                    currentlySelected:
                      (t = h == null ? void 0 : h.reactionCodesSetting) != null
                        ? t
                        : o("WAWebCommonNewsletterEnums")
                            .NewsletterReactionCodesSetting.Basic,
                  }),
                },
              ),
            ),
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
