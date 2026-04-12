__d(
  "useWAWebVoipWindowPopoutTooltipProps",
  ["WAWebVoipUiPopoutWindowContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef;
    function m() {
      var e = u(r("WAWebVoipUiPopoutWindowContext")),
        t = d(null);
      c(
        function () {
          (e.isContextInPopoutWindow || e.isDocPip) &&
            e.popoverPortalEl != null &&
            (t.current = e.popoverPortalEl);
        },
        [e.isContextInPopoutWindow, e.isDocPip, e.popoverPortalEl],
      );
      var n = e.isContextInPopoutWindow || e.isDocPip;
      return {
        tooltipAnchorRef: n && e.popoverPortalEl != null ? t : void 0,
        tooltipOwnerDocument: n && e.documentEl != null ? e.documentEl : void 0,
      };
    }
    l.default = m;
  },
  98,
);
