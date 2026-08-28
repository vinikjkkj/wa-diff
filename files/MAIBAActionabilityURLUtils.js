__d(
  "MAIBAActionabilityURLUtils",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.indexOf("="),
        n = t === -1 ? e : e.slice(0, t);
      try {
        return decodeURIComponent(n.replace(/\+/g, " "));
      } catch (e) {
        return n;
      }
    }
    function u() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = window.location.search.slice(1),
          n = t
            .split("&")
            .filter(function (e) {
              return s(e) !== "maiba_actions";
            })
            .join("&");
        if (n === t) return;
        var o =
          window.location.pathname +
          (n === "" ? "" : "?" + n) +
          window.location.hash;
        window.history.replaceState(window.history.state, document.title, o);
      }
    }
    l.removeMAIBAActionsFromURL = u;
  },
  98,
);
