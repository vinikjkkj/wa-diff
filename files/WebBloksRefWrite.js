__d(
  "WebBloksRefWrite",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e.getScriptMode() === "BIND")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Cannot write to ref value during bind",
        );
      t.set(n);
    }
    l.default = e;
  },
  98,
);
