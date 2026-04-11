__d(
  "KeyStatus",
  ["Event", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null,
      u = null;
    function c() {
      u ||
        (u = r("Event").listen(window, "blur", function () {
          ((s = null), d());
        }));
    }
    function d() {
      u && (u.remove(), (u = null));
    }
    function m(e) {
      ((s = r("Event").getKeyCode(e)), c());
    }
    function p() {
      ((s = null), d());
    }
    if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
      var _ = document.documentElement;
      if (_) {
        if (_.addEventListener)
          (_.addEventListener("keydown", m, !0),
            _.addEventListener("keyup", p, !0));
        else if (_.attachEvent) {
          var f = _.attachEvent;
          (f("onkeydown", m), f("onkeyup", p));
        }
      }
    }
    function g() {
      return !!s;
    }
    function h() {
      return s;
    }
    ((l.isKeyDown = g), (l.getKeyDownCode = h));
  },
  98,
);
