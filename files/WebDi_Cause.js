__d(
  "WebDi.Cause",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        ((this.tag = "Fail"), (this.error = t));
      },
      s = function (t) {
        ((this.tag = "Die"), (this.defect = t));
      },
      u = function (t) {
        ((this.tag = "Interrupt"), (this.reason = t));
      };
    function c(t) {
      return new e(t);
    }
    function d(e) {
      return new s(e);
    }
    function m(e) {
      return new u(e);
    }
    function p(t) {
      return t instanceof e;
    }
    function _(e) {
      return e instanceof s;
    }
    function f(e) {
      return e instanceof u;
    }
    function g(t) {
      return t instanceof e
        ? t.error
        : t instanceof s
          ? t.defect
          : r("err")(
              t.reason == null
                ? "WebDI: interrupted"
                : "WebDI: interrupted - " + t.reason,
            );
    }
    ((l.Fail = e),
      (l.Die = s),
      (l.Interrupt = u),
      (l.fail = c),
      (l.die = d),
      (l.interrupt = m),
      (l.isFail = p),
      (l.isDie = _),
      (l.isInterrupt = f),
      (l.squash = g));
  },
  98,
);
