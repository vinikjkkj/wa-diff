__d(
  "WebDi.Gen",
  ["WebDi.Node", "WebDi.UnsafeCoerce"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WebDi.UnsafeCoerce").coerce(
        new (o("WebDi.Node").Gen)(o("WebDi.UnsafeCoerce").coerce(e)),
      );
    }
    function s(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return o("WebDi.UnsafeCoerce").coerce(
          new (o("WebDi.Node").Gen)(
            o("WebDi.UnsafeCoerce").coerce(function () {
              return e.apply(void 0, n);
            }),
          ),
        );
      };
    }
    ((l.gen = e), (l.fx = s));
  },
  98,
);
