__d(
  "WADanglingQueue",
  ["WALogger", "WAPersistedQueue", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = [];
    function c(t) {
      if (s != null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "DanglingQueue is already initialized",
              ])),
          ),
          s
        );
      var n = o("WAPersistedQueue").initPersistedQueue("danglingQueue", t);
      return ((s = n), s);
    }
    function d() {
      if (!s) throw r("err")("Dangling queue not initialized");
      return s;
    }
    function m() {
      return d()
        .read({ limit: 1 })
        .then(function (e) {
          return e.length === 0;
        });
    }
    function p() {
      return d().read();
    }
    function _(e) {
      u.push(e);
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = u;
          ((u = []), yield d().addAndCommit(e));
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return d().clear();
    }
    ((l.initDanglingQueue = c),
      (l.isDanglingQueueEmpty = m),
      (l.danglingQueueRead = p),
      (l.danglingQueueAdd = _),
      (l.danglingQueueCommit = f),
      (l.danglingQueueClear = h));
  },
  98,
);
