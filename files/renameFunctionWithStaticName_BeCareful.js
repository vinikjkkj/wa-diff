__d(
  "renameFunctionWithStaticName_BeCareful",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      try {
        var e = new Function("a", "b", "return a + b;");
        if (typeof e != "function" || e(1, 1) !== 2) return !1;
        var t = new Function("return function ProbeName(){ return 42; };"),
          n = t();
        return typeof n == "function" && n.name === "ProbeName" && n() === 42;
      } catch (e) {
        return !1;
      }
    }
    function l(e, t) {
      var n = new Function(
        "f",
        "return function " +
          t +
          "_jssp_wrapper(...args) {\n       return f.apply(this, args);\n     };",
      )(e);
      return n;
    }
    var s = e()
        ? l
        : function (e, t) {
            return e;
          },
      u = s;
    i.default = u;
  },
  66,
);
