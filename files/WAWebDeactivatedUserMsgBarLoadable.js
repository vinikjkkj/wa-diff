__d(
  "WAWebDeactivatedUserMsgBarLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebDeactivatedUserMsgBar.react",
        )
          .__setRef("WAWebDeactivatedUserMsgBarLoadable")
          .load();
        return e;
      }, "DeactivatedUserMsgBar"),
      d = r("WAWebLoadable")({
        loader: c,
        renderLoadingImmediately: !0,
        loading: function () {
          return u.jsx(m, {});
        },
      });
    function m() {
      return u.jsx("div", {
        "data-testid": "deactivated-user-msgbar-loading",
        children: u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: s._(/*BTDS*/ ""),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WAWebDeactivatedUserMsgBarLoadable = d));
  },
  226,
);
