__d(
  "WAWebLinkDeviceInstructionsList.react",
  [
    "WAWebEnvironment",
    "WAWebHybridRegGating",
    "WAWebRoundShape.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        list: {
          listStyleType: "x3yw8vx",
          lineHeight: "xgif2c7",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          rowGap: "x1kb72lq",
          position: "x1n2onr6",
          $$css: !0,
        },
        listLineHeightOverride: { lineHeight: "x1o2sk6j", $$css: !0 },
        stepperContainer: {
          width: "xvy4d1p",
          height: "xxk0z11",
          flexShrink: "x2lah0s",
          boxShadow: "x1gnnqk1",
          backgroundColor: "x12peec7",
          color: "x1mqxbix",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xpypsur",
          borderInlineEndColor: "x1fe0zbt",
          borderBottomColor: "x249io5",
          borderInlineStartColor: "xtq6bvn",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        stepperContainerThemed: {
          backgroundColor: "x1280gxy",
          color: "x14ug900",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.step,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebHybridRegGating").isHybridRegEnabled()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l,
        s;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [c.stepperContainer, i && c.stepperContainerThemed]),
          (s = { className: "x1f6kntn x1k70j0n x2fvf9 xzueoph xdwrcjd" }),
          (t[1] = l),
          (t[2] = s))
        : ((l = t[1]), (s = t[2]));
      var d;
      return (
        t[3] !== n
          ? ((d = u.jsx(r("WAWebRoundShape.react"), {
              xstyle: l,
              children: u.jsx(
                "div",
                babelHelpers.extends({}, s, { children: n }),
              ),
            })),
            (t[3] = n),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(14),
        a = t.instructions,
        i = t.instructionSource,
        l,
        s,
        m,
        p;
      if (n[0] !== i || n[1] !== a) {
        var _ =
            o("WAWebHybridRegGating").isHybridRegEnabled() ||
            r("WAWebEnvironment").isWindows,
          f = a.map(function (e, t) {
            return u.jsxs(
              "li",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x1c3i2sq x1yc453h x78zum5 x7a106z x1aj3ljl x1jxy7q1 xoegz02 x1hql6x6",
                  },
                  1: {
                    className:
                      "x1c3i2sq x1yc453h x78zum5 x7a106z x1aj3ljl x1jxy7q1 xoegz02 x14ug900",
                  },
                }[!!_ << 0],
                {
                  children: [
                    u.jsx(d, { step: t + 1 }),
                    u.jsx("div", { children: e }),
                  ],
                },
              ),
              i + "_i#" + t,
            );
          });
        ((s = "link-device-instructions-list"),
          n[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (e || (e = r("stylex"))).props(
                c.list,
                c.listLineHeightOverride,
                o("WAWebUISpacing").uiMargin.all0,
              )),
              (n[6] = m))
            : (m = n[6]),
          (p = f),
          (l = {
            0: {
              className:
                "x10l6tqk x1i1rx1s x1vpr2pd x42x0ya x6s0dn4 xdj266r xsb47vp xat24cr x1gpu1cy x1vjfegm",
            },
            1: {
              className:
                "x10l6tqk x1i1rx1s x1vpr2pd x6s0dn4 xdj266r xsb47vp xat24cr x1gpu1cy x1vjfegm xs7vtfe",
            },
          }[!!_ << 0]),
          (n[0] = i),
          (n[1] = a),
          (n[2] = l),
          (n[3] = s),
          (n[4] = m),
          (n[5] = p));
      } else ((l = n[2]), (s = n[3]), (m = n[4]), (p = n[5]));
      var g;
      n[7] !== l
        ? ((g = u.jsx("div", babelHelpers.extends({}, l))),
          (n[7] = l),
          (n[8] = g))
        : (g = n[8]);
      var h;
      return (
        n[9] !== s || n[10] !== m || n[11] !== p || n[12] !== g
          ? ((h = u.jsxs(
              "ol",
              babelHelpers.extends({ id: s }, m, { children: [p, g] }),
            )),
            (n[9] = s),
            (n[10] = m),
            (n[11] = p),
            (n[12] = g),
            (n[13] = h))
          : (h = n[13]),
        h
      );
    }
    l.default = m;
  },
  98,
);
