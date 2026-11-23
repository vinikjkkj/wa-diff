__d(
  "ACSClientBuilderWasmV3",
  ["ACSClient", "LSVoprfWasmV3"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r) {
      var a = await o("LSVoprfWasmV3").LSVoprfWasmV3({
        locateFile: o("LSVoprfWasmV3").locateFile,
      });
      return o("ACSClient").buildACSClient(e, t, n, r, a);
    }
    l.buildACSClient = e;
  },
  98,
);
