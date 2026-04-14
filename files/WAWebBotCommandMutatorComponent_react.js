__d(
  "WAWebBotCommandMutatorComponent.react",
  ["WAWebClickable.react", "WAWebComposeBoxActions", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { link: { color: "x1ph7ams", $$css: !0 } };
    function c(e) {
      var t = e.children,
        n = t === void 0 ? "" : t,
        r = function () {
          o("WAWebComposeBoxActions").ComposeBoxActions.paste(
            null,
            String(n) + " ",
            { insertLeadingSpace: !0 },
          );
        };
      return s.jsx(o("WAWebClickable.react").Clickable, {
        as: "span",
        xstyle: u.link,
        onClick: r,
        children: n,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
