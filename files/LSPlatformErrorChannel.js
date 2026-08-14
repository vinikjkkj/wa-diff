__d(
  "LSPlatformErrorChannel",
  ["FBLogger", "ODS", "XPlatReactEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "onLSError",
      u = new (r("XPlatReactEventEmitter"))(),
      c = 0,
      d = null;
    function m(t) {
      (d === null &&
        ((e || (e = o("ODS"))).bumpEntityKey(
          3185,
          "lsplatform_error",
          "first_error_emitted_to_" + c + "listeners",
        ),
        c === 0 &&
          r("FBLogger")("messenger_web").mustfix(
            "No listeners when emitting LS error %s",
            t.name,
          )),
        (d = t),
        u.emit(s, t));
    }
    function p(e) {
      var t = u.addListener(s, e);
      return (
        c++,
        function () {
          return t.remove();
        }
      );
    }
    function _() {
      return d;
    }
    function f() {
      (u.removeAllListeners(s), (d = null));
    }
    var g = { TEST_ONLY_clear: f, emit: m, lastError: _, subscribe: p };
    l.default = g;
  },
  98,
);
