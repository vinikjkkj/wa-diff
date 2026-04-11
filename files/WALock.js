__d(
  "WALock",
  ["Promise", "WAResolvable", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return {
        lock: function (a, i) {
          var r = new (o("WAResolvable").Resolvable)(),
            l = a.map(function (e) {
              return [e, new (o("WAResolvable").Resolvable)()];
            });
          return (
            (s || (s = n("Promise")))
              .all(
                l.map(function (e) {
                  var n = e[0],
                    o = e[1];
                  return t.enqueue(n, function () {
                    return (o.resolve(), r.promise);
                  });
                }),
              )
              .catch(function () {
                o("WATagsLogger")
                  .TAGS(["WALock"])
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Lock failed for ",
                        "",
                      ])),
                    a,
                  );
              }),
            s
              .all(
                l.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return n.promise;
                }),
              )
              .then(function () {
                return i();
              })
              .finally(function () {
                r.resolve();
              })
          );
        },
        wait: function (n) {
          return t.wait(n);
        },
      };
    }
    l.makeLock = u;
  },
  98,
);
