__d(
  "WebBloksStringReplaceAll",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function s(t, n, r, a) {
      if (typeof n != "string")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Input string must be a string",
          t,
        );
      if (typeof r != "string")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Target string must be a string",
          t,
        );
      if (typeof a != "string")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Replacement string must be a string",
          t,
        );
      return r === ""
        ? n
        : n.replace(new RegExp(e(r), "g"), function () {
            return a;
          });
    }
    l.default = s;
  },
  98,
);
