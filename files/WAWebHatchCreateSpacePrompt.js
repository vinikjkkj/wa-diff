__d(
  "WAWebHatchCreateSpacePrompt",
  ["fbt", "WATimeUtils", "WAWebComposeBoxActions"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        r = e.id.toString();
      o("WAWebComposeBoxActions").ComposeBoxActions.trigger(
        "flush_compose_contents_" + r,
      );
      var a =
          ((t = (n = e.getComposeContents()) == null ? void 0 : n.text) != null
            ? t
            : ""
          ).trim() !== "",
        i =
          e.active &&
          o("WAWebComposeBoxActions").ComposeBoxActions.getListenersCount(
            "paste_" + r,
          ) > 0;
      if (!i) {
        a ||
          e.setComposeContents({
            text: u(),
            timestamp: o("WATimeUtils").unixTime(),
          });
        return;
      }
      (a || o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, u()),
        o("WAWebComposeBoxActions").ComposeBoxActions.focus(e));
    }
    function u() {
      var e = s._(/*BTDS*/ "I want to create a space about").toString();
      return e + " ";
    }
    l.prefillHatchCreateSpacePrompt = e;
  },
  226,
);
