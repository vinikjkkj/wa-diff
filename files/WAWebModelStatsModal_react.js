__d(
  "WAWebModelStatsModal.react",
  [
    "WALogger",
    "WAWeb-moment",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebModelStats",
    "WAWebWamMemoryStat",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = e.data,
        n = e.header,
        r = t[0],
        o = babelHelpers.arrayLikeToArray(t).slice(1),
        a = o.map(function (e, t) {
          return u.createElement(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "x9fslfs" },
                1: { className: "xpvyfi4 x9fslfs x117nqv4" },
              }[!!n << 0],
              { key: t },
            ),
            e,
          );
        });
      return u.jsxs(
        "div",
        {
          className: "x78zum5 x1q0g3np",
          children: [
            u.jsxs("div", {
              className: "x13ie5k6 xjx09e3 x1hr2gdg",
              children: [" ", r, " "],
            }),
            a,
          ],
        },
        r,
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.data,
        n = e.headers,
        r = u.jsx(p, { data: [" "].concat(n), header: !0 }, "h"),
        o = t.map(function (e, t) {
          return u.jsx(p, { data: e }, t);
        });
      return u.jsxs("div", {
        className: "x78zum5 x1iyjqo2 xdt5ytf",
        children: [r, o],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      var t = m(null),
        n = t[0],
        a = t[1];
      d(function () {
        o("WAWebWamMemoryStat")
          .getMemoryTableRows()
          .then(function (e) {
            e && a(e);
          })
          .catch(function (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error fetching stats",
                ])),
            );
          });
      }, []);
      var i = function () {
          return o("WAWebModalManager").ModalManager.close();
        },
        l = r("WAWebModelStats")(),
        s = l.collections,
        c = l.models,
        p = null;
      if (n != null && n.length) {
        var f = n.map(function (e) {
          var t = e.label,
            n = e.memory,
            o = e.uptime;
          return [
            t,
            Math.round(n) + "MB",
            r("WAWeb-moment")
              .duration(o * 1e3)
              .humanize(),
          ];
        });
        p = u.jsx(_, { headers: ["Memory", "Uptime"], data: f });
      }
      var g = { escape: i, "shift+?": i },
        h = u.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          onClick: i,
          children: r("WAWebFbtCommon")("Close"),
        });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: g,
        children: u.jsx("div", {
          children: u.jsx(o("WAWebModal.react").Modal, {
            title: "Model Stats",
            actions: h,
            children: u.jsxs("div", {
              className: "x1odjw0f x4k3uqp",
              children: [
                u.jsx(_, {
                  headers: ["Models", "Listeners", "Model Listeners"],
                  data: s.map(function (e) {
                    return [e.name, e.length, e.listeners, e.modelListeners];
                  }),
                }),
                u.jsx("div", { className: "x170jfvy" }),
                u.jsx(_, {
                  headers: ["Listeners"],
                  data: c.map(function (e) {
                    return [e.name, e.listeners];
                  }),
                }),
                u.jsx("div", { className: "x170jfvy" }),
                p,
              ],
            }),
          }),
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
