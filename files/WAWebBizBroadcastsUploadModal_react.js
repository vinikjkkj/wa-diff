__d(
  "WAWebBizBroadcastsUploadModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastsErrorDialog.react",
    "WAWebBizBroadcastsFeatureEligibilityModal.react",
    "WAWebBizBroadcastsFilePicker.react",
    "WAWebBizBroadcastsFileProcessor",
    "WAWebBizBroadcastsFileTypeValidator",
    "WAWebBizBroadcastsLoadingModal.react",
    "WAWebBizBroadcastsTemplateParsingUtils",
    "WAWebBizBroadcastsTypedError",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebWdsIllMarketingMessagesIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        controlsStyle: {
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1c1uobl",
          paddingTop: "xl7twdi",
          $$css: !0,
        },
        fullWidth: { width: "xh8yej3", $$css: !0 },
      },
      p = 20;
    function _(e) {
      return e.length > p;
    }
    function f(e) {
      window.setTimeout(e, 200);
    }
    function g(t) {
      var a = t.entryPoint,
        i = t.onCancel,
        l = t.onUploadSuccess,
        u = t.showModalImage,
        p = u === void 0 ? !1 : u,
        g = o(
          "WAWebBizBroadcastsFeatureEligibilityModal.react",
        ).useMarketingMessagesEligibility();
      if (
        (d(
          function () {
            g != null &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.contactImportPromptViewed(
                { eligibility: g == null ? void 0 : g.status },
                a,
              );
          },
          [g, a],
        ),
        g == null)
      )
        return c.jsx(r("WAWebBizBroadcastsLoadingModal.react"), {
          onCancel: i,
        });
      if (g.status !== "SUCCESS")
        return c.jsx(
          o("WAWebBizBroadcastsFeatureEligibilityModal.react")
            .WAWebBizBroadcastsFeatureEligibilityModal,
          { eligibility: g, onCancel: i },
        );
      var h = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            try {
              yield o("WAWebBizBroadcastsFileProcessor").processFile(t, {
                onComplete: function (t, n) {
                  (i(null, !0),
                    f(function () {
                      if (_(n)) {
                        var e = {
                          errorType: o("WAWebBizBroadcastsTypedError").FileError
                            .TOO_MANY_ERRORS,
                          num_error_contacts: n.length,
                          num_total_contacts: t.length,
                        };
                        o("WAWebModalManager").ModalManager.open(
                          c.jsx(
                            o("WAWebBizBroadcastsErrorDialog.react")
                              .WAWebBizBroadcastsErrorDialog,
                            {
                              entryPoint: a,
                              errorType: o("WAWebBizBroadcastsTypedError")
                                .FileError.TOO_MANY_ERRORS,
                              extraAttributes: e,
                              onClose: function () {
                                (o(
                                  "WAWebBusinessBroadcastUserJourneyLogger",
                                ).BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked(
                                  e,
                                  a,
                                ),
                                  o("WAWebModalManager").ModalManager.close());
                              },
                              onContinue: function () {
                                (o(
                                  "WAWebBusinessBroadcastUserJourneyLogger",
                                ).BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptContinueClicked(
                                  e,
                                  a,
                                ),
                                  o("WAWebModalManager").ModalManager.close(),
                                  l(t, n));
                              },
                            },
                          ),
                        );
                      } else
                        (o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.importAudienceSuccess(
                          t.length,
                          n.length,
                          a,
                        ),
                          l(t, n));
                    }));
                },
                onError: function (t) {
                  if (
                    t instanceof
                    o("WAWebBizBroadcastsTypedError")
                      .WAWebBizBroadcastsTypedError
                  ) {
                    var e = o("WAWebBizBroadcastsTypedError").FileError.cast(
                      t.type,
                    );
                    if (e != null)
                      return (
                        o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.importAudienceError(
                          t.type,
                          a,
                        ),
                        i(null, !0),
                        void f(function () {
                          o("WAWebModalManager").ModalManager.open(
                            c.jsx(
                              o("WAWebBizBroadcastsErrorDialog.react")
                                .WAWebBizBroadcastsErrorDialog,
                              {
                                entryPoint: a,
                                errorType: e,
                                onClose: function () {
                                  (o(
                                    "WAWebBusinessBroadcastUserJourneyLogger",
                                  ).BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked(
                                    { errorType: e },
                                    a,
                                  ),
                                    o(
                                      "WAWebModalManager",
                                    ).ModalManager.close());
                                },
                              },
                            ),
                          );
                        })
                      );
                  }
                  throw (
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.importAudienceError(
                      t instanceof Error ? t.message : "unknown",
                      a,
                    ),
                    t
                  );
                },
              });
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error in processFile: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("audience-import");
            }
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        y = c.jsxs("div", {
          className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
          children: [
            c.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Cancel"),
              variant: "borderless",
              onPress: i,
              testid: void 0,
            }),
            c.jsx(r("WAWebBizBroadcastsFilePicker.react"), {
              entryPoint: a,
              onFileSelected: h,
              acceptTypes: o(
                "WAWebBizBroadcastsFileTypeValidator",
              ).getAcceptTypesString([
                o("WAWebBizBroadcastsFileTypeValidator").FileType.EXCEL,
                o("WAWebBizBroadcastsFileTypeValidator").FileType.CSV,
              ]),
              buttonText: s._(/*BTDS*/ "Upload file"),
              testid: void 0,
            }),
          ],
        });
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
        actions: y,
        onOverlayClick: i,
        testid: void 0,
        controlsStyle: m.controlsStyle,
        children: c.jsxs("div", {
          className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xh8yej3",
          children: [
            p &&
              c.jsx("div", {
                className: "x78zum5 xl56j7k",
                children: c.jsx(
                  o("WAWebWdsIllMarketingMessagesIcon.react")
                    .WdsIllMarketingMessagesIcon,
                  {},
                ),
              }),
            c.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              xstyle: m.fullWidth,
              children: s._(/*BTDS*/ "Reach more customers faster"),
            }),
            c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              xstyle: m.fullWidth,
              children: s._(
                /*BTDS*/ "To create a business broadcast audience, {=m1}, add your recipients, and upload the file.",
                [
                  s._implicitParam(
                    "=m1",
                    c.jsx(
                      r("WDSTextualLink.react"),
                      babelHelpers.extends(
                        {},
                        o(
                          "WAWebBizBroadcastsTemplateParsingUtils",
                        ).getTemplateLinkProps(),
                        {
                          onClick: function () {
                            o(
                              "WAWebBusinessBroadcastUserJourneyLogger",
                            ).BusinessBroadcastUserJourneyLogger.templateSaveClicked(
                              a,
                            );
                          },
                          children: s._(/*BTDS*/ "save the CSV template"),
                        },
                      ),
                    ),
                  ),
                ],
              ),
            }),
          ],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.WAWebBizBroadcastsUploadModal = g));
  },
  226,
);
