__d(
  "WAWebOrgAdminGroupChatRowsLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSSpinner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebOrgAdminGroupChatRows.react",
        )
          .__setRef("WAWebOrgAdminGroupChatRowsLoadable")
          .load();
        return e;
      }, "OrgAdminGroupChatRows"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {
            "data-testid": "managed_group_chat_rows_loading",
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
