__d(
  "useWAWebVoipWindowPopoutTooltipProps",
  ["WAWebVoipUiPopoutWindowContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef;
    function m() {
      var e = o("react-compiler-runtime").c(8),
        t = u(r("WAWebVoipUiPopoutWindowContext")),
        n = d(null),
        a,
        i;
      (e[0] !== t.isContextInPopoutWindow ||
      e[1] !== t.isDocPip ||
      e[2] !== t.popoverPortalEl
        ? ((a = function () {
            (t.isContextInPopoutWindow || t.isDocPip) &&
              t.popoverPortalEl != null &&
              (n.current = t.popoverPortalEl);
          }),
          (i = [t.isContextInPopoutWindow, t.isDocPip, t.popoverPortalEl]),
          (e[0] = t.isContextInPopoutWindow),
          (e[1] = t.isDocPip),
          (e[2] = t.popoverPortalEl),
          (e[3] = a),
          (e[4] = i))
        : ((a = e[3]), (i = e[4])),
        c(a, i));
      var l = t.isContextInPopoutWindow || t.isDocPip,
        s = l && t.popoverPortalEl != null ? n : void 0,
        m = l && t.documentEl != null ? t.documentEl : void 0,
        p;
      return (
        e[5] !== s || e[6] !== m
          ? ((p = { tooltipAnchorRef: s, tooltipOwnerDocument: m }),
            (e[5] = s),
            (e[6] = m),
            (e[7] = p))
          : (p = e[7]),
        p
      );
    }
    l.default = m;
  },
  98,
);
