__d(
  "WebBloksMinsContainerClone",
  ["WebBloksActionContainerUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (Array.isArray(t)) return [].concat(t);
      var n = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
        e,
        t,
        "argument of container_clone must be a container",
      );
      return babelHelpers.extends({}, n);
    }
    l.default = e;
  },
  98,
);
