__d(
  "WAWebGetInteractiveActionsForButtons",
  ["WAWebGetInteractiveActionsFromButtons"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o) {
      return e.flatMap(function (e) {
        return r("WAWebGetInteractiveActionsFromButtons")([e], t, n, o).map(
          function (t) {
            return { action: t, button: e };
          },
        );
      });
    }
    l.default = e;
  },
  98,
);
