__d(
  "WAWebMdDebugDeviceList",
  [
    "WAWebButton.react",
    "WAWebDebug",
    "WAWebMdDebugSettingStyles",
    "WAWebMdDebugSettingTitle",
    "WAWebSchemaDeviceList",
    "WAWebText.react",
    "gkx",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = new Map([
        ["ts", "timestamp"],
        ["expected_ts", "expectedTs"],
        ["expected_ts_update_ts", "expectedTsUpdateTs"],
        ["expected_ts_last_device_job_ts", "expectedTsLastDeviceJobTs"],
      ]);
    function m() {
      var t = c(!1),
        n = t[0],
        a = t[1],
        i = c(""),
        l = i[0],
        s = i[1],
        m = c(!1),
        _ = m[0],
        f = m[1],
        g = c(new Map()),
        h = g[0],
        y = g[1],
        C = c(new Map()),
        b = C[0],
        v = C[1];
      function S(e) {
        e != null &&
          e.length > 0 &&
          o("WAWebSchemaDeviceList")
            .getDeviceListTable()
            .get(e)
            .then(function (e) {
              if (e == null) {
                f(!1);
                return;
              }
              f(!0);
              var t = new Map(h);
              (Array.from(d).forEach(function (n) {
                var r = n[0],
                  o = n[1],
                  a = e[o];
                a != null && t.set(r, a);
              }),
                y(t));
            });
      }
      function R(e) {
        (s(e), S(e));
      }
      function L(e, t) {
        var n = new Map(b);
        (t == null || t.length === 0 ? n.delete(e) : n.set(e, Number(t)), v(n));
      }
      function E() {
        var e = Object.fromEntries(
          new Map(
            Array.from(b, function (e) {
              var t = e[0],
                n = e[1];
              return [d.get(t), n];
            }),
          ),
        );
        r("gkx")("16539") &&
          r("WAWebDebug")
            .setDeviceListEntry(l, e)
            .then(function () {
              (v(new Map()), S(l));
            });
      }
      var k = u.jsxs(
          "span",
          babelHelpers.extends(
            { role: "button" },
            (e || (e = r("stylex"))).props(
              o("WAWebMdDebugSettingStyles").styles.propsButton,
            ),
            {
              onClick: function () {
                return a(!n);
              },
              children: [
                u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    e.props(
                      o("WAWebMdDebugSettingStyles").styles.propsButtonIcon,
                    ),
                    { children: n ? "\u25BC" : "\u25BA" },
                  ),
                ),
                n ? "Hide" : "Show",
              ],
            },
          ),
        ),
        I = u.jsx("form", {
          children: u.jsx("table", {
            style: { width: "50%" },
            children: u.jsxs("tbody", {
              children: [
                u.jsxs("tr", {
                  children: [
                    u.jsx("td", { children: "User ID" }),
                    u.jsx("td", {
                      children: u.jsx("input", {
                        value: l,
                        placeholder: "12015559607",
                        onChange: function (t) {
                          return R(t.target.value);
                        },
                      }),
                    }),
                  ],
                }),
                Array.from(d, function (e) {
                  var t,
                    n,
                    r = e[0],
                    o = e[1];
                  return u.jsxs(
                    "tr",
                    {
                      children: [
                        u.jsx("td", { children: r }),
                        u.jsx("td", {
                          children: u.jsx("input", {
                            type: "number",
                            placeholder: (t = h.get(r)) != null ? t : "",
                            value: (n = b.get(r)) != null ? n : "",
                            onChange: function (t) {
                              return L(r, t.target.value);
                            },
                          }),
                        }),
                      ],
                    },
                    r,
                  );
                }),
              ],
            }),
          }),
        }),
        T = b.size > 0,
        D = u.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          disabled: !(_ && T),
          onClick: E,
          children: "Save",
        });
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          e.props(o("WAWebMdDebugSettingStyles").styles.settingItem),
          {
            children: [
              u.jsx(r("WAWebMdDebugSettingTitle"), { title: "Device List" }),
              k,
              n
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsxs("div", {
                        style: { margin: "5px" },
                        children: [
                          u.jsx(o("WAWebText.react").WAWebTextSmall, {
                            as: "div",
                            children:
                              "To view all device list entries, navigate to [browser dev tools > Application > IndexedDB > model-storage > device-list].",
                          }),
                          u.jsx(o("WAWebText.react").WAWebTextSmall, {
                            as: "div",
                            children:
                              "Use the tool below to edit an entry. Existing fields in the table will be populated when a valid user ID has been set.",
                          }),
                        ],
                      }),
                      I,
                      D,
                    ],
                  })
                : null,
            ],
          },
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {}
    l.default = m;
  },
  98,
);
