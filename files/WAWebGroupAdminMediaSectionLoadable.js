__d(
  "WAWebGroupAdminMediaSectionLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebGroupAdminMediaSection.react",
          )
            .__setRef("WAWebGroupAdminMediaSectionLoadable")
            .load();
          return e;
        }),
        "GroupAdminMediaSection",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {
            "data-testid": "group-admin-media-loading",
            className:
              "x6s0dn4 x78zum5 x1iyjqo2 xl56j7k xl7twdi xyo0t3i xvg22vi xb0esv5",
            children: s.jsx(r("WDSSpinner.react"), { size: 40 }),
          });
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
