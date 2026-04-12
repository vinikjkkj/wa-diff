__d(
  "WAWebSentForAdminReviewFlow.react",
  [
    "$InternalEnum",
    "WAWebSentForAdminReviewDrawer.react",
    "WAWebSentForAdminReviewReportersDrawer.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = n("$InternalEnum").Mirrored(["SentForAdminReview", "ReportedMsg"]);
    function d(e) {
      var t = e.chat,
        n = e.onClose,
        a = e.ref,
        i = o("useWAWebFlow").useFlow(c.SentForAdminReview, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        l = i[0],
        d = i[1],
        m = u(null),
        p = m[0],
        _ = m[1];
      if (d.step == null) return null;
      var f;
      switch (d.step) {
        case c.SentForAdminReview: {
          var g = function (t) {
            (_(t), d.push(c.ReportedMsg));
          };
          f = s.jsx(
            r("WAWebSentForAdminReviewDrawer.react"),
            { chat: t, onClose: n, onMsgFooterClick: g },
            "rta-drawer-" + t.id.toString(),
          );
          break;
        }
        case c.ReportedMsg: {
          f =
            p != null
              ? s.jsx(
                  r("WAWebSentForAdminReviewReportersDrawer.react"),
                  {
                    msg: p,
                    onBack: function () {
                      return d.pop();
                    },
                  },
                  "rta-reporter-drawer-" + t.id.toString(),
                )
              : null;
          break;
        }
      }
      return s.jsx(l, {
        flow: d,
        ref: a,
        displayName: "SentForAdminReviewFlow",
        children: f,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
