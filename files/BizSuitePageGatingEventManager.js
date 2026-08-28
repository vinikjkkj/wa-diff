__d(
  "BizSuitePageGatingEventManager",
  ["Event"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__biz_suite_page_gating_request",
      s = "__biz_suite_page_gating_response",
      u = "__@@INITIALIZER@@__";
    function c(t, n, o) {
      r("Event").fire(document, e, {
        action: "request_entry",
        pageID: t,
        universe: n,
        universeType: o,
      });
    }
    function d(t) {
      return r("Event").listen(document, e, function (e) {
        t(e.data);
      });
    }
    function m(e, t) {
      r("Event").fire(document, s, {
        action: "response_entry",
        asyncState: e,
        entry: t,
      });
    }
    function p(e) {
      return r("Event").listen(document, s, function (t) {
        e(t.data);
      });
    }
    function _(e) {
      r("Event").fire(document, u, { states: e });
    }
    function f(e) {
      return r("Event").listen(document, u, function (t) {
        e(t.data);
      });
    }
    ((l.INITIALIZER_UNIVERSE = u),
      (l.dispatchRequestEntry = c),
      (l.subscribeToRequestEntry = d),
      (l.dispatchResponseEntry = m),
      (l.subscribeToResponseEntry = p),
      (l.dispatchResponseStore = _),
      (l.subscribeToResponseStore = f));
  },
  98,
);
