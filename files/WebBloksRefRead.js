__d(
  "WebBloksRefRead",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e.getScriptMode() === "BIND")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Cannot read ref value during bind",
        );
      return t.get();
    }
    l.default = e;
  },
  98,
);
