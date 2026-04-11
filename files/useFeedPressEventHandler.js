__d(
  "useFeedPressEventHandler",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "cr:11054",
    "cr:2866",
    "emptyFunction",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useStoryClickEventLogger",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (c || (c = o("react"))).useCallback;
    function m() {
      return r("emptyFunction");
    }
    var p = (e = n("cr:11054")) != null ? e : m;
    function _() {
      return f;
    }
    function f(e, t) {}
    var g = (s = n("cr:2866")) != null ? s : _;
    function h(e, t) {
      var n = o("react-compiler-runtime").c(6),
        a = r("useStoryClickEventLogger")(),
        i = p(),
        l = g(),
        s;
      return (
        n[0] !== t || n[1] !== a || n[2] !== e || n[3] !== l || n[4] !== i
          ? ((s = function (o) {
              try {
                i(o);
              } catch (e) {
                var n = e,
                  s = r("getErrorSafe")(n);
                r("FBLogger")("voyage")
                  .catching(s)
                  .mustfix("Voyage press logger threw");
              }
              e && e(o);
              var u = o.buttons,
                c = o.timeStamp,
                d = o.type;
              if (
                d === "click" ||
                d === "press" ||
                d === "contextmenu" ||
                (d === "pressstart" && u === 4)
              ) {
                var m = d === "contextmenu" ? 2 : u === 4 ? 1 : 0,
                  p = r("uuidv4")();
                (a(c, m, t, p), l());
              }
            }),
            (n[0] = t),
            (n[1] = a),
            (n[2] = e),
            (n[3] = l),
            (n[4] = i),
            (n[5] = s))
          : (s = n[5]),
        s
      );
    }
    function y(e, t) {
      return r("emptyFunction");
    }
    var C = (u || (u = r("ExecutionEnvironment"))).canUseDOM ? h : y,
      b = C;
    l.default = b;
  },
  98,
);
