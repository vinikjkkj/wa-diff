__d(
  "WAJobRequirement",
  ["Promise", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(e) {
          var t = this;
          ((this.$1 = (s || (s = n("Promise"))).resolve()),
            (this.$2 = !0),
            (this.$3 = null),
            (this.$4 = function () {
              var e = t.$3;
              if (e != null)
                return (
                  (t.$3 = null),
                  (s || (s = n("Promise"))).all(e).then(t.$4)
                );
              t.$2 = !0;
            }),
            (this.name = e));
        }
        var r = t.prototype;
        return (
          (r.addBlocker = function (r) {
            var t = this,
              a = r.catch(function (n) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "JobRequirement[",
                        "] blocker errored ",
                        "",
                      ])),
                    t.name,
                    n,
                  )
                  .sendLogs("job-blocker-rejected");
              });
            if (this.$2)
              ((this.$2 = !1),
                (this.$1 = (s || (s = n("Promise")))
                  .all([this.$1, a])
                  .then(this.$4)));
            else {
              var i = this.$3;
              i != null ? i.push(a) : (this.$3 = [a]);
            }
          }),
          (r.waitUntilSatisfied = function () {
            return this.$1;
          }),
          (r.isSatisfied = function () {
            return this.$2;
          }),
          (r.isSatisfiable = function () {
            return !0;
          }),
          t
        );
      })();
    function c(e, t) {
      var r = e.filter(function (e) {
        return !e.isSatisfiable();
      });
      if (r.length > 0) {
        var o = r.map(function (e) {
          return e.name;
        });
        return function (e) {
          return (
            t == null || t("unsatisfiable", o, e),
            r[0].waitUntilSatisfied()
          );
        };
      }
      var a = e.map(function () {
          return (s || (s = n("Promise"))).resolve();
        }),
        i = (s || (s = n("Promise"))).resolve(),
        l = null,
        u = function () {
          if (
            a.every(function (t, n) {
              return t === e[n].waitUntilSatisfied();
            })
          ) {
            l = null;
            return;
          }
          var t = [],
            r = e.map(function (e) {
              var n = e.waitUntilSatisfied();
              return (
                e.isSatisfied() ||
                  (t.push(e.name),
                  n.then(function () {
                    var n = t.indexOf(e.name);
                    t.splice(n, 1);
                  })),
                n
              );
            });
          return ((a = r), (l = t), (s || (s = n("Promise"))).all(r).then(u));
        };
      return function (e) {
        if (l == null) {
          var n = u();
          n != null &&
            (i = i.then(function () {
              return n;
            }));
        }
        return (
          t == null || t(l == null ? "satisfied" : "unsatisfied", l, e),
          i
        );
      };
    }
    ((l.JobRequirement = u), (l.joinRequirements = c));
  },
  98,
);
