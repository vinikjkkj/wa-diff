__d(
  "ACSClientBuilderWasm",
  ["ACSClient", "LSVoprfWasm", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o("LSVoprfWasm").LSVoprfWasm({
              locateFile: o("LSVoprfWasm").locateFile,
            });
            return o("ACSClient").buildACSClient(e, t, n, r, a);
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.buildACSClient = e;
  },
  98,
);
