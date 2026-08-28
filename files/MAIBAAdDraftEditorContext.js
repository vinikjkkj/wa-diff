__d(
  "MAIBAAdDraftEditorContext",
  ["invariant", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = "ads_manager",
      m = u.createContext(null);
    function p() {
      return c(m);
    }
    function _() {
      var e = c(m);
      return (e != null || s(0, 154663), e);
    }
    ((l.MAIBA_AD_DRAFT_EDITOR_DEFAULT_PRODUCT = d),
      (l.MAIBAAdDraftEditorContext = m),
      (l.useMAIBAAdDraftEditorContext = p),
      (l.useMAIBAAdDraftEditorContextRequired = _));
  },
  98,
);
