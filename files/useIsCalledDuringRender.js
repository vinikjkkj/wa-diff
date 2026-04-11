__d(
  "useIsCalledDuringRender",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p() {
      var e = d(void 0);
      return c(function () {
        return (
          r("FBLogger")("comet_ui")
            .blameToPreviousFrame()
            .warn(
              "useIsCalledDuringRender should only be used for development purpose. It is implemented in a way that will not work correctly in production.",
            ),
          !1
        );
      }, []);
    }
    l.default = p;
  },
  98,
);
