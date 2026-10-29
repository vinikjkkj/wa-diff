__d(
  "WAWebBizOrderManagementCPIRow.story",
  [
    "WAWebBizOrderManagementCPIRow.react",
    "WAWebDrawerSection.react",
    "WAWebShowroomAlert",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { flex: "0 0 420px", padding: 0 },
      c =
        "Pay via bank transfer to Banco do Brasil, agency 1234-5, account 67890-1, CNPJ 12.345.678/0001-90",
      d =
        "PIX00020126580014BR.GOV.BCB.PIX0136a1b2c3d4-e5f6-7890-abcd-ef1234567890520400005303986";
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.cpiInfo,
        a;
      return (
        t[0] !== n
          ? ((a = s.jsx(r("WAWebDrawerSection.react"), {
              children: s.jsx(r("WAWebBizOrderManagementCPIRow.react"), {
                cpiInfo: n,
                onClick: p,
              }),
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function p() {
      o("WAWebShowroomAlert").showroomAlert("open CPI modal");
    }
    var _ = {
      storyName: "WAWebBizOrderManagementCPIRow",
      component: r("WAWebBizOrderManagementCPIRow.react"),
      description:
        "Charges drawer row showing the custom payment instructions synced from the seller\u2019s primary device.",
      examples: [
        {
          title: "No instructions set",
          description: "Falls back to the unsupported-on-web label.",
          templateStyle: u,
          example: function () {
            return s.jsx(m, { cpiInfo: null });
          },
        },
        {
          title: "Short instructions",
          description: "Fits on one line, no truncation.",
          templateStyle: u,
          example: function () {
            return s.jsx(m, { cpiInfo: "Pay via bank transfer" });
          },
        },
        {
          title: "Long instructions",
          description:
            "Must clamp to a single ellipsized line. Wrapping here overflows the fixed-height row and paints over the charges list below (T283261132).",
          templateStyle: u,
          example: function () {
            return s.jsx(m, { cpiInfo: c });
          },
        },
        {
          title: "Long instructions with no break opportunity",
          description:
            "A single unbroken token: the row can only shrink below it because the text sits in a grid track with a definite zero minimum.",
          templateStyle: u,
          example: function () {
            return s.jsx(m, { cpiInfo: d });
          },
        },
      ],
    };
    l.default = _;
  },
  98,
);
