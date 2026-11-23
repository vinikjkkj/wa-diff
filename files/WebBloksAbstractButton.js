__d(
  "WebBloksAbstractButton",
  ["WebBloksComponentContext", "WebBloksStyle", "WebBloksTheme", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "accessibility_label",
        "badge_count",
        "className",
        "disabled",
        "icon",
        "role",
        "tabIndex",
        "title",
        "trailing",
      ],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        r = t.accessibility_label,
        a = t.badge_count,
        i = t.className,
        l = t.disabled,
        s = l === void 0 ? !1 : l,
        c = t.icon,
        m = t.role,
        p = m === void 0 ? "button" : m,
        _ = t.tabIndex,
        f = _ === void 0 ? 0 : _,
        g = t.title,
        h = t.trailing,
        y = babelHelpers.objectWithoutPropertiesLoose(t, e),
        C = o("WebBloksComponentContext").useWebBloksContext(),
        b = C.objectSet;
      if (c == null && g == null) return null;
      var v = d.abstractButton,
        S = g == null,
        R = (n = g != null ? g : r) != null ? n : "",
        L = null;
      if (c != null) {
        var E = b.environment,
          k = E.AssetRenderer,
          I = E.logger;
        if (!k)
          I.mustfix(
            "Trying to render an asset, but AssetRenderer is not defined for %s",
            JSON.stringify(c),
          );
        else {
          var T = {};
          (R && ((T.alt = ""), S || (T.className = d.marginRight4)),
            (L = u.jsx(k, babelHelpers.extends({ src: c }, T))));
        }
      }
      var D = function (t) {
        if (!(s || t.target !== t.currentTarget)) {
          if (y.onKeyDown != null) {
            y.onKeyDown(t);
            return;
          }
          (t.key === "Enter" || t.key === " ") &&
            (t.preventDefault(), t.currentTarget.click());
        }
      };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(
            "div",
            babelHelpers.extends({ role: p, tabIndex: s ? -1 : f }, y, {
              "aria-disabled": s || void 0,
              onClick: s ? void 0 : y.onClick,
              onClickCapture: s ? void 0 : y.onClickCapture,
              onKeyUp: s ? void 0 : y.onKeyUp,
              onKeyDown: D,
              className: o("WebBloksStyle").classNames(
                h === !0 ? d.TrailingButton : "",
                v,
                i,
                s ? d.disabled : null,
              ),
              children: [
                L,
                S
                  ? u.jsx("span", {
                      className: d.abstractButton + "_accessible_elem",
                      children: R,
                    })
                  : R,
              ],
            }),
          ),
          a != null && a > 0 ? a : void 0,
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = o("WebBloksStyle").createStyles({
      disabled: {
        color: o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        cursor: "default",
      },
      TrailingButton: {
        backgroundColor: "transparent",
        border: "none",
        color: "rgb(23, 99, 207)",
      },
      marginRight4: { marginRight: 4 },
      abstractButton: function (t) {
        var e;
        return (
          (e = {}),
          (e[t] = {
            cursor: "pointer",
            display: "inline-block",
            textDecoration: "none",
            whiteSpace: "nowrap",
            padding: "1px 6px",
          }),
          (e[".gecko " + t + ":focus"] = {
            outline: "1px dotted #3b5998",
            outlineColor: "invert",
          }),
          (e[t + ":hover"] = { textDecoration: "none" }),
          (e[t + " + " + t] = { marginLeft: 4 }),
          (e[t + "_accessible_elem"] = {
            clip: "rect(1px, 1px, 1px, 1px)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            whiteSpace: "nowrap",
            width: 1,
          }),
          e
        );
      },
    });
    l.default = c;
  },
  98,
);
