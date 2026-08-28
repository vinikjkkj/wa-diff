__d(
  "KFRandomSubdocumentSystem",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        var n = this;
        this.$1 = e;
        var r = e.getEntitiesWithComponent(
          o("KFComponentNames").RANDOM_SUBDOCUMENT,
        );
        if (r.length <= 0) {
          var a = e.getEntitiesWithComponent(
            o("KFComponentNames").RANDOM_SUBDOCUMENT_CHILDREN,
          );
          a.forEach(function (t) {
            e.removeComponentForEntity(
              t,
              o("KFComponentNames").RANDOM_SUBDOCUMENT_CHILDREN,
            );
          });
          return;
        }
        (t.onRepeat(function () {
          n.$2(e, r);
        }),
          this.$2(e, r));
      }
      var t = e.prototype;
      return (
        (t.$2 = function (t, n) {
          n.forEach(function (e) {
            var n = t.getComponent(e, o("KFComponentNames").CHILDREN);
            if (n != null) {
              var r = t.getComponent(
                e,
                o("KFComponentNames").RANDOM_SUBDOCUMENT,
              );
              if (r != null) {
                var a = t.getComponent(
                  e,
                  o("KFComponentNames").RANDOM_SUBDOCUMENT_CHILDREN,
                );
                if (a != null) {
                  var i = r.getNextRandomSubdocumentIndex(),
                    l = a.getLastSwappedChild(),
                    s = a.getSwappableChild(i);
                  (n.removeChild(l, s), a.setLastSwappedIndex(i));
                }
              }
            }
          });
        }),
        (t.update = function (t, n) {}),
        (t.toString = function () {
          return "RANDOM_SUBDOCUMENT";
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
