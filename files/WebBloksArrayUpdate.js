__d(
  "WebBloksArrayUpdate",
  ["WebBloksActionContainerUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      for (
        var a = o("WebBloksActionContainerUtils").assertWebBloksArray(
            e,
            t,
            "bk.action.array.Update expects an array target",
          ),
          i = o("WebBloksActionContainerUtils").assertWebBloksArray(
            e,
            n,
            "bk.action.array.Update expects arrays for indices and values",
          ),
          l = o("WebBloksActionContainerUtils").assertWebBloksArray(
            e,
            r,
            "bk.action.array.Update expects arrays for indices and values",
          ),
          s = 0;
        s < i.length;
        s++
      ) {
        var u = i[s];
        a[u] = l[s];
      }
    }
    l.default = e;
  },
  98,
);
