__d(
  "WAWebHeaderOrgMemberTagSubtitleContentLoadable",
  [
    "JSResourceForInteraction",
    "WAWebContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebUserSubtitle.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null),
      p = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebHeaderOrgMemberTagSubtitleContent.react",
          )
            .__setRef("WAWebHeaderOrgMemberTagSubtitleContentLoadable")
            .load();
        }),
        "OrgMemberTagSubtitleContent",
      ),
      _ = r("WAWebLoadable")({
        loader: p,
        loading: function () {
          return s.jsx(g, {});
        },
        renderLoadingImmediately: !0,
      });
    function f(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.orgMemberLid,
        r = e.presence,
        a = e.userSubtitle,
        i;
      t[0] !== n || t[1] !== r || t[2] !== a
        ? ((i = s.jsx(_, { orgMemberLid: n, presence: r, userSubtitle: a })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== i || t[5] !== a
          ? ((l = s.jsx(m.Provider, { value: a, children: i })),
            (t[4] = i),
            (t[5] = a),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(2),
        t = d(m),
        n;
      return (
        e[0] !== t
          ? ((n =
              t == null || o("WAWebContactGetters").getIsBusiness(t.contact)
                ? null
                : s.jsx(r("WAWebUserSubtitle.react"), { userSubtitle: t })),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = f;
  },
  98,
);
