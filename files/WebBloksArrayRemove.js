__d(
  "WebBloksArrayRemove",
  ["WebBloksActionContainerUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksActionContainerUtils").assertWebBloksArray(
        e,
        t,
        "bk.action.array.Remove expects an array",
      );
      r.splice(n, 1);
    }
    l.default = e;
  },
  98,
);
