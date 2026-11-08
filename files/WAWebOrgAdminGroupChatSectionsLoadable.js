__d(
  "WAWebOrgAdminGroupChatSectionsLoadable",
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
            "WAWebOrgAdminGroupChatSections.react",
          )
            .__setRef("WAWebOrgAdminGroupChatSectionsLoadable")
            .load();
          return e;
        }),
        "OrgAdminGroupChatSections",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {
            "data-testid": "managed_group_chat_sections_loading",
            className:
              "x6s0dn4 x78zum5 xl56j7k xl7twdi xyo0t3i xvg22vi xb0esv5",
            children: s.jsx(r("WDSSpinner.react"), { size: 24 }),
          });
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
