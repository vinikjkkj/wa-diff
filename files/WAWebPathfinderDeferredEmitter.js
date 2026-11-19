__d(
  "WAWebPathfinderDeferredEmitter",
  ["Promise", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 20,
      c = 3e4;
    function d(t, a, i) {
      var l = [],
        d = !1,
        p = 0;
      function _(t, n) {
        !d ||
          t !== p ||
          ((d = !1),
          (l = []),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] emitter not loaded",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs(i));
      }
      function f() {
        d = !0;
        var e = ++p;
        try {
          var r = self.setTimeout(function () {
            _(e, "timed out");
          }, c);
          (s || (s = n("Promise")))
            .resolve()
            .then(function () {
              return t.load();
            })
            .then(
              function (t) {
                (self.clearTimeout(r), e === p && (d = !1));
                var n = l;
                l = [];
                for (var o of n) a(t, o);
              },
              function (t) {
                (self.clearTimeout(r), _(e, t));
              },
            );
        } catch (t) {
          _(e, t);
        }
      }
      return function (e) {
        var n = m(t);
        if (n != null) {
          a(n, e);
          return;
        }
        l.length >= u || (l.push(e), d || f());
      };
    }
    function m(e) {
      try {
        return e.getModuleIfRequireable();
      } catch (e) {
        return null;
      }
    }
    l.createPathfinderDeferredEmitter = d;
  },
  98,
);
