__d(
  "CometDevToolsErrorConsoleUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0;
    function l(t) {
      return { id: e++, message: t.message, name: t.name, type: t.type };
    }
    i.toSerializableError = l;
  },
  66,
);
