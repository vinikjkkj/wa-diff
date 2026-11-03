__d(
  "WAWebAddMemberInviteOptionsLoadable",
  [
    "JSResourceForInteraction",
    "WAWebAddMemberInviteOptionsLabel",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebAddMemberInviteOptions.react",
          )
            .__setRef("WAWebAddMemberInviteOptionsLoadable")
            .load();
          return e;
        }),
        "AddMemberInviteOptions",
      ),
      c = p(1),
      d = p(2);
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.variant === 2 ? d : c,
        r;
      return (
        t[0] !== n || t[1] !== e
          ? ((r = s.jsx(n, babelHelpers.extends({}, e))),
            (t[0] = n),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    function p(e) {
      return r("WAWebLoadable")({
        loader: u,
        loading: function (n) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            title: o("WAWebAddMemberInviteOptionsLabel").getInviteOptionsLabel(
              e,
            ),
            error: !!n.error,
          });
        },
      });
    }
    l.WAWebAddMemberInviteOptionsLoadable = m;
  },
  98,
);
