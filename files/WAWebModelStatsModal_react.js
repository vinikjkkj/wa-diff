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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.data,
        r = e.header,
        a,
        i;
      t[0] !== n
        ? ((a = n[0]),
          (i = babelHelpers.arrayLikeToArray(n).slice(1)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2]));
      var l;
      t[3] !== r || t[4] !== i
        ? ((l = i.map(function (e, t) {
            return u.createElement(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x9fslfs" },
                  1: { className: "xpvyfi4 x9fslfs x117nqv4" },
                }[!!r << 0],
                { key: t },
              ),
              e,
            );
          })),
          (t[3] = r),
          (t[4] = i),
          (t[5] = l))
        : (l = t[5]);
      var s = l,
        c,
        d;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x78zum5 x1q0g3np" }),
          (d = { className: "x13ie5k6 xjx09e3 x1hr2gdg" }),
          (t[6] = c),
          (t[7] = d))
        : ((c = t[6]), (d = t[7]));
      var m;
      t[8] !== a
        ? ((m = u.jsxs(
            "div",
            babelHelpers.extends({}, d, { children: [" ", a, " "] }),
          )),
          (t[8] = a),
          (t[9] = m))
        : (m = t[9]);
      var p;
      return (
        t[10] !== s || t[11] !== a || t[12] !== m
          ? ((p = u.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [m, s] }),
              a,
            )),
            (t[10] = s),
            (t[11] = a),
            (t[12] = m),
            (t[13] = p))
          : (p = t[13]),
        p
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.data,
        r = e.headers,
        a;
      t[0] !== r
        ? ((a = u.jsx(p, { data: [" "].concat(r), header: !0 }, "h")),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n ? ((l = n.map(f)), (t[2] = n), (t[3] = l)) : (l = t[3]);
      var s = l,
        c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x78zum5 x1iyjqo2 xdt5ytf" }), (t[4] = c))
        : (c = t[4]);
      var d;
      return (
        t[5] !== i || t[6] !== s
          ? ((d = u.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [i, s] }),
            )),
            (t[5] = i),
            (t[6] = s),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function f(e, t) {
      return u.jsx(p, { data: e }, t);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
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
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
