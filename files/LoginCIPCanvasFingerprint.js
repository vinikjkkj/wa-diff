__d(
  "LoginCIPCanvasFingerprint",
  ["CIPCanvasID", "CipEventFalcoEvent", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "fbcom_login";
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield r("CIPCanvasID").genCanvasID(e);
          } catch (t) {
            return (
              r("CipEventFalcoEvent").log(function () {
                return {
                  event: "UI_CANVAS_ID_GENERATION_FAILED",
                  extra_data: {
                    error_message:
                      t instanceof Error ? t.message : "Unknown error",
                    surface: e,
                  },
                  journey_id: null,
                };
              }),
              null
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    var c = { genFingerprint: s },
      d = c;
    l.default = d;
  },
  98,
);
