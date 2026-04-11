__d(
  "WAWebVoipNetworkConditionerOverlay.react",
  [
    "fbt",
    "WAWebVoipStackInterface",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = 1e3;
    function _() {
      var e = m(null),
        t = e[0],
        a = e[1];
      if (
        (d(function () {
          var e = !0,
            t = null,
            r = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var t = yield o(
                      "WAWebVoipStackInterface",
                    ).getVoipStackInterface();
                    if (!e || (t == null ? void 0 : t.type) !== "web") return;
                    var n = yield t.getNetworkConditionerState();
                    e && n != null && a(n);
                  } catch (e) {}
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return (
            r(),
            (t = window.setInterval(function () {
              r();
            }, p)),
            function () {
              ((e = !1), t != null && window.clearInterval(t));
            }
          );
        }, []),
        t == null)
      )
        return null;
      var i = t.isRxOn,
        l = t.isTxOn,
        c = t.rxParams,
        _ = t.txParams;
      return !l && !i
        ? null
        : u.jsxs("div", {
            className:
              "x10l6tqk xbssg55 x4brfc7 x11uqc5h x78zum5 xdt5ytf x129bwdz x1trrmfo x14r61f x47corl",
            children: [
              l &&
                u.jsxs("div", {
                  className:
                    "x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xpivpjv xct1zlm x1t7ytsu x1kfnm9f",
                  children: [
                    u.jsx("div", {
                      className: "x13m54ha",
                      children: u.jsx(r("WDSText.react"), {
                        type: "Body3Emphasized",
                        colorName: "persistentAlwaysWhite",
                        children: s._(/*BTDS*/ "Tx Network Conditioner ON"),
                      }),
                    }),
                    _ != null &&
                      _.length > 0 &&
                      u.jsx("div", {
                        className:
                          "x126k92a x1yn0g08 x1ey7xld x1ncwhqj xwn7fz2",
                        children: u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "persistentAlwaysWhite",
                          children: _,
                        }),
                      }),
                  ],
                }),
              i &&
                u.jsxs("div", {
                  className:
                    "x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xpivpjv xct1zlm x1t7ytsu x1jrd8bj",
                  children: [
                    u.jsx("div", {
                      className: "x13m54ha",
                      children: u.jsx(r("WDSText.react"), {
                        type: "Body3Emphasized",
                        colorName: "persistentAlwaysWhite",
                        children: s._(/*BTDS*/ "Rx Network Conditioner ON"),
                      }),
                    }),
                    c != null &&
                      c.length > 0 &&
                      u.jsx("div", {
                        className:
                          "x126k92a x1yn0g08 x1ey7xld x1ncwhqj xwn7fz2",
                        children: u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "persistentAlwaysWhite",
                          children: c,
                        }),
                      }),
                  ],
                }),
            ],
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
