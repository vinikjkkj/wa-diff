__d(
  "WebBloksToast",
  ["WebBloksAbstractButton", "WebBloksStyle", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = o("WebBloksStyle").createStyles({
        root: {
          backgroundColor: "#262626",
          flexDirection: "row",
          minHeight: "44px",
          padding: "0 16px!important",
          width: "100%",
        },
        messageContainer: {
          flexGrow: 1,
          flexShrink: 1,
          justifyContent: "center",
          minWidth: "200px",
        },
        message: {
          color: "#fff",
          fontSize: "14px",
          lineHeight: "18px",
          maxHeight: "72px",
          overflow: "hidden",
          padding: "12px 0!important",
        },
      });
    function d(e) {
      var t = e.actionText,
        n = e.onActionClick,
        a = e.text,
        i = u(
          function (e) {
            (e.preventDefault(), n && n(e));
          },
          [n],
        );
      return s.jsxs("div", {
        className: o("WebBloksStyle").classNames(c.root),
        children: [
          s.jsx("div", {
            className: c.messageContainer,
            children: s.jsx("p", { className: c.message, children: a }),
          }),
          t != null &&
            s.jsx(r("WebBloksAbstractButton"), { title: t, onClick: i }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
