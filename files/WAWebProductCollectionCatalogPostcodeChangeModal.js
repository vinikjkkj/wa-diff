__d(
  "WAWebProductCollectionCatalogPostcodeChangeModal",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebBizVerifyPostcodeAction",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebRichTextField.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = n("$InternalEnum").Mirrored([
        "NOT_STARTED",
        "COMPLETED",
        "FAILED",
        "IN_PROGRESS",
      ]),
      f = {
        infoText: {
          fontSize: "x1jchvi3",
          lineHeight: "xdod15v",
          marginBottom: "xcytdqz",
          $$css: !0,
        },
        privacyText: {
          fontSize: "x1f6kntn",
          lineHeight: "x1d3mw78",
          marginTop: "x1de0gy",
          $$css: !0,
        },
      };
    function g(t) {
      var a,
        i,
        l = t.catalogId,
        u = t.existingPostcode,
        d = t.onCancel,
        g = t.onSuccess,
        h = r("useWAWebUnmountSignal")(),
        y = p({ state: _.NOT_STARTED }),
        C = y[0],
        b = y[1],
        v = p(u),
        S = v[0],
        R = v[1],
        L = u === S,
        E = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (typeof S == "string") {
              b({ state: _.IN_PROGRESS });
              try {
                var t = yield o("WAWebBizVerifyPostcodeAction").verifyPostcode(
                  l,
                  S,
                );
                (h.aborted || b({ state: _.COMPLETED, data: t }),
                  (t == null ? void 0 : t.resultCode) === "success" && g());
              } catch (t) {
                if (
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[direct-connection] Updating postcode failed ",
                          "",
                        ])),
                      t,
                    )
                    .verbose()
                    .sendLogs("[direct-connection] Updating postcode failed"),
                  h.aborted)
                )
                  return;
                b({ state: _.FAILED });
              }
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        k = m(function () {
          return b({ state: _.NOT_STARTED });
        }, []),
        I =
          ((a = C.data) == null ? void 0 : a.resultCode) ===
          "unserviceable_location",
        T = function (t) {
          (k(), R(t));
        },
        D = null,
        x = s._(/*BTDS*/ "Enter a valid Pincode.");
      (((i = C.data) == null ? void 0 : i.resultCode) === "invalid_postcode" ||
        typeof S != "string" ||
        S.length === 0 ||
        S.search("^[0-9]{6}$") !== 0) &&
        (D = x);
      var $ = C.state === _.IN_PROGRESS,
        P = $ || D != null || L,
        N = function () {
          P || (I ? k() : E());
        },
        M = function () {
          N();
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: N,
        title: I ? null : s._(/*BTDS*/ "Change Pincode"),
        okDisabled: P,
        okSpinner: $,
        okText: I ? r("WAWebFbtCommon")("OK") : s._(/*BTDS*/ "Continue"),
        onCancel: I ? null : d,
        cancelDisabled: $,
        children: I
          ? c.jsx(o("WAWebText_DONOTUSE.react").Text, {
              as: "p",
              testid: void 0,
              children: s._(
                /*BTDS*/ "JioMart doesn't have items available in that area. You can try a different Pincode.",
              ),
            })
          : c.jsxs(c.Fragment, {
              children: [
                c.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "p",
                  xstyle: f.infoText,
                  children: s._(
                    /*BTDS*/ "To see JioMart items available in a different area, enter the area's Pincode.",
                  ),
                }),
                c.jsx(o("WAWebRichTextField.react").RichTextField, {
                  testid: void 0,
                  onChange: function (t) {
                    var e = t.text;
                    return T(e);
                  },
                  value: S,
                  managed: !0,
                  editable: !$,
                  managedError: !0,
                  selectOnMount: !0,
                  focusOnMount: !0,
                  error: D,
                  onEnter: M,
                }),
                c.jsxs(o("WAWebText.react").WAWebTextMuted, {
                  as: "p",
                  xstyle: f.privacyText,
                  children: [
                    s._(
                      /*BTDS*/ "By continuing, you agree to share your Pincode and phone number with JioMart. Only JioMart can see your Pincode.",
                    ),
                    " ",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o(
                        "WAWebFaqUrl",
                      ).getJioMartPostcodeChangeLearnMoreLink(),
                      children: s._(/*BTDS*/ "Learn more"),
                    }),
                  ],
                }),
              ],
            }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
