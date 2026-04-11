__d(
  "WDSShortcut.react",
  ["UserAgent", "WALogger", "WDSText.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          display: "x1rg5ohu",
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "x1i5p2am",
          borderStartEndRadius: "x1whfx0g",
          borderEndEndRadius: "xr2y4jy",
          borderEndStartRadius: "x1ihp6rs",
          $$css: !0,
        },
        containerInverse: { backgroundColor: "xjbqb8w", $$css: !0 },
        applyMacFont: { fontFamily: "x1ntu5ad", $$css: !0 },
        macLetterSpacing: { letterSpacing: "xl5zsmt", $$css: !0 },
        padding: function (t) {
          return [
            {
              paddingInlineStart: t != null ? "xnvo3vl" : t,
              paddingInlineEnd: t != null ? "x120eax6" : t,
              $$css: !0,
            },
            {
              "--x-paddingInlineStart": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-paddingInlineEnd": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        noBreak: { wordBreak: "xdnwjd9", $$css: !0 },
      },
      m = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb";
    function p(t) {
      var n,
        a = t.modifiers,
        i = t.shortcutKeys,
        l = t.inverse,
        u = l === void 0 ? !1 : l,
        p = t.platform,
        _ = p === void 0 ? m : p;
      if (_ !== "macWeb" && _ !== "windowsWeb") {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WDSShortcut] Unsupported platform",
              ])),
          )
          .tags("wds")
          .devConsole(t)
          .sendLogs("wds-shortcut-unsupported-platform");
        return;
      }
      var f =
          (n =
            a == null
              ? void 0
              : a.map(function (e) {
                  return (function (e) {
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Super" &&
                      e[1] === "macWeb"
                    )
                      return "\u2318";
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Super" &&
                      e[1] === "windowsWeb"
                    )
                      return "Win";
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Option" &&
                      e[1] === "macWeb"
                    )
                      return "\u2325";
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Option" &&
                      e[1] === "windowsWeb"
                    )
                      return "Alt";
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Shift" &&
                      e[1] === "macWeb"
                    )
                      return "\u21E7";
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Shift" &&
                      e[1] === "windowsWeb"
                    )
                      return "Shift";
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Control" &&
                      e[1] === "macWeb"
                    )
                      return "\u2303";
                    if (
                      Array.isArray(e) &&
                      e.length === 2 &&
                      e[0] === "Control" &&
                      e[1] === "windowsWeb"
                    )
                      return "Ctrl";
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })([e, _]);
                })) != null
            ? n
            : [],
        g = [].concat(f, i).map(function (e, t) {
          return _ === "windowsWeb" && t !== 0 ? "+" + e : e;
        }),
        h = u ? "none" : "4px";
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(
            d.padding(h),
            u ? d.containerInverse : d.container,
            _ === "macWeb" && d.applyMacFont,
          ),
          {
            children: c.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: u ? "contentDisabled" : "contentDeemphasized",
              platform: _,
              dir: "auto",
              xstyle: [d.noBreak, _ === "macWeb" && d.macLetterSpacing],
              children: g,
            }),
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
