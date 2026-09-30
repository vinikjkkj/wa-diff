__d(
  "WebBloksMapUpdate",
  ["WebBloksActionContainerUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
          e,
          t,
          "bk.action.map.Update expects a plain target object",
        ),
        a = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
          e,
          n,
          "bk.action.map.Update expects a plain source object",
        );
      for (var i of Object.keys(a))
        o("WebBloksActionContainerUtils").writeWebBloksPlainMapValue(
          r,
          i,
          a[i],
        );
    }
    l.default = e;
  },
  98,
);
