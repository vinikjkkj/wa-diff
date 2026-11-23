__d(
  "MawMpsCopPostprocessor",
  ["MawMpsCop", "MpsErrors", "WmiErrorReport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      name: "mps_cop",
      process: async function (t, n) {
        try {
          await o("MawMpsCop")
            .mpsCop()
            .postProcessMessages({ ctx: n, payloadList: t });
        } catch (e) {
          o("WmiErrorReport").reportWmiError(
            o("MpsErrors").MpsErrors.classify(e, "mps_cop", "ui_update_failed"),
          );
        }
        return new Map();
      },
    };
    l.MpsCopPostProcessor = e;
  },
  98,
);
