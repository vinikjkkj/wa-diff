__d(
  "WAWebBizBroadcastsErrorDialog.react",
  [
    "fbt",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBizBroadcastsTemplateParsingUtils",
    "WAWebBizBroadcastsTypedError",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModal.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        centeredButtonContent: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        controlsStyle: {
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1c1uobl",
          paddingTop: "xl7twdi",
          $$css: !0,
        },
        title: { width: "xh8yej3", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.errorType,
        r;
      return (
        t[0] !== n
          ? ((r =
              n === o("WAWebBizBroadcastsTypedError").FileError.TYPE
                ? s._(/*BTDS*/ "File not supported")
                : n === o("WAWebBizBroadcastsTypedError").FileError.FORMAT
                  ? s._(/*BTDS*/ "File format error")
                  : n ===
                      o("WAWebBizBroadcastsTypedError").FileError.TOO_MANY_ITEMS
                    ? s._(/*BTDS*/ "File exceeds limit")
                    : n ===
                        o("WAWebBizBroadcastsTypedError").FileError
                          .TOO_MANY_ERRORS
                      ? s._(/*BTDS*/ "Review file errors")
                      : n ===
                          o("WAWebBizBroadcastsTypedError").AudienceError
                            .TOO_SMALL
                        ? s._(/*BTDS*/ "Add more audience recipients")
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                n,
                            );
                          })()),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      if (t[0] !== e) {
        var a = e.entryPoint,
          i = e.errorType;
        ((n =
          i === o("WAWebBizBroadcastsTypedError").FileError.TYPE
            ? s._(/*BTDS*/ "You can upload .csv or .xlsx files only.")
            : i === o("WAWebBizBroadcastsTypedError").FileError.FORMAT
              ? s._(
                  /*BTDS*/ "Your file is missing one or more required columns. You can download the template to see the required format.",
                )
              : i === o("WAWebBizBroadcastsTypedError").FileError.TOO_MANY_ITEMS
                ? _(o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit())
                : i ===
                    o("WAWebBizBroadcastsTypedError").FileError.TOO_MANY_ERRORS
                  ? s._(
                      /*BTDS*/ "Your file has over 20 errors. You can still upload it, but recipients with errors won\u2019t be imported. Consider reviewing your file for mistakes and saving the {=m2} for guidance.",
                      [
                        s._implicitParam(
                          "=m2",
                          u.jsx(
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
                                  ).BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptTemplateSaveClicked(
                                    {
                                      errorType: o(
                                        "WAWebBizBroadcastsTypedError",
                                      ).FileError.TOO_MANY_ERRORS,
                                    },
                                    a,
                                  );
                                },
                                children: s._(/*BTDS*/ "CSV template"),
                              },
                            ),
                          ),
                        ),
                      ],
                    )
                  : i ===
                      o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL
                    ? s._(
                        /*BTDS*/ "At least two recipients are required to create an audience.",
                      )
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            i,
                        );
                      })()),
          (t[0] = e),
          (t[1] = n));
      } else n = t[1];
      return n;
    }
    function _(e) {
      return s._(
        /*BTDS*/ '_j{"*":"You can add up to {number_of_recipients} recipients to an audience.","_1":"You can add up to 1 recipient to an audience."}',
        [s._plural(e, "number_of_recipients")],
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.entryPoint,
        a = e.errorType,
        i = e.extraAttributes,
        l = e.onClose,
        c = e.onContinue,
        m = i === void 0 ? null : i,
        p;
      t[0] !== n || t[1] !== a || t[2] !== m
        ? ((p = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptTemplateSaveClicked(
              babelHelpers.extends({ errorType: a }, m),
              n,
            );
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = m),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      return (
        t[4] !== n ||
        t[5] !== a ||
        t[6] !== m ||
        t[7] !== _ ||
        t[8] !== l ||
        t[9] !== c
          ? ((f =
              a === o("WAWebBizBroadcastsTypedError").FileError.TOO_MANY_ERRORS
                ? u.jsxs("div", {
                    className: "x78zum5 x1qughib xh8yej3",
                    children: [
                      u.jsx(r("WDSButton.react"), {
                        label: s._(/*BTDS*/ "Save template"),
                        onPress: _,
                        variant: "outline",
                        xstyle: d.centeredButtonContent,
                        testid: void 0,
                        linkProps: o(
                          "WAWebBizBroadcastsTemplateParsingUtils",
                        ).getTemplateLinkPropsWithURL(),
                      }),
                      u.jsxs("div", {
                        className: "x78zum5 x1qvou4u x1s70e7g",
                        children: [
                          u.jsx(r("WDSButton.react"), {
                            label: s._(/*BTDS*/ "Cancel"),
                            variant: "borderless",
                            onPress: l,
                            testid: void 0,
                          }),
                          u.jsx(r("WDSButton.react"), {
                            label: s._(/*BTDS*/ "Continue upload"),
                            variant: "filled",
                            onPress: c,
                            testid: void 0,
                          }),
                        ],
                      }),
                    ],
                  })
                : a ===
                    o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL
                  ? u.jsxs("div", {
                      className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
                      children: [
                        u.jsx(r("WDSButton.react"), {
                          label: s._(/*BTDS*/ "Close"),
                          variant: "filled",
                          onPress: function () {
                            (o(
                              "WAWebBusinessBroadcastUserJourneyLogger",
                            ).BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked(
                              babelHelpers.extends({ errorType: a }, m),
                              n,
                            ),
                              l());
                          },
                          testid: void 0,
                        }),
                        ",",
                      ],
                    })
                  : u.jsxs("div", {
                      className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
                      children: [
                        u.jsx(r("WDSButton.react"), {
                          label: s._(/*BTDS*/ "Cancel"),
                          variant: "borderless",
                          onPress: l,
                          testid: void 0,
                        }),
                        u.jsx(r("WDSButton.react"), {
                          label: s._(/*BTDS*/ "Download template"),
                          onPress: _,
                          variant: "filled",
                          xstyle: d.centeredButtonContent,
                          testid: void 0,
                          linkProps: o(
                            "WAWebBizBroadcastsTemplateParsingUtils",
                          ).getTemplateLinkPropsWithURL(),
                        }),
                      ],
                    })),
            (t[4] = n),
            (t[5] = a),
            (t[6] = m),
            (t[7] = _),
            (t[8] = l),
            (t[9] = c),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    function g(e) {
      var t = e.entryPoint,
        n = e.errorType,
        a = e.extraAttributes,
        i = a === void 0 ? null : a,
        l = e.onClose,
        s = e.onContinue,
        _ =
          n === o("WAWebBizBroadcastsTypedError").FileError.TOO_MANY_ERRORS
            ? o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal
            : o("WAWebModal.react").ModalTheme.Small;
      return (
        c(
          function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptViewed(
              babelHelpers.extends({ errorType: n }, i),
              t,
            );
          },
          [n],
        ),
        u.jsx(o("WAWebModal.react").Modal, {
          type: _,
          actions: u.jsx(f, {
            entryPoint: t,
            errorType: n,
            extraAttributes: i,
            onClose: l,
            onContinue: s,
          }),
          onOverlayClick: l,
          testid: void 0,
          controlsStyle: d.controlsStyle,
          children: u.jsxs("div", {
            className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xh8yej3",
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Headline2",
                colorName: "contentDefault",
                xstyle: d.title,
                children: u.jsx(m, { errorType: n }),
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: u.jsx(p, { entryPoint: t, errorType: n }),
              }),
            ],
          }),
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.WAWebBizBroadcastsErrorDialog = g));
  },
  226,
);
