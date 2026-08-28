__d(
  "AdsUEditorContextFactory",
  ["adsCreateSelector", "adsMemoizeWithArgs", "memoizeWithArgsWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsMemoizeWithArgs")(
        function (e) {
          return e;
        },
        function (e) {
          return e.join(",");
        },
        i.id + ".getCachedIDs",
      ),
      s = r("memoizeWithArgsWeak")(function (e, t, n) {
        var o = new e(
          r("adsCreateSelector")(
            [],
            function () {
              return t;
            },
            {
              name:
                "AdsUEditorContextFactory.getForIDs(" + e.name + ") from " + n,
            },
          ),
        );
        return ((o.contextID = n), o);
      });
    function u(t, n, r) {
      return s(t, e(n), r);
    }
    var c = r("memoizeWithArgsWeak")(function (e, t, n) {
      var r = new e(t);
      return ((r.contextID = n), r);
    });
    ((l.getForIDs = u), (l.getForIDsSelector = c));
  },
  98,
);
