__d(
  "WAWebSentForAdminReviewFlow.react",
  [
    "$InternalEnum",
    "WAWebSentForAdminReviewDrawer.react",
    "WAWebSentForAdminReviewReportersDrawer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = n("$InternalEnum").Mirrored(["SentForAdminReview", "ReportedMsg"]);
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chat,
        a = e.onClose,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (t[0] = l))
        : (l = t[0]);
      var d = o("useWAWebFlow").useFlow(c.SentForAdminReview, l),
        m = d[0],
        p = d[1],
        _ = u(null),
        f = _[0],
        g = _[1];
      if (p.step == null) return null;
      var h;
      e: switch (p.step) {
        case c.SentForAdminReview: {
          var y;
          t[1] !== p
            ? ((y = function (t) {
                (g(t), p.push(c.ReportedMsg));
              }),
              (t[1] = p),
              (t[2] = y))
            : (y = t[2]);
          var C = y,
            b;
          t[3] !== n.id
            ? ((b = n.id.toString()), (t[3] = n.id), (t[4] = b))
            : (b = t[4]);
          var v = "rta-drawer-" + b,
            S;
          (t[5] !== n || t[6] !== C || t[7] !== a || t[8] !== v
            ? ((S = s.jsx(
                r("WAWebSentForAdminReviewDrawer.react"),
                { chat: n, onClose: a, onMsgFooterClick: C },
                v,
              )),
              (t[5] = n),
              (t[6] = C),
              (t[7] = a),
              (t[8] = v),
              (t[9] = S))
            : (S = t[9]),
            (h = S));
          break e;
        }
        case c.ReportedMsg: {
          var R;
          (t[10] !== n || t[11] !== p || t[12] !== f
            ? ((R =
                f != null
                  ? s.jsx(
                      r("WAWebSentForAdminReviewReportersDrawer.react"),
                      {
                        msg: f,
                        onBack: function () {
                          return p.pop();
                        },
                      },
                      "rta-reporter-drawer-" + n.id.toString(),
                    )
                  : null),
              (t[10] = n),
              (t[11] = p),
              (t[12] = f),
              (t[13] = R))
            : (R = t[13]),
            (h = R));
        }
      }
      var L;
      return (
        t[14] !== m || t[15] !== h || t[16] !== p || t[17] !== i
          ? ((L = s.jsx(m, {
              flow: p,
              ref: i,
              displayName: "SentForAdminReviewFlow",
              children: h,
            })),
            (t[14] = m),
            (t[15] = h),
            (t[16] = p),
            (t[17] = i),
            (t[18] = L))
          : (L = t[18]),
        L
      );
    }
    l.default = d;
  },
  98,
);
