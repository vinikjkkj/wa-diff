__d(
  "WAWebCollectionInternalUtils",
  ["WAWebCollectionUtils"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      return t != null &&
        typeof t == "function" &&
        "kind" in t &&
        o("WAWebCollectionUtils").CollectionMethodKind.isValid(t.kind)
        ? t
        : null;
    };
    function s(t) {
      var n = null;
      for (var r of Object.keys(t)) {
        var a = e(t[r]);
        if (a)
          e: {
            if (
              a.kind ===
              o("WAWebCollectionUtils").CollectionMethodKind.Aggregate
            ) {
              (n || (n = []), n.push(a));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                a.kind,
            );
          }
      }
      return { aggregate: n };
    }
    l.groupMethodsByKind = s;
  },
  98,
);
