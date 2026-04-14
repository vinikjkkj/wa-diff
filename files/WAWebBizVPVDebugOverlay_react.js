__d(
  "WAWebBizVPVDebugOverlay.react",
  ["WAWebWamEnumContactType", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t,
        n,
        r = e.visibilityData,
        a = e.visible,
        i = d(0),
        l = i[0],
        u = i[1];
      c(
        function () {
          if (a) {
            var e = Date.now(),
              t,
              n = function () {
                (u(Date.now() - e), (t = window.setTimeout(n, 200)));
              };
            return (
              (t = window.setTimeout(n, 200)),
              function () {
                return window.clearTimeout(t);
              }
            );
          }
        },
        [a],
      );
      var m = a ? l : 0,
        p =
          r.contactType === o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
            ? "ENT"
            : r.contactType === o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
              ? "SMB"
              : "?",
        _ = (t = r.hsmTagStr) != null ? t : "none",
        f =
          r.messageBodyType != null && r.mmCarouselCardIndex != null
            ? "card[" + r.mmCarouselCardIndex + "]"
            : "msg",
        g = (n = r.messageId) != null ? n : "?";
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x1ey2m1c x1o0tod x47corl x10l6tqk xtijo5x x13vifvy xxbqhct x18f80mm x13jlqud x1uq2z3b x1k8cpsg",
                },
                1: {
                  className:
                    "xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x1ey2m1c x1o0tod x47corl x10l6tqk xtijo5x x13vifvy xxbqhct x15ihhs7 xisjqss x1hwcez3 x18jpft8",
                },
              }[!!a << 0],
            ),
          ),
          s.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "xbrszos xea3l6g x18isctg x2q3nzr x1awj2ng x1ey7xld x190qgfh x117nqv4 x1gxa6cn xa0aww2 x181vq82 x1uc92m x47corl x10l6tqk xxx7yvo xndqk7f x1fj9vlw x1q2oy4v xmfd7z5",
                },
                1: {
                  className:
                    "xbrszos xea3l6g x18isctg x2q3nzr x1awj2ng x1ey7xld x190qgfh x117nqv4 x1gxa6cn xa0aww2 x181vq82 x1uc92m x47corl x10l6tqk xxx7yvo xndqk7f x1fj9vlw x1q2oy4v x8trml7",
                },
              }[!!a << 0],
              {
                children:
                  "VPV " +
                  f +
                  " " +
                  p +
                  " " +
                  _ +
                  " " +
                  (a ? "VIS" : "HID") +
                  " " +
                  m +
                  "ms\n" +
                  g,
              },
            ),
          ),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
