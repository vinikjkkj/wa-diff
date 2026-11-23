__d(
  "MAIBAAdDraftEditorRefreshContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = {
        dataGeneration: 0,
        isRefreshing: !1,
        markPublishedLocally: function () {},
        refreshWorkspaceSilently: function (t) {
          return t == null ? void 0 : t(null);
        },
      },
      d = s.createContext(c);
    function m() {
      return u(d);
    }
    ((l.MAIBAAdDraftEditorRefreshContext = d),
      (l.useMAIBAAdDraftEditorRefresh = m));
  },
  98,
);
