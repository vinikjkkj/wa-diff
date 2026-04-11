__d(
  "WAWebDrawerManagerGlobalContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = null,
      c = null,
      d = null,
      m = null,
      p = { left: null, right: null, mid: null, fullscreen: null },
      _ = new Set();
    function f(e) {
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function g() {
      return p;
    }
    function h() {
      if (
        !(u === p.left && c === p.right && d === p.mid && m === p.fullscreen)
      ) {
        p = { left: u, right: c, mid: d, fullscreen: m };
        for (var e of _) e();
      }
    }
    function y(e) {
      return e === "left"
        ? u
        : e === "right"
          ? c
          : e === "mid"
            ? d
            : e === "fullscreen"
              ? m
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function C() {
      return s(f, g);
    }
    function b(e, t) {
      e: {
        if (e === "left") {
          u = t;
          break e;
        }
        if (e === "right") {
          c = t;
          break e;
        }
        if (e === "mid") {
          d = t;
          break e;
        }
        if (e === "fullscreen") {
          m = t;
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
      h();
    }
    ((l.getGlobalDrawerManager = y),
      (l.useGlobalDrawerManagers = C),
      (l.setGlobalDrawerManager = b));
  },
  98,
);
