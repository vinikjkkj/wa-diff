__d(
  "options-resolver-utils",
  ["transformable-component-utils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      diameter: o("transformable-component-utils").RESIZE_HANDLE_SIZE * 2,
      borderWidth: 1,
      backgroundColor: "#ffffff",
    };
    function s(t) {
      return {
        resizeHandle: babelHelpers.extends(
          {},
          e,
          t == null ? void 0 : t.resizeHandle,
        ),
      };
    }
    l.resolveWizzyOptions = s;
  },
  98,
);
