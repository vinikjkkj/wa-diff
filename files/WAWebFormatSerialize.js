__d(
  "WAWebFormatSerialize",
  ["err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return e.onRoot(u(e, t.children, n), n);
    }
    function s(e, t, n) {
      if (t.type) {
        var o = t.value;
        switch (t.type) {
          case "text":
            return e.onText(o, n);
          case "delimiter":
            return e.onDelimiter(o, n);
          default:
            throw r("err")("Invalid node type");
        }
      }
      return e.onMutator(t.mutator, u(e, t.children, n), t.match[5], t.opts, n);
    }
    function u(e, t, n) {
      return t.reduce(function (t, r) {
        return (t.push(s(e, r, n)), t);
      }, []);
    }
    l.default = e;
  },
  98,
);
