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
        p = m[0],
        _ = m[1],
        f = c(new Map()),
        g = f[0],
        h = f[1],
        y = c(new Map()),
        C = y[0],
        b = y[1];
      function v(e) {
        e != null &&
          e.length > 0 &&
          o("WAWebSchemaDeviceList")
            .getDeviceListTable()
            .get(e)
            .then(function (e) {
              if (e == null) {
                _(!1);
                return;
              }
              (_(!0),
                Array.from(d).forEach(function (t) {
                  var n = t[0],
                    r = t[1],
                    o = e[r];
                  (o != null && g.set(n, o), h(new Map(g)));
                }));
            });
      }
      function S(e) {
        (s(e), v(e));
      }
      function R(e, t) {
        (t == null || t.length === 0 ? C.delete(e) : C.set(e, Number(t)),
          b(new Map(C)));
      }
      function L() {
        var e = Object.fromEntries(
          new Map(
            Array.from(C, function (e) {
              var t = e[0],
                n = e[1];
              return [d.get(t), n];
            }),
          ),
        );
        r("gkx")("26258") ||
          r("WAWebDebug")
            .setDeviceListEntry(l, e)
            .then(function () {
              (b(new Map()), v(l));
            });
      }
      var E = u.jsxs(
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
        k = u.jsx("form", {
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
                          return S(t.target.value);
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
                            placeholder: (t = g.get(r)) != null ? t : "",
                            value: (n = C.get(r)) != null ? n : "",
                            onChange: function (t) {
                              return R(r, t.target.value);
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
        I = C.size > 0,
        T = u.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          disabled: !(p && I),
          onClick: L,
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
              E,
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
                      k,
                      T,
                    ],
                  })
                : null,
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
