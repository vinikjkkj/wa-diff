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
      var t = e.isAgentProfileLocked,
        n = e.onChange,
        a = e.onLockedFieldClick,
        i = e.onValidationChange,
        l = e.primaryWebsite,
        m = e.secondaryWebsite,
        p = u(m != null && m !== ""),
        _ = p[0],
        f = p[1],
        g = u(l != null ? l : ""),
        h = g[0],
        y = g[1],
        C = u(m != null ? m : ""),
        b = C[0],
        v = C[1],
        S = u(!1),
        R = S[0],
        L = S[1],
        E = u(!1),
        k = E[0],
        I = E[1],
        T = function (t, r) {
          y(r);
          var e = o("WAWebValidationUtils").validateURL(r);
          L(!e);
          var a = o("WAWebValidationUtils").validateURL(b);
          if ((i && i(e && a), n)) {
            var l = d(r);
            (l !== r && y(l), n(t, l));
          }
        },
        D = function (t, r) {
          v(r);
          var e = o("WAWebValidationUtils").validateURL(r);
          I(!e);
          var a = o("WAWebValidationUtils").validateURL(h);
          if ((i && i(a && e), n)) {
            var l = d(r);
            (l !== r && v(l), n(t, l));
          }
        },
        x = function () {
          var e = h != null && h.trim() !== "";
          o(
            "WAWebBusinessProfileSMBUserJourneyLogger",
          ).BusinessProfileUserJourneyLogger.clickWebsite(e);
        },
        $ = function () {
          var e = h != null && h.trim() !== "";
          (o(
            "WAWebBusinessProfileSMBUserJourneyLogger",
          ).BusinessProfileUserJourneyLogger.clickAddAnotherWebsite(e),
            f(!0));
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
            locked: t,
            value: h,
            onChange: T,
            onClick: x,
            onLockedClick:
              t === !0 && a != null
                ? function () {
                    return a(o("WAWebBusinessProfileLabels").getWebsiteLabel());
                  }
                : void 0,
            error: R,
            errorText: o("WAWebBusinessProfileLabels").getWebsiteErrorLabel(),
          }),
          _
            ? s.jsx(r("WAWebBusinessProfileTextField.react"), {
                editable: !0,
                fieldName: "secondaryWebsite",
                label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
                locked: t,
                value: b,
                onChange: D,
                onLockedClick:
                  t === !0 && a != null
                    ? function () {
                        return a(
                          o("WAWebBusinessProfileLabels").getWebsiteLabel(),
                        );
                      }
                    : void 0,
                error: k,
                errorText: o(
                  "WAWebBusinessProfileLabels",
                ).getWebsiteErrorLabel(),
              })
            : null,
          !_ && t !== !0
            ? s.jsx("div", {
                className: "x17smslp xh7rcd0",
                children: s.jsx(r("WDSButton.react"), {
                  label: o(
                    "WAWebBusinessProfileLabels",
                  ).getAddWebsiteButtonLabel(),
                  variant: "borderless",
                  size: "small",
                  onPress: $,
                }),
              })
            : null,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
