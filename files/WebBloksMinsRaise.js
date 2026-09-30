__d(
  "WebBloksMinsRaise",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      throw typeof t != "string"
        ? new (o("WebBloksErrors").WebBloksScriptError)(
            "Expected stack value of string type for opcode raise",
            e,
          )
        : new (o("WebBloksErrors").WebBloksScriptError)("UserError: " + t, e);
    }
    l.default = e;
  },
  98,
);
