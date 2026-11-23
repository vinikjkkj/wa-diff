__d(
  "AdsExportAdObjectLoggerPlugin",
  ["AdsManagerQPLUserFlowLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          o("AdsManagerQPLUserFlowLogger").start(
            r("qpl")._(270206179, "3189"),
            {
              annotations: {
                string: {
                  level: t.level,
                  mode: t.mode,
                  source: "FILE_FORMAT_DIALOG",
                },
              },
              cancelOnUnload: !0,
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
