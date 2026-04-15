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
      var t = o("react-compiler-runtime").c(40),
        n = e.isAgentProfileLocked,
        a = e.onChange,
        i = e.onLockedFieldClick,
        l = e.onValidationChange,
        m = e.primaryWebsite,
        p = e.secondaryWebsite,
        _ = u(p != null && p !== ""),
        f = _[0],
        g = _[1],
        h = u(m != null ? m : ""),
        y = h[0],
        C = h[1],
        b = u(p != null ? p : ""),
        v = b[0],
        S = b[1],
        R = u(!1),
        L = R[0],
        E = R[1],
        k = u(!1),
        I = k[0],
        T = k[1],
        D;
      t[0] !== a || t[1] !== l || t[2] !== v
        ? ((D = function (t, n) {
            C(n);
            var e = o("WAWebValidationUtils").validateURL(n);
            E(!e);
            var r = o("WAWebValidationUtils").validateURL(v);
            if ((l && l(e && r), a)) {
              var i = d(n);
              (i !== n && C(i), a(t, i));
            }
          }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = v),
          (t[3] = D))
        : (D = t[3]);
      var x = D,
        $;
      t[4] !== a || t[5] !== l || t[6] !== y
        ? (($ = function (t, n) {
            S(n);
            var e = o("WAWebValidationUtils").validateURL(n);
            T(!e);
            var r = o("WAWebValidationUtils").validateURL(y);
            if ((l && l(r && e), a)) {
              var i = d(n);
              (i !== n && S(i), a(t, i));
            }
          }),
          (t[4] = a),
          (t[5] = l),
          (t[6] = y),
          (t[7] = $))
        : ($ = t[7]);
      var P = $,
        N;
      t[8] !== y
        ? ((N = function () {
            var e = y != null && y.trim() !== "";
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickWebsite(e);
          }),
          (t[8] = y),
          (t[9] = N))
        : (N = t[9]);
      var M = N,
        w;
      t[10] !== y
        ? ((w = function () {
            var e = y != null && y.trim() !== "";
            (o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickAddAnotherWebsite(e),
              g(!0));
          }),
          (t[10] = y),
          (t[11] = w))
        : (w = t[11]);
      var A = w,
        F,
        O;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s.jsx(r("WDSIconIcLink.react"), { testid: void 0 })),
          (O = o("WAWebBusinessProfileLabels").getWebsiteLabel()),
          (t[12] = F),
          (t[13] = O))
        : ((F = t[12]), (O = t[13]));
      var B;
      t[14] !== n || t[15] !== i
        ? ((B =
            n === !0 && i != null
              ? function () {
                  return i(o("WAWebBusinessProfileLabels").getWebsiteLabel());
                }
              : void 0),
          (t[14] = n),
          (t[15] = i),
          (t[16] = B))
        : (B = t[16]);
      var W;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = o("WAWebBusinessProfileLabels").getWebsiteErrorLabel()),
          (t[17] = W))
        : (W = t[17]);
      var q;
      t[18] !== x ||
      t[19] !== M ||
      t[20] !== L ||
      t[21] !== n ||
      t[22] !== y ||
      t[23] !== B
        ? ((q = s.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "primaryWebsite",
            icon: F,
            label: O,
            locked: n,
            value: y,
            onChange: x,
            onClick: M,
            onLockedClick: B,
            error: L,
            errorText: W,
          })),
          (t[18] = x),
          (t[19] = M),
          (t[20] = L),
          (t[21] = n),
          (t[22] = y),
          (t[23] = B),
          (t[24] = q))
        : (q = t[24]);
      var U;
      t[25] !== P ||
      t[26] !== I ||
      t[27] !== n ||
      t[28] !== i ||
      t[29] !== v ||
      t[30] !== f
        ? ((U = f
            ? s.jsx(r("WAWebBusinessProfileTextField.react"), {
                editable: !0,
                fieldName: "secondaryWebsite",
                label: o("WAWebBusinessProfileLabels").getWebsiteLabel(),
                locked: n,
                value: v,
                onChange: P,
                onLockedClick:
                  n === !0 && i != null
                    ? function () {
                        return i(
                          o("WAWebBusinessProfileLabels").getWebsiteLabel(),
                        );
                      }
                    : void 0,
                error: I,
                errorText: o(
                  "WAWebBusinessProfileLabels",
                ).getWebsiteErrorLabel(),
              })
            : null),
          (t[25] = P),
          (t[26] = I),
          (t[27] = n),
          (t[28] = i),
          (t[29] = v),
          (t[30] = f),
          (t[31] = U))
        : (U = t[31]);
      var V;
      t[32] !== A || t[33] !== n || t[34] !== f
        ? ((V =
            !f && n !== !0
              ? s.jsx("div", {
                  className: "x17smslp xh7rcd0",
                  children: s.jsx(r("WDSButton.react"), {
                    label: o(
                      "WAWebBusinessProfileLabels",
                    ).getAddWebsiteButtonLabel(),
                    variant: "borderless",
                    size: "small",
                    onPress: A,
                  }),
                })
              : null),
          (t[32] = A),
          (t[33] = n),
          (t[34] = f),
          (t[35] = V))
        : (V = t[35]);
      var H;
      return (
        t[36] !== U || t[37] !== V || t[38] !== q
          ? ((H = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 12,
              xstyle: c.container,
              children: [q, U, V],
            })),
            (t[36] = U),
            (t[37] = V),
            (t[38] = q),
            (t[39] = H))
          : (H = t[39]),
        H
      );
    }
    l.default = m;
  },
  98,
);
