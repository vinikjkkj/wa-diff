__d(
  "cometComposerPluginsReducers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.get(t);
      if (n != null) return (e.set(t, n + 1), e);
      var r = new Map(e);
      return (r.set(t, 1), r);
    }
    function l(e, t) {
      var n = e.get(t);
      if (n != null)
        if (n > 1) e.set(t, n - 1);
        else {
          var r = new Map(e);
          return (r.delete(t), r);
        }
      return e;
    }
    function s(t, n) {
      switch (n.type) {
        case "install_decorator":
        case "uninstall_decorator":
          var r =
            n.type === "install_decorator"
              ? e(t.decorators, n.decorator)
              : l(t.decorators, n.decorator);
          if (r !== t.decorators)
            return babelHelpers.extends({}, t, { decorators: r });
          break;
        case "install_handler":
        case "uninstall_handler":
          var o =
            n.type === "install_handler"
              ? e(t.handlers, n.handler)
              : l(t.handlers, n.handler);
          if (o !== t.handlers)
            return babelHelpers.extends({}, t, { handlers: o });
          break;
      }
      return t;
    }
    i.default = s;
  },
  66,
);
