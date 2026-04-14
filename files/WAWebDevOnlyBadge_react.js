__d(
  "WAWebDevOnlyBadge.react",
  [
    "WAWebApiContact",
    "WAWebCopyToClipboard",
    "WAWebPill.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.label;
      return s.jsx(o("WAWebPill.react").LabelPill, {
        pillText: "DEV ONLY",
        children: t,
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    var c = "Copy Group ID";
    function d(e, t) {
      var n = e ? "Copy LID" : "Copy PN";
      return t ? n + " (Chat ID)" : n;
    }
    function m(e, t) {
      var n = [],
        a = e.isLid(),
        i = t != null ? t : "chat",
        l = "copy-" + i + "-id",
        u = e.isGroup() ? c : d(a, !0);
      n.push(
        s.jsx(
          r("WDSMenuItem.react"),
          {
            title: u,
            onPress: function () {
              o("WAWebCopyToClipboard").copyTextToClipboard(e.toString());
            },
            testid: void 0,
          },
          l,
        ),
      );
      var m = e.isRegularUser()
        ? o("WAWebApiContact").getAlternateUserWid(e)
        : null;
      if (m) {
        var p = d(!a),
          _ = "copy-alt-wid-id";
        n.push(
          s.jsx(
            r("WDSMenuItem.react"),
            {
              title: p,
              onPress: function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(m.toString());
              },
              testid: void 0,
            },
            _,
          ),
        );
      }
      return n;
    }
    ((l.DevOnlyBadge = u), (l.getDEVChatMenuOptions = m));
  },
  98,
);
