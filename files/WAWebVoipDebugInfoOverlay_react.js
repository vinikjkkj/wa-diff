__d(
  "WAWebVoipDebugInfoOverlay.react",
  [
    "WAWebDebugVoipInfo",
    "WAWebVoipStackInterface",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState,
      p = 1e3;
    function _() {
      var e = m(o("WAWebDebugVoipInfo").isVoipDebugInfoEnabled),
        t = e[0],
        a = e[1],
        i = m("none"),
        l = i[0],
        u = i[1],
        _ = m(""),
        f = _[0],
        g = _[1];
      d(function () {
        return o("WAWebDebugVoipInfo").subscribeToVoipDebugInfo(a);
      }, []);
      var h = c(function () {
        u(function (e) {
          return e === "none" ? "short" : e === "short" ? "full" : "none";
        });
      }, []);
      return (
        d(
          function () {
            var e = !0,
              t = null,
              r = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (l === "none") {
                      g("");
                      return;
                    }
                    try {
                      var t = yield o(
                        "WAWebVoipStackInterface",
                      ).getVoipStackInterface();
                      if (!e || (t == null ? void 0 : t.type) !== "web") return;
                      var n;
                      (l === "short"
                        ? (n = yield t.getShortStatisticString())
                        : (n = yield t.getDebugStatisticString()),
                        e &&
                          g(n.length > 0 ? n : "Statistic is not available\n"));
                    } catch (t) {
                      e && g("Error fetching statistics\n");
                    }
                  },
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })();
            return (
              r(),
              l !== "none" &&
                (t = window.setInterval(function () {
                  r();
                }, p)),
              function () {
                ((e = !1), t != null && window.clearInterval(t));
              }
            );
          },
          [l],
        ),
        t
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", {
                  className: "xixxii4 xugynej x67dgr1 x1rozsjd",
                  children: s.jsx("button", {
                    className:
                      "x67bb7w x1ypdohk xn6xy2s xhvdbge x1gxa6cn x1j8ymqv xa0aww2 x4tra6z xyi3aci xwf5gio x1p453bz x1suzm8a x1od0jb8 x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x78zum5 x6s0dn4 xl56j7k xpl7guj x1paxslp",
                    onClick: h,
                    type: "button",
                    children: s.jsx(r("WDSText.react"), {
                      type: "Body3Emphasized",
                      colorName: "persistentAlwaysWhite",
                      children: "\u2139\uFE0F",
                    }),
                  }),
                }),
                l !== "none" &&
                  f.length > 0 &&
                  s.jsx("div", {
                    className:
                      "xixxii4 xbssg55 x1o0tod xtijo5x x1ey2m1c x11uqc5h x1honnu5 xw2csxc x1odjw0f",
                    children: s.jsx("div", {
                      className: "x12w63v0 x1nzty39 x16ovd2e x12xbjc7",
                      children: s.jsx("div", {
                        className:
                          "x126k92a x1yn0g08 x1ey7xld x1ncwhqj xwn7fz2",
                        children: s.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "persistentAlwaysWhite",
                          children: f,
                        }),
                      }),
                    }),
                  }),
              ],
            })
          : null
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
