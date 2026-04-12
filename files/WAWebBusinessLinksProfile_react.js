__d(
  "WAWebBusinessLinksProfile.react",
  [
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessProfileTextField.react",
    "WAWebFlex.react",
    "WAWebURLUtils",
    "WAWebValidationUtils",
    "WDSButton.react",
    "WDSIconIcLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        container: {
          paddingInlineStart: "xdx6fka",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function d(e) {
      return !e || e === ""
        ? e
        : !r("WAWebURLUtils").isHttps(e) && !r("WAWebURLUtils").isHttp(e)
          ? "https://" + e
          : e;
    }
    function m(e) {
      var t = e.onChange,
        n = e.onValidationChange,
        a = e.primaryWebsite,
        i = e.secondaryWebsite,
        l = u(i != null && i !== ""),
        m = l[0],
        p = l[1],
        _ = u(a != null ? a : ""),
        f = _[0],
        g = _[1],
        h = u(i != null ? i : ""),
        y = h[0],
        C = h[1],
        b = u(!1),
        v = b[0],
        S = b[1],
        R = u(!1),
        L = R[0],
        E = R[1],
        k = function (r, a) {
          g(a);
          var e = o("WAWebValidationUtils").validateURL(a);
          S(!e);
          var i = o("WAWebValidationUtils").validateURL(y);
          if ((n && n(e && i), t)) {
            var l = d(a);
            (l !== a && g(l), t(r, l));
          }
        },
        I = function (r, a) {
          C(a);
          var e = o("WAWebValidationUtils").validateURL(a);
          E(!e);
          var i = o("WAWebValidationUtils").validateURL(f);
          if ((n && n(i && e), t)) {
            var l = d(a);
            (l !== a && C(l), t(r, l));
          }
        },
        T = function () {
          var e = f != null && f.trim() !== "";
          o(
            "WAWebBusinessProfileSMBUserJourneyLogger",
          ).BusinessProfileUserJourneyLogger.clickWebsite(e);
        },
        D = function () {
          var e = f != null && f.trim() !== "";
          (o(
            "WAWebBusinessProfileSMBUserJourneyLogger",
          ).BusinessProfileUserJourneyLogger.clickAddAnotherWebsite(e),
            p(!0));
        };
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        gap: 12,
        xstyle: c.container,
        children: [
          s.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "primaryWebsite",
            icon: s.jsx(r("WDSIconIcLink.react"), { testid: void 0 }),
            label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
            value: f,
            onChange: k,
            onClick: T,
            error: v,
            errorText: o("WAWebBusinessProfileLabels").getWebsiteErrorLabel(),
          }),
          m
            ? s.jsx(r("WAWebBusinessProfileTextField.react"), {
                editable: !0,
                fieldName: "secondaryWebsite",
                label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
                value: y,
                onChange: I,
                error: L,
                errorText: o(
                  "WAWebBusinessProfileLabels",
                ).getWebsiteErrorLabel(),
              })
            : s.jsx("div", {
                className: "x17smslp xh7rcd0",
                children: s.jsx(r("WDSButton.react"), {
                  label: o(
                    "WAWebBusinessProfileLabels",
                  ).getAddWebsiteButtonLabel(),
                  variant: "borderless",
                  size: "small",
                  onPress: D,
                }),
              }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
