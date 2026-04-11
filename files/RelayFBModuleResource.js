__d(
  "RelayFBModuleResource",
  ["FBLogger", "Promise", "RelayFBModuleLoader", "isPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {};
    function c(e) {
      if (e === null || typeof e != "object")
        throw r("FBLogger")("relay").mustfixThrow(
          "ModuleResource.read(): Expected `match` value to be an object.",
        );
      var t = e.__module_component;
      return t == null ? null : o("RelayFBModuleLoader").read(t);
    }
    function d(e) {
      if (e === null || typeof e != "object")
        throw r("FBLogger")("relay").mustfixThrow(
          "ModuleResource.read(): Expected `match` value to be an object.",
        );
      var t = e.__module_component;
      return t == null ? null : o("RelayFBModuleLoader").load(t);
    }
    function m(t) {
      for (var o = [], a = [], i = 0; i < t.length; i++)
        try {
          var l = c(t[i]);
          o.push(l);
        } catch (e) {
          if ((s || (s = r("isPromise")))(e)) a.push(e);
          else throw e;
        }
      if (a.length > 0) {
        var d = t.map(function (e, t) {
            var n;
            return (n = p(e)) != null ? n : "UNKNOWN_" + t;
          }),
          m = d.join(":"),
          _ = u[m];
        throw (
          _ == null &&
            (_ = u[m] =
              (e || (e = n("Promise"))).all(a).finally(function () {
                delete u[m];
              })),
          _
        );
      }
      return o;
    }
    function p(e) {
      if (e === null || typeof e != "object")
        throw r("FBLogger")("relay").mustfixThrow(
          "ModuleResource.getModuleId(): Expected `match` value to be an object.",
        );
      var t = e.__module_component;
      if (t == null) return null;
      var n = o("RelayFBModuleLoader").getModuleReference(t);
      return n.getModuleId();
    }
    ((l.read = c), (l.load = d), (l.readAll = m), (l.getModuleId = p));
  },
  98,
);
