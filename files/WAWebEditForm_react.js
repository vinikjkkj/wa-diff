__d(
  "WAWebEditForm.react",
  [
    "fbt",
    "WALogger",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileEdit",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebButton.react",
    "WAWebDrawerSection.react",
    "WAWebEditFormEditFieldsForm.react",
    "WAWebEditFormLogEvents",
    "WAWebEditFormTypes",
    "WAWebEditFormUiErrorUtils",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useState,
      g = {
        loadingSpinner: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "x5yr21d",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        retryButton: { height: "xc9qbxq", $$css: !0 },
      },
      h = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            t = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.get(e);
          t && t.markStale();
          var n = yield o(
            "WAWebBusinessProfileCollection",
          ).BusinessProfileCollection.find(e);
          return n.serialize();
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      y = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            t = yield o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.update(e),
            n = Array.isArray(t) ? t[0] : t;
          return n.serialize();
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function C(t) {
      var a = t.entryPoint,
        i = t.isRefreshed,
        l = f(o("WAWebEditFormTypes").LoadType.PENDING),
        c = l[0],
        m = l[1],
        C = f(),
        b = C[0],
        v = C[1],
        S = _(function () {
          return Math.floor(2147483648 * Math.random()).toString();
        }, []),
        R = function () {
          (m(o("WAWebEditFormTypes").LoadType.PENDING),
            h()
              .then(function (e) {
                (v(e),
                  m(o("WAWebEditFormTypes").LoadType.DONE),
                  o("WAWebEditFormLogEvents").logProfileOpen(e, S),
                  o(
                    "WAWebBusinessProfileSMBUserJourneyLogger",
                  ).BusinessProfileUserJourneyLogger.viewProfile(a));
              })
              .catch(function () {
                m(o("WAWebEditFormTypes").LoadType.ERROR);
              }));
        };
      return (
        p(function () {
          R();
        }, []),
        c === o("WAWebEditFormTypes").LoadType.PENDING
          ? d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  g.loadingSpinner,
                  o("WAWebUISpacing").uiPadding.all0,
                ),
                {
                  children: d.jsx(o("WAWebSpinner.react").Spinner, {
                    color: "default",
                    size: 24,
                    stroke: 6,
                  }),
                },
              ),
            )
          : c === o("WAWebEditFormTypes").LoadType.ERROR
            ? d.jsx(r("WAWebDrawerSection.react"), {
                title: s._(/*BTDS*/ "Business information"),
                theme: "refresh",
                animation: !1,
                children: d.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: [
                    d.jsx(r("WAWebFlexItem.react"), {
                      children: s._(/*BTDS*/ "Something went wrong"),
                    }),
                    d.jsx(r("WAWebFlexItem.react"), {
                      xstyle: [
                        g.retryButton,
                        o("WAWebUISpacing").uiMargin.start16,
                      ],
                      children: d.jsx(o("WAWebButton.react").Button, {
                        onClick: R,
                        type: "simplified",
                        children: s._(/*BTDS*/ "Retry"),
                      }),
                    }),
                  ],
                }),
              })
            : c === o("WAWebEditFormTypes").LoadType.DONE && b
              ? d.jsx(r("WAWebEditFormEditFieldsForm.react"), {
                  isRefreshed: i,
                  sessionId: S,
                  businessProfile: b,
                  saveBusinessProfile: (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        try {
                          yield o(
                            "WAWebBusinessProfileEdit",
                          ).editBusinessProfile(t);
                        } catch (t) {
                          throw (
                            o("WAWebEditFormUiErrorUtils").showError(
                              r("fbs")
                                ._(
                                  /*BTDS*/ "An error occurred while saving. Please try again.",
                                )
                                .toString(),
                            ),
                            o("WAWebUtilsLogQplEvents").qplEndProfileSave(3),
                            o("WALogger")
                              .WARN(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "business_profile:edit_form save failed",
                                  ])),
                              )
                              .sendLogs(
                                "businessProfile edit handled server error - " +
                                  t.status,
                              ),
                            t
                          );
                        }
                        try {
                          var n = yield y();
                          return (
                            v(n),
                            o("WAWebUtilsLogQplEvents").qplEndProfileSave(2),
                            n
                          );
                        } catch (e) {
                          throw (
                            o("WAWebEditFormUiErrorUtils").showError(
                              r("fbs")
                                ._(/*BTDS*/ "Something went wrong")
                                .toString(),
                            ),
                            o("WAWebUtilsLogQplEvents").qplEndProfileSave(3),
                            e
                          );
                        }
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                })
              : null
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
