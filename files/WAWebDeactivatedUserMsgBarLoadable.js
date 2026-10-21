__d(
  "WAWebDeactivatedUserMsgBarLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebDeactivatedUserMsgBar.react",
          )
            .__setRef("WAWebDeactivatedUserMsgBarLoadable")
            .load();
          return e;
        }),
        "DeactivatedUserMsgBar",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        renderLoadingImmediately: !0,
        loading: function () {
          return u.jsx(m, {});
        },
      });
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx("div", {
              "data-testid": "deactivated-user-msgbar-loading",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "This person is no longer on WhatsApp."),
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.WAWebDeactivatedUserMsgBarLoadable = d;
  },
  226,
);
