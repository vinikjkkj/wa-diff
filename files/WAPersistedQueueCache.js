__d(
  "WAPersistedQueueCache",
  ["WAResolvable", "WAShiftTimer", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r) {
      var a = o("WATagsLogger").TAGS(["PersistedQueue", t, "cache"]),
        i = [],
        l = new (o("WAResolvable").Resolvable)(),
        s = r != null ? r : {},
        u = new (o("WAShiftTimer").ShiftTimer)(function () {
          m();
        });
      return {
        commit: function () {
          return m();
        },
        add: function (t) {
          i.push(t);
          var e = l;
          return (c(), d(), e.promise);
        },
        config: function (t) {
          s = t;
        },
      };
      function c() {
        s.cacheSize != null && i.length >= s.cacheSize && m();
      }
      function d() {
        if (s.maxDelay != null) {
          var e = s.maxDelay;
          (u.cancel(), u.onOrAfter(e));
        }
      }
      async function m() {
        if (i.length !== 0) {
          u.cancel();
          var t = i;
          i = [];
          var r = l;
          l = new (o("WAResolvable").Resolvable)();
          try {
            (await n(t), r.resolve());
          } catch (t) {
            throw (
              a.ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error during flush: ",
                    "",
                  ])),
                t,
              ),
              r.reject(t),
              t
            );
          }
        }
      }
    }
    l.makePersistedQueueCache = s;
  },
  98,
);
