__d(
  "WebBloksErrorRoot",
  ["WebBloksErrorRenderer", "WebBloksStyle", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.error;
      return s.jsxs("div", {
        className: c.errorRoot,
        children: [
          s.jsx("div", {
            className: c.errorText,
            children: "An error occurred. Please reload to try again.",
          }),
          null,
        ],
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    var c = o("WebBloksStyle").createStyles({
      errorRoot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      },
      errorText: { fontWeight: "bold" },
    });
    l.default = u;
  },
  98,
);
