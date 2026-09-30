__d(
  "WebBloksMapGet",
  ["WebBloksActionContainerUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
        e,
        t,
        "bk.action.map.Get expects a plain object",
      );
      return Object.hasOwnProperty.call(r, n) ? r[n] : void 0;
    }
    l.default = e;
  },
  98,
);
