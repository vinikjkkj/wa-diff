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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(20),
        i = e.adminFunnelLogger,
        l = e.isFirstLevel,
        c = e.newsletter,
        m = e.onBack,
        _ = e.ref,
        g;
      a[0] !== i || a[1] !== c
        ? ((g = (function () {
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
                (i.logReactionSetting(n), yield p(c, n));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[0] = i),
          (a[1] = c),
          (a[2] = g))
        : (g = a[2]);
      var h = g,
        y;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["reactionCodesSetting"]), (a[3] = y))
        : (y = a[3]);
      var C = o("useWAWebModelValues").useOptionalModelValues(
          c == null ? void 0 : c.newsletterMetadata,
          y,
        ),
        b;
      (a[4] !== m
        ? ((b = function () {
            return m();
          }),
          (a[4] = m),
          (a[5] = b))
        : (b = a[5]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "edit_newsletter_description",
          b,
        ));
      var v;
      a[6] !== l || a[7] !== m
        ? ((v = l === !0 ? { onCancel: m } : { onBack: m }),
          (a[6] = l),
          (a[7] = m),
          (a[8] = v))
        : (v = a[8]);
      var S = v,
        R;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Channel settings")), (a[9] = R))
        : (R = a[9]);
      var L;
      a[10] !== S
        ? ((L = d.jsx(
            o("WAWebDrawerHeader.react").DrawerHeader,
            babelHelpers.extends(
              {
                title: R,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              },
              S,
              { rtlFixIfOnDarwin: !0, testid: void 0 },
            ),
          )),
          (a[10] = S),
          (a[11] = L))
        : (L = a[11]);
      var E;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (u || (u = r("stylex"))).props([
            f.body,
            o("WAWebUISpacing").uiMargin.horiz30,
            o("WAWebUISpacing").uiMargin.vert30,
          ])),
          (a[12] = E))
        : (E = a[12]);
      var k =
          (t = C == null ? void 0 : C.reactionCodesSetting) != null
            ? t
            : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
                .Basic,
        I;
      a[13] !== h || a[14] !== k
        ? ((I = d.jsx(r("WAWebDrawerBody.react"), {
            children: d.jsx(
              "section",
              babelHelpers.extends({}, E, {
                "data-testid": void 0,
                children: d.jsx(r("WAWebNewsletterEmojiSettings.react"), {
                  onClick: h,
                  currentlySelected: k,
                }),
              }),
            ),
          })),
          (a[13] = h),
          (a[14] = k),
          (a[15] = I))
        : (I = a[15]);
      var T;
      return (
        a[16] !== _ || a[17] !== L || a[18] !== I
          ? ((T = d.jsxs(r("WAWebDrawer.react"), {
              ref: _,
              theme: "striped",
              testid: void 0,
              xstyle: f.drawer,
              children: [L, I],
            })),
            (a[16] = _),
            (a[17] = L),
            (a[18] = I),
            (a[19] = T))
          : (T = a[19]),
        T
      );
    }
    l.default = g;
  },
  226,
);
