__d(
  "WebBloksMinsContainerClone",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (Array.isArray(t)) return [].concat(t);
      if (t != null && typeof t == "object") {
        var n = t;
        return babelHelpers.extends({}, n);
      }
      throw new (o("WebBloksErrors").WebBloksScriptError)(
        "argument of container_clone must be a container",
        e,
      );
    }
    l.default = e;
  },
  98,
);
