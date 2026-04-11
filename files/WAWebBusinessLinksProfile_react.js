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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(29),
        n = e.onChange,
        a = e.onValidationChange,
        i = e.primaryWebsite,
        l = e.secondaryWebsite,
        m = u(l != null && l !== ""),
        p = m[0],
        _ = m[1],
        f = u(i != null ? i : ""),
        g = f[0],
        h = f[1],
        y = u(l != null ? l : ""),
        C = y[0],
        b = y[1],
        v = u(!1),
        S = v[0],
        R = v[1],
        L = u(!1),
        E = L[0],
        k = L[1],
        I;
      t[0] !== n || t[1] !== a || t[2] !== C
        ? ((I = function (t, r) {
            h(r);
            var e = o("WAWebValidationUtils").validateURL(r);
            R(!e);
            var i = o("WAWebValidationUtils").validateURL(C);
            if ((a && a(e && i), n)) {
              var l = d(r);
              (l !== r && h(l), n(t, l));
            }
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = C),
          (t[3] = I))
        : (I = t[3]);
      var T = I,
        D;
      t[4] !== n || t[5] !== a || t[6] !== g
        ? ((D = function (t, r) {
            b(r);
            var e = o("WAWebValidationUtils").validateURL(r);
            k(!e);
            var i = o("WAWebValidationUtils").validateURL(g);
            if ((a && a(i && e), n)) {
              var l = d(r);
              (l !== r && b(l), n(t, l));
            }
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = g),
          (t[7] = D))
        : (D = t[7]);
      var x = D,
        $;
      t[8] !== g
        ? (($ = function () {
            var e = g != null && g.trim() !== "";
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickWebsite(e);
          }),
          (t[8] = g),
          (t[9] = $))
        : ($ = t[9]);
      var P = $,
        N;
      t[10] !== g
        ? ((N = function () {
            var e = g != null && g.trim() !== "";
            (o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickAddAnotherWebsite(e),
              _(!0));
          }),
          (t[10] = g),
          (t[11] = N))
        : (N = t[11]);
      var M = N,
        w,
        A;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s.jsx(r("WDSIconIcLink.react"), { testid: void 0 })),
          (A = o("WAWebBusinessProfileLabels").getWebsiteLabel()),
          (t[12] = w),
          (t[13] = A))
        : ((w = t[12]), (A = t[13]));
      var F;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = o("WAWebBusinessProfileLabels").getWebsiteErrorLabel()),
          (t[14] = F))
        : (F = t[14]);
      var O;
      t[15] !== T || t[16] !== P || t[17] !== S || t[18] !== g
        ? ((O = s.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "primaryWebsite",
            icon: w,
            label: A,
            value: g,
            onChange: T,
            onClick: P,
            error: S,
            errorText: F,
          })),
          (t[15] = T),
          (t[16] = P),
          (t[17] = S),
          (t[18] = g),
          (t[19] = O))
        : (O = t[19]);
      var B;
      t[20] !== M || t[21] !== x || t[22] !== E || t[23] !== C || t[24] !== p
        ? ((B = p
            ? s.jsx(r("WAWebBusinessProfileTextField.react"), {
                editable: !0,
                fieldName: "secondaryWebsite",
                label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
                value: C,
                onChange: x,
                error: E,
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
                  onPress: M,
                }),
              })),
          (t[20] = M),
          (t[21] = x),
          (t[22] = E),
          (t[23] = C),
          (t[24] = p),
          (t[25] = B))
        : (B = t[25]);
      var W;
      return (
        t[26] !== O || t[27] !== B
          ? ((W = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 12,
              xstyle: c.container,
              children: [O, B],
            })),
            (t[26] = O),
            (t[27] = B),
            (t[28] = W))
          : (W = t[28]),
        W
      );
    }
    l.default = m;
  },
  98,
);
