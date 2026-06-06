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
      var n,
        a,
        i = t.catalogId,
        l = t.existingPostcode,
        u = t.onCancel,
        d = t.onSuccess,
        g = r("useWAWebUnmountSignal")(),
        h = p({ state: _.NOT_STARTED }),
        y = h[0],
        C = h[1],
        b = p(l),
        v = b[0],
        S = b[1],
        R = l === v,
        L = async function () {
          if (typeof v == "string") {
            C({ state: _.IN_PROGRESS });
            try {
              var t = await o("WAWebBizVerifyPostcodeAction").verifyPostcode(
                i,
                v,
              );
              (g.aborted || C({ state: _.COMPLETED, data: t }),
                (t == null ? void 0 : t.resultCode) === "success" && d());
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
                g.aborted)
              )
                return;
              C({ state: _.FAILED });
            }
          }
        },
        E = m(function () {
          return C({ state: _.NOT_STARTED });
        }, []),
        k =
          ((n = y.data) == null ? void 0 : n.resultCode) ===
          "unserviceable_location",
        I = function (t) {
          (E(), S(t));
        },
        T = null,
        D = s._(/*BTDS*/ "Enter a valid Pincode.");
      (((a = y.data) == null ? void 0 : a.resultCode) === "invalid_postcode" ||
        typeof v != "string" ||
        v.length === 0 ||
        v.search("^[0-9]{6}$") !== 0) &&
        (T = D);
      var x = y.state === _.IN_PROGRESS,
        $ = x || T != null || R,
        P = function () {
          $ || (k ? E() : L());
        },
        N = function () {
          P();
        };
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: P,
        title: k ? null : s._(/*BTDS*/ "Change Pincode"),
        okDisabled: $,
        okSpinner: x,
        okText: k ? r("WAWebFbtCommon")("OK") : s._(/*BTDS*/ "Continue"),
        onCancel: k ? null : u,
        cancelDisabled: x,
        children: k
          ? c.jsx(o("WAWebText_DONOTUSE.react").Text, {
              as: "p",
              testid: "catalog_postcode_change_modal__unservicable-alert",
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
                  testid: "catalog_postcode_change_modal__input",
                  onChange: function (t) {
                    var e = t.text;
                    return I(e);
                  },
                  value: v,
                  managed: !0,
                  editable: !x,
                  managedError: !0,
                  selectOnMount: !0,
                  focusOnMount: !0,
                  error: T,
                  onEnter: N,
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
