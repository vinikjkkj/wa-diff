__d(
  "ACSClientBuilderWasm",
  ["ACSClient", "LSVoprfWasm"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r) {
      var a = await o("LSVoprfWasm").LSVoprfWasm({
        locateFile: o("LSVoprfWasm").locateFile,
      });
      return o("ACSClient").buildACSClient(e, t, n, r, a);
    }
    l.buildACSClient = e;
  },
  98,
);
