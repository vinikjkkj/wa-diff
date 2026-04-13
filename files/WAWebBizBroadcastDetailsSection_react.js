__d(
  "WAWebBizBroadcastDetailsSection.react",
  [
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastPaymentMethodSection.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.entryPoint,
        a = e.onBillingInfoChanged,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x19aeb6u xh8yej3" }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getDetailsSectionTitle()),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== n || t[3] !== a
          ? ((u = s.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: s.jsx(r("WAWebBizAdCard.react"), {
                  header: l,
                  children: s.jsx(o("WAWebFlex.react").FlexColumn, {
                    children: s.jsx(
                      r("WAWebBizBroadcastPaymentMethodSection.react"),
                      { entryPoint: n, onBillingInfoChanged: a },
                    ),
                  }),
                }),
              }),
            )),
            (t[2] = n),
            (t[3] = a),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = u;
  },
  98,
);
