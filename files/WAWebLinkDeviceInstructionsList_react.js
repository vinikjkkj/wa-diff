__d(
  "WAWebLinkDeviceInstructionsList.react",
  [
    "WAWebEnvironment",
    "WAWebHybridRegGating",
    "WAWebRoundShape.react",
    "WAWebUISpacing",
    "react",
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
      var t = e.step,
        n = o("WAWebHybridRegGating").isHybridRegEnabled();
      return u.jsx(r("WAWebRoundShape.react"), {
        xstyle: [c.stepperContainer, n && c.stepperContainerThemed],
        children: u.jsx("div", {
          className: "x1f6kntn x1k70j0n x2fvf9 xzueoph xdwrcjd",
          children: t,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.instructions,
        a = t.instructionSource,
        i =
          o("WAWebHybridRegGating").isHybridRegEnabled() ||
          r("WAWebEnvironment").isWindows,
        l = n.map(function (e, t) {
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
              }[!!i << 0],
              {
                children: [
                  u.jsx(d, { step: t + 1 }),
                  u.jsx("div", { children: e }),
                ],
              },
            ),
            a + "_i#" + t,
          );
        });
      return u.jsxs(
        "ol",
        babelHelpers.extends(
          { id: "link-device-instructions-list" },
          (e || (e = r("stylex"))).props(
            c.list,
            c.listLineHeightOverride,
            o("WAWebUISpacing").uiMargin.all0,
          ),
          {
            children: [
              l,
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x10l6tqk x1i1rx1s x1vpr2pd x42x0ya x6s0dn4 xdj266r xsb47vp xat24cr x1gpu1cy x1vjfegm",
                    },
                    1: {
                      className:
                        "x10l6tqk x1i1rx1s x1vpr2pd x6s0dn4 xdj266r xsb47vp xat24cr x1gpu1cy x1vjfegm xs7vtfe",
                    },
                  }[!!i << 0],
                ),
              ),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
