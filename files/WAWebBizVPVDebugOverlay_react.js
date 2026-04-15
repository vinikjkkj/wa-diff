__d(
  "WAWebBizVPVDebugOverlay.react",
  ["WAWebWamEnumContactType", "react", "react-compiler-runtime"],
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
        r = o("react-compiler-runtime").c(15),
        a = e.visibilityData,
        i = e.visible,
        l = d(0),
        u = l[0],
        m = l[1],
        p,
        _;
      (r[0] !== i
        ? ((p = function () {
            if (i) {
              var e = Date.now(),
                t,
                n = function () {
                  (m(Date.now() - e), (t = window.setTimeout(n, 200)));
                };
              return (
                (t = window.setTimeout(n, 200)),
                function () {
                  return window.clearTimeout(t);
                }
              );
            }
          }),
          (_ = [i]),
          (r[0] = i),
          (r[1] = p),
          (r[2] = _))
        : ((p = r[1]), (_ = r[2])),
        c(p, _));
      var f = i ? u : 0,
        g =
          a.contactType === o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
            ? "ENT"
            : a.contactType === o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
              ? "SMB"
              : "?",
        h = (t = a.hsmTagStr) != null ? t : "none",
        y =
          a.messageBodyType != null && a.mmCarouselCardIndex != null
            ? "card[" + a.mmCarouselCardIndex + "]"
            : "msg",
        C = (n = a.messageId) != null ? n : "?",
        b;
      r[3] !== i
        ? ((b = {
            0: {
              className:
                "xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x1ey2m1c x1o0tod x47corl x10l6tqk xtijo5x x13vifvy xxbqhct x18f80mm x13jlqud x1uq2z3b x1k8cpsg",
            },
            1: {
              className:
                "xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x1ey2m1c x1o0tod x47corl x10l6tqk xtijo5x x13vifvy xxbqhct x15ihhs7 xisjqss x1hwcez3 x18jpft8",
            },
          }[!!i << 0]),
          (r[3] = i),
          (r[4] = b))
        : (b = r[4]);
      var v;
      r[5] !== b
        ? ((v = s.jsx("div", babelHelpers.extends({}, b))),
          (r[5] = b),
          (r[6] = v))
        : (v = r[6]);
      var S;
      r[7] !== i
        ? ((S = {
            0: {
              className:
                "xbrszos xea3l6g x18isctg x2q3nzr x1awj2ng x1ey7xld x190qgfh x117nqv4 x1gxa6cn xa0aww2 x181vq82 x1uc92m x47corl x10l6tqk xxx7yvo xndqk7f x1fj9vlw x1q2oy4v xmfd7z5",
            },
            1: {
              className:
                "xbrszos xea3l6g x18isctg x2q3nzr x1awj2ng x1ey7xld x190qgfh x117nqv4 x1gxa6cn xa0aww2 x181vq82 x1uc92m x47corl x10l6tqk xxx7yvo xndqk7f x1fj9vlw x1q2oy4v x8trml7",
            },
          }[!!i << 0]),
          (r[7] = i),
          (r[8] = S))
        : (S = r[8]);
      var R =
          "VPV " +
          y +
          " " +
          g +
          " " +
          h +
          " " +
          (i ? "VIS" : "HID") +
          " " +
          f +
          "ms\n" +
          C,
        L;
      r[9] !== S || r[10] !== R
        ? ((L = s.jsx("div", babelHelpers.extends({}, S, { children: R }))),
          (r[9] = S),
          (r[10] = R),
          (r[11] = L))
        : (L = r[11]);
      var E;
      return (
        r[12] !== v || r[13] !== L
          ? ((E = s.jsxs(s.Fragment, { children: [v, L] })),
            (r[12] = v),
            (r[13] = L),
            (r[14] = E))
          : (E = r[14]),
        E
      );
    }
    l.default = m;
  },
  98,
);
