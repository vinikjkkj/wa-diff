__d(
  "MAPWebWaterfallIdManager",
  ["ExecutionEnvironment", "WebStorage", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "map_waterfall_state",
      c = "|";
    function d() {
      var t, n;
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM)
        return { lastSwitcherSession: "", waterfallId: "" };
      var o =
        (t =
          (n = (s || (s = r("WebStorage"))).getLocalStorage()) == null
            ? void 0
            : n.getItem(u)) != null
          ? t
          : "";
      if (o === "") return { lastSwitcherSession: "", waterfallId: "" };
      var a = o.indexOf(c);
      return a === -1
        ? { lastSwitcherSession: "", waterfallId: o }
        : {
            lastSwitcherSession: o.substring(a + 1),
            waterfallId: o.substring(0, a),
          };
    }
    var m = new Set();
    function p(t, n) {
      (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        ((s || (s = r("WebStorage"))).setItemGuarded(
          s.getLocalStorage(),
          u,
          "" + t + c + n,
        ),
        m.forEach(function (e) {
          return e();
        }));
    }
    var _ = {
        getOrRegenerateWaterfallId: function (n, o, a) {
          if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return "";
          var t = d(),
            i = t.lastSwitcherSession,
            l = t.waterfallId,
            s = !1;
          switch (n) {
            case "startup":
              s = l === "" || a !== "";
              break;
            case "switcher":
              s = l === "" || (o != null ? o : "") !== i;
              break;
          }
          if (s) {
            var u = r("uuidv4")(),
              c = n === "startup" ? "" : o != null ? o : "";
            return (p(u, c), u);
          }
          return l;
        },
        getWaterfallId: function () {
          var e = d(),
            t = e.waterfallId;
          return t !== "" ? t : null;
        },
        subscribe: function (t) {
          return (
            m.add(t),
            function () {
              m.delete(t);
            }
          );
        },
      },
      f = _;
    l.default = f;
  },
  98,
);
