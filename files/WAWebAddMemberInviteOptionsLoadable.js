__d(
  "WAWebAddMemberInviteOptionsLoadable",
  [
    "JSResourceForInteraction",
    "WAWebAddMemberInviteOptionsLabel",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebAddMemberInviteOptions.react",
        )
          .__setRef("WAWebAddMemberInviteOptionsLoadable")
          .load();
        return e;
      }, "AddMemberInviteOptions"),
      c = p(1),
      d = p(2);
    function m(e) {
      var t = e.variant === 2 ? d : c;
      return s.jsx(t, babelHelpers.extends({}, e));
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
    ((l.requireBundle = u), (l.WAWebAddMemberInviteOptionsLoadable = m));
  },
  98,
);
