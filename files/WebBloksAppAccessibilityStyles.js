__d(
  "WebBloksAppAccessibilityStyles",
  ["WebBloksStyle", "WebDriverConfig"],
  function (t, n, r, o, a, i, l) {
    var e = "2px solid #0064E0",
      s = o("WebBloksStyle").createStyles({
        noOutlines: function (t) {
          var e;
          return ((e = {}), (e[t + " *"] = { outline: "none" }), e);
        },
      }),
      u = o("WebBloksStyle").createStyles({
        outlines: function (n) {
          var t;
          return (
            (t = {}),
            (t[n + " *"] = { outline: "none", outlineOffset: "-1px" }),
            (t[n + ' *[tabindex="0"]:focus'] = { outline: e }),
            (t[n + " *[role=button]:focus"] = { outline: e }),
            (t[n + " *[role=link]:focus"] = { outline: e }),
            (t[n + " a:focus"] = { outline: e }),
            t
          );
        },
      }),
      c = o("WebBloksStyle").createStylesIfSupported(
        { type: "selector", selector: ":focus-visible" },
        {
          outlines: function (n) {
            var t;
            return (
              (t = {}),
              (t[":root " + n + " *:focus"] = { outline: "none" }),
              (t[n + ' *[tabindex="0"]:focus-visible'] = { outline: e }),
              (t[n + " *[role=button]:focus-visible"] = { outline: e }),
              (t[n + " *[role=link]:focus-visible"] = { outline: e }),
              (t[n + " a:focus-visible"] = { outline: e }),
              t
            );
          },
        },
      ),
      d = {
        outlines: r("WebDriverConfig").isJestE2ETestRun
          ? s.noOutlines
          : o("WebBloksStyle").classNames(u.outlines, c.outlines),
      };
    ((l.FOCUS_OUTLINE = e), (l.ACCESSIBILITY_STYLES = d));
  },
  98,
);
