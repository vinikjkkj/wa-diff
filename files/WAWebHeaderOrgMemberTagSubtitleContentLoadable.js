__d(
  "WAWebHeaderOrgMemberTagSubtitleContentLoadable",
  [
    "JSResourceForInteraction",
    "WAWebContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebUserSubtitle.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null),
      p = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebHeaderOrgMemberTagSubtitleContent.react",
        )
          .__setRef("WAWebHeaderOrgMemberTagSubtitleContentLoadable")
          .load();
      }, "OrgMemberTagSubtitleContent"),
      _ = r("WAWebLoadable")({
        loader: p,
        loading: function () {
          return s.jsx(g, {});
        },
        renderLoadingImmediately: !0,
      });
    function f(e) {
      var t = e.orgMemberLid,
        n = e.presence,
        r = e.userSubtitle;
      return s.jsx(m.Provider, {
        value: r,
        children: s.jsx(_, { orgMemberLid: t, presence: n, userSubtitle: r }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      var e = d(m);
      return e == null || o("WAWebContactGetters").getIsBusiness(e.contact)
        ? null
        : s.jsx(r("WAWebUserSubtitle.react"), { userSubtitle: e });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
